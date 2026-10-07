---
slug: highest-centrifugal-force
title: Highest centrifugal force
---
import Image from '@theme/IdealImage';

## Introduction

Do you remember spinning tops? You might have had a wooden or plastic one, but we bet it wasn't a smart one. Now you can finally make one that records your centrifugal force. Then compete with your friends and find out which of you is the centrifugal champion! 💪

In this project, you will learn **to measure how fast the box spins**. 👈

All you need is the **box with a button** and the **USB dongle**, so the basic HARDWARIO [**Start Set**](https://www.hardwario.store/p/start-set/) will do.


## Download new firmware

1. If you haven't done it yet, assemble the Start Set.
2. Upload the new **bcf radio spinning game** firmware to the Core Module (you'll find it in Playground among the other firmware). It makes the box react to spinning. 👌



3. <a href="https://docs.hardwario.com/tower/desktop-programming/radio-network-management/#pairing-new-devices" target="_blank">Pair the Core Module with the USB dongle.</a> Right after pairing, you'll see that its Alias has changed to **rotation-g-meter**.

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-1.webp')} alt="Playground Devices tab: the paired device row with alias rotation-g-meter:0 highlighted"/> </div> </div>

## Build it in Node-RED

1. In Playground, click the **Functions tab**, where you'll find the Node-RED programming workspace. 🤖
2. Start as always: first place an **mqtt in** node from the **network** section on the workspace.

Double-click it and copy this line into the **Topic** field. It lets the box measure the centrifugal force:

```
node/rotation-g-meter:0/rotation-g
```


<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-2.webp')} alt="Edit mqtt in node dialog with the rotation-g topic in the highlighted Topic field"/> </div> </div>

Confirm with **Done**.

3. Surprise! 😲 Below the first MQTT node, place a second **mqtt in** node from the **network** section. This time, enter a different **Topic** in its settings, so the box measures how long it spins:


```
node/rotation-g-meter:0/rotation-time
```

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-3.webp')} alt="Second MQTT node: Edit dialog with the rotation-time topic in the highlighted Topic field"/> </div> </div>

4. Next to each of them, add one node for JavaScript. You'll find it in the **function** section under the name function (original, right? 🤡).

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-4.webp')} alt="Node-RED workspace with a Function node highlighted next to each of the two MQTT nodes"/> </div> </div>

5. Double-click the **upper function node** and paste this code into the large field on the **On Message** tab. It records the highest centrifugal force. 💪


```
var record = flow.get("record") || flow.set("record", 0.0);
var lastSpin = parseFloat(msg.payload);

if(lastSpin > flow.get("record"))
{
    flow.set("record", lastSpin);
    return msg;
}
```

In the **Name** field, name the node _Save the record_.

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-5.webp')} alt="Edit function node dialog with the record-saving code and the Name field highlighted"/> </div> </div>

Confirm with **Done**.

6. In the **lower function node** (again on the **On Message** tab), paste the code that records the longest spin time. ⏰


```
var record = flow.get("timeRecord") || flow.set("timeRecord", 0.0);
var lastSpinTime = parseFloat(msg.payload);

if(lastSpinTime > flow.get("timeRecord"))
{
    flow.set("timeRecord", lastSpinTime);
    return msg;
}
```

In the **Name** field, name the node _Save the record_.

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-6.webp')} alt="Edit function node dialog for the bottom node with the spin-time record code and the Name field highlighted"/> </div> </div>

Confirm with **Done**.

7. Below the upper function node, place a **text** node from the **dashboard** section. You can put it somewhere else, but it's clearer when the nodes sit one under another.

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-7.webp')} alt="Node-RED workspace with a Text node from the Dashboard section highlighted under the upper Function node"/> </div> </div>

In its settings, name it _Last spin_. It will show the value the box has just measured.

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-8.webp')} alt="Edit text node dialog with the Label field for the last spin value highlighted"/> </div> </div>

8. Below this node, place one more, which plots the values in a chart. 📈 You'll find it as the **chart** node in the **dashboard** section.
In the **Label** field, name it _History_. In the **X-axis Label** field, choose automatic, so the unit is added automatically.

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-9.webp')} alt="Edit chart node dialog with the Label field and the automatic X-axis Label setting highlighted"/> </div> </div>

9. Below the second JavaScript node, place a **text** node from the **dashboard** section.
In it, set the label for the time of the last spin: _Time of last spin_.

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-10.webp')} alt="Edit text node dialog with the Label field for the time of the last spin highlighted"/> </div> </div>

10.  After each branch, place one **text** node from the **dashboard** section. They decide how you'll see the records. Set their Labels to **Record** and **Record time**.

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-11.webp')} alt="Node-RED workspace with the record and record-time Text nodes highlighted next to each flow level"/> </div> </div>

11. Then **connect** everything as shown in the picture. You'll end up with two separate flows on the workspace. Finally, don't forget to press the **Deploy** button to start it all up. 🚨

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-12.webp')} alt="Two finished flows connected in Node-RED with the Deploy button highlighted"/> </div> </div>

## Give it a spin!

1. Invite all your friends and get them fired up. Maybe have a cola. 😄
2. Measure your centrifugal force! Take turns spinning the box.
   **Our tip**: The box spins best when you stand it on its button.
3. Follow the results on the **Dashboard** tab. Good luck and… **spin it for all you're worth!**

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-13.webp')} alt="Dashboard with last spin value, history chart, last spin time, record, and record time"/> </div> </div>
