---
slug: crystal-ball
title: Crystal ball
---
import Image from '@theme/IdealImage';

## Introduction

Even young programmers want to know what their future holds. The box will tell you. IoT magic will answer all the questions that come into your head. 🔮 😱

Under this project, you will learn to turn the box into an oracle or **magic 8-ball**. ️🎱 Set it to randomly choose one of a number of options when it is shaken.

You will need the **box with button and a USB Dongle**. The basic HARDWARIO [**Start Set**](https://www.hardwario.store/p/start-set/) is sufficient for this.


## Make it happen in Node-RED

1. Put the Start Set together and pair it. You need the **radio-8-ball** firmware for the Core Module.

After downloading the firmware, you will see that the Alias of your device under the Devices tab has changed to **Future teller**.

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-1.webp')} alt="Playground Devices tab with the paired device listed under the alias future-teller:0"/> </div> </div>

2. In Playground, click on the **Functions tab** \- this is where you will find the programming desktop.

3. Place an **MQTT node** from the Input section onto the desktop.
<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-2.webp')} alt="Mqtt in node highlighted in the palette and an mqtt node placed on the flow canvas"/> </div> </div>

4. Double-click on the node and set the key function to fortune-telling. 🔮 **Copy this line to the Topic field**:

```
node/future-teller:0/future/trigger
```

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-3.webp')} alt="Edit mqtt in node dialog with the future-teller trigger topic in the highlighted Topic field"/> </div> </div>

Confirm with the **Done** button.

## Leave it to chance

1. The box works by providing one of the preset answers. It works on the basis of **random selection**. Now let's set it up.
You can program the random selection process according to a simple javascript. How? Behind the MQTT node, place a **Function node**, which you will find under the section of the same name.

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-4.webp')} alt="Function node highlighted in the palette and placed next to the future-teller MQTT node"/> </div> </div>

2. Double-click on the node to open it. Name the node in the **Name** line (for example 8-ball). Copy the following code into the **Function line**, as you can see in the screenshot.

```
var answers = ["Nejspíš ano", "S tím nepočítej", "Možná", "Určitě ano"] var num = Math.floor(Math.random() * Math.floor(answers.length)); msg.payload = answers[num]; return msg;
```

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-5.webp')} alt="Edit function node dialog named 8-ball with the random answer JavaScript on the On Message tab"/> </div> </div>

This code selects **one of four options**:
- Probably yes,
- Don't count on it,
- Maybe,
- Definitely yes.
Confirm with the **Done** button.

3. Next to the Random node, add a **Text node**, which can be found under the Dashboard section.
4. In the node, set **Label** to Answer.

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-6.webp')} alt="Edit text node dialog with the Label set to Odpoved and the text node placed on the canvas"/> </div> </div>

Confirm with the **Done** button.

5. Add a robot to your desktop to read the result out loud. This will make the experience just that little bit creepier. 🤖 You do this by using the Audio Out node, which can also be found under the Dashboard section.

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-7.webp')} alt="Audio out node highlighted in the dashboard palette and placed below the answer flow"/> </div> </div>
Set the voice in the node to read the message.

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-8.webp')} alt="Edit audio out node dialog with a TTS Voice selected to read the answer aloud"/> </div> </div>
Confirm with the **Done** button.

6. **Connect the nodes** as shown in the screenshot.
<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-9.webp')} alt="MQTT, 8-ball, text and audio out nodes wired together, with the Deploy button highlighted"/> </div> </div>

Start the flow with the **Deploy** button in the top right.

## Let the Great One tell you what your future holds.

1. Lift the box and **ask it the question** that is burning inside you. For example:

- Will David from the higher class return my love?
- Will there be blueberry dumplings for lunch tomorrow at school?
- Will I become a successful circus artist?
- Will the sun rise in the morning?
- Will I finally learn to eat with chopsticks?
- Will I work at Google someday?
- Should I dye my hair green?

2. **Shake the box** and find out the answer in Playground under the Dashboard tab.🎱 Be sure to turn on the speakers so that you hear it too. Hallelujah!

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-10.webp')} alt="Dashboard tile labelled Odpoved showing the drawn answer Nejspis ano"/> </div> </div>

P.S. The box does not guarantee that the answer it gives is right. 🤡
