---
slug: radio-flood-detector
title: Bezdrátový záplavový detektor
---
import Image from '@theme/IdealImage';

# Bezdrátový záplavový detektor

Tento dokument vás provede projektem **bezdrátového záplavového detektoru**. Budete moci komunikovat se svým detektorem v prostředí **Node-RED** a spouštět službu push notifikací **IFTTT** při detekci úniku vody. Na svůj chytrý telefon obdržíte upozornění formou push notifikace.

## Blokové schéma

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/projects-radio-flood-detector-block-diagram.webp')} alt="Blokové schéma: sada Radio Flood Detector se sondou LD-81 propojená rádiem s branou, Node-RED a IFTTT"/>
  </div>
</div>

## Požadavky

* Buď sada **HARDWARIO Radio Flood Detector Kit**, nebo jednotlivé komponenty:
  * 1x **HARDWARIO LD-81**
  * 1x **HARDWARIO Sensor Module**
  * 1x **HARDWARIO Core Module**
  * 1x **HARDWARIO Mini Battery Module**
  * 1x **HARDWARIO Radio Dongle**

* Jedna z následujících možností:
* 
  * Nainstalovaný **HARDWARIO Playground** \(doporučeno\)

    Více informací naleznete v dokumentu [**Quick Start Guide**](https://docs.hardwario.com/tower/firmware-development/firmware-quick-start/).

  * **Raspberry Pi** a distribucí **HARDWARIO Raspbian**

    Více informací naleznete v dokumentu [**Raspberry Pi Installation**](https://docs.hardwario.com/tower/server-raspberry-pi/).

  * Nainstalovyný **HARDWARIO Firmware Tool**

    Více informací naleznete v dokumentu [**Toolchain Setup**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain).

## Nahrání firmwaru

V tomto postupu použijeme **HARDWARIO Playground** k nahrání firmwaru do **Core Modulu**.

### Step 1: Connect the Micro USB cable to the **Core Module** and your computer

### Step 2: Flash firmware

Run the HARDWARIO Playground. In the Firmware tab choose and upload the `bcf-radio-flood-detector` firmware to the **Core Module**:

:::warning

**Flashing Core Module R1 & R2**
For differences of flashing older **Core Module 1** and newer **Core Module 2** please read **Core Module R1 and R2 comparison** in the **Hardware section**

:::

### Step 3: Remove the Micro USB cable from the **Core Module** and your computer

:::success

At this point your firmware is :successfully uploaded.

:::

## Hardware Assembling



Step 1: Start with the **Mini Battery Module**

### Step 2: Plug the **Core Module** on top of the **Mini Battery Module**

:::danger

If you are using the new **HARDWARIO Playground**, then use the **Functions** tab instead of using [**http://localhost:1880/**](http://localhost:1880/). Also the pairing process is now done in **Devices** tab. For communication test use the **Messages** tab.

:::

### Step 1: Open **Node-RED** in your web browser

[http://localhost:1880/](http://localhost:1880/)

### Step 2: You should see the empty workspace with **Flow 1**

### **Step 3:** Insert the following snippet in the flow \(using **Menu &gt;&gt; Import**\) and click in **Flow 1** tab:

```text
[{"id":"2fc604fc.3b6abc","type":"inject","z":"dfc861b.b2a02a","name":"List all gateways","topic":"gateway/all/info/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":460,"wires":[["a2c10833.24d5d8"]]},{"id":"1e4502b8.2f63fd","type":"inject","z":"dfc861b.b2a02a","name":"Start node pairing","topic":"gateway/usb-dongle/pairing-mode/start","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":570,"y":580,"wires":[["795ff5a7.8e266c"]]},{"id":"3d844ce2.932864","type":"inject","z":"dfc861b.b2a02a","name":"Stop node pairing","topic":"gateway/usb-dongle/pairing-mode/stop","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":640,"wires":[["5967c452.c838bc"]]},{"id":"f202b253.2705b","type":"inject","z":"dfc861b.b2a02a","name":"List paired nodes","topic":"gateway/usb-dongle/nodes/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":520,"wires":[["f0aca138.0b2c3"]]},{"id":"349f02fd.890f6e","type":"inject","z":"dfc861b.b2a02a","name":"Unpair all nodes","topic":"gateway/usb-dongle/nodes/purge","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":700,"wires":[["2f1c5bb6.53d6f4"]]},{"id":"cf61d75d.4ad8f8","type":"mqtt in","z":"dfc861b.b2a02a","name":"","topic":"#","qos":"2","broker":"67b8de4a.029d3","x":530,"y":400,"wires":[["a5cb0658.f5d658"]]},{"id":"a5cb0658.f5d658","type":"debug","z":"dfc861b.b2a02a","name":"","active":true,"console":"false","complete":"false","x":790,"y":400,"wires":[]},{"id":"a2c10833.24d5d8","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":460,"wires":[]},{"id":"f0aca138.0b2c3","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":520,"wires":[]},{"id":"795ff5a7.8e266c","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":580,"wires":[]},{"id":"5967c452.c838bc","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":640,"wires":[]},{"id":"2f1c5bb6.53d6f4","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":700,"wires":[]},{"id":"67b8de4a.029d3","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"717f7c18.ba0a24","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```
It will look like this:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-node-red-gw-controls.webp')} alt="Importovaný flow v Node-RED s tlačítky pro příkazy brány, každé napojené na uzel MQTT"/>
  </div>
</div>

:::info

This snippet provides control buttons for gateway/radio commands. These commands are sent over the MQTT protocol.

:::

### Step 4: Deploy the flow using the **Deploy** button in the top-right corner

### Step 5: Open the **debug** tab:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-node-red-gw-debug.webp')} alt="Editor Node-RED se zvýrazněnou záložkou debug v pravém panelu"/>
  </div>
</div>

:::info

In the **debug** tab, you will be able to see all the MQTT messages.

:::

### Step 6: Click on the **List all gateways** button. You should see a response like this in the **debug** tab

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-node-red-gw-list.webp')} alt="Záložka debug s odpovědí s informacemi o bráně po kliknutí na List all gateways"/>
  </div>
</div>

:::success

At this point, you've got working **Node-RED**, **MQTT**, **HARDWARIO Radio Dongle** and **HARDWARIO Gateway**.

:::

## Radio Pairing

In this section, we will create a radio link between the **Radio Dongle** and the **Radio Flood Detector**.

Follow these steps in **Node-RED**:

### Step 1: Click on the **Start node pairing** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-node-red-gw-pair-start.webp')} alt="Zvýrazněné tlačítko Start node pairing a potvrzení zahájení párování v záložce debug"/>
  </div>
</div>

### Step 2: Insert the batteries into the **Radio Flood Detector** to send the pairing request (you should also see the red LED on the **Core Module** to be on for about 2 seconds).

### Step 3: Click on the **Stop node pairing** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-node-red-gw-pair-stop.webp')} alt="Zvýrazněné tlačítko Stop node pairing a potvrzení ukončení párování v záložce debug"/>
  </div>
</div>

:::success

At this point, you've got established a radio link between the node (**Radio Flood Detector**) and the gateway (**Radio Dongle**).

:::

## Communication Test

Follow these steps in **Node-RED**:

### Step 1: Switch to **debug** tab on the right

### Step 2: Put the **LD-81** water leakage sensor into the glass of water to trigger a radio transmission

You should then see similar messages:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-radio-test.webp')} alt="Záložka debug se zprávami alarmu detektoru zaplavení přepínajícími mezi true a false"/>
  </div>
</div>

:::success

At this point, you've got verified radio communication.

:::

## Enclosure

Optionally put the assembly into the appropriate enclosure, if you have one.

:::info

You can find more information about the enclosures in the document [**Enclosures**](https://docs.hardwario.com/chester/hardware-description/enclosures/).

:::

## Integration with IFTTT

In this section, we will create an **Applet** in the **IFTTT** service. The **Applet** is a sort of event-trigger mechanism.

### Step 1: Open the web-browser and go to [**IFTTT**](https://ifttt.com/):

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-01.webp')} alt="Úvodní stránka IFTTT se zvýrazněným tlačítkem Sign in"/>
  </div>
</div>

### Step 2: Log in to IFTTT service. You can sign up using your Google or Facebook identity

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-02.webp')} alt="Stránka Discover na IFTTT po přihlášení se zvýrazněnou položkou My Applets v menu"/>
  </div>
</div>

### Step 3: Go to **My Applets** in the menu and click on the **New Applet** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-03.webp')} alt="Stránka My Applets se zvýrazněným tlačítkem New Applet"/>
  </div>
</div>

### Step 4: Click on **+this** in the `if this then that` sentence

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-04.webp')} alt="Editor nového appletu se zvýrazněným +this ve větě if this then that"/>
  </div>
</div>

### Step 5: Find a service with the name **Webhooks** and select it

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-05.webp')} alt="Krok Choose a service s vyhledaným Webhooks a zvýrazněnou dlaždicí Webhooks"/>
  </div>
</div>

### Step 6: Click on **Receive a web request**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-06.webp')} alt="Krok Choose trigger se zvýrazněnou kartou Receive a web request"/>
  </div>
</div>

### **Step 7:** Type `flood` in the **Event Name** field and click on **Create Trigger**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-07.webp')} alt="Pole triggeru s názvem události flood a zvýrazněným tlačítkem Create trigger"/>
  </div>
</div>

### **Step 8:** Click on **+that** in the `if this then that` sentence

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-08.webp')} alt="Editor nového appletu se zvýrazněným +that ve větě if this then that"/>
  </div>
</div>

### Step 9: Find action service with the name **Notifications** and select it

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-09.webp')} alt="Krok Choose action service s vyhledaným Notifications a zvýrazněnou dlaždicí Notifications"/>
  </div>
</div>

### Step 10: Click on **Send a notification from the IFTTT app**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-10.webp')} alt="Krok Choose action se zvýrazněnou kartou Send a notification from the IFTTT app"/>
  </div>
</div>

### **Step 11:** Edit the **Notification** field and insert the text `The flood detector has been flooded on {{OccurredAt}}` and push the **Create action** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-11.webp')} alt="Pole akce s vyplněným textem oznámení o zaplavení a zvýrazněným tlačítkem Create action"/>
  </div>
</div>

### Step 12: Click on the **Finish** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-12.webp')} alt="Krok Review and finish appletu flood se zvýrazněným tlačítkem Finish"/>
  </div>
</div>

### Step 13: Click on the **Webhooks** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-13.webp')} alt="Dokončený a zapnutý applet flood se zvýrazněnou ikonou Webhooks"/>
  </div>
</div>

### Step 14: Click on the **Documentation** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-14.webp')} alt="Stránka služby Webhooks se zvýrazněným tlačítkem Documentation"/>
  </div>
</div>

### Step 15: Click on the **event** field

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-15.webp')} alt="Stránka dokumentace Webhooks s vaším klíčem a zvýrazněným polem event v adrese triggeru"/>
  </div>
</div>

### Step 16: Insert the name `flood` in the **event** field and keep the window open

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-16.webp')} alt="Stránka dokumentace Webhooks s vyplněným flood v poli event adresy triggeru"/>
  </div>
</div>

### Step 17: Install the **IFTTT** app on your smart phone and sign in using the same account as you just used to create the applet. Allow the app to use the push notifications when asked

### Step 18: Click on the **Test It** button in the web-browser window

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-17.webp')} alt="Stránka dokumentace Webhooks se zvýrazněným tlačítkem Test It"/>
  </div>
</div>

### Step 19: You should receive the push notification on your smart phone within a few seconds

### Step 20: Copy this key to the clipboard for later use

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-18.webp')} alt="Stránka dokumentace Webhooks se zvýrazněným osobním klíčem ke zkopírování"/>
  </div>
</div>

:::success

At this point, you've got working notification **Applet** in the **IFTTT** service.

:::

## Connect IFTTT in Node-RED

In this section, we will create a link between the button event on MQTT and HTTP request to **IFTTT** which will trigger the push notification.

### Step 1: Switch to your **Node-RED** flow

### Step 2: Insert the following snippet in the flow (using **Menu >> Import**):

```text
[{"id":"c6ce743.f65db88","type":"mqtt in","z":"d5a82106.8d3fa","name":"","topic":"node/flood-detector:0/flood-detector/a/alarm","qos":"2","broker":"29fba84a.b2af58","x":240,"y":140,"wires":[["7d9c308c.edf04"]]},{"id":"7d9c308c.edf04","type":"switch","z":"d5a82106.8d3fa","name":"","property":"payload","propertyType":"msg","rules":[{"t":"eq","v":"true","vt":"str"}],"checkall":"true","repair":false,"outputs":1,"x":510,"y":140,"wires":[["e2287fd0.90124"]]},{"id":"e2287fd0.90124","type":"ifttt out","z":"d5a82106.8d3fa","eventName":"flood","key":"40c1e6be.8cb228","x":670,"y":140,"wires":[]},{"id":"29fba84a.b2af58","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","willTopic":"","willQos":"0","willPayload":""},{"id":"40c1e6be.8cb228","type":"ifttt-key","z":""}]
```

It will look like this:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-node-red-ifttt-snippet.webp')} alt="Flow v Node-RED propojující MQTT téma alarmu přes uzel switch s uzlem IFTTT flood"/>
  </div>
</div>

:::info

This snippet creates a connection between the MQTT topic `node/flood-detector:0/flood-detector/a/alarm` and IFTTT service. Before passing the message to the IFTTT we have to filter only `true` events.

:::

### Step 3: Double click on **IFTTT node** node and edit the IFTTT key obtained in the previous section

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-node-red-ifttt-key.webp')} alt="Dialog úpravy uzlu ifttt out s polem Key a ikonou tužky pro vložení klíče IFTTT"/>
  </div>
</div>

### Step 4: Save the settings by clicking on the **Done** button

### Step 5: Deploy the flow using the **Deploy** button in the top-right corner

:::success

At this point, you should get a push notification when you connect flood sensor with moist fingers or put flood sensor contacts to the water.

:::

### Related Documents <a id="related-documents"></a>

* [**Raspberry Pi Installation**](https://docs.hardwario.com/tower/server-raspberry-pi/)
* [**Toolchain Setup**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain)
* [**Toolchain Guide**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain)

