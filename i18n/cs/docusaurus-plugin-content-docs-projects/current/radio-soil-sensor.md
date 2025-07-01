---
slug: radio-soil-sensor
title: Bezdrátový půdní senzor
---
import Image from '@theme/IdealImage';

# Bezdrátový půdní senzor

Tento dokument vás provede projektem **Bezdrátový půdní senzor**. Budete moci zobrazit, ukládat a analyzovat úroveň vlhkosti a teplotu v nástroji **Node-RED** a ve vizualizačním nástroji **Grafana**.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-soil-sensor/radio-soil-sensor_project-image.webp')}/>
  </div>
</div>

## Blokové schéma

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-soil-sensor/radio-soil-sensor_block-diagram.webp')}/>
  </div>
</div>

## Požadavky

* Buď **HARDWARIO Sadu Soil Sensor**, nebo jednotlivé komponenty:
  
  * 1x **HARDWARIO** [**Soil Sensor**](https://www.hardwario.store/cz/p/soil-sensor)
  * 1x **HARDWARIO** [**Sensor Module**](https://www.hardwario.store/cz/p/sensor-module)
  * 1x **HARDWARIO** [**Core Module**](https://www.hardwario.store/cz/p/core-module)
  * 1x **HARDWARIO** [**Battery Module**](https://www.hardwario.store/cz/p/battery-module)
  * 1x **HARDWARIO** [**Radio Dongle**](https://www.hardwario.store/cz/p/radio-dongle)

* Budete potřebovat **Raspberry Pi** s nainstalovanou distribucí **HARDWARIO Raspbian**. Podívejte se na dokument [**RInstalace na Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/).

Naměřená data budou ukládána a vizualizována v Grafaně na [**Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/login-guide). Je také možné použít váš počítač. Stačí postupovat podle dokumentu [**Quick Start Guide**](https://docs.hardwario.com/tower/firmware-development/firmware-quick-start/).

## Připojení k Raspberry Pi

Veškerá konfigurace, služby a nahrávání firmwaru budou prováděny na **Raspberry Pi**. Váš počítač slouží pouze k připojení na **SSH server Raspberry Pi** a na webové rozhraní **Grafana**.

Postupujte podle dokumentu [**Přihlášení k Raspberry Pi**](../tutorials/raspberry-pi-login.md) kde najdete návod, jak zjistit **IP adresu Raspberry Pi** ve vaší síti a jak se připojit k **SSH serveru**.

## Nahrání firmwaru

V tomto postupu použijeme **HARDWARIO Firmware Tool** pro nahrání firmwaru do **Core Modulu**. Připojení a nahrání firmwaru proběhne pomocí **Raspberry Pi**.

Nyní je čas nahrát firmware do **Core Modulu**.

### Krok 1: Připojte Micro USB kabel k **Core Modulu** a k **Raspberry Pi**

### Krok 2: Nahrajte firmware do **Core Modulu**:

:::info

Možná budete chtít aktualizovat dostupné firmwary pomocí příkazu `bcf update`, pokud od instalace prostředí Playground uplynula delší doba.

:::

:::warning

**Programování Core Module R1 a R2**
Pro rozdíly v programování staršího **Core Module 1** a novějšího **Core Module 2** si prosím přečtěte dokument **Srovnání Core Module R1 a R2** v sekci **Hardware**.

:::

Spusťte aplikaci **HARDWARIO Playground**. V záložce Firmware vyberte a nahrajte firmware `bcf-radio-soil-sensor` do **Core Module**:

### Krok 3: Odpojte kabel Micro USB od **Core Module** a **Raspberry Pi**


:::success

V tomto okamžiku je váš firmware úspěšně nahrán.

:::

## Sestavení hardwaru

### Krok 1: Začněte s [**Battery Module**](https://www.hardwario.store/cz/p/battery-module)

:::warning

Ujistěte se, že **Battery Module** nemá vložené žádné baterie.

:::

### Krok 2: Připojte [**Core Module**](https://www.hardwario.store/cz/p/core-module) na vrchní část [**Battery Module**](https://www.hardwario.store/cz/p/battery-module).

### Krok 3: Připojte [**Sensor Module**](https://www.hardwario.store/cz/p/sensor-module) na vrchní část [**Core Module**](https://www.hardwario.store/cz/p/core-module).

### Krok 4: Připojte konektor [**Soil Sensor**](https://www.hardwario.store/cz/p/soil-sensor) do [**Sensor Module**](https://www.hardwario.store/cz/p/sensor-module).

## Párování

V této části vytvoříme rádiové spojení mezi **Radio Dongle** a **Radio Climate Monitor**.

Postupujte podle následujících kroků v prostředí **Node-RED**:

### Krok 1: Klikněte na tlačítko **Start node pairing**

:::warning

Ujistěte se, že po stisknutí tlačítka **Start node pairing** se v pravém panelu **debug** zobrazí dvě zprávy. Jedna je příkaz a druhá, obsahující **„start“**, je odpověď od **Radio Dongle**.

:::

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-soil-sensor/radio-soil-sensor_node-red-gw-pair-start.webp')}/>
  </div>
</div>

### Krok 2: Sestavení

Vložte baterie do **Soil Sensor Sady**, čímž odešlete požadavek na párování (měli byste také vidět červenou LED diodu na **Core Module**, která bude přibližně 2 sekundy svítit).

V panelu **debug v Node-RED** se zobrazí zpráva s názvem a verzí firmwaru nově spárovaného modulu.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-soil-sensor/radio-soil-sensor_node-red-gw-pair-paired-mqtt-message.webp')}/>
  </div>
</div>

### Krok 3: Klikněte na tlačítko **Stop node pairing**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-soil-sensor/radio-soil-sensor_node-red-gw-pair-stop.webp')}/>
  </div>
</div>

:::success

V tomto bodě jste úspěšně navázali bezdrátové spojení mezi uzlem (**Soil Sensor**) a bránou (**Radio Dongle**).

:::

## Test komunikace

Postupujte podle následujících kroků v prostředí **Node-RED**:

### Krok 1: Přepněte se na kartu debug vpravo

### Krok 2: Otestujte přenos

Začněte dýchat na teplotní senzor připojený k **Soil Sensor** modulu. Tím způsobíte změnu teploty, která vyvolá bezdrátový přenos dat.

Měli byste pak vidět podobné zprávy:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-soil-sensor/radio-soil-sensor_radio-test.webp')}/>
  </div>
</div>


:::success

V tomto bodě máte ověřenou rádiovou komunikaci.

:::

## Enclosure

Volitelně vložte sestavené zařízení do vhodného krytu, pokud jej máte k dispozici.

:::info

Více informací o krytech najdete v dokumentu [**Enclosures**](https://docs.hardwario.com/chester/hardware-description/enclosures/).

:::

## Integrace s Grafanou

Nyní, když jsme sestavili naši sadu, můžeme začít se základní integrací s **Grafanou**.

### Krok 1: Instalace závislostí

Nainstalujte **Grafanu** a databázi **InfluxDB** na svůj **Raspberry Pi**. Tento postup je podrobně vysvětlen v dokumentu [**Grafana pro vizualizaci**](https://docs.hardwario.com/tower/platform-integrations/grafana-visualization)

### Krok 2: Úprava konfigurace

Přidejte tyto řádky do konfiguračního souboru `/etc/bigclown/mqtt2influxdb.yml`, který jste vytvořili v tutoriálu **Grafana pro vizualizaci**. Tím přidáte podporu pro nová témata (topics), která posílá Půdní senzor (Soil Sensor).

:::info

Pro úpravu textu používáme editor **nano**. Změny uložíte stisknutím klávesové zkratky `Ctrl + O` a editor ukončíte stisknutím `Ctrl + X`.

:::

Otevřete konfiguraci mqtt2influxdb v textovém editoru **nano**.

```text
sudo nano /etc/bigclown/mqtt2influxdb.yml
```

A na konec existujícího souboru přidejte následující řádky:

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

### Krok 3: Otestujte, zda je konfigurace platná. V opačném případě je v souboru YAML nějaká chyba ve formátování.

```text
mqtt2influxdb -c /etc/bigclown/mqtt2influxdb.yml --test
```

### Krok 4: Restartujte službu MQTT2InfluxDB, protože jsme změnili konfiguraci.

```text
pm2 restart mqtt2influxdb
```

### Krok 5: Otevřete stránku **Grafana**, která běží na **Raspberry Pi** na portu `3000`.

[http://hub.local:3000](http://hub.local:3000)

### Krok 6: Graf

Nyní můžete dole vidět teplotu a napětí baterie. Je však potřeba přidat graf vlhkosti. Protože jsme do konfiguračního souboru přidali řádek `- measurement: moisture`, je nutné duplikovat existující graf a změnit jeho zdroj dat (`measurement`) na `moisture`.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-soil-sensor/radio-soil-sensor_grafana-duplicate.webp')}/>
  </div>
</div>

Nyní klikněte na **Edit** v **duplikovaném** grafu.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-soil-sensor/radio-soil-sensor_grafana-edit.webp')}/>
  </div>
</div>

Nyní na kartě **Metrics** změňte položku **FROM** z hodnoty **temperature** na **moisture**.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-soil-sensor/radio-soil-sensor_grafana-from-moisture.webp')}/>
  </div>
</div>

### Krok 7: Uložit

Nyní klikněte na tlačítko **Save** v prostředí **Grafana**, aby vaše konfigurace zůstala zachována i při dalším otevření stránky.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-soil-sensor/radio-soil-sensor_grafana-save.webp')}/>
  </div>
</div>

### <a id="related-documents">Související dokumenty </a>

* [**Instalace Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/)
* [**Přihlášení do Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/login-guide)