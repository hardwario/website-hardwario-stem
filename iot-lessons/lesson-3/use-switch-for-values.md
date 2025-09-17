---
slug: use-switch-for-values
title: Use Switch for values
---
import Image from '@theme/IdealImage';

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

---

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