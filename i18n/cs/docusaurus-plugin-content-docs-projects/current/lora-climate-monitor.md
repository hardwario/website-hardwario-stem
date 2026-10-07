---
slug: lora-climate-monitor
title: Monitor klimatu LoRa
---
import Image from '@theme/IdealImage';

# Monitor klimatu LoRa

S touto sadou můžete měřit **teplotu**, **vlhkost**, **osvětlenost** a **tlak**. Hodnoty se pak bezdrátově odešlou do brány LoRa.

K příjmu dat můžete použít komunitní síť The Things Network.

## Co budete potřebovat

* [Core Module](https://www.hardwario.store/p/core-module)
* [LoRa Module](https://www.hardwario.store/p/lora-module)
* [Mini Battery Module](https://www.hardwario.store/p/mini-battery-module)
* [Climate Module](https://www.hardwario.store/p/climate-module)

## Nahrání firmwaru

#### Krok 1: Stáhněte si nejnovější verzi [**HARDWARIO Playground**](https://github.com/hardwario/hardwario-playground/releases/latest)

#### Krok 2: Připojte modul Core Module k počítači

#### Krok 3: V aplikaci Playground přejděte na záložku **Firmware**, vyberte `bcf-lora-climate-monitor` a nahrajte firmware

#### Krok 4: Po nahrání se červená LED na modulu Core Module na 2 sekundy rozsvítí a pak zhasne

## Konfigurace LoRa

Klíče LoRa nakonfigurujete podle návodu [Konfigurace LoRa pomocí příkazů AT](https://docs.hardwario.com/tower/radio-communication/lora-at-commands/).

## Přenos dat


LoRa Climate Monitor odešle paket LoRa v těchto případech:

* Po zapnutí, tedy po vložení baterií
* Každých 15 minut, pokud se naměřené hodnoty nemění
* Po stisknutí tlačítka
* Když do konzole zadáte `AT$SEND`
  
## Čtení dat


Data jsou zakódovaná ve zprávě LoRa. Hodnoty z ní získáte, když vyberete správné bity; postup popisuje soubor [README.md](https://github.com/bigclownlabs/bcf-lora-climate-monitor/blob/master/README.md#buffer). Můžete také použít `decode.py`, pythonový [skript v repozitáři](https://github.com/bigclownlabs/bcf-lora-climate-monitor). Ve stejném adresáři je i `decode.js`, kterým můžete hodnoty dekódovat přímo v backendu TTN a poslat je například rovnou do Ubidots.

Přijatý řetězec HEX předejte skriptu `decode.py` jako parametr:

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

