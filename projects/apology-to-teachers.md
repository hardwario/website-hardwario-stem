---
slug: apology-to-teachers
title: Apology to your teacher
---
import Image from '@theme/IdealImage';

## Introduction

Even a mobile phone isn't perfect! Sometimes it lets you down and doesn't wake you up. When that happens, don't panic. Press 👇 the smart button and apologize to your teacher before they tell your parents.

In this project, you will learn **how to send a notification with a smart button**. 📩

All you need is the basic HARDWARIO [**Start Set**](https://www.hardwario.store/p/start-set).


## Make it happen in Node-RED

1. Assemble the Start Set and pair it. The Core Module needs the **twr-radio-push-button** firmware. If you're doing this for the first time, or you're not sure what firmware is and how to upload it, we've prepared [a simple guide](https://docs.hardwario.com/tower/desktop-programming/firmware-flashing/).
2. In Playground, click the **Functions** tab, where you'll find the [Node-RED](https://docs.hardwario.com/tower/desktop-programming/node-red-programming/) programming workspace. 🤖
3. From the palette on the left, drag the **mqtt in** node from the **network** section onto the Node-RED workspace.

<div class="container">
  <div class="row">
    <Image img={require('./img/apology-to-teachers/apology-to-teachers-1.webp')} alt="Node-RED palette with the mqtt in node highlighted and an mqtt node placed on the flow canvas"/>
  </div>
</div>

4. Set up the key function in the node: the button press. Double-click the node to open its settings and **copy this line into the Topic field**:

```
node/push-button:0/push-button/-/event-count
```

Confirm with **Done**.

## Write your apology

1. You write the apology in Node-RED too. Next to the MQTT node, place a **change** node from the **function** section. It decides which message gets sent.

<div class="container">
  <div class="row">
    <Image img={require('./img/apology-to-teachers/apology-to-teachers-2.webp')} alt="Change node highlighted in the palette, with a set msg.payload node placed next to the push-button MQTT node"/>
  </div>
</div>

2. Double-click the node and set a rule for **msg.payload** in the **Rules** field (see the screenshot below). This is the text of your message. Keep in mind that the notification can't show accented letters such as č or á, and don't forget to sign it. Your message could read like this:

_Dear Mr. Woodpecker, I'm sorry, but my dog ate my alarm clock. I'll be there as soon as I can. Evzen (your favorite pupil, who doesn't deserve a note home)._

<div class="container">
  <div class="row">
    <Image img={require('./img/apology-to-teachers/apology-to-teachers-3.webp')} alt="Edit change node dialog with Rules setting msg.payload to the apology message text"/>
  </div>
</div>

Confirm with **Done**. 👏

## Prepare Blynk IoT for notifications

The apology reaches your teacher's phone as a push notification from the **Blynk IoT** app. 📱 Node-RED sends the text to Blynk, and a Blynk automation turns every new message into a notification.

1. If you don't have a [Blynk IoT](https://blynk.io) account yet, create one. The free plan is enough for this project: at the time of writing, it includes push notifications in the app and up to five automations.

2. Create a device template. [Blynk's quick guide](https://docs.blynk.io/en/getting-started/template-quick-setup) shows you how. You can also reuse a template from an earlier project.

3. In the template, open the **Datastreams** tab, click **New Datastream** and choose **Virtual Pin**. Name the datastream (for example `Message`), pick a free pin (for example V2) and set the **Data Type** to **String**, because the notification will carry your own text.

4. In the datastream settings, let automations use it as a trigger: in the **Automations** section, turn on **Use as Condition**. Create the datastream and save the template.

5. Create a device from the template: in **Devices**, add a new device, choose your template and give the device a name. You'll find its **Auth Token** on the device's **Device Info** tab. You'll need it in Node-RED.

## Create the automation

1. Open **Automations** in Blynk and create a new automation. For the condition (**When**), choose **Device State**, then your device, your datastream and **Is Any**. The automation will then react to every message, even when it's the same as the last one.

2. Under **Do this**, add the action that sends a notification to the mobile app (**Send In-App Notifications**) and choose yourself as the recipient. Put the **Trigger value** placeholder (`{TRIGGER_VALUE}`) in the message. Blynk replaces it with the text that Node-RED sends.

3. Name the automation. **Limit period** sets how soon the automation may run again: choose the shortest option, otherwise a second message sent soon after the first won't arrive. Save the automation.

4. Download the **Blynk IoT app** to your phone from the [App Store](https://apps.apple.com/us/app/blynk-iot/id1559317868) or [Google Play](https://play.google.com/store/apps/details?id=cloud.blynk) and sign in with the same account. Make sure the app is allowed to show notifications, so the apology can pop up. ✉️

## Set up sending the apology

1. Go back to Playground. On the Node-RED workspace, add the **write** node from the **Blynk IoT** section after the change node with your apology. Leave the **Blynk ws** section alone: it belongs to the old Blynk, which no longer works. 📮

2. Double-click the node to open it. Next to **Connection** you'll see **a small pencil**. Click it to open a new window. In the **Url** field enter `blynk.cloud`, and copy the **Auth Token** and **Template ID** from the Blynk web app on your computer: the Auth Token is on the device's **Device Info** tab, the Template ID in the template details. Confirm with **Add**.

3. In the **Virtual Pin** field, enter the number of your datastream's pin (2 for V2). This is what turns the button press into a push notification: the node writes the apology to the datastream, and the automation sends it on. Confirm with **Done**.

4. **Connect the nodes** so the button press ➡️ turns into your apology, ➡️ which goes to Blynk IoT ➡️ and lands on your teacher's phone. Then press **Deploy** and relax: the apology that will save your skin when you're late is ready! 🙏

## Ready, steady… go!

1. Want to try it out? **Test it with your own account**, so the notification lands on your own phone.
2. Press **Deploy** again, then press the button and… hey presto, **someone has just got your message**! 💌
