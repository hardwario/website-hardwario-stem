---
slug: christmas-detector
title: Santa detector
---
import Image from '@theme/IdealImage';

## Introduction


Santa is a very secretive character, but with IoT you can catch him right in the middle of delivering presents. 🎄 The PIR Module motion detector will help you.

In this project, you will learn how to **detect movement in another room**. That way you can find out whether it's Santa, Baby Jesus, Grandfather Frost or someone else entirely who visits your home. 😲

If you have the Start Set, you'll also need the [PIR Module](https://www.hardwario.store/p/pir-module/). The [Motion Set](https://www.hardwario.store/p/motion-set) contains **everything you need**.


## Prepare the box

1. Assemble the set. The Core Module needs the **twr-radio-motion-detector** firmware. <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-1.webp')} alt="Playground Firmware tab with the twr-radio-motion-detector firmware selected for flashing"/> </div> </div>

2. If the firmware uploaded correctly, you'll see the alias **motion-detector** on the Devices tab in Playground. <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-2.webp')} alt="Playground Devices tab with the paired device listed under the alias motion-detector:0"/> </div> </div>

## Set up Node-RED

1. You'll program in Node-RED. First, click the **Functions** tab in Playground.

2. Drag a light purple node (bubble) called **mqtt in** onto the empty workspace. You'll find it in the **network** section.

<div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-3.webp')} alt="Mqtt in node highlighted in the palette and an mqtt node placed on the flow canvas"/> </div> </div>

3. Double-click the node to open it. In the **Topic** field, enter the key value. The node will now count the movements it detects:

```
node/motion-detector:0/pir/-/event-count
```

<div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-4.webp')} alt="MQTT node on the canvas showing the motion-detector PIR event-count topic"/> </div> </div>
Confirm with **Done**.

4. After this node, place a **switch** node from the **function** section. It lets the device know that the detector is switched on and may report every movement.

5. In the node, fill in the **Property** field as _flow_. _detectorActive_ and change the condition to _is true_ (see the picture). **Our tip**: You can read more about the switch node in the [Node-RED documentation](https://nodered.org/docs/user-guide/nodes#switch). <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-5.webp')} alt="Edit switch node dialog checking the flow.detectorActive property with the condition is true"/> </div> </div>

Confirm with **Done**.

6. After the switch node, place a **change** node from the same **function** section. <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-6.webp')} alt="Change node highlighted in the palette, with a set msg.payload node placed after the switch node"/> </div> </div>

7. In it, you set the message that pops up as soon as the bearded gift-bringer (or Baby Jesus) arrives. 🎅 👼 For example: _Santa is in the living room_. **Our tip**: If you also want alerts on your phone, don't use accented letters such as č or á, because Blynk doesn't show them. <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-7.webp')} alt="Edit change node dialog with a rule setting flow.detectorActive to msg.payload"/> </div> </div>

Confirm with **Done**.

8. Above this flow, add another one that switches the detector on and off. It has two nodes. The first is a **switch** node from the **dashboard** section. <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-8.webp')} alt="Dashboard switch node highlighted in the palette and placed above the detector flow"/> </div> </div>

9. In this node, change the **Label** to _Detector status_. That's how your project will be labelled on the Dashboard. <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-9.webp')} alt="Edit switch node dialog with the Label set to Stav detektoru and payloads true and false"/> </div> </div>

Confirm with **Done**.

10. After it, place a **change** node from the **function** section. Yes, the same kind you already have a little further down. 👍 <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-10.webp')} alt="Change node highlighted in the palette, with a set msg.payload node placed after the Stav detektoru switch"/> </div> </div>

11. In the **Rules** field, set the rule that tells the device whether the switch is on or off: _flow_. _detectorActive_ (see the picture). Watch out for typos! <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-11.webp')} alt="Edit change node dialog for the switch flow with the rule Set flow.detectorActive to msg.payload highlighted"/> </div> </div>
Confirm with **Done**.

12. Now connect all the nodes **as shown in the picture**, but don't press Deploy yet. One last node is still missing; we'll add it in a moment. It sets up the alert on your phone. 🤳 ![Connection node](./img/christmas-detector/image13.png)


## Prepare Blynk IoT for notifications

The detected movement reaches your smartphone as a push notification from the **Blynk IoT** app. Handy, isn't it? 😎 Node-RED sends the text of the message to Blynk, and a Blynk automation turns every new message into a notification.

1. If you don't have a [Blynk IoT](https://blynk.io) account yet, create one. The free plan is enough for this project: at the time of writing, it includes push notifications in the app and up to five automations.

2. Create a device template. [Blynk's quick guide](https://docs.blynk.io/en/getting-started/template-quick-setup) shows you how. You can also reuse a template from an earlier project.

3. In the template, open the **Datastreams** tab, click **New Datastream** and choose **Virtual Pin**. Name the datastream (for example `Message`), pick a free pin (for example V2) and set the **Data Type** to **String**, because the notification will carry your own text.

4. In the datastream settings, let automations use it as a trigger: in the **Automations** section, turn on **Use as Condition**. Create the datastream and save the template.

5. Create a device from the template: in **Devices**, add a new device, choose your template and give the device a name. You'll find its **Auth Token** on the device's **Device Info** tab. You'll need it in Node-RED.

## Create the automation

1. Open **Automations** in Blynk and create a new automation. For the condition (**When**), choose **Device State**, then your device, your datastream and **Is Any**. The automation will then react to every message, even when it's the same as the last one.

2. Under **Do this**, add the action that sends a notification to the mobile app (**Send In-App Notifications**) and choose yourself as the recipient. Put the **Trigger value** placeholder (`{TRIGGER_VALUE}`) in the message. Blynk replaces it with the text that Node-RED sends.

3. Name the automation. **Limit period** sets how soon the automation may run again: choose the shortest option, otherwise you won't get a message about movement that comes soon after the first. Save the automation.

4. Download the **Blynk IoT app** to your phone from the [App Store](https://apps.apple.com/us/app/blynk-iot/id1559317868) or [Google Play](https://play.google.com/store/apps/details?id=cloud.blynk) and sign in with the same account. Make sure the app is allowed to show notifications, so the message can pop up. 📱

## Connect your phone to the box

1. Go back to your computer. On the Node-RED workspace, place the last node of the whole project: the **write** node from the **Blynk IoT** section (not from **Blynk ws**, which belongs to the old Blynk that no longer works). It goes right after the flow with the switch (see the picture). 👀 <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-13.webp')} alt="Blynk notify node highlighted on the canvas, placed at the end of the detector flow"/> </div> </div>

2. Double-click the node to open it. Next to **Connection** you'll see **a small pencil**. Click it to open a new window. In the **Url** field enter `blynk.cloud`, and copy the **Auth Token** and **Template ID** from the Blynk web app on your computer: the Auth Token is on the device's **Device Info** tab, the Template ID in the template details. Confirm with **Add**.

3. In the **Virtual Pin** field, enter the number of your datastream's pin (2 for V2). This is what turns the detected movement into a push notification: the node writes the message to the datastream, and the automation sends it on. Confirm with **Done**.

4. Finally, **connect** this green node to the previous flow, so the message from the detector ➡️ goes to Blynk IoT ➡️ and lands on your phone. Then press the red **Deploy** button. 🚨

## Ready, steady… go!

1. It's high time to find out who brings the presents. On the **Dashboard** tab in Playground, **switch the detector on**. 🕵️ <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-17.webp')} alt="Completed flow with the Stav detektoru switch and the PIR event chain ending in the notify node"/> </div> </div>

2. The PIR Module picks up even the slightest movement and sends a message to your phone in no time. **Santa doesn't stand a chance**! Hurry and catch him in the act!

1. A word of advice: once you've caught him, **make it up to him**, or he might not leave you any presents at all. 😜
