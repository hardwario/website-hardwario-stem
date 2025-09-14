---
slug: highest-centrifugal-force
title: Highest centrifugal force
---
import Image from '@theme/IdealImage';

## Introduction

Do you remember the spintop? You might have had a wooden or plastic one, but we bet it wasn't a smart one. Now you can finally make one – it will register your centrifugal force. Measure it against your friends to see who is centrifugally the strongest one! 💪

In this project, you will learn **to measure the fast spinning of the box**.  👈

All you need is the **box with button** and the **USB dongle** in the basic HARDWARIO [Start Set](https://shop.hardwario.com/p/start-set/).


## Download new firmware

1. If you haven't done it yet, put together the Start Set.
2. Upload new firmware to Core Module - **bcf radio spinning game** (you will find it among other firmware in the Playground). Thanks to this firmware, the box will become sensitive to rotation. 👌



3. <a href="https://docs.hardwario.com/tower/desktop-programming/radio-network-management#pairing-new-devices" target="_blank">Pair the Core Module with the USB Dongle.</a> Right after pairing it, you will notice that your Core Module has changed Alias to **rotation-g-meter**.

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-1.webp')}/> </div> </div>

## Build in the Node-RED

1. In the Playground, click on the **Functions tab**, where is the programming desktop Node-RED. 🤖
2. Start as always: first place the **MQTT node** from the Input section on the desktop.

Double-click on it and copy **Topic** to the field. With this, the box will measure the centrifugal force:

```
node/rotation-g-meter:0/rotation-g
```


<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-2.webp')}/> </div> </div>

Confirm it with the **Done** button.

3. Surprise. 😲 Under the first **MQTT node**, place a second MQTT node from the Input section. This time, save another **Topic** in its settings; with this one, the box will measure the rotation time:


```
node/rotation-g-meter:0/rotation-time
```

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-3.webp')}/> </div> </div>

4. To each node, place one node for javascript. You can find them in **Function** section, under Function (original, right? 🤡).

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-4.webp')}/> </div> </div>

5. Double-click on the **upper Function node** and insert this code into the large field. The code will register the record centrifugal force. 💪


```
var record = flow.get("record") || flow.set("record", 0.0);
var lastSpin = parseFloat(msg.payload);

if(lastSpin > flow.get("record"))
{
    flow.set("record", lastSpin);
    return msg;
}
```

In the **Name** field, name the node as _Save the record_.

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-5.webp')}/> </div> </div>

Confirm it with the **Done** button.

6. Into the **bottom Function node**, insert the code that will register the record spin time. ⏰


```
var record = flow.get("timeRecord") || flow.set("timeRecord", 0.0);
var lastSpinTime = parseFloat(msg.payload);

if(lastSpinTime > flow.get("timeRecord"))
{
    flow.set("timeRecord", lastSpinTime);
    return msg;
}
```

In the **Name** field, name the node as _Save the record_.

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-6.webp')}/> </div> </div>

Confirm it with the **Done** button.

7. Under the upper Function node, place the **text node** from the Dashboard section. You can place it elsewhere, but for the sake of clarity it will be better if they are aligned vertically.

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-7.webp')}/> </div> </div>

In settings, name it _Last spin_. This way, it will show you the value that the box just measured.

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-8.webp')}/> </div> </div>

8. Place another node under this one; thanks to the bottom one, the values will be registered into a graph. 📈 You will find it as **Chart node** in Dashboard section.
In the **Label** field, name it as _History_. Into the **X-asis** Label field, set  automatic, which means that the unit will be added automatically.

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-9.webp')}/> </div> </div>

9. Under the second javascript, place the **Text node** from the Dashboard section.
You will determine in it how the length of the latest rotation is displayed: _Time of last spin_.

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-10.webp')}/> </div> </div>

10.  Next to each level, place one **Text node** from the Dashboard section. Those will affect the way you see the record time registered in the graph.  Set up the **Record label** and **Record** **time**, respectively.

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-11.webp')}/> </div> </div>

11. And then **connect** it all as shown in the picture. You will have two separate flows on the desktop. In the end, don’t forget to press the **Deploy** button to make it all work. 🚨

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-12.webp')}/> </div> </div>

## Give it a spin!

1. Invite all your friends and get them worked up. Have a Coke. 😄
2. Measure your centrifugal force! One by one, spin it.
   **Our tip**: For the best spin, make the box stand on its button.
3. Follow the results in the **Dashboard tab**. So, good luck and …. **spin it like you dare!**

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-13.webp')}/> </div> </div>
