---
slug: lora-1-wire-thermometer
title: LoRa teploměr s 1-Wire rozhraním
---
import Image from '@theme/IdealImage';

# LoRa teploměr s 1-Wire rozhraním

S touto sadou můžete měřit **teploty** pomocí jednoho nebo více připojených teplotních senzorů DS18B20 nebo DS18S20. Hodnoty jsou poté bezdrátově odeslány do LoRa gateway.

K přijímání dat můžete použít komunitu The Things Network.

## Co budete potřebovat

* [Core Module](https://www.hardwario.store/cz/p/core-module)
* [LoRa Module](https://www.hardwario.store/cz/p/lora-module)
* [Mini Battery Module](https://www.hardwario.store/cz/p/mini-battery-module)
* [Sensor Module](https://www.hardwario.store/cz/p/sensor-module)
* [Teplotní senzor](https://www.hardwario.store/cz/p/temperature-sensor-ds18b20-2m)

## Nahrání firmwaru

#### Krok 1: Stáhněte si nejnovější verzi [**HARDWARIO Playground**](https://github.com/bigclownlabs/bch-playground/releases/latest)

#### Krok 2: Připojte Core Module k počítači.

#### Krok 3: V aplikaci Playground přejděte na kartu **Firmware**, vyberte `bcf-lora-1wire-thermometer` a nahrajte firmware.

#### Krok 4: Po nahrání se červená LED dioda na modulu Core Module rozsvítí na 2 sekundy a poté zhasne.

## Konfigurace LoRa

Pro konfiguraci klíčů LoRa postupujte podle návodu [LoRa AT Commands Configuration](https://docs.hardwario.com/tower/radio-communication/lora-at-commands/#lora-configuration)

##  Přenos dat

LoRa Climate Monitor odešle packet LoRa v následujících případech:

* Po zapnutí, když jsou vloženy baterie
* Každých 15 minut, když jsou naměřené hodnoty stejné
* Po stisknutí tlačítka
* Když zadáte `AT$SEND` do konzole

## Čtení dat

Data jsou zakódována v zprávě LoRa. Abyste získali hodnoty zpět, musíte extrahovat správné bity. To je vysvětleno v souboru [README.md](https://github.com/bigclownlabs/bcf-lora-climate-monitor/blob/master/README.md#buffer). Můžete také použít `decode.py` python [skript v úložišti](https://github.com/bigclownlabs/bcf-lora-climate-monitor).

Přijatý řetězec HEX můžete předat jako parametr pro `decode.py`:

:::info

Stejný příkaz můžete použít k aktualizaci  **Firmware Flashing Tool** na nejnovější verzi.

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
