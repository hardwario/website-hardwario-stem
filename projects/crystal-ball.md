---
slug: crystal-ball
title: Crystal ball
---
import Image from '@theme/IdealImage';

## Introduction

Young programmers want to know what the future holds too. The box will tell you. IoT magic will answer every question running through your head. 🔮 😱

In this project, you will learn to turn the box into a fortune-telling ball, also known as a **magic 8-ball**. ️🎱 You'll set it up to pick one of several answers at random when you shake it.

You will need the **box with a button and a USB dongle**, so the basic HARDWARIO [**Start Set**](https://www.hardwario.store/p/start-set/) is all you need.


## Make it happen in Node-RED

1. Assemble the Start Set and [pair it](https://docs.hardwario.com/tower/desktop-programming/radio-network-management/#pairing-new-devices). The Core Module needs the **radio-8-ball** firmware.

Once the firmware is uploaded, you'll see that the Alias of your device on the Devices tab has changed to **Future teller**.

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-1.webp')} alt="Playground Devices tab with the paired device listed under the alias future-teller:0"/> </div> </div>

2. In Playground, click the **Functions tab**, where you'll find the programming workspace.

3. Place an **mqtt in** node from the **network** section on the workspace.
<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-2.webp')} alt="Mqtt in node highlighted in the palette and an mqtt node placed on the flow canvas"/> </div> </div>

4. Double-click the node and set up the key function: fortune-telling. 🔮 **Copy this line into the Topic field**:

```
node/future-teller:0/future/trigger
```

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-3.webp')} alt="Edit mqtt in node dialog with the future-teller trigger topic in the highlighted Topic field"/> </div> </div>

Confirm with **Done**.

## Add a bit of chance

1. The box works by giving you one of its preset answers, always **picked at random**. Let's set that up now.
You program the random choice with a little JavaScript. How? After the MQTT node, place a **function** node, which you'll find in the section of the same name.

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-4.webp')} alt="Function node highlighted in the palette and placed next to the future-teller MQTT node"/> </div> </div>

2. Double-click the node to open it. Give it a name in the **Name** field (for example 8-ball). Copy this code into the **On Message** tab, exactly as you see it in the picture.

```
var answers = ["Nejspíš ano", "S tím nepočítej", "Možná", "Určitě ano"]
var num = Math.floor(Math.random() * Math.floor(answers.length));
msg.payload = answers[num];
return msg;
```

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-5.webp')} alt="Edit function node dialog named 8-ball with the random answer JavaScript on the On Message tab"/> </div> </div>

This code picks **one of four answers** (the code has them in Czech):
- Probably yes,
- Don't count on it,
- Maybe,
- Definitely yes.

Confirm with **Done**.

3. Next to the 8-ball node, add a **text** node from the **dashboard** section.
4. In it, set the **Label** field to Answer.

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-6.webp')} alt="Edit text node dialog with the Label set to Odpoved and the text node placed on the canvas"/> </div> </div>

Confirm with **Done**.

5. Add a robot to the workspace that reads the answer out loud. It will be properly spooky. 🤖 You'll find it as the **audio out** node, also in the **dashboard** section.

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-7.webp')} alt="Audio out node highlighted in the dashboard palette and placed below the answer flow"/> </div> </div>
In the node, choose the voice that reads the message.

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-8.webp')} alt="Edit audio out node dialog with a TTS Voice selected to read the answer aloud"/> </div> </div>
Confirm with **Done**.

6. **Connect the nodes** as shown in the picture.
<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-9.webp')} alt="MQTT, 8-ball, text and audio out nodes wired together, with the Deploy button highlighted"/> </div> </div>

Start the flow with the **Deploy** button in the top right corner.

## Let fate speak

1. Pick up your mighty box and **ask it the question** that's burning inside you. For example:

- Will David from the year above love me back?
- Will there be blueberry dumplings for lunch at school tomorrow?
- Will I become a successful circus performer one day?
- Will the sun rise in the morning?
- Will I finally learn to eat with chopsticks?
- Will I work at Google one day?
- Should I dye my hair green?

2. **Shake the box** and you'll find the answer in Playground on the Dashboard tab. 🎱 Don't forget to turn on your speakers, because you'll hear the answer too. Hallelujah!

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-10.webp')} alt="Dashboard tile labelled Odpoved showing the drawn answer Nejspis ano"/> </div> </div>

P.S. The box doesn't guarantee that its answer is right. 🤡
