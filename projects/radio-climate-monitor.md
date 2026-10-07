---
slug: radio-climate-monitor
title: Radio climate monitor
---
import Image from '@theme/IdealImage';

# Radio Climate Monitor

This guide walks you through the **Radio Climate Monitor** project. At the end, you'll see a dashboard in **Node-RED** with temperature, humidity, ambient light and atmospheric pressure.

## Block Diagram
<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-climate-monitor-block-diagram.webp')} alt="Block diagram: Radio Climate Monitor Kit linked over sub-GHz radio to the Radio Dongle and Node-RED gateway stack"/>
  </div>
</div>

### Requirements <a id="requirements"></a>

* Either the [Clime Set](https://www.hardwario.store/p/clime-set) or these individual components:
  
  * 1x [Climate Module](https://www.hardwario.store/p/climate-module)
  * 1x [Core Module](https://www.hardwario.store/p/core-module)
  * 1x [Mini Battery Module](https://www.hardwario.store/p/mini-battery-module)
  * 1x [Radio Dongle](https://www.hardwario.store/p/radio-dongle)
  
* One of the following:
  
  * **HARDWARIO Playground** installed \(recommended\)
    See [**Playground Installation**](https://docs.hardwario.com/tower/desktop-programming/playground-installation/) for details.
  * **Raspberry Pi** with the **HARDWARIO Raspbian** distribution
    See [**Raspberry Pi Installation**](https://docs.hardwario.com/tower/server-raspberry-pi/) for details.
  * **HARDWARIO Toolchain** installed
    See [**Command Line Tools**](https://docs.hardwario.com/tower/command-line-tools/) for details.

## Firmware Upload

You'll upload the firmware to the **Core Module** with **HARDWARIO Playground**.

#### Step 1: Connect the **Core Module** to your computer with a Micro USB cable

#### Step 2: Start HARDWARIO Playground, select the `hardwario/twr-radio-climate-monitor` firmware on the Firmware tab and upload it to the **Core Module**

:::warning

**Flashing Core Module R1 and R2**
The older **Core Module 1** and the newer **Core Module 2** are flashed differently; see **Core Module R1 and R2 comparison** in the **Hardware section**.

:::

#### Step 3: Disconnect the Micro USB cable from the **Core Module** and the computer

:::success

Your firmware is now uploaded.

:::

## Hardware Assembly

Watch this short video for a simple step-by-step demonstration:


<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
  <iframe
    src="https://www.youtube.com/embed/tyyjO0GoyNA?si=BF__UBQizR-FK9TJ"    title="YouTube video player"
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
  />
</div>



#### Step 1: Start with the **Mini Battery Module**

:::warning

Check that there are no batteries in the **Mini Battery Module**.

:::

#### **Step 2:** Plug the **Core Module** onto the **Mini Battery Module**

#### **Step 3:** Plug the **Climate Module** onto the **Core Module**

## Playground Setup

:::danger

If you use the new **HARDWARIO Playground**, open the **Functions** tab instead of [**http://localhost:1880/**](http://localhost:1880/). Pairing now happens on the **Devices** tab, and you test communication on the **Messages** tab.

:::

#### **Step 1:** Open **Node-RED** in your web browser

[http://localhost:1880/](http://localhost:1880/)

#### Step 2: You should see an empty workspace with **Flow 1**

#### Step 3: Import the following snippet into the flow \(**Menu &gt;&gt; Import**\) and click the **Flow 1** tab

```text
[{"id":"2fc604fc.3b6abc","type":"inject","z":"dfc861b.b2a02a","name":"List all gateways","topic":"gateway/all/info/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":460,"wires":[["a2c10833.24d5d8"]]},{"id":"1e4502b8.2f63fd","type":"inject","z":"dfc861b.b2a02a","name":"Start node pairing","topic":"gateway/usb-dongle/pairing-mode/start","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":570,"y":580,"wires":[["795ff5a7.8e266c"]]},{"id":"3d844ce2.932864","type":"inject","z":"dfc861b.b2a02a","name":"Stop node pairing","topic":"gateway/usb-dongle/pairing-mode/stop","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":640,"wires":[["5967c452.c838bc"]]},{"id":"f202b253.2705b","type":"inject","z":"dfc861b.b2a02a","name":"List paired nodes","topic":"gateway/usb-dongle/nodes/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":520,"wires":[["f0aca138.0b2c3"]]},{"id":"349f02fd.890f6e","type":"inject","z":"dfc861b.b2a02a","name":"Unpair all nodes","topic":"gateway/usb-dongle/nodes/purge","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":700,"wires":[["2f1c5bb6.53d6f4"]]},{"id":"cf61d75d.4ad8f8","type":"mqtt in","z":"dfc861b.b2a02a","name":"","topic":"#","qos":"2","broker":"67b8de4a.029d3","x":530,"y":400,"wires":[["a5cb0658.f5d658"]]},{"id":"a5cb0658.f5d658","type":"debug","z":"dfc861b.b2a02a","name":"","active":true,"console":"false","complete":"false","x":790,"y":400,"wires":[]},{"id":"a2c10833.24d5d8","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":460,"wires":[]},{"id":"f0aca138.0b2c3","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":520,"wires":[]},{"id":"795ff5a7.8e266c","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":580,"wires":[]},{"id":"5967c452.c838bc","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":640,"wires":[]},{"id":"2f1c5bb6.53d6f4","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":700,"wires":[]},{"id":"67b8de4a.029d3","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"717f7c18.ba0a24","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```

It looks like this:


<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-climate-monitor-node-red-gw-controls.webp')} alt="Imported Node-RED flow with inject buttons for the gateway commands, each wired to an MQTT node"/>
  </div>
</div><br></br>

:::info

The snippet adds buttons for the gateway and radio commands, which are sent over MQTT.

:::

#### Step 4: Deploy the flow with the **Deploy** button in the top-right corner

#### Step 5: Open the **debug** tab

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-climate-monitor-node-red-gw-debug.webp')} alt="Node-RED editor with the debug tab highlighted in the right sidebar"/>
  </div>
</div><br></br>

:::info

The **debug** tab shows all MQTT messages.

:::

#### Step 6: Click the **List all gateways** button. The **debug** tab should show a response like this

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-climate-monitor-node-red-gw-list.webp')} alt="Debug tab showing the gateway info response after clicking List all gateways"/>
  </div>
</div><br></br>

:::success

You now have working **Node-RED**, **MQTT**, **HARDWARIO Radio Dongle** and **HARDWARIO Gateway**.

:::

## Radio Pairing

In this section, we'll establish a radio link between the **Radio Dongle** and the **Radio Climate Monitor**.

In **Node-RED**, follow these steps:

#### Step 1: Click the **Start node pairing** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-climate-monitor-node-red-gw-pair-start.webp')} alt="Start node pairing button highlighted, with the pairing start confirmed in the debug tab"/>
  </div>
</div>

#### Step 2: Pair the Climate Monitor

Insert the batteries into the **Radio Climate Monitor** to send the pairing request \(the red LED on the **Core Module** should also light up for about 2 seconds\).

#### Step 3: Click the **Stop node pairing** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-climate-monitor-node-red-gw-pair-stop.webp')} alt="Stop node pairing button highlighted, with the pairing stop confirmed in the debug tab"/>
  </div>
</div><br></br>

:::success

You now have a radio link between the node \(**Radio Climate Monitor**\) and the gateway \(**Radio Dongle**\).

:::

## Communication Test

In **Node-RED**, follow these steps:

#### Step 1: Switch to the **debug** tab on the right

#### Step 2: Test the connection

Breathe on the temperature sensor on the **Climate Module**. The change in temperature triggers a radio transmission.

You should then see messages like these:


<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-climate-monitor-radio-test.webp')} alt="Debug tab listing incoming MQTT messages with temperature, humidity and light readings"/>
  </div>
</div><br></br>

:::success

Radio communication is now verified.

:::

## Enclosure

If you have a suitable enclosure, you can put the assembly into it.

:::info

You'll find enclosures for TOWER kits in the [**Enclosures**](https://www.hardwario.store/enclosures) category of the HARDWARIO Store.

:::

### Related Documents

* [**Raspberry Pi Installation**](https://docs.hardwario.com/tower/server-raspberry-pi/)
* [**Command Line Tools**](https://docs.hardwario.com/tower/command-line-tools/)
* [**Grafana Visualization**](https://docs.hardwario.com/tower/platform-integrations/grafana-visualization/#example-output-for-wireless-climate-monitor-and-wireless-co2-monitor-projects)
