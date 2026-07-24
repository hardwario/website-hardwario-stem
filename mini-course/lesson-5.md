---
slug: lesson-5
title: Lesson 5 - Wrap-up and Theory
---

**Duration:** 45 minutes  
**Target group:** individuals, pairs, or class  

**Task:** Summarize what you have learned, understand the theory of **Node-RED** and **MQTT**, and create a small project that ties everything together.

## 1. Summary of what we have achieved

In the previous lessons, you:

- prepared the **HARDWARIO TOWER**, paired modules, installed firmware,  
- measured various values (temperature, orientation, motion),  
- created graphs and dashboards in Playground,  
- filtered messages, used conditions,  
- controlled the LED strip and other outputs.  

> The purpose of this lesson is to connect all this knowledge, understand how it works “under the hood,” and try it out in one complete project.

## 2. What is Node-RED

Node-RED is a visual environment for “flow-based” programming, often used in IoT.

- It consists of **nodes** that receive, process, and send messages.  
- Nodes are connected into **flows**.  
- A message usually has two important parts:  
  - `topic` – subject, category/channel of the message  
  - `payload` – the content of the message, e.g., a number, text, or a **JSON** object  
- Nodes such as **Switch**, **Change**, **Function**, **Debug** allow you to modify, filter, or react to messages.  
- Playground uses **Node-RED** for visually building flows, testing, and interacting with devices.  

## 3. What is MQTT

**MQTT** is a messaging protocol, particularly suitable for IoT.

- Principle *publish / subscribe*: a device (publisher) sends messages on a certain topic, and other devices (subscribers) subscribe to that topic and receive messages.  
- Difference compared to direct sending: the publisher does not know who will receive the message; the subscriber does not know who sent it.  
- A **broker** is the server that mediates all messages.  
- Important features:  
  - topic hierarchy (e.g., `home/room1/temperature`)  
  - possible QoS levels (Quality of Service) – e.g., “delivered at least once,” “delivered exactly once”  
  - retained messages – the last message can be stored and new subscribers will receive it immediately upon subscribing  
- Security: authentication, encrypted communication, careful management of keys / tokens.  

## 4. How everything fits together – architecture

Here is a simplified diagram of how the message flow works in your projects:

- The sensor module measures and sends data to **HARDWARIO Playground**.  
- The **HARDWARIO Playground** application takes the message received by the **Radio Dongle** and publishes it via the **MQTT** protocol.  
- **Node-RED** processes the message from **MQTT**: it can filter, react, or forward it again through **MQTT**.  
- The broker distributes the messages to those interested – applications, output modules, dashboards.  
- Outputs react – LEDs, notifications, etc.  

## 5. Final project

Try the following project:

**Task:**

1. Use a sensor (e.g., temperature) and a motion/orientation detection module.  
2. When the temperature exceeds the set threshold *and* motion/orientation change is detected, then:  

   - the LED strip lights up red,  
   - a message is displayed in **HARDWARIO Playground**.  

3. Show a dashboard with the current temperature, motion/orientation status, and LED strip status.  
4. Draw the message flow: topic(s), payloads, nodes in **Node-RED**, who publishes / subscribes.  

## 6. Good practices and what to watch out for

- Name topics carefully – clarity helps.  
- Don’t send data unnecessarily often – it saves the network and device resources.  
- Security: never share passwords / tokens / keys. Always use strong ones.  
- Monitor what happens in case of outages or errors – what if the sensor doesn’t send, or the **MQTT broker** is unavailable?  

## 7. Reflection and sharing

- What was the hardest part for you? What was the easiest?  
- Which part would you like to explore in more depth (e.g., how **MQTT** works, security, databases…)?  
- Share your project or message flow with others – explain how you built it.  

## Summary ✅

Congratulations! You have completed the entire course. You now know **HARDWARIO TOWER** not only practically, but also on a theoretical level.  
You already have the basics to build your own IoT projects – and you can continue expanding them with your own ideas.  
