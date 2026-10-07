---
slug: iot-push-button-experiment
title: Experiment
title_meta: "Experiment (L103: IoT tlačítko)"
---
import Image from '@theme/IdealImage';

**Časová dotace**: 10 min. 

## Posíláme stisky IoT tlačítka

### Popis experimentu

Ze stavebnice HARDWARIO si postavíme IoT tlačítko. Tlačítko bude odesílat informaci o každém stisku a my s ní budeme dál pracovat. 

Tlačítko bude komunikovat bezdrátově s Radio Dongle zasunutým do USB portu počítače. Počet stisků zobrazíme v aplikaci HARDWARIO Playground, přesněji na dashboardu prostředí Node-RED, které je v ní vestavěné. 

### Kroky experimentu

1. Postavení tlačítka  
2. Připojení tlačítka k Playgroundu
3. Nastavení zobrazení počtu stisků a teploty tlačítka na dashboardu

### Postavení tlačítka

#### Moduly v sestavě:

* Core Module
* Mini Battery Module
* Push Button Module

<div class="container">
  <div class="row">
    <Image img={require('./push-button-canvas.webp')} alt="Díly IoT tlačítka: Core Module, Mini Battery Module s bateriemi, Push Button Module a tištěná krabička"/>
  </div>
</div>

Postavte si jednotku podle [videonávodu](https://www.youtube.com/watch?v=OCPPKXzCBg0)

### Připojení jednotek do Playgroundu

(Pokud aplikaci ještě nemáte v počítači, [stáhněte](https://github.com/hardwario/hardwario-playground/releases) si ji a nainstalujte.)

* Zasuňte **Radio Dongle** do USB portu počítače
* Otevřete aplikaci Playground a přejděte na záložku **Devices**
* Vyberte svůj Radio Dongle v nabídce USB zařízení a klikněte na **Connect**
* Klikněte na **Start pairing**
* Vložte do tlačítka baterie

**Nastavení zobrazení počtu stisků a teploty tlačítka**

* Přepněte se na záložku **Functions**
* Importujte tento flow:

```json
[{"id":"faaa4c4b.07c8a","type":"tab","label":"IoT tlačítko","disabled":false,"info":""},{"id":"a31fe112.0c3f9","type":"mqtt in","z":"faaa4c4b.07c8a","name":"","topic":"node/push-button:0/push-button/-/event-count","qos":"2","datatype":"auto","broker":"a382db22.fb11e8","x":200,"y":180,"wires":[["17cb0618.68ab3a"]]},{"id":"e3c3adba.98ee8","type":"mqtt in","z":"faaa4c4b.07c8a","name":"","topic":"node/push-button:0/thermometer/0:1/temperature","qos":"2","datatype":"auto","broker":"29fba84a.b2af58","x":210,"y":360,"wires":[["ffc89eb2.03b23"]]},{"id":"ffc89eb2.03b23","type":"ui_text","z":"faaa4c4b.07c8a","group":"57ff470b.93fdf8","order":3,"width":0,"height":0,"name":"","label":"Teplota","format":"{{msg.payload}}°C","layout":"row-spread","x":540,"y":360,"wires":[]},{"id":"17cb0618.68ab3a","type":"ui_text","z":"faaa4c4b.07c8a","group":"57ff470b.93fdf8","order":4,"width":0,"height":0,"name":"","label":"Počet stisků","format":"{{msg.payload}}","layout":"row-spread","x":550,"y":180,"wires":[]},{"id":"a382db22.fb11e8","type":"mqtt-broker","z":"","name":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","closeTopic":"","closeQos":"0","closePayload":"","willTopic":"","willQos":"0","willPayload":""},{"id":"29fba84a.b2af58","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","willTopic":"","willQos":"0","willPayload":""},{"id":"57ff470b.93fdf8","type":"ui_group","z":"","name":"Default","tab":"11207769.c31889","order":1,"disp":true,"width":"6","collapse":false},{"id":"11207769.c31889","type":"ui_tab","z":"","name":"Home","icon":"dashboard"}]
```

* Změny potvrďte tlačítkem **Deploy**
* Přepněte se na záložku **Messages**. Pokud vše proběhlo správně, uvidíte příchozí zprávy z jednotky (push-button).
* Přepněte se na záložku **Dashboard**. Pokud vše proběhlo správně, uvidíte počet stisků tlačítka a jeho teplotu.

*Pozn.:*  
*1. Chcete-li odeslání dat urychlit, dýchněte na tlačítko.*  
*2. Jednotka měří teplotu a odesílá ji každých 15 minut, stisk tlačítka odešle okamžitě.*  
*3. Pokud se teplota od posledního odeslání změní alespoň o 0,2 °C, jednotka odešle data ihned.*  