// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'introduction',
    'target-group-and-students-profile',
    'expected-results-and-evaluation-method',
    'lesson-review',
    'didactic-tools-and-environmental-demands',

    {
      type: 'category',
      label: 'L101: What is IoT',
      link: {
        type: 'doc',
        id: 'lesson-101/L101-what-is-iot',
      },
      collapsed: true,
      items: [
        'lesson-101/L101-introduction',
        'lesson-101/L101-theory',
        'lesson-101/L101-experiment',
        'lesson-101/L101-projects',
        'lesson-101/L101-presentation',
        'lesson-101/L101-assessment'
      ],
    },

    {
      type: 'category',
      label: 'L102: HARDWARIO TOWER IoT Kit',
      link: {
        type: 'doc',
        id: 'lesson-102/L102-hardwario-tower-iot-kit',
      },
      collapsed: true,
      items: [
        'lesson-102/L102-introduction',
        'lesson-102/L102-theory',
        'lesson-102/L102-experiment',
        'lesson-102/L102-projects',
        'lesson-102/L102-presentation',
        'lesson-102/L102-assessment'
      ],
    },

    {
      type: 'category',
      label: 'L103: IoT Push Button',
      link: {
        type: 'doc',
        id: 'lesson-103/L103-iot-push-button',
      },
      collapsed: true,
      items: [
        'lesson-103/L103-introduction',
        'lesson-103/L103-theory',
        'lesson-103/L103-experiment',
        'lesson-103/L103-projects',
        'lesson-103/L103-presentation',
        'lesson-103/L103-assessment'
      ],
    },

    {
      type: 'category',
      label: 'L104: IoT Temperature and Humidity Sensor',
      link: {
        type: 'doc',
        id: 'lesson-104/L104-iot-temperature-and-humidity-monitor',
      },
      collapsed: true,
      items: [
        'lesson-104/L104-introduction',
        'lesson-104/L104-theory',
        'lesson-104/L104-experiment',
        'lesson-104/L104-projects',
        'lesson-104/L104-presentation',
        'lesson-104/L104-assessment'
      ],
    },

    {
      type: 'category',
      label: 'L105: IoT Air Quality Monitor',
      link: {
        type: 'doc',
        id: 'lesson-105/L105-iot-indoor-air-quality-monitor',
      },
      collapsed: true,
      items: [
        'lesson-105/L105-introduction',
        'lesson-105/L105-theory',
        'lesson-105/L105-experiment',
        'lesson-105/L105-projects',
        'lesson-105/L105-presentation',
        'lesson-105/L105-assessment'
      ],
    },

    {
      type: 'category',
      label: 'L106: IoT Vibration Monitor',
      link: {
        type: 'doc',
        id: 'lesson-106/L106-iot-vibration-monitor',
      },
      collapsed: true,
      items: [
        'lesson-106/L106-introduction',
        'lesson-106/L106-theory',
        'lesson-106/L106-experiment',
        'lesson-106/L106-projects',
        'lesson-106/L106-presentation',
        'lesson-106/L106-assessment'
      ],
    },
    {
      type: 'category',
      label: 'L107: IoT Light Monitor',
      link: {
        type: 'doc',
        id: 'lesson-107/L107-iot-light-monitor',
      },
      collapsed: true,
      items: [
        'lesson-107/L107-introduction',
        'lesson-107/L107-theory',
        'lesson-107/L107-experiment',
        'lesson-107/L107-projects',
        'lesson-107/L107-presentation',
        'lesson-107/L107-assessment'

      ],
    },
    {
      type: 'category',
      label: 'L108: IoT Pulse Monitor',
      link: {
        type: 'doc',
        id: 'lesson-108/L108-iot-pulse-monitor',
      },
      collapsed: true,
      items: [
        'lesson-108/L108-introduction',
        'lesson-108/L108-theory',
        'lesson-108/L108-experiment',
        'lesson-108/L108-projects',
        'lesson-108/L108-presentation',
        'lesson-108/L108-assessment'

      ],
    },

    {
      type: 'category',
      label: 'L109: IoT Soil Monitor',
      link: {
        type: 'doc',
        id: 'lesson-109/L109-iot-soil-monitor',
      },
      collapsed: true,
      items: [
        'lesson-109/L109-introduction',
        'lesson-109/L109-theory',
        'lesson-109/L109-experiment',
        'lesson-109/L109-projects',
        'lesson-109/L109-presentation',
        'lesson-109/L109-assessment'
      ],
    },
    /*{
      type: 'category',
      label: 'Thingsboard',
      link: {
        type: 'doc',
        id: 'thingsboard/index',
      },
      collapsed: true,
      items: [

      ],
    }*/
  ],
};

module.exports = sidebars;
