---
slug: iot-pulse-monitor-experiment-cs
title: Experiment
---
import Image from '@theme/IdealImage';


**Časová dotace:** 10 min.

## Přenášíme počet impulzů

### Popis experimentu

V rámci experimentu budeme přenášet počet impulzů pomocí **LED** nebo **magnetického senzoru**.


## Kroky experimentu

### 1. Postavení sady Sensor

#### Moduly v sestavě:
- **Core Module**
- **Mini Battery Module**
- **Sensor Module**

<div class="container">
  <div class="row">
    <Image img={require('./modules-canvas.webp')}/>
  </div>
</div>

:::tip

 K Sensor Modulu nezapomeňte připojit váš čítač impulzů podle tohoto obrázku:

:::

<div class="container">
  <div class="row">
    <Image img={require('./counter.avif')}/>
  </div>
</div>

### 2. Nahrání firmware

- Připojte **Core Module** k počítači.
- V aplikaci **Playground** v záložce **Firmware** nahrajte firmware `twr-radio-pulse-counter`.
- Pokud ještě nemáte Playground nainstalovaný, stáhněte a nainstalujte jej.

:::tip

 Podívejte se na [podrobný návod nahrání firmware do Core Module.](https://www.hardwario.com/cs/education/tutorials/jak-nahrat-firmware/)

:::

### 3. Připojení jednotek do Playgroundu

1. Zasuňte do USB portu počítače **Radio Dongle**.
2. Otevřete aplikaci **Playground** a běžte na záložku **Devices**.
3. Vyberte svůj Radio Dongle ze seznamu USB zařízení a klikněte na **Connect**.
4. Klikněte na **Start pairing**.
5. Vložte do sady Sensor baterie – úspěšné spárování se projeví zobrazením zařízení s názvem `wireless-pulse-counter:0`.

---

### 4. Nastavení funkce zobrazení počtu impulzů

1. Přepněte se na záložku **Functions**.
2. Proveďte **import flow**:


```json
[{"id":"aadabfa1408a1d6f","type":"tab","label":"Pulse counter","disabled":false,"info":"","env":[]},{"id":"40233bb3597a5655","type":"mqtt in","z":"aadabfa1408a1d6f","name":"","topic":"node/wireless-pulse-counter:0/pulse-counter/a/count","qos":"2","datatype":"auto","broker":"29fba84a.b2af58","nl":false,"rap":true,"rh":0,"inputs":0,"x":350,"y":180,"wires":[["4ad69dcbbbb6be2b","c4329fa59059d5ce","655a178d4a5198ef"]]},{"id":"4ad69dcbbbb6be2b","type":"ui_text","z":"aadabfa1408a1d6f","group":"57ff470b.93fdf8","order":22,"width":0,"height":0,"name":"","label":"Pulses","format":"{{msg.payload}}","layout":"row-spread","className":"","x":720,"y":120,"wires":[]},{"id":"c4329fa59059d5ce","type":"ui_chart","z":"aadabfa1408a1d6f","name":"","group":"57ff470b.93fdf8","order":23,"width":0,"height":0,"label":"Pulses in time","chartType":"line","legend":"false","xformat":"HH:mm:ss","interpolate":"linear","nodata":"","dot":false,"ymin":"","ymax":"","removeOlder":1,"removeOlderPoints":"","removeOlderUnit":"3600","cutout":0,"useOneColor":false,"useUTC":false,"colors":["#1f77b4","#aec7e8","#ff7f0e","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5"],"outputs":1,"useDifferentColor":false,"className":"","x":760,"y":180,"wires":[[]]},{"id":"655a178d4a5198ef","type":"switch","z":"aadabfa1408a1d6f","name":"","property":"payload","propertyType":"msg","rules":[{"t":"eq","v":"30","vt":"str"},{"t":"eq","v":"70","vt":"str"}],"checkall":"true","repair":false,"outputs":2,"x":670,"y":260,"wires":[["58553e8bbf45d8c7"],["9c5daf0013adf09a"]]},{"id":"58553e8bbf45d8c7","type":"change","z":"aadabfa1408a1d6f","name":"","rules":[{"t":"set","p":"payload","pt":"msg","to":"30 ticks detected","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":840,"y":240,"wires":[["bda64a03ae5bd8dd"]]},{"id":"bda64a03ae5bd8dd","type":"ui_toast","z":"aadabfa1408a1d6f","position":"dialog","displayTime":"3","highlight":"","sendall":true,"outputs":1,"ok":"OK","cancel":"","raw":false,"className":"","topic":"","name":"","x":1050,"y":260,"wires":[[]]},{"id":"9c5daf0013adf09a","type":"change","z":"aadabfa1408a1d6f","name":"","rules":[{"t":"set","p":"payload","pt":"msg","to":"70 ticks detected","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":840,"y":280,"wires":[["bda64a03ae5bd8dd"]]},{"id":"29fba84a.b2af58","type":"mqtt-broker","name":"","broker":"127.0.0.1","port":"1883","clientid":"","autoConnect":true,"usetls":false,"protocolVersion":"4","keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","birthMsg":{},"closeTopic":"","closePayload":"","closeMsg":{},"willTopic":"","willQos":"0","willPayload":"","willMsg":{},"sessionExpiry":""},{"id":"57ff470b.93fdf8","type":"ui_group","name":"Default","tab":"11207769.c31889","order":1,"disp":true,"width":"6","collapse":false},{"id":"11207769.c31889","type":"ui_tab","name":"Home","icon":"dashboard"}]
```
<div class="container">
  <div class="row">
    <Image img={require('./stem-diagram.png')}/>
  </div>
</div>

3. Přepněte se na záložku **Messages** – pokud vše proběhlo správně, uvidíte příchozí zprávy ze sady Sensor.
4. Přepněte se na záložku **Dashboard** – zobrazí se graf s počtem impulzů.

:::info

 Flow obsahuje také **automatické upozornění**, pokud počet impulzů dosáhne **30** nebo **70**.

:::

 <div class="container">
  <div class="row">
    <Image img={require('./stem-result.webp')}/>
  </div>
</div>







