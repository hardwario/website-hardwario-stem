#!/usr/bin/env node
/**
 * Compares every translated page against its English source and fails on
 * structural drift.
 *
 * `npm run build` only catches broken links. It will happily ship a page that
 * lost a table row, dropped an image or had a code block translated — this
 * catches those.
 *
 *   node scripts/verify-i18n.mjs                 # check the cs locale
 *   node scripts/verify-i18n.mjs --locale cs -v  # list every page, not just failures
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const INSTANCES = {
  stem: 'docusaurus-plugin-content-docs',
  projects: 'docusaurus-plugin-content-docs-projects',
  'mini-course': 'docusaurus-plugin-content-docs-mini-course',
};

const FENCE = '`'.repeat(3);

/**
 * git core.autocrlf hands CRLF to the working tree on Windows while the
 * translation script writes LF, so normalise before comparing anything.
 */
const normalise = (text) => text.split('\r\n').join('\n');

/** Counts that must survive translation unchanged. */
function shape(text) {
  return {
    'code fences': text.split(FENCE).length - 1,
    imports: (text.match(/^import /gm) || []).length,
    headings: (text.match(/^#{1,6} /gm) || []).length,
    images: (text.match(/!\[[^\]]*\]\(/g) || []).length,
    'table rows': (text.match(/^\s*\|/gm) || []).length,
    'admonition markers': (text.match(/^:::/gm) || []).length,
    'jsx tags': (text.match(/<\/?[A-Z][A-Za-z]*/g) || []).length,
    'html tags': (text.match(/<\/?(?:div|details|summary|br|img|a|p|span|table|tr|td|th)\b/gi) || []).length,
  };
}

/**
 * Link targets, with relative asset paths resolved to the file they point at.
 *
 * The translation script rewrites relative image/asset paths so they reach back
 * into the English source tree, so the raw strings legitimately differ between
 * the two files — what has to match is which file each one lands on.
 */
function linkTargets(text, fileDir) {
  return (text.match(/\]\(([^)\s]+)/g) || [])
    .map((m) => m.slice(2))
    .map((url) => {
      if (/^(?:[a-z][a-z0-9+.-]*:|\/|#|@site)/i.test(url)) return url;
      const bare = url.split(/[?#]/)[0];
      if (/\.mdx?$/i.test(bare) || !/\.[a-z0-9]{2,5}$/i.test(bare)) return url;
      return path.resolve(fileDir, bare);
    })
    .sort();
}

/**
 * A translated page may link to the same thing in its own language, so these
 * differences are not drift and are folded away before comparing:
 * - the store's Czech storefront (www.hardwario.store/cz/…; it has /cz/ and /de/ only),
 * - www.hardwario.com's page in the locale (/cs/…),
 * - a Wikipedia article in the reader's language (the title is localized too, so any
 *   Wikipedia link stands for any other),
 * - this site's own pages with the locale prefix (/cs/projects/… is /projects/… in cs),
 * - a trailing slash, which Workers static assets add anyway.
 */
function sameTarget(url, locale) {
  let u = url
    .replace(new RegExp(`^(https://www\\.hardwario\\.store)/(?:cz|de)(?=[/?#]|$)`), '$1')
    .replace(new RegExp(`^(https://www\\.hardwario\\.com)/${locale}(?=[/?#]|$)`), '$1')
    .replace(new RegExp(`^/${locale}(?=/)`), '');
  if (/^https?:\/\/[a-z-]+\.(?:m\.)?wikipedia\.org\/wiki\//i.test(u)) return 'wikipedia';
  return u.replace(/\/(?=[?#]|$)/, '');
}

/**
 * A relative asset that resolves inside the translation tree is the localized copy
 * of the English one (a Czech screenshot), so it counts as the English path.
 */
const englishAsset = (abs, locale) => {
  const m = abs.split(path.sep).join('/').match(new RegExp(`/i18n/${locale}/([^/]+)/current/(.*)$`));
  if (!m) return abs;
  const dir = Object.keys(INSTANCES).find((key) => INSTANCES[key] === m[1]);
  return dir ? path.join(ROOT, dir, m[2]) : abs;
};

const frontMatterSlug = (text) => (text.match(/^slug:\s*(.+)$/m) || [])[1];

/**
 * A message a reader sees (a notification text in a Node-RED function) may be
 * translated, so string literals with a space in them are masked before code is
 * compared. Topics, keys and other identifiers have no spaces and stay checked.
 */
const maskMessages = (code) => code.replace(/"[^"\n]*\s[^"\n]*"/g, '"…"');

/**
 * Pages whose translation legitimately carries more images than the source: the
 * Czech Blynk walkthroughs have screenshots no English page has yet (they are
 * flagged for re-capture in website-admin TODO.md). The number is exact, so any
 * further change still fails.
 */
const EXTRA_IMAGES = {
  cs: {
    'projects/button-for-parents.md': 9,
    'projects/im-ok-button.md': 9,
  },
};

/** Fenced code content must come through byte for byte. */
function codeBlocks(text) {
  const out = [];
  const lines = text.split('\n');
  let open = false;
  let buffer = [];
  for (const line of lines) {
    if (/^\s*(?:`{3,}|~{3,})/.test(line)) {
      if (open) {
        out.push(buffer.join('\n'));
        buffer = [];
      }
      open = !open;
      continue;
    }
    if (open) buffer.push(line);
  }
  return out;
}

function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (/\.mdx?$/.test(entry.name)) out.push(full);
  }
  return out;
}

function main() {
  const argv = process.argv.slice(2);
  const locale = argv.includes('--locale') ? argv[argv.indexOf('--locale') + 1] : 'cs';
  const verbose = argv.includes('-v') || argv.includes('--verbose');

  let checked = 0;
  let missing = 0;
  const problems = [];
  const perSection = new Map();

  for (const [dir, instance] of Object.entries(INSTANCES)) {
    const section = { total: 0, done: 0 };
    perSection.set(dir, section);
    for (const abs of walk(path.join(ROOT, dir))) {
      section.total += 1;
      {
        const rel = path.relative(path.join(ROOT, dir), abs).split(path.sep).join('/');
        if (fs.existsSync(path.join(ROOT, 'i18n', locale, instance, 'current', rel))) {
          section.done += 1;
        }
      }
      const rel = path.relative(path.join(ROOT, dir), abs).split(path.sep).join('/');
      const source = `${dir}/${rel}`;
      const target = path.join(ROOT, 'i18n', locale, instance, 'current', rel);

      if (!fs.existsSync(target)) {
        missing += 1;
        continue;
      }
      checked += 1;

      const en = normalise(fs.readFileSync(abs, 'utf8'));
      const cs = normalise(fs.readFileSync(target, 'utf8'));
      const found = [];

      const [sa, sb] = [shape(en), shape(cs)];
      const extraImages = (EXTRA_IMAGES[locale] || {})[source] || 0;
      for (const key of Object.keys(sa)) {
        const expected = key === 'images' ? sa[key] + extraImages : sa[key];
        if (sb[key] !== expected) found.push(`${key}: en=${sa[key]} cs=${sb[key]}`);
      }

      const slugEn = frontMatterSlug(en);
      const slugCs = frontMatterSlug(cs);
      if (slugEn !== slugCs) found.push(`slug changed: "${slugEn}" -> "${slugCs}"`);

      const [la, lb] = [
        linkTargets(en, path.dirname(abs)).map((url) => sameTarget(url, locale)),
        linkTargets(cs, path.dirname(target)).map((url) => sameTarget(englishAsset(url, locale), locale)),
      ];
      const lost = la.filter((l) => !lb.includes(l));
      if (lost.length) found.push(`link targets changed: ${lost.slice(0, 3).join(', ')}`);

      const [ca, cb] = [codeBlocks(en), codeBlocks(cs)];
      if (ca.length === cb.length) {
        const touched = ca.filter((block, i) => maskMessages(block) !== maskMessages(cb[i])).length;
        if (touched) found.push(`${touched} code block(s) modified`);
      }

      if (found.length) problems.push({ source, found });
      else if (verbose) console.log(`ok       ${source}`);
    }
  }

  for (const { source, found } of problems) {
    console.error(`PROBLEM  ${source}`);
    for (const line of found) console.error(`         ${line}`);
  }

  console.log(
    `\n${checked} translated page(s) checked, ${problems.length} with drift, ${missing} not translated yet.`,
  );

  // Informational only. Half-translated sections build fine, but they are worth
  // seeing: a section is easier to review and sign off in one piece.
  const partial = [...perSection.entries()].filter(
    ([, s]) => s.done > 0 && s.done < s.total,
  );
  if (partial.length) {
    console.log('\nPartially translated section(s):');
    for (const [dir, s] of partial) {
      console.log(`  ${dir}: ${s.done}/${s.total} pages`);
    }
  }

  if (problems.length) process.exitCode = 1;
}

main();
