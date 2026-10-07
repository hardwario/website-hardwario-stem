---
slug: radio-smart-led-strip
title: Radio smart LED strip
---
import Image from '@theme/IdealImage';

# Radio Smart LED Strip

This guide walks you through the **Radio Smart LED Strip** project. You'll control the LED strip from **Node-RED**, and the **16 A** relay lets you switch an appliance as well.

## Block Diagram

<div class="container">
  <div class="row">
    <Image  img={require('./img/radio-smart-led-strip/radio-power-controller.png')}
          style={{ backgroundColor: "#fff" }} alt="Block diagram: Power Controller Set driving an LED strip and a 230V appliance, linked by radio to Node-RED and Blynk"/>
  </div>
</div>

### Requirements <a id="requirements"></a>

* Either the [Control Set](https://www.hardwario.store/p/control-set) or these individual components:

  * 1x [Cover Module](https://www.hardwario.store/p/cover-module)
  * 1x [Core Module](https://www.hardwario.store/p/core-module)
  * 1x [Power Module](https://www.hardwario.store/p/power-module)
  * 1x AC/DC adapter 5 V/4 A \(or a higher current rating\)
  * 1x 3D-printed enclosure BCE301

* Other components:
  * 1x [Radio Dongle](https://www.hardwario.store/p/radio-dongle) \(not included in the kit\)
  * 1x [RGB or RGBW digital LED strip](https://www.hardwario.store/led-strips) \(not included in the kit\)
  * [Micro USB cable](https://www.hardwario.store/p/usb2-0-cable-am-b) \(not included in the kit\)

* One of the following:

  * **HARDWARIO Playground** installed \(recommended\)
    See [**Playground Installation**](https://docs.hardwario.com/tower/desktop-programming/playground-installation/) for details.
  * **Raspberry Pi** with the **HARDWARIO Raspbian** distribution
    See [**Raspberry Pi Installation**](https://docs.hardwario.com/tower/server-raspberry-pi/) for details.
  * **HARDWARIO Firmware Tool** installed
    See [**Firmware Flashing Tool**](https://docs.hardwario.com/tower/command-line-tools/firmware-tool/) for details.

### Firmware Upload <a id="firmware-upload"></a>

You'll upload the firmware to the **Core Module** with **HARDWARIO Playground**.

#### Step 1: Connect the **Core Module** to your computer with a Micro USB cable

#### Step 2: Flash the firmware

Start HARDWARIO Playground, select the `hardwario/twr-radio-power-controller-` firmware for your strip on the Firmware tab and upload it to the **Core Module**:

If your LED strip is **144 LEDs RGBW**:

```text
hardwario/twr-radio-power-controller-rgbw144
```

If your LED strip is **150 LEDs RGB**:

```text
hardwario/twr-radio-power-controller-rgb150
```

If your LED strip is **72 LEDs RGBW**:

```text
hardwario/twr-radio-power-controller-rgbw72
```

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
   src="https://www.youtube.com/embed/idxAoc2q6O0?si=swz-oTJNNCQ7wvX6"    title="YouTube video player"
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
  />
</div>


#### Step 1: Start with the **Power Module**

:::warning

Check that the power adapter is not plugged into the **Power Module**.

:::

#### **Step 2:** Plug the **Core Module** onto the **Power Module**

#### **Step 3:** Plug the **Cover Module** onto the **Core Module**

#### **Step 4:** Put the assembled modules into the BCE301 enclosure and secure it with O-rings


<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip-project-thermostat-relay-bc.webp')} alt="Assembled Power Controller modules in the red BCE301 enclosure, shown open and closed with connectors on the side"/>
  </div>
</div>

#### Step 5: Connect the LED strip to the connector on the right side

#### Step 6: Plug in the 5 V DC power jack

## Playground Setup

:::danger

If you use the new **HARDWARIO Playground**, open the **Functions** tab instead of [**http://localhost:1880/**](http://localhost:1880/). Pairing now happens on the **Devices** tab, and you test communication on the **Messages** tab.

:::

#### Step 1: Open **Node-RED** in your web browser

[http://localhost:1880/](http://localhost:1880/)

#### Step 2: You should see an empty workspace with **Flow 1**

#### **Step 3:** Import the following snippet into the flow \(**Menu &gt;&gt; Import &gt;&gt; Clipboard**\) and click the **Flow 1** tab, then deploy

```text
[{"id":"2fc604fc.3b6abc","type":"inject","z":"dfc861b.b2a02a","name":"List all gateways","topic":"gateway/all/info/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":460,"wires":[["a2c10833.24d5d8"]]},{"id":"1e4502b8.2f63fd","type":"inject","z":"dfc861b.b2a02a","name":"Start node pairing","topic":"gateway/usb-dongle/pairing-mode/start","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":570,"y":580,"wires":[["795ff5a7.8e266c"]]},{"id":"3d844ce2.932864","type":"inject","z":"dfc861b.b2a02a","name":"Stop node pairing","topic":"gateway/usb-dongle/pairing-mode/stop","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":640,"wires":[["5967c452.c838bc"]]},{"id":"f202b253.2705b","type":"inject","z":"dfc861b.b2a02a","name":"List paired nodes","topic":"gateway/usb-dongle/nodes/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":520,"wires":[["f0aca138.0b2c3"]]},{"id":"349f02fd.890f6e","type":"inject","z":"dfc861b.b2a02a","name":"Unpair all nodes","topic":"gateway/usb-dongle/nodes/purge","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":700,"wires":[["2f1c5bb6.53d6f4"]]},{"id":"cf61d75d.4ad8f8","type":"mqtt in","z":"dfc861b.b2a02a","name":"","topic":"#","qos":"2","broker":"67b8de4a.029d3","x":530,"y":400,"wires":[["a5cb0658.f5d658"]]},{"id":"a5cb0658.f5d658","type":"debug","z":"dfc861b.b2a02a","name":"","active":true,"console":"false","complete":"false","x":790,"y":400,"wires":[]},{"id":"a2c10833.24d5d8","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":460,"wires":[]},{"id":"f0aca138.0b2c3","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":520,"wires":[]},{"id":"795ff5a7.8e266c","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":580,"wires":[]},{"id":"5967c452.c838bc","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":640,"wires":[]},{"id":"2f1c5bb6.53d6f4","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":700,"wires":[]},{"id":"67b8de4a.029d3","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"717f7c18.ba0a24","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```

It looks like this:

:::info

The snippet adds buttons for the gateway and radio commands, which are sent over MQTT.

:::

#### Step 4: Deploy the flow with the **Deploy** button in the top-right corner

#### Step 5: Open the **debug** tab

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip-node-red-gw-debug.webp')} alt="Node-RED editor with the debug tab highlighted in the right sidebar"/>
  </div>
</div><br></br>

:::info

The **debug** tab shows all MQTT messages.

:::

#### Step 6: Click the **List all gateways** button. The **debug** tab should show a response like this

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip-node-red-gw-list.webp')} alt="Debug tab showing the gateway response with firmware name and ID after clicking List all gateways"/>
  </div>
</div><br></br>

:::success

You now have working **Node-RED**, **MQTT**, **HARDWARIO Radio Dongle** and **HARDWARIO Gateway**.

:::

## Radio Pairing

In this section, we'll establish a radio link between the **Radio Dongle** and the **Radio Smart LED Strip**.

In **Node-RED**, follow these steps:

#### Step 1: Click the **Start node pairing** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip-node-red-gw-pair-start.webp')} alt="Node-RED flow with the Start node pairing inject button highlighted"/>
  </div>
</div>

#### Step 2: Plug the power adapter into the **Radio Power Controller** to send the pairing request \(the red LED on the **Core Module** should also light up for about 2 seconds\)

#### Step 3: Click the **Stop node pairing** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip-node-red-gw-pair-stop.webp')} alt="Node-RED flow with the Stop node pairing inject button highlighted"/>
  </div>
</div><br></br>

:::success

You now have a radio link between the node \(**Radio Smart LED Strip**\) and the gateway \(**Radio Dongle**\).

:::

## Communication Test

In **Node-RED**, follow these steps:

#### Step 1: Switch to the **debug** tab on the right

#### Step 2: Import the following snippet into the flow \(**Menu &gt;&gt; Import**\) and click the **Flow 1** tab

```text
[{"id":"c81deb91.e6df28","type":"inject","z":"6115d89b.b435c8","name":"led true","topic":"node/{id}/led/-/state/set","payload":"true","payloadType":"bool","repeat":"","crontab":"","once":false,"onceDelay":"","x":150,"y":40,"wires":[["fc940043.2c94c"]]},{"id":"e865057.ad650f8","type":"inject","z":"6115d89b.b435c8","name":"led false","topic":"node/{id}/led/-/state/set","payload":"false","payloadType":"bool","repeat":"","crontab":"","once":false,"onceDelay":"","x":160,"y":80,"wires":[["fc940043.2c94c"]]},{"id":"f4eda4ad.e61008","type":"inject","z":"6115d89b.b435c8","name":"relay true","topic":"node/{id}/relay/-/state/set","payload":"true","payloadType":"bool","repeat":"","crontab":"","once":false,"onceDelay":"","x":160,"y":180,"wires":[["fc940043.2c94c"]]},{"id":"d068e0ba.850d9","type":"inject","z":"6115d89b.b435c8","name":"relay false","topic":"node/{id}/relay/-/state/set","payload":"false","payloadType":"bool","repeat":"","crontab":"","once":false,"onceDelay":"","x":160,"y":220,"wires":[["fc940043.2c94c"]]},{"id":"4b02e13b.874a7","type":"inject","z":"6115d89b.b435c8","name":"led get","topic":"node/{id}/led/-/state/get","payload":"null","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":"","x":150,"y":120,"wires":[["fc940043.2c94c"]]},{"id":"b8aadc82.6fb1a","type":"inject","z":"6115d89b.b435c8","name":"relay get","topic":"node/{id}/relay/-/state/get","payload":"null","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":"","x":160,"y":260,"wires":[["fc940043.2c94c"]]},{"id":"39fb65a3.c426ea","type":"inject","z":"6115d89b.b435c8","name":"led-strip set color #ff0000","topic":"node/{id}/led-strip/-/color/set","payload":"\"#ff0000\"","payloadType":"str","repeat":"","crontab":"","once":false,"onceDelay":"","x":210,"y":320,"wires":[["fc940043.2c94c"]]},{"id":"c820ce88.576dd","type":"inject","z":"6115d89b.b435c8","name":"led-strip set color #008000","topic":"node/{id}/led-strip/-/color/set","payload":"\"#008000\"","payloadType":"str","repeat":"","crontab":"","once":false,"onceDelay":"","x":210,"y":360,"wires":[["fc940043.2c94c"]]},{"id":"edcffa41.db6bf8","type":"inject","z":"6115d89b.b435c8","name":"led-strip compound","topic":"node/{id}/led-strip/-/compound/set","payload":"[20, \"#ff0000\", 20, \"#ff7f00\", 20, \"#ffff00\", 20, \"#00ff00\", 20, \"#0000ff\", 20, \"#960082\", 24, \"#D500ff\"]","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":"","x":190,"y":560,"wires":[["fc940043.2c94c"]]},{"id":"f145c1a6.00731","type":"inject","z":"6115d89b.b435c8","name":"led-strip effect test","topic":"node/{id}/led-strip/-/effect/set","payload":"{\"type\":\"test\"}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":"","x":190,"y":600,"wires":[["fc940043.2c94c"]]},{"id":"94faa725.2a6638","type":"inject","z":"6115d89b.b435c8","name":"led-strip effect rainbow","topic":"node/{id}/led-strip/-/effect/set","payload":"{\"type\":\"rainbow\", \"wait\":50}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":"","x":200,"y":640,"wires":[["fc940043.2c94c"]]},{"id":"50812ed8.45f09","type":"inject","z":"6115d89b.b435c8","name":"led-strip effect rainbow-cycle","topic":"node/{id}/led-strip/-/effect/set","payload":"{\"type\":\"rainbow-cycle\", \"wait\":50}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":"","x":220,"y":680,"wires":[["fc940043.2c94c"]]},{"id":"1c45c443.698d6c","type":"inject","z":"6115d89b.b435c8","name":"led-strip effect theater-chase-rainbow","topic":"node/{id}/led-strip/-/effect/set","payload":"{\"type\":\"theater-chase-rainbow\", \"wait\":50}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":"","x":250,"y":720,"wires":[["fc940043.2c94c"]]},{"id":"695dee35.ff264","type":"inject","z":"6115d89b.b435c8","name":"led-strip set brightness 50%","topic":"node/{id}/led-strip/-/brightness/set","payload":"50","payloadType":"str","repeat":"","crontab":"","once":false,"onceDelay":"","x":220,"y":460,"wires":[["fc940043.2c94c"]]},{"id":"f11b54bb.3fd3f8","type":"inject","z":"6115d89b.b435c8","name":"led-strip set brightness 100%","topic":"node/{id}/led-strip/-/brightness/set","payload":"100","payloadType":"str","repeat":"","crontab":"","once":false,"onceDelay":"","x":220,"y":500,"wires":[["fc940043.2c94c"]]},{"id":"efb0acf7.7808c","type":"inject","z":"6115d89b.b435c8","name":"led-strip effect color-wipe blue","topic":"node/{id}/led-strip/-/effect/set","payload":"{\"type\":\"color-wipe\", \"wait\":50, \"color\": \"#0000ff\"}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":"","x":220,"y":760,"wires":[["fc940043.2c94c"]]},{"id":"c2d7e432.c76cc8","type":"inject","z":"6115d89b.b435c8","name":"led-strip set color #000000(00)","topic":"node/{id}/led-strip/-/color/set","payload":"\"#000000(00)\"","payloadType":"str","repeat":"","crontab":"","once":false,"onceDelay":"","x":220,"y":400,"wires":[["fc940043.2c94c"]]},{"id":"e4691220.e3747","type":"mqtt out","z":"6115d89b.b435c8","name":"","topic":"","qos":"","retain":"","broker":"a6621c71.92f09","x":890,"y":400,"wires":[]},{"id":"fc940043.2c94c","type":"change","z":"6115d89b.b435c8","name":"set node id","rules":[{"t":"change","p":"topic","pt":"msg","from":"{id}","fromt":"str","to":"power-controller:0","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":710,"y":400,"wires":[["e4691220.e3747"]]},{"id":"fcca537f.99cac","type":"inject","z":"6115d89b.b435c8","name":"led-strip effect stroboscope blue","topic":"node/{id}/led-strip/-/effect/set","payload":"{\"type\":\"stroboscope\", \"wait\":50, \"color\":\"#0000ff\"}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":"","x":230,"y":800,"wires":[["fc940043.2c94c"]]},{"id":"23fe88e4.4dc058","type":"inject","z":"6115d89b.b435c8","name":"led-strip effect icicle red","topic":"node/{id}/led-strip/-/effect/set","payload":"{\"type\":\"icicle\", \"wait\":50, \"color\":\"#ff0000\"}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":"","x":200,"y":840,"wires":[["fc940043.2c94c"]]},{"id":"811a0f5b.8f1ee","type":"inject","z":"6115d89b.b435c8","name":"led-strip effect pulse-color red","topic":"node/{id}/led-strip/-/effect/set","payload":"{\"type\":\"pulse-color\", \"wait\":200, \"color\":\"#ff0000\"}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":"","x":220,"y":880,"wires":[["fc940043.2c94c"]]},{"id":"a6621c71.92f09","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","willTopic":"","willQos":"0","willPayload":""}]
```

#### Step 3: Edit the **set node id** node and change "Replace with" to your node ID, for example `kit-power-controller:0` \(click **List paired nodes** to find your node ID\)

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip-set-node-id.webp')} alt="Edit change node dialog with the Replace with field set to power-controller:0"/>
  </div>
</div>

#### Step 4: Click **led-strip set color \#ff0000**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip-radio-test.webp')} alt="Node-RED flow of LED strip commands with the led-strip set color #ff0000 inject button highlighted"/>
  </div>
</div>

### Related Documents <a id="related-documents"></a>

* [**Raspberry Pi Installation**](https://docs.hardwario.com/tower/server-raspberry-pi/)
* [**Command Line Tools**](https://docs.hardwario.com/tower/command-line-tools/)
