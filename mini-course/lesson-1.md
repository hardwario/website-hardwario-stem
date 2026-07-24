---
slug: lesson-1
title: Lesson 1 - Get Ready
---
import Image from '@theme/IdealImage';

🧑‍💻 **Duration:** 20 minutes  
🎯 **Target audience:** individuals  

Connect your HARDWARIO TOWER modules, install HARDWARIO Playground, and start measuring.

**Task:** Verify that you have Playground installed and that the device is connected via Bluetooth.

## 1. HARDWARIO Playground

HARDWARIO Playground is a universal tool for working with the HARDWARIO kit, available for Windows, macOS, and Linux. It allows visual programming and real-time monitoring of sensor states. You can find more information in the [official documentation](https://docs.hardwario.com/tower/desktop-programming/about-playground/).

:::info

You can download Playground from the [Download](https://docs.hardwario.com/tower/desktop-programming/playground-installation/) page. Select the version for your operating system, download the installer, and follow the installation wizard.

:::

After successful installation and launch, the main Playground window will open. In the **Devices** tab you will see a list of connected devices. If everything is set up correctly, your HARDWARIO device will appear here. At the beginning, however, the list may be empty — in that case, check whether the device is properly connected via USB and whether all the necessary drivers are installed.

## 2. Radio Dongle

Now connect the **Radio Dongle** (USB module) to a free USB port on your computer. HARDWARIO Playground should automatically recognize the device and display it in the **Devices** list. If the dongle does not appear, make sure it is inserted correctly.

<div class="container">
  <div class="row">
    <Image img={require('./img/iot-dongle.webp')} alt="HARDWARIO Radio Dongle: a black USB stick with the HARDWARIO logo label"/>
  </div>
</div>

## 3. Flashing the firmware

*This step is optional and recommended only if you are unsure who last used your Radio Dongle and how it was configured.*

In the left menu, find the **Firmware** link, where you need to search for `hardwario/twr-gateway-radio-dongle` and press the **“Flash firmware”** button. This step ensures that the dongle has the latest firmware version, which may resolve potential connection issues.

## 4. Connect the Radio Dongle

In the right-hand menu under the **Devices** section, click the **Connect** button to connect the Dongle. Unfortunately, at this moment no additional effects or connection indicators will be displayed.

## 5. Pairing the PIR Module

<div class="container">
  <div class="row">
    <Image img={require('./img/iot-pirmodule.webp')} alt="Assembled PIR Module in its white enclosure, with the dome motion lens in the middle"/>
  </div>
</div>

<br></br>
To connect the **PIR Module**, you must first put it into Bluetooth pairing mode. This mode is activated by inserting batteries into the module.  

Before inserting the batteries, go to **HARDWARIO Playground** and click the **Start pairing** button. This step will start the pairing process.

<div class="container">
  <div class="row">
    <Image img={require('./img/iot-pirmodule-open.webp')} alt="Disassembled PIR Module: stacked electronics boards, sealing O-ring, and the two halves of the enclosure"/>
  </div>
</div>
<br></br>

:::tip

If you are pairing in a classroom with multiple modules, make sure you are pairing the correct one. For example, verify that no other devices are in the pairing process at the same time.

:::

After inserting the batteries, a sensor will appear in **HARDWARIO Playground**, usually identified as `motion-detector:0`. Once this sensor appears, it means the module is connected.  

In the left menu, under the **Messages** section, you can monitor outputs from the **PIR Module**, which will show you whether the sensor detects motion.

:::tip

Rotate the PIR Module on its side. In the **Messages** section, you should see an item like `node/motion-detector:0/orientation` (with a number), which indicates the change in module orientation.

:::

## 6. Flashing the PIR Module Firmware

*This step is optional and recommended if the **Core Module** was used in another project and is no longer recognized as `motion-detector`. It is also useful if you want to ensure that you are running the latest firmware.*

1. Find a USB cable to connect the **Core Module** to your computer.  
2. In the left menu of **HARDWARIO Playground**, go to the **Firmware** section.  
3. In the **Device** section, you will see all connected HARDWARIO devices, e.g., `bc-usb-dongle` and `hio-core-module`. Select `hio-core-module`.  
4. In the firmware section, select **twr-radio-motion-detector** (its picture will also be displayed).  
5. Click the **Flash firmware** button.

## 7. Summary

✅ The module is connected, the environment is ready — you can start measuring.  