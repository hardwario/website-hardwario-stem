---
slug: what-is-iot-theory
title: Theory
title_meta: "Theory (L101: What Is the Internet of Things)"
---
import Image from '@theme/IdealImage';

**Time allocation**: 10 min.

## What is STEM

STEM stands for **Science, Technology, Engineering and Mathematics**.

We **learn the individual subjects together**. We **learn new things through real-life projects**.

**In HARDWARIO STEM lessons, we learn through real Internet of Things projects.**

## What is IoT

The Internet of Things (IoT) is the name for a network of physical devices, vehicles, home appliances and other items fitted with electronics, software, sensors, moving parts and network connectivity, which lets them connect and exchange data.

It is also a phenomenon, a bubble, a threat and an opportunity: an opportunity to make the world safer, greener, more efficient and more fun.

**HARDWARIO's definition**:

**Physical things connected to the internet and linked to other things and data, so that something useful comes out of it all**.

### Examples

* [**Risk of misinterpreting data**](https://youtu.be/nwPtcqcqz00)
* [**Risk of privacy intrusion**](https://youtu.be/_CQA3X-qNgA)

## How IoT helps us and how it threatens us

The Internet of Things is here to help us. Today it mainly affects these areas:

* Security: we know what is happening in our buildings, where our children are, and so on.
* Health: we regulate the environment we live and work in, we respond faster and more precisely to health conditions, and so on.
* Economy: we plan better, optimize processes, make life easier, and so on.
* Ecology: we save resources and protect nature, and so on.
* Entertainment: we discover new forms of entertainment, and so on.

The development of IoT also brings risks:

* Data misuse
* Invasion of privacy
* Misinterpretation of data
* Overload of poorly structured information

IoT really means that the things around us can communicate with us: they send us information or exchange it among themselves. That alone is a huge step forward. It lets us speed up and streamline many activities considerably, make informed and therefore better decisions, plan our time better and handle many things remotely, without having to travel or have someone else operate them for us.

In short, IoT puts in our hands a tool with enormous potential to improve our lives.

## IoT hardware

### What are these “things”?

They are physical devices that measure, control and communicate. They mainly include:

* Sensors
* Actuators
* Controllers

From another angle, more complex devices can also count as things:

* Vehicles
* Industrial machines
* Household appliances

**Important!**

All things, however, always share these features:

* It is a physical device
* It has electronics
* It has network connectivity
* It can be uniquely identified

### Central IoT device

A basic condition of the Internet of Things is that devices are connected to the internet. Often, though, it is more practical to connect them through a central element called a hub. The devices then communicate with each other and with the hub over a protocol other than the internet protocol, and only the hub is connected to the internet.

There are many hubs on the market. In the open-source community, the most popular include hubs built on the Raspberry Pi and the Turris router developed in the Czech Republic.

### Other IoT hardware

Voice assistants from Amazon, Apple and Google have become widespread. The physical devices they run on are an important part of IoT solutions, especially in homes.

## IoT software

### Firmware

**Important!**

Firmware is the software that controls an embedded system. It makes the device behave the way we want: for example, it measures the CO2 concentration every 15 minutes and sends the readings to the cloud every hour.

One of the key tasks of firmware is managing the device's power consumption, which is crucial above all for battery-powered products. That is also why firmware should be written in efficient programming languages (such as C), so that the computations themselves do not take too long and drain the battery unnecessarily.

The limited memory of embedded devices also means keeping an eye on code size. Writing firmware is therefore a very demanding discipline.

### IoT platforms

The added value of the Internet of Things lies not in the devices themselves but in analyzing the data collected from them. The collected data is known as big data, and it is stored and processed on backend platforms. Today, companies have moved away from running their own backends and use highly available, scalable services from Amazon (AWS), Microsoft (Azure) or Google instead. This may not apply to closed systems, in which the manufacturer offers a complete solution of hardware and application and runs it on its own infrastructure.

### IoT applications

The range of IoT applications is huge and growing fast. The large companies that run IoT platforms offer their own solutions, and there are also many excellent IoT applications from smaller companies, such as IFTTT or Ubidots. The vast majority of applications come in both a desktop and a mobile version for smartphones.

## IoT connectivity

### Transmission protocols

In computer science, a protocol is a convention or standard that governs electronic communication and data transfer between two endpoints (usually computers). Put simply, it is a language that all elements of a communication system understand.

The internet uses many protocols. The main ones belong to the TCP/IP family of transmission protocols (IP, TCP, UDP and others), and the best known are application protocols such as HTTPS or IMAP.

IoT uses a wide range of communication protocols. We will focus on MQTT, which has become a standard, is supported by almost every player on the IoT market and is also used by the HARDWARIO TOWER kit.

### MQTT

:::tip

MQTT (Message Queuing Telemetry Transport) is an ISO-standardized protocol based on the publish-subscribe principle. What can a message published to the system look like? It consists of a topic and the content itself, for example:

:::

* Topic: `mujdum/prizemi/vypinace/vypinac1`
* Content: `1`

The topic is in Czech (my house / ground floor / switches / switch 1), so the message says that switch no. 1 in the group of switches on the ground floor of my house is in state 1, which usually means ON.

:::info

If a particular light bulb subscribes to this message, it stays on until the message mujdum/prizemi/vypinace/vypinac1 0 arrives, or until it breaks :)

:::

The elements of an MQTT system communicate with a server, often called a broker. It is essentially a postman that delivers messages from the publishing devices to the devices that have subscribed to them. We use the open-source [Mosquitto](https://mosquitto.org/) broker.

### Wireless transmissions

We now know which language IoT devices use to talk to each other and who manages the communication. But the messages still have to travel between IoT devices somehow, either wirelessly or over wires. To keep things simple, we will divide wireless systems into local (range of meters) and global (range of kilometers).

#### Local wireless transmissions

For local wireless transmission, the IoT world uses widely known standards such as Wi-Fi or Bluetooth. There are also special wireless technologies such as [ZigBee](https://en.wikipedia.org/wiki/Zigbee) or [Z-Wave](https://en.wikipedia.org/wiki/Z-Wave) with their own communication protocols. The choice of frequency band matters for wireless transmission because it affects the transmission quality: range, reliability and power consumption.

IoT devices usually do not transmit large amounts of data, so wireless transmission in the sub-GHz band suits them best. This band has license-free frequencies reserved for this purpose, for example 868 MHz in the EU. Compared with Wi-Fi (which operates at 2.4 and 5 GHz), the sub-GHz band offers almost twice the range, higher reliability (thanks to the lower frequency and the fewer devices using the band) and much lower power requirements, which means lower consumption. That makes it a good fit for battery-powered devices such as the HARDWARIO TOWER kit.

#### Global wireless transmissions

Global transmission systems are used mainly for mobile objects or for devices installed in places without an internet connection.

Today, global wireless transmission most often uses mobile operators' networks, i.e. 2G (GPRS, EDGE), 4G (LTE) and 5G. IoT devices have a SIM card and connect to the internet through the chosen mobile network. The drawback of these technologies is their high power consumption, so they are not suitable for battery-powered devices. Fortunately, new IoT networks, known collectively as LPWAN, have been built for this purpose.

**Important!**

[LPWAN](https://en.wikipedia.org/wiki/Low-power_wide-area_network) stands for Low-Power Wide Area Network: a network with low power consumption that covers a large area. LPWANs include [NB-IoT](https://en.wikipedia.org/wiki/Narrowband_IoT), [LoRaWAN](https://en.wikipedia.org/wiki/LoRa) and [Sigfox](https://en.wikipedia.org/wiki/Sigfox). Each of these networks has its own characteristics, but all of them suit battery-powered IoT devices operating where there is no standard internet connection (such as Wi-Fi). That makes them a great fit for IoT solutions in agriculture, forestry or water management.

Examples

* MQTT: https://youtu.be/EIxdz-2rhLs

### Wired transmissions

Data from IoT devices can, of course, also be transmitted over wires. If conditions allow, you can connect your IoT device to the internet via Ethernet. More often, though, the individual IoT devices are wired to a hub, which is then connected to the internet. Standards such as [I²C](https://en.wikipedia.org/wiki/I%c2%b2C), [1-Wire](https://en.wikipedia.org/wiki/1-Wire), [RS-232](https://en.wikipedia.org/wiki/RS-232) and [RS-485](https://en.wikipedia.org/wiki/RS-485) are used in these cases.
