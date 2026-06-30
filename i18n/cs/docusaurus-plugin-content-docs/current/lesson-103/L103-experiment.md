---
slug: iot-push-button-experiment
title: Experiment
---
import Image from '@theme/IdealImage';

**Časová dotace**: 10 min. 

## Posíláme stisky IoT tlačítka

### Popis experimentu

Ze stavebnice HARDWARIO si postavíme IoT tlačítko. Zařízení nám umožní odesílat informaci o svém zmáčknutí a dále s touto informací pracovat. 

Komunikace bude probíhat bezdrátově do Radio Dongle zasunutého do USB portu počítače. Počet zmáčknutí budeme zobrazovat v aplikaci HARDWARIO Playground, resp. v dashboardu vložené aplikace Node-RED. 

### Kroky experimentu

1. Postavení tlačítka  
2. Připojení tlačítka k Playgroundu
3. Nastavení funkce zobrazení počtu stisknutí a teploty tlačítka v dashboardu

### Postavení tlačítka

#### Moduly v sestavě:

* Core Module
* Mini Battery Module
* Push Button Module

<div class="container">
  <div class="row">
    <Image img={require('./push-button-canvas.webp')}/>
  </div>
</div>

Postavte si jednotku podle [videonávodu](https://www.youtube.com/watch?v=OCPPKXzCBg0)

### Připojení jednotek do Playgroundu

(Pokud ještě aplikaci nemáte ve svém počítači, tak si ji prosím [stáhněte](https://github.com/hardwario/hardwario-playground/releases) a nainstalujte)

* Zasuňte do USB portu svého počítače **Radio Dongle**
* Otevřete aplikaci Playground a běžte na záložku **Devices**
* Vyberte váš Radio Dongle v nabídce USB zařízení a klikněte na **Connect**
* Klikněte na **Start pairing**
* Vložte do tlačítka baterie a připojte adaptér k ovladači LED pásku

**Nastavení funkce zobrazení počtu zmáčknutí a teploty tlačítka**

* Přepněte se na záložku Functions
* Proveďte import flow:

```json
[{"id":"faaa4c4b.07c8a","type":"tab","label":"IoT tlačítko","disabled":false,"info":""},{"id":"a31fe112.0c3f9","type":"mqtt in","z":"faaa4c4b.07c8a","name":"","topic":"node/push-button:0/push-button/-/event-count","qos":"2","datatype":"auto","broker":"a382db22.fb11e8","x":200,"y":180,"wires":[["17cb0618.68ab3a"]]},{"id":"e3c3adba.98ee8","type":"mqtt in","z":"faaa4c4b.07c8a","name":"","topic":"node/push-button:0/thermometer/0:1/temperature","qos":"2","datatype":"auto","broker":"29fba84a.b2af58","x":210,"y":360,"wires":[["ffc89eb2.03b23"]]},{"id":"ffc89eb2.03b23","type":"ui_text","z":"faaa4c4b.07c8a","group":"57ff470b.93fdf8","order":3,"width":0,"height":0,"name":"","label":"Teplota","format":"{{msg.payload}}°C","layout":"row-spread","x":540,"y":360,"wires":[]},{"id":"17cb0618.68ab3a","type":"ui_text","z":"faaa4c4b.07c8a","group":"57ff470b.93fdf8","order":4,"width":0,"height":0,"name":"","label":"Počet stisků","format":"{{msg.payload}}","layout":"row-spread","x":550,"y":180,"wires":[]},{"id":"a382db22.fb11e8","type":"mqtt-broker","z":"","name":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","closeTopic":"","closeQos":"0","closePayload":"","willTopic":"","willQos":"0","willPayload":""},{"id":"29fba84a.b2af58","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","willTopic":"","willQos":"0","willPayload":""},{"id":"57ff470b.93fdf8","type":"ui_group","z":"","name":"Default","tab":"11207769.c31889","order":1,"disp":true,"width":"6","collapse":false},{"id":"11207769.c31889","type":"ui_tab","z":"","name":"Home","icon":"dashboard"}]
```

* Přepněte se na záložku Messages, pokud vše proběhlo správně, tak byste měli vidět příchozí zprávy z jednotky (push-button)
* Přepněte se na záložku Dashboard, pokud vše proběhlo správně, tak byste měli vidět počet zmáčknutí tlačítka a jeho teplotu

*Pozn.:*  
*1. Pro urychlení odeslání dat na tlačítko dýchněte*  
*2. Jednotka měří teplotu a data o teplotě odesílá do systému každých 15 min., a o zmáčknutí okamžitě*  
*3. Jednotka odešle data ihned, pokud dojde mezi dvěma měřeními teploty k nárustu vyššímu než 0,2°C.*  