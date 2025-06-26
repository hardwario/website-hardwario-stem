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
        id: 'L101/L101-what-is-iot',
      },
      collapsed: true,
      items: [
        'L101/L101-introduction',
        'L101/L101-theory',
        'L101/L101-experiment',
        'L101/L101-projects',
        'L101/L101-presentation',
        'L101/L101-assessment'
      ],
    },

    {
      type: 'category',
      label: 'L102: HARDWARIO TOWER IoT Kit',
      link: {
        type: 'doc',
        id: 'L102/L102-hardwario-tower-iot-kit',
      },
      collapsed: true,
      items: [
        'L102/L102-introduction',
        'L102/L102-theory',
        'L102/L102-experiment',
        'L102/L102-projects',
        'L102/L102-presentation',
        'L102/L102-assessment'
      ],
    },

    {
      type: 'category',
      label: 'L103: IoT Push Button',
      link: {
        type: 'doc',
        id: 'L103/L103-iot-push-button',
      },
      collapsed: true,
      items: [
        'L103/L103-introduction',
        'L103/L103-theory',
        'L103/L103-experiment',
        'L103/L103-projects',
        'L103/L103-presentation',
        'L103/L103-assessment'
      ],
    },

    {
      type: 'category',
      label: 'L104: IoT Temperature and Humidity Sensor',
      link: {
        type: 'doc',
        id: 'L104/L104-iot-temperature-and-humidity-monitor',
      },
      collapsed: true,
      items: [
        'L104/L104-introduction',
        'L104/L104-theory',
        'L104/L104-experiment',
        'L104/L104-projects',
        'L104/L104-presentation',
        'L104/L104-assessment'
      ],
    },

    {
      type: 'category',
      label: 'L105: IoT Air Quality Monitor',
      link: {
        type: 'doc',
        id: 'L105/L105-iot-indoor-air-quality-monitor',
      },
      collapsed: true,
      items: [
        'L105/L105-introduction',
        'L105/L105-theory',
        'L105/L105-experiment',
        'L105/L105-projects',
        'L105/L105-presentation',
        'L105/L105-assessment'
      ],
    },

    {
      type: 'category',
      label: 'L106: IoT Vibration Monitor',
      link: {
        type: 'doc',
        id: 'L106/L106-iot-vibration-monitor',
      },
      collapsed: true,
      items: [
        'L106/L106-introduction',
        'L106/L106-theory',
        'L106/L106-experiment',
        'L106/L106-projects',
        'L106/L106-presentation',
        'L106/L106-assessment'
      ],
    },
    {
      type: 'category',
      label: 'L107: IoT Light Monitor',
      link: {
        type: 'doc',
        id: 'L107/L107-iot-light-monitor',
      },
      collapsed: true,
      items: [
        'L107/L107-introduction',
        'L107/L107-theory',
        'L107/L107-experiment',
        'L107/L107-projects',
        'L107/L107-presentation',
        'L107/L107-assessment'

      ],
    },
    {
      type: 'category',
      label: 'L108: IoT Pulse Monitor',
      link: {
        type: 'doc',
        id: 'L108/L108-iot-pulse-monitor',
      },
      collapsed: true,
      items: [
        'L108/L108-introduction',
        'L108/L108-theory',
        'L108/L108-experiment',
        'L108/L108-projects',
        'L108/L108-presentation',
        'L108/L108-assessment'

      ],
    },

    {
      type: 'category',
      label: 'L109: IoT Soil Monitor',
      link: {
        type: 'doc',
        id: 'L109/L109-iot-soil-monitor',
      },
      collapsed: true,
      items: [
        'L109/L109-introduction',
        'L109/L109-theory',
        'L109/L109-experiment',
        'L109/L109-projects',
        'L109/L109-presentation',
        'L109/L109-assessment'
      ],
    },
    /*
    {
      type: 'doc',
      id: 'L110-iot-alarm',
      label: 'L110: IoT Alarm',
    },
    {
      type: 'doc',
      id: 'L111-iot-thermostat',
      label: 'L111: IoT termostat',
    },
     {
      type: 'doc',
      id: 'L112-iot-controller',
      label: 'L112: IoT ovladač',
    },
    {
      type: 'doc',
      id: 'L113-iot-display',
      label: 'L113: IoT displej',
    },
    {
      type: 'doc',
      id: 'L114-iot-gps-locator',
      label: 'L114: IoT GPS lokátor',
    },
    */
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
