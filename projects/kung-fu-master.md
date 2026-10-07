---
slug: kung-fu-master
title: Kung-fu master
---
import Image from '@theme/IdealImage';

## Introduction

With this game, you and your friends won't get bored. Set up your Start Set to notice even the slightest movement.

In this project, you will learn to build a so-called **still position detector**, in other words a **motion detector**. 👈

You only need a **box with a button** and a **Radio Dongle**, so the basic HARDWARIO [**Start Set**](https://www.hardwario.store/p/start-set/) is all you need.


## Download the new firmware

1. If you haven't done so yet, assemble the Start Set.
2. Flash the special **bcf-radio-still-position-detector** firmware to the Core Module (you'll find it among the other firmware in Playground). It makes the box much more sensitive to movement and measures how much time passes between movements. 👌
   **Our tip:** Don't know how to get the firmware or what it is? [Find out here](https://docs.hardwario.com/tower/desktop-programming/firmware-flashing/).
3. [Pair the Core Module](https://docs.hardwario.com/tower/desktop-programming/radio-network-management/#pairing-new-devices) with the Radio Dongle. Right after pairing, you'll see the Core Module's alias change to **still-position-detector**.

<div class="container">
  <div class="row">
    <Image img={require('./img/kung-fu-master/kung-fu-master-1.webp')} alt="Playground Devices tab with the paired Core Module renamed to still-position-detector:0"/>
  </div>
</div>

## Get it going in Node-RED

1. In Playground, click the **Functions tab**, home of the [Node-RED](https://docs.hardwario.com/tower/desktop-programming/node-red-programming/) programming canvas.
2. Start as always: first place an **mqtt in** node from the network section on the canvas.

Double-click it and copy this topic into the **Topic** field. The box uses it to send the time spent in one position:

```
node/still-position-detector:0/hold-time
```

<div class="container">
  <div class="row">
    <Image img={require('./img/kung-fu-master/kung-fu-master-2.webp')} alt="MQTT node settings with the hold-time topic filled in the Topic field"/>
  </div>
</div>

Confirm with **Done**.

3. For the device to work, place one more bubble on the canvas. You'll find it in the Dashboard section as **Text**. This node displays the result.



4. Double-click the Text node. In its settings, change the **Label**, for example to **Still time**.

<div class="container">
  <div class="row">
    <Image img={require('./img/kung-fu-master/kung-fu-master-3.webp')} alt="Text node settings with a custom name typed into the highlighted Label field"/>
  </div>
</div>

Confirm with **Done**.

5. **Wire the two nodes together.** Don't forget to click the red **Deploy** button in the top right corner to start the whole flow.

<div class="container">
  <div class="row">
    <Image img={require('./img/kung-fu-master/kung-fu-master-4.webp')} alt="MQTT node wired to the Text node, with the red Deploy button highlighted"/>
  </div>
</div>

## Time for action!

Wow, you're holding a motion timer. Sounds great, doesn't it? Give it a try!

1. **Press the button** on the box. ⏺️
2. After a moment, **move the box**.
3. On the **Dashboard** tab in Playground, you'll see **how much time** passed between pressing the button and moving the box. Nice work! 👍

<div class="container">
  <div class="row">
    <Image img={require('./img/kung-fu-master/kung-fu-master-5.webp')} alt="Playground Dashboard showing the measured still time in seconds next to its label"/>
  </div>
</div>

## Challenge your friends

1. **Challenge your friends to a duel** and find out **who can hold the box in different positions the longest without moving at all**, for example:
    - standing on one leg,
    - holding a plank,
    - in a handstand 🙃,
    - any other way you can think of.

    Distracting your opponent with words is allowed, of course, but no touching! 🤡

2. **Write down the results.**
3. Whoever gets the best time most often is the **Zen kung-fu master**! 🙇
