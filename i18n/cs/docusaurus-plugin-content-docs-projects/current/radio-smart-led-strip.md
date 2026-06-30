---
slug: radio-smart-led-strip
title: Bezdrátový chytrý LED pásek
---
import Image from '@theme/IdealImage';

# Bezdrátový chytrý LED pásek

Tento dokument vás provede projektem **Bezdrátový chytrý LED pásek**. Budete moci ovládat svůj LED pásek pomocí **Node-RED** a **Blynku** a také řídit napájení zařízení prostřednictvím relé **16 A**.

## Blokové schéma

<div class="container">
  <div class="row">
    <Image  img={require('./img/radio-smart-led-strip/radio-power-controller.png')}
          style={{ backgroundColor: "#fff" }}/>
  </div>
</div>

### Požadavky<a id="requirements"></a>

* Buď [**Sada Control**](https://www.hardwario.store/cz/p/control-set), nebo jednotlivé komponenty:

  * 1x [**Cover Module**](https://www.hardwario.store/cz/p/cover-module)
  * 1x [**Core Module**](https://www.hardwario.store/cz/p/core-module)
  * 1x [**Power Module**](https://www.hardwario.store/cz/p/power-module)
  * 1× [**AC/DC adaptér 5 V/4A**](https://www.hardwario.store/cz/p/ac-dc-adapter) (nebo vyšší proudový limit)
  * 1× 3D tištěná krabička BCE301
  
* Ostatní komponenty:
  * 1× [**Radio Dongle**](https://www.hardwario.store/cz/p/radio-dongle) (není součástí sady)
  * 1× [**RGB nebo RGBW digitální LED pásek**](https://www.hardwario.store/cz/led-strips) (není součástí sady)
  * [**Micro USB kabel**](https://www.hardwario.store/cz/p/usb2-0-cable-am-b) (není součástí sady)
  
* Jedna z následujících možností:
  
  * Nainstalovyný **HARDWARIO Playground** \(doporučeno\)<br></br>
    Více informací naleznete v dokumentu [**Quick Start Guide**](https://docs.hardwario.com/tower/firmware-development/firmware-quick-start/) document.
  * **Raspberry Pi** s distribucí **HARDWARIO Raspbian**<br></br>
    Více informací najdete v dokumentu [**Instalace na Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/).
  * Nainstalovaný **HARDWARIO Firmware Tool**<br></br>
    Více informací najdete v dokumentu [**Nastavení Toolchain**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain).

### Nahrání firmwaru

V tomto postupu použijeme **HARDWARIO Playground** k nahrání firmwaru do **Core Module**.

#### Krok 1: Připojte Micro USB kabel k **Core Module** a počítači

#### Krok 2: Nahrajte firmware

Spusťte HARDWARIO Playground. Na záložce **Firmware** vyberte a nahrajte firmware `bcf-radio-power-controller` do **Core Module**:

Pokud používáte LED pásek s **144 RGBW LED diodami**:

```text
bcf-radio-power-controller-rgbw144
```

Pokud váš LED pásek má **150 RGB LED diod**:

```text
bcf-radio-power-controller-rgb150
```

Pokud váš LED pásek má **72 RGBW LED diod**:

```text
bcf-radio-power-controller-rgbw72
```

:::warning

**Nahrávání firmwaru pro Core Module R1 & R2**
Pro rozdíly mezi starší verzí **Core Module 1** a novější verzí **Core Module 2** si prosím přečtěte dokument **Porovnání Core Module R1 a R2** v sekci **Hardware**.

:::

#### Krok 3: Odpojte kabel Micro USB od **Core Module** a vašeho počítače.

:::success

V tomto bodě byl firmware úspěšně nahrán.

:::

## Sestavení hardwaru

Podívejte se na krátké video s jednoduchou ukázkou krok za krokem:

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
  <iframe
   src="https://www.youtube.com/embed/idxAoc2q6O0?si=swz-oTJNNCQ7wvX6"    title="YouTube video player"
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
  />
</div>


#### Krok 1: Začněte s Power Modulem.

:::warning

Ujistěte se, že do **Power Modulu** není připojen napájecí adaptér.

:::

#### Krok 2: Připojte **Core Module** na **Power Module**

#### Krok 3: Připojte **Cover Module** na **Core Module**

#### Krok 4: Vložte sestavené moduly do krabičky BCE301 a zajistěte je pomocí O-kroužků

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip-project-thermostat-relay-bc.webp')}/>
  </div>
</div>

#### Krok 5: Připojte LED pásek do šroubovací svorky na pravé straně

#### Krok 6: Připojte 5V DC napájecí adaptér

## Spuštění v Playgroundu

:::danger

Pokud používáte nový **HARDWARIO Playground**, pak místo adresy [**http://localhost:1880/**](http://localhost:1880/) použijte záložku **Functions**. Proces párování nyní probíhá v záložce **Devices**. Pro testování komunikace použijte záložku **Messages**.

:::

#### Krok 1: Otevřete Node-RED ve svém webovém prohlížeči

[http://localhost:1880/](http://localhost:1880/)

#### Krok 2: Měli byste vidět prázdnou pracovní plochu s názvem **Flow 1**

#### Krok 3: Vložení snippetu do toku (přes **Menu >> Import >> Clipboard**) a klikněte na záložku **Flow 1**, poté klikněte na **Deploy** pro nasazení toku.

```text
[{"id":"2fc604fc.3b6abc","type":"inject","z":"dfc861b.b2a02a","name":"List all gateways","topic":"gateway/all/info/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":460,"wires":[["a2c10833.24d5d8"]]},{"id":"1e4502b8.2f63fd","type":"inject","z":"dfc861b.b2a02a","name":"Start node pairing","topic":"gateway/usb-dongle/pairing-mode/start","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":570,"y":580,"wires":[["795ff5a7.8e266c"]]},{"id":"3d844ce2.932864","type":"inject","z":"dfc861b.b2a02a","name":"Stop node pairing","topic":"gateway/usb-dongle/pairing-mode/stop","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":640,"wires":[["5967c452.c838bc"]]},{"id":"f202b253.2705b","type":"inject","z":"dfc861b.b2a02a","name":"List paired nodes","topic":"gateway/usb-dongle/nodes/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":520,"wires":[["f0aca138.0b2c3"]]},{"id":"349f02fd.890f6e","type":"inject","z":"dfc861b.b2a02a","name":"Unpair all nodes","topic":"gateway/usb-dongle/nodes/purge","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":700,"wires":[["2f1c5bb6.53d6f4"]]},{"id":"cf61d75d.4ad8f8","type":"mqtt in","z":"dfc861b.b2a02a","name":"","topic":"#","qos":"2","broker":"67b8de4a.029d3","x":530,"y":400,"wires":[["a5cb0658.f5d658"]]},{"id":"a5cb0658.f5d658","type":"debug","z":"dfc861b.b2a02a","name":"","active":true,"console":"false","complete":"false","x":790,"y":400,"wires":[]},{"id":"a2c10833.24d5d8","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":460,"wires":[]},{"id":"f0aca138.0b2c3","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":520,"wires":[]},{"id":"795ff5a7.8e266c","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":580,"wires":[]},{"id":"5967c452.c838bc","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":640,"wires":[]},{"id":"2f1c5bb6.53d6f4","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":700,"wires":[]},{"id":"67b8de4a.029d3","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"717f7c18.ba0a24","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```

Bude to vypadat takto:

:::info

Tento útržek poskytuje ovládací tlačítka pro příkazy bráně/rádiu. Tyto příkazy jsou odesílány prostřednictvím protokolu MQTT.

:::

#### Krok 4: Nasazení flow pomocí tlačítka **Deploy** v pravém horním rohu

#### Krok 5: Otevřete kartu **debug**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip-node-red-gw-debug.webp')}/>
  </div>
</div><br></br>

:::info

Na kartě **debug** budete moci vidět všechny MQTT zprávy.

:::

#### Krok 6: Klikněte na tlačítko **List all gateways**. V záložce **debug** byste měli vidět odpověď podobnou této.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip-node-red-gw-list.webp')}/>
  </div>
</div><br></br>

:::success

V tomto bodě máte funkční **Node-RED**, **MQTT**, **HARDWARIO Radio Dongle** a **HARDWARIO Gateway**.

:::

## Párování

V této části vytvoříme rádiové spojení mezi **Radio Dongle** a **Radio Smart LED páskem**.

Postupujte podle těchto kroků v **Node-RED**:

#### Krok 1: Klikněte na tlačítko **Start node pairing**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip-node-red-gw-pair-start.webp')}/>
  </div>
</div>

#### Krok 2: Připojte napájecí adaptér do Sady Control, čímž odešlete požadavek na spárování (měli byste také vidět, že červená LED na **Core Modulu** svítí přibližně 2 sekundy)

#### Krok 3: Klikněte na tlačítko **Stop node pairing**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip-node-red-gw-pair-stop.webp')}/>
  </div>
</div><br></br>

:::success

V tomto bodě jste navázali bezdrátové spojení mezi (**Radio Smart LED Strip**) a bránou (**Radio Dongle**).

:::

## Test komunikace

Postupujte podle těchto kroků v **Node-RED**:

#### Krok 1: Přepněte se na kartu debug vpravo

#### Krok 2: Vložte následující úryvek do flow (pomocí **Menu >> Import**) a klikněte na záložku **Flow 1**

```text
[{"id":"c81deb91.e6df28","type":"inject","z":"6115d89b.b435c8","name":"led true","topic":"node/{id}/led/-/state/set","payload":"true","payloadType":"bool","repeat":"","crontab":"","once":false,"onceDelay":"","x":150,"y":40,"wires":[["fc940043.2c94c"]]},{"id":"e865057.ad650f8","type":"inject","z":"6115d89b.b435c8","name":"led false","topic":"node/{id}/led/-/state/set","payload":"false","payloadType":"bool","repeat":"","crontab":"","once":false,"onceDelay":"","x":160,"y":80,"wires":[["fc940043.2c94c"]]},{"id":"f4eda4ad.e61008","type":"inject","z":"6115d89b.b435c8","name":"relay true","topic":"node/{id}/relay/-/state/set","payload":"true","payloadType":"bool","repeat":"","crontab":"","once":false,"onceDelay":"","x":160,"y":180,"wires":[["fc940043.2c94c"]]},{"id":"d068e0ba.850d9","type":"inject","z":"6115d89b.b435c8","name":"relay false","topic":"node/{id}/relay/-/state/set","payload":"false","payloadType":"bool","repeat":"","crontab":"","once":false,"onceDelay":"","x":160,"y":220,"wires":[["fc940043.2c94c"]]},{"id":"4b02e13b.874a7","type":"inject","z":"6115d89b.b435c8","name":"led get","topic":"node/{id}/led/-/state/get","payload":"null","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":"","x":150,"y":120,"wires":[["fc940043.2c94c"]]},{"id":"b8aadc82.6fb1a","type":"inject","z":"6115d89b.b435c8","name":"relay get","topic":"node/{id}/relay/-/state/get","payload":"null","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":"","x":160,"y":260,"wires":[["fc940043.2c94c"]]},{"id":"39fb65a3.c426ea","type":"inject","z":"6115d89b.b435c8","name":"led-strip set color #ff0000","topic":"node/{id}/led-strip/-/color/set","payload":"\"#ff0000\"","payloadType":"str","repeat":"","crontab":"","once":false,"onceDelay":"","x":210,"y":320,"wires":[["fc940043.2c94c"]]},{"id":"c820ce88.576dd","type":"inject","z":"6115d89b.b435c8","name":"led-strip set color #008000","topic":"node/{id}/led-strip/-/color/set","payload":"\"#008000\"","payloadType":"str","repeat":"","crontab":"","once":false,"onceDelay":"","x":210,"y":360,"wires":[["fc940043.2c94c"]]},{"id":"edcffa41.db6bf8","type":"inject","z":"6115d89b.b435c8","name":"led-strip compound","topic":"node/{id}/led-strip/-/compound/set","payload":"[20, \"#ff0000\", 20, \"#ff7f00\", 20, \"#ffff00\", 20, \"#00ff00\", 20, \"#0000ff\", 20, \"#960082\", 24, \"#D500ff\"]","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":"","x":190,"y":560,"wires":[["fc940043.2c94c"]]},{"id":"f145c1a6.00731","type":"inject","z":"6115d89b.b435c8","name":"led-strip effect test","topic":"node/{id}/led-strip/-/effect/set","payload":"{\"type\":\"test\"}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":"","x":190,"y":600,"wires":[["fc940043.2c94c"]]},{"id":"94faa725.2a6638","type":"inject","z":"6115d89b.b435c8","name":"led-strip effect rainbow","topic":"node/{id}/led-strip/-/effect/set","payload":"{\"type\":\"rainbow\", \"wait\":50}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":"","x":200,"y":640,"wires":[["fc940043.2c94c"]]},{"id":"50812ed8.45f09","type":"inject","z":"6115d89b.b435c8","name":"led-strip effect rainbow-cycle","topic":"node/{id}/led-strip/-/effect/set","payload":"{\"type\":\"rainbow-cycle\", \"wait\":50}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":"","x":220,"y":680,"wires":[["fc940043.2c94c"]]},{"id":"1c45c443.698d6c","type":"inject","z":"6115d89b.b435c8","name":"led-strip effect theater-chase-rainbow","topic":"node/{id}/led-strip/-/effect/set","payload":"{\"type\":\"theater-chase-rainbow\", \"wait\":50}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":"","x":250,"y":720,"wires":[["fc940043.2c94c"]]},{"id":"695dee35.ff264","type":"inject","z":"6115d89b.b435c8","name":"led-strip set brightness 50%","topic":"node/{id}/led-strip/-/brightness/set","payload":"50","payloadType":"str","repeat":"","crontab":"","once":false,"onceDelay":"","x":220,"y":460,"wires":[["fc940043.2c94c"]]},{"id":"f11b54bb.3fd3f8","type":"inject","z":"6115d89b.b435c8","name":"led-strip set brightness 100%","topic":"node/{id}/led-strip/-/brightness/set","payload":"100","payloadType":"str","repeat":"","crontab":"","once":false,"onceDelay":"","x":220,"y":500,"wires":[["fc940043.2c94c"]]},{"id":"efb0acf7.7808c","type":"inject","z":"6115d89b.b435c8","name":"led-strip effect color-wipe blue","topic":"node/{id}/led-strip/-/effect/set","payload":"{\"type\":\"color-wipe\", \"wait\":50, \"color\": \"#0000ff\"}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":"","x":220,"y":760,"wires":[["fc940043.2c94c"]]},{"id":"c2d7e432.c76cc8","type":"inject","z":"6115d89b.b435c8","name":"led-strip set color #000000(00)","topic":"node/{id}/led-strip/-/color/set","payload":"\"#000000(00)\"","payloadType":"str","repeat":"","crontab":"","once":false,"onceDelay":"","x":220,"y":400,"wires":[["fc940043.2c94c"]]},{"id":"e4691220.e3747","type":"mqtt out","z":"6115d89b.b435c8","name":"","topic":"","qos":"","retain":"","broker":"a6621c71.92f09","x":890,"y":400,"wires":[]},{"id":"fc940043.2c94c","type":"change","z":"6115d89b.b435c8","name":"set node id","rules":[{"t":"change","p":"topic","pt":"msg","from":"{id}","fromt":"str","to":"power-controller:0","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":710,"y":400,"wires":[["e4691220.e3747"]]},{"id":"fcca537f.99cac","type":"inject","z":"6115d89b.b435c8","name":"led-strip effect stroboscope blue","topic":"node/{id}/led-strip/-/effect/set","payload":"{\"type\":\"stroboscope\", \"wait\":50, \"color\":\"#0000ff\"}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":"","x":230,"y":800,"wires":[["fc940043.2c94c"]]},{"id":"23fe88e4.4dc058","type":"inject","z":"6115d89b.b435c8","name":"led-strip effect icicle red","topic":"node/{id}/led-strip/-/effect/set","payload":"{\"type\":\"icicle\", \"wait\":50, \"color\":\"#ff0000\"}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":"","x":200,"y":840,"wires":[["fc940043.2c94c"]]},{"id":"811a0f5b.8f1ee","type":"inject","z":"6115d89b.b435c8","name":"led-strip effect pulse-color red","topic":"node/{id}/led-strip/-/effect/set","payload":"{\"type\":\"pulse-color\", \"wait\":200, \"color\":\"#ff0000\"}","payloadType":"json","repeat":"","crontab":"","once":false,"onceDelay":"","x":220,"y":880,"wires":[["fc940043.2c94c"]]},{"id":"a6621c71.92f09","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","willTopic":"","willQos":"0","willPayload":""}]
```

#### Krok 3: Upravte uzel **set node id** a změňte hodnotu „Replace with“ na ID vašeho zařízení, např. `kit-power-controller:0` (Své ID uzlu najdete kliknutím na List paired nodes)

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip-set-node-id.webp')}/>
  </div>
</div>

#### Krok 4: Stiskněte **led-strip set color #ff0000**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip-radio-test.webp')}/>
  </div>
</div>

## Integrace s Blynk IoT

Nyní, když je Radio Power Controller sestaven a reaguje na lokální barevný test, pojďme jej ovládat z telefonu pomocí **Blynk IoT** (současná platforma Blynk – starý cloud Blynk Legacy byl ukončen). Vše zde vychází z kanonického [**průvodce HARDWARIO Blynk IoT**](https://docs.hardwario.com/tower/platform-integrations/blynk-app/) – mějte jej otevřený vedle této stránky, kde najdete přesné postupy kliknutí a snímky obrazovky; níže pouze popisujeme princip.

V tomto projektu je směr dat **aplikace → zařízení**: každý widget, na který v aplikaci Blynk IoT klepnete, zapíše hodnotu do virtuálního pinu, Node-RED tento pin **přečte** (Read) a předá ji LED pásku / relé prostřednictvím logiky MQTT-out, kterou jste již vytvořili.

#### Krok 1: Vytvořte účet, šablonu a zařízení Blynk IoT

Pokud ještě žádný nemáte, vytvořte si účet v aplikaci [Blynk IoT](https://docs.hardwario.com/tower/platform-integrations/blynk-app/) a poté vytvořte **šablonu zařízení (device template)** a z ní **zařízení (device)**. [Průvodce](https://docs.hardwario.com/tower/platform-integrations/blynk-app/) vás provede celým tímto procesem; můžete také znovu použít šablonu z předchozího projektu. V detailu zařízení si poznamenejte jeho **Auth Token** a **Template ID** – vložíte je do Node-RED v kroku 4.

#### Krok 2: Vytvořte Datastream (virtuální pin) pro každý ovládací prvek

V detailu šablony otevřete záložku **Datastreams**, klikněte na **Edit**, poté na **+ New Datastream** a zvolte **Virtual Pin**. Vytvořte jeden virtuální pin pro každý ovládací prvek, který chcete u LED pásku a relé používat:

| Ovládací prvek | Virtuální pin | Typ datastreamu | Odesílá do zařízení |
|---|---|---|---|
| Barva LED pásku | V1 | String (barva) | `led-strip/-/color/set` |
| Úroveň bílé | V2 | Integer `0`–`255` | `led-strip/-/color/set` (bílý kanál) |
| LED pásek zap/vyp | V3 | Integer `0`/`1` | `led-strip/-/color/set` (poslední barva / vypnuto) |
| Relé (napájené zařízení) | V4 | Integer `0`/`1` | `relay/-/state/set` |
| Efekt duha | V5 | Integer `0`/`1` | `led-strip/-/effect/set` (`rainbow`) |
| Efekt theater-chase | V6 | Integer `0`/`1` | `led-strip/-/effect/set` (`theater-chase-rainbow`) |
| Jas | V7 | Integer `0`–`100` | `led-strip/-/brightness/set` |

Po dokončení šablonu uložte. (Čísla virtuálních pinů výše jsou pouze příklad – použijte libovolné volné piny, ale udržujte je konzistentní s uzly Node-RED v kroku 4.)

#### Krok 3: Přidejte odpovídající widgety v aplikaci Blynk IoT

Stáhněte si aplikaci **Blynk IoT** z [App Store](https://apps.apple.com/us/app/blynk-iot/id1559317868) nebo [Google Play](https://play.google.com/store/apps/details?id=cloud.blynk), přihlaste se a otevřete zařízení, které jste vytvořili. Na jeho dashboard přidejte widget pro každý Datastream a každý widget přiřaďte k jeho virtuálnímu pinu:

* **Color** widget → pin barvy (V1)
* **Slider** widget → úroveň bílé (V2) a další pro jas (V7)
* **Button** (režim přepínače) → zap/vyp (V3) a relé (V4)
* **Button** nebo **Segmented Switch** → efekt duha (V5) a efekt theater-chase (V6)

Průvodce ukazuje přesně, jak widget přidat a přiřadit.

#### Krok 4: Přečtěte virtuální piny v Node-RED

Přidejte v Node-RED nový flow. Pro každý ovládací prvek vložte uzel **Read** Blynk IoT (najdete jej v sekci Blynk IoT v levé paletě) a propojte jej s malým uzlem **function**, který příchozí hodnotu namapuje na správné MQTT téma, a poté do vašeho stávajícího uzlu **MQTT out**. Mapování odpovídá tématům z lokálního Testu komunikace – například barva a bílá sestaví payload `node/power-controller:0/led-strip/-/color/set`, zap/vyp obnoví poslední barvu nebo odešle černou, relé odešle `node/power-controller:0/relay/-/state/set`, efekty odešlou `node/power-controller:0/led-strip/-/effect/set` a jas odešle `node/power-controller:0/led-strip/-/brightness/set`.

Každý uzel Read nakonfigurujte kliknutím na **tužku** vedle připojení a vyplněním:

* **Url**: `blynk.cloud`
* **Auth Token** a **Template ID**: hodnoty z detailu vašeho zařízení (krok 1)

Potvrďte tlačítkem **Add**, poté do pole **Virtual Pin** zadejte číslo pinu pro daný ovládací prvek (pouze číslo, bez písmene „V“). Potvrďte tlačítkem **Done**.

#### Krok 5: Nasaďte a vyzkoušejte

Klikněte na červené tlačítko **Deploy** v Node-RED a poté otevřete zařízení v aplikaci Blynk IoT. Klepejte na widgety – barva, úroveň bílé, zap/vyp, relé, efekty a jas by nyní měly v reálném čase ovládat LED pásek a napájené zařízení. 🌈

### Související dokumenty<a id="related-documents"></a>

* [**Instalace na Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/)
* [**Nastavení Toolchain**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain)
* [**Průvodce Toolchain**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain)
