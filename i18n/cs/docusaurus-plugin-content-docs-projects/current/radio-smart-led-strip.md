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
    <Image  img={require('./img/radio-smart-led-strip/radio_power_controller.png')}
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
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip_project-thermostat-relay-bc.webp')}/>
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
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip_node-red-gw-debug.webp')}/>
  </div>
</div><br></br>

:::info

Na kartě **debug** budete moci vidět všechny MQTT zprávy.

:::

#### Krok 6: Klikněte na tlačítko **List all gateways**. V záložce **debug** byste měli vidět odpověď podobnou této.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip_node-red-gw-list.webp')}/>
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
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip_node-red-gw-pair-start.webp')}/>
  </div>
</div>

#### Krok 2: Připojte napájecí adaptér do Sady Control, čímž odešlete požadavek na spárování (měli byste také vidět, že červená LED na **Core Modulu** svítí přibližně 2 sekundy)

#### Krok 3: Klikněte na tlačítko **Stop node pairing**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip_node-red-gw-pair-stop.webp')}/>
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
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip_set-node-id.webp')}/>
  </div>
</div>

#### Krok 4: Stiskněte **led-strip set color #ff0000**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip_radio-test.webp')}/>
  </div>
</div>

## Integrace s Blynk

Nyní jsme sestavili náš **Radio Power Controller**, a můžeme začít se základní integrací s **Blynk**. Nebudeme zde popisovat, co přesně **Blynk** je – pokud chcete získat více informací, doporučujeme navštívit jejich [**webové stránky**](https://www.blynk.cc/). V tomto příkladu vám ukážeme, jak ovládat barvy LED pásku pomocí mobilní aplikace **Blynk**.

Nejprve je potřeba nakonfigurovat naši aplikaci **Node-RED**.

#### Krok 1: Blynk uzly

Pokud používáte HARDWARIO verzi pro Raspberry Pi, mělo by být vše v pořádku, ale přesto zkontrolujte, zda jsou nainstalovány **Blynk** nodes. (Můžete je vidět v levém postranním menu v **Node-RED**). V opačném případě budete muset nainstalovat balíček **Node-RED** s názvem `node-red-contrib-blynk-ws`.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip_nodered-1.webp')}/>
  </div>
</div>

#### Krok 2: Přidejte další flow \(můžete je přidat pomocí velkého tlačítka plus vedle názvu flow.\)

#### Krok 3: Vložte následující úryvek do flow \(pomocí **Menu >> Import >> Schránka**\) a klikněte na záložku Flow 3

```text
[{"id":"702c9447.9b790c","type":"blynk-ws-in-write","z":"aaf5722e.dfdca","name":"","pin":"1","client":"746d7fe1.2a0be","x":330,"y":280,"wires":[["4da0fdbd.a3c614"]]},{"id":"4da0fdbd.a3c614","type":"function","z":"aaf5722e.dfdca","name":"Convert to BC format","func":"var finalString = '\"#'\nvar colorToSave = \"\";\nmsg.arrayOfValues.forEach((color) => {\n    var carry = (parseInt(color)).toString(16)\n    if(carry.length == 1) carry = \"0\" + carry;\n    finalString += carry;\n    colorToSave += carry;\n});\n\nflow.set(\"color\", colorToSave);\n\nif((flow.get(\"ledstrip\")) == false){\n    msg.payload = '\"#000000(00)\"'\n}\nelse{\n    var white = flow.get(\"white\");\n    if(white == null) white = \"00\";\n    msg.payload = finalString + '(' + white + ')\"'; \n}\n\n\nmsg.topic = \"node/power-controller:0/led-strip/-/color/set\";\nreturn msg;\n","outputs":1,"noerr":0,"x":600,"y":280,"wires":[["a7ef9db0.cc602"]]},{"id":"a7ef9db0.cc602","type":"mqtt out","z":"aaf5722e.dfdca","name":"","topic":"","qos":"","retain":"","broker":"71afb0a.14d505","x":870,"y":420,"wires":[]},{"id":"b596fcc7.b5206","type":"blynk-ws-in-write","z":"aaf5722e.dfdca","name":"","pin":"4","client":"746d7fe1.2a0be","x":330,"y":460,"wires":[["80140f23.46bf6"]]},{"id":"80140f23.46bf6","type":"function","z":"aaf5722e.dfdca","name":"String to bool parser","func":"if(msg.payload == true)\n{\n    msg.payload = true;\n}\nelse{\n    msg.payload = false;\n}\nmsg.topic = \"node/power-controller:0/relay/-/state/set\";\nreturn msg;","outputs":1,"noerr":0,"x":600,"y":460,"wires":[["a7ef9db0.cc602"]]},{"id":"62416cd0.a6dbf4","type":"blynk-ws-in-write","z":"aaf5722e.dfdca","name":"","pin":"3","client":"746d7fe1.2a0be","x":330,"y":400,"wires":[["3bce27cc.257308"]]},{"id":"3bce27cc.257308","type":"function","z":"aaf5722e.dfdca","name":"Handler","func":"var lastColor = flow.get(\"color\")|| \"000000(00)\";\n\nif(msg.payload == false) {\n    msg.payload = '\"#000000(00)\"';\n    flow.set(\"ledstrip\", false);\n}\nelse {\n    msg.payload = '\"#' + '' + lastColor + '\"';\n    flow.set(\"ledstrip\", true);\n}\nmsg.topic = \"node/power-controller:0/led-strip/-/color/set\";\n\nreturn msg;","outputs":1,"noerr":0,"x":640,"y":400,"wires":[["a7ef9db0.cc602"]]},{"id":"d619d828.3e1bf8","type":"blynk-ws-in-write","z":"aaf5722e.dfdca","name":"","pin":"5","client":"746d7fe1.2a0be","x":330,"y":520,"wires":[["9b87dc69.53d55"]]},{"id":"e267bf2d.7e292","type":"blynk-ws-in-write","z":"aaf5722e.dfdca","name":"","pin":"6","client":"746d7fe1.2a0be","x":330,"y":580,"wires":[["81fcc52c.023c08"]]},{"id":"3121623b.8b75de","type":"blynk-ws-in-write","z":"aaf5722e.dfdca","name":"","pin":"2","client":"746d7fe1.2a0be","x":330,"y":340,"wires":[["99a36ea2.e29bf"]]},{"id":"9b87dc69.53d55","type":"function","z":"aaf5722e.dfdca","name":"Rainbow","func":"if(msg.payload == true && flow.get(\"ledstrip\")||true){\n    msg.payload = '{\"type\":\"rainbow\", \"wait\":50}';\n    msg.topic = \"node/power-controller:0/led-strip/-/effect/set\"   \n}\n\nreturn msg;","outputs":1,"noerr":0,"x":640,"y":520,"wires":[["a7ef9db0.cc602"]]},{"id":"81fcc52c.023c08","type":"function","z":"aaf5722e.dfdca","name":"Theater chase","func":"if(msg.payload == true && flow.get(\"ledstrip\")||true){\n    msg.payload = '{\"type\":\"theater-chase-rainbow\", \"wait\":50}';\n    msg.topic = \"node/power-controller:0/led-strip/-/effect/set\"   \n}\n\nreturn msg;","outputs":1,"noerr":0,"x":620,"y":580,"wires":[["a7ef9db0.cc602"]]},{"id":"99a36ea2.e29bf","type":"function","z":"aaf5722e.dfdca","name":"White color handler","func":"var carry = (parseInt(msg.payload)).toString(16)\nif(carry.length == 1) carry = \"0\" + carry;\n\nflow.set(\"white\", carry);\n\nvar color = flow.get(\"color\");\nif(color == null) color = \"000000\";\n\nmsg.payload = '\"#' + color +'(' + carry + ')\"';\nmsg.topic = \"node/power-controller:0/led-strip/-/color/set\";\nreturn msg;","outputs":1,"noerr":0,"x":610,"y":340,"wires":[["a7ef9db0.cc602"]]},{"id":"d40dc7b0.acf648","type":"blynk-ws-in-write","z":"aaf5722e.dfdca","name":"","pin":"7","client":"746d7fe1.2a0be","x":330,"y":640,"wires":[["a03ff4eb.de9fd8"]]},{"id":"a03ff4eb.de9fd8","type":"function","z":"aaf5722e.dfdca","name":"Brightness handler","func":"if(msg.payload == true && flow.get(\"ledstrip\")||true){\n    msg.payload = msg.payload;\n    msg.topic = \"node/power-controller:0/led-strip/-/brightness/set\"   \n}\n\nreturn msg;","outputs":1,"noerr":0,"x":610,"y":640,"wires":[["a7ef9db0.cc602"]]},{"id":"746d7fe1.2a0be","type":"blynk-ws-client","z":"","name":"","path":"ws://blynk-cloud.com/websockets","key":"","dbg_all":false,"dbg_read":false,"dbg_write":false,"dbg_notify":false,"dbg_mail":false,"dbg_prop":false,"dbg_low":false,"dbg_pins":""},{"id":"71afb0a.14d505","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```

Bude to vypadat takto:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip_nodered-2.webp')}/>
  </div>
</div>

#### Krok 4: Nastavení připojení k Blynk

Nakonfigurujte MQTT uzel tak, aby se připojil k vašemu brokeru. Pokud používáte Raspberry Pi, pravděpodobně se připojí na localhost. Poté je potřeba nakonfigurovat **Blynk** node. Stačí zadat URL `ws://blynk-cloud.com/websockets`. `Auth Token` nakonfigurujeme později poté, co jej obdržíte e-mailem z Blynk.

#### Krok 5: Mobilní aplikace

Nyní si stáhněte aplikaci **Blynk** z [**App Store**](https://itunes.apple.com/us/app/blynk-iot-for-arduino-esp32/id808760481?mt=8) nebo [**Google Play**](https://play.google.com/store/apps/details?id=cc.blynk&hl=en)

#### Krok 6: Po instalaci si vytvořte účet, přihlaste se a měli byste vidět něco podobného.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip_blynk-1.webp')}/>
  </div>
</div>

#### Krok 7: Nyní klikněte na tlačítko v pravém horním rohu pro naskenování QR kódu

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip_blynk-2.webp')}/>
  </div>
</div>

#### Krok 8: Nyní naskenujte následující QR kód, abyste získali vše předem nakonfigurované

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip_blynk-qr.webp')}/>
  </div>
</div>

#### Krok 9: Měli byste vidět něco podobného

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip_blynk-3.webp')}/>
  </div>
</div>

#### Krok 10: Email

Klikněte na ozubené kolečko pro nastavení a měli byste vidět nastavení vašeho projektu. Potřebujeme získat `Auth Token`, který musíte zkopírovat do **Node-RED** v konfiguraci **Blynk** node.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-smart-led-strip/radio-smart-led-strip_blynk-4.webp')}/>
  </div>
</div>

#### Krok 11: Nyní nasaďte (deploy) vaši aplikaci **Node-RED** a stiskněte tlačítko přehrávání (**play**) ve vašem projektu **Blynk** – a máte hotovo!

### Související dokumenty<a id="related-documents"></a>

* [**Instalace na Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/)
* [**Nastavení Toolchain**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain)
* [**Průvodce Toolchain**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain)
