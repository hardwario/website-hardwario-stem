---
slug: safe-drawer
title: Safe drawer
---
import Image from '@theme/IdealImage';

## Introduction

Do you keep a diary, poems or a top-secret government document in your drawer? If nobody should see it, protect it. 🔒 Turn your Start Set into an IoT drawer guard that sends alerts to your phone. 📲

In this project, you will learn to build a **drawer detector that alerts your phone when someone opens the drawer**. 👈

You only need a **box with a button** and a **Radio Dongle**, so the basic HARDWARIO [**Start Set**](https://www.hardwario.store/p/start-set/) is all you need.


## Download the new firmware

1. Flash the special **twr-radio-move-detector-x-axis** firmware to the Core Module (you'll find it among the other firmware in Playground). It makes the box more sensitive to movement. 👌

**Our tip:** Don't know how to get the firmware or what it is? [Find out here](https://docs.hardwario.com/tower/desktop-programming/firmware-flashing/).

2. [Pair the Core Module with the Radio Dongle](https://docs.hardwario.com/tower/desktop-programming/radio-network-management/#pairing-new-devices). Right after pairing, you'll see the Core Module's alias change to **x-axis-detector**.

<div class="container">
  <div class="row">
    <Image img={require('./img/safe-drawer/safe-drawer-1.webp')} alt="Playground Devices tab: the paired device row with alias x-axis-detector:0 highlighted"/>
  </div>
</div>


## Prepare the Blynk IoT app

Your box reports to your phone through the **Blynk IoT** app. 📱 You'll set up two things there: a **switch** that turns the detector on and off, and a **push notification** that arrives when someone opens the drawer. Node-RED sends the text of the alert to Blynk, and a Blynk automation turns every new message into a notification.

1. If you don't have a [Blynk IoT](https://blynk.io) account yet, create one. The free plan is enough for this project: at the time of writing, it includes push notifications in the app and up to five automations.

2. Create a device template. [Blynk's quick guide](https://docs.blynk.io/en/getting-started/template-quick-setup) shows you how. You can also reuse a template from an earlier project.

3. **Add a datastream for the message.** In the template, open the **Datastreams** tab, click **Edit** in the top right, then **New Datastream**, and choose **Virtual Pin**. Name the datastream (for example `Message`), pick a free pin (for example V2) and set the **Data Type** to **String**, because the notification will carry your own text. In the datastream settings, let automations use it as a trigger: in the **Automations** section, turn on **Use as Condition**. Create the datastream.

4. **Add a datastream for the detector state.** Add one more **Virtual Pin** datastream (for example `Detector` on V3) and choose the **Integer** type with a range of **0–1** (0 = off, 1 = on). Click **Create** and save the template with **Save**.

5. Create a device from the template: in **Devices**, add a new device, choose your template and give the device a name. You'll find its **Auth Token** on the device's **Device Info** tab. You'll need it in Node-RED.

## Create the automation

1. Open **Automations** in Blynk and create a new automation. For the condition (**When**), choose **Device State**, then your device, the message datastream and **Is Any**. The automation will then react to every message, even when it's the same as the last one.

2. Under **Do this**, add the action that sends a notification to the mobile app (**Send In-App Notifications**) and choose yourself as the recipient. Put the **Trigger value** placeholder (`{TRIGGER_VALUE}`) in the message. Blynk replaces it with the text that Node-RED sends.

3. Name the automation. **Limit period** sets how soon the automation may run again: choose the shortest option, otherwise a second message sent soon after the first won't arrive. Save the automation.

4. Download the **Blynk IoT app** to your phone from the [App Store](https://apps.apple.com/us/app/blynk-iot/id1559317868) or [Google Play](https://play.google.com/store/apps/details?id=cloud.blynk) and sign in with the same account. Make sure notifications are allowed for the app so the alert can pop up. 📱

5. On your phone, open the device and set up its dashboard: add a **Button** widget, switch it to **Switch** mode and assign it the detector-state datastream. Now you can turn the detector on and off from your phone whenever you like.


## Set up the message in Node-RED

1. In Playground, click the **Functions tab**, home of the [Node-RED](https://docs.hardwario.com/tower/desktop-programming/node-red-programming/) programming canvas.

2. Start as always: first place an **mqtt in** node from the network section on the canvas.

Double-click it and copy this topic into the **Topic** field. The box uses it to report movement:

```
node/x-axis-detector:0/accelerometer/-/event-count
```

<div class="container">
  <div class="row">
    <Image img={require('./img/safe-drawer/safe-drawer-2.webp')} alt="Edit mqtt in node dialog with the accelerometer event-count topic in the highlighted Topic field"/>
  </div>
</div>

3. Next to this node, place a **Switch** node from the **Function** section. With it, you can turn detection off when you're home and opening the drawer yourself.

<div class="container">
  <div class="row">
    <Image img={require('./img/safe-drawer/safe-drawer-3.webp')} alt="Node-RED workspace with a Switch node placed next to the x-axis-detector MQTT node"/>
  </div>
</div>

4. In the node, change the Property field to **flow.active** and enter the number **1** in the field below it. Thanks to the 1, the notification goes out only when the switch is on; otherwise it's dropped. Follow the screenshot.

<div class="container">
  <div class="row">
    <Image img={require('./img/safe-drawer/safe-drawer-4.webp')} alt="Edit switch node dialog: Property set to flow.active with rule equals 1"/>
  </div>
</div>

5. After it, place a **Change** node from the Function section.

<div class="container">
  <div class="row">
    <Image img={require('./img/safe-drawer/safe-drawer-5.webp')} alt="Node-RED workspace with a Change node (set msg.payload) added after the Switch node"/>
  </div>
</div>

6. In it, set the **message you'll get on your phone**. Careful: Blynk can't handle accented letters. 🤷

<div class="container">
  <div class="row">
    <Image img={require('./img/safe-drawer/safe-drawer-6.webp')} alt="Edit change node dialog: msg.payload set to the alert message text"/>
  </div>
</div>

7. At the end of this food chain, place the **write** node from the **Blynk IoT** section. Leave the **Blynk ws** section alone: it belongs to the old Blynk, which no longer works.

8. Double-click it to open its settings. Next to **Connection** you'll see a **small pencil**. Click it and a new window opens. In the **Url** field enter `blynk.cloud`, and copy the **Auth Token** and **Template ID** from the Blynk web app on your computer: the Auth Token is on the device's **Device Info** tab, the Template ID in the template details. Confirm with **Add**.

**Our tip:** Name the connection so you'll easily recognize it in other nodes.

9. In the **Virtual Pin** field, enter the number of the message datastream's pin (2 for V2). That turns opening the drawer into a push notification: the node writes the message to the datastream, and the automation sends it on. Confirm with **Done**.

10. Now **wire up the whole chain**: MQTT ➡️ Switch ➡️ Change ➡️ Blynk IoT write. On we go.

## Set up the detector switch in Node-RED

The second chain reads the **Switch** widget on your phone, so you can turn the detector on and off remotely.

1. Start another chain: place a **write event** node from the **Blynk IoT** section on the canvas. It receives the switch state from your phone.

2. Double-click it to open it. In the **Connection** field, select the connection you set up above in the write node. In the **Virtual Pin** field, enter the pin number of the detector-state datastream (3 for V3). Confirm with **Done**.

3. And the last node joins the party: place a **Change** node from the Function section on the canvas.

4. Set the node up to react when you turn the switch on or off in Blynk. Double-click it and enter **flow.active** and **msg.payload** in the Rules fields, so the switch value is stored in the `flow.active` variable, which the Switch node in the first chain checks.

5. Now **wire these two together**. Don't forget to click the **Deploy** button in the top right, too, so everything starts.

## Set the trap

1. **Lay the box flat in the drawer.**

2. You control everything else from your phone. 📱 Open the device in the Blynk IoT app and **turn on the detector** by flipping the Switch widget to ON. (If it's already on from earlier, switch it off and on again, so Node-RED learns its state.)

3. And wait for the mouse to take the bait. 🥁 As soon as someone opens the drawer, **a push notification pops up on your phone**. Meanwhile, **plan what to do with the sneaky intruder**. We suggest making them do your chores for a week. They deserve it.
