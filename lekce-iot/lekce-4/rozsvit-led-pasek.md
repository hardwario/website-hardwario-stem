---
slug: rozsvit-led-pasek
title: Turn on the LED strip
---
import Image from '@theme/IdealImage';

## 3. Flash Firmware for the Power Module

1. Connect the **Power Module** using a USB cable.  
2. In the **Firmware** tab, select the latest version.  
   - Mine had `twr-radio-power-controller-rgb150` installed, but it’s definitely good to update it.  
3. The LED strip does not need to be connected at this moment, but it won’t cause any issues if it is.

## 4. Pair the Power Module

The Power Module is unique in that it **does not have batteries** – it is powered directly from a power source.  

1. In the **Devices** tab, click **Start pairing**.  
2. Plug the Power Module into the power source – this puts it into pairing mode.  
3. After pairing, the Power Module appears as `power-controller:0`.

<div class="container">
  <div class="row">
    <Image img={require('/lekce-iot/img/iot-LED.webp')}/>
  </div>
</div>

## 5. Start It Up!

Programming in the flow again begins with a message that triggers something. There are several options:

✅ **Button module** – monitoring a button press  
✅ **PIR module** – monitoring orientation  
✅ **Any module** – all of them have temperature, which you can change (a more patient option 😊)

## 6. What to Send to the Power Module

So far, you have used the **mqtt in** node to read from sensors.  
Now we need to **write** to the device → we use **mqtt out**.  

The topic that lights up the strip, for example, is: `node/power-controller:0/led-strip/-/color/set`

## 7. What Message to Send

Directly connecting an input (e.g., `Button` with message `1`) to an output (LED strip setting) won’t lead to the desired result.  

Therefore, use a **Change** node, where you reassign `msg.payload` to a color value in RGB hex code (for example, red: `"#FF0000"`).

👉 If you’re not familiar with RGB color coding, we recommend checking available [color tables](https://www.w3schools.com/colors/colors_rgb.asp).

<div class="container">
  <div class="row">
    <Image img={require('/lekce-iot/img/iot-function_LED1.webp')}/>
  </div>
</div>

## 8. Playing with Code

For code that can change the LED strip color based on PIR sensor orientation:

1. Add a **Switch** node.  
2. According to orientation (1–6), set a different color (`msg.payload`).  
3. Send it via **mqtt out** to the Power Module.

<div class="container">
  <div class="row">
    <Image img={require('/lekce-iot/img/iot-function_LED2.webp')}/>
  </div>
</div>