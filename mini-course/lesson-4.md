---
slug: lesson-4
title: Lesson 4 - Lights!
---
import Image from '@theme/IdealImage';

🧑‍💻 **Duration:** 40 minutes  
🎯 **Target audience:** individuals and groups  

## 1. Introduction

In **HARDWARIO Playground**, you already know how to find inputs, process them, and print them to the **Dashboard**.  
This gave you the basic skills for working with sensors and data visualization.  

The next lesson will be a game with an **LED strip**, which will bring light to this part of the work and open new possibilities for creative use.

## 2. What’s Ready

✅ A prepared and paired **Button Module** or **PIR Module**  
✅ Knowledge of working with messages in Playground (the **Change** and **Switch** nodes)  
✅ **Power Module** and **LED strip**  

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
    <Image img={require('./img/iot-led.webp')} alt="Power Module in a yellow enclosure with a plug-in power adapter and a coiled LED strip"/>
  </div>
</div>

## 5. Start It Up!

Programming in the flow again begins with a message that triggers something. There are several options:

✅ **Button Module** – monitoring a button press  
✅ **PIR Module** – monitoring orientation  
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
    <Image img={require('./img/iot-function-led1.webp')} alt="Node-RED flow: orientation input through a Change Color R node to the LED strip color set topic"/>
  </div>
</div>

## 8. Playing with Code

For code that can change the LED strip color based on PIR sensor orientation:

1. Add a **Switch** node.  
2. According to orientation (1–6), set a different color (`msg.payload`).  
3. Send it via **mqtt out** to the Power Module.

<div class="container">
  <div class="row">
    <Image img={require('./img/iot-function-led2.webp')} alt="Node-RED flow: a Condition switch routes orientation to Change Color R, G, or B nodes before the LED strip output"/>
  </div>
</div>

## 9. Colors and Effects

It would be a shame not to light up the LED lights in their full range, so don’t hesitate to try, for example, the command `node/power-controller:0/led-strip/-/effect/set`, to which you pass the message:  

```json
{"type":"rainbow", "wait":10}
```

Are your eyes hurting from too much brightness? `node/power-controller:0/led-strip/-/brightness/set` takes values from 0–100 as the message and sets the brightness.

## 10. Addressing
The LED strip can also be addressed per individual LED using `node//led-strip/-/set-pixel/set`, the message then contains information like `{"type":"rainbow", "wait":10}`.

```json
{"type":"rainbow", "wait":10}
```

Are your eyes hurting from too much brightness? `node/power-controller:0/led-strip/-/brightness/set` takes values from 0–100 as the message and sets the brightness.

## 11. Summary

You have paired the Power Module with firmware for the LED strip.  
You know how to light up the LED strip in different colors and even add effects.