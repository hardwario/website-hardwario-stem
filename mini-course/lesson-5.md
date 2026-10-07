---
slug: lesson-5
title: Lesson 5 – Wrap-up and theory
---

**Duration:** 45 minutes  
**Target group:** individuals, pairs or the whole class  

**Task:** Sum up what you have learned, get to know the theory behind **Node-RED** and **MQTT**, and build a small project that ties it all together.

## 1. What you have achieved

In the previous lessons, you:

- prepared the **HARDWARIO TOWER** kit, paired modules and uploaded firmware,  
- measured various quantities (temperature, orientation, motion),  
- created charts and dashboards in Playground,  
- filtered messages and used conditions,  
- controlled the LED strip and other outputs.  

> In this lesson, you will connect all this knowledge, understand how it works “under the hood” and try it out in one complete project.

## 2. What is Node-RED

Node-RED is a visual environment for “flow-based” programming that is often used in IoT.

- It is made of **nodes** that receive, process and send messages.  
- Nodes are connected into **flows**.  
- A message usually has two important parts:  
  - `topic`: the category or channel of the message  
  - `payload`: the content of the message, for example a number, text or a **JSON** object  
- Nodes such as **Switch**, **Change**, **Function** or **Debug** modify messages, filter them or react to them.  
- Playground uses **Node-RED** to build flows visually, test them and interact with devices.  

## 3. What is MQTT

**MQTT** is a messaging protocol that is especially well suited to IoT.

- The *publish / subscribe* principle: a device (publisher) sends messages to a certain topic, and other devices (subscribers) subscribe to that topic and receive the messages.  
- The difference from sending directly: the publisher does not know who will receive the message, and the subscriber does not know who sent it.  
- A **broker** is the server that relays all the messages.  
- Important features:  
  - a hierarchy of topics (for example `home/room1/temperature`)  
  - QoS (Quality of Service) levels, for example “delivered at least once” or “delivered exactly once”  
  - retained messages: the last message can be stored, and new subscribers receive it as soon as they subscribe  
- Security: authentication, encrypted communication, careful management of keys and tokens.  

## 4. How it all fits together: the architecture

In a simplified view, a message travels through your projects like this:

- The sensor module measures and sends the data to **HARDWARIO Playground**.  
- The **HARDWARIO Playground** application takes the message that the **Radio Dongle** received over the radio and publishes it over the **MQTT** protocol.  
- **Node-RED** processes the message from **MQTT**: it can filter it, react to it or pass it on again over **MQTT**.  
- The broker delivers the messages to everyone who subscribes to them: applications, output modules and dashboards.  
- The outputs react: LEDs, notifications and so on.  

## 5. Final project

Try the following project:

**Task:**

1. Use a sensor (for example a temperature sensor) and a module that detects motion or orientation.  
2. When the temperature exceeds the set threshold *and* the sensor detects motion or a change in orientation at the same time:  

   - the LED strip lights up red,  
   - a message appears in **HARDWARIO Playground**.  

3. Show the current temperature, the motion or orientation status and the LED strip status on a dashboard.  
4. Draw the message flow: the topics, payloads, nodes in **Node-RED**, and who publishes and subscribes to what.  

## 6. Good practice and pitfalls

- Name your topics carefully; clarity pays off.  
- Don’t send data more often than you need to; it saves the network and the device’s resources.  
- Security: never share passwords, tokens or keys, and choose strong passwords and keys.  
- Check what happens in case of an outage or error: what if a message from the sensor does not arrive or the **MQTT broker** is unavailable?  

## 7. Reflection and sharing

- What was the hardest part for you? And the easiest?  
- Which part would you like to explore in more depth (for example how **MQTT** works, security, databases…)?  
- Share your project or message flow with others and explain how you built it.  

## Summary ✅

Congratulations! You have completed the whole course, and you now know the **HARDWARIO TOWER** kit both in practice and in theory.  
You have the basics for your own IoT projects and can keep developing them with your own ideas.  
