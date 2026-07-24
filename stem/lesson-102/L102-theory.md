---
slug: hardwario-tower-iot-kit-theory
title: Theory
---
import Image from '@theme/IdealImage';

**Time allocation**: 10 min.

## TOWER set description

The **HARDWARIO TOWER** is a set of electronic components that find application in Internet of Things (IoT), Industry 4.0 and home automation projects.

### Main advantages of the TOWER set

* Plug&Make system, thanks to which the elements are built without soldering and wiring - [video guide](https://www.youtube.com/watch?v=OCPPKXzCBg0)
* Wireless solution with very low power consumption, making installation easy and units can run on batteries for several years
* Open-source approach allowing integration with other platforms - [github](https://github.com/hardwario)
* Sample firmware for immediate use - [github](https://github.com/hardwario)
* Wide portfolio of 3D printer case models, including an available 3D printing service - [store](https://www.hardwario.store/)
* Detailed instructions and technical support to help customers with the set - [Documentation](https://docs.hardwario.com/tower/) and [forum](https://forum.hardwario.com/)

### Communication options

* Wireless in the sub-GHz band (868 MHz in Europe and 915 MHz in the USA)
* Wirelessly over Sigfox network
* Wirelessly over LoRaWAN
* Wirelessly over NB-IoT
* Wireless with IQRF technology
* Wired RS-485

<div class="container">
  <div class="row">
    <Image img={require('./tower-communication.avif')} alt="Diagram of TOWER kit communication paths: sub-GHz, LoRaWAN, Sigfox, NB-IoT, and Ethernet routes to the cloud and apps"/>
  </div>
</div>

## Playground app description

**HARDWARIO Playground** is an application for uploading firmware, pairing assemblies and programming functions of the HARDWARIO TOWER IoT set. It is available for computers with Windows, Linux, Ubuntu and Apple macOS operating systems.

In **HARDWARIO Playground** you can:

* connect your box - IoT set to your computer,
* customize and set the functions of your IoT box,
* upload firmware to your build (if you don't know what that is, check out [here](https://docs.hardwario.com/tower/firmware-development/firmware-quick-start/))
* or see what your report is doing in clear graphs and visualisations.

<div class="container">
  <div class="row">
    <Image img={require('./tower-diagram.avif')} alt="HARDWARIO Playground Functions tab showing a Node-RED flow with climate-monitor MQTT nodes"/>
  </div>
</div>

### Bookmarks Playground app

1. **Devices** has the most important role of all the tabs. Pair your build with the USB Dongle and thus with your computer and then you can create.
2. **Bridge** is the tab for pairing the special Bridge Module
3. **Functions** is a tab where you simply drag the so-called nodes to determine how your assembly should behave in different situations - for example when you press a button or the ambient temperature changes. All this simple programming works on the Node-RED system, which you can learn more about [here](https://docs.hardwario.com/tower/desktop-programming/node-red-programming/).
4. In **Dashboard**, you'll eventually see your box's activities plotted in handy colour charts. Want to track how the temperature in your classroom has risen and fallen? No problem! We've got you covered on how to create a cool Dashboard too [cool tutorial](https://docs.hardwario.com/tower/desktop-programming/data-visualization).
5. In **Messages** you will see every value that your assembly records, whether it is a button press, a position change or a temperature measurement.
6. Finally, there's the **Firmware** tab. Here you can load firmware, the program that controls the device, into your Core Module with a few clicks. You can learn more about the firmware [here](https://docs.hardwario.com/tower/firmware-development/firmware-quick-start/).