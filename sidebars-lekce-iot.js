// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Lekce 1: Připrav se',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'lekce-1/nainstaluj-prostredi',
        'lekce-1/pripoj-dongle',
        'lekce-1/prehraj-firmware',
        'lekce-1/sparuj-modul',
      ],
    },
    {
      type: 'category',
      label: 'Lekce 2: Měř a vykresluj',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'lekce-2/napis-funkci-pro-pir-modul',
        'lekce-2/vytiskni-grafy-s-prubehem-mereni',
        'lekce-2/pripoj-dalsi-moduly',
      ],
    },
    {
      type: 'category',
      label: 'Lekce 3: Ukázat či neukázat?',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'lekce-3/sleduj-zpravy-v-playground',
        'lekce-3/pouzij-switch-pro-hodnoty',
        'lekce-3/vytiskni-text-jen-kdyz',
      ],
    },
    {
      type: 'category',
      label: 'Lekce 4: Světla!',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'lekce-4/pripoj-power-module',
        'lekce-4/rozsvit-led-pasek',
        'lekce-4/nadefinuj-barevne-efekty-led-pasku',
      ],
    },
    {
      type: 'category',
      label: 'Lekce 5: Vzhůru na net',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'lekce-5/nainstaluj-blynk-aplikace-zarid-si-ucet',
        'lekce-5/rozjed-komunikaci-hardwario-playground-a-blynk',
        'lekce-5/nastav-dashboard-v-blynk',
      ],
    },
  ],
};

module.exports = sidebars;
