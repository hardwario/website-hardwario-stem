---
slug: radio-co2-monitor
title: Radio CO₂ monitor
---
import Image from '@theme/IdealImage';

# Radio CO₂ Monitor

This document will guide you through the **Radio CO₂ Monitor** project. You will be able to see dashboard with CO2, temperature, humidity, ambient light and atmospheric pressure in **Node-RED** and view the data on your smart phone using the **Blynk** cloud and mobile app.

## Block Concept

<div class="container">
  <div class="row">
    <Image  img={require('./img/radio-co2-monitor/radio-co2-monitor.png')}
          style={{ backgroundColor: "#fff" }}/>
  </div>
</div>

## Requirements

* Either [CO₂ Monitor Kit](https://www.hardwario.store/p/co2-monitor-kit), or individual components:

  * 1x [Core Module](https://www.hardwario.store/p/core-module)
  * 1x [Temperature Tag](https://www.hardwario.store/p/temperature-tag)
  * 1x [Humidity Tag](https://www.hardwario.store/p/humidity-tag)
  * 1x [Barometer Tag](https://www.hardwario.store/p/barometer-tag)
  * 1x [CO₂ Module](https://www.hardwario.store/p/co2-module)
  * 1x [Battery Module](https://www.hardwario.store/p/battery-module)
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

#### Step 1: Connect the Micro USB cable to the **Core Module** and your computer.

#### Step 2: Run the HARDWARIO Playground

In the Firmware tab choose and upload the `bcf-radio-co2-monitor` firmware to the **Core Module**:

:::warning

**Flashing Core Module R1 & R2**
For differences of flashing older **Core Module 1** and newer **Core Module 2** please read **Core Module R1 and R2 comparison** in the **Hardware section**

:::

#### Step 3: Remove the Micro USB cable from the **Core Module** and your computer.

:::success

At this point your firmware is successfully uploaded.

:::

## Hardware Assembling

See short video with easy step by step demonstration:

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
  <iframe
   src="https://www.youtube.com/embed/jGxjl5v7kqE?si=SRKiZyteXo4f5Lzf"   title="YouTube video player"
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
  />
</div>

#### Step 1: Start with the **Battery Module**.

:::warning

Make sure the **Battery Module** does not have batteries inserted.

:::

#### Step 2: Plug the **CO2 Module** on top of the **Battery Module**.

#### Step 3: Plug the **Core Module** on top of the **CO2 Module**.

#### Step 4: Plug the **Temperature Tag** into a socket on the **CO2 Module**.

#### Step 5: Plug the **Humidity Tag** into a socket on the **CO2 Module**.

#### Step 6: Plug the **Barometer Tag** into a socket on the **CO2 Module**.

#### Step 7: Plug the **Cover Module** on top of the **Core Module**.

## Playground Bootstrap

:::danger

If you are using the new **HARDWARIO Playground**, then use the **Functions** tab instead of using [**http://localhost:1880/**](http://localhost:1880/). Also the pairing process is now done in **Devices** tab. For communication test use the **Messages** tab.

:::

#### Step 1: Open **Node-RED** in your web browser:

[http://localhost:1880/](http://localhost:1880/)

#### Step 2: You should see the empty workspace with **Flow 1:**

#### Step 3: Insert the following snippet in the flow \(using **Menu &gt;&gt; Import**\) and click in **Flow 1** tab:

```text
[{"id":"2fc604fc.3b6abc","type":"inject","z":"dfc861b.b2a02a","name":"List all gateways","topic":"gateway/all/info/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":460,"wires":[["a2c10833.24d5d8"]]},{"id":"1e4502b8.2f63fd","type":"inject","z":"dfc861b.b2a02a","name":"Start node pairing","topic":"gateway/usb-dongle/pairing-mode/start","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":570,"y":580,"wires":[["795ff5a7.8e266c"]]},{"id":"3d844ce2.932864","type":"inject","z":"dfc861b.b2a02a","name":"Stop node pairing","topic":"gateway/usb-dongle/pairing-mode/stop","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":640,"wires":[["5967c452.c838bc"]]},{"id":"f202b253.2705b","type":"inject","z":"dfc861b.b2a02a","name":"List paired nodes","topic":"gateway/usb-dongle/nodes/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":520,"wires":[["f0aca138.0b2c3"]]},{"id":"349f02fd.890f6e","type":"inject","z":"dfc861b.b2a02a","name":"Unpair all nodes","topic":"gateway/usb-dongle/nodes/purge","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":700,"wires":[["2f1c5bb6.53d6f4"]]},{"id":"cf61d75d.4ad8f8","type":"mqtt in","z":"dfc861b.b2a02a","name":"","topic":"#","qos":"2","broker":"67b8de4a.029d3","x":530,"y":400,"wires":[["a5cb0658.f5d658"]]},{"id":"a5cb0658.f5d658","type":"debug","z":"dfc861b.b2a02a","name":"","active":true,"console":"false","complete":"false","x":790,"y":400,"wires":[]},{"id":"a2c10833.24d5d8","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":460,"wires":[]},{"id":"f0aca138.0b2c3","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":520,"wires":[]},{"id":"795ff5a7.8e266c","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":580,"wires":[]},{"id":"5967c452.c838bc","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":640,"wires":[]},{"id":"2f1c5bb6.53d6f4","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":700,"wires":[]},{"id":"67b8de4a.029d3","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"717f7c18.ba0a24","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```

It will look like this:


<div class="container">
  <div class="row">
    <Image img={require('./img/radio-co2-monitor/radio-co2-monitor-node-red-gw-controls.webp')}/>
  </div>
</div><br></br>

This snippet provides control buttons for gateway/radio commands. These commands are sent over the MQTT protocol.

#### Step 4: Deploy the flow using the **Deploy** button in the top-right corner:

#### Step 5: Open the **debug** tab:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-co2-monitor/radio-co2-monitor-node-red-gw-debug.webp')}/>
  </div>
</div><br></br>

:::info

In the **debug** tab, you will be able to see all the MQTT messages.

:::

#### Step 6: Click on the **List all gateways** button. You should see a response like this in the **debug** tab:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-co2-monitor/radio-co2-monitor-node-red-gw-list.webp')}/>
  </div>
</div><br></br>

:::success

At this point, you've got working **Node-RED**, **MQTT**, **HARDWARIO Radio Dongle**and **HARDWARIO Gateway**.

:::

## Radio Pairing

In this section, we will create a radio link between the **Radio Dongle** and the **Radio CO2 Monitor**.

Follow these steps in **Node-RED**:

#### Step 1: Click on the **Start node pairing** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-co2-monitor/radio-co2-monitor-node-red-gw-pair-start.webp')}/>
  </div>
</div>

#### Step 2: Insert the batteries into the **Radio CO2 Monitor** to send the pairing request \(you should also see the red LED on the **Core Module** to be on for about 2 seconds\).

#### Step 3: Click on the **Stop node pairing** button.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-co2-monitor/radio-co2-monitor-node-red-gw-pair-stop.webp')}/>
  </div>
</div><br></br>

:::success

At this point, you've got established a radio link between the node \(**Radio Motion Detector**\) and the gateway \(**Radio Dongle**\).

:::

## Communication Test

Follow these steps in **Node-RED**:

#### Step 1: Switch to **debug** tab on the right

#### Step 2: Test it

Start breathing on the temperature sensor on the **Temperature Tag** to invoke a change of temperature and hence trigger a radio transmission.

You should then see similar messages:
<div class="container">
  <div class="row">
    <Image img={require('./img/radio-co2-monitor/radio-co2-monitor-radio-test.webp')}/>
  </div>
</div><br></br>

:::success

At this point, you've got verified radio communication.

:::

## Integration with Blynk IoT

Now that the kit is assembled and sending data, let's show the measured values on your phone using **Blynk IoT** (the current Blynk platform — the old Blynk Legacy cloud has been discontinued). You'll create a Blynk account, a device template with one **Datastream** per value, and a device, then wire **Node-RED** to push the MQTT readings into Blynk.

For account, template, device and datastream setup, follow the canonical guide: [**HARDWARIO Blynk app integration**](https://docs.hardwario.com/tower/platform-integrations/blynk-app/).

#### Step 1: Create the Blynk IoT account, template and device

If you don't have one yet, create an account in the **Blynk IoT** app and create a **device template**, then a **device** from it. The [**integration guide**](https://docs.hardwario.com/tower/platform-integrations/blynk-app/) walks through each step and is the source of truth for the exact click paths.

#### Step 2: Create one Datastream (Virtual Pin) per value

On the template detail, open the **Datastreams** tab and add one **Virtual Pin** datastream for each measured value. Use the **Double** data type for all of them and set a sensible range and unit:

| Value | Virtual Pin | Type | Unit |
|---|---|---|---|
| Temperature | V0 | Double | °C |
| Relative humidity | V1 | Double | % |
| Atmospheric pressure | V2 | Double | hPa |
| CO₂ concentration | V3 | Double | ppm |

:::info

The CO₂ concentration has its own Virtual Pin (V3). The barometer reports pressure in pascals, so Node-RED divides it by **1000** before sending — feed the V2 datastream in **hPa** (≈ 950–1050).

:::

#### Step 3: Add the Blynk IoT Write nodes in Node-RED

Add another flow (the big **+** button next to the flow name) and build a small chain for each value: an **MQTT in** node subscribed to the sensor topic, feeding a green **Blynk IoT Write** node (found in the left menu under the **Blynk IoT** section). For atmospheric pressure, put a small **function** node `msg.payload = msg.payload / 1000.0` between the MQTT node and the Write node so the value arrives in hPa.

Use these MQTT topics and Virtual Pins:

| MQTT topic | Virtual Pin |
|---|---|
| `node/co2-monitor:0/thermometer/0:0/temperature` | V0 |
| `node/co2-monitor:0/hygrometer/0:4/relative-humidity` | V1 |
| `node/co2-monitor:0/barometer/0:0/pressure` (÷ 1000) | V2 |
| `node/co2-monitor:0/co2-meter/-/concentration` | V3 |

#### Step 4: Configure the Blynk IoT connection

Double-click a Write node and click the **pencil** to add the connection. In the **Url** field enter `blynk.cloud`, then copy the **Auth Token** and **Template ID** from the device detail in the Blynk web console. Confirm with **Add**. Back in the node, set the **Virtual Pin** to the matching number (`0`, `1`, `2` or `3` — without the leading "V"). All four Write nodes share the same connection. Confirm with **Done**, connect the nodes and click **Deploy**.

#### Step 5: Add Gauge widgets in the app

Download the **Blynk IoT** app from the [**App Store**](https://apps.apple.com/us/app/blynk-iot/id1559317868) or [**Google Play**](https://play.google.com/store/apps/details?id=cloud.blynk), sign in and open your device. Add a **Gauge** widget for each datastream (CO₂, temperature, humidity, pressure) and bind each one to its Virtual Pin. After deploying the Node-RED flow, the gauges start showing live readings.

### Related Documents <a id="related-documents"></a>

* [**HARDWARIO Blynk app integration**](https://docs.hardwario.com/tower/platform-integrations/blynk-app/)

* [**Raspberry Pi Installation**](https://docs.hardwario.com/tower/server-raspberry-pi/)
* [**Toolchain Setup**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain)
* [**Toolchain Guide**](https://docs.hardwario.com/apps/chirpstack/chirpstack-installation/#add-chirpstack-repository)
