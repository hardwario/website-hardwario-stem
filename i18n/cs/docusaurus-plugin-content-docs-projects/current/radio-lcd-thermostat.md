---
slug: radio-lcd-thermostat
title: Bezdrátový LCD termostat
---
import Image from '@theme/IdealImage';

# Bezdrátový LCD termostat

Tento dokument vás provede projektem **Bezdrátového LCD termostatu**. Pomocí tohoto zařízení budete moci na dálku ovládat teplotu.

## Blokové schéma

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat_block-diagram.webp')}/>
  </div>
</div>

## Požadavky

* Buď **HARDWARIO Sada Display**, nebo jednotlivé komponenty:
  * 1x **HARDWARIO LCD Module**
  * 1x **HARDWARIO Core Module**
  * 1x **HARDWARIO Mini Battery Module**
  * 1x **HARDWARIO Radio Dongle**
  
* One of these options:
  
  * Nainstalovaný **HARDWARIO Playground** \(doporučeno\)

    Více informací naleznete v dokumentu [**Quick Start Guide**](https://docs.hardwario.com/tower/firmware-development/firmware-quick-start/).

  * **Raspberry Pi** s distribucí **HARDWARIO Raspbian**

    Více informací naleznete v dokumentu [**Instalace na Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/).

  * Nainstalovaný **HARDWARIO Firmware Tool**

    Více informací naleznete v dokumentu [**Toolchain nastavení**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain).

## Nahrání firmwaru

V tomto postupu použijeme **HARDWARIO Playground** k nahrání firmwaru do **Core Modulu**.

### Krok 1: Připojte kabel Micro USB k Core Modulu a počítači

### Krok 2: Nahrání firmwaru

Spusťte aplikaci HARDWARIO Playground. Na záložce Firmware vyberte a nahrajte firmware `bcf-radio-lcd-thermostat` do **Core Modulu**.

:::warning

**Nahrávání firmwaru do Core Module R1 a R2**
Pro rozdíly v nahrávání firmwaru do staršího **Core Module 1** a novějšího **Core Module 2** si prosím přečtěte **srovnání Core Module R1 a R2** v sekci **Hardware**.

:::

### Krok 3: Odpojte kabel Micro USB od **Core Modulu** a počítače

:::success

V tomto bodě je firmware úspěšně nahrán.

:::

## Sestavení hardwaru

Podívejte se na krátké video s jednoduchou ukázkou krok za krokem:


<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
  <iframe
    src="https://www.youtube.com/embed/5fihG2xp4y8?si=US5A8Sm3CeTFJtKf"     title="YouTube video player"
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
  />
</div>

### Krok 1: Začněte s **Mini Battery Module**

:::warning

Ujistěte se, že v **Mini Battery Module** nejsou vloženy žádné baterie.

:::

### Krok 2: Připojte **Core Module** na **Mini Battery Module**

### Krok 3: Připojte **LCD Module** na **Core Module**

## Spuštění Playgroundu

:::danger

Pokud používáte nový **HARDWARIO Playground**, použijte záložku **Functions** místo [**http://localhost:1880/**](http://localhost:1880/). Proces párování nyní probíhá na záložce **Devices**. Pro otestování komunikace použijte záložku **Messages**.

:::

### Krok 1: Otevřete **Node-RED** ve svém webovém prohlížeči

[http://localhost:1880/](http://localhost:1880/)

### Krok 2: Měli byste vidět prázdnou pracovní plochu s označením **Flow 1**

### Krok 3: Vložte následující úryvek do flow \(pomocí Menu &gt;&gt; Import\)

```text
[{"id":"2fc604fc.3b6abc","type":"inject","z":"dfc861b.b2a02a","name":"List all gateways","topic":"gateway/all/info/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":460,"wires":[["a2c10833.24d5d8"]]},{"id":"1e4502b8.2f63fd","type":"inject","z":"dfc861b.b2a02a","name":"Start node pairing","topic":"gateway/usb-dongle/pairing-mode/start","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":570,"y":580,"wires":[["795ff5a7.8e266c"]]},{"id":"3d844ce2.932864","type":"inject","z":"dfc861b.b2a02a","name":"Stop node pairing","topic":"gateway/usb-dongle/pairing-mode/stop","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":640,"wires":[["5967c452.c838bc"]]},{"id":"f202b253.2705b","type":"inject","z":"dfc861b.b2a02a","name":"List paired nodes","topic":"gateway/usb-dongle/nodes/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":520,"wires":[["f0aca138.0b2c3"]]},{"id":"349f02fd.890f6e","type":"inject","z":"dfc861b.b2a02a","name":"Unpair all nodes","topic":"gateway/usb-dongle/nodes/purge","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":700,"wires":[["2f1c5bb6.53d6f4"]]},{"id":"cf61d75d.4ad8f8","type":"mqtt in","z":"dfc861b.b2a02a","name":"","topic":"#","qos":"2","broker":"67b8de4a.029d3","x":530,"y":400,"wires":[["a5cb0658.f5d658"]]},{"id":"a5cb0658.f5d658","type":"debug","z":"dfc861b.b2a02a","name":"","active":true,"console":"false","complete":"false","x":790,"y":400,"wires":[]},{"id":"a2c10833.24d5d8","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":460,"wires":[]},{"id":"f0aca138.0b2c3","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":520,"wires":[]},{"id":"795ff5a7.8e266c","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":580,"wires":[]},{"id":"5967c452.c838bc","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":640,"wires":[]},{"id":"2f1c5bb6.53d6f4","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":700,"wires":[]},{"id":"67b8de4a.029d3","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"717f7c18.ba0a24","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```

Bude to vypadat takto:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat_node-red-gw-controls.webp')}/>
  </div>
</div>

:::info

Tento úryvek poskytuje ovládací tlačítka pro příkazy gateway/rádio. Tyto příkazy jsou odesílány přes protokol MQTT.

:::

### Krok 4: Nasazení flow pomocí tlačítka **Deploy** v pravém horním rohu

### Krok 5: Otevřete záložku **debug**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat_node-red-gw-debug.webp')}/>
  </div>
</div>

:::info

V záložce **debug** budete moci vidět všechny MQTT zprávy.

:::

### Krok 6: Klikněte na tlačítko **List all gateways**. V záložce **debug** byste měli vidět odpověď podobnou této.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat_node-red-gw-list.webp')}/>
  </div>
</div>

:::success

V tomto bodě máte funkční **Node-RED**, **MQTT**, **HARDWARIO Radio Dongle** a **HARDWARIO Gateway**.

:::

## Rádiové párování

V této části vytvoříme rádiové spojení mezi **Radio Dongle** a **Rádiovým LCD termostatem**.

Postupujte podle následujících kroků v prostředí **Node-RED**:

### Krok 1: Klikněte na tlačítko **Start node pairing**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat_node-red-gw-pair-start.webp')}/>
  </div>
</div>

### Krok 2: Vložte baterie do **Rádiového LCD termostatu**, čímž odešlete požadavek na párování
(měla by se také rozsvítit červená LED na **Core Modulu** přibližně na 2 sekundy)

### Krok 3: Klikněte na tlačítko **Stop node pairing**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat_node-red-gw-pair-stop.webp')}/>
  </div>
</div>

:::success

V tomto bodě máte navázané rádiové spojení mezi uzlem (**Rádiový LCD termostat**) a bránou (**Radio Dongle**).

:::

## Test komunikace

Postupujte podle následujících kroků v prostředí **Node-RED**:

### Krok 1: Přepněte se na záložku **debug** vpravo

### Krok 2: Vložte následující úryvek do flow (pomocí **Menu >> Import**)

```text
[{"id":"12b3deae.bbbdf1","type":"mqtt in","z":"f2f80e07.95983","name":"","topic":"node/lcd-thermostat:0/#","qos":"2","broker":"25b87ea5.743312","x":390,"y":320,"wires":[["7694514b.9b64d"]]},{"id":"7694514b.9b64d","type":"debug","z":"f2f80e07.95983","name":"","active":true,"console":"false","complete":"false","x":630,"y":320,"wires":[]},{"id":"25b87ea5.743312","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```

### Krok 3: Pokud vidíte ve výstupu debug nějaké zprávy (například teplotu), vaše sada funguje správně.

:::success

V tomto bodě máte ověřenou rádiovou komunikaci.

:::

## Integrace s Blynk

Nyní máme naši sadu sestavenou a můžeme začít se základní integrací s **Blynk**. Začneme bez podrobného vysvětlování, co **Blynk** je. Pokud se o něm chcete dozvědět více, nejlepší bude navštívit jejich [**stránku**](https://www.blynk.cc/). V našem příkladu vám ukážeme, jak monitorovat teplotu v časovém grafu a také jak ovládat relé v závislosti na přednastavené teplotě.

Nejprve musíme nakonfigurovat naši aplikaci **Node-RED**.

### Krok 1: Blynk nodes

If you are using HARDWARIO raspi version you should be fine, but still check that **Blynk** nodes are installed. (You can view them on the left side menu in **Node-RED**). Otherwise you will need to install **Node-RED** package `node-red-contrib-blynk-ws`.

Pokud používáte verzi HARDWARIO pro Raspberry Pi, mělo by být vše v pořádku, ale i tak si ověřte, že jsou nainstalovány uzly **Blynk**. (Můžete je vidět v levém postranním panelu v prostředí **Node-RED**.) V opačném případě budete muset nainstalovat balíček pro **Node-RED** s názvem `node-red-contrib-blynk-ws`.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat_nodered-1.webp')}/>
  </div>
</div>

### Krok 2: Přidejte nové flow (můžete jej přidat pomocí velkého tlačítka plus vedle názvu flow)

### Krok 3: Vložte následující úryvek do flow (pomocí **Menu >> Import**)

```text
[{"id":"85a6bc11.f6088","type":"tab","label":"Flow 2","disabled":false,"info":""},{"id":"cdb6da8f.c84f88","type":"blynk-ws-out-write","z":"85a6bc11.f6088","name":"","pin":"1","pinmode":0,"client":"172c134d.989ead","x":700,"y":440,"wires":[]},{"id":"9dd2498e.466368","type":"mqtt in","z":"85a6bc11.f6088","name":"","topic":"node/lcd-thermostat:0/thermometer/0:1/temperature","qos":"2","broker":"3d7de0ee.6b9ed","x":210,"y":140,"wires":[["2390ca91.f7db36"]]},{"id":"c35cea67.a92b48","type":"inject","z":"85a6bc11.f6088","name":"Every 1 second","topic":"","payload":"","payloadType":"date","repeat":"1","crontab":"","once":false,"onceDelay":"","x":130,"y":440,"wires":[["10c14148.1cc99f","19338151.912a9f"]]},{"id":"5b5fb6fe.549268","type":"mqtt out","z":"85a6bc11.f6088","name":"","topic":"node/power-controller:0/relay/-/state/set","qos":"","retain":"","broker":"3d7de0ee.6b9ed","x":780,"y":340,"wires":[]},{"id":"2390ca91.f7db36","type":"change","z":"85a6bc11.f6088","name":"","rules":[{"t":"set","p":"temperature","pt":"flow","to":"$number(msg.payload)","tot":"jsonata"}],"action":"","property":"","from":"","to":"","reg":false,"x":540,"y":140,"wires":[["63757f48.e9115"]]},{"id":"518ff012.d2933","type":"mqtt in","z":"85a6bc11.f6088","name":"","topic":"node/lcd-thermostat:0/thermometer/set-point/temperature","qos":"2","broker":"3d7de0ee.6b9ed","x":230,"y":60,"wires":[["efd4b628.96d098"]]},{"id":"efd4b628.96d098","type":"change","z":"85a6bc11.f6088","name":"","rules":[{"t":"set","p":"setpoint","pt":"flow","to":"$number(msg.payload)","tot":"jsonata"}],"action":"","property":"","from":"","to":"","reg":false,"x":560,"y":60,"wires":[["63757f48.e9115"]]},{"id":"10c14148.1cc99f","type":"change","z":"85a6bc11.f6088","name":"","rules":[{"t":"set","p":"payload","pt":"msg","to":"temperature","tot":"flow"}],"action":"","property":"","from":"","to":"","reg":false,"x":400,"y":440,"wires":[["cdb6da8f.c84f88"]]},{"id":"19338151.912a9f","type":"change","z":"85a6bc11.f6088","name":"","rules":[{"t":"set","p":"payload","pt":"msg","to":"setpoint","tot":"flow"}],"action":"","property":"","from":"","to":"","reg":false,"x":400,"y":480,"wires":[["32f2b7a7.072788"]]},{"id":"32f2b7a7.072788","type":"blynk-ws-out-write","z":"85a6bc11.f6088","name":"","pin":"2","pinmode":0,"client":"172c134d.989ead","x":700,"y":480,"wires":[]},{"id":"63757f48.e9115","type":"switch","z":"85a6bc11.f6088","name":"comparison","property":"setpoint","propertyType":"flow","rules":[{"t":"gt","v":"temperature","vt":"flow"},{"t":"lte","v":"temperature","vt":"flow"}],"checkall":"true","repair":false,"outputs":2,"x":530,"y":260,"wires":[["b83b5274.58c59"],["4984fb4c.bbe3f4"]]},{"id":"b83b5274.58c59","type":"change","z":"85a6bc11.f6088","name":"true","rules":[{"t":"set","p":"payload","pt":"msg","to":"true","tot":"bool"}],"action":"","property":"","from":"","to":"","reg":false,"x":670,"y":240,"wires":[["5b5fb6fe.549268"]]},{"id":"4984fb4c.bbe3f4","type":"change","z":"85a6bc11.f6088","name":"false","rules":[{"t":"set","p":"payload","pt":"msg","to":"false","tot":"bool"}],"action":"","property":"","from":"","to":"","reg":false,"x":670,"y":280,"wires":[["5b5fb6fe.549268"]]},{"id":"172c134d.989ead","type":"blynk-ws-client","z":"","name":"","path":"ws://blynk-cloud.com/websockets","key":"4035de467a9a483b9d1318c92d3fabcb","dbg_all":false,"dbg_read":false,"dbg_write":false,"dbg_notify":false,"dbg_mail":false,"dbg_prop":false,"dbg_sync":false,"dbg_bridge":false,"dbg_low":false,"dbg_pins":"","multi_cmd":false,"proxy_type":"no","proxy_url":""},{"id":"3d7de0ee.6b9ed","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","willTopic":"","willQos":"0","willPayload":""}]
```

Bude to vypadat takto:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat_nodered-2.webp')}/>
  </div>
</div>

### Krok 4: Připojení

Configure MQTT node to connect it on you broker. It will probably connect on localhost if you are using Raspberry Pi. After that you will need to configure **Blynk** node. Just fill in URL `ws://blynk-cloud.com/websockets`. The `Auth Token` we will configure later after obtaining one from Blynk over e-mail.

Nakonfigurujte MQTT uzel tak, aby se připojil k vašemu brokeru. Pokud používáte Raspberry Pi, pravděpodobně se připojí na localhost. Poté je potřeba nakonfigurovat **Blynk node** – stačí vyplnit URL `ws://blynk-cloud.com/websockets`. `Auth Token` nakonfigurujeme později, až jej obdržíme e-mailem od Blynku.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat_nodered-screen-2.webp')}/>
  </div>
</div>

### Krok 5: Nyní si stáhněte aplikaci Blynk [**App Store**](https://itunes.apple.com/us/app/blynk-iot-for-arduino-esp32/id808760481?mt=8) or [**Google Play**](https://play.google.com/store/apps/details?id=cc.blynk&hl=en)

### Krok 6: Po instalaci si vytvořte účet, přihlaste se a měli byste vidět něco podobného.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat_blynk-1.webp')}/>
  </div>
</div>

### Krok 7: Nyní klikněte na tlačítko v pravém horním rohu pro naskenování QR kódu

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat_blynk-2.webp')}/>
  </div>
</div>

### Krok 8: Nyní naskenujte následující QR kód, abyste získali vše přednastavené

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat_blynk-qr.webp')}/>
  </div>
</div>

### Krok 9: Měli byste vidět něco podobného, pouze zatím bez hodnot teploty

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat_blynk-3.webp')}/>
  </div>
</div>

### Krok 10: Email

Klikněte na ozubené kolečko (nastavení) a zobrazí se nastavení vašeho projektu. Potřebujeme získat `Auth Token`, který musíte zkopírovat do prostředí **Node-RED** v konfiguraci **Blynk** node.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat_blynk-4.webp')}/>
  </div>
</div>

### Krok 11: Nyní nasadíte svou aplikaci v **Node-RED** a v projektu **Blynk** stiskněte tlačítko „play“ – a máte hotovo!


## Související dokumenty

* [**Instalace Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/)
* [**Toolchain nastavení**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain)
* [**Toolchain průvodce**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain)
