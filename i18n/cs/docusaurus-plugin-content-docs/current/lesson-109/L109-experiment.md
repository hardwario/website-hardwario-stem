---
slug: iot-soil-monitor-experiment
title: Experiment
---
import Image from '@theme/IdealImage';

**Časová dotace**: 10 min.

## Popis experimentu 

Použijeme stavebnici **HARDWARIO Sensor Set** k sestavení senzoru vlhkosti a teploty půdy. Naměřená data zobrazíme v grafu v prostředí **Node-RED**. Zároveň připojený **LED pásek** poskytne barevnou signalizaci v případě, že naměřené hodnoty překročí nastavené limity.

V rámci experimentu pochopíme:

* Jak měřit vlhkost půdy pomocí kapacitního senzoru
* Jak se mění vlhkost u různých typů půdy

<div class="container">
  <div class="row">
    <Image img={require('./stem-soil-sensor.avif')}/>
  </div>
</div>

## Kroky experimentu

1.	Sestavení Sensor Setu (Core Module, Mini Battery Module, Sensor Module)
2.	Připojení půdního senzoru k Sensor Setu
3.	Spárování Sensor Kitu s Radio Dongle
4.	Zobrazení dat o teplotě a vlhkosti v grafu
5.	Signalizace překročení limitních hodnot pomocí LED pásku
6.	Extra: ovládání relé

### Sestavení Sensor Sady

<div class="container">
  <div class="row">
    <Image img={require('./stem-sensor-set-canvas.avif')}/>
  </div>
</div>

### Připojení půdního senzoru k Sensor Setu

<div class="container">
  <div class="row">
    <Image img={require('./stem-sensor-set-schema.avif')}/>
  </div>
</div>

### Spárování Sensor Kitu s Radio Dongle

Otevřete aplikaci HARDWARIO Playground – záložka **Devices**

<div class="container">
  <div class="row">
    <Image img={require('./stem-sensor-set-playground.png')}/>
  </div>
</div>

### Zobrazení dat o teplotě a vlhkosti v grafu

Přejděte do aplikace **HARDWARIO Playground** – záložka **Functions**

Zkopírujte a importujte tento **flow pro půdní senzor**

```json
[{"id":"7a709afe0a42280b","type":"tab","label":"Soil Sensor","disabled":false,"info":"","env":[]},{"id":"50cda90b00ec6940","type":"mqtt in","z":"7a709afe0a42280b","name":"","topic":"node/soil-sensor:0/soil-sensor/lx/temperature","qos":"2","datatype":"auto","broker":"29fba84a.b2af58","nl":false,"rap":true,"rh":0,"inputs":0,"x":250,"y":380,"wires":[["dce09cb2c644f0ec","724ab6515ba390dc"]]},{"id":"6a7c3d0846d7749f","type":"mqtt in","z":"7a709afe0a42280b","name":"","topic":"node/soil-sensor:0/soil-sensor/lx/raw","qos":"2","datatype":"auto","broker":"29fba84a.b2af58","nl":false,"rap":true,"rh":0,"inputs":0,"x":230,"y":80,"wires":[["2c99624e3aba8b43","5bc8e878d8a6cd92"]]},{"id":"2c99624e3aba8b43","type":"switch","z":"7a709afe0a42280b","name":"LOW MOISTURE","property":"payload","propertyType":"msg","rules":[{"t":"lte","v":"7000","vt":"num"},{"t":"gt","v":"15000","vt":"num"},{"t":"lt","v":"1000","vt":"num"}],"checkall":"true","repair":false,"outputs":3,"x":550,"y":80,"wires":[["448ec5364796f69c"],["5494dc0658fa2816"],["f8f1e6de9efa3424"]]},{"id":"448ec5364796f69c","type":"change","z":"7a709afe0a42280b","name":"LED STRIP GREEN","rules":[{"t":"set","p":"payload","pt":"msg","to":"\"#00FF00\"","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":770,"y":40,"wires":[["6c1efe4fb186b382"]]},{"id":"6c1efe4fb186b382","type":"mqtt out","z":"7a709afe0a42280b","name":"","topic":"node/power-controller:0/led-strip/-/color/set","qos":"","retain":"","respTopic":"","contentType":"","userProps":"","correl":"","expiry":"","broker":"22810e6edd188e0a","x":1050,"y":40,"wires":[]},{"id":"dce09cb2c644f0ec","type":"switch","z":"7a709afe0a42280b","name":"LOW TEMPERATURE","property":"payload","propertyType":"msg","rules":[{"t":"lte","v":"25","vt":"num"}],"checkall":"true","repair":false,"outputs":1,"x":560,"y":380,"wires":[["7e0e91a7e56582aa"]]},{"id":"7e0e91a7e56582aa","type":"change","z":"7a709afe0a42280b","name":"LED STRIP BLUE","rules":[{"t":"set","p":"payload","pt":"msg","to":"\"#00FF00\"","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":770,"y":380,"wires":[["5c8e79a1b86490a7"]]},{"id":"5c8e79a1b86490a7","type":"mqtt out","z":"7a709afe0a42280b","name":"","topic":"node/power-controller:0/led-strip/-/color/set","qos":"","retain":"","respTopic":"","contentType":"","userProps":"","correl":"","expiry":"","broker":"22810e6edd188e0a","x":1070,"y":380,"wires":[]},{"id":"5bc8e878d8a6cd92","type":"ui_gauge","z":"7a709afe0a42280b","name":"Soil Moisture","group":"b355d20f11e87c8d","order":1,"width":0,"height":0,"gtype":"gage","title":"Soil Moisture","label":"","format":"{{value}}","min":0,"max":"16383","colors":["#ff0000","#e6e600","#00ff00"],"seg1":"5500","seg2":"11000","className":"","x":540,"y":180,"wires":[]},{"id":"724ab6515ba390dc","type":"ui_gauge","z":"7a709afe0a42280b","name":"Soil Temperature","group":"b355d20f11e87c8d","order":1,"width":0,"height":0,"gtype":"gage","title":"Soil Temperature","label":"°C","format":"{{value}}","min":"-20","max":"70","colors":["#0000ff","#e6e600","#ff0000"],"seg1":"0","seg2":"20","className":"","x":550,"y":460,"wires":[]},{"id":"5494dc0658fa2816","type":"change","z":"7a709afe0a42280b","name":"LED STRIP BLUE","rules":[{"t":"set","p":"payload","pt":"msg","to":"\"#0000FF\"","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":770,"y":100,"wires":[["ba63c4b7674f5aa4"]]},{"id":"ba63c4b7674f5aa4","type":"mqtt out","z":"7a709afe0a42280b","name":"","topic":"node/power-controller:0/led-strip/-/color/set","qos":"","retain":"","respTopic":"","contentType":"","userProps":"","correl":"","expiry":"","broker":"22810e6edd188e0a","x":1050,"y":100,"wires":[]},{"id":"27346508bfcf1420","type":"mqtt out","z":"7a709afe0a42280b","name":"","topic":"node/power-controller:0/relay/-/state/set","qos":"","retain":"","respTopic":"","contentType":"","userProps":"","correl":"","expiry":"","broker":"29fba84a.b2af58","x":1040,"y":160,"wires":[]},{"id":"f8f1e6de9efa3424","type":"change","z":"7a709afe0a42280b","name":"RELAY ON","rules":[{"t":"set","p":"payload","pt":"msg","to":"true","tot":"bool"}],"action":"","property":"","from":"","to":"","reg":false,"x":750,"y":160,"wires":[["27346508bfcf1420"]]},{"id":"29fba84a.b2af58","type":"mqtt-broker","name":"","broker":"127.0.0.1","port":"1883","clientid":"","autoConnect":true,"usetls":false,"protocolVersion":"4","keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","birthMsg":{},"closeTopic":"","closePayload":"","closeMsg":{},"willTopic":"","willQos":"0","willPayload":"","willMsg":{},"sessionExpiry":""},{"id":"22810e6edd188e0a","type":"mqtt-broker","name":"","broker":"localhost","port":"1883","clientid":"","autoConnect":true,"usetls":false,"protocolVersion":"4","keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","birthMsg":{},"closeTopic":"","closeQos":"0","closePayload":"","closeMsg":{},"willTopic":"","willQos":"0","willPayload":"","willMsg":{},"sessionExpiry":""},{"id":"b355d20f11e87c8d","type":"ui_group","name":"Soil Gauges","tab":"54bf084c6f89bbad","order":1,"disp":true,"width":"6","collapse":false,"className":""},{"id":"54bf084c6f89bbad","type":"ui_tab","name":"Outdoor","icon":"dashboard","disabled":false,"hidden":false}]
```

<div class="container">
  <div class="row">
    <Image img={require('./stem-sensor-set-deploy.avif')}/>
  </div>
</div>

<div class="container">
  <div class="row">
    <Image img={require('./stem-import-nodes.png')}/>
  </div>
</div>

Klikněte na **Deploy**

<div class="container">
  <div class="row">
    <Image img={require('./stem-click-on-deploy.webp')}/>
  </div>
</div>

Otevřete záložku **Dashboard** – uvidíte měřáky s hodnotami teploty a vlhkosti půdy.

<div class="container">
  <div class="row">
    <Image img={require('./stem-sensor-set-dashboard.avif')}/>
  </div>
</div>

Vložte svůj půdní senzor do sklenice, abyste viděli změny ve vlhkosti a teplotě.

### Signalizace překročení limitů pomocí LED pásku

Spárujte **Control Set** s **LED páskem** a **Radio Dongle**.

LED pásek mění svou barvu v závislosti na hodnotách vlhkosti půdy.

V aplikaci **HARDWARIO Playground**, záložka **Functions**, můžete měnit limity hodnot vlhkosti (uzel **LOW MOISTURE**) a barvy LED pásku (uzly **LED STRIP GREEN/BLUE**).

<div class="container">
  <div class="row">
    <Image img={require('./stem-soil-sensor-diagram.png')}/>
  </div>
</div>

### Extra: Spínání relé

Importovaný flow obsahuje funkci pro ovládání relé na Power Modulu. V uzlu LOW MOISTURE můžete změnit hodnotu, při které se relé sepne. Tuto funkci můžete využít například k automatickému zapnutí závlahového systému, pokud jsou naměřeny nízké hodnoty vlhkosti půdy.