---
slug: lora-1-wire-thermometer
title: LoRa 1-Wire thermometer
---
import Image from '@theme/IdealImage';

# LoRa 1-Wire Thermometer

With this kit you can measure **temperatures** with one or more connected DS18B20 or DS18S20 temperature sensors. The values are then sent wirelessly to a LoRa gateway.

To receive the data, you can use The Things Network, a community network.

## What You Will Need

* [Core Module](https://www.hardwario.store/p/core-module)
* [LoRa Module](https://www.hardwario.store/p/lora-module)
* [Mini Battery Module](https://www.hardwario.store/p/mini-battery-module)
* [Sensor Module](https://www.hardwario.store/p/sensor-module)
* [DS18B20 Temperature Sensor](https://www.hardwario.store/p/temperature-sensor-ds18b20-2m)

## Firmware Upload

#### Step 1: Download the latest [**HARDWARIO Playground**](https://github.com/hardwario/hardwario-playground/releases/latest)

#### Step 2: Connect the Core Module to your computer

#### Step 3: In Playground, open the **Firmware** tab, select `hardwario/twr-lora-1wire-thermometer` and flash the firmware

The firmware appears in the list only after you tick **Show all**.

#### Step 4: After the upload, the red LED on the Core Module lights up for 2 seconds and then goes off

## LoRa Configuration

To configure the LoRa keys, follow the [LoRa AT Commands Configuration](https://docs.hardwario.com/tower/radio-communication/lora-at-commands/#lora-configuration) guide.

## Transmitting the Data

The thermometer sends a LoRa packet:

* After power-up, that is, when you insert the batteries
* Every 15 minutes if the measured values do not change
* When you press the button
* When you enter `AT$SEND` in the console

## Reading the Data

The data is encoded in the LoRa message, and you get the values back by extracting the right bits. The Python script `decode.py` in the [firmware repository](https://github.com/hardwario/twr-lora-1wire-thermometer) does this for you.

Pass the received HEX string to `decode.py` as a parameter:

```text
>>> python3 decode.py 001D00E600E8012200E500D600E5

Header : BOOT
Voltage : 2.9
Sensor  0 : 23.0
Sensor  1 : 23.2
Sensor  2 : 29.0
Sensor  3 : 22.9
Sensor  4 : 21.4
Sensor  5 : 22.9
```
