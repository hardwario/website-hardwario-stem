---
slug: lora-1-wire-thermometer
title: Teploměr LoRa se senzory 1-Wire
---
import Image from '@theme/IdealImage';

# Teploměr LoRa se senzory 1-Wire

S touto sadou můžete měřit **teploty** jedním nebo více připojenými teplotními senzory DS18B20 nebo DS18S20. Hodnoty se pak bezdrátově odešlou do brány LoRa.

K příjmu dat můžete použít komunitní síť The Things Network.

## Co budete potřebovat

* [Core Module](https://www.hardwario.store/cz/p/core-module)
* [LoRa Module](https://www.hardwario.store/cz/p/lora-module)
* [Mini Battery Module](https://www.hardwario.store/cz/p/mini-battery-module)
* [Sensor Module](https://www.hardwario.store/cz/p/sensor-module)
* [Teplotní senzor DS18B20](https://www.hardwario.store/cz/p/temperature-sensor-ds18b20-2m)

## Nahrání firmwaru

#### Krok 1: Stáhněte si nejnovější verzi [**HARDWARIO Playground**](https://github.com/hardwario/hardwario-playground/releases/latest)

#### Krok 2: Připojte modul Core Module k počítači

#### Krok 3: V aplikaci Playground přejděte na záložku **Firmware**, vyberte `bcf-lora-1wire-thermometer` a nahrajte firmware

#### Krok 4: Po nahrání se červená LED na modulu Core Module na 2 sekundy rozsvítí a pak zhasne

## Konfigurace LoRa

Klíče LoRa nakonfigurujete podle návodu [Konfigurace LoRa pomocí příkazů AT](https://docs.hardwario.com/tower/radio-communication/lora-at-commands/#lora-configuration).

## Přenos dat

Teploměr odešle paket LoRa v těchto případech:

* Po zapnutí, tedy po vložení baterií
* Každých 15 minut, pokud se naměřené hodnoty nemění
* Po stisknutí tlačítka
* Když do konzole zadáte `AT$SEND`

## Čtení dat

Data jsou zakódovaná ve zprávě LoRa. Hodnoty z ní získáte, když vyberete správné bity; postup popisuje soubor [README.md](https://github.com/bigclownlabs/bcf-lora-climate-monitor/blob/master/README.md#buffer). Můžete také použít `decode.py`, pythonový [skript v repozitáři](https://github.com/bigclownlabs/bcf-lora-climate-monitor).

Přijatý řetězec HEX předejte skriptu `decode.py` jako parametr:

:::info

Stejným příkazem můžete aktualizovat nástroj **Firmware Flashing Tool** na nejnovější verzi.

:::

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
