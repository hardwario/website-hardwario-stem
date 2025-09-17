// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Lesson 1: Get started',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'lesson-1/install-the-environment',
        'lesson-1/connect-dongle',
        'lesson-1/pair-the-module',
        'lesson-1/flash-the-firmware',
      ],
    },
    {
      type: 'category',
      label: 'Lesson 2: Measure and draw',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'lesson-2/function-for-pir-module',
        'lesson-2/print-graphs',
        'lesson-2/connect-additional-modules',
      ],
    },
    {
      type: 'category',
      label: 'Lesson 3: To show or not to show?',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'lesson-3/monitor-messages-in-playground',
        'lesson-3/use-switch-for-values',
        'lesson-3/print-text-only-when',
      ],
    },
    {
      type: 'category',
      label: 'Lesson 4: Lights!',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'lesson-4/connect-the-power-module',
        'lesson-4/turn-on-the-led-strip',
        'lesson-4/define-color-effects',
      ],
    },
    {
      type: 'category',
      label: 'Lesson 5: Up to the net',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'lesson-5/install-blynk',
        'lesson-5/start-communication',
        'lesson-5/set-up-dashboard',
      ],
    },
  ],
};

module.exports = sidebars;
