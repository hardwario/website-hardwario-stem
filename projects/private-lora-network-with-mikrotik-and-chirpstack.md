---
slug: private-lora-network-with-mikrotik-and-chirpstack
title: Private LoRa network
---
import Image from '@theme/IdealImage';

# Private LoRa Network with MikroTik and ChirpStack

This tutorial explains how to set up a private LoRaWAN network with the MikroTik wAP LR8 kit and ChirpStack running on any Linux computer.

## MikroTik wAP LR8 Kit Quick Start

Connect to the MikroTik following the official [wAP LR8 kit quick guide](https://help.mikrotik.com/docs/spaces/QG/pages/15303333/Quick+Guide+G17-a+-+wAP+LR8+kit). The first connection works over Wi-Fi only; we'll change that later.

:::info

If you ever need to reset the MikroTik to factory settings, [follow these instructions](https://help.mikrotik.com/docs/spaces/ROS/pages/24805498/RouterOS+configuration+reset). Watch the right green LED: the Wi-Fi LED under the power jack.

There is another green LED inside the unit, on the LoRa card, which blinks after startup and can be confusing. Ignore that one.

:::

## Connect over Ethernet and Disable WLAN

This step is optional. By default, the firewall does not let you reach the RouterOS configuration over Ethernet. To allow it, disable all firewall rules: go to IP &gt; Firewall and click the "D" button next to each rule.

Ethernet should now work and get an address from DHCP, so you can connect to RouterOS over Ethernet.

You can also turn WLAN off completely: in Interfaces, disable "wlan1".

## Enable LoRa

LoRa is disabled by default. Enable it in the LoRa menu with the "E" button. The Traffic tab should then show incoming packets. They are encrypted, so only the Dev Addr is readable, but at least you can see that the hardware works.

## Install ChirpStack

In this part you install **ChirpStack Gateway Bridge, ChirpStack Network Server, ChirpStack Application Server** on your Linux server. Your MikroTik wAP LR8 then connects to this server and forwards the LoRa packets to it.

On Debian, follow the [Debian/Ubuntu installation guide](https://www.chirpstack.io/guides/debian-ubuntu/); otherwise, see the [generic installation page](https://www.chirpstack.io/docs/chirpstack/downloads.html).

:::info

The Debian/Ubuntu installation guide includes a script that creates the PostgreSQL tables. You can copy the whole script and paste it into the PostgreSQL console. Once the tables are created, press Enter: this runs the last command, which exits the console.

:::

## Connect to the Network Server

:::info

Don't forget to open port 8080 in your server firewall for the ChirpStack web interface and port 1700 for the Gateway Bridge. If you use MQTT, open port 1883 as well. With `ufw`, just run `sudo ufw allow 8080`.

:::

Then follow the guide on [how to connect to the ChirpStack Application Server](https://www.chirpstack.io/guides/first-gateway-device/).

## Connect the MikroTik Gateway to ChirpStack

In the MikroTik configuration, open the LoRa menu. We enabled the LoRa hardware in a previous step; now we set the IP address of the ChirpStack Gateway Server. Go to LoRa &gt; Servers, enter your server's IP address and set both ports to 1700.

Next, go to Devices, open the gateway detail and select the network server you added under Network Servers. You may need to disable LoRa temporarily before you can change this setting.

Also set Network type to Private. All your LoRaWAN nodes then need the private configuration as well.

In the left menu, under Log, the text "Forwarder started" should appear.

:::info

On the server, you can run `sudo journalctl -f -n 100 -u chirpstack-gateway-bridge.service` and check the log of incoming messages to confirm that the connection is set up correctly.

:::

## Add the Gateway and Devices in ChirpStack

Then follow [these steps in the ChirpStack guide](https://www.chirpstack.io/guides/first-gateway-device/) to add the network server, gateway, organization and profiles.

## Useful Links and Guides

[Configuring the HARDWARIO LoRa Kit with AT Commands](https://docs.hardwario.com/tower/radio-communication/lora-at-commands/)

[HARDWARIO LoRa Tester with LCD & GPS](https://www.hackster.io/160709/lora-tester-with-lcd-gps-open-configurable-low-power-4a5b61); you'll find more information in our store as well.

[HARDWARIO LoRa Climate Kit](https://www.hackster.io/hubmartin/lora-climate-monitor-easy-open-low-power-and-with-graphs-7bacc2)



