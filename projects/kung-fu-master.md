---
slug: kung-fu-master
title: Kung-fu master
---
import Image from '@theme/IdealImage';

## Introduction

With this game, there's no way you and your friends will get bored! Adjust your Start Set to recognise even the slightest movement.

This project will teach you how to create a so-called **still position detector**, i.e. motion **detector**. 👈

You only need a **box with a button** and a **USB dongle**.  That's why the basic HARDWARIO [**Start Set**](https://www.hardwario.store/p/start-set/) is perfect.


## Download the firmware

1. If you haven't already done so, put the Start Set together.
2. Load the special firmware, namely **bcf-radio-still-position-detector** (you´ll find it among the other firmware in Playground) onto the Core Module. This firmware will make the box much more sensitive to movement and measure time changes. 👌
   **Our Tip:** You don’t know how to download the firmware or what it is? [Find out more here](https://docs.hardwario.com/tower/firmware-sdk/)
3. [Pair Core Module with USB Dongle](https://docs.hardwario.com/tower/platform-integrations/homekit-and-siri/#pair-the-device) After pairing has been completed, you will see that your Core Module has changed the Alias to **still-position-detector**.

<div class="container">
  <div class="row">
    <Image img={require('./img/kung-fu-master/kung-fu-master-1.webp')} alt="Playground Devices tab with the paired Core Module renamed to still-position-detector:0"/>
  </div>
</div>

## Make it move in Node-RED

1. In Playground, click on the **Functions tab**, where the [Node-RED](https://docs.hardwario.com/tower/desktop-programming/node-red-programming/) programming area is.
2. Start as always by first placing the **MQTT** **node** from the Input section onto the desktop.

Double-click on it and copy it to the **Topic** line through which the box calculates the time spent in one position:

```
node/still-position-detector:0/hold-time
```

<div class="container">
  <div class="row">
    <Image img={require('./img/kung-fu-master/kung-fu-master-2.webp')} alt="MQTT node settings with the hold-time topic filled in the Topic field"/>
  </div>
</div>

Confirm by clicking the **Done** button.

3. You need to place another bubble on the desktop for the device to work. You can find it in the Dashboard section as **Text**. This node ensures that the result is recorded.



4. Tap the Text node twice. In the settings, edit **Label**, by writing, for example, **Still time**.

<div class="container">
  <div class="row">
    <Image img={require('./img/kung-fu-master/kung-fu-master-3.webp')} alt="Text node settings with a custom name typed into the highlighted Label field"/>
  </div>
</div>

Confirm by clicking the **Done** button.

5. **Link both nodes** together. Don't forget to click the red **Deploy** button in the top right corner to get everything up and running. ****

<div class="container">
  <div class="row">
    <Image img={require('./img/kung-fu-master/kung-fu-master-4.webp')} alt="MQTT node wired to the Text node, with the red Deploy button highlighted"/>
  </div>
</div>

## Time for action!

You now have a motion detector and timer in your hand. Cool, or what? Give it a go!

1. **Press the button** on the box. **⏺️**
2. After a little while, **move the box**.
3. In the **Dashboard** tab in Playground, you will see **how much** time elapsed between the moment you pressed the button and made a move. Great job! 👍

<div class="container">
  <div class="row">
    <Image img={require('./img/kung-fu-master/kung-fu-master-5.webp')} alt="Playground Dashboard showing the measured still time in seconds next to its label"/>
  </div>
</div>

## Compete with your friends

1. **In different positions, challenge your friends** to find out **who can hold/carry the box for the longest without moving.** For example:
   * while standing on one leg;
   * holding the plank position;
   * while doing a handstand 🙃; or
   * any other way you can think of.
   Distracting your opponent is, of course, allowed, but don't touch! 🤡
2. **Write down the results.**
3. The person who has the best times on the most occasions is the **Zen Kung Fu Master!** 🙇
