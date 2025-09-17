---
slug: pair-the-module
title: Pair the module
---
import Image from '@theme/IdealImage';

## 5. Pairing the PIR Module

<div class="container">
  <div class="row">
    <Image img={require('/iot-lessons/img/iot-PIRmodule.webp')}/>
  </div>
</div>

<br></br>
To connect the **PIR Module**, you must first put it into Bluetooth pairing mode. This mode is activated by inserting batteries into the module.  

Before inserting the batteries, go to **HARDWARIO Playground** and click the **Start pairing** button. This step will start the pairing process.

<div class="container">
  <div class="row">
    <Image img={require('/iot-lessons/img/iot-PIRmodule_open.webp')}/>
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