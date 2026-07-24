---
slug: radio-voc-sensor
title: Bezdrátový VOC senzor
---
import Image from '@theme/IdealImage';

# Bezdrátový VOC senzor

Tento dokument vás provede projektem **Bezdrátový VOC senzor**. Budete moci zobrazit přehled s hodnotami TVOC, teploty a vlhkosti v **Node-RED**.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-voc-sensor/radio-voc-sensor-project-image.webp')} alt="Radio VOC sensor: minimální a plná sestava vedle dashboardu s budíky TVOC a teploty"/>
  </div>
</div>

## Blokové schéma

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-voc-sensor/radio-voc-sensor-block-diagram.webp')} alt="Blokové schéma: sestava senzoru spojená sub-GHz rádiem s Radio Donglem a bránou s MQTT a Node-RED"/>
  </div>
</div>

### Požadavky <a id="requirements"></a>

* Nezbytné komponenty

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
      Více informací naleznete v dokumentu [**Quick Start Guide**](https://docs.hardwario.com/tower/firmware-development/firmware-quick-start/).

    * **Raspberry Pi** s distribucí **HARDWARIO Raspbian**<br></br>
      Více informací naleznete v dokumentu [**Instalace na Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/).

    * Nainstalovaný **HARDWARIO Toolchain**<br></br>
      Více informací naleznete v dokumentu [**Nastavení Toolchain**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain).

### Nahrání firmwaru<a id="firmware-upload"></a>

V tomto postupu použijeme **HARDWARIO Playground** pro nahrání firmwaru do **Core Module**.

#### Krok 1: Připojte Micro USB kabel k Core Module a k vašemu počítači

#### Krok 2: Nahrání firmwaru

Spusťte HARDWARIO Playground. Na záložce Firmware vyberte a nahrajte firmware `bcf-radio-voc-sensor` do **Core Module**:

:::warning

**Nahrávání firmwaru do Core Module R1 a R2**
Pro rozdíly při nahrávání do staršího **Core Module 1** a novějšího **Core Module 2** si prosím přečtěte dokument **Srovnání Core Module R1 a R2** v sekci **Hardware**.

:::

#### Krok 3: Odpojte kabel Micro USB z Core Modulu a vašeho počítače

:::success

V tomto okamžiku je váš firmware úspěšně nahrán.

:::

## Sestavení hardwaru

### Minimální hardware

Zde je minimální sestava pro VOC senzor.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-voc-sensor/radio-voc-sensor-voc-minimal.webp')} alt="Minimální sestava: Core Module a VOC Tag zapojené do Battery Module"/>
  </div>
</div>

#### Krok 1: Začněte s Battery Module

:::warning

Ujistěte se, že v **Battery Module** zatím nejsou vložené baterie.

:::

#### Krok 2: Připojte VOC Tag na horní část Battery Module

#### Krok 3: Připojte Core Module na horní část Battery Module

### Kompletní hardware

Firmware také podporuje [**LCD Module**](https://www.hardwario.store/cz/p/lcd-module-bg), [**Tag Module**](https://www.hardwario.store/cz/p/tag-module), [**Temperature Tag**](https://www.hardwario.store/cz/p/temperature-tag) a [**Humidity Tag**](https://www.hardwario.store/cz/p/humidity-tag). Všechny hodnoty jsou zobrazovány pomocí přehledného grafu na displeji a zároveň jsou odesílány přes rádiovou síť HARDWARIO do [**Radio Dongle**](https://www.hardwario.store/cz/p/radio-dongle).

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-voc-sensor/radio-voc-sensor-voc-full.webp')} alt="Plná sestava: LCD Module na Core Module s Tag Module a Tagy teploty, vlhkosti a VOC na Battery Module"/>
  </div>
</div>

#### Krok 1: Začněte s Battery Modulem

:::warning

Ujistěte se, že **Battery Module** ještě nemá vložené baterie.

:::

#### Krok 2: Připojte VOC Tag na vrchní část Battery Module.

#### Krok 3: Připojte Tag Module na vrchní část Battery Module.

#### Krok 4: Zapojte Temperature Tag a Humidity Tag do konektoru na Tag Module.

#### Krok 5: Zapojte Core Module na vrchní stranu TAG Module.

#### Krok 6: Zapojte LCD Module na vrchní stranu Core Module.

## Playground Bootstrap

:::danger

Pokud používáte nový **HARDWARIO Playground**, pak použijte záložku **Functions** místo [**http://localhost:1880/**](http://localhost:1880/). Proces párování nyní probíhá v záložce **Devices**. Pro otestování komunikace použijte záložku **Messages**.

:::

#### Krok 1: Otevřete Node-RED ve svém webovém prohlížeči.

[http://localhost:1880/](http://localhost:1880/)

#### Krok 2: Měli byste vidět prázdné pracovní prostředí s názvem Flow 1.

#### Krok 3: Vložte následující úryvek do flow (pomocí Menu >> Import) a klikněte na záložku Flow 1:

```text
[{"id":"2fc604fc.3b6abc","type":"inject","z":"dfc861b.b2a02a","name":"List all gateways","topic":"gateway/all/info/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":460,"wires":[["a2c10833.24d5d8"]]},{"id":"1e4502b8.2f63fd","type":"inject","z":"dfc861b.b2a02a","name":"Start node pairing","topic":"gateway/usb-dongle/pairing-mode/start","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":570,"y":580,"wires":[["795ff5a7.8e266c"]]},{"id":"3d844ce2.932864","type":"inject","z":"dfc861b.b2a02a","name":"Stop node pairing","topic":"gateway/usb-dongle/pairing-mode/stop","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":640,"wires":[["5967c452.c838bc"]]},{"id":"f202b253.2705b","type":"inject","z":"dfc861b.b2a02a","name":"List paired nodes","topic":"gateway/usb-dongle/nodes/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":520,"wires":[["f0aca138.0b2c3"]]},{"id":"349f02fd.890f6e","type":"inject","z":"dfc861b.b2a02a","name":"Unpair all nodes","topic":"gateway/usb-dongle/nodes/purge","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":700,"wires":[["2f1c5bb6.53d6f4"]]},{"id":"cf61d75d.4ad8f8","type":"mqtt in","z":"dfc861b.b2a02a","name":"","topic":"#","qos":"2","broker":"67b8de4a.029d3","x":530,"y":400,"wires":[["a5cb0658.f5d658"]]},{"id":"a5cb0658.f5d658","type":"debug","z":"dfc861b.b2a02a","name":"","active":true,"console":"false","complete":"false","x":790,"y":400,"wires":[]},{"id":"a2c10833.24d5d8","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":460,"wires":[]},{"id":"f0aca138.0b2c3","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":520,"wires":[]},{"id":"795ff5a7.8e266c","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":580,"wires":[]},{"id":"5967c452.c838bc","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":640,"wires":[]},{"id":"2f1c5bb6.53d6f4","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":700,"wires":[]},{"id":"67b8de4a.029d3","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"717f7c18.ba0a24","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```

Bude to vypadat takto:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-voc-sensor/radio-voc-sensor-node-red-gw-controls.webp')} alt="Importovaný flow v Node-RED s inject tlačítky pro příkazy brány, každé propojené s výstupním MQTT uzlem"/>
  </div>
</div><br></br>

:::info

Tento útržek poskytuje ovládací tlačítka pro příkazy bráně/rádiu. Tyto příkazy jsou odesílány prostřednictvím protokolu MQTT.

:::

#### Krok 4: Nasazení flow pomocí tlačítka Deploy v pravém horním rohu.

#### Krok 5: Otevřete záložku debug:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-voc-sensor/radio-voc-sensor-node-red-gw-debug.webp')} alt="Node-RED se zvýrazněnou záložkou debug v pravém panelu"/>
  </div>
</div><br></br>

:::info

V záložce **debug** budete moci vidět všechny MQTT zprávy.

:::

#### Krok 6: Klikněte na tlačítko List all gateways. V záložce debug byste měli vidět odpověď podobnou této:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-voc-sensor/radio-voc-sensor-node-red-gw-list.webp')} alt="Záložka debug v Node-RED s odpovědí brány: název firmwaru a id po kliknutí na List all gateways"/>
  </div>
</div><br></br>

:::success

V tomto bodě máte funkční **Node-RED**, **MQTT**, **HARDWARIO Radio Dongle** a **HARDWARIO Gateway**.

:::

## Párování

V této části vytvoříme rádiové spojení mezi **Radio Donglem** a **Radio VOC senzorem**.

Postupujte podle těchto kroků v **Node-RED**:

#### Krok 1: Klikněte na tlačítko Start node pairing

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-voc-sensor/radio-voc-sensor-node-red-gw-pair-start.webp')} alt="Node-RED se zvýrazněným tlačítkem Start node pairing a zprávou o zahájení párování v záložce debug"/>
  </div>
</div>

#### Krok 2: Přijměte data

Vložte baterie do **Radio VOC senzoru**, aby se odeslala žádost o spárování (měli byste také vidět červenou LED diodu na **Core Modulu**, která bude přibližně 2 sekundy svítit). Pokud v Node-RED přepnete na záložku **debug** vpravo, uvidíte podobnou odpověď o spárování.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-voc-sensor/radio-voc-sensor-voc-sensor-paired.webp')} alt="Záložka debug v Node-RED s odpovědí párování: připojení uzlu, firmware wireless-voc-sensor a první hodnoty"/>
  </div>
</div>

#### Krok 3: Klikněte na tlačítko Stop node pairing

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-voc-sensor/radio-voc-sensor-node-red-gw-pair-stop.webp')} alt="Node-RED se zvýrazněným tlačítkem Stop node pairing a zprávou o ukončení párování v záložce debug"/>
  </div>
</div><br></br>

:::success

V tomto bodě máte navázané rádiové spojení mezi uzlem (**Radio VOC senzor**) a bránou (**Radio Dongle**).

:::

## Test komunikace

Postupujte podle těchto kroků v **Node-RED**:

#### Krok 1: Přepněte se na záložku debug vpravo

#### Krok 2: Přijměte data

:::info

Trvá až jednu minutu, než **VOC Tag** začne odesílat správné hodnoty. Jakmile v záložce **debug** v Node-RED uvidíte jiné hodnoty než nula (0), můžete zkusit dýchat na VOC senzor – a uvidíte výrazně vyšší hodnoty.

:::

Měli byste poté vidět podobné zprávy:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-voc-sensor/radio-voc-sensor-voc-messages.webp')} alt="Zprávy v záložce debug s hodnotami TVOC, teploty a relativní vlhkosti ze senzorových témat"/>
  </div>
</div><br></br>

:::success

V tomto bodě máte ověřenou rádiovou komunikaci.

:::

## Nastavení Dashboardu

Vytvořme Dashboard v Node-RED, který bude zobrazovat tři měřáky s hodnotami ze senzorů.

Můžete vložit následující snippet do flow (pomocí **Menu >> Import**) místo níže uvedených kroků. Nezapomeňte ale upravit MQTT topic podle adresy vašeho radio node zařízení.

```text
[{"id":"7018e288.6b887c","type":"ui_gauge","z":"ddfb24d2.43ab28","name":"","group":"d493d306.06098","order":0,"width":0,"height":0,"gtype":"gage","title":"Gauge","label":"units","format":"{{value}}","min":0,"max":"200","colors":["#00b500","#e6e600","#ca3838"],"seg1":"","seg2":"","x":610,"y":300,"wires":[]},{"id":"c6695f10.80722","type":"ui_gauge","z":"ddfb24d2.43ab28","name":"","group":"d493d306.06098","order":0,"width":0,"height":0,"gtype":"gage","title":"Gauge","label":"units","format":"{{value}}","min":"10","max":"30","colors":["#00b500","#e6e600","#ca3838"],"seg1":"","seg2":"","x":610,"y":360,"wires":[]},{"id":"70a87b55.8df274","type":"ui_gauge","z":"ddfb24d2.43ab28","name":"","group":"d493d306.06098","order":0,"width":0,"height":0,"gtype":"gage","title":"Gauge","label":"units","format":"{{value}}","min":0,"max":"100","colors":["#00b500","#e6e600","#ca3838"],"seg1":"","seg2":"","x":610,"y":420,"wires":[]},{"id":"fbc3fd9a.b2e59","type":"mqtt in","z":"ddfb24d2.43ab28","name":"","topic":"node/836d1983a754/voc-sensor/0:0/tvoc","qos":"2","broker":"83f37d33.4979e","x":220,"y":300,"wires":[["7018e288.6b887c"]]},{"id":"4745398e.bacaf8","type":"mqtt in","z":"ddfb24d2.43ab28","name":"","topic":"node/836d1983a754/hygrometer/0:4/relative-humidity","qos":"2","broker":"83f37d33.4979e","x":260,"y":420,"wires":[["70a87b55.8df274"]]},{"id":"92e3a555.616f58","type":"mqtt in","z":"ddfb24d2.43ab28","name":"","topic":"node/836d1983a754/thermometer/0:0/temperature","qos":"2","broker":"83f37d33.4979e","x":250,"y":360,"wires":[["c6695f10.80722"]]},{"id":"d493d306.06098","type":"ui_group","z":"","name":"Default","tab":"afe7e4c8.941208","disp":true,"width":"6","collapse":false},{"id":"83f37d33.4979e","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"afe7e4c8.941208","type":"ui_tab","z":"","name":"Home","icon":"dashboard"}]
```

#### Krok 1: Vložte tři bloky MQTT input

#### Krok 2: Vložte tři bloky Gauge ze sekce Dashboard. U každého měřidla je potřeba otevřít jeho nastavení a nastavit správnou Skupinu (Group) a hodnoty Rozsahu (Range)

#### Krok 3: Propojte každý blok MQTT input s příslušným blokem Gauge

#### Krok 4: Nastavte správná MQTT témata pro tři bloky MQTT input

#### Krok 5: Nodes by měly vypadat jako na obrázku níže

#### Krok 6: Klikněte na tlačítko Deploy a v záložce dashboard klikněte na malý čtvereček se šipkou, který otevře Dashboard

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-voc-sensor/radio-voc-sensor-node-red-dashboard-deploy.webp')} alt="Tři vstupní MQTT uzly propojené s uzly Gauge, zvýrazněné tlačítko Deploy a ikona otevření dashboardu"/>
  </div>
</div>

## Dashboard

Uvidíte tento dashboard s hodnotami ze senzoru Radio VOC.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-voc-sensor/radio-voc-sensor-node-red-dashboard.webp')} alt="Dashboard Node-RED s budíky TVOC, Temperature a Humidity s aktuálními hodnotami"/>
  </div>
</div><br></br>

Váš projekt je dokončen, gratulujeme!

### Související dokumenty <a id="related-documents"></a>

* [**Instalace na Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/)
* [**Nastavení Toolchain**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain)
* [**Průvodce Toolchain**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain)
