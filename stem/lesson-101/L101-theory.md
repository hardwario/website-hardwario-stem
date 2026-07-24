---
slug: what-is-iot-theory
title: Theory
---
import Image from '@theme/IdealImage';

**Time allocation**: 10 min.

## What is STEM

STEM stands for **SCIENCE-TECHNOLOGY-ENGINEERING-MATHEMATICS**.

We're learning new things at the same time. We learn new things through real-life projects.

**In HARDWARIO's STEM learning, we learn from real-life IoT projects**.
## What is IoT

The Internet of Things (IoT) is the name for a network of physical devices, vehicles, home appliances and other devices that are equipped with electronics, software, sensors, moving parts and network connectivity that allows these devices to connect and exchange data.

It is also a phenomenon, a bubble, a threat and an opportunity. An opportunity to make the world safer, greener, more efficient and more fun.

**Definition by HARDWARIO**:

**Physical things connected to the internet, linked to other things and data with the aim of getting something useful out of it all**.

### Samples

* [**Risk of data misinterpretation**](https://youtu.be/nwPtcqcqz00)
* [**Risk of data misinterpretation**](https://youtu.be/_CQA3X-qNgA)

## How IoT helps and threatens us

The Internet of Things is here to help us. Today, it particularly affects the following areas:

* Security - we know what's going on in our buildings, where our children are, ...
* Health - we regulate the environment in which we live and work, we react faster and more accurately to health conditions, ...
* Economy - we plan better, optimize processes, make our lives easier, ...
* Ecology - we save resources and nature, ...
* Entertainment - we discover new forms of entertainment, ...

There are also risks associated with the development of IoT:

* Misuse of data
* Invasion of privacy
* Misinterpretation of data
* Overwhelm by an overload of poorly structured information

IoT actually means that things around us can communicate with us - that is, send us information, or exchange this information themselves. This is already a huge step forward, as it allows us to significantly speed up and streamline many activities, make informed and therefore better decisions, plan our time better, manage many activities remotely without having to travel or arrange for another person to control them.

Quite simply, in IoT we have a tool in our hands with enormous potential to improve our lives.

## IoT hardware

### What are these "things"

They are physical devices that measure, control, communicate. These include, but are not limited to:

* Sensors
* Action members
* Drivers

Another way of looking at THINGS is as a more complex device:

* Vehicles
* Industrial machinery
* Household appliances

**Important!**

But the common features of THINGS are always:

* It is a physical device
* It is equipped with electronics
* It is equipped with network connectivity
* It is uniquely identifiable

### Central IoT device

A prerequisite for IoT is that devices are connected to the Internet. In many cases, however, it is more convenient to connect devices to the Internet through some central element - the Hub. In this case, the devices communicate via a non-internet protocol with each other and with the Hub, and only the Hub is connected to the Internet.

There are many central Hubs on the market, among the most popular ones in the open-source movement are Hubs built on Raspberry Pi, or the Turris router developed in the Czech Republic.

### Other IoT hardware

Voice assistants such as Google Assistant, Amazon Alexa, Microsoft Cortana and Apple's Siri are on the rise. Physical devices running assistants are starting to become an important part of IoT solutions, especially in the home.

## IoT software

### Firmware

**Important!**
Firmware is software for controlling an embedded system. Firmware makes the device behave the way we want it to. For example, it measures the CO2 level every 15 minutes and sends the measured samples to the cloud every hour.

An important feature of the firmware is the power management of the device, which is a critical issue especially for battery-powered products. It is therefore recommended to write the firmware in energy-efficient programming languages (e.g. C) so that the computational operations themselves do not take too long and consume the necessary energy.

Due to the memory capabilities of embedded devices, it is also necessary to take into account the size of the code. Writing firmware is therefore a very demanding discipline.

### IoT platforms

The added value of IoT lies not in IoT devices, but in the analysis of the data collected from these devices. The data collected is referred to as Big Data, and it is stored and processed in backend platforms. Today, there is a move away from running our own backends and the use of highly available and scalable solutions from Amazon (AWS), Microsoft (Azure) or Google. This may not be the case for closed systems, where the manufacturer offers a complete solution consisting of hardware and application and runs the system on its own infrastructure.

### IoT applications

The range of IoT applications is huge and dynamically expanding. Big players running IoT platforms offer their own solutions (e.g. Microsoft and its IoT Central), but there are many excellent IoT applications developed by smaller companies such as IFTTT, Ubidots, etc. The vast majority of apps are in both desktop and mobile variants for smartphones.

## IoT connectivity

### Transmission protocols

In computer science, a protocol is a convention or standard according to which electronic communication and data transmission between two endpoints (most often implemented by computers) takes place. In simpler terms, it is a language understood by all elements of a communication system.

Many protocols are used within the Internet, the main ones being the TCP/IP family of transmission protocols (IP, TCP, UDP, etc.). In general, the most well-known are application protocols such as HTTPS or IMAP.

Many protocols are used for IoT communication, but we will focus on the MQTT protocol, which has become a standard, is supported by almost all IoT players and is used in our HARDWARIO TOWER kit.

### MQTT

:::tip

MQTT (Message Queuing Telemetry Transport) is an ISO standardized protocol based on the publish-subscribe principle. And what can a message published to the system look like? It consists of a so-called Topic and the actual content, e.g.:

:::

* Topic: `mujdum/prizemi/vypinace/vypinac1`
* Contents: `1`

So the message says that switch one of the group of switches on the ground floor of my house is in state 1, which is most often ON.

:::info

If a particular light bulb subscribes to this message, then it will stay on until the mujdum/grounds/switching/offpinac1 0 message arrives, or when it breaks :)

:::

The elements of the MQTT system communicate with a server, often called a broker. It is actually a mailman that delivers messages from publishing devices to those that have subscribed to them. We use the open-source [Mosquitto broker](https://mosquitto.org/).

### Wireless transmissions

We already know what language IoT devices use to communicate with each other and who controls the communication. But messages have to be transmitted between IoT devices somehow, either wirelessly or wired. For simplicity, we will divide wireless systems into local (range in meters) and global (range in kilometers).

#### Local wireless transmissions

In the IoT world, commonly known standards such as Wi-Fi or Bluetooth are used for local wireless transmissions. There are also special wireless technologies such as [ZigBee](https://en.wikipedia.org/wiki/Zigbee) or [Z-Wave](https://en.wikipedia.org/wiki/Z-Wave) that have their own communication protocols. An important aspect for wireless transmissions is the choice of frequency band. This affects the quality of the transmission - range, reliability and power consumption.

For IoT devices, which usually do not transmit large data, wireless transmissions in the so-called Sub-GHz band are most suitable. In this band, unlicensed frequencies are reserved for this purpose, e.g. 868 MHz for the EU. Compared to Wi-Fi (operating at 2.4 and 5 GHz), Sub-GHz has almost twice the range, higher reliability (due to lower frequency and fewer devices using this band) and significantly lower power requirements, i.e. lower power consumption. It is therefore suitable for battery-powered devices such as the HARDWARIO TOWER kit.

#### Global wireless transmissions

Global transmission systems are mainly used for mobile objects or devices installed in locations without an internet connection.

Currently, the most widely used systems for global wireless transmissions are the mobile operators' technologies, i.e. 2G (GPRS, EDGE), 3G and 4G (LTE) networks. IoT devices are equipped with a SIM card and connect to the Internet through the selected mobile network. The disadvantage of these technologies is their power consumption, so they are not suitable for battery-powered devices. Fortunately, new IoT networks, collectively referred to as LPWANs, have begun to be built.

**Important!**
[LPWAN](https://en.wikipedia.org/wiki/Low-power_wide-area_network)is from the English Low-Power Wide Area Network, i.e. a network with low power requirements for communication and covering a larger area. These include [NB-IoT](https://en.wikipedia.org/wiki/Narrowband_IoT), [LoRaWAN](https://en.wikipedia.org/wiki/LoRa) and [Sigfox](https://en.wikipedia.org/wiki/Sigfox). Each of these networks has its own specifics, but all are suitable for battery-powered IoT devices operating in locations where there is no standard internet connection (e.g. Wi-Fi). Therefore, they offer perfect IoT solutions in agriculture, forestry, water management.

Samples

* MQTT: https://youtu.be/EIxdz-2rhLs

### Wired transmissions

Of course, data from IoT devices can also be transmitted by wire. If conditions allow, you can connect your IoT device to the Internet via Ethernet. However, we more often see a solution where individual IoT devices are wired to the Hub, which is then connected to the Internet. In such cases, standards are used [I²C](https://en.wikipedia.org/wiki/I%c2%b2C), [1-Wire](https://en.wikipedia.org/wiki/1-Wire), [RS-232](https://en.wikipedia.org/wiki/RS-232), [RS485](https://en.wikipedia.org/wiki/RS-485).
