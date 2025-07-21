---
slug: fridge-temperature
title: Fridge temperature
---
## Introduction

Do you think it's the same temperature in different places in your fridge or freezer? And how's the freezer functioning, is it freezing properly? Discover the answers to these questions through our IoT project. Using the HARDWARIO Start Set, the temperature will be displayed on your mobile phone. ❄

This project will teach you how to **measure temperature using IoT**. All you need is the basic HARDWARIO [Start Set](https://shop.hardwario.com/p/start-set/).


## Prepare the box

1. Put the Start Set together and pair it.  You need the **radio-push-button** firmware for the Core Module. 
2. The temperature changes are displayed in the **Messages** tab in Playground.

![MQTT](https://res.cloudinary.com/lukasfabik/image/upload/v1566155066/projects/fridge-monitoring/image4.png)

## Set up Node-RED

1. To see temperature changes, create your own chart using the bubbles in Node-RED. Firstly, click the **Functions** tab in Playground.
2. From the Input section, take the light purple **MQTT** node (bubble) and place it onto the empty desktop.
3. Double-click the node. In the **Topic** line specify what you want the colour indicator to display. This now represents temperature. Copy the temperature message from the Messages tab (without a number) to the line. Alternatively, use this:


```
node/push-button:0/thermometer/0:1/temperature
```

![Node-RED](https://res.cloudinary.com/lukasfabik/image/upload/v1566155066/projects/fridge-monitoring/image2.png)

Confirm by clicking the **Done** button.

4. Next to the MQTT node place a second one, this time a blue **Chart** node. This node can be found in the Dashboard section. This node is used to determine how the measured temperature is displayed on screen. Link both nodes together. 👌
![Node-RED](https://res.cloudinary.com/lukasfabik/image/upload/v1566155066/projects/fridge-monitoring/image5.png)


5. Double-click on the Chart node. In the **X-axis** line, you can set the period of time the data in the chart will be displayed. This might be, for example, for the duration of your classes.
   In the Label line, give your chart a name.

![Chart](https://res.cloudinary.com/lukasfabik/image/upload/v1566155066/projects/fridge-monitoring/image1.png)

Confirm by clicking the **Done** button.

6. Now click the **Deploy** button 🚨 in the top right corner to get everything up and running.
   ❗ **Beware**: Every time you change the nodes you have to press Deploy again.
7. Click on **Dashboard**. Your temperature chart will be displayed. 👏

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566155066/projects/fridge-monitoring/image3.png)

## Measure as you please

1. Now run your **own experiments**. Which place **in your fridge** is the coldest? Is it in the top, the middle, or the very bottom? 👌
   Is the fridge really cooling **as promised by the manufacturer**? 🕵️
2. Try the same **in your freezer**. Move the box from the bottom to the top.
   ❓ Try to figure out where to put vegetables, meat or milk. Google what foods need to be kept colder than others. 💡
