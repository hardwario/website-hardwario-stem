---
slug: kennel-temperature-monitor
title: Kennel temperature monitor
---
## Introduction

Is it so cold that you can’t even get the dog out? Want to find out what temperature is the most comfortable for your best friend? Then why not monitor the temperature in their kennel? 🐶

This project teaches you how to **measure temperature with IoT and display it on a chart**. All you need is the basic HARDWARIO [Start Set](https://shop.hardwario.com/p/start-set/). Hopefully your dog will reward you for your efforts with less unsightly mess, or something like that. 🐩


## Prepare the box

1. Put the Start Set together and pair it. You need the **radio-push-button** firmware for the Core Module. If you don't know how to download the firmware or what it is, [you can find out more here](https://docs.hardwario.com/tower/firmware-development/hardwario-extension-tutorial/#flash-firmware)
2. The temperature changes are displayed in the **Messages** tab in Playground.

![MQTT messages](https://res.cloudinary.com/lukasfabik/image/upload/v1566156149/projects/kennel-temperature-monitor/image5.png)

## Set up Node-RED

1. Start programming in Node-RED. Firstly, click the **Functions** tab in Playground.
2. From the Input section, take the light purple **MQTT** node (bubble) and place it onto the empty desktop.
3. Double-click the node. In the **Topic** line specify what you want the colour indicator to display. This now represents temperature. Copy the temperature message from the Messages tab (without a number) to the line. Alternatively, use this:


```
node/push-button:0/thermometer/0:1/temperature
```

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566156149/projects/kennel-temperature-monitor/image1.png)

Confirm by clicking the **Done** button.

4. Next to the MQTT node place a second one, this time a blue **Chart** node. This node can be found in the Dashboard section. This node is used to determine how the measured temperature is displayed on screen. Link both nodes together. 👌

![Node-RED dashboard chart](https://res.cloudinary.com/lukasfabik/image/upload/v1566156149/projects/kennel-temperature-monitor/image4.png)

5. Double-click on the Chart node. In the **X-axis** line, you can set the period of time the data in the chart will be displayed. This can be as long as you like, you choose.
   In the **Label** line, give your chart a name.

![Chart settings](https://res.cloudinary.com/lukasfabik/image/upload/v1566156149/projects/kennel-temperature-monitor/image3.png)

Confirm by clicking the **Done** button.

6. Now click the **Deploy** button 🚨 in the top right corner to get everything up and running.

❗ **Beware**: Every time you change the nodes you have to press Deploy again.

7. Click on **Dashboard**. Your temperature chart will be displayed. 👏

![Temperature chart from kennel](https://res.cloudinary.com/lukasfabik/image/upload/v1566156149/projects/kennel-temperature-monitor/image2.png)

## Time for action!

1. Using duct tape, stick the box **to a wall inside your dog´s kennel**. 🏡
2. Watch **how the temperature changes** when your dog is inside and outside the kennel. When your dog is inside, they warm up the kennel a bit. 🐕
   **Tip:** When temperatures drop, put down a blanket or some straw.
3. If it is -15 °C outside, don´t wait, **let your dog inside the house**, at least in the hallway!❄
4. Your reward? **A very happy dog**! 👌
