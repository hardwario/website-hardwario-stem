# HARDWARIO STEM

The HARDWARIO STEM and projects site — [stem.hardwario.com](https://stem.hardwario.com).
Built with [Docusaurus 3](https://docusaurus.io), with several doc instances
(STEM, projects, mini-course) and i18n.

## Tech stack

- **Docusaurus 3** — React + MDX static site generator
- **Multi-instance docs** — `stem`, `projects`, `mini-course`
- **i18n** — localized content under `i18n/`
- **Netlify** — hosting

## Develop

```bash
npm install        # first time / after dependency changes (Node 18+)
npm start          # dev server → http://localhost:3000, hot reload
npm run build      # production build → build/ (fails on broken links)
npm run serve      # serve the production build locally
npm run clear      # clear the Docusaurus cache
```

## Project structure

```
docusaurus.config.js     # site config: plugin instances, navbar, footer, i18n, theme
sidebars-stem.js         # sidebars per instance
sidebars-projects.js
sidebars-mini-course.js
stem/                    # STEM content        (served at /stem/)
projects/                # projects content    (served at /projects/)
mini-course/             # mini-course content (served at /mini-course/)
i18n/                    # localized strings + translated content
src/                     # custom pages + CSS
static/                  # assets; reference images by absolute path (/img/…)
netlify.toml             # Netlify build config
```

See the `docusaurus-sites` skill in the website-admin repo for shared Docusaurus
guidance.

## Content

- Docs are **Markdown/MDX** inside the relevant instance directory (`stem/`,
  `projects/`, `mini-course/`) — preserve frontmatter.
- Add new pages to the matching `sidebars-<instance>.js`.
- Internal links are relative within an instance; **broken internal links fail the
  build** (`onBrokenLinks: 'throw'`).
- Images live in `static/`, referenced as `/img/…`.
- Localized content/strings live under `i18n/`.

## Deployment

Hosted on **Netlify** — **pushing to `main` auto-deploys** (Netlify runs the
build and publishes `build/`). After a push, confirm the live URL returns 200.
`editUrl` in `docusaurus.config.js` points "Edit this page" links at this repo.

---

Part of the [HARDWARIO websites](https://github.com/hardwario/website-admin) —
managed from the **website-admin** control repo (shared Claude Code commands,
skills, and environment). Content licensed under [CC BY-SA 4.0](LICENSE).
