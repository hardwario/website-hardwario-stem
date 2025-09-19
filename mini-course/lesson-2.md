---
slug: lesson-2
title: Lesson 2 - Measure and draw
---
import Image from '@theme/IdealImage';


🧑‍💻 **Duration:** 30 minutes  
🎯 **Target audience:** individuals and small groups  

## 1. Introduction to Visual Programming

Playground allows programming by dragging and dropping blocks and responds immediately to connected modules.

## 2. Getting Started with HARDWARIO Playground

Make sure you have everything ready from the previous lesson:

 ✅ Playground is running  
 ✅ Dongle is connected  
 ✅ PIR sensor has batteries  
 ✅ In **Messages**, you can see the outputs from the PIR sensor  

## 3. First Program

Create a program to process the outputs from the **PIR Module**.

:::info

This text is not a complete **Node-RED** documentation.  
For a deeper understanding, we recommend the [official examples](https://docs.hardwario.com/tower/desktop-programming/node-red-programming/).

:::

**Task:** Prepare an **overview dashboard** with the following elements:

- 🧭 **Gauge** for PIR Module orientation  
- 📈 **Graph of orientation over time**  
- 🌡️ **Graph of temperature over time**  

👉 Pay attention to axis labels:
- **X-axis**: time  
- **Y-axis**: value  
  
## 4. Example Solution

Function for processing data from the **PIR Module**

<div class="container">
  <div class="row">
    <Image img={require('./img/iot-function_orientation.webp')}/>
  </div>
</div>
<br></br>

Resulting dashboard

<div class="container">
  <div class="row">
    <Image img={require('./img/iot-chart_orientation.webp')}/>
  </div>
</div>
<br></br>

## 5. Summary

✅ You have learned how to connect modules, monitor their outputs, and display them graphically.  

👉 Try also connecting the **Climate Module** and monitor pressure, humidity, or light.  

:::info
In this lesson, the **PIR Module** was used for orientation and temperature.  
Its motion detection is less suitable for quick testing, but you can try it if the surroundings are calm.
:::