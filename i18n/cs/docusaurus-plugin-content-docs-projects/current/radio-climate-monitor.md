---
slug: radio-climate-monitor
title: Monitor klimatu
---
import Image from '@theme/IdealImage';

# Monitor klimatu

Tento dokument vás provede projektem **Mnitor klimatu**. Budete moci vidět dashboard s teplotou, vlhkostí, okolním světlem a atmosférickým tlakem v **Node-RED** a zobrazit data na svém chytrém telefonu pomocí **Blynk** cloudu a mobilní aplikace.

## Koncept
<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-climate-monitor_block-diagram.webp')}/>
  </div>
</div>

### Požadavky <a id="requirements"></a>

* Buď **HARDWARIO Sadu Clime**, nebo jednotlivé komponenty:
  * 1x **HARDWARIO Climate Module**
  * 1x **HARDWARIO Core Module**
  * 1x **HARDWARIO Mini Battery Module**
  * 1x **HARDWARIO Radio Dongle**
* Jedna z těchto možností:
  * **HARDWARIO Playground** nainstalováno  \(recommended\)

   Další informace naleznete v [**Quick Start Guide**]([https://docs.hardwario.com/tower/firmware-development/firmware-quick-start/](https://docs.hardwario.com/tower/firmware-development/firmware-quick-start/)) dokumentu.

  * **Raspberry Pi** s distribucí **HARDWARIO Raspbian**

    Další informace naleznete v dokumentu  [**Raspberry Pi Installation**](https://docs.hardwario.com/tower/server-raspberry-pi/).

  * **HARDWARIO Toolchain** nainstalováno

    Další informace naleznete v dokumentu [**Toolchain Setup**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain).

## Nahrání firmwaru

V tomto postupu použijeme **HARDWARIO Playground** k nahrání firmwaru do **Core Modulu**.

### Krok 1: Připojte Micro USB kabel k **Core Modulu** a vašemu počítači

### Krok ****2: Spusťte HARDWARIO Playground. Na kartě Firmware vyberte a nahrajte firmware `bcf-radio-climate-monitor` do **Core Modulu**

:::warning

**Přeflashování jádrového modulu R1 a R2**
Pro rozdíly při flashování staršího **Core Module 1** a novějšího **Core Module 2** si přečtěte **srovnání Core Module R1 a R2** v sekci **Hardware**.
:::

### Krok 3: Odpojte Micro USB kabel od **Core Module** a vašeho počítače

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


### Krok 1: Začněte s **Mini Battery Module**

:::warning

Ujistěte se, že **Mini Battery Module** nemá vložené baterie.

:::

### **Krok 2:** Připojte **Core Module** na vrchol **Mini Battery Module**

### **Krok 3:** Připojte **Climate Module** na vrchol **Core Module**

## Playground Bootstrap

:::danger

Pokud používáte nový **HARDWARIO Playground**, použijte záložku **Funkce** místo [**http://localhost:1880/**](http://localhost:1880/). Také proces párování se nyní provádí na kartě **Zařízení**. Pro test komunikace použijte záložku **Zprávy**.

:::

### **Krok 1:** Otevřete **Node-RED** ve svém webovém prohlížeči

[http://localhost:1880/](http://localhost:1880/)

### Krok 2: Měli byste vidět prázdné pracovní prostředí s **Flow 1**

### Krok 3: Vložte následující úryvek do flow \(použitím **Menu &gt;&gt; Import**\) a klikněte na záložku **Flow 1**

```text
[{"id":"2fc604fc.3b6abc","type":"inject","z":"dfc861b.b2a02a","name":"List all gateways","topic":"gateway/all/info/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":460,"wires":[["a2c10833.24d5d8"]]},{"id":"1e4502b8.2f63fd","type":"inject","z":"dfc861b.b2a02a","name":"Start node pairing","topic":"gateway/usb-dongle/pairing-mode/start","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":570,"y":580,"wires":[["795ff5a7.8e266c"]]},{"id":"3d844ce2.932864","type":"inject","z":"dfc861b.b2a02a","name":"Stop node pairing","topic":"gateway/usb-dongle/pairing-mode/stop","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":640,"wires":[["5967c452.c838bc"]]},{"id":"f202b253.2705b","type":"inject","z":"dfc861b.b2a02a","name":"List paired nodes","topic":"gateway/usb-dongle/nodes/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":520,"wires":[["f0aca138.0b2c3"]]},{"id":"349f02fd.890f6e","type":"inject","z":"dfc861b.b2a02a","name":"Unpair all nodes","topic":"gateway/usb-dongle/nodes/purge","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":700,"wires":[["2f1c5bb6.53d6f4"]]},{"id":"cf61d75d.4ad8f8","type":"mqtt in","z":"dfc861b.b2a02a","name":"","topic":"#","qos":"2","broker":"67b8de4a.029d3","x":530,"y":400,"wires":[["a5cb0658.f5d658"]]},{"id":"a5cb0658.f5d658","type":"debug","z":"dfc861b.b2a02a","name":"","active":true,"console":"false","complete":"false","x":790,"y":400,"wires":[]},{"id":"a2c10833.24d5d8","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":460,"wires":[]},{"id":"f0aca138.0b2c3","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":520,"wires":[]},{"id":"795ff5a7.8e266c","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":580,"wires":[]},{"id":"5967c452.c838bc","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":640,"wires":[]},{"id":"2f1c5bb6.53d6f4","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":700,"wires":[]},{"id":"67b8de4a.029d3","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"717f7c18.ba0a24","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```

Bude to vypadat takto:


<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-climate-monitor_node-red-gw-controls.webp')}/>
  </div>
</div>

:::info

Tento úryvek poskytuje ovládací tlačítka pro příkazy gateway/rádia. Tyto příkazy jsou odesílány prostřednictvím protokolu MQTT.

:::

### Krok 4: Nasazení flow pomocí tlačítka **Nasadit** v pravém horním rohu

### Krok 5: Otevřete záložku **debug**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-climate-monitor_node-red-gw-debug.webp')}/>
  </div>
</div>

:::info

Na kartě **debug** budete moci vidět všechny MQTT zprávy.

:::

### Krok 6: Klikněte na tlačítko **List all gateways**. Měli byste vidět odpověď jako tuto na kartě **debug**.


<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-climate-monitor_node-red-gw-list.webp')}/>
  </div>
</div>

:::success

V tuto chvíli máte funkční **Node-RED**, **MQTT**, **HARDWARIO Radio Dongle** a **HARDWARIO Gateway**.

:::

##  Párování rádia

V této části vytvoříme rádiové spojení mezi  **Radio Dongle** a **Sadou Clime**.

Postupujte podle těchto kroků v **Node-RED**:

### Krok 1: Klikněte na tlačítko **Start node pairing**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-climate-monitor_node-red-gw-pair-start.webp')}/>
  </div>
</div>

### Krok 2: Párování Climate monitoru

Vložte baterie do **Sady Clime**, aby se odeslal žádost o párování \(měli byste také vidět, že červená LED na **Core Module** bude svítit asi 2 sekundy\).

### Krok 3: Klikněte na tlačítko **Stop node pairing**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-climate-monitor_node-red-gw-pair-stop.webp')}/>
  </div>
</div>

:::success

V tuto chvíli jste navázali rádiové spojení mezi node \(**Sadou Clime**\) a gateway \(**Radio Dongle**\).

:::

## Test komunikace

Follow these steps in **Node-RED**:

### Krok 1: Přepněte na záložku **debug** vpravo

### Krok 2: Otestujte připojení

Začněte dýchat na teplotní senzor na **Climate Module** , aby došlo ke změně teploty a tím k vyvolání rádiového přenosu.

Měli byste pak vidět podobné zprávy:


<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-climate-monitor_radio-test.webp')}/>
  </div>
</div>

:::success

V tuto chvíli máte ověřenou rádiovou komunikaci.

:::

## Kryty

Volitelně umístěte montáž do příslušného krytu, pokud nějaký máte.

:::info

Další informace o krytech naleznete v dokumentu [**Enclosures**](https://docs.hardwario.com/chester/hardware-description/enclosures/).

:::

##  Integrace s Blynk

Nyní jsme sestavili naši sadu a pojďme začít s nějakou základní integrací s **Blynk**. Začneme, aniž bychom popisovali, co **Blynk** je. Pokud chcete získat nějaké informace o tom, co **Blynk** je. Nejlepší, co můžete udělat, je navštívit jejich [**stránku**](https://www.blynk.cc/). V našem příkladu vám ukážeme, jak zobrazit grafy hodnot ze senzorů v mobilní aplikaci **Blynk**.

Nejprve musíme nakonfigurovat naši aplikaci **Node-RED**.

### Step 1: Blynk nodes

Pokud používáte verzi HARDWARIO raspi, mělo by to být v pořádku, ale přesto zkontrolujte, zda jsou nainstalovány nodes **Blynk**. Pokud používáte verzi HARDWARIO raspi, měli byste být v pořádku, ale přesto zkontrolujte, zda jsou nainstalovány nodes **Blynk**. \ (Můžete je vidět v levém postranním menu v **Node-RED**\). (Můžete je zobrazit v levém postranním menu v **Node-RED**\). Jinak budete muset nainstalovat balíček **Node-RED** `node-red-contrib-blynk-ws`.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-co2-monitor_integration-nodered-1.webp')}/>
  </div>
</div>

### Krok 2: Přidejte další **Flow** \(můžete je přidat pomocí velkého tlačítka plus vedle názvu flow\). Nový tok bude mít název **Tok 2**

### **Krok 3:** Vložte následující úryvek do nově vytvořeného **Flow 2** \(použitím **Menu &gt;&gt; Import**\)

```text
[{"id":"4914605c.76972","type":"mqtt in","z":"28050251.59dc0e","name":"","topic":"node/climate-monitor:0/lux-meter/0:0/illuminance","qos":"2","broker":"58254712.b61068","x":230,"y":520,"wires":[["431157f1.546248"]]},{"id":"dcf5bf8d.a0242","type":"mqtt in","z":"28050251.59dc0e","name":"","topic":"node/climate-monitor:0/thermometer/0:0/temperature","qos":"2","broker":"58254712.b61068","x":240,"y":580,"wires":[["be96b6aa.eed098"]]},{"id":"2ac2eae7.308486","type":"mqtt in","z":"28050251.59dc0e","name":"","topic":"node/climate-monitor:0/hygrometer/0:4/relative-humidity","qos":"2","broker":"58254712.b61068","x":250,"y":640,"wires":[["dbe4b438.be4ef8"]]},{"id":"431157f1.546248","type":"blynk-ws-out-write","z":"28050251.59dc0e","name":"Pin V0 - Write","pin":0,"pinmode":0,"client":"1b003066.8ca2c","x":659,"y":520,"wires":[]},{"id":"be96b6aa.eed098","type":"blynk-ws-out-write","z":"28050251.59dc0e","name":"","pin":"1","pinmode":0,"client":"1b003066.8ca2c","x":659,"y":580,"wires":[]},{"id":"dbe4b438.be4ef8","type":"blynk-ws-out-write","z":"28050251.59dc0e","name":"","pin":"2","pinmode":0,"client":"1b003066.8ca2c","x":659,"y":640,"wires":[]},{"id":"58254712.b61068","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"1b003066.8ca2c","type":"blynk-ws-client","z":"","name":"","path":"ws://blynk-cloud.com/websockets","key":"","dbg_all":false,"dbg_read":false,"dbg_write":false,"dbg_notify":false,"dbg_mail":false,"dbg_prop":false,"dbg_low":false,"dbg_pins":""}]
```

Bude to vypadat takto:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-climate-monitor_nodered-screen-1.webp')}/>
  </div>
</div>

:::info

Pokud to chcete použít pro jiné senzory, stačí změnit MQTT témata.

:::

### Krok 4: Připojte

Nakonfigurujte MQTT node, aby se připojil k vašemu brokeru. Pravděpodobně se připojí na localhost, pokud používáte Raspberry Pi. Poté budete muset nakonfigurovat **Blynk**node. Jednoduše vyplňte URL `ws://blynk-cloud.com/websockets`. `Auth Token` nakonfigurujeme později po jeho získání od Blynk e-mailem.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-climate-monitor_nodered-screen-2.webp')}/>
  </div>
</div>

### Krok 5: Nyní si stáhněte aplikaci **Blynk** z [**App Store**](https://apps.apple.com/us/app/blynk-iot/id1559317868) nebo [**Google Play**](https://play.google.com/store/apps/details?id=cloud.blynk&pcampaignid=web_share). Vytvořte účet a přihlaste se.




### **Krok 6:** Po instalaci byste měli vytvořit účet, přihlásit se a měli byste vidět něco takového

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-climate-monitor_blynk-3.webp')}/>
  </div>
</div>

### Krok 7: Nyní klikněte na tlačítko v pravém horním rohu pro naskenování QR kódu


<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-climate-monitor_blynk-copy.webp')}/>
  </div>
</div>

### Krok 8: Nyní byste měli naskenovat následující QR kód, abyste získali vše předkonfigurované

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-climate-monitor_blynk-qr.webp')}/>
  </div>
</div>

### Krok 9: Měli byste vidět něco takového



<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-climate-monitor_blynk-10.webp')}/>
  </div>
</div>

### Krok 10: E-mail

Klikněte na ozubené kolečko a měli byste vidět nastavení pro váš projekt. Musíme získat `Auth Token`, který musíte zkopírovat do našeho **Node-RED** v node konfiguraci **Blynk**.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-climate-monitor/radio-climate-monitor_blynk-auth.webp')}/>
  </div>
</div>

### Krok 11: Nyní nasadíte svou aplikaci **Node-RED** a stisknete tlačítko přehrávání ve vašem projektu **Blynk** a měli byste být hotovi!

### Související dokumenty <a id="related-documents"></a>

* [**Raspberry Pi Installation**](https://docs.hardwario.com/tower/server-raspberry-pi/)
* [**Toolchain Setup**](https://docs.hardwario.com/tower/platform-integrations/grafana-visualization/#example-output-for-wireless-climate-monitor-and-wireless-co2-monitor-projects)
* [**Toolchain Guide**](https://docs.hardwario.com/tower/platform-integrations/grafana-visualization/#example-output-for-wireless-climate-monitor-and-wireless-co2-monitor-projects)

