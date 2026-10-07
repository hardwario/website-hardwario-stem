---
slug: radio-climate-monitor
title: Bezdrátový monitor klimatu
---
import Image from '@theme/IdealImage';

# Bezdrátový monitor klimatu

Tento návod vás provede projektem **Bezdrátový monitor klimatu**. V prostředí **Node-RED** pak uvidíte dashboard s teplotou, vlhkostí, okolním osvětlením a atmosférickým tlakem.

## Blokové schéma

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-climate-monitor-block-diagram.webp')} alt="Blokové schéma: sada Radio Climate Monitor propojená sub-GHz rádiem s donglem Radio Dongle a bránou s Node-RED"/>
  </div>
</div>

### Požadavky <a id="requirements"></a>

* Buď [Sada Clime](https://www.hardwario.store/cz/p/clime-set), nebo jednotlivé komponenty:

  * 1x [Climate Module](https://www.hardwario.store/cz/p/climate-module)
  * 1x [Core Module](https://www.hardwario.store/cz/p/core-module)
  * 1x [Mini Battery Module](https://www.hardwario.store/cz/p/mini-battery-module)
  * 1x [Radio Dongle](https://www.hardwario.store/cz/p/radio-dongle)

* Jedna z těchto možností:

  * Nainstalovaný **HARDWARIO Playground** \(doporučeno\)<br></br>
    Více informací najdete v dokumentu [**Rychlý start s firmwarem**](https://docs.hardwario.com/tower/firmware-development/firmware-quick-start/).
  * **Raspberry Pi** s distribucí **HARDWARIO Raspbian**<br></br>
    Více informací najdete v dokumentu [**Instalace na Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/).
  * Nainstalovaný **HARDWARIO Toolchain**<br></br>
    Více informací najdete v dokumentu [**Nastavení toolchainu**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain).

## Nahrání firmwaru

Firmware nahrajete do modulu **Core Module** v aplikaci **HARDWARIO Playground**.

#### Krok 1: Připojte modul **Core Module** kabelem Micro USB k počítači

#### Krok 2: Spusťte HARDWARIO Playground, na záložce Firmware vyberte firmware `bcf-radio-climate-monitor` a nahrajte ho do modulu **Core Module**

:::warning

**Nahrávání firmwaru do Core Module R1 a R2**
Rozdíly v nahrávání firmwaru do staršího **Core Module 1** a novějšího **Core Module 2** popisuje **srovnání Core Module R1 a R2** v sekci **Hardware**.
:::

#### Krok 3: Odpojte kabel Micro USB od modulu **Core Module** a od počítače

:::success

Firmware je úspěšně nahraný.

:::

## Sestavení hardwaru

Podívejte se na krátké video s jednoduchou ukázkou krok za krokem:


<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
  <iframe
    src="https://www.youtube.com/embed/tyyjO0GoyNA?si=BF__UBQizR-FK9TJ"    title="YouTube video player"
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
  />
</div>


#### Krok 1: Začněte modulem **Mini Battery Module**

:::warning

Zkontrolujte, že v modulu **Mini Battery Module** nejsou vložené baterie.

:::

#### **Krok 2:** Nasaďte **Core Module** na **Mini Battery Module**

#### **Krok 3:** Nasaďte **Climate Module** na **Core Module**

## Příprava Playgroundu

:::danger

Pokud používáte nový **HARDWARIO Playground**, použijte místo adresy [**http://localhost:1880/**](http://localhost:1880/) záložku **Functions**. Párování teď probíhá na záložce **Devices** a komunikaci otestujete na záložce **Messages**.

:::

#### **Krok 1:** Otevřete **Node-RED** ve webovém prohlížeči

[http://localhost:1880/](http://localhost:1880/)

#### Krok 2: Měli byste vidět prázdnou pracovní plochu **Flow 1**

#### Krok 3: Vložte do flow následující úryvek \(pomocí **Menu &gt;&gt; Import**\) a klikněte na záložku **Flow 1**

```text
[{"id":"2fc604fc.3b6abc","type":"inject","z":"dfc861b.b2a02a","name":"List all gateways","topic":"gateway/all/info/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":460,"wires":[["a2c10833.24d5d8"]]},{"id":"1e4502b8.2f63fd","type":"inject","z":"dfc861b.b2a02a","name":"Start node pairing","topic":"gateway/usb-dongle/pairing-mode/start","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":570,"y":580,"wires":[["795ff5a7.8e266c"]]},{"id":"3d844ce2.932864","type":"inject","z":"dfc861b.b2a02a","name":"Stop node pairing","topic":"gateway/usb-dongle/pairing-mode/stop","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":640,"wires":[["5967c452.c838bc"]]},{"id":"f202b253.2705b","type":"inject","z":"dfc861b.b2a02a","name":"List paired nodes","topic":"gateway/usb-dongle/nodes/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":520,"wires":[["f0aca138.0b2c3"]]},{"id":"349f02fd.890f6e","type":"inject","z":"dfc861b.b2a02a","name":"Unpair all nodes","topic":"gateway/usb-dongle/nodes/purge","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":700,"wires":[["2f1c5bb6.53d6f4"]]},{"id":"cf61d75d.4ad8f8","type":"mqtt in","z":"dfc861b.b2a02a","name":"","topic":"#","qos":"2","broker":"67b8de4a.029d3","x":530,"y":400,"wires":[["a5cb0658.f5d658"]]},{"id":"a5cb0658.f5d658","type":"debug","z":"dfc861b.b2a02a","name":"","active":true,"console":"false","complete":"false","x":790,"y":400,"wires":[]},{"id":"a2c10833.24d5d8","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":460,"wires":[]},{"id":"f0aca138.0b2c3","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":520,"wires":[]},{"id":"795ff5a7.8e266c","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":580,"wires":[]},{"id":"5967c452.c838bc","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":640,"wires":[]},{"id":"2f1c5bb6.53d6f4","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":700,"wires":[]},{"id":"67b8de4a.029d3","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"717f7c18.ba0a24","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```

Bude to vypadat takto:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-climate-monitor-node-red-gw-controls.webp')} alt="Importovaný flow v Node-RED s tlačítky pro příkazy brány, každé napojené na uzel MQTT"/>
  </div>
</div><br></br>

:::info

Úryvek přidá tlačítka pro příkazy brány a rádia. Příkazy se odesílají protokolem MQTT.

:::

#### Krok 4: Nasaďte flow tlačítkem **Deploy** v pravém horním rohu

#### Krok 5: Otevřete záložku **debug**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-climate-monitor-node-red-gw-debug.webp')} alt="Editor Node-RED se zvýrazněnou záložkou debug v pravém panelu"/>
  </div>
</div><br></br>

:::info

Na záložce **debug** uvidíte všechny zprávy MQTT.

:::

#### Krok 6: Klikněte na tlačítko **List all gateways**. Na záložce **debug** byste měli vidět podobnou odpověď


<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-climate-monitor-node-red-gw-list.webp')} alt="Záložka debug s odpovědí s informacemi o bráně po kliknutí na List all gateways"/>
  </div>
</div><br></br>

:::success

Teď máte funkční **Node-RED**, **MQTT**, **HARDWARIO Radio Dongle** a **HARDWARIO Gateway**.

:::

## Rádiové párování

V této části navážeme rádiové spojení mezi **Radio Dongle** a sestavou **Radio Climate Monitor**.

V prostředí **Node-RED** postupujte takto:

#### Krok 1: Klikněte na tlačítko **Start node pairing**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-climate-monitor-node-red-gw-pair-start.webp')} alt="Zvýrazněné tlačítko Start node pairing a potvrzení zahájení párování v záložce debug"/>
  </div>
</div>

#### Krok 2: Spárujte sestavu Climate Monitor

Vložte baterie do sestavy **Radio Climate Monitor**, čímž odešlete požadavek na párování \(červená LED na modulu **Core Module** by se také měla asi na 2 sekundy rozsvítit\).

#### Krok 3: Klikněte na tlačítko **Stop node pairing**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-climate-monitor-node-red-gw-pair-stop.webp')} alt="Zvýrazněné tlačítko Stop node pairing a potvrzení ukončení párování v záložce debug"/>
  </div>
</div><br></br>

:::success

Teď máte navázané rádiové spojení mezi uzlem \(**Radio Climate Monitor**\) a bránou \(**Radio Dongle**\).

:::

## Test komunikace

V prostředí **Node-RED** postupujte takto:

#### Krok 1: Přepněte na záložku **debug** vpravo

#### Krok 2: Otestujte spojení

Dýchněte na teplotní senzor na modulu **Climate Module**. Změna teploty spustí rádiový přenos.

Pak byste měli vidět podobné zprávy:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-climate-monitor-radio-test.webp')} alt="Záložka debug s příchozími zprávami MQTT s naměřenou teplotou, vlhkostí a osvětlením"/>
  </div>
</div><br></br>

:::success

Teď máte ověřenou rádiovou komunikaci.

:::

## Krabička

Pokud máte vhodnou krabičku, můžete do ní sestavu vložit.

:::info

Více o krabičkách najdete v dokumentu [**Krabičky**](https://docs.hardwario.com/chester/hardware-description/enclosures/).

:::

### Související dokumenty <a id="related-documents"></a>

* [**Instalace na Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/)
* [**Nastavení toolchainu**](https://docs.hardwario.com/tower/platform-integrations/grafana-visualization/#example-output-for-wireless-climate-monitor-and-wireless-co2-monitor-projects)
* [**Průvodce toolchainem**](https://docs.hardwario.com/tower/platform-integrations/grafana-visualization/#example-output-for-wireless-climate-monitor-and-wireless-co2-monitor-projects)