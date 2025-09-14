---
slug: safe-drawer
title: Safe drawer
---
import Image from '@theme/IdealImage';

## Introduction

Do you have a diary, poems or a top secret government-issued document in your drawer? If it's something nobody should see, secure it. 🔒 Turn your IoT Start Set into a drawer monitor and get alerts on your mobile phone. 📲

![Get mobile notification when someone open your drawer](https://res.cloudinary.com/lukasfabik/image/upload/v1566364960/projects/safe-drawer/image8.png)

This project teaches you how to create a **drawer monitor that sends alerts to your mobile phone when some opens your drawer**. 👈

You only need a **box with a button** and a **Radio dongle**. That's why the basic HARDWARIO [**Start Set**](https://shop.hardwario.com/p/start-set/) is perfect.


## Download the firmware

1. Upload special firmware to the Core Module, specifically **bcf-radio-x-axis-detector** (you can find it among other firmware in the Playground). Thanks to this firmware, the box will be more sensitive to movement. 👌

**Our tip:** Don't know how to download firmware or what it is? [Find out here](https://docs.hardwario.com/tower/firmware-development/hardwario-extension-tutorial/#flash-firmware)

2. [Pair the Core Module with the USB Dongle](https://docs.hardwario.com/tower/platform-integrations/homekit-and-siri/#pair-the-device). Right after pairing, you'll see that your Core Module has changed its Alias to **x-axis-detector**.

<div class="container">
  <div class="row">
    <Image img={require('./img/safe-drawer/safe-drawer-1.webp')}/>
  </div>
</div>


## Set up the mobile app

1. **Continue on your mobile phone**. The box will connect to your smartphone through the **Blynk app**. 📱 [**Learn how to use Blynk**](https://docs.hardwario.com/tower/platform-integrations/blynk-app/)

2. From the menu, choose **Styled button** (fancy button). 🚨 The button will be placed on your project canvas.

![Add style button to blynk app](https://res.cloudinary.com/lukasfabik/image/upload/v1566364970/projects/safe-drawer/image20.png)

3. When you click on the button, you'll get to the settings. Now pay attention.
In the top line, **name your detector**.

![Settings of styled button in Blynk App](https://res.cloudinary.com/lukasfabik/image/upload/v1566364966/projects/safe-drawer/image12.png)

Right below that, you'll choose **PIN**. Click on it. Select **virtual** and **choose a number as you like**. But remember it, you'll need to enter it on the computer later. Save the PIN and continue setting up the button.

![Styled button in Blynk App](https://res.cloudinary.com/lukasfabik/image/upload/v1566364978/projects/safe-drawer/image25.png)
![Styled button in Blynk App](https://res.cloudinary.com/lukasfabik/image/upload/v1566364965/projects/safe-drawer/image14.png)

Switch the button from push mode to **switch**, so you can conveniently start and stop the detector.

![Settings of styled button in Blynk App](https://res.cloudinary.com/lukasfabik/image/upload/v1566364970/projects/safe-drawer/image18.png)

And then there are just those **design nonsense**. 💄 You can choose the color of the button when it's off and on, its shape and other necessities.

![Settings of styled button in Blynk App](https://res.cloudinary.com/lukasfabik/image/upload/v1566364966/projects/safe-drawer/image13.png)

Once you have everything set up, **return to the canvas** through the arrow at the top left.

4. Tap on the canvas to add another element to the canvas. It will be a notification.

![Add Blynk Notification node](https://res.cloudinary.com/lukasfabik/image/upload/v1566364964/projects/safe-drawer/image1.png)

5. Your entire canvas now looks like this.

![Your Blynk App](https://res.cloudinary.com/lukasfabik/image/upload/v1566364961/projects/safe-drawer/image7.png)

6. Tap on the button, it should switch from ON mode to OFF mode.

![Your Blynk App](https://res.cloudinary.com/lukasfabik/image/upload/v1566364960/projects/safe-drawer/image4.png)
![Your Blynk App](https://res.cloudinary.com/lukasfabik/image/upload/v1566364961/projects/safe-drawer/image7.png)


## Set up the message in Node-RED

1. In the Playground, click on the **Functions tab**, where the Node-RED programming canvas is located.

2. Start as always: first place an **MQTT node** from the Input section on the canvas.

Double-click on it and copy the **Topic** into the line, which the box uses to detect movement changes:

```
node/x-axis-detector:0/accelerometer/-/event-count
```

<div class="container">
  <div class="row">
    <Image img={require('./img/safe-drawer/safe-drawer-2.webp')}/>
  </div>
</div>

3. Next to this node, place a **Switch node** from the **Function** section. Thanks to this node, you can turn off detection when you're home and opening the drawer yourself.

<div class="container">
  <div class="row">
    <Image img={require('./img/safe-drawer/safe-drawer-3.webp')}/>
  </div>
</div>

4. Inside the node, change the Property line to **flow.active**. In the line below, enter the number **1**. With this number one, the notification will be sent when the button is on, otherwise it will be discarded. Look at the picture.

<div class="container">
  <div class="row">
    <Image img={require('./img/safe-drawer/safe-drawer-4.webp')}/>
  </div>
</div>

5. After this, place another **Change node** from the Function section.

<div class="container">
  <div class="row">
    <Image img={require('./img/safe-drawer/safe-drawer-5.webp')}/>
  </div>
</div>

6. In it, set up the **message that will be sent to your mobile**. Be careful, Blynk doesn't handle accents and special characters. 🤷

<div class="container">
  <div class="row">
    <Image img={require('./img/safe-drawer/safe-drawer-6.webp')}/>
  </div>
</div>

7. At the end of this food chain, place a **Notify node** from the Blynk ws section.

<div class="container">
  <div class="row">
    <Image img={require('./img/safe-drawer/safe-drawer-7.webp')}/>
  </div>
</div>

8. When you double-click on it, the settings will open. Here click on the **small pencil**. You'll get to even deeper settings.

<div class="container">
  <div class="row">
    <Image img={require('./img/safe-drawer/safe-drawer-8.webp')}/>
  </div>
</div>

9. You'll be interested in the first two lines. Copy the **URL** from the link below and copy the **token** from the email that was sent to you when you created the project in Blynk.

<div class="container">
  <div class="row">
    <Image img={require('./img/safe-drawer/safe-drawer-9.webp')}/>
  </div>
</div>

**Our tip:** Name the project in the Name line. You'll easily recognize it in other nodes later.

<div class="container">
  <div class="row">
    <Image img={require('./img/safe-drawer/safe-drawer-10.webp')}/>
  </div>
</div>

10. Now **connect this chain**. And let's move on.

<div class="container">
  <div class="row">
    <Image img={require('./img/safe-drawer/safe-drawer-11.webp')}/>
  </div>
</div>

## Set up the motion detector in Node-RED

1. Start another chain. Place a **Write event node** from the Blynk WS section on the canvas. This controls the button.

<div class="container">
  <div class="row">
    <Image img={require('./img/safe-drawer/safe-drawer-12.webp')}/>
  </div>
</div>

2. When you double-click on it, fill in the **Virtual Pin** line with the number you entered as PIN in Blynk (without the letter V).

In the **Connection** line, then select the project you named in the Notify node.

3. And the last node to the party. Place a **Change node** from the Function section on the canvas.

<div class="container">
  <div class="row">
    <Image img={require('./img/safe-drawer/safe-drawer-13.webp')}/>
  </div>
</div>

4. You'll set up the node to react to turning the button off and on in Blynk. Double-click to open it and set the Rules fields to **flow.active** and **msg.payload** respectively (look at the picture).

<div class="container">
  <div class="row">
    <Image img={require('./img/safe-drawer/safe-drawer-14.webp')}/>
  </div>
</div>

5. Now **connect these two beauties**. Don't forget to also click the **Deploy** button at the top right so everything gets activated.

<div class="container">
  <div class="row">
    <Image img={require('./img/safe-drawer/safe-drawer-15.webp')}/>
  </div>
</div>

## Start the trap

1. **Place the box in the drawer** lying flat.

2. Control everything else from your mobile phone. 📱 **Turn on** the project in Blynk (click the button so it gets to the ON position).

![Blynk Mobile App with Button](https://res.cloudinary.com/lukasfabik/image/upload/v1566364960/projects/safe-drawer/image4.png)
![Blynk Mobile App with Button](https://res.cloudinary.com/lukasfabik/image/upload/v1566364961/projects/safe-drawer/image7.png)

3. Start the entire flow in Blynk through the **Play button** at the top right. ▶️

4. And wait for the mouse to get caught. 🥁 Meanwhile, **plan what you'll do with the sneaky troublemaker**. We recommend making them do homework for you for a week. They deserve it.

![Get mobile notification when someone open your drawer](https://res.cloudinary.com/lukasfabik/image/upload/v1566364960/projects/safe-drawer/image8.png)
