---
slug: im-ok-button
title: Im ok button
---

## Introduction

Do your parents call you every day, asking if you got home from school? It’s a drag, but they simply worry about you. Make a button with which you can always send a simple message to their mobile. 📲

In this project, you will learn how **to use the button to send a message to your parents’ mobile**. 👩👱

You will need the **box with the button** and the **USB dongle**. You can do with the basic HARDWARIO set, the [Start Set](https://www.hardwario.store/p/start-set/).


## Get it started in the Node-RED

1. Put together the Start Set and pair it. For the Core Module, you need the **radio push button** firmware. If you don’t know how to download the firmware or what it is,  <a href="https://docs.hardwario.com/tower/firmware-development/hardwario-extension-tutorial/#flash-firmware" target="_blank">you can find out here</a>.
2. In the Playground, click on the **Functions tab**, where you find the  Node-RED programming desktop.
3. Place a light purple bubble, or node, in the desktop. You will find it on the left as **Input** **MQTT**.

      ![MQTT input node](https://res.cloudinary.com/lukasfabik/image/upload/v1566155396/projects/im-ok-button/image4.png)

4. Inside the node you will set up a key feature - which is pressing a button. Double-click on the node and **copy this line into the Topic field**:


```
node/push-button:0/push-button/-/event-count
```

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566155397/projects/im-ok-button/image8.png)

Confirm it with the **Done** button.

**Tip:** Instead of copying the line from here, you can simply copy the line that appears in the **Messages tab** after pressing the button.

## Set up your message

1. You can set up your message also here in the Node-RED. Drag the **yellow node from the Functions section called Change** anywhere next to the light purple MQTT input.


![Change Node HARDWARIO Playground](https://res.cloudinary.com/lukasfabik/image/upload/v1566155397/projects/im-ok-button/image7.png)

2. Double-click on the node and write the message for your parents into the **Rules** field. Just be careful, Blynk doesn’t display any diacritics. Little inspiration:
   *  _Easy. I’m home and safe._
   * _A celebrity came to visit….just kidding, it’s me._
   * _I was bitten by dogs, kidnapped by a UFO, but I made it home._

![HARDWARIO Playground MQTT messages](https://res.cloudinary.com/lukasfabik/image/upload/v1566155396/projects/im-ok-button/image6.png)

Confirm it with the **Done** button and link both nodes by dragging the mouse from one bubble to the other. 🐁

## Prepare the Blynk IoT app

The push notification is delivered through the **Blynk IoT** app. If you don't have one yet, create an account and a device template — see [this guide](https://docs.hardwario.com/tower/platform-integrations/blynk-app/) for how to do it, including creating templates and devices. You can also reuse a template from a previous project.

1. In Blynk IoT, push notifications are sent as an **Event** on the template. Open your template, go to the **Events** tab, and add a new Event (for example, name it `im_ok`). Turn on **Notifications** for that Event so the parents' phone receives a push message when it is triggered.

2. Borrow a smartphone from your mom or dad and make it yet a bit smarter. 🤓 They need the **Blynk IoT app** on their phone — from the [App Store](https://apps.apple.com/us/app/blynk-iot/id1559317868) or [Google Play](https://play.google.com/store/apps/details?id=cloud.blynk) — signed in with your account, so the notification lands on their device.

## Connect the mobile with the box

1. Go back to your computer. On the Node-RED desktop, add a green **Blynk IoT node** behind both nodes. You'll find it on the left under the Blynk IoT section.
2. Open the node by double-clicking it. You'll see a **small pencil** on the right. Click on it and a new window will open. In the **Url** field enter `blynk.cloud`, and into the **Auth Token** and **Template ID** fields copy the values from the device detail in the Blynk IoT web app on your computer. Set the node to log the Event you created (`im_ok`) so pressing the button fires that Event and its notification.

Confirm the settings by pressing the **Add** and **Done** buttons.

3. **Connect this node to the yellow node where you set the message.** Now you have programmed the device so that pressing the button on the box ➡️ fires the Blynk IoT Event ➡️ that pushes your "I'm OK" message all the way to your parents' mobile. **👾**

❗ Start and confirm the entire flow with the red **Deploy** button on the top right. 🚨

## And… Action!

1. Press the button. A **push notification popped** up on your parents' mobile. 💪

2. Not only will your parents think you are gifted but you will also avoid their daily phone calls. 🎉 **And that’s just so smart, it must be IoT**. 🕺
