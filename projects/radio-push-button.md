---
slug: radio-push-button
title: Radio push button
---
import Image from '@theme/IdealImage';

# Radio Push Button

This guide walks you through the **Radio Push Button** project. You'll work with the push button in **Node-RED**, and when you press it, the **IFTTT** service sends a push notification to your smartphone.

## Block Diagram

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-block-diagram.webp')} alt="Block diagram: push button kit linked over sub-GHz radio and Radio Dongle to Node-RED, which calls an IFTTT webhook"/>
  </div>
</div>

## Requirements

* Either the [Push Set](https://www.hardwario.store/p/push-set) or these individual components:

  * 1x [Button Module](https://www.hardwario.store/p/button-module)
  * 1x [Core Module](https://www.hardwario.store/p/core-module)
  * 1x [Mini Battery Module](https://www.hardwario.store/p/mini-battery-module)
  * 1x [Radio Dongle](https://www.hardwario.store/p/radio-dongle)

* One of the following:

  * **HARDWARIO Playground** installed (recommended)
    See [**Playground Installation**](https://docs.hardwario.com/tower/desktop-programming/playground-installation/) for details.
  * **Raspberry Pi** with the **HARDWARIO Raspbian** distribution
    See [**Raspberry Pi Installation**](https://docs.hardwario.com/tower/server-raspberry-pi/) for details.
  * **HARDWARIO Toolchain** installed
    See [**Command Line Tools**](https://docs.hardwario.com/tower/command-line-tools/) for details.

## Firmware Upload

You'll upload the firmware to the **Core Module** with **HARDWARIO Playground**.

#### Step 1: Connect the **Core Module** to your computer with a Micro USB cable

#### Step 2: Flash the firmware

Start HARDWARIO Playground, select the `hardwario/twr-radio-push-button` firmware on the Firmware tab and upload it to the **Core Module**.

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
    src="https://www.youtube.com/embed/OCPPKXzCBg0?si=_KXwaBvBpYjCHWzy"     title="YouTube video player"
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
  />
</div>

#### Step 1: Start with the **Mini Battery Module**

#### **Step 2:** Plug the **Core Module** onto the **Mini Battery Module**

#### **Step 3:** Plug the **Button Module** onto the **Core Module**

## Playground Setup

:::danger

If you use the new **HARDWARIO Playground**, open the **Functions** tab instead of [**http://localhost:1880/**](http://localhost:1880/). Pairing now happens on the **Devices** tab, and you test communication on the **Messages** tab.

:::

#### **Step 1:** Open **Node-RED** in your web browser

[http://localhost:1880/](http://localhost:1880/)

#### Step 2: You should see an empty workspace with **Flow 1**

#### **Step 3:** Import the following snippet into the flow (**Menu >> Import**) and click the **Flow 1** tab

```text
[{"id":"2fc604fc.3b6abc","type":"inject","z":"dfc861b.b2a02a","name":"List all gateways","topic":"gateway/all/info/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":460,"wires":[["a2c10833.24d5d8"]]},{"id":"1e4502b8.2f63fd","type":"inject","z":"dfc861b.b2a02a","name":"Start node pairing","topic":"gateway/usb-dongle/pairing-mode/start","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":570,"y":580,"wires":[["795ff5a7.8e266c"]]},{"id":"3d844ce2.932864","type":"inject","z":"dfc861b.b2a02a","name":"Stop node pairing","topic":"gateway/usb-dongle/pairing-mode/stop","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":640,"wires":[["5967c452.c838bc"]]},{"id":"f202b253.2705b","type":"inject","z":"dfc861b.b2a02a","name":"List paired nodes","topic":"gateway/usb-dongle/nodes/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":520,"wires":[["f0aca138.0b2c3"]]},{"id":"349f02fd.890f6e","type":"inject","z":"dfc861b.b2a02a","name":"Unpair all nodes","topic":"gateway/usb-dongle/nodes/purge","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":700,"wires":[["2f1c5bb6.53d6f4"]]},{"id":"cf61d75d.4ad8f8","type":"mqtt in","z":"dfc861b.b2a02a","name":"","topic":"#","qos":"2","broker":"67b8de4a.029d3","x":530,"y":400,"wires":[["a5cb0658.f5d658"]]},{"id":"a5cb0658.f5d658","type":"debug","z":"dfc861b.b2a02a","name":"","active":true,"console":"false","complete":"false","x":790,"y":400,"wires":[]},{"id":"a2c10833.24d5d8","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":460,"wires":[]},{"id":"f0aca138.0b2c3","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":520,"wires":[]},{"id":"795ff5a7.8e266c","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":580,"wires":[]},{"id":"5967c452.c838bc","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":640,"wires":[]},{"id":"2f1c5bb6.53d6f4","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":700,"wires":[]},{"id":"67b8de4a.029d3","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"717f7c18.ba0a24","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```

It looks like this:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-node-red-gw-controls.webp')} alt="Node-RED flow with inject buttons for gateway commands: list gateways, pair and unpair nodes"/>
  </div>
</div><br></br>

:::info

The snippet adds buttons for the gateway and radio commands, which are sent over MQTT.

:::

#### Step 4: Deploy the flow with the **Deploy** button in the top-right corner

#### Step 5: Open the **debug** tab

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-node-red-gw-debug.webp')} alt="Node-RED editor with the debug tab highlighted in the right sidebar"/>
  </div>
</div><br></br>

:::info

The **debug** tab shows all MQTT messages.

:::

#### Step 6: Click the **List all gateways** button. The **debug** tab should show a response like this

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-node-red-gw-list.webp')} alt="Debug tab showing the gateway response with firmware name and ID after clicking List all gateways"/>
  </div>
</div><br></br>

:::success

You now have working **Node-RED**, **MQTT**, **HARDWARIO Radio Dongle** and **HARDWARIO Gateway**.

:::

## Radio Pairing

In this section, we'll establish a radio link between the **Radio Dongle** and the **Radio Push Button**.

In **Node-RED**, follow these steps:

#### Step 1: Click the **Start node pairing** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-node-red-gw-pair-start.webp')} alt="Node-RED flow with the Start node pairing inject button highlighted"/>
  </div>
</div>

#### Step 2: Power up the assembly

Insert the batteries into the **Radio Push Button** to send the pairing request (the red LED on the **Core Module** should also light up for about 2 seconds).

#### Step 3: Click the **Stop node pairing** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-node-red-gw-pair-stop.webp')} alt="Node-RED flow with the Stop node pairing inject button highlighted"/>
  </div>
</div><br></br>

:::success

You now have a radio link between the node (**Radio Push Button**) and the gateway (**Radio Dongle**).

:::

## Communication Test

In **Node-RED**, follow these steps:

#### Step 1: Switch to the **debug** tab on the right

#### Step 2: Press the button. You should see messages with the press count

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-radio-test.webp')} alt="Debug tab listing event-count messages that increase with every button press"/>
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
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-01.webp')} alt="IFTTT homepage with the Sign in button highlighted in the top-right corner"/>
  </div>
</div>

#### Step 2: Sign in to IFTTT. You can also sign up with your Google or Facebook account

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-02.webp')} alt="IFTTT menu bar with the My Applets item highlighted"/>
  </div>
</div>

#### Step 3: Go to **My Applets** in the menu and click the **New Applet** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-03.webp')} alt="My Applets page with the New Applet button highlighted"/>
  </div>
</div>

#### Step 4: Click **+this** in the `if this then that` sentence

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-04.webp')} alt="New Applet page with +this highlighted in the if this then that sentence"/>
  </div>
</div>

#### Step 5: Search for the **Webhooks** service and select it

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-05.webp')} alt="Choose a service step with Webhooks typed in the search box and the Webhooks service highlighted"/>
  </div>
</div>

#### Step 6: Click **Receive a web request**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-06.webp')} alt="Choose trigger step with the Receive a web request trigger highlighted"/>
  </div>
</div>

#### **Step 7:** Type `button` in the **Event Name** field and click **Create Trigger**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-07.webp')} alt="Trigger fields with button typed as Event Name and the Create trigger button highlighted"/>
  </div>
</div>

#### **Step 8:** Click **+that** in the `if this then that` sentence

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-08.webp')} alt="New Applet page with +that highlighted in the if this then that sentence"/>
  </div>
</div>

#### Step 9: Search for the **Notifications** action service and select it

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-09.webp')} alt="Choose action service step with Notifications typed in the search box and the Notifications service highlighted"/>
  </div>
</div>

#### Step 10: Click **Send a notification from the IFTTT app**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-10.webp')} alt="Choose action step with Send a notification from the IFTTT app highlighted"/>
  </div>
</div>

#### **Step 11:** Enter the text `The button has been pressed on {{OccurredAt}}` in the **Notification** field and click the **Create action** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-11.webp')} alt="Notification field filled with the button-pressed message and the Create action button highlighted"/>
  </div>
</div>

#### Step 12: Click the **Finish** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-12.webp')} alt="Review and finish step with the Finish button highlighted"/>
  </div>
</div>

#### Step 13: Click the **Webhooks** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-13.webp')} alt="Finished applet page with the Webhooks icon highlighted"/>
  </div>
</div>

#### Step 14: Click the **Documentation** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-14.webp')} alt="Webhooks service page with the Documentation button highlighted"/>
  </div>
</div>

#### Step 15: Click the **event** field

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-15.webp')} alt="Webhooks documentation page with the event field in the trigger URL highlighted"/>
  </div>
</div>

#### Step 16: Enter `button` in the **event** field and keep the window open

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-16.webp')} alt="Webhooks documentation with button filled in the event field of the trigger URL"/>
  </div>
</div>

#### Step 17: Mobile app

Install the **IFTTT** app on your smartphone and sign in with the account you used to create the applet. When the app asks, allow push notifications.

#### Step 18: Click the **Test It** button in the browser window

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-17.webp')} alt="Webhooks documentation page with the Test It button highlighted"/>
  </div>
</div>

#### Step 19: A push notification should arrive on your smartphone within a few seconds

#### Step 20: Copy the URL to the clipboard; you'll need it later

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-18.webp')} alt="Webhooks trigger URL highlighted for copying to the clipboard"/>
  </div>
</div><br></br>

:::success

You now have a working notification **Applet** in the **IFTTT** service.

:::

## Connect Node-RED to IFTTT

In this section, we'll link the button event on MQTT to an HTTP request to **IFTTT**, which triggers the push notification.

#### Step 1: Switch to your **Node-RED** flow

#### Step 2: Import the following snippet into the flow (**Menu >> Import**)

```text
[{"id":"e507a379.e9d1d","type":"mqtt in","z":"dfc861b.b2a02a","name":"","topic":"node/push-button:0/push-button/-/event-count","qos":"2","broker":"b9592cd0.2b74f","x":660,"y":760,"wires":[["5d4d5593.80242c"]]},{"id":"62133f2.84223c","type":"http request","z":"dfc861b.b2a02a","name":"","method":"POST","ret":"txt","url":"","tls":"","x":1010,"y":760,"wires":[[]]},{"id":"5d4d5593.80242c","type":"change","z":"dfc861b.b2a02a","name":"","rules":[{"t":"delete","p":"payload","pt":"msg"}],"action":"","property":"","from":"","to":"","reg":false,"x":890,"y":860,"wires":[["62133f2.84223c"]]},{"id":"b9592cd0.2b74f","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```

It looks like this:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-node-red-ifttt-snippet.webp')} alt="Node-RED flow with the push-button event-count MQTT node wired through delete msg.payload to an http request node"/>
  </div>
</div><br></br>

:::info

The snippet connects the MQTT topic `node/push-button:0/push-button/-/event-count` to an HTTP request. Before the message goes to the HTTP request, we remove the `payload` parameter, because it would otherwise be used as the request body.

:::

#### Step 3: Double-click the **http request** node and enter the IFTTT URL you got in the previous section

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-node-red-ifttt-url.webp')} alt="Edit http request node dialog with the IFTTT webhook URL entered in the URL field"/>
  </div>
</div>

#### Step 4: Save the URL with the **Done** button

#### Step 5: Deploy the flow with the **Deploy** button in the top-right corner

:::success

You should now get a push notification whenever you press the button.

:::

## Related Documents

* [**Raspberry Pi Installation**](https://docs.hardwario.com/tower/server-raspberry-pi/)
* [**Command Line Tools**](https://docs.hardwario.com/tower/command-line-tools/)
