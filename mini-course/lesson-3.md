---
slug: lesson-3
title: Lesson 3 – To show or not to show?
---
import Image from '@theme/IdealImage';

🧑‍💻 **Duration:** 30 minutes  
🎯 **Target audience:** individuals (or groups that get along)  

## 1. Introduction

You can already connect **HARDWARIO TOWER** modules and show their outputs in charts and on gauges.  

In this lesson, we will go deeper into programming in **HARDWARIO Playground**. You will learn to:  
- work with messages (**messages**)  
- filter them by topic  
- create conditional outputs (for example, turn on an LED only when a value meets a certain condition)  

This way, you start programming the **behavior of the system**, not just collecting data.

## 2. What’s ready

✅ The **PIR Module** is connected, powered and paired.  
✅ Playground receives data on orientation, temperature and the presence of a person.  
✅ The dashboard shows the current values from the module.  
✅ You know how to show or adjust the values again if they disappear.  

## 3. Who starts it all

Start your flow with an **mqtt in** node that subscribes to the orientation messages. In my case, the topic is `node/motion-detector:0/orientation`, but yours may differ slightly depending on the device name.

:::info
To work with a message, it first has to arrive. The **PIR sensor** is great for testing, or more precisely the accelerometer in its Core Module, because you can easily change how many messages arrive and how often simply by tilting the module.
:::

You already know from the previous lesson what the node returns: you can, for example, plot its output in a chart. For a better understanding, though, we recommend connecting the output of the **mqtt in** node to a **debug** node.  

- By default, the debug output shows the content of `msg.payload`, the actual value coming from the sensor.  
- On my **PIR Module**, numbers from **1 to 6** appear, depending on how it is turned. This is exactly the value we will work with.


## 4. Switch splits the output

The **Switch** node (in the *Function* section) has one input and at least one output. Once you open it, you can give it a name to keep your flow easy to follow.  

- In the **Property** field, set the value the node should work with, in this case `msg.payload`.  
- Below, define the conditions for each output.  

For this task, we are interested in the case when the orientation is **6** (the module is lying on the PIR sensor). The **otherwise** option at the end of the list of conditions catches everything else.

## 5. Change modifies the message

At this point, `msg.payload` still holds 1–5 or 6, depending on which Switch output the message went through.  

- The **Change** node changes `msg.payload` to the text you choose.  
- In my case:  
  - values `payload 1–5` → **“I am calm”**  
  - value `payload 6` → **“Careful, I’m falling”**

So you use two **Change** nodes.

## 6. Text on the dashboard

You show text with the **Text** node from the **Dashboard** section.  

- Give it a name (for example *“What about the PIR sensor?”*)  
- Set it to display `msg.payload`, which now holds *“I am calm”* or *“Careful, I’m falling”*.

<div class="container">
  <div class="row">
    <Image img={require('./img/iot-function-text.webp')} alt="Node-RED flow: Change nodes set the text by orientation and pass it to a dashboard Text node"/>
  </div>
</div>

## 7. From number to text

Does it work?  
When you turn the **PIR Module**, you should see the text on the dashboard change:

- **“I am calm”** → at orientation 1–5  
- **“Careful, I’m falling”** → at orientation 6  

If you also have the **Gauge** node from the previous lesson, you will see the current orientation of the **PIR Module** at the same time.

## 8. Guard

So far, you have used the **PIR Module** as a **die** that knows which side it is lying on.

Now use it as a real **motion detector**!

👉 Program it to watch for the **presence of a person** and to write on the **dashboard** whether it sees someone or not.

## 9. Summary

✅ The **input** generates messages, and you can change them with **Change**.  
✅ You can filter messages with **Switch** and pass them on to other nodes.  
✅ You show your own messages on the **dashboard**.
