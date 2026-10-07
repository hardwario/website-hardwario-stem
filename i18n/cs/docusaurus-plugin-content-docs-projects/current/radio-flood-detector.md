---
slug: radio-flood-detector
title: Bezdrátový detektor zaplavení
---
import Image from '@theme/IdealImage';

# Bezdrátový detektor zaplavení

Tento návod vás provede projektem **Bezdrátový detektor zaplavení**. S detektorem budete pracovat v prostředí **Node-RED**, a když zachytí únik vody, služba **IFTTT** vám pošle push notifikaci do chytrého telefonu.

## Blokové schéma

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/projects-radio-flood-detector-block-diagram.webp')} alt="Blokové schéma: sada Radio Flood Detector se sondou LD-81 propojená rádiem s branou, Node-RED a IFTTT"/>
  </div>
</div>

## Požadavky

* Buď sada **HARDWARIO Radio Flood Detector Kit**, nebo jednotlivé komponenty:
  * 1x **HARDWARIO LD-81**
  * 1x **HARDWARIO Sensor Module**
  * 1x **HARDWARIO Core Module**
  * 1x **HARDWARIO Mini Battery Module**
  * 1x **HARDWARIO Radio Dongle**

* Jedna z následujících možností:
  * Nainstalovaný **HARDWARIO Playground** \(doporučeno\)

    Více informací najdete v dokumentu [**Rychlý start s firmwarem**](https://docs.hardwario.com/tower/firmware-development/firmware-quick-start/).

  * **Raspberry Pi** s distribucí **HARDWARIO Raspbian**

    Více informací najdete v dokumentu [**Instalace na Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/).

  * Nainstalovaný **HARDWARIO Firmware Tool**

    Více informací najdete v dokumentu [**Nastavení toolchainu**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain).

## Nahrání firmwaru

Firmware nahrajete do modulu **Core Module** v aplikaci **HARDWARIO Playground**.

### Krok 1: Připojte modul **Core Module** kabelem Micro USB k počítači

### Krok 2: Nahrajte firmware

Spusťte HARDWARIO Playground, na záložce Firmware vyberte firmware `bcf-radio-flood-detector` a nahrajte ho do modulu **Core Module**:

:::warning

**Nahrávání firmwaru do Core Module R1 a R2**
Rozdíly v nahrávání firmwaru do staršího **Core Module 1** a novějšího **Core Module 2** popisuje **srovnání Core Module R1 a R2** v sekci **Hardware**.

:::

### Krok 3: Odpojte kabel Micro USB od modulu **Core Module** a od počítače

:::success

Firmware je úspěšně nahraný.

:::

## Sestavení hardwaru

Podívejte se na krátké video s jednoduchou ukázkou krok za krokem:

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
  <iframe
  src="https://www.youtube.com/embed/pLUBDdo_niE?si=9szPAdoXu-zgSyte"   title="YouTube video player"
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
  />
</div>


### Krok 1: Začněte modulem **Mini Battery Module**

### Krok 2: Nasaďte **Core Module** na **Mini Battery Module**

:::danger

Pokud používáte nový **HARDWARIO Playground**, použijte místo adresy [**http://localhost:1880/**](http://localhost:1880/) záložku **Functions**. Párování teď probíhá na záložce **Devices** a komunikaci otestujete na záložce **Messages**.

:::

### Krok 1: Otevřete **Node-RED** ve webovém prohlížeči

[http://localhost:1880/](http://localhost:1880/)

### Krok 2: Měli byste vidět prázdnou pracovní plochu **Flow 1**

### **Krok 3:** Vložte do flow následující úryvek \(pomocí **Menu &gt;&gt; Import**\) a klikněte na záložku **Flow 1**:

```text
[{"id":"2fc604fc.3b6abc","type":"inject","z":"dfc861b.b2a02a","name":"List all gateways","topic":"gateway/all/info/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":460,"wires":[["a2c10833.24d5d8"]]},{"id":"1e4502b8.2f63fd","type":"inject","z":"dfc861b.b2a02a","name":"Start node pairing","topic":"gateway/usb-dongle/pairing-mode/start","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":570,"y":580,"wires":[["795ff5a7.8e266c"]]},{"id":"3d844ce2.932864","type":"inject","z":"dfc861b.b2a02a","name":"Stop node pairing","topic":"gateway/usb-dongle/pairing-mode/stop","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":640,"wires":[["5967c452.c838bc"]]},{"id":"f202b253.2705b","type":"inject","z":"dfc861b.b2a02a","name":"List paired nodes","topic":"gateway/usb-dongle/nodes/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":520,"wires":[["f0aca138.0b2c3"]]},{"id":"349f02fd.890f6e","type":"inject","z":"dfc861b.b2a02a","name":"Unpair all nodes","topic":"gateway/usb-dongle/nodes/purge","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":700,"wires":[["2f1c5bb6.53d6f4"]]},{"id":"cf61d75d.4ad8f8","type":"mqtt in","z":"dfc861b.b2a02a","name":"","topic":"#","qos":"2","broker":"67b8de4a.029d3","x":530,"y":400,"wires":[["a5cb0658.f5d658"]]},{"id":"a5cb0658.f5d658","type":"debug","z":"dfc861b.b2a02a","name":"","active":true,"console":"false","complete":"false","x":790,"y":400,"wires":[]},{"id":"a2c10833.24d5d8","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":460,"wires":[]},{"id":"f0aca138.0b2c3","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":520,"wires":[]},{"id":"795ff5a7.8e266c","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":580,"wires":[]},{"id":"5967c452.c838bc","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":640,"wires":[]},{"id":"2f1c5bb6.53d6f4","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":700,"wires":[]},{"id":"67b8de4a.029d3","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"717f7c18.ba0a24","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```
Bude to vypadat takto:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-node-red-gw-controls.webp')} alt="Importovaný flow v Node-RED s tlačítky pro příkazy brány, každé napojené na uzel MQTT"/>
  </div>
</div>

:::info

Úryvek přidá tlačítka pro příkazy brány a rádia. Příkazy se odesílají protokolem MQTT.

:::

### Krok 4: Nasaďte flow tlačítkem **Deploy** v pravém horním rohu

### Krok 5: Otevřete záložku **debug**:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-node-red-gw-debug.webp')} alt="Editor Node-RED se zvýrazněnou záložkou debug v pravém panelu"/>
  </div>
</div>

:::info

Na záložce **debug** uvidíte všechny zprávy MQTT.

:::

### Krok 6: Klikněte na tlačítko **List all gateways**. Na záložce **debug** byste měli vidět podobnou odpověď

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-node-red-gw-list.webp')} alt="Záložka debug s odpovědí s informacemi o bráně po kliknutí na List all gateways"/>
  </div>
</div>

:::success

Teď máte funkční **Node-RED**, **MQTT**, **HARDWARIO Radio Dongle** a **HARDWARIO Gateway**.

:::

## Rádiové párování

V této části navážeme rádiové spojení mezi **Radio Dongle** a sestavou **Radio Flood Detector**.

V prostředí **Node-RED** postupujte takto:

### Krok 1: Klikněte na tlačítko **Start node pairing**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-node-red-gw-pair-start.webp')} alt="Zvýrazněné tlačítko Start node pairing a potvrzení zahájení párování v záložce debug"/>
  </div>
</div>

### Krok 2: Vložte baterie do sestavy **Radio Flood Detector**, čímž odešlete požadavek na párování (červená LED na modulu **Core Module** by se také měla asi na 2 sekundy rozsvítit)

### Krok 3: Klikněte na tlačítko **Stop node pairing**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-node-red-gw-pair-stop.webp')} alt="Zvýrazněné tlačítko Stop node pairing a potvrzení ukončení párování v záložce debug"/>
  </div>
</div>

:::success

Teď máte navázané rádiové spojení mezi uzlem (**Radio Flood Detector**) a bránou (**Radio Dongle**).

:::

## Test komunikace

V prostředí **Node-RED** postupujte takto:

### Krok 1: Přepněte se na záložku **debug** vpravo

### Krok 2: Ponořte senzor zaplavení **LD-81** do sklenice s vodou, tím spustíte rádiový přenos

Pak byste měli vidět podobné zprávy:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-radio-test.webp')} alt="Záložka debug se zprávami alarmu detektoru zaplavení přepínajícími mezi true a false"/>
  </div>
</div>

:::success

Teď máte ověřenou rádiovou komunikaci.

:::

## Krabička

Pokud máte vhodnou krabičku, můžete do ní sestavu vložit.

:::info

Více o krabičkách najdete v dokumentu [**Krabičky**](https://docs.hardwario.com/chester/hardware-description/enclosures/).

:::

## Integrace s IFTTT

V této části vytvoříme **Applet** ve službě **IFTTT**. **Applet** je pravidlo, které na určitou událost zareaguje akcí.

### Krok 1: Otevřete webový prohlížeč a přejděte na [**IFTTT**](https://ifttt.com/):

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-01.webp')} alt="Úvodní stránka IFTTT se zvýrazněným tlačítkem Sign in"/>
  </div>
</div>

### Krok 2: Přihlaste se do služby IFTTT. Zaregistrovat se můžete i účtem Google nebo Facebook

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-02.webp')} alt="Stránka Discover na IFTTT po přihlášení se zvýrazněnou položkou My Applets v menu"/>
  </div>
</div>

### Krok 3: V menu přejděte do **My Applets** a klikněte na tlačítko **New Applet**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-03.webp')} alt="Stránka My Applets se zvýrazněným tlačítkem New Applet"/>
  </div>
</div>

### Krok 4: Ve větě `if this then that` klikněte na **+this**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-04.webp')} alt="Editor nového appletu se zvýrazněným +this ve větě if this then that"/>
  </div>
</div>

### Krok 5: Vyhledejte službu **Webhooks** a vyberte ji

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-05.webp')} alt="Krok Choose a service s vyhledaným Webhooks a zvýrazněnou dlaždicí Webhooks"/>
  </div>
</div>

### Krok 6: Klikněte na **Receive a web request**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-06.webp')} alt="Krok Choose trigger se zvýrazněnou kartou Receive a web request"/>
  </div>
</div>

### **Krok 7:** Do pole **Event Name** napište `flood` a klikněte na **Create Trigger**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-07.webp')} alt="Pole triggeru s názvem události flood a zvýrazněným tlačítkem Create trigger"/>
  </div>
</div>

### **Krok 8:** Ve větě `if this then that` klikněte na **+that**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-08.webp')} alt="Editor nového appletu se zvýrazněným +that ve větě if this then that"/>
  </div>
</div>

### Krok 9: Vyhledejte službu pro akci **Notifications** a vyberte ji

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-09.webp')} alt="Krok Choose action service s vyhledaným Notifications a zvýrazněnou dlaždicí Notifications"/>
  </div>
</div>

### Krok 10: Klikněte na **Send a notification from the IFTTT app**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-10.webp')} alt="Krok Choose action se zvýrazněnou kartou Send a notification from the IFTTT app"/>
  </div>
</div>

### **Krok 11:** Do pole **Notification** vložte text `The flood detector has been flooded on {{OccurredAt}}` a klikněte na tlačítko **Create action**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-11.webp')} alt="Pole akce s vyplněným textem oznámení o zaplavení a zvýrazněným tlačítkem Create action"/>
  </div>
</div>

### Krok 12: Klikněte na tlačítko **Finish**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-12.webp')} alt="Krok Review and finish appletu flood se zvýrazněným tlačítkem Finish"/>
  </div>
</div>

### Krok 13: Klikněte na tlačítko **Webhooks**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-13.webp')} alt="Dokončený a zapnutý applet flood se zvýrazněnou ikonou Webhooks"/>
  </div>
</div>

### Krok 14: Klikněte na tlačítko **Documentation**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-14.webp')} alt="Stránka služby Webhooks se zvýrazněným tlačítkem Documentation"/>
  </div>
</div>

### Krok 15: Klikněte do pole **event**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-15.webp')} alt="Stránka dokumentace Webhooks s vaším klíčem a zvýrazněným polem event v adrese triggeru"/>
  </div>
</div>

### Krok 16: Do pole **event** vložte název `flood` a okno nechte otevřené

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-16.webp')} alt="Stránka dokumentace Webhooks s vyplněným flood v poli event adresy triggeru"/>
  </div>
</div>

### Krok 17: Nainstalujte si do chytrého telefonu aplikaci **IFTTT** a přihlaste se stejným účtem, ve kterém jste applet vytvořili. Když se aplikace zeptá, povolte jí push notifikace

### Krok 18: V okně prohlížeče klikněte na tlačítko **Test It**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-17.webp')} alt="Stránka dokumentace Webhooks se zvýrazněným tlačítkem Test It"/>
  </div>
</div>

### Krok 19: Do několika sekund by vám na chytrý telefon měla přijít push notifikace

### Krok 20: Zkopírujte si tento klíč do schránky, budete ho potřebovat později

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-ifttt-18.webp')} alt="Stránka dokumentace Webhooks se zvýrazněným osobním klíčem ke zkopírování"/>
  </div>
</div>

:::success

Teď máte ve službě **IFTTT** funkční **Applet** pro notifikace.

:::

## Propojení Node-RED s IFTTT

V této části propojíme událost zaplavení v MQTT s požadavkem HTTP na **IFTTT**, který spustí push notifikaci.

### Krok 1: Přepněte se do svého flow v **Node-RED**

### Krok 2: Vložte do flow následující úryvek (pomocí **Menu >> Import**):

```text
[{"id":"c6ce743.f65db88","type":"mqtt in","z":"d5a82106.8d3fa","name":"","topic":"node/flood-detector:0/flood-detector/a/alarm","qos":"2","broker":"29fba84a.b2af58","x":240,"y":140,"wires":[["7d9c308c.edf04"]]},{"id":"7d9c308c.edf04","type":"switch","z":"d5a82106.8d3fa","name":"","property":"payload","propertyType":"msg","rules":[{"t":"eq","v":"true","vt":"str"}],"checkall":"true","repair":false,"outputs":1,"x":510,"y":140,"wires":[["e2287fd0.90124"]]},{"id":"e2287fd0.90124","type":"ifttt out","z":"d5a82106.8d3fa","eventName":"flood","key":"40c1e6be.8cb228","x":670,"y":140,"wires":[]},{"id":"29fba84a.b2af58","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","willTopic":"","willQos":"0","willPayload":""},{"id":"40c1e6be.8cb228","type":"ifttt-key","z":""}]
```

Bude to vypadat takto:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-node-red-ifttt-snippet.webp')} alt="Flow v Node-RED propojující topic MQTT alarmu přes uzel switch s uzlem IFTTT flood"/>
  </div>
</div>

:::info

Úryvek propojí topic MQTT `node/flood-detector:0/flood-detector/a/alarm` se službou IFTTT. Než zprávu předáme do IFTTT, musíme propustit jen události `true`.

:::

### Krok 3: Dvakrát klikněte na uzel **IFTTT node** a upravte klíč IFTTT, který jste získali v předchozí části

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-flood-detector/radio-flood-detector-node-red-ifttt-key.webp')} alt="Dialog úpravy uzlu ifttt out s polem Key a ikonou tužky pro vložení klíče IFTTT"/>
  </div>
</div>

### Krok 4: Nastavení uložte tlačítkem **Done**

### Krok 5: Nasaďte flow tlačítkem **Deploy** v pravém horním rohu

:::success

Teď by vám měla přijít push notifikace, když kontakty senzoru zaplavení spojíte vlhkými prsty nebo je ponoříte do vody.

:::

### Související dokumenty <a id="related-documents"></a>

* [**Instalace na Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/)
* [**Nastavení toolchainu**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain)
* [**Průvodce toolchainem**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain)

