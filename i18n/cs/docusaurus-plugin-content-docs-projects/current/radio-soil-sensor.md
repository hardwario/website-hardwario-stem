---
slug: radio-soil-sensor
title: Bezdrátový půdní senzor
---
import Image from '@theme/IdealImage';

# Bezdrátový půdní senzor

Tento návod vás provede projektem **Bezdrátový půdní senzor**. Vlhkost půdy a teplotu budete zobrazovat, ukládat a analyzovat v prostředí **Node-RED** a ve vizualizačním nástroji **Grafana**.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-soil-sensor/radio-soil-sensor-project-image.webp')} alt="Projekt půdního senzoru: elektronika ve venkovní krabičce, sonda v záhonu a budíky s teplotou, vlhkostí a baterií"/>
  </div>
</div>

## Videonávod

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
  <iframe
   src="https://www.youtube.com/embed/6kU-_ldaGOw?si=2kawboGcP9ABW9Cl" title="YouTube video player"
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
  />
</div>


## Blokové schéma

<div class="container">
  <div class="row">
    <Image  img={require('./img/radio-soil-sensor/radio-soil-sensor.png')}
          style={{ backgroundColor: "#fff" }} alt="Blokové schéma: sada Soil Sensor propojená sub-GHz rádiem přes Radio Dongle s MQTT, Node-RED, InfluxDB a Grafanou"/>
  </div>
</div>

## Požadavky

* Buď [**Sada Soil Sensor**](https://www.hardwario.store/cz/p/soil-sensor-set), nebo jednotlivé komponenty:
  
  * 1x [**Soil Sensor**](https://www.hardwario.store/cz/p/soil-sensor)
  * 1x [**Sensor Module**](https://www.hardwario.store/cz/p/sensor-module)
  * 1x [**Core Module**](https://www.hardwario.store/cz/p/core-module)
  * 1x [**Battery Module**](https://www.hardwario.store/cz/p/battery-module)
  * 1x [**Radio Dongle**](https://www.hardwario.store/cz/p/radio-dongle)

* Budete potřebovat **Raspberry Pi** s nainstalovanou distribucí **HARDWARIO Raspbian**. Postup najdete v dokumentu [**Instalace na Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/).

Naměřená data se budou ukládat a zobrazovat v Grafaně na [**Raspberry Pi**](https://www.hardwario.store/cz/p/raspberry-pi-cm4108016). Můžete použít i svůj počítač, stačí postupovat podle dokumentu [**Instalace aplikace HARDWARIO Playground**](https://docs.hardwario.com/tower/desktop-programming/playground-installation/).

## Připojení k Raspberry Pi

Konfiguraci, služby i nahrávání firmwaru budete dělat na **Raspberry Pi**. Počítač vám poslouží jen k připojení k **SSH serveru Raspberry Pi** a k webovému rozhraní **Grafana**.

Postupujte podle dokumentu [**Přihlášení k Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/login-guide/), kde najdete návod, jak v síti zjistit **IP adresu Raspberry Pi** a připojit se k **SSH serveru**.

## Nahrání firmwaru

Firmware nahrajete do modulu **Core Module** nástrojem **HARDWARIO Firmware Tool**. Modul připojíte k **Raspberry Pi** a firmware nahrajete z něj.

Teď nahrajte firmware do modulu **Core Module**.

#### Krok 1: Připojte modul **Core Module** kabelem Micro USB k **Raspberry Pi**

#### Krok 2: Nahrajte firmware do modulu **Core Module**:

:::info

Pokud od instalace systému uplynula delší doba, možná budete chtít aktualizovat dostupné firmwary příkazem `bcf update`.

:::

:::warning

**Nahrávání firmwaru do Core Module R1 a R2**
Rozdíly v nahrávání firmwaru do staršího **Core Module 1** a novějšího **Core Module 2** popisuje **srovnání Core Module R1 a R2** v sekci **Hardware**.

:::

Na **Raspberry Pi** nahrajte firmware nástrojem **HARDWARIO Firmware Tool**:

```text
bcf flash hardwario/twr-radio-soil-sensor:latest
```

#### Krok 3: Odpojte kabel Micro USB od modulu **Core Module** a od **Raspberry Pi**


:::success

Firmware je úspěšně nahraný.

:::

## Sestavení hardwaru

#### Krok 1: Začněte modulem [**Battery Module**](https://www.hardwario.store/cz/p/battery-module)

:::warning

Zkontrolujte, že v modulu **Battery Module** nejsou vložené baterie.

:::

#### Krok 2: Nasaďte [**Core Module**](https://www.hardwario.store/cz/p/core-module) na [**Battery Module**](https://www.hardwario.store/cz/p/battery-module)

#### Krok 3: Nasaďte [**Sensor Module**](https://www.hardwario.store/cz/p/sensor-module) na [**Core Module**](https://www.hardwario.store/cz/p/core-module)

#### Krok 4: Zapojte konektor senzoru [**Soil Sensor**](https://www.hardwario.store/cz/p/soil-sensor) do modulu [**Sensor Module**](https://www.hardwario.store/cz/p/sensor-module)

## Rádiové párování

V této části navážeme rádiové spojení mezi **Radio Dongle** a sestavou **Radio Soil Sensor**.

V prostředí **Node-RED** postupujte takto:

#### Krok 1: Klikněte na tlačítko **Start node pairing**

:::warning

Zkontrolujte, že se po stisknutí tlačítka **Start node pairing** na záložce **debug** vpravo zobrazí dvě zprávy: první je příkaz, druhá se slovem **„start“** je odpověď donglu **Radio Dongle**.

:::

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-soil-sensor/radio-soil-sensor-node-red-gw-pair-start.webp')} alt="Flow v Node-RED se zvýrazněným inject tlačítkem Start node pairing a odpovědí start v záložce debug"/>
  </div>
</div>

#### Krok 2: Zapněte sestavu

Vložte baterie do sestavy **Radio Soil Sensor**, čímž odešlete požadavek na párování (červená LED na modulu **Core Module** by se také měla asi na 2 sekundy rozsvítit).

Na záložce **debug** v **Node-RED** se zobrazí zpráva s názvem a verzí firmwaru nově spárovaného modulu.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-soil-sensor/radio-soil-sensor-node-red-gw-pair-paired-mqtt-message.webp')} alt="Záložka debug s informací o firmwaru spárovaného půdního senzoru a prvními zprávami o vlhkosti a teplotě"/>
  </div>
</div>

#### Krok 3: Klikněte na tlačítko **Stop node pairing**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-soil-sensor/radio-soil-sensor-node-red-gw-pair-stop.webp')} alt="Flow v Node-RED se zvýrazněným inject tlačítkem Stop node pairing"/>
  </div>
</div><br></br>

:::success

Teď máte navázané rádiové spojení mezi uzlem (**Radio Soil Sensor**) a bránou (**Radio Dongle**).

:::

## Test komunikace

V prostředí **Node-RED** postupujte takto:

#### Krok 1: Přepněte se na záložku **debug** vpravo

#### Krok 2: Otestujte přenos

Dýchněte na teplotní čidlo senzoru **Soil Sensor**. Změna teploty spustí rádiový přenos.

Pak byste měli vidět podobné zprávy:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-soil-sensor/radio-soil-sensor-radio-test.webp')} alt="Záložka debug se zvýrazněnými příchozími zprávami MQTT o teplotě a vlhkosti z půdního senzoru"/>
  </div>
</div><br></br>


:::success

Teď máte ověřenou rádiovou komunikaci.

:::

## Krabička

Pokud máte vhodnou krabičku, můžete do ní sestavu vložit.

:::info

Krabičky pro sestavy TOWER najdete v e-shopu v kategorii [**Krabičky**](https://www.hardwario.store/cz/enclosures).

:::

## Integrace s Grafanou

Sada je sestavená, takže můžeme začít se základním propojením s **Grafanou**.

#### Krok 1: Nainstalujte závislosti

Na **Raspberry Pi** nainstalujte **Grafanu** a databázi **InfluxDB**. Postup podrobně popisuje dokument [**Vizualizace v Grafaně**](https://docs.hardwario.com/tower/platform-integrations/grafana-visualization).

#### Krok 2: Upravte konfiguraci

Do konfiguračního souboru `/etc/bigclown/mqtt2influxdb.yml`, který jste vytvořili v návodu **Vizualizace v Grafaně**, přidejte tyto řádky. Tím doplníte podporu nových topiců, které posílá senzor Soil Sensor.

:::info

Text upravujeme v editoru **nano**. Změny uložíte klávesovou zkratkou `Ctrl + O`, editor ukončíte zkratkou `Ctrl + X`.

:::

Otevřete konfiguraci mqtt2influxdb v editoru **nano**.

```text
sudo nano /etc/bigclown/mqtt2influxdb.yml
```

Na konec souboru přidejte tyto řádky:

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

#### Krok 3: Ověřte, že je konfigurace platná. Pokud ne, je v souboru YAML chyba ve formátování

```text
mqtt2influxdb -c /etc/bigclown/mqtt2influxdb.yml --test
```

#### Krok 4: Restartujte službu MQTT2InfluxDB, aby načetla změněnou konfiguraci

```text
pm2 restart mqtt2influxdb
```

#### Krok 5: Otevřete **Grafanu**, která běží na **Raspberry Pi** na portu `3000`

[http://hub.local:3000](http://hub.local:3000)

#### Krok 6: Graf

Dole teď vidíte teplotu a napětí baterie. Chybí ještě graf vlhkosti. Protože jsme do konfiguračního souboru přidali řádek `- measurement: moisture`, je potřeba existující graf zduplikovat a změnit jeho zdroj dat (`measurement`) na `moisture`.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-soil-sensor/radio-soil-sensor-grafana-duplicate.webp')} alt="Otevřené menu panelu s grafem teploty v Grafaně se zvýrazněnými položkami More a Duplicate"/>
  </div>
</div><br></br>

Pak v **duplikovaném** grafu klikněte na **Edit**.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-soil-sensor/radio-soil-sensor-grafana-edit.webp')} alt="Menu duplikovaného panelu v Grafaně se zvýrazněnou položkou Edit"/>
  </div>
</div><br></br>

Na záložce **Metrics** změňte u položky **FROM** hodnotu **temperature** na **moisture**.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-soil-sensor/radio-soil-sensor-grafana-from-moisture.webp')} alt="Záložka Metrics v Grafaně s rozbaleným výběrem FROM pro změnu měření z temperature na moisture"/>
  </div>
</div>

#### Krok 7: Uložte

Nakonec v **Grafaně** klikněte na tlačítko **Save**, aby nastavení zůstalo zachované i při dalším otevření stránky.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-soil-sensor/radio-soil-sensor-grafana-save.webp')} alt="Dashboard v Grafaně se zvýrazněným tlačítkem Save v horní liště"/>
  </div>
</div>

### Související dokumenty <a id="related-documents"></a>

* [**Instalace na Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/)
* [**Přihlášení k Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/login-guide)