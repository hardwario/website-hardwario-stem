// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HARDWARIO STEM',
  tagline: 'STEM learning platform for schools',
  url: 'https://stem.hardwario.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

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
          editUrl: 'https://github.com/hardwario/stem-website/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
        editUrl: 'https://github.com/hardwario/stem-website/edit/main',
      }),
    ],
    [
      '@docusaurus/plugin-content-docs',
      ({
        id: 'lekce-iot',
        path: 'lekce-iot',
        routeBasePath: 'lekce-iot',
        sidebarPath: require.resolve('./sidebars-lekce-iot.js'),
        editUrl: 'https://github.com/hardwario/stem-website/edit/main',
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
      navbar: {
        logo: {
          alt: 'HARDWARIO Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
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
            to: '/lekce-iot/',
            label: 'LEKCE IOT',
            position: 'left',
            activeBaseRegex: `/lekce-iot/`,
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/hardwario/stem-website',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: require('prism-react-renderer/themes/dracula'),
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          }
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
                to: 'https://hardwario.com',
              },
              {
                label: 'Store',
                to: 'https://www.hardwario.store',
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
        copyright: `Copyright © ${new Date().getFullYear()} HARDWARIO a.s. Co-financed by the Liberec Region. Built with Docusaurus.`,
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
        defaultMode: 'light', // Default to dark mode
        disableSwitch: false, // Allow switching themes
      },
    }),
    onBrokenLinks: 'log',
};

module.exports = config;

