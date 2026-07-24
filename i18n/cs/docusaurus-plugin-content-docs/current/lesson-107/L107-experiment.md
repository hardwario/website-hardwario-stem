---
slug: iot-light-monitor-experiment
title: Experiment
---
import Image from '@theme/IdealImage';

**Časová dotace**: 10 min. 

## IoT tlačítkem ovládáme LED pásek

### Popis experimentu

V rámci experimentu budeme ovládat LED pásek pomocí tlačítka a na základě naměřené teploty. Naučíme se také pracovat s RGB barevným modelem.

### Kroky experimentu

1. Postavení tlačítka  
2. Postavení ovladače LED pásku
3. Připojení tlačítka k Playgroundu
4. Nastavení funkce ovládání LED pásku

### Postavení tlačítka

**Moduly v sestavě:**
* Core Module
* Mini Battery Module
* Push Button Module
  
<div class="container">
  <div class="row">
    <Image img={require('./push-button-canvas.webp')} alt="Rozložené díly sestavy: Core Module, Mini Battery Module, kryt s tlačítkem, O-kroužky a oranžová krabička"/>
  </div>
</div>

**Postavte si jednotku podle videonávodu:**

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
  <iframe
    src="https://www.youtube.com/embed/OCPPKXzCBg0?si=3rdvwsJo1E5zU_fb"
    title="YouTube video player"
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
  />
</div>

### Postavení ovladače LED Pásku

**Moduly v sestavě:**

* Core Module
* Power Module
* LED Pásek

<div class="container">
  <div class="row">
    <Image img={require('./push-button-canvas.webp')} alt="Rozložené díly sestavy: Core Module, Mini Battery Module, kryt s tlačítkem, O-kroužky a oranžová krabička"/>
  </div>
</div>

**Postavte si jednotku podle videonávodu:**

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
  <iframe
   src="https://www.youtube.com/embed/idxAoc2q6O0?si=ngyG6Z1Jd1HGZTKZ"
    title="YouTube video player"
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
  />
</div>




## Připojení jednotek do Playgroundu  
*(Pokud ještě aplikaci nemáte ve svém počítači, tak si ji prosím [stáhněte](https://github.com/hardwario/hardwario-playground/releases) a nainstalujte)*

1. Zasuňte do USB portu svého počítače **Radio Dongle**
2. Otevřete aplikaci **Playground** a běžte na záložku **Devices**
3. Vyberte váš **Radio Dongle** v nabídce USB zařízení a klikněte na **Connect**
4. Klikněte na **Start pairing**
5. Vložte do tlačítka baterie a v seznamu zařízení se vám objeví nové s označením `push-button:0`
6. Znovu klikněte na **Start pairing**
7. Připojte adaptér k ovladači LED pásku do zásuvky. V seznamu zařízení se vám objeví nové s označením `power-controller:0`

:::info

 Pokud se v seznamu objevilo nové zařízení, ale má jiné označení, bude potřeba do něj nahrát správný firmware.  
 Jak na nahrávání firmware se podívejte do tohoto návodu.  
 Pro tlačítko potřebujete firmware `twr-radio-push-button` a pro ovladač LED pásku `twr-radio-power-controller`.

:::

### Nastavení funkce zobrazení počtu zmáčknutí a teploty tlačítka

1. Přepněte se na záložku **Functions**
2. Proveďte import **flow**:

```json
[{"id":"e1c78aec22a2b30f","type":"tab","label":"IoT button","disabled":false,"info":""},{"id":"df77fa76ec57b83c","type":"mqtt in","z":"e1c78aec22a2b30f","name":"","topic":"node/push-button:0/push-button/-/event-count","qos":"2","datatype":"auto","broker":"a382db22.fb11e8","inputs":0,"x":200,"y":180,"wires":[["f459f618531641e5"]]},{"id":"db42bc1c50d5c6bf","type":"mqtt in","z":"e1c78aec22a2b30f","name":"","topic":"node/push-button:0/thermometer/0:1/temperature","qos":"2","datatype":"auto","broker":"29fba84a.b2af58","inputs":0,"x":210,"y":360,"wires":[["f285b637e508b347"]]},{"id":"f285b637e508b347","type":"ui_text","z":"e1c78aec22a2b30f","group":"57ff470b.93fdf8","order":3,"width":0,"height":0,"name":"","label":"Temperature","format":"{{msg.payload}}°C","layout":"row-spread","className":"","x":550,"y":360,"wires":[]},{"id":"f459f618531641e5","type":"ui_text","z":"e1c78aec22a2b30f","group":"57ff470b.93fdf8","order":4,"width":0,"height":0,"name":"","label":"Counter","format":"{{msg.payload}}","layout":"row-spread","className":"","x":540,"y":180,"wires":[]},{"id":"a382db22.fb11e8","type":"mqtt-broker","name":"","broker":"127.0.0.1","port":"1883","clientid":"","autoConnect":true,"usetls":false,"protocolVersion":"4","keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","birthMsg":{},"closeTopic":"","closeQos":"0","closePayload":"","closeMsg":{},"willTopic":"","willQos":"0","willPayload":"","willMsg":{},"sessionExpiry":""},{"id":"29fba84a.b2af58","type":"mqtt-broker","name":"","broker":"127.0.0.1","port":"1883","clientid":"","autoConnect":true,"usetls":false,"protocolVersion":"4","keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","birthMsg":{},"closeTopic":"","closePayload":"","closeMsg":{},"willTopic":"","willQos":"0","willPayload":"","willMsg":{},"sessionExpiry":""},{"id":"57ff470b.93fdf8","type":"ui_group","name":"Default","tab":"11207769.c31889","order":1,"disp":true,"width":"6","collapse":false},{"id":"11207769.c31889","type":"ui_tab","name":"Home","icon":"dashboard"}]
```
3. Klikněte na tlačítko **Deploy** vpravo nahoře.
4. Přepněte se na záložku **Messages**, pokud vše proběhlo správně, tak byste měli vidět příchozí zprávy z jednotky (push-button)
5. 
Přepněte se na záložku **Dashboard**, pokud vše proběhlo správně, tak byste měli vidět počet zmáčknutí tlačítka a jeho teplotu

:::info

Pozn.:
1. Pro urychlení odeslání dat na tlačítko dýchněte
2. Jednotka měří teplotu a data o teplotě odesílá do systému každých 15 min., a o zmáčknutí okamžitě
3. Jednotka odešle data ihned, pokud dojde mezi dvěma měřeními teploty k nárustu vyššímu než 0,2°C.

:::

### Nastavení funkce ovládání LED pásku

1. Přepněte se na záložku **Functions**
2. Proveďte import **flow**:
 ```json
[{"id":"b0e6a61052f6464e","type":"tab","label":"LED controler","disabled":false,"info":""},{"id":"c150a9bf93daec3d","type":"mqtt out","z":"b0e6a61052f6464e","name":"","topic":"node/power-controller:0/led-strip/-/color/set","qos":"","retain":"","respTopic":"","contentType":"","userProps":"","correl":"","expiry":"","broker":"54516ae2.8f3d14","x":910,"y":120,"wires":[]},{"id":"c1d16ecd5e7996a6","type":"mqtt in","z":"b0e6a61052f6464e","name":"","topic":"node/push-button:0/push-button/-/event-count","qos":"2","datatype":"auto","broker":"54516ae2.8f3d14","nl":false,"rap":false,"inputs":0,"x":200,"y":120,"wires":[["dc7bbeb8ef8e5bea"]]},{"id":"0e2d5607022ff3d2","type":"mqtt in","z":"b0e6a61052f6464e","name":"","topic":"node/push-button:0/thermometer/0:1/temperature","qos":"2","datatype":"auto","broker":"54516ae2.8f3d14","nl":false,"rap":false,"inputs":0,"x":210,"y":200,"wires":[["421ceca3a1e659e6"]]},{"id":"e3fdded3dab459dd","type":"change","z":"b0e6a61052f6464e","name":"Color change","rules":[{"t":"set","p":"payload","pt":"msg","to":"\"#FF0000\"","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":640,"y":200,"wires":[["c150a9bf93daec3d"]]},{"id":"421ceca3a1e659e6","type":"switch","z":"b0e6a61052f6464e","name":"Condition","property":"payload","propertyType":"msg","rules":[{"t":"gt","v":"25","vt":"num"}],"checkall":"true","repair":false,"outputs":1,"x":480,"y":200,"wires":[["e3fdded3dab459dd"]]},{"id":"dc7bbeb8ef8e5bea","type":"change","z":"b0e6a61052f6464e","name":"Color change","rules":[{"t":"set","p":"payload","pt":"msg","to":"\"#0000FF\"","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":640,"y":120,"wires":[["c150a9bf93daec3d"]]},{"id":"54516ae2.8f3d14","type":"mqtt-broker","name":"","broker":"localhost","port":"1883","clientid":"","autoConnect":true,"usetls":false,"protocolVersion":"4","keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","birthMsg":{},"closeTopic":"","closePayload":"","closeMsg":{},"willTopic":"","willQos":"0","willPayload":"","willMsg":{},"sessionExpiry":""}]
```
3. Klikněte na tlačítko **Deploy** vpravo nahoře.
4. Přepněte se na záložku **Messages**, pokud vše proběhlo správně, tak byste měli vidět příchozí zprávy z ovladače (power-controller)
5. Flow je nyní nastavena tak, že po překročení teploty nad 25 °C změní barvu LED pásku na červenou a po stisknutí tlačítka se změní barva na modrou.
6. Pokud vše proběhlo správně, tak byste měli měnit barvu LED pásku podle zadané barvy.
   
