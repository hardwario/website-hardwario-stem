---
slug: iot-pulse-monitor-experiment-cs
title: Experiment
---
import Image from '@theme/IdealImage';

**Time allocation** 10 min.

## Transmitting the pulse count

### Experiment Description

As part of the experiment, we will transmit the number of pulses using an **LED** or a **magnetic sensor**.

## Experiment Step

### 1. Building the Sensor Set

#### Modules in the setup:

* **Core Module**
* **Mini Battery Module**
* **Sensor Module**

<div class="container">
  <div class="row">
    <Image img={require('./modules-canvas.webp')}/>
  </div>
</div>

:::tip

 Don’t forget to connect your pulse counter to the Sensor Module according to this diagram:

:::

<div class="container">
  <div class="row">
    <Image img={require('./counter.avif')}/>
  </div>
</div>

### 2. Uploading the firmware

* Connect the **Core Module** to your computer.
* In the Playground application, under the Firmware tab, upload the firmware `twr-radio-pulse-counter`.
* If you haven’t installed **Playground** yet, download and install it.

:::tip

 Take a look at the [detailed guide for uploading firmware to the Core Module.](https://www.hardwario.com/cs/education/tutorials/jak-nahrat-firmware/)

:::

### 3. Connecting the units to Playground

1. Insert the **Radio Dongle** into your computer’s USB port.
2. Open the **Playground application** and go to the **Devices** tab.
3. Select your Radio Dongle from the list of USB devices and click **Connect**.
4. Click **Start pairing**.
5. Insert the batteries into the Sensor set – successful pairing will be indicated by the appearance of a device named `wireless-pulse-counter:0`.

---

### 4. Setting up the pulse count display function

1. Switch to the **Functions tab**.
2. Perform the **flow import**:

```json
[{"id":"aadabfa1408a1d6f","type":"tab","label":"Pulse counter","disabled":false,"info":"","env":[]},{"id":"40233bb3597a5655","type":"mqtt in","z":"aadabfa1408a1d6f","name":"","topic":"node/wireless-pulse-counter:0/pulse-counter/a/count","qos":"2","datatype":"auto","broker":"29fba84a.b2af58","nl":false,"rap":true,"rh":0,"inputs":0,"x":350,"y":180,"wires":[["4ad69dcbbbb6be2b","c4329fa59059d5ce","655a178d4a5198ef"]]},{"id":"4ad69dcbbbb6be2b","type":"ui_text","z":"aadabfa1408a1d6f","group":"57ff470b.93fdf8","order":22,"width":0,"height":0,"name":"","label":"Pulses","format":"{{msg.payload}}","layout":"row-spread","className":"","x":720,"y":120,"wires":[]},{"id":"c4329fa59059d5ce","type":"ui_chart","z":"aadabfa1408a1d6f","name":"","group":"57ff470b.93fdf8","order":23,"width":0,"height":0,"label":"Pulses in time","chartType":"line","legend":"false","xformat":"HH:mm:ss","interpolate":"linear","nodata":"","dot":false,"ymin":"","ymax":"","removeOlder":1,"removeOlderPoints":"","removeOlderUnit":"3600","cutout":0,"useOneColor":false,"useUTC":false,"colors":["#1f77b4","#aec7e8","#ff7f0e","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5"],"outputs":1,"useDifferentColor":false,"className":"","x":760,"y":180,"wires":[[]]},{"id":"655a178d4a5198ef","type":"switch","z":"aadabfa1408a1d6f","name":"","property":"payload","propertyType":"msg","rules":[{"t":"eq","v":"30","vt":"str"},{"t":"eq","v":"70","vt":"str"}],"checkall":"true","repair":false,"outputs":2,"x":670,"y":260,"wires":[["58553e8bbf45d8c7"],["9c5daf0013adf09a"]]},{"id":"58553e8bbf45d8c7","type":"change","z":"aadabfa1408a1d6f","name":"","rules":[{"t":"set","p":"payload","pt":"msg","to":"30 ticks detected","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":840,"y":240,"wires":[["bda64a03ae5bd8dd"]]},{"id":"bda64a03ae5bd8dd","type":"ui_toast","z":"aadabfa1408a1d6f","position":"dialog","displayTime":"3","highlight":"","sendall":true,"outputs":1,"ok":"OK","cancel":"","raw":false,"className":"","topic":"","name":"","x":1050,"y":260,"wires":[[]]},{"id":"9c5daf0013adf09a","type":"change","z":"aadabfa1408a1d6f","name":"","rules":[{"t":"set","p":"payload","pt":"msg","to":"70 ticks detected","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":840,"y":280,"wires":[["bda64a03ae5bd8dd"]]},{"id":"29fba84a.b2af58","type":"mqtt-broker","name":"","broker":"127.0.0.1","port":"1883","clientid":"","autoConnect":true,"usetls":false,"protocolVersion":"4","keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","birthMsg":{},"closeTopic":"","closePayload":"","closeMsg":{},"willTopic":"","willQos":"0","willPayload":"","willMsg":{},"sessionExpiry":""},{"id":"57ff470b.93fdf8","type":"ui_group","name":"Default","tab":"11207769.c31889","order":1,"disp":true,"width":"6","collapse":false},{"id":"11207769.c31889","type":"ui_tab","name":"Home","icon":"dashboard"}]
```
<div class="container">
  <div class="row">
    <Image img={require('./stem-diagram.png')}/>
  </div>
</div>

3. Switch to the **Messages** tab - if everything went correctly, you will see incoming messages from the Sensor set.
4. Switch to the **Dashboard** tab – a graph displaying the pulse count will appear.

:::info

 The flow also includes an **automatic alert** if the pulse count reaches **30** or **70**.

:::

 <div class="container">
  <div class="row">
    <Image img={require('./stem-result.webp')}/>
  </div>
</div>







