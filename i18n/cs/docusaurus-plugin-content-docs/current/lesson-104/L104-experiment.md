---
slug: iot-temperature-and-humidity-monitor-experiment
title: Experiment
title_meta: "Experiment (L104: IoT teploměr a vlhkoměr)"
---
import Image from '@theme/IdealImage';

**Časová dotace**: 10 min. 

## Měříme teplotu a relativní vlhkost

### Popis experimentu

Ze stavebnice HARDWARIO TOWER si postavíme senzor teploty a relativní vlhkosti. 

Senzor bude s počítačem komunikovat přes Bridge Module připojený do USB portu. Teplotu a vlhkost bude měřit Humidity Tag zasunutý do Bridge Module. Naměřená data zobrazíme v aplikaci HARDWARIO Playground, přesněji na dashboardu prostředí Node-RED, které je v ní vestavěné. 

V rámci experimentu pochopíme:

* jak se v aplikaci Playground pracuje se zprávami MQTT
* jak se v prostředí Node-RED nastavuje dashboard

### Kroky experimentu

1. Seznámení s moduly Bridge Module a Humidity Tag, postavení senzoru
2. Instalace aplikace Playground
3. Připojení senzoru k Playgroundu a zachycení zpráv
4. Vytvoření flow a nastavení dashboardu

#### Seznámení s moduly Bridge Module a Humidity Tag, postavení senzoru

##### Bridge Module

Bridge Module umožňuje jednoduše připojit moduly a tagy IoT stavebnice HARDWARIO TOWER k počítači kabelem USB. Konektor micro USB slouží ke komunikaci a zároveň napájí samotný modul i periferie, které jsou k němu připojené.

Modul je postavený na čipu FT260 od firmy FTDI, který převádí USB HID na I²C/UART. Díky tomu je Bridge Module ideálním nástrojem pro připojení periferií I²C/UART.

##### Humidity Tag

Moduly typu Tag jsou ve stavebnici TOWER určené pro periferie I²C, jako jsou senzory, paměti nebo obvody RTC. Mají rozměry 16 x 16 mm. 

<div class="container">
  <div class="row">
    <Image img={require('./humidity-tag.png')} alt="Zapojení pinů modulu Tag 16 x 16 mm: piny 1–5 nesou GND, VDD, SCL, SDA a INT"/>
  </div>
</div>
*Zapojení signálů na 5pinovém konektoru*

**Humidity Tag** používá velmi přesný digitální senzor vlhkosti a teploty SHT20 s přesností měření ±3 % u relativní vlhkosti (v rozmezí od 20 % do 80 %) a ±0,3 °C u teploty (rozmezí 5–60 °C).

##### Moduly v sestavě:

* Bridge Module
* Humidity Tag
* USB kabel

Humidity Tag zasuňte do pravého dolního rohu Bridge Module. Bridge Module pak kabelem USB připojte k počítači.

<div class="container">
  <div class="row">
    <Image img={require('./bridge-set.avif')} alt="Bridge Module s modulem Humidity Tag zasunutým v rohu a připojeným kabelem micro USB"/>
  </div>
</div>
*Sestava: Bridge Module a Humidity Tag*

##### Instalace aplikace Playground

Stáhněte si aplikaci [HARDWARIO Playground](https://github.com/hardwario/hardwario-playground/releases) a nainstalujte ji do počítače.

#### Připojení jednotek do Playgroundu

* Připojte Bridge Module do USB portu počítače
* Otevřete aplikaci Playground a přejděte na záložku **Bridge**
* Klikněte na **Enable Bridge**
* **Update interval** nechte na hodnotě 5 (sekund)
* Zobrazí se tabulka s naměřenými daty

<div class="container">
  <div class="row">
    <Image img={require('./bridge-playground.webp')} alt="Záložka Bridge v Playgroundu se zapnutým bridge a tabulkou naměřených hodnot vlhkosti a teploty"/>
  </div>
</div>

##### Nastavení funkcí monitoringu a zobrazení dat

* Přepněte se na záložku **Functions**
* Zkopírujte do schránky tento flow:

```json 
[{"id":"3abff9d8.b382f6","type":"mqtt in","z":"5e735a3a.6d0924","name":"","topic":"bridge/temperature","qos":"2","datatype":"auto","broker":"29fba84a.b2af58","x":150,"y":140,"wires":[["ae7df5a9.f87318","ba206b2d.1032f8"]]},{"id":"865a72d.1fca39","type":"mqtt in","z":"5e735a3a.6d0924","name":"","topic":"bridge/humidity","qos":"2","datatype":"auto","broker":"29fba84a.b2af58","x":140,"y":280,"wires":[["727425ab.1b3b8c","3f04c699.25eeea"]]},{"id":"43fed9b5.b16bc8","type":"debug","z":"5e735a3a.6d0924","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","statusVal":"","statusType":"auto","x":410,"y":60,"wires":[]},{"id":"598fe371.8d843c","type":"mqtt in","z":"5e735a3a.6d0924","name":"","topic":"#","qos":"2","datatype":"auto","broker":"29fba84a.b2af58","x":110,"y":60,"wires":[["43fed9b5.b16bc8"]]},{"id":"ae7df5a9.f87318","type":"ui_chart","z":"5e735a3a.6d0924","name":"Temperature","group":"2808e3ab.f0c00c","order":0,"width":"6","height":"6","label":"Temperature","chartType":"line","legend":"false","xformat":"HH:mm:ss","interpolate":"linear","nodata":"","dot":false,"ymin":"0","ymax":"50","removeOlder":1,"removeOlderPoints":"","removeOlderUnit":"3600","cutout":0,"useOneColor":false,"useUTC":false,"colors":["#1f77b4","#aec7e8","#ff7f0e","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5"],"useOldStyle":false,"outputs":1,"x":410,"y":140,"wires":[[]]},{"id":"727425ab.1b3b8c","type":"ui_chart","z":"5e735a3a.6d0924","name":"Humidity","group":"2808e3ab.f0c00c","order":0,"width":0,"height":0,"label":"Humidity","chartType":"line","legend":"false","xformat":"HH:mm:ss","interpolate":"linear","nodata":"","dot":false,"ymin":"0","ymax":"100","removeOlder":1,"removeOlderPoints":"","removeOlderUnit":"3600","cutout":0,"useOneColor":false,"useUTC":false,"colors":["#1f77b4","#aec7e8","#ff7f0e","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5"],"useOldStyle":false,"outputs":1,"x":400,"y":280,"wires":[[]]},{"id":"ba206b2d.1032f8","type":"ui_gauge","z":"5e735a3a.6d0924","name":"Temperature","group":"6815d7cb.7800e8","order":2,"width":0,"height":0,"gtype":"gage","title":"Temperature","label":"°C","format":"{{value}}","min":0,"max":"50","colors":["#00b500","#e6e600","#ca3838"],"seg1":"25","seg2":"30","x":410,"y":200,"wires":[]},{"id":"3f04c699.25eeea","type":"ui_gauge","z":"5e735a3a.6d0924","name":"Humidity","group":"6815d7cb.7800e8","order":2,"width":0,"height":0,"gtype":"gage","title":"Humidity","label":"%","format":"{{value}}","min":0,"max":"100","colors":["#00b500","#e6e600","#ca3838"],"seg1":"40","seg2":"60","x":400,"y":340,"wires":[]},{"id":"29fba84a.b2af58","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","willTopic":"","willQos":"0","willPayload":""},{"id":"2808e3ab.f0c00c","type":"ui_group","z":"","name":"Default","tab":"3e10db66.c8f514","order":1,"disp":true,"width":"6","collapse":false},{"id":"6815d7cb.7800e8","type":"ui_group","z":"","name":"Default","tab":"d96f0e09.23f3c","order":1,"disp":true,"width":"6","collapse":true},{"id":"3e10db66.c8f514","type":"ui_tab","z":"","name":"Charts","icon":"dashboard","disabled":false,"hidden":false},{"id":"d96f0e09.23f3c","type":"ui_tab","z":"","name":"Gauges","icon":"dashboard","disabled":false,"hidden":false}]
```

* V pravém horním rohu najdete hamburger menu a v něm položku **Import**
<div class="container">
  <div class="row">
    <Image img={require('./playground-import.png')} alt="Otevřené hamburger menu v Node-RED se zvýrazněnou volbou Import"/>
  </div>
</div>

* Do zobrazeného pole vložte zkopírovaný flow ze schránky a klikněte na **Import**
* Změny potvrďte tlačítkem **Deploy**
* Přepněte se na záložku **Dashboard**. Pokud vše proběhlo správně, uvidíte v nabídce dvě sekce, **Charts** a **Gauges**, s grafy a budíky teploty a vlhkosti. 

<div class="container">
  <div class="row">
    <Image img={require('./temperature-and-humidity-graph.avif')} alt="Sekce Charts na dashboardu se spojnicovými grafy teploty a vlhkosti v čase"/>
  </div>
</div>

<div class="container">
  <div class="row">
    <Image img={require('./temperature-and-humidity-gauges.avif')} alt="Sekce Gauges na dashboardu s budíky teploty a vlhkosti a aktuálními hodnotami"/>
  </div>
</div><br></br>

*Pozn.:*  
*Když na Humidity Tag dýchnete, uvidíte, jak se hodnoty teploty a vlhkosti v reálném čase mění.*