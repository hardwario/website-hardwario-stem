---
slug: iguana-terrarium-monitor
title: Iguana terrarium monitor
---
import Image from '@theme/IdealImage';

## Introduction

Whether you keep an iguana, a turtle, a snake or a gecko, you want it to feel as comfortable as possible at your place. 👌🦎 Monitor the climate in the terrarium and find out whether your green friend has ideal living conditions.


In this project, you will learn to **measure four climate values and show them in charts**: temperature, humidity, illuminance and air pressure. As a reward, your green friends might tell you a few stories about their dinosaur ancestors. 🦖 Or something like that.

If you already have the Start Set, you will also need the [Climate Module](https://www.hardwario.store/p/climate-module/). The [Clime Set](https://www.hardwario.store/p/clime-set) has **everything** you need.


## Prepare the box

1. Assemble and pair the Clime Set. If this is your first time, [we have a simple guide for you](/mini-course/lesson-1/); the steps are the same as for the Start Set. The Core Module needs the **twr-radio-climate-monitor** firmware. If you don't know how to get the firmware or what it is, <a href="https://docs.hardwario.com/tower/desktop-programming/firmware-flashing/" target="_blank">you'll find out here</a>.


2. You'll see the temperature, illuminance, humidity and air pressure change in the **Messages** tab in Playground.

<div class="container"> <div class="row"> <Image img={require('./img/iguana-terrarium-monitor/iguana-terrarium-monitor-1.webp')} alt="Playground Messages tab listing climate-monitor topics with temperature, orientation, and presence values"/> </div> </div>

## Set up Node-RED

1. You'll program in Node-RED. First, click the **Functions** tab in Playground.

2. Drag a light purple **mqtt in** node (a bubble) onto the empty canvas. You'll find it in the network section.

3. Double-click the node to open it. In the **Topic** field you choose what the colored gauge will show. This time it's temperature, so copy the temperature message from the Messages tab (without the number) into the field. Or simply use this one:

```
node/climate-monitor:0/thermometer/0:0/temperature
```

<div class="container"> <div class="row"> <Image img={require('./img/iguana-terrarium-monitor/iguana-terrarium-monitor-2.webp')} alt="Edit mqtt in node dialog with the climate-monitor temperature topic in the highlighted Topic field"/> </div> </div>
Confirm with **Done**.

4. Next to it, place a second, light blue node called **Gauge**. You'll find it in the Dashboard section. This node decides how the measured temperature appears on the screen.

5. Double-click the Gauge node. In the **Range** field, set the temperature range the gauge will show. 0 to 40 °C is enough.
In the **Label** field, give the gauge any name you like, and add the temperature unit, °C, in the **Value format** field. If you like, also pick a color for the gauge in the **Colour gradient** field.

<div class="container"> <div class="row"> <Image img={require('./img/iguana-terrarium-monitor/iguana-terrarium-monitor-3.webp')} alt="Edit gauge node dialog for temperature: Label, value format with degrees Celsius, and range 0 to 40 highlighted"/> </div> </div>
Confirm with **Done**.

6. Temperature is done, so move on to the other values. Below the temperature nodes, add two more of the same nodes: **MQTT** and **Gauge**.

7. This time, copy the humidity topic into the **MQTT** node. It looks like this: node/climate-monitor:0/hygrometer/0:4/relative-humidity.
In the new **Gauge** node, set **Range** to 0 to 100 and enter % in **Value format** (humidity is measured in percent). Don't forget to name the gauge, and give it a color if you like.

<div class="container"> <div class="row"> <Image img={require('./img/iguana-terrarium-monitor/iguana-terrarium-monitor-4.webp')} alt="Humidity MQTT node with its Gauge highlighted; edit dialog shows Label, percent value format, and range 0 to 100"/> </div> </div>

8. Next up is the illuminance gauge. 💡 The steps are exactly the same: one **MQTT** node and one **Gauge** node.

9. Copy this topic into the **MQTT** node: node/climate-monitor:0/lux-meter/0:0/illuminance. In the **Gauge** node, set the range to 0 to 10,000 this time and enter the illuminance unit, lx (lux), in **Value format**. Again, pick a name and a color if you like.

<div class="container"> <div class="row"> <Image img={require('./img/iguana-terrarium-monitor/iguana-terrarium-monitor-5.webp')} alt="Illuminance MQTT node with its Gauge highlighted; edit dialog shows lx value format and range 0 to 10000"/> </div> </div>

10. Three values down, one to go: air pressure. Add one more **MQTT** node and one more **Gauge** node.

11. Copy the **Topic** for air pressure into the MQTT node:

```
node/climate-monitor:0/barometer/0:0/pressure
```
In the new **Gauge** node, set the range to 80,000 to 110,000. The sensor sends air pressure in pascals, and near the ground it is around 100,000 Pa. You don't need to set the unit this time, but feel free to add a name and a color.

<div class="container"> <div class="row"> <Image img={require('./img/iguana-terrarium-monitor/iguana-terrarium-monitor-6.webp')} alt="Pressure MQTT node with its Gauge highlighted; edit dialog shows the Label and range 0 to 10000"/> </div> </div>

12. To see more than just the current numbers, add charts for three of the values. They show at a glance how humidity, illuminance and air pressure changed over the last hour. 📈

Below the Gauge nodes for humidity, illuminance and pressure, add one **Chart** node each from the Dashboard section.

13. Open the three nodes one by one and give each the same **Label** as the Gauge node next to it. In **X-axis**, set the period you want to see the results for (one hour should already be set).

In **Y-axis**, enter the same ranges as in the neighboring Gauge nodes: 0 to 100 for humidity, 0 to 10,000 for illuminance and 80,000 to 110,000 for pressure.

<div class="container"> <div class="row"> <Image img={require('./img/iguana-terrarium-monitor/iguana-terrarium-monitor-7.webp')} alt="Edit chart node dialog with Label, X-axis interval, and Y-axis range highlighted, and three chart nodes in the flow"/> </div> </div>
Done! Before you start measuring, add one more neat feature: a virtual guard.

## Add the ideal temperature indicator

The virtual guard tells you whenever your reptile's terrarium is not at the right temperature. 🐍 You'll build it from several nodes.

1. Above everything you've built so far, add a **Numeric** node from the Dashboard section. You'll recognize it by the 123 on it.
Open it and fill in **Range** and **Value format** exactly as for the first Gauge node. If you don't remember them, check the screenshot below. Don't forget to name the node in the Label field, for example Ideal temperature.

<div class="container"> <div class="row"> <Image img={require('./img/iguana-terrarium-monitor/iguana-terrarium-monitor-8.webp')} alt="Numeric node on the canvas; edit dialog with Label, value format with degrees Celsius, and range 0 to 40 highlighted"/> </div> </div>

2. Right next to it, add another node, a new one this time: a **Change** node from the Function section.
Open it and set **flow.optimal** and **msg.payload** in it, one below the other (as in the screenshot).
**What this is for**: These two nodes (Numeric and Change) set the ideal temperature, and the guard warns you when the measured temperature is off. 👮 You'll set the optimal temperature with the Numeric node on the Dashboard, and the Change node stores it in the flow.optimal variable. The nodes you add next work with that variable.

<div class="container"> <div class="row"> <Image img={require('./img/iguana-terrarium-monitor/iguana-terrarium-monitor-9.webp')} alt="Change node next to the Numeric node; edit dialog with rule Set flow.optimal to msg.payload highlighted"/> </div> </div>

3. Now it's time for a **Switch** node, which is also in the **Function** section. Drag it next to the MQTT node for temperature and open it.

In it, you'll set up three situations that can happen while you watch the ideal temperature: the temperature is just right, too low or too high.

4. Click the small **+add** button twice so the node has three situations. Then set them up exactly as in the screenshot below. Notice that every line contains “**flow.optimal**”. The program always checks the current value of this variable and uses it to tell which situation it is.

<div class="container"> <div class="row"> <Image img={require('./img/iguana-terrarium-monitor/iguana-terrarium-monitor-10.webp')} alt="Edit switch node dialog with three rules comparing msg.payload against flow.optimal, outputs 1 to 3"/> </div> </div>

5. Now set up the messages that tell you about all three situations. Place three **Change** nodes one below the other next to the Switch node.

6. Open the three Change nodes one by one and write a message in each, for example ‘Temperature too high / too low / just right’.
If you set up the **Switch** node exactly as in our screenshot, write the too-high message in the top **Change** node, the too-low message in the middle one and the just-right message in the bottom one.

<div class="container"> <div class="row"> <Image img={require('./img/iguana-terrarium-monitor/iguana-terrarium-monitor-11.webp')} alt="Three Change nodes next to the Switch node; edit dialog with the too-high temperature message highlighted"/> </div> </div>

7. Just one more node and you can start it all up! 🏎️ After the three Change nodes, add a **Text** node from the **Dashboard** section. It shows the messages you set up in the previous step.

8. Open the node and name it in the **Label** field, for example Temperature status.

<div class="container"> <div class="row"> <Image img={require('./img/iguana-terrarium-monitor/iguana-terrarium-monitor-13.webp')} alt="Text node after the Change nodes; edit dialog with the temperature status Label highlighted"/> </div> </div>

9. Done! Now wire up the whole flow as in our screenshot. If you feel up to it, wire it yourself and then just check it against the screenshot. 💪

<div class="container"> <div class="row"> <Image img={require('./img/iguana-terrarium-monitor/iguana-terrarium-monitor-14.webp')} alt="Complete connected flow: four sensor branches with gauges and charts plus the ideal temperature guard, Deploy highlighted"/> </div> </div>

10. Click the **Deploy** button in the top right to start this whole big flow. The Dashboard will show your measurements roughly like this:

<div class="container"> <div class="row"> <Image img={require('./img/iguana-terrarium-monitor/iguana-terrarium-monitor-15.webp')} alt="Dashboard gauges showing temperature, humidity, and illuminance values"/> </div> </div>

## Ready, steady, go!

1. Tape the box firmly **inside the terrarium of your scaly little brother or sister**. 🏡

2. On the Dashboard, find the **optimal temperature setting** and use the two arrows to choose the temperature your iguana, snake or turtle needs. Look up the ideal value for your pet online.

<div class="container"> <div class="row"> <Image img={require('./img/iguana-terrarium-monitor/iguana-terrarium-monitor-16.webp')} alt="Dashboard detail: the optimal temperature setting with arrows and the temperature status message highlighted"/> </div> </div>

3. Check that your pet has the ideal temperature, and watch how pressure, illuminance and humidity **rise and fall**.
4. If the measured temperature is far off the ideal one, ask for advice at a pet store or your vet, so your reptile stays **perfectly happy**. 👌
