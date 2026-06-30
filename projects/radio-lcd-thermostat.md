---
slug: radio-lcd-thermostat
title: Radio LCD thermostat
---
import Image from '@theme/IdealImage';

# Radio LCD Thermostat

This document will guide you through the **Radio LCD Thermostat** project. With this gadget you will be able to control remotly you temperature.

## Block Concept

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat-block-diagram.webp')}/>
  </div>
</div>

## Requirements

* Either [Display Set](https://www.hardwario.store/p/display-set), or individual components:

  * 1x [LCD Module](https://www.hardwario.store/p/lcd-module-bg)
  * 1x [Core Module](https://www.hardwario.store/p/core-module)
  * 1x [Mini Battery Module](https://www.hardwario.store/p/mini-battery-module)
  * 1x [Radio Dongle](https://www.hardwario.store/p/radio-dongle)

* One of these options:

  * **HARDWARIO Playground** installed \(recommended\)
    You can find more information in the [**Quick Start Guide**](https://docs.hardwario.com/tower/firmware-development/firmware-quick-start/) document.
  * **Raspberry Pi** with the **HARDWARIO Raspbian** distribution
    You can find more information in the document [**Raspberry Pi Installation**](https://docs.hardwario.com/tower/server-raspberry-pi/).
  * **HARDWARIO Firmware Tool** installed
    You can find more information in the document [**Toolchain Setup**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain).

## Firmware Upload

In this procedure we will use the **HARDWARIO Playground** to upload firmware to the **Core Module**.

#### Step 1: Connect the Micro USB cable to the **Core Module** and your computer

#### Step 2: Flash firmware

Run the HARDWARIO Playground. In the Firmware tab choose and upload the `bcf-radio-lcd-thermostat` firmware to the **Core Module**:

:::warning

**Flashing Core Module R1 & R2**
For differences of flashing older **Core Module 1** and newer **Core Module 2** please read **Core Module R1 and R2 comparison** in the **Hardware section**

:::

#### Step 3: Remove the Micro USB cable from the **Core Module** and your computer

:::success

At this point your firmware is successfully uploaded.

:::

## Hardware Assembling

See short video with easy step by step demonstration:


<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
  <iframe
    src="https://www.youtube.com/embed/5fihG2xp4y8?si=US5A8Sm3CeTFJtKf"     title="YouTube video player"
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
  />
</div>

#### Step 1: Start with the **Mini Battery Module**

:::warning

Make sure the **Mini Battery Module** does not have batteries inserted.

:::

#### **Step 2:** Plug the **Core Module** on top of the **Mini Battery Module**

#### **Step 3:** Plug the **LCD Module** on top of the **Core Module**

## Playground Bootstrap

:::danger

If you are using the new **HARDWARIO Playground**, then use the **Functions** tab instead of using [**http://localhost:1880/**](http://localhost:1880/). Also the pairing process is now done in **Devices** tab. For communication test use the **Messages** tab.

:::

#### Step 1: Open **Node-RED** in your web browser

[http://localhost:1880/](http://localhost:1880/)

#### Step 2: You should see the empty workspace with **Flow 1**

#### Step 3: Insert the following snippet in the flow \(using **Menu &gt;&gt; Import**\)

```text
[{"id":"2fc604fc.3b6abc","type":"inject","z":"dfc861b.b2a02a","name":"List all gateways","topic":"gateway/all/info/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":460,"wires":[["a2c10833.24d5d8"]]},{"id":"1e4502b8.2f63fd","type":"inject","z":"dfc861b.b2a02a","name":"Start node pairing","topic":"gateway/usb-dongle/pairing-mode/start","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":570,"y":580,"wires":[["795ff5a7.8e266c"]]},{"id":"3d844ce2.932864","type":"inject","z":"dfc861b.b2a02a","name":"Stop node pairing","topic":"gateway/usb-dongle/pairing-mode/stop","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":640,"wires":[["5967c452.c838bc"]]},{"id":"f202b253.2705b","type":"inject","z":"dfc861b.b2a02a","name":"List paired nodes","topic":"gateway/usb-dongle/nodes/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":520,"wires":[["f0aca138.0b2c3"]]},{"id":"349f02fd.890f6e","type":"inject","z":"dfc861b.b2a02a","name":"Unpair all nodes","topic":"gateway/usb-dongle/nodes/purge","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":700,"wires":[["2f1c5bb6.53d6f4"]]},{"id":"cf61d75d.4ad8f8","type":"mqtt in","z":"dfc861b.b2a02a","name":"","topic":"#","qos":"2","broker":"67b8de4a.029d3","x":530,"y":400,"wires":[["a5cb0658.f5d658"]]},{"id":"a5cb0658.f5d658","type":"debug","z":"dfc861b.b2a02a","name":"","active":true,"console":"false","complete":"false","x":790,"y":400,"wires":[]},{"id":"a2c10833.24d5d8","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":460,"wires":[]},{"id":"f0aca138.0b2c3","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":520,"wires":[]},{"id":"795ff5a7.8e266c","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":580,"wires":[]},{"id":"5967c452.c838bc","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":640,"wires":[]},{"id":"2f1c5bb6.53d6f4","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":700,"wires":[]},{"id":"67b8de4a.029d3","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"717f7c18.ba0a24","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```

It will look like this:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat-node-red-gw-controls.webp')}/>
  </div>
</div><br></br>

:::info

This snippet provides control buttons for gateway/radio commands. These commands are sent over the MQTT protocol.

:::

#### Step 4: Deploy the flow using the **Deploy** button in the top-right corner

#### Step 5: Open the **debug** tab

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat-node-red-gw-debug.webp')}/>
  </div>
</div><br></br>

:::info

In the **debug** tab, you will be able to see all the MQTT messages.

:::

#### Step 6: Click on the **List all gateways** button. You should see a response like this in the **debug** tab

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat-node-red-gw-list.webp')}/>
  </div>
</div><br></br>

:::success

At this point, you've got working **Node-RED**, **MQTT**, **HARDWARIO Radio Dongle** and **HARDWARIO Gateway**.

:::

## Radio Pairing

In this section, we will create a radio link between the **Radio Dongle** and the **Radio LCD Thermostat**.

Follow these steps in **Node-RED**:

#### Step 1: Click on the **Start node pairing** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat-node-red-gw-pair-start.webp')}/>
  </div>
</div>

#### Step 2: Insert the batteries into the **Radio LCD Thermostat** to send the pairing request (you should also see the red LED on the **Core Module** to be on for about 2 seconds)

#### Step 3: Click on the **Stop node pairing** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat-node-red-gw-pair-stop.webp')}/>
  </div>
</div><br></br>

:::success

At this point, you've got established a radio link between the node (**Radio LCD Thermostat**) and the gateway (**Radio Dongle**).

:::

## Communication Test

Follow these steps in **Node-RED**:

#### Step 1: Switch to **debug** tab on the right

#### Step 2: Insert the following snippet in the flow (using **Menu >> Import**)

```text
[{"id":"12b3deae.bbbdf1","type":"mqtt in","z":"f2f80e07.95983","name":"","topic":"node/lcd-thermostat:0/#","qos":"2","broker":"25b87ea5.743312","x":390,"y":320,"wires":[["7694514b.9b64d"]]},{"id":"7694514b.9b64d","type":"debug","z":"f2f80e07.95983","name":"","active":true,"console":"false","complete":"false","x":630,"y":320,"wires":[]},{"id":"25b87ea5.743312","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```

#### Step 3: If you see some messages in debug log (like temperature) your kit works correctly

:::success

At this point, you've got verified radio communication.

:::

## Integration with Blynk IoT

Now that the kit is assembled and sending data over MQTT, let's display the
temperature on your phone with **Blynk IoT** (the current Blynk platform — the old
Blynk Legacy cloud has been discontinued). In this example you'll graph the
measured temperature together with your set-point, while the relay keeps switching
locally based on that set-point.

See the canonical HARDWARIO guide,
[**Blynk app integration**](https://docs.hardwario.com/tower/platform-integrations/blynk-app/),
for how to create a Blynk account, a device template, datastreams, and a device.
It also explains where to find the **Auth Token** and **Template ID** you'll need
below.

#### Step 1: Create a template and datastreams

In the Blynk IoT web console, create a **device template**, then add one
**Datastream** (a **Virtual Pin**) for each value you want to display:

| Value | Virtual Pin | Type | Unit |
|---|---|---|---|
| Measured temperature | V1 | Double | °C |
| Set-point temperature | V2 | Double | °C |

Set a sensible range for each datastream (for example **0 – 50**). Then create a
**device** from this template — see the [guide](https://docs.hardwario.com/tower/platform-integrations/blynk-app/)
for the exact steps.

#### Step 2: Configure the Node-RED flow

On the Node-RED canvas, subscribe to the two MQTT topics published by the
thermostat and forward them to Blynk:

* `node/lcd-thermostat:0/thermometer/0:1/temperature` → the **measured temperature**
* `node/lcd-thermostat:0/thermometer/set-point/temperature` → the **set-point**

The relay logic stays entirely local: a **switch** node compares the measured
temperature against the set-point and publishes `true`/`false` to
`node/power-controller:0/relay/-/state/set`, exactly as before. This part does not
involve Blynk.

To send each value to the phone, add a **Blynk IoT Write** node (you'll find it on
the left under the **Blynk IoT** section) after each temperature topic:

* the measured-temperature node → **Virtual Pin** `1`
* the set-point node → **Virtual Pin** `2`

#### Step 3: Point the Write nodes at Blynk IoT

Double-click a **Write** node and click the **small pencil** to open the client
configuration. In the **Url** field enter `blynk.cloud`, and copy the **Auth Token**
and **Template ID** from your device detail in the Blynk web console. Confirm with
**Add**. Back in the node, set the **Virtual Pin** number (without the letter "V"),
then click **Done**. Reuse the same client for both Write nodes.

When both nodes are wired, click **Deploy** in the top-right corner.

#### Step 4: Add a widget in the Blynk IoT app

Download the **Blynk IoT** app from the
[**App Store**](https://apps.apple.com/us/app/blynk-iot/id1559317868) or
[**Google Play**](https://play.google.com/store/apps/details?id=cloud.blynk) and
sign in with the same account. Open your device, then add a **Chart** widget (to
watch the temperature over time) or a **Gauge**. Open the widget's settings and
bind it to the **Datastream** for the virtual pin you chose. Once Node-RED is
deployed, the values start streaming in and you're done!

## Related Documents

* [**Blynk app integration**](https://docs.hardwario.com/tower/platform-integrations/blynk-app/)
* [**Raspberry Pi Installation**](https://docs.hardwario.com/tower/server-raspberry-pi/)
* [**Toolchain Setup**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain)
* [**Toolchain Guide**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain)
