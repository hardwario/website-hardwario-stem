---
slug: radio-co2-monitor
title: Bezdrátový CO₂ monitor
---
import Image from '@theme/IdealImage';

# Bezdrátový CO₂ monitor

Tento dokument vás provede projektem **Rádiového CO₂ monitoru**. Budete si moci zobrazit panel s údaji o CO₂, teplotě, vlhkosti, okolním osvětlení a atmosférickém tlaku v prostředí **Node-RED** a zároveň sledovat data na svém chytrém telefonu pomocí cloudu a mobilní aplikace **Blynk**.

## Blokové schéma

<div class="container">
  <div class="row">
    <Image  img={require('./img/radio-co2-monitor/radio_co2_monitor.png')}
          style={{ backgroundColor: "#fff" }}/>
  </div>
</div>

## Požadavky

* Buď sada [CO₂ Monitor Kit](https://www.hardwario.store/cz/p/co2-monitor-kit), nebo jednotlivé komponenty:
  
	* 1× [Core Module](https://www.hardwario.store/cz/p/core-module)
	* 1× [Temperature Tag](https://www.hardwario.store/cz/p/temperature-tag)
	* 1× [Humidity Tag](https://www.hardwario.store/cz/p/humidity-tag)
	* 1× [Barometer Tag](https://www.hardwario.store/cz/p/barometer-tag)
	* 1× [CO₂ Module](https://www.hardwario.store/cz/p/co2-module)
	* 1× [Battery Module](https://www.hardwario.store/cz/p/battery-module)
	* 1× [Radio Dongle](https://www.hardwario.store/cz/p/radio-dongle)
  
* Jedna z následujících možností:
  
  * Nainstalovaný **Hardwario Playground** \(doporučeno\)<br></br>
    Více informací naleznete v dokumentu [**Quick Start Guide**](https://docs.hardwario.com/tower/firmware-development/firmware-quick-start/).
  * **Raspberry Pi** s distribucí **Hardwario Raspbian**<br></br>
    Více informací naleznete v dokumentu [**Instalace na Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/).
  * Nainstalovaný **Hardwario Firmware Tool**<br></br>
    Více informací naleznete v dokumentu [**Toolchain Setup**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain).

## Nahrání firmwaru

V tomto postupu použijeme **Hardwario Playground** k nahrání firmwaru do **Core Modulu**.

#### Krok 1: Připojte kabel Micro USB k Core Modulu a k počítači

#### Krok 2: Spusťte Hardwario Playground

Na kartě Firmware vyberte a nahrajte firmware `bcf-radio-co2-monitor` do **Core Modulu**.

:::warning

**Nahrávání firmwaru do Core Module R1 a R2**  
Pro rozdíly v nahrávání firmwaru do staršího **Core Module 1** a novějšího **Core Module 2** si prosím přečtěte srovnání **Core Module R1 a R2** v sekci **Hardware**.

:::

#### Krok 3: Odpojte kabel Micro USB od **Core Modulu** a počítače

:::success

V tomto bodě je firmware úspěšně nahrán.

:::

## Sestavení hardwaru

Podívejte se na krátké video s jednoduchou ukázkou krok za krokem:

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
  <iframe
   src="https://www.youtube.com/embed/jGxjl5v7kqE?si=SRKiZyteXo4f5Lzf"   title="YouTube video player"
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
  />
</div>

#### Krok 1: Začněte s **Battery Module**

:::warning

Ujistěte se, že v **Battery Module** nejsou vloženy žádné baterie.

:::

#### Krok 2: Připojte **CO₂ Module** na **Battery Module**

#### Krok 3: Připojte **Core Module** na **CO₂ Module**

#### Krok 4: Připojte **Temperature Tag** do zásuvky na **CO₂ Module**

#### Krok 5: Připojte **Humidity Tag** do zásuvky na **CO₂ Module**

#### Krok 6: Připojte **Barometer Tag** do zásuvky na **CO₂ Module**

#### Krok 7: Připojte **Cover Module** na **Core Module**

## Spuštění Playgroundu

:::danger

Pokud používáte nový **Hardwario Playground**, použijte záložku **Functions** místo [http://localhost:1880/](http://localhost:1880/). Proces párování nyní probíhá v záložce **Devices**. Pro otestování komunikace použijte záložku **Messages**.

:::

#### Krok 1: Otevřete Node-RED ve svém webovém prohlížeči:

[http://localhost:1880/](http://localhost:1880/)

#### Krok 2: Měli byste vidět prázdnou pracovní plochu s označením **Flow 1**:

#### Krok 3: Vložte následující úryvek do flow \(pomocí **Menu &gt;&gt; Import**\) a klikněte na záložku **Flow 1**:

```text
[{"id":"2fc604fc.3b6abc","type":"inject","z":"dfc861b.b2a02a","name":"List all gateways","topic":"gateway/all/info/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":460,"wires":[["a2c10833.24d5d8"]]},{"id":"1e4502b8.2f63fd","type":"inject","z":"dfc861b.b2a02a","name":"Start node pairing","topic":"gateway/usb-dongle/pairing-mode/start","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":570,"y":580,"wires":[["795ff5a7.8e266c"]]},{"id":"3d844ce2.932864","type":"inject","z":"dfc861b.b2a02a","name":"Stop node pairing","topic":"gateway/usb-dongle/pairing-mode/stop","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":640,"wires":[["5967c452.c838bc"]]},{"id":"f202b253.2705b","type":"inject","z":"dfc861b.b2a02a","name":"List paired nodes","topic":"gateway/usb-dongle/nodes/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":520,"wires":[["f0aca138.0b2c3"]]},{"id":"349f02fd.890f6e","type":"inject","z":"dfc861b.b2a02a","name":"Unpair all nodes","topic":"gateway/usb-dongle/nodes/purge","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":700,"wires":[["2f1c5bb6.53d6f4"]]},{"id":"cf61d75d.4ad8f8","type":"mqtt in","z":"dfc861b.b2a02a","name":"","topic":"#","qos":"2","broker":"67b8de4a.029d3","x":530,"y":400,"wires":[["a5cb0658.f5d658"]]},{"id":"a5cb0658.f5d658","type":"debug","z":"dfc861b.b2a02a","name":"","active":true,"console":"false","complete":"false","x":790,"y":400,"wires":[]},{"id":"a2c10833.24d5d8","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":460,"wires":[]},{"id":"f0aca138.0b2c3","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":520,"wires":[]},{"id":"795ff5a7.8e266c","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":580,"wires":[]},{"id":"5967c452.c838bc","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":640,"wires":[]},{"id":"2f1c5bb6.53d6f4","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":700,"wires":[]},{"id":"67b8de4a.029d3","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"717f7c18.ba0a24","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```

It will look like this:


<div class="container">
  <div class="row">
    <Image img={require('./img/radio-co2-monitor/radio-co2-monitor_node-red-gw-controls.webp')}/>
  </div>
</div><br></br>

Tento úryvek poskytuje ovládací tlačítka pro příkazy gateway/rádio. Tyto příkazy jsou odesílány přes protokol MQTT.

#### Krok 4: Nasazení flow pomocí tlačítka **Deploy** v pravém horním rohu:

#### Krok 5: Otevřete záložku **debug**:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-co2-monitor/radio-co2-monitor_node-red-gw-debug.webp')}/>
  </div>
</div><br></br>

:::info

V záložce **debug** uvidíte všechny zprávy MQTT.

:::

#### Krok 6: Klikněte na tlačítko **List all gateways**. V záložce **debug** byste měli vidět odpověď podobnou této:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-co2-monitor/radio-co2-monitor_node-red-gw-list.webp')}/>
  </div>
</div><br></br>

:::success

V tomto bodě máte funkční **Node-RED**, **MQTT**, **Hardwario Radio Dongle** a **Hardwario Gateway**.

:::

## Rádiové párování

V této části vytvoříme rádiové spojení mezi **Radio Dongle** a **Radio CO₂ Monitorem**.

Postupujte podle následujících kroků v prostředí **Node-RED**:

#### Krok 1: Klikněte na tlačítko **Start node pairing**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-co2-monitor/radio-co2-monitor_node-red-gw-pair-start.webp')}/>
  </div>
</div>

#### Krok 2: Vložte baterie do **Radio CO₂ Monitoru**, čímž odešlete požadavek na párování \(měla by se také rozsvítit červená LED na **Core Modulu** přibližně na 2 sekundy\)

#### Krok 3: Klikněte na tlačítko **Stop node pairing**.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-co2-monitor/radio-co2-monitor_node-red-gw-pair-stop.webp')}/>
  </div>
</div><br></br>

:::success

V tomto bodě máte navázané rádiové spojení mezi node \(**Radio Motion Detector**\) a bránou \(**Radio Dongle**\).

:::

## Test komunikace

Postupujte podle následujících kroků v prostředí **Node-RED**:

#### Krok 1: Přepněte se na záložku **debug** vpravo

#### Krok 2: Otestujte zařízení

Začněte dýchat na teplotní senzor na **Temperature Tagu**, abyste vyvolali změnu teploty a tím spustili rádiový přenos.

Poté byste měli vidět podobné zprávy:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-co2-monitor/radio-co2-monitor_radio-test.webp')}/>
  </div>
</div><br></br>

:::success

V tomto bodě máte ověřenou rádiovou komunikaci.

:::

## Integrace s Blynk

Nyní máme naši sadu sestavenou a můžeme začít se základní integrací s **Blynk**. Začneme bez podrobného vysvětlování, co **Blynk** je. Pokud se o něm chcete dozvědět více, nejlepší bude navštívit jejich [**stránku**](https://www.blynk.cc/). V našem příkladu vám ukážeme, jak zobrazit hodnoty ze senzorů v mobilní aplikaci **Blynk**.

Nejprve musíme nakonfigurovat naši aplikaci **Node-RED**.

#### Krok 1: Blynk nodes

Pokud používáte verzi Hardwario pro Raspberry Pi, mělo by být vše připraveno, ale i tak si ověřte, že jsou nainstalované uzly **Blynk**. \(Můžete je vidět v levém postranním panelu v prostředí Node-RED.\) V opačném případě budete muset nainstalovat balíček pro **Node-RED** s názvem `node-red-contrib-blynk-ws`.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-co2-monitor/radio-co2-monitor_integration-nodered-1.webp')}/>
  </div>
</div>


#### Krok 2: Přidejte nové flow \(můžete jej přidat pomocí velkého tlačítka plus vedle názvu flow\)


#### Krok 3: Vložte následující úryvek do flow \(pomocí **Menu &gt;&gt; Import**\) a klikněte na záložku Flow 3

```text
[{"id":"31ab8ee9.420bb2","type":"mqtt in","z":"2c41a2bd.aa36ae","name":"","topic":"node/co2-monitor:0/thermometer/0:0/temperature","qos":"2","broker":"1292d7bf.db35a8","x":316,"y":483,"wires":[["cb15bc57.2b0a5"]]},{"id":"fa8f9692.6cb388","type":"mqtt in","z":"2c41a2bd.aa36ae","name":"","topic":"node/co2-monitor:0/hygrometer/0:4/relative-humidity","qos":"2","broker":"1292d7bf.db35a8","x":326,"y":543,"wires":[["dcea0ae2.3287b8"]]},{"id":"d9edba1c.71f348","type":"mqtt in","z":"2c41a2bd.aa36ae","name":"","topic":"node/co2-monitor:0/barometer/0:0/pressure","qos":"2","broker":"1292d7bf.db35a8","x":290,"y":600,"wires":[["31270a41.f16076"]]},{"id":"cb15bc57.2b0a5","type":"blynk-ws-out-write","z":"2c41a2bd.aa36ae","name":"","pin":"0","pinmode":0,"client":"90573d3c.a1cca","x":686,"y":483,"wires":[]},{"id":"f7853a1c.8891e8","type":"mqtt in","z":"2c41a2bd.aa36ae","name":"","topic":"node/co2-monitor:0/co2-meter/-/concentration","qos":"2","broker":"1292d7bf.db35a8","x":300,"y":660,"wires":[["39fede01.e9a5f2"]]},{"id":"dcea0ae2.3287b8","type":"blynk-ws-out-write","z":"2c41a2bd.aa36ae","name":"","pin":"1","pinmode":0,"client":"90573d3c.a1cca","x":686,"y":543,"wires":[]},{"id":"1b9b2c91.106d63","type":"blynk-ws-out-write","z":"2c41a2bd.aa36ae","name":"","pin":"2","pinmode":0,"client":"90573d3c.a1cca","x":680,"y":600,"wires":[]},{"id":"39fede01.e9a5f2","type":"blynk-ws-out-write","z":"2c41a2bd.aa36ae","name":"","pin":"3","pinmode":0,"client":"90573d3c.a1cca","x":680,"y":660,"wires":[]},{"id":"31270a41.f16076","type":"function","z":"2c41a2bd.aa36ae","name":"/ 1000","func":"msg.payload = msg.payload / 1000.0;\nreturn msg;","outputs":1,"noerr":0,"x":530,"y":600,"wires":[["1b9b2c91.106d63"]]},{"id":"1292d7bf.db35a8","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"90573d3c.a1cca","type":"blynk-ws-client","z":"","name":"","path":"ws://blynk-cloud.com/websockets","key":"","dbg_all":false,"dbg_read":false,"dbg_write":false,"dbg_notify":false,"dbg_mail":false,"dbg_prop":false,"dbg_low":false,"dbg_pins":""}]
```

Bude to vypadat takto:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-co2-monitor/radio-co2-monitor_integration-nodered-2.webp')}/>
  </div>
</div>

#### Krok 4: Připojení

Nakonfigurujte MQTT uzel pro připojení k vašemu brokeru. Pokud používáte Raspberry Pi, pravděpodobně se připojí na localhost. Poté je potřeba nakonfigurovat **Blynk** uzel - stačí vyplnit URL `ws://blynk-cloud.com/websockets`. `Auth Token` nakonfigurujeme později, jakmile jej obdržíme z Blynku e-mailem.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-co2-monitor/radio-co2-monitor_integration-nodered-3.webp')}/>
  </div>
</div>

#### Krok 5: Stáhněte si aplikaci **Blynk** z [**App Store**](https://itunes.apple.com/us/app/blynk-iot-for-arduino-esp32/id808760481?mt=8) nebo [**Google Play**](https://play.google.com/store/apps/details?id=cc.blynk&hl=en)

#### Krok 6: Po instalaci si vytvořte účet, přihlaste se a měli byste vidět něco podobného

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-co2-monitor/radio-co2-monitor_integration-blynk-4.webp')}/>
  </div>
</div>

#### Krok 7: Nyní klikněte na tlačítko v pravém horním rohu pro naskenování QR kódu

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-co2-monitor/radio-co2-monitor_integration-blynk-5.webp')}/>
  </div>
</div>

#### Krok 8: Nyní naskenujte následující QR kód, abyste získali vše přednastavené

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-co2-monitor/radio-co2-monitor_integration-blynk-6.webp')}/>
  </div>
</div>

#### Krok 9: Měli byste vidět něco podobného

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-co2-monitor/radio-co2-monitor_integration-blynk-7.webp')}/>
  </div>
</div><br></br>

:::info

Hodnoty uvidíte po spuštění vašeho integračního projektu.

:::

#### Krok 10: E-mail

Klikněte na ozubené kolečko (nastavení) a zobrazí se nastavení vašeho projektu. Potřebujeme získat `Auth Token`, který musíte zkopírovat do prostředí **Node-RED** v konfiguraci uzlu **Blynk**.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-co2-monitor/radio-co2-monitor_integration-blynk-8.webp')}/>
  </div>
</div>

#### Krok 11: Nasazení

Nyní nasadíte svou aplikaci v **Node-RED** a v projektu **Blynk** stiskněte tlačítko „play“ a máte hotovo!

### Související dokumenty  <a id="related-documents"></a>

* [**Instalace na Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/)
* [**Nastavení nástrojového řetězce**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain)
* [**Průvodce nástrojovým řetězceme**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain)

