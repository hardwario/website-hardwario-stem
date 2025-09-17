---
slug: pripoj-dongle
title: Connect dongle
---

import Image from '@theme/IdealImage';

## 2. Radio Dongle

Now connect the **Radio Dongle** (USB module) to a free USB port on your computer. HARDWARIO Playground should automatically recognize the device and display it in the **Devices** list. If the dongle does not appear, make sure it is inserted correctly.

<div class="container">
  <div class="row">
    <Image img={require('/lekce-iot/img/iot-dongle.webp')}/>
  </div>
</div>

## 3. Flashing the firmware

*This step is optional and recommended only if you are unsure who last used your Radio Dongle and how it was configured.*

In the left menu, find the **Firmware** link, where you need to search for `hardwario/twr-gateway-radio-dongle` and press the **“Flash firmware”** button. This step ensures that the dongle has the latest firmware version, which may resolve potential connection issues.

## 4. Connect the Radio Dongle

In the right-hand menu under the **Devices** section, click the **Connect** button to connect the Dongle. Unfortunately, at this moment no additional effects or connection indicators will be displayed.