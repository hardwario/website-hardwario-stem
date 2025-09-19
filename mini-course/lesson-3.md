---
slug: lesson-3
title: Lesson 3 - To show or not to show?
---
import Image from '@theme/IdealImage';

🧑‍💻 **Duration:** 30 minutes  
🎯 **Target audience:** individuals (or groups that don’t argue)  

## 1. Introduction

You already know how to connect **HARDWARIO TOWER** modules and display their outputs using charts and gauges.  

In this lesson, we will dive deeper into programming in the **HARDWARIO Playground** environment. You will learn how to:  
- work with messages (**messages**)  
- filter them by topic  
- create conditional outputs (e.g., turn on an LED only when a certain value is met)  

This way, you will start programming the **system behavior**, not just collecting data.

## 2. What’s Ready

✅ The **PIR Module** is connected, powered, and paired.  
✅ Playground is receiving data about orientation, temperature, and presence.  
✅ The dashboard displays current values from the module.  
✅ You know how to display or adjust the values again if they disappear.  

## 3. Who Starts It All

In your flow, start with the **mqtt in** node, which will subscribe to orientation messages.  
In my case it is named: `node/motion-detector:0/orientation`, but on your device it may differ slightly depending on the module name.

:::info
In order to work with a message, it must arrive first. For testing, the **PIR sensor** is perfect, specifically its gyroscope, because you can easily influence the number and frequency of messages simply by tilting the module.
:::

You already know from the previous lesson what this node returns — for example, it can be plotted on a chart.  
For better understanding, however, we recommend connecting the output of the **mqtt in** node to a **debug** node.  

- By default, the debug output displays the content of `msg.payload`, i.e., the actual value coming from the sensor.  
- On my **PIR Module**, numbers in the range **1 to 6** appear depending on its orientation — and this is exactly the value we will work with further.


## 4. Switch Splits the Output

The **Switch** node (from the *Function* section) has one input and at least one output.  
After opening it, you can name the node, which will help you keep your flow organized.  

- In the **Property** field, set the value the node should work with — in this case `msg.payload`.  
- Below, define the individual output conditions.  

For this task, we are interested in the situation when the orientation has the value **6** (the module is lying on the PIR sensor).  
Everything else will be caught using the **otherwise** option, which is located at the end of the condition list.

---

## 5. Change Modifies the Message

At this point, `msg.payload` is still set to a value of 1–5 or 6, depending on which Switch output the flow is currently using.  

- The **Change** node modifies `msg.payload` to your chosen text value.  
- In my case:  
  - values `payload 1–5` → **"I am calm"**  
  - value `payload 6` → **"Careful, I’m falling"**

So two **Change** nodes are used.

---

## 6. Text in the Dashboard

To display text, use the **Text** node from the **Dashboard** section.  

- Give it a name (e.g., *“What about the PIR sensor?”*)  
- Set it to display `msg.payload` — at this point, it will take

## 7. Guard

So far, the PIR module has been used as a **gyroscopic cube**.
Now, use it as a proper **PIR sensor**!

👉 Program it so that it monitors the **presence of a person** and writes to the **Dashboard** whether it detects someone or not.

## 8. Summary

✅ The **input** generates messages, and you can modify them using **Change**.
✅ You can filter messages using **Switch** and pass them on to other nodes for processing.
✅ In the **Dashboard**, you print your own messages.