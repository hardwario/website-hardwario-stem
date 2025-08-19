---
slug: warmes-coldes-place
title: Warmes coldes place
---

## Introduction

 Thi1. Go back t3. In the **Virtual Pin** line, write the number you chose as a PIN in Blynk. Do not use the letter "V".

![Node-RED Blynk set pin](https://res.cloudinary.com/lukasfabik/image/upload/v1566156993/projects/wormest-coldest-place/image7.png)

Confirm it with the **Done** button.r computer. In the Node-RED, add the **dark green Write node** behind both nodes. You can find it on the left, under the Blynk ws section.

![Node-RED Blynk write](https://res.cloudinary.com/lukasfabik/image/upload/v1566156993/projects/wormest-coldest-place/image5.png)

2. Open the node by double-clicking. You'll see a **small pencil** on the right. Click on it and a new window will open. In the **Auth Token** field, copy the token you have sent to your email. Into the **URL** field, copy the Blynk Cloud Server from the bottom window: `ws://blynk-cloud.com/websockets`ject will reveal all the secrets of your school, whether someone hunts ghosts or just wants to find a hot place for their next date. Measure the temperature at different spots of your school with your classmates and try to be the one to discover the biggest extreme. 😱

With this project you will learn to **measure temperature with IoT and display it on your mobile**. All you need is the basic HARDWARIO set, the [Start Set](https://shop.hardwario.com/p/start-set/).

**Suggest the game to a physics teacher** to add some excitement to the lesson or go for it with your friends after school.

**This game is all about winning.** Who finds the coolest or hottest place in school is **the king!** 👑 If there are several boxes in your class, either work individually or in  small groups. If you have only one, take turns.


## Get your box ready

1. Put together the Start Set and pair it. For the Core Module, you need the **radio push button** firmware. If you don’t know how to download the firmware or what it is, [you will find out here](https://docs.hardwario.com/tower/firmware-development/firmware-quick-start/).
2. You can see the temperature changes in the **Messages** tab in the Playground.

![MQTT messages in HARDWARIO Playground](https://res.cloudinary.com/lukasfabik/image/upload/v1566156994/projects/wormest-coldest-place/image10.png)

## Set up the Node-RED

1. Set your own indicator to record the lowest or highest temperature. On your computer, start with the bubbles in the [Node-RED](https://docs.hardwario.com/tower/firmware-development/hardwario-extension-tutorial/#flash-firmware). First, click on the **Functions** tab in the Playground.
2. Place the light purple node (a bubble) named **MQTT** in the empty desktop.  You can find the node in the Input section.
3. Double-click on the node to open it. In the **Topic** line you will specify what you want the colour indicator to display. Now it will be temperature. Therefore, copy the message with temperature from the Messages tab (without a number) into the field. Or just use this one:


```
node/push-button:0/thermometer/0:1/temperature
```

![MQTT input topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566156994/projects/wormest-coldest-place/image9.png)

Confirm it with the **Done** button.

## Get the app started on your mobile

1. The box connects to your smartphone thanks to the **Blynk app**. 📱 [**Find out how to deal with Blynk**](https://docs.hardwario.com/tower/platform-integrations/blynk-app/).
2. Select **Gauge** (indicator) from the menu. So far, it looks like this:

![Blynk - gauge](https://res.cloudinary.com/lukasfabik/image/upload/v1566156993/projects/wormest-coldest-place/image6.png)

3. Double-click on the gauge. It will open its settings. Tap on the **PIN** button.

![Blynk - set virtual pin](https://res.cloudinary.com/lukasfabik/image/upload/v1566156993/projects/wormest-coldest-place/image4.png)

4. The PIN setup will open. Select **Virtual** and choose **any number** you want on the right. Remember it for later.

![Blynk - set virtual pin](https://res.cloudinary.com/lukasfabik/image/upload/v1566156993/projects/wormest-coldest-place/image2.png)

Confirm it with the **OK** button.

5. Besides the PIN button, set **from how many degrees to how many degrees** the chart will show the temperature. Make it generous, for example, try -30 to 45 °C.
   In the line below next to the text, type the /**pin**/ unit, which will show after measurement: **°C**.

![Blynk - set range of values](https://res.cloudinary.com/lukasfabik/image/upload/v1566156994/projects/wormest-coldest-place/image8.png)

6. Go back to the chart with the arrow and just click the **Play** triangle in the upper right corner.

## Connect your mobile with the box

1. Go back to your computer. In the Node-RED, add the **dark green Write node** behind both nodes. You can find it on the left, under the Blynk ws section.


![Node-RED Blynk write](https://res.cloudinary.com/lukasfabik/image/upload/v1566156993/projects/wormest-coldest-place/image5.png)

1. Open the node by double-clicking. You’ll see a **small pencil** on the right. Click on it and a new window will open. In the **Auth Token** field, copy the token you have sent to your email. Into the **URL** field, copy the Blynk Cloud Server from the bottom window: `ws://blynk-cloud.com/websockets`

Confirm the setting with the **Add** button. But don’t leave the node just yet. 👈

3. In the **Virtual Pin** line, write the number you chose as a PIN in Blynk. Do not use the letter “V”.


![Node-RED Blynk set pin](https://res.cloudinary.com/lukasfabik/image/upload/v1566156993/projects/wormest-coldest-place/image7.png)


Confirm it with the **Done** button.

1.  Now **connect both nodes** and click on the red **Deploy** button at the top right. 🚨

![Connect Blynk](https://res.cloudinary.com/lukasfabik/image/upload/v1566156993/projects/wormest-coldest-place/image5.png)

##  One-up your class

1. Alone or in a group, **guess which place might be the hottest or coolest at school**.🔥 ⛄
2. Each individual or a group has **only 15 minutes** to explore. 🔦 Let’s make it exciting.
3. Take the box to the spot and **watch the temperature on your mobile**. It may take some time for the temperature to show in the gauge.

![measure temperature and show in Blynk](https://res.cloudinary.com/lukasfabik/image/upload/v1566156993/projects/wormest-coldest-place/image3.png)

4. Try several places and in the end, call the most extreme results. **Congrats to the winners!** 🎇
