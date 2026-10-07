---
slug: radio-motion-detector
title: Bezdrátový detektor pohybu
---
import Image from '@theme/IdealImage';

# Bezdrátový detektor pohybu

Tento návod vás provede projektem **Bezdrátový detektor pohybu**. S detektorem budete pracovat v prostředí **Node-RED**, a když zachytí pohyb, služba **IFTTT** vám pošle push notifikaci do chytrého telefonu.

## Blokové schéma

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-block-diagram.webp')} alt="Blokové schéma: sada Radio Motion Detector s modulem PIR Module propojená rádiem s bránou, Node-RED a IFTTT"/>
  </div>
</div>

## Požadavky

* Buď [**Sada Motion**](https://www.hardwario.store/cz/p/motion-set), nebo jednotlivé komponenty:
  * 1x [**PIR Module**](https://www.hardwario.store/cz/p/pir-module)
  * 1x [**Core Module**](https://www.hardwario.store/cz/p/core-module)
  * 1x [**Mini Battery Module**](https://www.hardwario.store/cz/p/mini-battery-module)
  * 1x [**Radio Dongle**](https://www.hardwario.store/cz/p/radio-dongle)
  
* Jedna z následujících možností:

  * Nainstalovaný **HARDWARIO Playground** \(doporučeno\)<br></br>
    Více informací najdete v dokumentu [**Instalace aplikace HARDWARIO Playground**](https://docs.hardwario.com/tower/desktop-programming/playground-installation/).
  * **Raspberry Pi** s distribucí **HARDWARIO Raspbian**<br></br>
    Více informací najdete v dokumentu [**Instalace na Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/).
  * Nainstalovaný **HARDWARIO Firmware Tool**<br></br>
    Více informací najdete v dokumentu [**Nástroj pro nahrávání firmwaru**](https://docs.hardwario.com/tower/command-line-tools/firmware-tool/).

## Nahrání firmwaru

Firmware nahrajete do modulu **Core Module** v aplikaci **HARDWARIO Playground**.

#### Krok 1: Připojte modul **Core Module** kabelem Micro USB k počítači

#### Krok 2: Nahrajte firmware

Spusťte HARDWARIO Playground, na záložce Firmware vyberte firmware `hardwario/twr-radio-motion-detector` a nahrajte ho do modulu **Core Module**.

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
    src="https://www.youtube.com/embed/U8i0Afk3XOI?si=PnW0fsOc5Eh-PS-a"     title="YouTube video player"
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

#### Krok 2: Nasaďte **Core Module** na **Mini Battery Module**

#### Krok 3: Nasaďte **PIR Module** na **Core Module**

## Příprava Playgroundu

:::danger

Pokud používáte nový **HARDWARIO Playground**, použijte místo adresy [**http://localhost:1880/**](http://localhost:1880/) záložku **Functions**. Párování teď probíhá na záložce **Devices** a komunikaci otestujete na záložce **Messages**.

:::

#### Krok 1: Otevřete **Node-RED** ve webovém prohlížeči

[http://localhost:1880/](http://localhost:1880/)

#### Krok 2: Měli byste vidět prázdnou pracovní plochu **Flow 1**

#### Krok 3: Vložte do flow následující úryvek \(pomocí **Menu &gt;&gt; Import**\) a klikněte na záložku **Flow 1**

```text
[{"id":"2fc604fc.3b6abc","type":"inject","z":"dfc861b.b2a02a","name":"List all gateways","topic":"gateway/all/info/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":460,"wires":[["a2c10833.24d5d8"]]},{"id":"1e4502b8.2f63fd","type":"inject","z":"dfc861b.b2a02a","name":"Start node pairing","topic":"gateway/usb-dongle/pairing-mode/start","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":570,"y":580,"wires":[["795ff5a7.8e266c"]]},{"id":"3d844ce2.932864","type":"inject","z":"dfc861b.b2a02a","name":"Stop node pairing","topic":"gateway/usb-dongle/pairing-mode/stop","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":640,"wires":[["5967c452.c838bc"]]},{"id":"f202b253.2705b","type":"inject","z":"dfc861b.b2a02a","name":"List paired nodes","topic":"gateway/usb-dongle/nodes/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":520,"wires":[["f0aca138.0b2c3"]]},{"id":"349f02fd.890f6e","type":"inject","z":"dfc861b.b2a02a","name":"Unpair all nodes","topic":"gateway/usb-dongle/nodes/purge","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":700,"wires":[["2f1c5bb6.53d6f4"]]},{"id":"cf61d75d.4ad8f8","type":"mqtt in","z":"dfc861b.b2a02a","name":"","topic":"#","qos":"2","broker":"67b8de4a.029d3","x":530,"y":400,"wires":[["a5cb0658.f5d658"]]},{"id":"a5cb0658.f5d658","type":"debug","z":"dfc861b.b2a02a","name":"","active":true,"console":"false","complete":"false","x":790,"y":400,"wires":[]},{"id":"a2c10833.24d5d8","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":460,"wires":[]},{"id":"f0aca138.0b2c3","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":520,"wires":[]},{"id":"795ff5a7.8e266c","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":580,"wires":[]},{"id":"5967c452.c838bc","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":640,"wires":[]},{"id":"2f1c5bb6.53d6f4","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":700,"wires":[]},{"id":"67b8de4a.029d3","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"717f7c18.ba0a24","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```
Bude to vypadat takto:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-node-red-gw-controls.webp')} alt="Importovaný flow v Node-RED s tlačítky pro příkazy brány, každé napojené na uzel MQTT"/>
  </div>
</div><br></br>

:::info

Úryvek přidá tlačítka pro příkazy brány a rádia. Příkazy se odesílají protokolem MQTT.

:::

#### Krok 4: Nasaďte flow tlačítkem **Deploy** v pravém horním rohu

#### Krok 5: Otevřete záložku **debug**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-node-red-gw-debug.webp')} alt="Editor Node-RED se zvýrazněnou záložkou debug v pravém panelu"/>
  </div>
</div><br></br>

:::info

Na záložce **debug** uvidíte všechny zprávy MQTT.

:::

#### Krok 6: Klikněte na tlačítko **List all gateways**. Na záložce **debug** byste měli vidět podobnou odpověď

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-node-red-gw-list.webp')} alt="Záložka debug s odpovědí s informacemi o bráně po kliknutí na List all gateways"/>
  </div>
</div><br></br>

:::success

Teď máte funkční **Node-RED**, **MQTT**, **HARDWARIO Radio Dongle** a **HARDWARIO Gateway**.

:::

## Rádiové párování

V této části navážeme rádiové spojení mezi **Radio Dongle** a sestavou **Radio Motion Detector**. V prostředí **Node-RED** postupujte takto:

#### Krok 1: Klikněte na tlačítko **Start node pairing**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-node-red-gw-pair-start.webp')} alt="Zvýrazněné tlačítko Start node pairing a potvrzení zahájení párování v záložce debug"/>
  </div>
</div>

#### Krok 2: Vložte baterie do sestavy **Radio Motion Detector**, čímž odešlete požadavek na párování (červená LED na modulu **Core Module** by se také měla asi na 2 sekundy rozsvítit)

#### Krok 3: Klikněte na tlačítko **Stop node pairing**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-node-red-gw-pair-stop.webp')} alt="Zvýrazněné tlačítko Stop node pairing a potvrzení ukončení párování v záložce debug"/>
  </div>
</div><br></br>

:::success

Teď máte navázané rádiové spojení mezi uzlem (**Radio Motion Detector**) a bránou (**Radio Dongle**).

:::

## Test komunikace

V prostředí **Node-RED** postupujte takto:

#### Krok 1: Přepněte se na záložku **debug** vpravo

#### Krok 2: Zamávejte rukou před modulem **PIR Module**, tím spustíte rádiový přenos

Pak byste měli vidět podobné zprávy:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-radio-test.webp')} alt="Záložka debug se zprávami event-count z čidla PIR rostoucími při detekci pohybu"/>
  </div>
</div><br></br>

:::success

Teď máte ověřenou rádiovou komunikaci.

:::

## Krabička

Pokud máte vhodnou krabičku, můžete do ní sestavu vložit.

:::info

Krabičky pro sestavy TOWER najdete v e-shopu v kategorii [**Krabičky**](https://www.hardwario.store/cz/enclosures).

:::

## Integrace s IFTTT

V této části vytvoříme **Applet** ve službě **IFTTT**. **Applet** je pravidlo, které na určitou událost zareaguje akcí.

#### Krok 1: Otevřete webový prohlížeč a přejděte na [**IFTTT**](https://ifttt.com/)

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-01.webp')} alt="Úvodní stránka IFTTT se zvýrazněným tlačítkem Sign in"/>
  </div>
</div>

#### Krok 2: Přihlaste se do služby IFTTT. Zaregistrovat se můžete i účtem Google nebo Facebook

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-02.webp')} alt="Stránka Discover na IFTTT po přihlášení se zvýrazněnou položkou My Applets v menu"/>
  </div>
</div>

#### Krok 3: V menu přejděte do **My Applets** a klikněte na tlačítko **New Applet**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-03.webp')} alt="Stránka My Applets se zvýrazněným tlačítkem New Applet"/>
  </div>
</div>

#### Krok 4: Ve větě `if this then that` klikněte na **+this**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-04.webp')} alt="Editor nového appletu se zvýrazněným +this ve větě if this then that"/>
  </div>
</div>

#### Krok 5: Vyhledejte službu **Webhooks** a vyberte ji

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-05.webp')} alt="Krok Choose a service s vyhledaným Webhooks a zvýrazněnou dlaždicí Webhooks"/>
  </div>
</div>

#### Krok 6: Klikněte na **Receive a web request**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-06.webp')} alt="Krok Choose trigger se zvýrazněnou kartou Receive a web request"/>
  </div>
</div>

#### Krok 7: Do pole **Event Name** napište `motion` a klikněte na **Create Trigger**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-07.webp')} alt="Pole triggeru s názvem události motion a zvýrazněným tlačítkem Create trigger"/>
  </div>
</div>

#### Krok 8: Ve větě `if this then that` klikněte na **+that**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-08.webp')} alt="Editor nového appletu se zvýrazněným +that ve větě if this then that"/>
  </div>
</div>

#### Krok 9: Vyhledejte službu pro akci **Notifications** a vyberte ji

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-09.webp')} alt="Krok Choose action service s vyhledaným Notifications a zvýrazněnou dlaždicí Notifications"/>
  </div>
</div>

#### Krok 10: Klikněte na **Send a notification from the IFTTT app**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-10.webp')} alt="Krok Choose action se zvýrazněnou kartou Send a notification from the IFTTT app"/>
  </div>
</div>

#### Krok 11: Do pole **Notification** vložte text `The motion detected on {{OccurredAt}}` a klikněte na tlačítko **Create action**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-11.webp')} alt="Pole akce s vyplněným textem oznámení o pohybu a zvýrazněným tlačítkem Create action"/>
  </div>
</div>

#### Krok 12: Klikněte na tlačítko **Finish**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-12.webp')} alt="Krok Review and finish appletu motion se zvýrazněným tlačítkem Finish"/>
  </div>
</div>

#### Krok 13: Klikněte na tlačítko **Webhooks**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-13.webp')} alt="Dokončený a zapnutý applet motion se zvýrazněnou ikonou Webhooks"/>
  </div>
</div>

#### Krok 14: Klikněte na tlačítko **Documentation**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-14.webp')} alt="Stránka služby Webhooks se zvýrazněným tlačítkem Documentation"/>
  </div>
</div>

#### Krok 15: Klikněte do pole **event**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-15.webp')} alt="Stránka dokumentace Webhooks s vaším klíčem a zvýrazněným polem event v adrese triggeru"/>
  </div>
</div>

#### Krok 16: Do pole **event** vložte název `motion` a okno nechte otevřené

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-16.webp')} alt="Stránka dokumentace Webhooks s vyplněným motion v poli event adresy triggeru"/>
  </div>
</div>

#### Krok 17: Nainstalujte aplikaci do telefonu

Nainstalujte si do chytrého telefonu aplikaci **IFTTT** a přihlaste se stejným účtem, ve kterém jste applet vytvořili. Když se aplikace zeptá, povolte jí push notifikace.

#### Krok 18: Vyzkoušejte to

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-17.webp')} alt="Stránka dokumentace Webhooks se zvýrazněným tlačítkem Test It"/>
  </div>
</div>

#### Krok 19: Do několika sekund by vám na chytrý telefon měla přijít push notifikace

#### Krok 20: Zkopírujte si tuto adresu URL do schránky, budete ji potřebovat později

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-18.webp')} alt="Stránka dokumentace Webhooks se zvýrazněnou celou adresou triggeru pro událost motion"/>
  </div>
</div><br></br>

:::success

Teď máte ve službě **IFTTT** funkční **Applet** pro notifikace.

:::

## Propojení Node-RED s IFTTT

V této části propojíme událost pohybu v MQTT s požadavkem HTTP na **IFTTT**, který spustí push notifikaci.

#### Krok 1: Přepněte se do svého flow v **Node-RED**

#### Krok 2: Vložte do flow následující úryvek (pomocí **Menu >> Import**):

```text
[{"id":"aa6e1255.ea79f","type":"mqtt in","z":"1683bd68.e7a7b3","name":"","topic":"node/motion-detector:0/pir/-/event-count","qos":"2","broker":"3db59913.baf0c6","x":580,"y":580,"wires":[["fd3ce751.8e9ba8"]]},{"id":"74e6dfc1.7c1dc","type":"http request","z":"1683bd68.e7a7b3","name":"","method":"POST","ret":"txt","url":"https://maker.ifttt.com/trigger/motion/with/key/YOUR_IFTTT_KEY","tls":"","x":910,"y":580,"wires":[[]]},{"id":"fd3ce751.8e9ba8","type":"change","z":"1683bd68.e7a7b3","name":"","rules":[{"t":"delete","p":"payload","pt":"msg"}],"action":"","property":"","from":"","to":"","reg":false,"x":710,"y":680,"wires":[["42aed05e.e145"]]},{"id":"42aed05e.e145","type":"delay","z":"1683bd68.e7a7b3","name":"","pauseType":"delay","timeout":"30","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":900,"y":680,"wires":[["74e6dfc1.7c1dc"]]},{"id":"3db59913.baf0c6","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```

Bude to vypadat takto:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-node-red-ifttt-snippet.webp')} alt="Flow v Node-RED propojující topic event-count z čidla PIR přes uzly change a delay s uzlem http request"/>
  </div>
</div><br></br>

V uzlu **http request** nahraďte `YOUR_IFTTT_KEY` klíčem ze stránky dokumentace služby Webhooks (krok 15).


:::info

Úryvek propojí topic MQTT `node/motion-detector:0/pir/-/event-count` s požadavkem HTTP. Než zprávu předáme do požadavku HTTP, odstraníme z ní parametr `payload`, jinak by se použil v těle požadavku.

:::

#### Krok 3: Dvakrát klikněte na uzel **http request** a upravte adresu URL IFTTT, kterou jste získali v předchozí části:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-node-red-ifttt-url.webp')} alt="Dialog úpravy uzlu http request s adresou triggeru IFTTT vloženou do zvýrazněného pole URL"/>
  </div>
</div>

#### Krok 4: Adresu URL uložte tlačítkem **Done**

#### Krok 5: Nasaďte flow tlačítkem **Deploy** v pravém horním rohu

:::success

Teď by vám měla přijít push notifikace pokaždé, když detektor zachytí pohyb.

:::

### Související dokumenty <a id="related-documents"></a>

* [**Instalace na Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/)
* [**Nástroje příkazové řádky**](https://docs.hardwario.com/tower/command-line-tools/)
