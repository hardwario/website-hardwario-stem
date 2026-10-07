---
slug: radio-soil-sensor
title: Radio soil sensor
---
import Image from '@theme/IdealImage';

# Radio Soil Sensor

This guide walks you through the **Radio Soil Sensor** project. You'll view, store and analyze soil moisture and temperature in **Node-RED** and in the **Grafana** visualization tool.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-soil-sensor/radio-soil-sensor-project-image.webp')} alt="Soil Sensor project: electronics in an outdoor box, the probe in a flower bed, and gauges for temperature, moisture and battery"/>
  </div>
</div>

## Video Tutorial

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
  <iframe
   src="https://www.youtube.com/embed/6kU-_ldaGOw?si=2kawboGcP9ABW9Cl" title="YouTube video player"
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
  />
</div>


## Block Diagram

<div class="container">
  <div class="row">
    <Image  img={require('./img/radio-soil-sensor/radio-soil-sensor.png')}
          style={{ backgroundColor: "#fff" }} alt="Block diagram: Soil Sensor Set linked over sub-GHz radio and Radio Dongle to MQTT, Node-RED, InfluxDB and Grafana"/>
  </div>
</div>

## Requirements

* Either the [**Soil Sensor Set**](https://www.hardwario.store/p/soil-sensor-set) or these individual components:

  * 1x [**Soil Moisture Sensor**](https://www.hardwario.store/p/soil-sensor)
  * 1x [**Sensor Module**](https://www.hardwario.store/p/sensor-module)
  * 1x [**Core Module**](https://www.hardwario.store/p/core-module)
  * 1x [**Battery Module**](https://www.hardwario.store/p/battery-module)
  * 1x [**Radio Dongle**](https://www.hardwario.store/p/radio-dongle)

* You'll need a **Raspberry Pi** with the **HARDWARIO Raspbian** distribution installed. See [**Raspberry Pi Installation**](https://docs.hardwario.com/tower/server-raspberry-pi/) for instructions.

The measured data is stored and visualized in Grafana on the [**Raspberry Pi**](https://www.hardwario.store/p/raspberry-pi-cm4108016). You can also use your computer instead; just follow [**Playground Installation**](https://docs.hardwario.com/tower/desktop-programming/playground-installation/).

## Connecting to the Raspberry Pi

You'll do all the configuration, run the services and flash the firmware on the **Raspberry Pi**. Your computer only connects to the **Raspberry Pi SSH** server and the **Grafana** web interface.

Follow the [**Raspberry Pi Login**](https://docs.hardwario.com/tower/server-raspberry-pi/login-guide) guide, which shows how to find the **Raspberry Pi IP address** on your network and connect to the **SSH server**.

## Firmware Upload

You'll upload the firmware to the **Core Module** with the **HARDWARIO Firmware Tool**: connect the module to the **Raspberry Pi** and flash the firmware from there.

Now flash the firmware to the **Core Module**.

#### Step 1: Connect the **Core Module** to the **Raspberry Pi** with a Micro USB cable

#### Step 2: Upload the firmware to the **Core Module**

:::info

If some time has passed since you installed the system, you may want to update the list of available firmware with `bcf update`.

:::

:::warning

**Flashing Core Module R1 and R2**
The older **Core Module 1** and the newer **Core Module 2** are flashed differently; see **Core Module R1 and R2 comparison** in the **Hardware section**.

:::

On the **Raspberry Pi**, flash the firmware with the **HARDWARIO Firmware Tool**:

```text
bcf flash hardwario/twr-radio-soil-sensor:latest
```

#### Step 3: Disconnect the Micro USB cable from the **Core Module** and the **Raspberry Pi**


:::success

Your firmware is now uploaded.

:::

## Hardware Assembly

#### Step 1: Start with the [**Battery Module**](https://www.hardwario.store/p/battery-module)


:::warning

Check that there are no batteries in the **Battery Module**.

:::

#### Step 2: Plug the [**Core Module**](https://www.hardwario.store/p/core-module) onto the [**Battery Module**](https://www.hardwario.store/p/battery-module)

#### Step 3: Plug the [**Sensor Module**](https://www.hardwario.store/p/sensor-module) onto the [**Core Module**](https://www.hardwario.store/p/core-module)

#### Step 4: Plug the [**Soil Moisture Sensor**](https://www.hardwario.store/p/soil-sensor) connector into the [**Sensor Module**](https://www.hardwario.store/p/sensor-module)

## Radio Pairing

In this section, we'll establish a radio link between the **Radio Dongle** and the **Radio Soil Sensor**.

In **Node-RED**, follow these steps:

#### Step 1: Click the **Start node pairing** button

:::warning

After you click **Start node pairing**, check that the **debug** tab on the right shows two messages: the command, and the response from the **Radio Dongle** with **"start"**.

:::

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-soil-sensor/radio-soil-sensor-node-red-gw-pair-start.webp')} alt="Node-RED flow with the Start node pairing inject button highlighted and the start response in the debug tab"/>
  </div>
</div>

#### Step 2: Power up the assembly

Insert the batteries into the **Radio Soil Sensor** to send the pairing request (the red LED on the **Core Module** should also light up for about 2 seconds).

The **Node-RED** debug tab shows a message with the name and firmware version of the newly paired module.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-soil-sensor/radio-soil-sensor-node-red-gw-pair-paired-mqtt-message.webp')} alt="Debug tab showing the paired soil sensor's firmware info plus first moisture and temperature messages"/>
  </div>
</div>

#### Step 3: Click the **Stop node pairing** button

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-soil-sensor/radio-soil-sensor-node-red-gw-pair-stop.webp')} alt="Node-RED flow with the Stop node pairing inject button highlighted"/>
  </div>
</div><br></br>

:::success

You now have a radio link between the node (**Radio Soil Sensor**) and the gateway (**Radio Dongle**).

:::

## Communication Test

In **Node-RED**, follow these steps:

#### Step 1: Switch to the **debug** tab on the right

#### Step 2: Test the transmission

Breathe on the temperature sensor of the **Soil Sensor**. The change in temperature triggers a radio transmission.

You should then see messages like these:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-soil-sensor/radio-soil-sensor-radio-test.webp')} alt="Debug tab with incoming soil sensor temperature and moisture MQTT messages highlighted"/>
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

## Grafana Integration

With the kit assembled, let's set up a basic integration with **Grafana**.

#### Step 1: Install dependencies

Install **Grafana** and the **InfluxDB** database on your **Raspberry Pi** as described in [**Grafana Visualization**](https://docs.hardwario.com/tower/platform-integrations/grafana-visualization/).

#### Step 2: Edit config

Add the following lines to the `/etc/bigclown/mqtt2influxdb.yml` configuration file you created in the **Grafana Visualization** guide. They add support for the new topics that the Soil Sensor sends.


:::info

We edit text in the **nano** editor. Save your changes with `Ctrl + O` and exit the editor with `Ctrl + X`.

:::

Open the mqtt2influxdb configuration in the **nano** text editor.

```text
sudo nano /etc/bigclown/mqtt2influxdb.yml
```

Append these lines to the end of the existing file:

```text
  - measurement: moisture
    topic: node/+/soil-sensor/+/moisture
    fields:
      value: $.payload
    tags:
      id: $.topic[1]
      channel: $.topic[3]

  - measurement: temperature
    topic: node/+/soil-sensor/+/temperature
    fields:
      value: $.payload
    tags:
      id: $.topic[1]
      channel: $.topic[3]
```

#### Step 3: Check that the configuration is valid. If it is not, the YAML file has a formatting error

```text
mqtt2influxdb -c /etc/bigclown/mqtt2influxdb.yml --test
```

#### Step 4: Restart the MQTT2InfluxDB service so it loads the changed configuration

```text
pm2 restart mqtt2influxdb
```

#### Step 5: Open **Grafana**, which runs on the **Raspberry Pi** on port `3000`

[http://hub.local:3000](http://hub.local:3000)

#### Step 6: Graph

At the bottom you can now see the temperature and battery voltage. What's missing is a moisture graph. Since we added `- measurement: moisture` to the configuration file, duplicate an existing graph and change its `measurement` data source to `moisture`.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-soil-sensor/radio-soil-sensor-grafana-duplicate.webp')} alt="Grafana panel menu opened on the temperature graph with More and Duplicate highlighted"/>
  </div>
</div><br></br>

Then click **Edit** on the **duplicated** graph.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-soil-sensor/radio-soil-sensor-grafana-edit.webp')} alt="Grafana panel menu on the duplicated graph with Edit highlighted"/>
  </div>
</div><br></br>

On the **Metrics** tab, change **FROM** from **temperature** to **moisture**.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-soil-sensor/radio-soil-sensor-grafana-from-moisture.webp')} alt="Grafana Metrics tab with the FROM measurement dropdown open to switch from temperature to moisture"/>
  </div>
</div>

#### Step 7: Save

Finally, click **Save** in **Grafana** so your configuration is still there the next time you open the page.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-soil-sensor/radio-soil-sensor-grafana-save.webp')} alt="Grafana dashboard with the Save button highlighted in the top toolbar"/>
  </div>
</div>

### Related Documents <a id="related-documents"></a>

* [**Raspberry Pi Installation**](https://docs.hardwario.com/tower/server-raspberry-pi/)
* [**Raspberry Pi Login**](https://docs.hardwario.com/tower/server-raspberry-pi/login-guide)
