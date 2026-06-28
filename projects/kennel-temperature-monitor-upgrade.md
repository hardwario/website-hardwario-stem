---
slug: kennel-temperature-monitor-upgrade
title: Kennel temperature monitor - upgrade
---
import Image from '@theme/IdealImage';

## Introduction

Do you already have a basic version of the kennel temperature detector? Build an even better one. It will send notifications to your mobile and you will see the temperature in the kennel from anywhere. 🐶

Under this project, you will learn how to set the box to **send you a message when the temperature exceeds a preset value**. 👌 The box won’t start barking, but it´s still a great project. 🐩

The basic version of this project can be found here: [Temperature monitor for your hairy watchman: check the temperature in your dog's kennel](/projects/kennel-temperature-monitor/).

All you need is the basic HARDWARIO [**Start Set**](https://shop.hardwario.com/p/start-set/).


## Prepare Node-RED

1. The firmware you need for this project is the familiar **bcf-radio-push-button**. Have you got it already? What are you waiting for? Pair the box with a Dongle.

<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-1.webp')}/>
  </div>
</div>

2. In Playground, click on the **Function** tab and place the same thing on the desktop as in the basic version of the project:

- one **MQTT node** from under the Input section uploading **Topic**

```
node/push-button:0/thermometer/0:1/temperature
```

- and a pointer, that is a **Gauge node** from under the Dashboard section. It should read from -15 to 40 °C. Name it for better orientation. ✍️

<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-2.webp')}/>
  </div>
</div>

<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-3.webp')}/>
  </div>
</div>

Hold onto your hat and let's move on. 🎩


## Set up Blynk

1. First, take your mobile and open [Blynk You don’t know what Blynk is or how to use it? Check out our tutorial](https://docs.hardwario.com/tower/platform-integrations/blynk-app/).

2. In Blynk, put on everything you need. On the desktop of the new project, first set **Notification**.


![Blynk Step H](https://res.cloudinary.com/lukasfabik/image/upload/v1573306276/projects/upgrade-hlidac-teploty-pro-chlupateho-hlidace/image28.png)

3. Add **Gauge**, pointer. Click on it and in the settings add the same temperature range as on the computer: ** from −15 to 40 **.

Set the unit: **/pin/ °C**.

Click on **PIN**. Set **Virtual** here and select **any number**; remember it. The PIN is used to connect to the nodes in Playground.

Make sure to give your graph a **name**.

**Unsure about something? Take a look at the screenshot.**



![Dashboard](https://res.cloudinary.com/lukasfabik/image/upload/v1573306272/projects/upgrade-hlidac-teploty-pro-chlupateho-hlidace/image7.png)


![Blynk](https://res.cloudinary.com/lukasfabik/image/upload/v1573306272/projects/upgrade-hlidac-teploty-pro-chlupateho-hlidace/image12.png)


4. Finally, add **Step H**. With it you set below how many degrees the temperature in the kennel should not drop. The letter H stands for **horizontal**, meaning in a lying position. Feel free to also use Step V, where the letter V stands for vertical or upright position. The choice depends on you and you alone.

Inside, set the range **from −15 to 40**.

Then select **PIN**. Again it will be Virtual, but this time you have to select **a different number**.

In the line at the top, give the optimum temperature monitor a **name**.



![Blynk Step H](https://res.cloudinary.com/lukasfabik/image/upload/v1573306273/projects/upgrade-hlidac-teploty-pro-chlupateho-hlidace/image17.png)



![Blynk](https://res.cloudinary.com/lukasfabik/image/upload/v1573306272/projects/upgrade-hlidac-teploty-pro-chlupateho-hlidace/image12.png)

5. Name the project in **project settings** and run the program with the **Play** button. It won´t do much because you first have to upgrade your Node-RED.


## Upgrade in Node-RED

1. Return to your computer and set up more features in Playground. The first is the **mobile notification**. You make this work with three nodes.

- First node: **Switch node** from under the Function section.

<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-4.webp')}/>
  </div>
</div>



In the node, set what you see below:

a. Use **msg. payload** as the selected property;

b. Select the notification to be sent when the temperature is less than or equal to −15 °C. Work with the **flow. optimalTemp** variable and with the symbol less than/equal to: `**<=**`

<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-5.webp')}/>
  </div>
</div>

- Second node: **Change node** from the same section. This affects what message you get on your mobile.

<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-6.webp')}/>
  </div>
</div>

In the node, set what the mobile will tell you when the temperature in the kennel falls below the lowest temperature you set. For example _It's too cold in the kennel_.

**Our tip**: Write the message without hooks (háčky) and accent marks (čárky). Unfortunately, Blynk does not understand them.

- Third node: **Notify node** from under the Blynk ws section. This provides the connection to the mobile.
In the node, click on the small pencil symbol.

<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-7.webp')}/>
  </div>
</div>

Copy and paste here the **URL** from the bottom part of the window and the **token** that you received on your mobile when you set up the project in Blynk. Unsure about something? Take a look at the screenshot.

<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-8.webp')}/>
  </div>
</div>

**Our tip**: Name the connection in the name line so that you can recognize it later.

## Link the chart on your mobile with Playground

1. What do you think? Does it need something else? You´re right, the **Write node** from the Blynk ws section. This will ensure that the pointer will work on your mobile.

<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-9.webp')}/>
  </div>
</div>

In the **Connection** line, select your current project.

**You no longer need to click on the pencil**, just set the token and URL once in each project.

In the node, set the **PIN** to the same one you entered for the pointer on the mobile. Enter it in the node without the initial V.

<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-10.webp')}/>
  </div>
</div>

## Add the flow that monitors the optimum temperature.

1. The icing on the cake is to follow. This flow consists of four nodes.

The first is the **Write Event node** from under the Blynk ws section. Watch out, Write Event, not only Write.
This time connect it to the **PIN**, which you set in Blynk for Step H. 
<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-11.webp')}/>
  </div>
</div>

1. The next one is the **Numeric node** from under the Dashboard section. Sounds like some comic book villain, doesn't it? But he's your buddy now.

Numeric does the same as Step H in Blynk. **It ensures the values are synchronized**.

<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-12.webp')}/>
  </div>
</div>

In the node, set the **unit of measure** (°C), the **temperature range** (−15 and 40) and the **node name**.

<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-13.webp')}/>
  </div>
</div>

3. Place another **Change node** next to it.

<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-14.webp')}/>
  </div>
</div>

4. In the node, set the minimum temperature value (optimalTemp) to be updated immediately with changes to the Numeric node. Take a look at the screenshot.

<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-15.webp')}/>
  </div>
</div>

5. Below this node, add one more **Write node** from under the Blynk ws section.

<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-16.webp')}/>
  </div>
</div>

6. In this node, fill in the same **PIN** that you set for the Step H element. Also select the correct project on the **Connection** line.

This setting will ensure that the set temperature is synchronized back so that you can see the changes in the Dashboard also in Blynk.

<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-17.webp')}/>
  </div>
</div>

7. Now you only have to **connect it as shown in the screenshot** and confirm with the **Deploy** button. 🙌

<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-18.webp')}/>
  </div>
</div>

## Ready, steady… go!

1. Stick the box back to the **inner wall of the kennel**.
2. The temperature measured in the kennel is not only shown in Playground **in the Dashboard tab**…

<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-19.webp')}/>
  </div>
</div>

3. … but also in **Blynk**. So you can check it anywhere, anytime. 🕵️



![Blynk](https://res.cloudinary.com/lukasfabik/image/upload/v1573306274/projects/upgrade-hlidac-teploty-pro-chlupateho-hlidace/image22.png)

1. In addition, you get a **notification** on your mobile if your dog is too hot or cold. Happy dog = good dog! 🐕
