// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HARDWARIO STEM',
  tagline: 'STEM learning platform for schools',
  url: 'https://stem.hardwario.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',

  // Identify this property as the learning website, with the legal company as
  // its publisher. This keeps search engines from confusing STEM with the
  // parent company's industrial-product site.
  headTags: [
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': 'https://stem.hardwario.com/#website',
        name: 'HARDWARIO STEM',
        url: 'https://stem.hardwario.com/',
        logo: 'https://stem.hardwario.com/img/logo.svg',
        description: 'STEM learning platform for schools using hands-on Internet of Things lessons and projects.',
        publisher: {
          '@type': 'Organization',
          '@id': 'https://www.hardwario.com/#organization',
          name: 'HARDWARIO a.s.',
          url: 'https://www.hardwario.com/',
        },
      }),
    },
  ],

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'cs'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      cs: {
        label: 'Čeština',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'stem',
          path: 'stem',
          sidebarPath: require.resolve('./sidebars-stem.js'),
          editUrl: 'https://github.com/hardwario/website-hardwario-stem/edit/main',
        },
        // Learning content lives in the three docs instances below; there is
        // no STEM blog. Avoid publishing an empty, indexable /blog route.
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          // Emit <lastmod> for freshness signals and keep Docusaurus boilerplate
          // out of the sitemap. Docusaurus emits one sitemap per locale, so the
          // cs URLs live in /cs/sitemap.xml — both are referenced from robots.txt.
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/search', '/markdown-page', '/cs/search', '/cs/markdown-page'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      ({
        id: 'projects',
        path: 'projects',
        routeBasePath: 'projects',
        sidebarPath: require.resolve('./sidebars-projects.js'),
        editUrl: 'https://github.com/hardwario/website-hardwario-stem/edit/main',
      }),
    ],
    [
      '@docusaurus/plugin-content-docs',
      ({
        id: 'mini-course',
        path: 'mini-course',
        routeBasePath: 'mini-course',
        sidebarPath: require.resolve('./sidebars-mini-course.js'),
        editUrl: 'https://github.com/hardwario/website-hardwario-stem/edit/main',
      }),
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1200,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
    require.resolve("docusaurus-plugin-image-zoom"),
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.jpg',
      navbar: {
        logo: {
          alt: 'HARDWARIO Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            to: '/mini-course/',
            label: 'Mini Course',
            position: 'left',
            activeBaseRegex: `/mini-course/`,
          },
          {
            to: '/stem/',
            label: 'STEM',
            position: 'left',
            activeBaseRegex: `/stem/`,
          },
          {
            to: '/projects/',
            label: 'Projects',
            position: 'left',
            activeBaseRegex: `/projects/`,
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/hardwario/website-hardwario-stem',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        }
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Sites',
            items: [
              {
                label: 'Homepage',
                href: 'https://www.hardwario.com',
              },
              {
                label: 'Store',
                href: 'https://www.hardwario.store',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Forum',
                href: 'https://forum.hardwario.com',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/hardwario',
              },
              {
                label: 'X (Twitter) (EN)',
                href: 'https://x.com/hardwario_en',
              },
              {
                label: 'X (Twitter) (CZ)',
                href: 'https://x.com/hardwario_cz',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/hardwario',
              },
              {
                label: 'GitLab',
                href: 'https://gitlab.hardwario.com',
              },
            ],
          },
        ],
        copyright: `<nav aria-label="Other HARDWARIO websites" style="margin-bottom:8px"><span class="footer-sites-label">Other HARDWARIO websites:</span> <a href="https://www.hardwario.com/" target="_blank" rel="noopener noreferrer">HARDWARIO.com</a> · <a href="https://docs.hardwario.com/" target="_blank" rel="noopener noreferrer">Docs</a> · <a href="https://hardwario.engineering/" target="_blank" rel="noopener noreferrer">Engineering</a> · <a href="https://hardwario.studio/" target="_blank" rel="noopener noreferrer">Studio</a> · <a href="https://hardwario.academy/" target="_blank" rel="noopener noreferrer">Academy</a></nav>Copyright © ${new Date().getFullYear()} HARDWARIO a.s.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      colorMode: {
        defaultMode: 'light', // Default to light mode
        disableSwitch: false, // Allow switching themes
      },
    }),
};

module.exports = config;
