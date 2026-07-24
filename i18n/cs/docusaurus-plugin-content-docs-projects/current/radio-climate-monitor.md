---
slug: radio-climate-monitor
title: Bezdrátový monitor klimatu
---
import Image from '@theme/IdealImage';

# Bezdrátový monitor klimatu

Tento dokument vás provede projektem **Monitor klimatu**. Budete moci vidět dashboard s teplotou, vlhkostí, okolním světlem a atmosférickým tlakem v **Node-RED**.

## Koncept

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-climate-monitor-block-diagram.webp')}/>
  </div>
</div>

### Požadavky <a id="requirements"></a>

* Buď [Sadu Clime](https://www.hardwario.store/cz/p/clime-set), nebo jednotlivé komponenty:

  * 1x [Climate Module](https://www.hardwario.store/cz/p/climate-module)
  * 1x [Core Module](https://www.hardwario.store/cz/p/core-module)
  * 1x [Mini Battery Module](https://www.hardwario.store/cz/p/mini-battery-module)
  * 1x [Radio Dongle](https://www.hardwario.store/cz/p/radio-dongle)

* Jedna z těchto možností:

  * **HARDWARIO Playground** nainstalováno \(recommended\)<br></br>
   Další informace naleznete v [**Quick Start Guide**](https://docs.hardwario.com/tower/firmware-development/firmware-quick-start/) dokumentu.
  * **Raspberry Pi** s distribucí **HARDWARIO Raspbian**<br></br>
    Další informace naleznete v dokumentu  [**Raspberry Pi Installation**](https://docs.hardwario.com/tower/server-raspberry-pi/).
  * **HARDWARIO Toolchain** nainstalováno<br></br>
    Další informace naleznete v dokumentu [**Toolchain Setup**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain).

## Nahrání firmwaru

V tomto postupu použijeme **HARDWARIO Playground** k nahrání firmwaru do **Core Modulu**.

#### Krok 1: Připojte Micro USB kabel k **Core Modulu** a vašemu počítači

#### Krok 2: Spusťte HARDWARIO Playground. Na kartě Firmware vyberte a nahrajte firmware `bcf-radio-climate-monitor` do **Core Modulu**

:::warning

**Přeflashování jádrového modulu R1 a R2**
Pro rozdíly při flashování staršího **Core Module 1** a novějšího **Core Module 2** si přečtěte **srovnání Core Module R1 a R2** v sekci **Hardware**.
:::

#### Krok 3: Odpojte Micro USB kabel od **Core Module** a vašeho počítače

:::success

V tuto chvíli je váš firmware úspěšně nahrán.

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


#### Krok 1: Začněte s **Mini Battery Module**

:::warning

Ujistěte se, že **Mini Battery Module** nemá vložené baterie.

:::

#### **Krok 2:** Připojte **Core Module** na vrchol **Mini Battery Module**

#### **Krok 3:** Připojte **Climate Module** na vrchol **Core Module**

## Playground Bootstrap

:::danger

Pokud používáte nový **HARDWARIO Playground**, použijte záložku **Funkce** místo [**http://localhost:1880/**](http://localhost:1880/). Také proces párování se nyní provádí na kartě **Zařízení**. Pro test komunikace použijte záložku **Zprávy**.

:::

#### **Krok 1:** Otevřete **Node-RED** ve svém webovém prohlížeči

[http://localhost:1880/](http://localhost:1880/)

#### Krok 2: Měli byste vidět prázdné pracovní prostředí s **Flow 1**

#### Krok 3: Vložte následující úryvek do flow \(použitím **Menu &gt;&gt; Import**\) a klikněte na záložku **Flow 1**

```text
[{"id":"2fc604fc.3b6abc","type":"inject","z":"dfc861b.b2a02a","name":"List all gateways","topic":"gateway/all/info/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":460,"wires":[["a2c10833.24d5d8"]]},{"id":"1e4502b8.2f63fd","type":"inject","z":"dfc861b.b2a02a","name":"Start node pairing","topic":"gateway/usb-dongle/pairing-mode/start","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":570,"y":580,"wires":[["795ff5a7.8e266c"]]},{"id":"3d844ce2.932864","type":"inject","z":"dfc861b.b2a02a","name":"Stop node pairing","topic":"gateway/usb-dongle/pairing-mode/stop","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":640,"wires":[["5967c452.c838bc"]]},{"id":"f202b253.2705b","type":"inject","z":"dfc861b.b2a02a","name":"List paired nodes","topic":"gateway/usb-dongle/nodes/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":520,"wires":[["f0aca138.0b2c3"]]},{"id":"349f02fd.890f6e","type":"inject","z":"dfc861b.b2a02a","name":"Unpair all nodes","topic":"gateway/usb-dongle/nodes/purge","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":700,"wires":[["2f1c5bb6.53d6f4"]]},{"id":"cf61d75d.4ad8f8","type":"mqtt in","z":"dfc861b.b2a02a","name":"","topic":"#","qos":"2","broker":"67b8de4a.029d3","x":530,"y":400,"wires":[["a5cb0658.f5d658"]]},{"id":"a5cb0658.f5d658","type":"debug","z":"dfc861b.b2a02a","name":"","active":true,"console":"false","complete":"false","x":790,"y":400,"wires":[]},{"id":"a2c10833.24d5d8","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":460,"wires":[]},{"id":"f0aca138.0b2c3","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":520,"wires":[]},{"id":"795ff5a7.8e266c","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":580,"wires":[]},{"id":"5967c452.c838bc","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":640,"wires":[]},{"id":"2f1c5bb6.53d6f4","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":700,"wires":[]},{"id":"67b8de4a.029d3","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"717f7c18.ba0a24","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```

Bude to vypadat takto:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-climate-monitor-node-red-gw-controls.webp')}/>
  </div>
</div><br></br>

:::info

Tento úryvek poskytuje ovládací tlačítka pro příkazy gateway/rádia. Tyto příkazy jsou odesílány prostřednictvím protokolu MQTT.

:::

#### Krok 4: Nasazení flow pomocí tlačítka **Nasadit** v pravém horním rohu

#### Krok 5: Otevřete záložku **debug**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-climate-monitor-node-red-gw-debug.webp')}/>
  </div>
</div><br></br>

:::info

Na kartě **debug** budete moci vidět všechny MQTT zprávy.

:::

#### Krok 6: Klikněte na tlačítko **List all gateways**. Měli byste vidět odpověď jako tuto na kartě **debug**.


<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-climate-monitor-node-red-gw-list.webp')}/>
  </div>
</div><br></br>

:::success

V tuto chvíli máte funkční **Node-RED**, **MQTT**, **HARDWARIO Radio Dongle** a **HARDWARIO Gateway**.

:::

##  Párování rádia

V této části vytvoříme rádiové spojení mezi  **Radio Dongle** a **Sadou Clime**.

Postupujte podle těchto kroků v **Node-RED**:

#### Krok 1: Klikněte na tlačítko **Start node pairing**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-climate-monitor-node-red-gw-pair-start.webp')}/>
  </div>
</div>

#### Krok 2: Párování Climate monitoru

Vložte baterie do **Sady Clime**, aby se odeslal žádost o párování \(měli byste také vidět, že červená LED na **Core Module** bude svítit asi 2 sekundy\).

#### Krok 3: Klikněte na tlačítko **Stop node pairing**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-climate-monitor-node-red-gw-pair-stop.webp')}/>
  </div>
</div><br></br>

:::success

V tuto chvíli jste navázali rádiové spojení mezi node \(**Sadou Clime**\) a gateway \(**Radio Dongle**\).

:::

## Test komunikace

Follow these steps in **Node-RED**:

#### Krok 1: Přepněte na záložku **debug** vpravo

#### Krok 2: Otestujte připojení

Začněte dýchat na teplotní senzor na **Climate Module** , aby došlo ke změně teploty a tím k vyvolání rádiového přenosu.

Měli byste pak vidět podobné zprávy:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-climate-monitor-radio-test.webp')}/>
  </div>
</div><br></br>

:::success

V tuto chvíli máte ověřenou rádiovou komunikaci.

:::

## Kryty

Volitelně umístěte montáž do příslušného krytu, pokud nějaký máte.

:::info

Další informace o krytech naleznete v dokumentu [**Enclosures**](https://docs.hardwario.com/chester/hardware-description/enclosures/).

:::

### Související dokumenty <a id="related-documents"></a>

* [**Instalace Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/)
* [**Nastavení Toolchain**](https://docs.hardwario.com/tower/platform-integrations/grafana-visualization/#example-output-for-wireless-climate-monitor-and-wireless-co2-monitor-projects)
* [**Průvodce Toolchain**](https://docs.hardwario.com/tower/platform-integrations/grafana-visualization/#example-output-for-wireless-climate-monitor-and-wireless-co2-monitor-projects)