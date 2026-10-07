---
slug: lora-climate-monitor
title: LoRa climate monitor
---
import Image from '@theme/IdealImage';

# LoRa Climate Monitor

With this kit you can measure **temperature**, **humidity**, **illuminance** and **pressure**. The values are then sent wirelessly to a LoRa gateway.

To receive the data, you can use The Things Network, a community network.

## What You Will Need

* [Core Module](https://www.hardwario.store/p/core-module)
* [LoRa Module](https://www.hardwario.store/p/lora-module)
* [Mini Battery Module](https://www.hardwario.store/p/mini-battery-module)
* [Climate Module](https://www.hardwario.store/p/climate-module)

## Firmware Upload

#### Step 1: Download the latest [**HARDWARIO Playground**](https://github.com/hardwario/hardwario-playground/releases/latest)

#### Step 2: Connect the Core Module to your computer

#### Step 3: In Playground, open the **Firmware** tab, select `hardwario/twr-lora-climate-monitor` and flash the firmware

The firmware appears in the list only after you tick **Show all**.

#### Step 4: After the upload, the red LED on the Core Module lights up for 2 seconds and then goes off

## LoRa Configuration

To configure the LoRa keys, follow the [LoRa AT Commands Configuration](https://docs.hardwario.com/tower/radio-communication/lora-at-commands/) guide.

## Transmitting the Data

The LoRa Climate Monitor sends a LoRa packet:

* After power-up, that is, when you insert the batteries
* Every 15 minutes if the measured values do not change
* When you press the button
* When you enter `AT$SEND` in the console

## Reading the Data

The data is encoded in the LoRa message, and you get the values back by extracting the right bits; the [README.md file](https://github.com/bigclownlabs/bcf-lora-climate-monitor/blob/master/README.md#buffer) explains how. You can also use `decode.py`, a Python [script in the repository](https://github.com/bigclownlabs/bcf-lora-climate-monitor). The same directory also contains `ttn.js`, which decodes the values directly in the TTN backend so you can pass them on, for example straight to Ubidots.

Pass the received HEX string to `decode.py` as a parameter:

```text
>>> python3 decode.py 011b0100f5600024c313

Header : UPDATE
Voltage : 2.7
Orientation : 1
Temperature : 24.5
Humidity : 48.0
Illuminance : 36
Pressure : 99878
```

