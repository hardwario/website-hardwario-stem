---
slug: iot-vibration-monitor-experiment-cs
title: Experiment
---
import Image from '@theme/IdealImage';

**Časová dotace**: 10 min. 

## Monitorujeme otřesy IoT tlačítka

### Popis experimentu

Ze stavebnice HARDWARIO si postavíme IoT tlačítko. Zařízení nám umožní odesílat informaci o překročení nastaveného limitu vibrací a dále s touto informací pracovat. 

Komunikace bude probíhat bezdrátově do Radio Dongle zasunutého do USB portu počítače. Překročení limitu vibrací budeme zobrazovat v aplikaci HARDWARIO Playground, resp. v dashboardu vložené aplikace Node-RED. 

## Kroky experimentu

1. Postavení tlačítka  
2. Připojení tlačítka k Playgroundu
3. Nastavení funkce zobrazení grafu naměřené úrovně vibrací
4. Nastavení notifikace při překročení vibrací

### Postavení tlačítka

* Moduly v sestavě:
* Core Module
* Mini Battery Module
* Push Button Module

<div class="container">
  <div class="row">
    <Image img={require('./push-button-canvas.webp')}/>
  </div>
</div>

Postavte si jednotku podle [videonávodu](https://www.youtube.com/watch?v=OCPPKXzCBg0)

### Nahrání firmware

Připojte Core Module pomocí USB kabelu k vašemu počítači. V aplikaci Playground (pokud ještě aplikaci nemáte ve svém počítači, tak si ji, prosím, [stáhněte](https://github.com/hardwario/hardwario-playground/releases) a nainstalujte) v záložce Firmware vyhledejte firmware **twr-radio-vibration-monitor** a nahrajte jej do Core Module. 

:::info

Podívejte se na podrobný návod [nahrání firmware do Core Module](https://docs.hardwario.com/tower/firmware-development/firmware-quick-start/).

:::

### Připojení jednotek do Playgroundu

* Zasuňte do USB portu svého počítače Radio Dongle
* Otevřete aplikaci Playground a běžte na záložku Devices
* Vyberte váš Radio Dongle v nabídce USB zařízení a klikněte na Connect
* Klikněte na Start pairing
* Vložte do tlačítka baterie
* Úspěšné spárování přiřadí do Devices zařízení s názvem vibration-monitor:0

#### Nastavení funkce zobrazení vibrací v čase

* Přepněte se na záložku Functions
* Proveďte import flow:
```json
[{"id":"51d26186.e3f3b","type":"mqtt in","z":"d4f8ad49.c7f6a","name":"","topic":"node/vibration-monitor:0/magnitude","qos":"2","datatype":"auto","broker":"bb7a191.cab93e8","x":280,"y":420,"wires":[["c48fdc72.9e318"]]},{"id":"c48fdc72.9e318","type":"ui_chart","z":"d4f8ad49.c7f6a","name":"","group":"5ee4041d.fa300c","order":0,"width":"9","height":"4","label":"Vibrations in time","chartType":"line","legend":"false","xformat":"HH:mm:ss","interpolate":"linear","nodata":"","dot":false,"ymin":"","ymax":"","removeOlder":"10","removeOlderPoints":"100","removeOlderUnit":"60","cutout":0,"useOneColor":false,"colors":["#1f77b4","#aec7e8","#ff7f0e","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5"],"useOldStyle":false,"x":660,"y":420,"wires":[[]]},{"id":"bb7a191.cab93e8","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","willTopic":"","willQos":"0","willPayload":""},{"id":"5ee4041d.fa300c","type":"ui_group","z":"","name":"Vibrations","tab":"11207769.c31889","disp":false,"width":"18","collapse":false},{"id":"11207769.c31889","type":"ui_tab","z":"","name":"Home","icon":"dashboard"}]
```

<div class="container">
  <div class="row">
    <Image img={require('./stem-vibration-diagram.png')}/>
  </div>
</div>

* Přepněte se na záložku Messages, pokud vše proběhlo správně, tak byste měli vidět příchozí zprávy z jednotky (vibration-monitor)
* Přepněte se na záložku Dashboard, pokud vše proběhlo správně, tak byste měli vidět úrovně vibrací v čase

<div class="container">
  <div class="row">
    <Image img={require('./vibration-graph.png')}/>
  </div>
</div>

## Nastavení notifikace při překročení limitu

Experiment doplníme o zaslání notifikace při překročení konfigurovatelného limitu. Využijeme k tomu notifikace v dashboardu HARDWARIO Playground, limit a vyhodnocení proběhne pomocí nodu switch.

<div class="container">
  <div class="row">
    <Image img={require('./stem-vibration-final-diagram.png')}/>
  </div>
</div>
*Takto vypadá výsledná flow s grafem vibrací a notifikací při překročení limitu*


### Postup

1. Přidejte do flow node switch.
2. Dvojklikem otevřete nastavení nodu, v sekci pro nastavení podmínky vyberte větší nebo rovno než (>=), typ proměnné nastavte na number a vložte váš limit, například 2.
3. Přidejte node notification ze sekce dashboard a dvojklikem otevřete jeho nastavení.
4. Do pole Topic nastavte zprávu, kterou chcete zobrazit, například Vibrations over limit:.
5. Všechny nody pospojujte a tlačítkem Deploy spusťte.
6. Experimentujte a snažte se překročit limit vibrací.

#### Toto je výsledná flow:

```json
[{"id":"e835f2569a18b792","type":"tab","label":"Flow 1","disabled":false,"info":"","env":[]},{"id":"c668cf1ccdecb9c5","type":"mqtt in","z":"e835f2569a18b792","name":"","topic":"node/vibration-monitor:0/magnitude","qos":"2","datatype":"auto","broker":"54516ae2.8f3d14","nl":false,"rap":false,"inputs":0,"x":260,"y":160,"wires":[["2750b2a68969d71b","470f40e6383a2fab"]]},{"id":"2750b2a68969d71b","type":"ui_chart","z":"e835f2569a18b792","name":"","group":"12628c606492ac26","order":0,"width":"9","height":"4","label":"Vibrations in time","chartType":"line","legend":"false","xformat":"HH:mm:ss","interpolate":"linear","nodata":"","dot":false,"ymin":"","ymax":"","removeOlder":"10","removeOlderPoints":"100","removeOlderUnit":"60","cutout":0,"useOneColor":false,"colors":["#1f77b4","#aec7e8","#ff7f0e","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5"],"outputs":1,"x":570,"y":160,"wires":[[]]},{"id":"54d1edb0c2a4230b","type":"ui_toast","z":"e835f2569a18b792","position":"top right","displayTime":"3","highlight":"","sendall":true,"outputs":0,"ok":"OK","cancel":"","raw":false,"className":"","topic":"Vibrations over limit:","name":"Vibrations over limit","x":730,"y":260,"wires":[]},{"id":"470f40e6383a2fab","type":"switch","z":"e835f2569a18b792","name":"","property":"payload","propertyType":"msg","rules":[{"t":"gte","v":"2","vt":"num"}],"checkall":"true","repair":false,"outputs":1,"x":530,"y":260,"wires":[["54d1edb0c2a4230b"]]},{"id":"54516ae2.8f3d14","type":"mqtt-broker","name":"","broker":"localhost","port":"1883","clientid":"","autoConnect":true,"usetls":false,"protocolVersion":"4","keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","birthMsg":{},"closeTopic":"","closePayload":"","closeMsg":{},"willTopic":"","willQos":"0","willPayload":"","willMsg":{},"sessionExpiry":""},{"id":"12628c606492ac26","type":"ui_group","name":"Vibrations","tab":"11207769.c31889","order":2,"disp":false,"width":"18","collapse":false},{"id":"11207769.c31889","type":"ui_tab","name":"Home","icon":"dashboard"}]
```