---
slug: radio-motion-detector
title: Radio motion detector
---
import Image from '@theme/IdealImage';

# Radio Motion Detector

This guide walks you through the **Radio Motion Detector** project. You'll work with the motion detector in **Node-RED**, and when it detects movement, the **IFTTT** service sends a push notification to your smartphone.

## Block Diagram


<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-block-diagram.webp')} alt="Block diagram: Radio Motion Detector Kit with the PIR Module linked by radio to the gateway, Node-RED and IFTTT"/>
  </div>
</div>

## Requirements

* Either the [Motion Set](https://www.hardwario.store/p/motion-set) or these individual components:

  * 1x [PIR Module](https://www.hardwario.store/p/pir-module)
  * 1x [Core Module](https://www.hardwario.store/p/core-module)
  * 1x [Mini Battery Module](https://www.hardwario.store/p/mini-battery-module)
  * 1x [Radio Dongle](https://www.hardwario.store/p/radio-dongle)

* One of the following:

  * **HARDWARIO Playground** installed \(recommended\)
    See [**Playground Installation**](https://docs.hardwario.com/tower/desktop-programming/playground-installation/) for details.
  * **Raspberry Pi** with the **HARDWARIO Raspbian** distribution
    See [**Raspberry Pi Installation**](https://docs.hardwario.com/tower/server-raspberry-pi/) for details.
  * **HARDWARIO Firmware Tool** installed
    See [**Firmware Flashing Tool**](https://docs.hardwario.com/tower/command-line-tools/firmware-tool/) for details.

## Firmware Upload

You'll upload the firmware to the **Core Module** with **HARDWARIO Playground**.

#### Step 1: Connect the **Core Module** to your computer with a Micro USB cable

#### Step 2: Flash the firmware

Start HARDWARIO Playground, select the `hardwario/twr-radio-motion-detector` firmware on the Firmware tab and upload it to the **Core Module**.

:::warning

**Flashing Core Module R1 and R2**
The older **Core Module 1** and the newer **Core Module 2** are flashed differently; see **Core Module R1 and R2 comparison** in the **Hardware section**.

:::

#### **Step 3:** Disconnect the Micro USB cable from the **Core Module** and the computer

:::success

Your firmware is now uploaded.

:::

## Hardware Assembly

Watch this short video for a simple step-by-step demonstration:

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
  <iframe
    src="https://www.youtube.com/embed/U8i0Afk3XOI?si=PnW0fsOc5Eh-PS-a"     title="YouTube video player"
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

#### **Step 3:** Plug the **PIR Module** onto the **Core Module**

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
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-node-red-gw-controls.webp')} alt="Imported Node-RED flow with inject buttons for the gateway commands, each wired to an MQTT node"/>
  </div>
</div><br></br>

:::info

The snippet adds buttons for the gateway and radio commands, which are sent over MQTT.

:::

#### Step 4: Deploy the flow with the **Deploy** button in the top-right corner

#### Step 5: Open the **debug** tab

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-node-red-gw-debug.webp')} alt="Node-RED editor with the debug tab highlighted in the right sidebar"/>
  </div>
</div><br></br>

:::info

The **debug** tab shows all MQTT messages.

:::

#### Step 6: Click the **List all gateways** button. The **debug** tab should show a response like this

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-node-red-gw-list.webp')} alt="Debug tab showing the gateway info response after clicking List all gateways"/>
  </div>
</div><br></br>

:::success

You now have working **Node-RED**, **MQTT**, **HARDWARIO Radio Dongle** and **HARDWARIO Gateway**.

:::

## Radio Pairing

In this section, we'll establish a radio link between the **Radio Dongle** and the **Radio Motion Detector**. In **Node-RED**, follow these steps:

#### Step 1: Click the **Start node pairing** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-node-red-gw-pair-start.webp')} alt="Start node pairing button highlighted, with the pairing start confirmed in the debug tab"/>
  </div>
</div>

#### Step 2: Insert the batteries into the **Radio Motion Detector** to send the pairing request (the red LED on the **Core Module** should also light up for about 2 seconds)

#### Step 3: Click the **Stop node pairing** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-node-red-gw-pair-stop.webp')} alt="Stop node pairing button highlighted, with the pairing stop confirmed in the debug tab"/>
  </div>
</div><br></br>

:::success

You now have a radio link between the node (**Radio Motion Detector**) and the gateway (**Radio Dongle**).

:::

## Communication Test

In **Node-RED**, follow these steps:

#### Step 1: Switch to the **debug** tab on the right

#### Step 2: Wave your hand in front of the **PIR Module** to trigger a radio transmission

You should then see messages like these:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-radio-test.webp')} alt="Debug tab showing PIR event-count messages increasing as motion is detected"/>
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

## Integration with IFTTT

In this section, we'll create an **Applet** in the **IFTTT** service. An **Applet** is a rule that responds to an event with an action.

#### Step 1: Open a web browser and go to [**IFTTT**](https://ifttt.com/)

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-01.webp')} alt="IFTTT homepage with the Sign in button highlighted"/>
  </div>
</div>

#### **Step 2:** Sign in to IFTTT. You can also sign up with your Google or Facebook account

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-02.webp')} alt="IFTTT Discover page after signing in, with My Applets highlighted in the menu"/>
  </div>
</div>

#### Step 3: Go to **My Applets** in the menu and click the **New Applet** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-03.webp')} alt="My Applets page with the New Applet button highlighted"/>
  </div>
</div>

#### Step 4: Click **+this** in the `if this then that` sentence

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-04.webp')} alt="New Applet editor with +this highlighted in the if this then that sentence"/>
  </div>
</div>

#### Step 5: Search for the **Webhooks** service and select it

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-05.webp')} alt="Choose a service step with Webhooks typed in the search and the Webhooks tile highlighted"/>
  </div>
</div>

#### Step 6: Click **Receive a web request**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-06.webp')} alt="Choose trigger step with the Receive a web request card highlighted"/>
  </div>
</div>

#### **Step 7:** Type `motion` in the **Event Name** field and click **Create Trigger**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-07.webp')} alt="Trigger fields with motion typed as Event Name and the Create trigger button highlighted"/>
  </div>
</div>

#### **Step 8:** Click **+that** in the `if this then that` sentence

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-08.webp')} alt="New Applet editor with +that highlighted in the if this then that sentence"/>
  </div>
</div>

#### Step 9: Search for the **Notifications** action service and select it

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-09.webp')} alt="Choose action service step with Notifications searched and the Notifications tile highlighted"/>
  </div>
</div>

#### Step 10: Click **Send a notification from the IFTTT app**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-10.webp')} alt="Choose action step with the Send a notification from the IFTTT app card highlighted"/>
  </div>
</div>

#### **Step 11:** Enter the text `The motion detected on {{OccurredAt}}` in the **Notification** field and click the **Create action** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-11.webp')} alt="Action fields with the motion notification text filled in and the Create action button highlighted"/>
  </div>
</div>

#### Step 12: Click the **Finish** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-12.webp')} alt="Review and finish step for the motion applet with the Finish button highlighted"/>
  </div>
</div>

#### Step 13: Click the **Webhooks** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-13.webp')} alt="Finished motion applet switched on, with the Webhooks icon highlighted"/>
  </div>
</div>

#### Step 14: Click the **Documentation** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-14.webp')} alt="Webhooks service page with the Documentation button highlighted"/>
  </div>
</div>

#### Step 15: Click the **event** field

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-15.webp')} alt="Webhooks documentation page showing your key, with the event placeholder in the trigger URL highlighted"/>
  </div>
</div>

#### Step 16: Enter `motion` in the **event** field and keep the window open

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-16.webp')} alt="Webhooks documentation page with motion entered in the event field of the trigger URL"/>
  </div>
</div>

#### Step 17: Install the app on your phone

Install the **IFTTT** app on your smartphone and sign in with the account you used to create the applet. When the app asks, allow push notifications.

#### Step 18: Try it out

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-17.webp')} alt="Webhooks documentation page with the Test It button highlighted"/>
  </div>
</div>

#### Step 19: A push notification should arrive on your smartphone within a few seconds

#### Step 20: Copy the URL to the clipboard; you'll need it later

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-18.webp')} alt="Webhooks documentation page with the full trigger URL for the motion event highlighted"/>
  </div>
</div><br></br>

:::success

You now have a working notification **Applet** in the **IFTTT** service.

:::

## Connect Node-RED to IFTTT

In this section, we'll link the motion event on MQTT to an HTTP request to **IFTTT**, which triggers the push notification.

#### Step 1: Switch to your **Node-RED** flow

#### Step 2: Import the following snippet into the flow (**Menu >> Import**)

```text
[{"id":"aa6e1255.ea79f","type":"mqtt in","z":"1683bd68.e7a7b3","name":"","topic":"node/motion-detector:0/pir/-/event-count","qos":"2","broker":"3db59913.baf0c6","x":580,"y":580,"wires":[["fd3ce751.8e9ba8"]]},{"id":"74e6dfc1.7c1dc","type":"http request","z":"1683bd68.e7a7b3","name":"","method":"POST","ret":"txt","url":"https://maker.ifttt.com/trigger/motion/with/key/YOUR_IFTTT_KEY","tls":"","x":910,"y":580,"wires":[[]]},{"id":"fd3ce751.8e9ba8","type":"change","z":"1683bd68.e7a7b3","name":"","rules":[{"t":"delete","p":"payload","pt":"msg"}],"action":"","property":"","from":"","to":"","reg":false,"x":710,"y":680,"wires":[["42aed05e.e145"]]},{"id":"42aed05e.e145","type":"delay","z":"1683bd68.e7a7b3","name":"","pauseType":"delay","timeout":"30","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":900,"y":680,"wires":[["74e6dfc1.7c1dc"]]},{"id":"3db59913.baf0c6","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```

It looks like this:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-node-red-ifttt-snippet.webp')} alt="Node-RED flow wiring the PIR event-count topic through change and delay nodes to an http request node"/>
  </div>
</div><br></br>

In the **http request** node, replace `YOUR_IFTTT_KEY` with the key shown on your Webhooks documentation page (step 15).


:::info

The snippet connects the MQTT topic `node/motion-detector:0/pir/-/event-count` to an HTTP request. Before the message goes to the HTTP request, we remove the `payload` parameter, because it would otherwise be used as the request body.

:::

#### Step 3: Double-click the **http request** node and enter the IFTTT URL you got in the previous section

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-node-red-ifttt-url.webp')} alt="Edit http request node dialog with the IFTTT trigger URL pasted into the highlighted URL field"/>
  </div>
</div>

#### Step 4: Save the URL with the **Done** button

#### Step 5: Deploy the flow with the **Deploy** button in the top-right corner

:::success

You should now get a push notification whenever motion is detected.

:::

### Related Documents <a id="related-documents"></a>

* [**Raspberry Pi Installation**](https://docs.hardwario.com/tower/server-raspberry-pi/)
* [**Command Line Tools**](https://docs.hardwario.com/tower/command-line-tools/)
