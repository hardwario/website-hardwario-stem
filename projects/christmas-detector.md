---
slug: christmas-detector
title: Christmas detector
---
import Image from '@theme/IdealImage';

## Introduction


Santa and Baby Jesus are highly secretive people, but with IoT you can catch either of them in the act of bringing presents. 🎄 The PIR Module: motion detector will help you

Under this project, you will learn how to **detect motion in a remote room**. Thanks to this you can check whether Santa Claus, Baby Jesus, Grandpa Frost or someone else is in your home. 😲

If you already have the Starter Set, you will only need the [PIR Module](https://shop.hardwario.com/p/pir-module/). Alternatively, the [Motion Set](https://www.hardwario.store/p/motion-set) contains **all the equipment** you need.


## Prepare the box

1. Put your Set together. You need the **bcf-radio-motion-detector** firmware for the Core Module. <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-1.webp')}/> </div> </div>

2. If the firmware is correctly installed, you will see the **motion detector** under the Devices Alias tab in Playground. <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-2.webp')}/> </div> </div>

## Set up Node-RED

1. Start programming in Node-RED. First, click on the **Functions** tab in Playground.

2. Drag a light purple **MQTT node** (bubble) onto the empty desktop. You can find it under the Input section.

<div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-3.webp')}/> </div> </div>

3. Double-click the node. In the **Topic** line, specify the key value. It will now function as a counter of movements that are recorded:

```
node/motion-detector:0/pir/-/event-count
```

<div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-4.webp')}/> </div> </div>
Confirm with the **Done** button.

1. Behind this node, place a **Switch node** from the Function section. This allows the device to recognize that the detector is on and can report any movements. 

2. In the node, fill in the **Property** line as _flow_. _detectorActive_ and edit the condition in the field to _is true_ (take a look at the screenshot). **Our tip**: Read more about this feature. <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-5.webp')}/> </div> </div>

Confirm with the **Done** button.

6. Behind the switch node, place a **Change node** from the same Function section. <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-6.webp')}/> </div> </div>

7. In the node, you set the message that you want to pop up when our bearded friend (or Baby Jesus) brings their presents. 🎅 👼 For example: _Santa/Baby Jesus is in the living room_. **Our tip**: If you also want to set notifications for your mobile, do not use accent marks (čárky) or hooks (háčky), Blynk does not like them. <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-7.webp')}/> </div> </div>

Confirm with the **Done** button.

8. Above this flow, start another one to be able to switch the detector on and off. It should consist of two nodes. The first is a **Switch node** from the Dashboard section. <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-8.webp')}/> </div> </div>

9. In this node, edit **Label** to _Detector Status_. This is how your Dashboard project will be labelled. <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-9.webp')}/> </div> </div>

Confirm with the **Done** button.

10. Behind the switch node, place a **Change node** from the Dashboard section. That´s right, just like the one you already have a little lower down. 👍 <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-10.webp')}/> </div> </div>

11. In the **Rules** field, set the function to: _flow_. _detectorActive_ (see screenshot). This enables the device to recognize if the button is on or off. Beware of making typing errors! <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-11.webp')}/> </div> </div>
Confirm with the **Done** button.

12. Now connect all the nodes **as shown in the screenshot**, but don't press the Deploy button yet. The last node, which we will add shortly, is still missing. With the last node you set up a notification to your mobile. 🤳 ![Connection node](https://res.cloudinary.com/lukasfabik/image/upload/v1572976430/projects/detektor-jeziska/image13.png)


## Set up notification to mobile

1. Take your smartphone and turn on the Blynk app. 

2. Create a new project and a token will be sent to your e-mail. In Blynk, place **Notification** onto your desktop using the small plus in the wheel.

<div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-12.webp')}/> </div> </div>

3. Press the **Play** triangle in the upper right corner and **go to Playground on your computer**.

4. Here, place the last node for the whole project, i.e. the Notification node from the Blynk ws section. It should be placed directly behind the flow with the switch (see screenshot). 👀 <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-13.webp')}/> </div> </div>

5. Unclick it and click on the **little pencil** on the right. <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-14.webp')}/> </div> </div>

6. Fill in the URL here by simply copying it from the field below. Subsequently, copy and paste the token here that you received by e-mail from Blynk. <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-15.webp')}/> </div> </div>
Confirm by pressing the **Add** and **Done** buttons.

7. Finally, **connect** this attractive green node to the previous flow and hit the **Deploy** button. <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-16.webp')}/> </div> </div>

## Ready, steady… go!

1. It's high time to spy on those who come bearing gifts. Under the **Dashboard** tab in Playground, **turn on your detector**. 🕵️ <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-17.webp')}/> </div> </div>

2. The PIR Module senses even the slightest movement and sends the message that something is afoot to your mobile in no time. **Santa or Baby Jesus don´t stand a chance**! Quick! Catch them while you can!
