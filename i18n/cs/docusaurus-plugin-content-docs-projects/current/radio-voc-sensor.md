---
slug: radio-voc-sensor
title: Bezdrátový senzor VOC
---
import Image from '@theme/IdealImage';

# Bezdrátový senzor VOC

Tento návod vás provede projektem **Bezdrátový senzor VOC**. V prostředí **Node-RED** pak uvidíte dashboard s hodnotami TVOC, teploty a vlhkosti.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-voc-sensor/radio-voc-sensor-project-image.webp')} alt="Radio VOC sensor: minimální a plná sestava vedle dashboardu s budíky TVOC a teploty"/>
  </div>
</div>

## Blokové schéma

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-voc-sensor/radio-voc-sensor-block-diagram.webp')} alt="Blokové schéma: sestava senzoru spojená sub-GHz rádiem s donglem Radio Dongle a bránou s MQTT a Node-RED"/>
  </div>
</div>

### Požadavky <a id="requirements"></a>

* Potřebné komponenty

  * 1x [**Core Module**](https://www.hardwario.store/cz/p/core-module)
  * 1x [**VOC Tag**](https://www.hardwario.store/cz/p/voc-tag)
  * 1x [**Battery Module**](https://www.hardwario.store/cz/p/battery-module)
  * 1x [**Radio Dongle**](https://www.hardwario.store/cz/p/radio-dongle)
  
* Volitelné komponenty
  * 1x [**LCD Module**](https://www.hardwario.store/cz/p/lcd-module-bg)
  * 1x [**Tag Module**](https://www.hardwario.store/cz/p/tag-module)
  * 1x [**Temperature Tag**](https://www.hardwario.store/cz/p/temperature-tag)
  * 1x [**Humidity Tag**](https://www.hardwario.store/cz/p/humidity-tag)

* Jedna z následujících možností:
    * Nainstalovaný **HARDWARIO Playground** (doporučeno)<br></br>
      Více informací najdete v dokumentu [**Rychlý start s firmwarem**](https://docs.hardwario.com/tower/firmware-development/firmware-quick-start/).

    * **Raspberry Pi** s distribucí **HARDWARIO Raspbian**<br></br>
      Více informací najdete v dokumentu [**Instalace na Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/).

    * Nainstalovaný **HARDWARIO Toolchain**<br></br>
      Více informací najdete v dokumentu [**Nastavení toolchainu**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain).

### Nahrání firmwaru <a id="firmware-upload"></a>

Firmware nahrajete do modulu **Core Module** v aplikaci **HARDWARIO Playground**.

#### Krok 1: Připojte modul **Core Module** kabelem Micro USB k počítači

#### Krok 2: Nahrajte firmware

Spusťte HARDWARIO Playground, na záložce Firmware vyberte firmware `bcf-radio-voc-sensor` a nahrajte ho do modulu **Core Module**:

:::warning

**Nahrávání firmwaru do Core Module R1 a R2**
Rozdíly v nahrávání firmwaru do staršího **Core Module 1** a novějšího **Core Module 2** popisuje **srovnání Core Module R1 a R2** v sekci **Hardware**.

:::

#### Krok 3: Odpojte kabel Micro USB od modulu **Core Module** a od počítače

:::success

Firmware je úspěšně nahraný.

:::

## Sestavení hardwaru

### Minimální hardware

Takto vypadá minimální sestava senzoru VOC.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-voc-sensor/radio-voc-sensor-voc-minimal.webp')} alt="Minimální sestava: Core Module a VOC Tag zapojené do Battery Module"/>
  </div>
</div>

#### Krok 1: Začněte modulem **Battery Module**

:::warning

Zkontrolujte, že v modulu **Battery Module** zatím nejsou vložené baterie.

:::

#### Krok 2: Nasaďte **VOC Tag** na **Battery Module**

#### Krok 3: Nasaďte **Core Module** na **Battery Module**

### Kompletní hardware

Firmware také podporuje [**LCD Module**](https://www.hardwario.store/cz/p/lcd-module-bg), [**Tag Module**](https://www.hardwario.store/cz/p/tag-module), [**Temperature Tag**](https://www.hardwario.store/cz/p/temperature-tag) a [**Humidity Tag**](https://www.hardwario.store/cz/p/humidity-tag). Všechny hodnoty se zobrazují v přehledném grafu na displeji a zároveň se odesílají rádiovou sítí HARDWARIO do donglu [**Radio Dongle**](https://www.hardwario.store/cz/p/radio-dongle).

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-voc-sensor/radio-voc-sensor-voc-full.webp')} alt="Plná sestava: LCD Module na Core Module s Tag Module a tagy teploty, vlhkosti a VOC na Battery Module"/>
  </div>
</div>

#### Krok 1: Začněte modulem **Battery Module**

:::warning

Zkontrolujte, že v modulu **Battery Module** ještě nejsou vložené baterie.

:::

#### Krok 2: Nasaďte **VOC Tag** na **Battery Module**

#### Krok 3: Nasaďte **Tag Module** na **Battery Module**

#### Krok 4: Zapojte **Temperature Tag** a **Humidity Tag** do zásuvky na modulu **Tag Module**

#### Krok 5: Nasaďte **Core Module** na **Tag Module**

#### Krok 6: Nasaďte **LCD Module** na **Core Module**

## Příprava Playgroundu

:::danger

Pokud používáte nový **HARDWARIO Playground**, použijte místo adresy [**http://localhost:1880/**](http://localhost:1880/) záložku **Functions**. Párování teď probíhá na záložce **Devices** a komunikaci otestujete na záložce **Messages**.

:::

#### Krok 1: Otevřete **Node-RED** ve webovém prohlížeči

[http://localhost:1880/](http://localhost:1880/)

#### Krok 2: Měli byste vidět prázdnou pracovní plochu **Flow 1**

#### Krok 3: Vložte do flow následující úryvek (pomocí **Menu >> Import**) a klikněte na záložku **Flow 1**:

```text
[{"id":"2fc604fc.3b6abc","type":"inject","z":"dfc861b.b2a02a","name":"List all gateways","topic":"gateway/all/info/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":460,"wires":[["a2c10833.24d5d8"]]},{"id":"1e4502b8.2f63fd","type":"inject","z":"dfc861b.b2a02a","name":"Start node pairing","topic":"gateway/usb-dongle/pairing-mode/start","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":570,"y":580,"wires":[["795ff5a7.8e266c"]]},{"id":"3d844ce2.932864","type":"inject","z":"dfc861b.b2a02a","name":"Stop node pairing","topic":"gateway/usb-dongle/pairing-mode/stop","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":640,"wires":[["5967c452.c838bc"]]},{"id":"f202b253.2705b","type":"inject","z":"dfc861b.b2a02a","name":"List paired nodes","topic":"gateway/usb-dongle/nodes/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":520,"wires":[["f0aca138.0b2c3"]]},{"id":"349f02fd.890f6e","type":"inject","z":"dfc861b.b2a02a","name":"Unpair all nodes","topic":"gateway/usb-dongle/nodes/purge","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":700,"wires":[["2f1c5bb6.53d6f4"]]},{"id":"cf61d75d.4ad8f8","type":"mqtt in","z":"dfc861b.b2a02a","name":"","topic":"#","qos":"2","broker":"67b8de4a.029d3","x":530,"y":400,"wires":[["a5cb0658.f5d658"]]},{"id":"a5cb0658.f5d658","type":"debug","z":"dfc861b.b2a02a","name":"","active":true,"console":"false","complete":"false","x":790,"y":400,"wires":[]},{"id":"a2c10833.24d5d8","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":460,"wires":[]},{"id":"f0aca138.0b2c3","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":520,"wires":[]},{"id":"795ff5a7.8e266c","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":580,"wires":[]},{"id":"5967c452.c838bc","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":640,"wires":[]},{"id":"2f1c5bb6.53d6f4","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":700,"wires":[]},{"id":"67b8de4a.029d3","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"717f7c18.ba0a24","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```

Bude to vypadat takto:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-voc-sensor/radio-voc-sensor-node-red-gw-controls.webp')} alt="Importovaný flow v Node-RED s inject tlačítky pro příkazy brány, každé propojené s výstupním uzlem MQTT"/>
  </div>
</div><br></br>

:::info

Úryvek přidá tlačítka pro příkazy brány a rádia. Příkazy se odesílají protokolem MQTT.

:::

#### Krok 4: Nasaďte flow tlačítkem **Deploy** v pravém horním rohu

#### Krok 5: Otevřete záložku **debug**:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-voc-sensor/radio-voc-sensor-node-red-gw-debug.webp')} alt="Node-RED se zvýrazněnou záložkou debug v pravém panelu"/>
  </div>
</div><br></br>

:::info

Na záložce **debug** uvidíte všechny zprávy MQTT.

:::

#### Krok 6: Klikněte na tlačítko **List all gateways**. Na záložce **debug** byste měli vidět podobnou odpověď

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-voc-sensor/radio-voc-sensor-node-red-gw-list.webp')} alt="Záložka debug v Node-RED s odpovědí brány: název firmwaru a id po kliknutí na List all gateways"/>
  </div>
</div><br></br>

:::success

Teď máte funkční **Node-RED**, **MQTT**, **HARDWARIO Radio Dongle** a **HARDWARIO Gateway**.

:::

## Rádiové párování

V této části navážeme rádiové spojení mezi **Radio Dongle** a sestavou **Radio VOC sensor**.

V prostředí **Node-RED** postupujte takto:

#### Krok 1: Klikněte na tlačítko **Start node pairing**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-voc-sensor/radio-voc-sensor-node-red-gw-pair-start.webp')} alt="Node-RED se zvýrazněným tlačítkem Start node pairing a zprávou o zahájení párování v záložce debug"/>
  </div>
</div>

#### Krok 2: Zapněte sestavu

Vložte baterie do sestavy **Radio VOC sensor**, čímž odešlete požadavek na párování (červená LED na modulu **Core Module** by se také měla asi na 2 sekundy rozsvítit). Když v Node-RED přepnete na záložku **debug** vpravo, uvidíte podobnou odpověď na párování.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-voc-sensor/radio-voc-sensor-voc-sensor-paired.webp')} alt="Záložka debug v Node-RED s odpovědí párování: připojení uzlu, firmware wireless-voc-sensor a první hodnoty"/>
  </div>
</div>

#### Krok 3: Klikněte na tlačítko **Stop node pairing**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-voc-sensor/radio-voc-sensor-node-red-gw-pair-stop.webp')} alt="Node-RED se zvýrazněným tlačítkem Stop node pairing a zprávou o ukončení párování v záložce debug"/>
  </div>
</div><br></br>

:::success

Teď máte navázané rádiové spojení mezi uzlem (**Radio VOC sensor**) a bránou (**Radio Dongle**).

:::

## Test komunikace

V prostředí **Node-RED** postupujte takto:

#### Krok 1: Přepněte se na záložku **debug** vpravo

#### Krok 2: Sledujte příchozí data

Než **VOC Tag** začne posílat správné hodnoty, může to trvat až minutu. Jakmile na záložce **debug** v Node-RED uvidíte jiné hodnoty než nula (0), zkuste na senzor VOC dýchnout a uvidíte výrazně vyšší hodnoty.

Pak byste měli vidět podobné zprávy:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-voc-sensor/radio-voc-sensor-voc-messages.webp')} alt="Zprávy v záložce debug s hodnotami TVOC, teploty a relativní vlhkosti ze senzorových topiců"/>
  </div>
</div><br></br>

:::success

Teď máte ověřenou rádiovou komunikaci.

:::

## Nastavení dashboardu

Teď v Node-RED vytvoříme dashboard se třemi budíky, které zobrazí hodnoty ze senzorů.

Místo následujících kroků můžete do flow vložit tento úryvek (pomocí **Menu >> Import**). Topic MQTT ale musíte upravit podle adresy svého rádiového uzlu.

```text
[{"id":"7018e288.6b887c","type":"ui_gauge","z":"ddfb24d2.43ab28","name":"","group":"d493d306.06098","order":0,"width":0,"height":0,"gtype":"gage","title":"Gauge","label":"units","format":"{{value}}","min":0,"max":"200","colors":["#00b500","#e6e600","#ca3838"],"seg1":"","seg2":"","x":610,"y":300,"wires":[]},{"id":"c6695f10.80722","type":"ui_gauge","z":"ddfb24d2.43ab28","name":"","group":"d493d306.06098","order":0,"width":0,"height":0,"gtype":"gage","title":"Gauge","label":"units","format":"{{value}}","min":"10","max":"30","colors":["#00b500","#e6e600","#ca3838"],"seg1":"","seg2":"","x":610,"y":360,"wires":[]},{"id":"70a87b55.8df274","type":"ui_gauge","z":"ddfb24d2.43ab28","name":"","group":"d493d306.06098","order":0,"width":0,"height":0,"gtype":"gage","title":"Gauge","label":"units","format":"{{value}}","min":0,"max":"100","colors":["#00b500","#e6e600","#ca3838"],"seg1":"","seg2":"","x":610,"y":420,"wires":[]},{"id":"fbc3fd9a.b2e59","type":"mqtt in","z":"ddfb24d2.43ab28","name":"","topic":"node/836d1983a754/voc-sensor/0:0/tvoc","qos":"2","broker":"83f37d33.4979e","x":220,"y":300,"wires":[["7018e288.6b887c"]]},{"id":"4745398e.bacaf8","type":"mqtt in","z":"ddfb24d2.43ab28","name":"","topic":"node/836d1983a754/hygrometer/0:4/relative-humidity","qos":"2","broker":"83f37d33.4979e","x":260,"y":420,"wires":[["70a87b55.8df274"]]},{"id":"92e3a555.616f58","type":"mqtt in","z":"ddfb24d2.43ab28","name":"","topic":"node/836d1983a754/thermometer/0:0/temperature","qos":"2","broker":"83f37d33.4979e","x":250,"y":360,"wires":[["c6695f10.80722"]]},{"id":"d493d306.06098","type":"ui_group","z":"","name":"Default","tab":"afe7e4c8.941208","disp":true,"width":"6","collapse":false},{"id":"83f37d33.4979e","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"afe7e4c8.941208","type":"ui_tab","z":"","name":"Home","icon":"dashboard"}]
```

#### Krok 1: Vložte tři uzly **MQTT input**

#### Krok 2: Ze sekce **Dashboard** vložte tři uzly **Gauge**. U každého otevřete nastavení a vyplňte správné hodnoty **Group** a **Range**

#### Krok 3: Každý uzel **MQTT input** propojte s jedním uzlem **Gauge**

#### Krok 4: Ve všech třech uzlech **MQTT input** nastavte správné topicy MQTT

#### Krok 5: Uzly by měly vypadat jako na obrázku níže

#### Krok 6: Klikněte na **Deploy** a na záložce **dashboard** klikněte na **malý čtvereček se šipkou**, který otevře dashboard

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-voc-sensor/radio-voc-sensor-node-red-dashboard-deploy.webp')} alt="Tři vstupní uzly MQTT propojené s uzly Gauge, zvýrazněné tlačítko Deploy a ikona otevření dashboardu"/>
  </div>
</div>

## Dashboard

Uvidíte tento dashboard s hodnotami ze sestavy Radio VOC sensor.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-voc-sensor/radio-voc-sensor-node-red-dashboard.webp')} alt="Dashboard Node-RED s budíky TVOC, Temperature a Humidity s aktuálními hodnotami"/>
  </div>
</div><br></br>

Projekt je hotový, gratulujeme!

### Související dokumenty <a id="related-documents"></a>

* [**Instalace na Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/)
* [**Nastavení toolchainu**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain)
* [**Průvodce toolchainem**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain)
