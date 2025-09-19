---
slug: lesson-5
title: Lesson 5 - Up to the net
---
import Image from '@theme/IdealImage';

🧑‍💻 **Duration:** 40 minutes  
🎯 **Target audience:** individuals or pairs  

## 1. Introduction

So far, you have been experimenting with **HARDWARIO TOWER** modules and getting familiar with the **HARDWARIO Playground** environment.  
Now, however, it’s time to move forward.  

In short, **IoT** represents the connection of physical devices with the internet – and so far, the “I” for **internet** has not played any role in your projects.  

👉 We will therefore connect using the **Blynk** application, which enables communication both through a mobile phone and through a web interface.

## 2. What’s Ready

✅ **Playground** environment  
✅ Paired **Climate Module** – or any other module from which we can at least read temperature  
✅ **Mobile phone** on which you can install applications  

## 3. Prepare the Blynk IoT Application

1. Create an account on [blynk.cloud](https://blynk.cloud/dashboard/login) by clicking **Create new account**.
2. Create a new **Template** (**Create New Template**), enter a name, choose **Other** as the hardware type, and the connection type doesn’t matter. Click **Done** to finish creating the template.
3. Now set up a new **Datastream**. On the template detail page, click the **Datastreams** tab. In the top right, click **Edit**. A **+ New Datastream** button will appear — click it, choose **Virtual Pin**, and a dialog window will open.
4. Set a name for the new Datastream (for example, **Notification**) and choose one of the free **Pins** (any). In the mobile notification you’ll want to display illumination, so select **Double** as the data type.
5. At the top of the dialog window you are in the **General** settings. Switch to the **Expose to Automation** tab so the stream can be used in automations. In the selector next to it, choose **Sensor** and also check **Condition** and **Action**. Create the datastream by clicking **Create**.
6. Save your work using the **Save** button in the top right. **Save your Template ID.**

## 4. Create a Device in Blynk

1. In Blynk, go to **Devices**. Click **+ New Device** to open the device creation dialog.
2. For the creation method, choose **From template**. In the next form, select your template and assign a name to the device. Click **Create** to finish the process.
3. Save the information provided by Blynk — you should already have the **Template ID**, and now you will obtain the **Auth Token**.

## 5. Move to Playground

1. In the **Functions** tab, find the nodes that work with the new version of Blynk — they are labeled under the **Blynk IoT** section.
2. To write values to the created datastream, choose the **write** node.
3. Double-click to open its settings.
4. On the right, click the small **pencil** — this opens a new window.
5. In the **Url** field, enter `blynk.cloud`. In the **Auth Token** and **Template ID** fields, paste the values from the device detail in the web application on your computer.
6. Confirm the settings by clicking **Add**.
7. Enter the number of the **virtual pin** of your datastream and click **Done** to save everything.
8. You can now set up your **flow in Node-RED**, where you connect the **mqtt out** node that provides illumination from the sensor to the **write** node for Blynk.

<div class="container">
  <div class="row">
    <Image img={require('./img/iot-function_blynk1.webp')}/>
  </div>
</div>

## 6. Set Up the Mobile App

1. Download the **Blynk IoT** app to your mobile device from the App Store or Google Play.
2. Sign in using your credentials.
3. On the home screen, you will see the device you created.
4. Open it by tapping and set up the **dashboard**:
   - Under the **key** icon in the top right, you’ll find the dashboard settings page.
   - In **My Templates**, find your template and tap it.
   - Tap **+** or anywhere on the canvas to add a new widget, for example **Value Display**.
   - Tap the added widget to open its settings window. The most important step is to assign the **Datastream** from your template for the selected **virtual Pin**.

## 7. Create an Automation

1. In the Blynk web app, switch to the **Automation** section and click **+ Create Automation**.
2. From the available options, select **Device State**. The automation will trigger whenever you send a message to the application.
3. Automation setup takes place in two steps: **When** — when the automation should run, and **Do this** — what should happen.
4. First, configure the **When** section. Select your device and the created **Datastream**. A third selector will appear — leave it set to **Is Any**.
5. In the **Do This** section, click **Send In-App Notification** and set the recipient. For simplicity, set **yourself** here.
6. Drag the **Trigger value** item into the **Subject** and **Message** fields — this is a variable that will contain the text of your message.
7. Finally, don’t forget to set the name of the automation.
8. Click **Save** to save the automation.

## 8. Run It

1. In **HARDWARIO Playground**, click the **Deploy** button.
2. Change the illumination on your **Climate** module so you can see in **Messages** that it is sending a new value.
3. Check your phone to see if there is a new notification about the change in illumination and whether the **Blynk** app shows the current value.

## 9. Send All Your Data

Go to the **Messages** tab in **HARDWARIO Playground**, where you can find the available data from your modules.

Add new **Datastreams** in **Blynk** and send all the data to the application.  
This way, you can monitor different values directly on your mobile phone.

:::info
Don’t forget to click the **Save and Apply** button on the **Blynk** website while working.
:::

<div class="container">
  <div class="row">
    <Image img={require('./img/iot-function_blynk2.webp')}/>
  </div>
</div>

<div class="container">
  <div class="row">
    <Image img={require('./img/iot-mobil_blynk.webp')}/>
  </div>
</div>

## 10. Summary

✅ You have configured **Blynk** to receive and process Datastreams from your sensor.  
✅ You know how to send data from **Playground** to **Blynk**.  
✅ In the **Blynk** mobile application, you have set up a **Dashboard** to display values from the Datastreams.  