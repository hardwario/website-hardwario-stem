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

  // Organization structured data (schema.org JSON-LD) — consistent across HARDWARIO sites
  headTags: [
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'HARDWARIO',
        legalName: 'HARDWARIO a.s.',
        url: 'https://www.hardwario.com',
        logo: 'https://stem.hardwario.com/img/logo.svg',
        description:
          'Czech manufacturer of industrial / wireless IoT (LPWAN) hardware and software.',
        address: { '@type': 'PostalAddress', addressCountry: 'CZ' },
        areaServed: 'Europe',
        sameAs: [
          'https://www.linkedin.com/company/13187032',
          'https://twitter.com/hardwario_en',
          'https://www.youtube.com/c/hardwario',
          'https://github.com/hardwario',
        ],
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
            label: 'MINI COURSE',
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
            label: 'PROJECTS',
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
                label: 'Twitter (EN)',
                href: 'https://twitter.com/hardwario_en',
              },
              {
                label: 'Twitter (CZ)',
                href: 'https://twitter.com/hardwario_cz',
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
        copyright: `Copyright © ${new Date().getFullYear()} HARDWARIO a.s. Built with Docusaurus.`,
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

