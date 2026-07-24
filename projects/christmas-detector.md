---
slug: christmas-detector
title: Christmas detector
---
import Image from '@theme/IdealImage';

## Introduction


Santa and Baby Jesus are highly secretive people, but with IoT you can catch either of them in the act of bringing presents. 🎄 The PIR Module: motion detector will help you

Under this project, you will learn how to **detect motion in a remote room**. Thanks to this you can check whether Santa Claus, Baby Jesus, Grandpa Frost or someone else is in your home. 😲

If you already have the Starter Set, you will only need the [PIR Module](https://www.hardwario.store/p/pir-module/). Alternatively, the [Motion Set](https://www.hardwario.store/p/motion-set) contains **all the equipment** you need.


## Prepare the box

1. Put your Set together. You need the **bcf-radio-motion-detector** firmware for the Core Module. <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-1.webp')} alt="Playground Firmware tab with the twr-radio-motion-detector firmware selected for flashing"/> </div> </div>

2. If the firmware is correctly installed, you will see the **motion detector** under the Devices Alias tab in Playground. <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-2.webp')} alt="Playground Devices tab with the paired device listed under the alias motion-detector:0"/> </div> </div>

## Set up Node-RED

1. Start programming in Node-RED. First, click on the **Functions** tab in Playground.

2. Drag a light purple **MQTT node** (bubble) onto the empty desktop. You can find it under the Input section.

<div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-3.webp')} alt="Mqtt in node highlighted in the palette and an mqtt node placed on the flow canvas"/> </div> </div>

3. Double-click the node. In the **Topic** line, specify the key value. It will now function as a counter of movements that are recorded:

```
node/motion-detector:0/pir/-/event-count
```

<div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-4.webp')} alt="MQTT node on the canvas showing the motion-detector PIR event-count topic"/> </div> </div>
Confirm with the **Done** button.

1. Behind this node, place a **Switch node** from the Function section. This allows the device to recognize that the detector is on and can report any movements. 

2. In the node, fill in the **Property** line as _flow_. _detectorActive_ and edit the condition in the field to _is true_ (take a look at the screenshot). **Our tip**: Read more about this feature. <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-5.webp')} alt="Edit switch node dialog checking the flow.detectorActive property with the condition is true"/> </div> </div>

Confirm with the **Done** button.

6. Behind the switch node, place a **Change node** from the same Function section. <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-6.webp')} alt="Change node highlighted in the palette, with a set msg.payload node placed after the switch node"/> </div> </div>

7. In the node, you set the message that you want to pop up when our bearded friend (or Baby Jesus) brings their presents. 🎅 👼 For example: _Santa/Baby Jesus is in the living room_. **Our tip**: If you also want to set notifications for your mobile, do not use accent marks (čárky) or hooks (háčky) — Blynk doesn't display diacritics. <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-7.webp')} alt="Edit change node dialog with a rule setting flow.detectorActive to msg.payload"/> </div> </div>

Confirm with the **Done** button.

8. Above this flow, start another one to be able to switch the detector on and off. It should consist of two nodes. The first is a **Switch node** from the Dashboard section. <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-8.webp')} alt="Dashboard switch node highlighted in the palette and placed above the detector flow"/> </div> </div>

9. In this node, edit **Label** to _Detector Status_. This is how your Dashboard project will be labelled. <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-9.webp')} alt="Edit switch node dialog with the Label set to Stav detektoru and payloads true and false"/> </div> </div>

Confirm with the **Done** button.

10. Behind the switch node, place a **Change node** from the Dashboard section. That´s right, just like the one you already have a little lower down. 👍 <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-10.webp')} alt="Change node highlighted in the palette, with a set msg.payload node placed after the Stav detektoru switch"/> </div> </div>

11. In the **Rules** field, set the function to: _flow_. _detectorActive_ (see screenshot). This enables the device to recognize if the button is on or off. Beware of making typing errors! <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-11.webp')} alt="Edit change node dialog for the switch flow with the rule Set flow.detectorActive to msg.payload highlighted"/> </div> </div>
Confirm with the **Done** button.

12. Now connect all the nodes **as shown in the screenshot**, but don't press the Deploy button yet. The last node, which we will add shortly, is still missing. With the last node you set up a notification to your mobile. 🤳 ![Connection node](./img/christmas-detector/image13.png)


## Prepare Blynk IoT for notifications

The detection will reach your smartphone through the **Blynk IoT** app, where the caught movement arrives as a push notification. And that´s pretty cool. 😎

1. If you don't have one yet, create an account in [Blynk IoT](https://docs.hardwario.com/tower/platform-integrations/blynk-app/). See [this guide](https://docs.hardwario.com/tower/platform-integrations/blynk-app/) for how to set up your account, a device template, and a device — you'll need all three. You can also reuse a template from a previous project.

2. In Blynk IoT, a push notification isn't placed on the phone screen like a widget — it's sent as an **Event** defined on your template. On the template detail, open the **Events** tab and add a new event (for example, name it `motion` and give it the message you want to receive, such as _Santa is in the living room_). Then turn on **Notifications** for that event so Blynk delivers it to your phone. The [guide](https://docs.hardwario.com/tower/platform-integrations/blynk-app/) walks through the template settings.

3. Download the **Blynk IoT app** on your phone from the [App Store](https://apps.apple.com/us/app/blynk-iot/id1559317868) or [Google Play](https://play.google.com/store/apps/details?id=cloud.blynk) and sign in with the same account. Make sure notifications are allowed for the app so the message can pop up. 📱

## Connect your mobile with the box

1. Go back to your computer. On the Node-RED canvas, place the last node for the whole project — a node from the **Blynk IoT** section that can trigger your event (the **log event** node). It should be placed directly behind the flow with the switch (see screenshot). 👀 <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-13.webp')} alt="Blynk notify node highlighted on the canvas, placed at the end of the detector flow"/> </div> </div>

2. Double-click the node to open it. On the right you'll see **a small pencil**. Click it and a new window opens. In the **Url** field enter `blynk.cloud`, and into the **Auth Token** and **Template ID** fields copy the values from the device detail in the Blynk web app on your computer. Confirm with the **Add** button.

3. Set the node to fire the **Event** you created (the event code, e.g. `motion`). This is what turns the detected movement into the push notification. Confirm with the **Done** button.

4. Finally, **connect** this green node to the previous flow so the detector ➡️ fires the Blynk IoT event ➡️ which arrives on your mobile. Then hit the red **Deploy** button. 🚨

## Ready, steady… go!

1. It's high time to spy on those who come bearing gifts. Under the **Dashboard** tab in Playground, **turn on your detector**. 🕵️ <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-17.webp')} alt="Completed flow with the Stav detektoru switch and the PIR event chain ending in the notify node"/> </div> </div>

2. The PIR Module senses even the slightest movement and sends the message that something is afoot to your mobile in no time. **Santa or Baby Jesus don´t stand a chance**! Quick! Catch them while you can!
