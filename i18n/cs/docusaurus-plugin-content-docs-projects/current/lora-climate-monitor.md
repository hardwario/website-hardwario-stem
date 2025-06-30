---
slug: lora-climate-monitor
title: LoRa monitor klimatu
---
import Image from '@theme/IdealImage';

# LoRa monitor klimatu

S touto sadou můžete měřit **teplotu**, **vlhkost**, **světelnost** a **tlak**. Hodnoty jsou poté bezdrátově odeslány do brány LoRa.

K přijímání dat můžete použít komunitu The Things Network.

## Co budete potřebovat

* [Core Module](https://www.hardwario.store/p/core-module)
* [LoRa Module](https://www.hardwario.store/p/lora-module)
* [Mini Battery Module](https://www.hardwario.store/p/mini-battery-module)
* [Climate Module](https://www.hardwario.store/p/climate-module)

## Nahrání firmwaru

### Krok 1: Stáhněte si nejnovější verzi [**HARDWARIO Playground**](https://github.com/bigclownlabs/bch-playground/releases/latest)

### Krok 2: Připojte Core module k počítači.

### Krok 3: V aplikaci Playground přejděte na kartu **Firmware**, vyberte  `bcf-lora-climate-monitor` a nahrajte firmware.

### Krok 4: Po nahrání se červená LED dioda na modulu Core Module rozsvítí na 2 sekundy a poté zhasne.

## LoRa Configuration

Pro konfiguraci klíčů LoRa postupujte podle návodu  [LoRa AT Commands Configuration](https://docs.hardwario.com/tower/radio-communication/lora-at-commands/)

##  Přenos dat


LoRa Climate Monitor odešle packet LoRa v následujících případech:

* Po zapnutí, když jsou vloženy baterie
* Každých 15 minut, když jsou naměřené hodnoty stejné
* Po stisknutí tlačítka
* Když zadáte `AT$SEND` do konzole
  
## Čtení dat


Data jsou zakódována v zprávě LoRa. Abyste získali hodnoty zpět, musíte extrahovat správné bity. To je vysvětleno v souboru [README.md](https://github.com/bigclownlabs/bcf-lora-climate-monitor/blob/master/README.md#buffer). Můžete také použít `decode.py`python [skript v úložišti](https://github.com/bigclownlabs/bcf-lora-climate-monitor).

Přijatý řetězec HEX můžete předat jako parametr pro `decode.py`:

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

