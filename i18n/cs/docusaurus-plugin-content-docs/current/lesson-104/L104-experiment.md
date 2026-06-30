---
slug: iot-temperature-and-humidity-monitor-experiment
title: Experiment
---
import Image from '@theme/IdealImage';

**Časová dotace**: 10 min. 

## Měříme teplotu a relativní vlhkost

### Popis experimentu

Ze stavebnice HARDWARIO TOWER si postavíme senzor teploty a relativní vlhkosti. 

Komunikace bude probíhat prostřednictvím Bridge Module připojeného k počítači přes USB port. Teplotu a vlhkost budeme měřit Humidity Tagem připojeným k Bridge Module. Naměřená data budeme zobrazovat v aplikaci HARDWARIO Playground, resp. v dashboardu vložené aplikace Node-RED. 

V rámci experimentu pochopíme:

* Jak se pracuje s MQTT zprávami v aplikaci Playground
* Jak se nastaví dashboard v aplikaci Node-RED

### Kroky experimentu

1. Představení Bridge Module a Humidity Tagu a postavení senzoru
2. Instalace aplikace Playground
3. Připojení senzoru k Playgroundu a zachycení zpráv
4. Vytvoření flow a nastavení dasboardu

#### Představení Bridge Module a Humidity Tagu a postavení senzoru

##### Bridge Module

Bridge Module poskytuje jednoduchý způsob připojení modulů a tagů IoT stavebnice HARDWARIO TOWER k vašemu počítači pomocí USB kabelu. Micro USB konektor nejen poskytuje komunikační spojení, ale také napájení jak pro samotný modul, tak i periferie k němu připojené.

Tento modul je založen na čipu FT260 od FTDI, který je konvertorem USB HID do I2C/UART. Tato schopnost dělá z Bridge Module ideální nástroj pro interfacing I2C/UART periferií.

##### Humidity Tag

Formát Tag modulů stavebnice TOWER je určen pro I²C periferie typu senzor, paměť nebo RTC. Má rozměry 16 x 16 mm. 

<div class="container">
  <div class="row">
    <Image img={require('./humidity-tag.png')}/>
  </div>
</div>
*Zapojení signálů na 5pinovém konektoru*

**Humidity Tag** používá velmi přesný digitální senzor vlhkosti a teploty SHT20 s přesností měření ±3 % u relativní vlhkosti (v rozmezí od 20 % do 80 %) a ±0,3 °C u teploty (rozmezí 5 - 60 °C).

##### Moduly v sestavě:

* Bridge Module
* Humidity Tag
* USB kabel

Humidity Tag zasuňte do Bridge Module do pravého dolního rohu. Bridge Module poté prostřednictvím USB kabelu připojte k počítači.

<div class="container">
  <div class="row">
    <Image img={require('./bridge-set.avif')}/>
  </div>
</div>
*Sestava Bridge Module s Humidity Tagem*

##### Instalace aplikace Playground

Stáhněte si aplikaci [HARDWARIO Playground](https://github.com/hardwario/hardwario-playground/releases) a nainstalujte si ji do svého počítače.

#### Připojení jednotek do Playgroundu

* Zasuňte do USB portu svého počítače Bridge Module
* Otevřete aplikaci Playground a běžte na záložku Bridge
* Klikněte na Enable Bridge
* Update interval nechte na 5 (s)
* Zobrazí se tabulka s naměřenými daty

<div class="container">
  <div class="row">
    <Image img={require('./bridge-playground.webp')}/>
  </div>
</div>

##### Nastavení funkcí monitoringu a zobrazení dat

* Přepněte se na záložku Functions
* Zkopírujte si do clipboardu tento flow:

```json 
[{"id":"3abff9d8.b382f6","type":"mqtt in","z":"5e735a3a.6d0924","name":"","topic":"bridge/temperature","qos":"2","datatype":"auto","broker":"29fba84a.b2af58","x":150,"y":140,"wires":[["ae7df5a9.f87318","ba206b2d.1032f8"]]},{"id":"865a72d.1fca39","type":"mqtt in","z":"5e735a3a.6d0924","name":"","topic":"bridge/humidity","qos":"2","datatype":"auto","broker":"29fba84a.b2af58","x":140,"y":280,"wires":[["727425ab.1b3b8c","3f04c699.25eeea"]]},{"id":"43fed9b5.b16bc8","type":"debug","z":"5e735a3a.6d0924","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","statusVal":"","statusType":"auto","x":410,"y":60,"wires":[]},{"id":"598fe371.8d843c","type":"mqtt in","z":"5e735a3a.6d0924","name":"","topic":"#","qos":"2","datatype":"auto","broker":"29fba84a.b2af58","x":110,"y":60,"wires":[["43fed9b5.b16bc8"]]},{"id":"ae7df5a9.f87318","type":"ui_chart","z":"5e735a3a.6d0924","name":"Temperature","group":"2808e3ab.f0c00c","order":0,"width":"6","height":"6","label":"Temperature","chartType":"line","legend":"false","xformat":"HH:mm:ss","interpolate":"linear","nodata":"","dot":false,"ymin":"0","ymax":"50","removeOlder":1,"removeOlderPoints":"","removeOlderUnit":"3600","cutout":0,"useOneColor":false,"useUTC":false,"colors":["#1f77b4","#aec7e8","#ff7f0e","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5"],"useOldStyle":false,"outputs":1,"x":410,"y":140,"wires":[[]]},{"id":"727425ab.1b3b8c","type":"ui_chart","z":"5e735a3a.6d0924","name":"Humidity","group":"2808e3ab.f0c00c","order":0,"width":0,"height":0,"label":"Humidity","chartType":"line","legend":"false","xformat":"HH:mm:ss","interpolate":"linear","nodata":"","dot":false,"ymin":"0","ymax":"100","removeOlder":1,"removeOlderPoints":"","removeOlderUnit":"3600","cutout":0,"useOneColor":false,"useUTC":false,"colors":["#1f77b4","#aec7e8","#ff7f0e","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5"],"useOldStyle":false,"outputs":1,"x":400,"y":280,"wires":[[]]},{"id":"ba206b2d.1032f8","type":"ui_gauge","z":"5e735a3a.6d0924","name":"Temperature","group":"6815d7cb.7800e8","order":2,"width":0,"height":0,"gtype":"gage","title":"Temperature","label":"°C","format":"{{value}}","min":0,"max":"50","colors":["#00b500","#e6e600","#ca3838"],"seg1":"25","seg2":"30","x":410,"y":200,"wires":[]},{"id":"3f04c699.25eeea","type":"ui_gauge","z":"5e735a3a.6d0924","name":"Humidity","group":"6815d7cb.7800e8","order":2,"width":0,"height":0,"gtype":"gage","title":"Humidity","label":"%","format":"{{value}}","min":0,"max":"100","colors":["#00b500","#e6e600","#ca3838"],"seg1":"40","seg2":"60","x":400,"y":340,"wires":[]},{"id":"29fba84a.b2af58","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","willTopic":"","willQos":"0","willPayload":""},{"id":"2808e3ab.f0c00c","type":"ui_group","z":"","name":"Default","tab":"3e10db66.c8f514","order":1,"disp":true,"width":"6","collapse":false},{"id":"6815d7cb.7800e8","type":"ui_group","z":"","name":"Default","tab":"d96f0e09.23f3c","order":1,"disp":true,"width":"6","collapse":true},{"id":"3e10db66.c8f514","type":"ui_tab","z":"","name":"Charts","icon":"dashboard","disabled":false,"hidden":false},{"id":"d96f0e09.23f3c","type":"ui_tab","z":"","name":"Gauges","icon":"dashboard","disabled":false,"hidden":false}]
```

* V pravém horním rohu naleznete hamburger menu a v něm položku Import
<div class="container">
  <div class="row">
    <Image img={require('./playground-import.png')}/>
  </div>
</div>

* Do nabízeného pole vložte nakopírovaný flow z Clipboardu a zvolte Import
* Změny potvrďte stiskem Deploy
* Přepněte se na záložku Dashboard, pokud vše proběhlo správně, tak byste měli vidět v menu dvě tabulky - Charts, resp. Gauges. A v tabulkách pak vidět teplotu a vlhkost jako budíky a grafy. 

<div class="container">
  <div class="row">
    <Image img={require('./temperature-and-humidity-graph.avif')}/>
  </div>
</div>

<div class="container">
  <div class="row">
    <Image img={require('./temperature-and-humidity-gauges.avif')}/>
  </div>
</div><br></br>

*Pozn.:*  
*Dýchněte na Humidity Tag pro online změny hodnot teploty i vlhkosti.*