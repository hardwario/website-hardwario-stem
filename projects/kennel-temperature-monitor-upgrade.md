---
slug: kennel-temperature-monitor-upgrade
title: Upgraded kennel temperature monitor
---
import Image from '@theme/IdealImage';

## Introduction

Already built the basic kennel temperature monitor? Now build an even better one. It sends notifications to your phone, so you'll know about a cold kennel wherever you are. 🐶

In this project, you will learn to set up the box to **send you a message when the temperature drops below a value you set**. 👌 The box won't start barking, but it's still a great project. 🐩

You'll find the basic version of this project here: [A temperature watch for your furry watchman: check the temperature in your dog's kennel](/projects/kennel-temperature-monitor/).

Once again, the basic HARDWARIO set is all you need: the [**Start Set**](https://www.hardwario.store/p/start-set/).


## Prepare Node-RED

1. This project uses the familiar **twr-radio-push-button** firmware. Already flashed it? Then don't wait: pair the box with the Radio Dongle.

<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-1.webp')} alt="Playground Devices tab: the paired device row with alias push-button:0 highlighted"/>
  </div>
</div>

2. In Playground, switch to the **Functions** tab and place the same nodes on the canvas as in the basic version of the project:

- one **mqtt in** node from the network section, with this **Topic** again:

```
node/push-button:0/thermometer/0:1/temperature
```

- and a gauge, that is a **Gauge** node from the Dashboard section. It should show a range of −15 to 40 °C. Give it a name so you can find your way around. ✍️

<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-2.webp')} alt="Node-RED workspace with the temperature MQTT node and the kennel gauge node placed on the canvas"/>
  </div>
</div>

<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-3.webp')} alt="Edit dialog with Label, value format with degrees Celsius, and the temperature range fields highlighted"/>
  </div>
</div>

Hold on to your hats, on we go. 🎩


## Prepare Blynk IoT for the alert

The temperature alert reaches your phone as a push notification from the **Blynk IoT** app. That's what makes the box smart. 😎 Node-RED sends the text of the alert to Blynk, and a Blynk automation turns every new message into a notification.

1. If you don't have a [Blynk IoT](https://blynk.io) account yet, create one. The free plan is enough for this project: at the time of writing, it includes push notifications in the app and up to five automations.

2. Create a device template. [Blynk's quick guide](https://docs.blynk.io/en/getting-started/template-quick-setup) shows you how. You can also reuse a template from an earlier project.

3. In the template, open the **Datastreams** tab, click **New Datastream** and choose **Virtual Pin**. Name the datastream (for example `Message`), pick a free pin (for example V2) and set the **Data Type** to **String**, because the notification will carry your own text.

4. In the datastream settings, let automations use it as a trigger: in the **Automations** section, turn on **Use as Condition**. Create the datastream and save the template.

5. Create a device from the template: in **Devices**, add a new device, choose your template and give the device a name. You'll find its **Auth Token** on the device's **Device Info** tab. You'll need it in Node-RED.

## Create the automation

1. Open **Automations** in Blynk and create a new automation. For the condition (**When**), choose **Device State**, then your device, your datastream and **Is Any**. The automation will then react to every message, even when it's the same as the last one.

2. Under **Do this**, add the action that sends a notification to the mobile app (**Send In-App Notifications**) and choose yourself as the recipient. Put the **Trigger value** placeholder (`{TRIGGER_VALUE}`) in the message. Blynk replaces it with the text that Node-RED sends.

3. Name the automation. **Limit period** sets how soon the automation may run again. The box keeps reporting the temperature while the kennel is cold, so pick a longer period, such as an hour: one alert is enough, you don't need one for every reading. Save the automation.

4. Download the **Blynk IoT** app to your phone from the [App Store](https://apps.apple.com/us/app/blynk-iot/id1559317868) or [Google Play](https://play.google.com/store/apps/details?id=cloud.blynk) and sign in with the same account. Make sure notifications are allowed for the app so the alert can appear. 📱 But first you have to upgrade Node-RED, or nothing will happen.


## Upgrade Node-RED

1. Go back to your computer and set up more features in Playground. The first is the **phone notification**, which you build from three nodes.

- First: a **Switch** node from the Function section.

<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-4.webp')} alt="Node-RED workspace with a Switch node from the Function section highlighted above the gauge node"/>
  </div>
</div>



In the node, set the same as in the screenshot below:

a. use **msg.payload** as the property (Property),

b. send the notification when the temperature drops to the value of the **flow.optimalTemp** variable (for example −15 °C) or below. Use the less-than-or-equal operator `<=` (the screenshot still shows `==`, so change it).

<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-5.webp')} alt="Edit switch node dialog: property msg.payload with a rule comparing against flow.optimalTemp highlighted"/>
  </div>
</div>

- Second: a **Change** node from the same section. It sets the message you get on your phone.

<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-6.webp')} alt="Node-RED workspace with a Change node (set msg.payload) highlighted next to the Switch node"/>
  </div>
</div>

In the node, set what your phone will tell you when the temperature in the kennel drops below the minimum you set. For example _It's too cold in the kennel_.

**Our tip**: Write the message without accented letters. Unfortunately, Blynk can't display them.

- Third: the **write** node from the **Blynk IoT** section. It links the flow to your phone. Leave the **Blynk ws** section alone: it belongs to the old Blynk, which no longer works.
Double-click the node to open it. Next to **Connection** you'll see **a small pencil**. Click it and a new window opens. In the **Url** field enter `blynk.cloud`, and copy the **Auth Token** and **Template ID** from the Blynk web app on your computer: the Auth Token is on the device's **Device Info** tab, the Template ID in the template details. Confirm with **Add**.

Then, in the **Virtual Pin** field, enter the number of your datastream's pin (2 for V2). That's what turns a too-cold reading into a push notification: the node writes the message to the datastream, and the automation sends it on. Confirm with **Done**.

**Our tip**: Name the connection in the Name field so you'll recognize it later.

## Add the flow that watches the optimal temperature

1. Now for the icing on the cake. This flow has two nodes.

The first is a **Numeric** node from the Dashboard section. Sounds like a comic-book villain, doesn't it? But now it's on your side.

With the Numeric node, you set the lowest acceptable temperature right from the Dashboard in Playground. **That makes the threshold easy to change.**

<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-12.webp')} alt="Node-RED workspace with a Numeric node from the Dashboard section highlighted on the canvas"/>
  </div>
</div>

2. In the node, set the **unit** (°C), the **temperature range** (−15 to 50) and the **node name**.

<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-13.webp')} alt="Edit numeric node dialog: Label, value format with degrees Celsius, and range min -15 max 50 highlighted"/>
  </div>
</div>

3. Place another **Change** node next to it.

<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-14.webp')} alt="Node-RED workspace with a Change node (set msg.payload) highlighted next to the Numeric node"/>
  </div>
</div>

4. Set it so that the minimum temperature (optimalTemp) updates right away whenever the Numeric node changes. Follow the screenshot.

<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-15.webp')} alt="Edit change node dialog: rule Set flow.optimalTemp to msg.payload highlighted"/>
  </div>
</div>

5. Now all that's left is to **wire the nodes as in the screenshot** and confirm with **Deploy**. 🙌 The MQTT node feeds both the gauge and the Switch node, then Switch ➡️ Change ➡️ write; in the second flow, Numeric ➡️ Change. The screenshot comes from an older version of the project: it ends the first flow with the old Blynk **notify** node and has a few more Blynk nodes. Use your write node in place of notify and leave out the other Blynk nodes.

<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-18.webp')} alt="Finished Node-RED flow with all nodes connected and the Deploy button highlighted"/>
  </div>
</div>

## Ready, steady, go!

1. Stick the box back on the **inside wall of the kennel**.
2. You'll see the temperature measured in the kennel in Playground **on the Dashboard tab**…

<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-19.webp')} alt="Dashboard with the kennel temperature gauge reading 23.75 degrees Celsius and the optimal temperature field"/>
  </div>
</div>

3. …and above all, you get a **notification** on your phone if your dog is cold, so you can check on the kennel anytime, from anywhere. 🕵️ Happy dog = good dog! 🐕
