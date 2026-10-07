---
slug: catch-the-mist
title: Fridge door detector
---
import Image from '@theme/IdealImage';

## Introduction

You know how it goes. You've saved the last piece of birthday cake in the fridge, and when you finally get to it… it's gone. And your sweet-toothed sibling has chocolate all over their chin. Stop them with a smart box! 🎂

In this project, you will learn to build a **fridge door detector**. 👈

All you need is the **box with a button** and the **USB dongle**, so the basic HARDWARIO [**Start Set**](https://www.hardwario.store/p/start-set/) will do.


## Download new firmware

1. If you haven't done it yet, assemble the [Start Set](https://www.hardwario.store/p/start-set/).
2. Upload the special **twr-radio-move-detector-x-axis** firmware to the Core Module (you'll find it in Playground among the other firmware). It makes the box react to movement. 👌
3. Pair the Core Module with the USB dongle. Right after pairing, you'll see that its Alias has changed to **x-axis-detector**.

<div class="container"> <div class="row"> <Image img={require('./img/catch-the-mist/catch-the-mist-1.webp')} alt="Playground Devices tab with the paired Core Module listed under the alias x-axis-detector:0"/> </div> </div>

## Get it started in Node-RED

1. In Playground, click the **Functions tab**, where you'll find the Node-RED programming workspace.
2. Start as always: first place an **mqtt in** node from the **network** section on the workspace.
Double-click it and copy this line into the **Topic** field. It tells the box to watch for movement:

```
node/x-axis-detector:0/accelerometer/-/event-count
```
<div class="container"> <div class="row"> <Image img={require('./img/catch-the-mist/catch-the-mist-2.webp')} alt="Edit mqtt in node dialog with the accelerometer event-count topic in the highlighted Topic field"/> </div> </div>

Confirm with **Done**.

3. Now add a little JavaScript. 🙌 First, place a **function** node from the section of the same name on the workspace…


4. …and then double-click it. **Copy this code into the On Message tab**. It counts how many times the fridge has been opened:

```
var count = flow.get("count") || 0;
count++;
flow.set("count", count);
msg.payload = count;
return msg;
```

Also give the node a name in the **Name** field, for example **Counter**.

<div class="container"> <div class="row"> <Image img={require('./img/catch-the-mist/catch-the-mist-3.webp')} alt="Edit function node dialog with the fridge-opening counter code and the node name filled in"/> </div> </div>

Confirm with **Done**.


5. Next to it, place the last node: **text** from the **dashboard** section.


6. In the node settings, change the **Label** field to the text you want to see next to the count, for example **Fridge opened**.


<div class="container"> <div class="row"> <Image img={require('./img/catch-the-mist/catch-the-mist-4.webp')} alt="Edit text node dialog with the Label field set to Otevrena lednice (open fridge)"/> </div> </div>

Confirm with **Done**.

7. **Connect all three nodes** as shown in the picture. Don't forget to click the good old **Deploy** button in the top right corner, which starts the whole flow.

<div class="container"> <div class="row"> <Image img={require('./img/catch-the-mist/catch-the-mist-6.webp')} alt="All three nodes wired from MQTT through the counter to the text node, with Deploy highlighted"/> </div> </div>


## And… action!

1. Now let's set the trap. **Put a cake or some other bait in the fridge**. 🍰
2. Lay the box flat **in the fridge door**.
3. When someone opens the door, the box sends you an alert to the **Dashboard** tab.

<div class="container"> <div class="row"> <Image img={require('./img/catch-the-mist/catch-the-mist-7.webp')} alt="Dashboard tile labelled Otevrena lednice showing the fridge was opened 4 times"/> </div> </div>

4. **Run and catch the sneaky villain!** 👮
5. Then enjoy your sweet victory. 💘
