---
slug: catch-the-mist
title: Catch the mist
---
import Image from '@theme/IdealImage';

## Introduction

You know this for sure. In the fridge, you keep the last piece of cake from your birthday party, but when you finally get to it… it's gone. And your greedy sibling has chocolate all over her chin. Stop her with the smart box! 🎂

In this project, you will learn to make a **fridge opening detector.** 👈

All you need is the box with button and the USB dongle in the basic HARDWARIO [Start set](https://www.hardwario.store/p/start-set/).


##  Download new firmware

1. If you haven't done it yet, put together the [Start set](https://www.hardwario.store/p/start-set/).
2. Upload a special firmware to Core Module - **bcf-radio-x-axis-detector** (you will find it among other firmware in the Playground). Thanks to this firmware, the box will become sensitive to movement.👌

3. Pair the Core Module with the USB Dongle. Right after pairing it, you will notice that your Core Module has changed Alias to **x-axis-detector**.

<div class="container"> <div class="row"> <Image img={require('./img/catch-the-mist/catch-the-mist-1.webp')} alt="Playground Devices tab with the paired Core Module listed under the alias x-axis-detector:0"/> </div> </div>

## Get it started in the Node-RED

1. In the Playground, click on the **Functions tab**, where is the programming desktop Node-RED.
2. Start as always: first place the **MQTT node** from the Input section on the desktop.


```
node/x-axis-detector:0/accelerometer/-/event-count
```

<div class="container"> <div class="row"> <Image img={require('./img/catch-the-mist/catch-the-mist-2.webp')} alt="Edit mqtt in node dialog with the accelerometer event-count topic in the highlighted Topic field"/> </div> </div>

Confirm it with the **Done** button.

3. Now, upload there a small javascript. 🙌 First, place the **Function node** from the section of the same name on the desktop...



4. ...and then double-click on this node. **Copy the following code to the Function field**. This code will count how many times the fridge opened:


```
var count = flow.get("count") || 0;
count++;
flow.set("count", count);
msg.payload = count;
return msg;
```

Name the node in the Label field, e.g. **Counter**.

<div class="container"> <div class="row"> <Image img={require('./img/catch-the-mist/catch-the-mist-3.webp')} alt="Edit function node dialog with the fridge-opening counter code and the node name filled in"/> </div> </div>

Confirm it the the **Done** button.

5. Next to this node, place the last one - the **Text node** from the Dashboard section.



6. Inside the node, change its Label to a text you want to see while it’s counting. It could be, for example, **Open fridge**.


<div class="container"> <div class="row"> <Image img={require('./img/catch-the-mist/catch-the-mist-4.webp')} alt="Edit text node dialog with the Label field set to Otevrena lednice (open fridge)"/> </div> </div>

Confirm it with the **Done** button.

7. **Connect all three nodes**, just as you can see in the picture. In the top-right corner, remember to click on the good old **Deploy** button which will start up the entire flow.

<div class="container"> <div class="row"> <Image img={require('./img/catch-the-mist/catch-the-mist-6.webp')} alt="All three nodes wired from MQTT through the counter to the text node, with Deploy highlighted"/> </div> </div>

## And… action!

1. Let’s make the little trap work. **Put a cake or any other lure in the fridge**. 🍰
2. Place the box horizontally **into the door of the fridge**.
3. When someone opens the door, the box will send you a notification to the **Dashboard** tab.

<div class="container"> <div class="row"> <Image img={require('./img/catch-the-mist/catch-the-mist-7.webp')} alt="Dashboard tile labelled Otevrena lednice showing the fridge was opened 4 times"/> </div> </div>


4. **Run to subdue the wicked villain! 👮**
5. And now enjoy your sweet victory. 💘
