---
slug: kennel-temperature-monitor
title: Kennel temperature monitor
---
## Introduction

Is it the kind of cold you wouldn't send a dog out in? Keep your best friend comfortable and track the temperature in their kennel. 🐶

This project teaches you to **measure temperature with IoT and show it on a chart**. All you need is the basic HARDWARIO set, the [Start Set](https://www.hardwario.store/p/start-set/). Your dog might thank you by making less mess. Or something like that. 🐩


## Prepare the box

1. Assemble and pair the Start Set. The Core Module needs the **twr-radio-push-button** firmware. If you don't know how to get the firmware or what it is, [you'll find out here](https://docs.hardwario.com/tower/desktop-programming/firmware-flashing/).
2. You'll see the temperature change in the **Messages** tab in Playground.

![Playground Messages tab with temperature messages](./img/kennel-temperature-monitor/image5.png)

## Set up Node-RED

1. You'll program in Node-RED. First, click the **Functions** tab in Playground.
2. Drag a light purple **mqtt in** node (a bubble) onto the empty canvas. You'll find it in the network section.
3. Double-click the node to open it. In the **Topic** field you choose what the chart will show. This time it's temperature, so copy the temperature message from the Messages tab (without the number) into the field. Or simply use this one:


```
node/push-button:0/thermometer/0:1/temperature
```

![MQTT node with the temperature topic](./img/kennel-temperature-monitor/image1.png)

Confirm with **Done**.

4. Next to it, place a second, light blue node called **Chart**. You'll find it in the Dashboard section. This node decides how the measured temperature appears on the screen. Wire the two nodes together. 👌

![Node-RED dashboard chart](./img/kennel-temperature-monitor/image4.png)

5. Double-click the Chart node. In the **X-axis** field, set how long a period the chart covers. Pick any length you like.
   In the **Label** field, give the chart any name you like.

![Chart settings](./img/kennel-temperature-monitor/image3.png)

Confirm with **Done**.

6. Now click the red **Deploy** button in the top right corner of the screen. 🚨 That starts the whole flow.

❗ **Watch out**: Every time you change the nodes, you have to click Deploy again.

7. Switch to the **Dashboard** tab. There's your chart. 👏

![Temperature chart from the kennel](./img/kennel-temperature-monitor/image2.png)

## Time for action!

1. Stick the box **to the inside wall of the kennel** with double-sided tape. 🏡
2. Watch **how the temperature changes** when your dog is outside and when it's inside. Your dog warms the kennel up a little with its body. 🐕
   **Our tip:** When temperatures drop, line the kennel with a blanket or straw.
3. When it's below −15 °C outside, don't wait: **let your dog into the house**, at least into the hallway. ❄
4. Your reward? **A happy dog**! 👌
