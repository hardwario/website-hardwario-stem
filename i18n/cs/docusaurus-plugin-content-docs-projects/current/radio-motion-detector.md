---
slug: radio-motion-detector
title: Bezdrátový detektor pohybu
---
import Image from '@theme/IdealImage';

# Bezdrátový detektor pohybu

Tento dokument vás provede projektem **Rádiového detektoru pohybu**. Budete moci komunikovat se svým detektorem pohybu v prostředí **Node-RED** a spouštět službu push notifikací **IFTTT** při detekci pohybu. Na svůj chytrý telefon obdržíte upozornění formou push notifikace.

## Blokové schéma

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-block-diagram.webp')}/>
  </div>
</div>

## Požadavky

* Buď [**Sada Motion**](https://www.hardwario.store/cz/p/motion-set), nebo jednotlivé komponenty:
  * 1x [**Climate Module**](https://www.hardwario.store/cz/p/climate-module)
  * 1x [**Core Module**](https://www.hardwario.store/cz/p/core-module)
  * 1x [**Mini Battery Module**](https://www.hardwario.store/cz/p/mini-battery-module)
  * 1x [**Radio Dongle**](https://www.hardwario.store/cz/p/radio-dongle)
  
* Jedna z následujících možností:

  * Nainstalovaný **HARDWARIO Playground** \(doporučeno\)<br></br>
    Více informací naleznete v dokumentu [**Quick Start Guide**](https://docs.hardwario.com/tower/firmware-development/firmware-quick-start/).
  * **Raspberry Pi** s distribucí **HARDWARIO Raspbian**<br></br>
    Více informací naleznete v dokumentu [**Instalace na Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/).
  * Nainstalovaný **HARDWARIO Firmware Tool**<br></br>
    Více informací naleznete v dokumentu [**Toolchain nastavení**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain).

## Nahrání firmwaru

V tomto postupu použijeme **HARDWARIO Playground** k nahrání firmwaru do **Core Modulu**.

#### Krok 1: Připojte kabel Micro USB k Core Modulu a počítači

#### Krok 2: Nahrání firmwaru

Spusťte aplikaci HARDWARIO Playground. Na záložce Firmware vyberte a nahrajte firmware `bcf-radio-motion-detector` do **Core Modulu**.

:::warning

**Nahrávání firmwaru do Core Module R1 a R2**
Pro rozdíly v nahrávání firmwaru do staršího **Core Module 1** a novějšího **Core Module 2** si prosím přečtěte **srovnání Core Module R1 a R2** v sekci **Hardware**.

:::

#### Krok 3: Odpojte kabel Micro USB od **Core Modulu** a počítače.

:::success

V tomto bodě je firmware úspěšně nahrán.

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

#### Krok 1: Začněte s **Mini Battery Module**

:::warning

Ujistěte se, že v **Mini Battery Module** nejsou vloženy žádné baterie.

:::

#### Krok 2: Připojte **Core Module** na **Mini Battery Module**

#### Krok 3: Připojte **PIR Module** na **Core Module**

## Spuštění Playgroundu

:::danger

Pokud používáte nový **HARDWARIO Playground**, použijte záložku **Functions** místo [**http://localhost:1880/**](http://localhost:1880/). Proces párování nyní probíhá na záložce **Devices**. Pro otestování komunikace použijte záložku **Messages**.

:::

#### Krok 1: Otevřete **Node-RED** ve svém webovém prohlížeči.

[http://localhost:1880/](http://localhost:1880/)

#### Krok 2: Měli byste vidět prázdnou pracovní plochu s označením **Flow 1**

#### Krok 3: Vložte následující úryvek do flow (pomocí Menu >> Import) a klikněte na záložku Flow 1

```text
[{"id":"2fc604fc.3b6abc","type":"inject","z":"dfc861b.b2a02a","name":"List all gateways","topic":"gateway/all/info/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":460,"wires":[["a2c10833.24d5d8"]]},{"id":"1e4502b8.2f63fd","type":"inject","z":"dfc861b.b2a02a","name":"Start node pairing","topic":"gateway/usb-dongle/pairing-mode/start","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":570,"y":580,"wires":[["795ff5a7.8e266c"]]},{"id":"3d844ce2.932864","type":"inject","z":"dfc861b.b2a02a","name":"Stop node pairing","topic":"gateway/usb-dongle/pairing-mode/stop","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":640,"wires":[["5967c452.c838bc"]]},{"id":"f202b253.2705b","type":"inject","z":"dfc861b.b2a02a","name":"List paired nodes","topic":"gateway/usb-dongle/nodes/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":520,"wires":[["f0aca138.0b2c3"]]},{"id":"349f02fd.890f6e","type":"inject","z":"dfc861b.b2a02a","name":"Unpair all nodes","topic":"gateway/usb-dongle/nodes/purge","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":700,"wires":[["2f1c5bb6.53d6f4"]]},{"id":"cf61d75d.4ad8f8","type":"mqtt in","z":"dfc861b.b2a02a","name":"","topic":"#","qos":"2","broker":"67b8de4a.029d3","x":530,"y":400,"wires":[["a5cb0658.f5d658"]]},{"id":"a5cb0658.f5d658","type":"debug","z":"dfc861b.b2a02a","name":"","active":true,"console":"false","complete":"false","x":790,"y":400,"wires":[]},{"id":"a2c10833.24d5d8","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":460,"wires":[]},{"id":"f0aca138.0b2c3","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":520,"wires":[]},{"id":"795ff5a7.8e266c","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":580,"wires":[]},{"id":"5967c452.c838bc","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":640,"wires":[]},{"id":"2f1c5bb6.53d6f4","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":700,"wires":[]},{"id":"67b8de4a.029d3","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"717f7c18.ba0a24","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```
Bude to vypadat takto:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-node-red-gw-controls.webp')}/>
  </div>
</div><br></br>

:::info

Tento úryvek poskytuje ovládací tlačítka pro příkazy gateway/rádio. Tyto příkazy jsou odesílány přes protokol MQTT.

:::

#### Krok 4: Nasazení flow pomocí tlačítka **Deploy** v pravém horním rohu

#### Krok 5: Otevřete záložku **debug**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-node-red-gw-debug.webp')}/>
  </div>
</div><br></br>

:::info

V záložce **debug** budete moci vidět všechny MQTT zprávy.

:::

#### Krok 6: Klikněte na tlačítko **List all gateways**. V záložce **debug** byste měli vidět odpověď podobnou této.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-node-red-gw-list.webp')}/>
  </div>
</div><br></br>

:::success

V tomto bodě máte funkční **Node-RED**, **MQTT**, **HARDWARIO Radio Dongle** a **HARDWARIO Gateway**.

:::

## Rádiové párování

V této části vytvoříme rádiové spojení mezi **Radio Dongle** a **detektorem pohybu**. Postupujte podle následujících kroků v prostředí **Node-RED**:

#### Krok 1: Klikněte na tlačítko **Start node pairing**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-node-red-gw-pair-start.webp')}/>
  </div>
</div>

#### Krok 2: Vložte baterie do **Sady Motion**, čímž odešlete požadavek na párování (měla by se také rozsvítit červená LED na **Core Modulu** přibližně na 2 sekundy) 

#### Krok 3: Klikněte na tlačítko **Stop node pairing**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-node-red-gw-pair-stop.webp')}/>
  </div>
</div><br></br>

:::success

V tomto bodě máte navázané rádiové spojení mezi (**Sadou Motion**) a bránou (**Radio Dongle**).

:::

## Test komunikace

Postupujte podle následujících kroků v prostředí **Node-RED**:

#### Krok 1: Přepněte se na záložku debug vpravo

#### Krok 2: Začněte mávat rukou před **PIR Modulem**, abyste spustili rádiový přenos.

Poté byste měli vidět podobné zprávy:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-radio-test.webp')}/>
  </div>
</div><br></br>

:::success

V tomto bodě máte ověřenou rádiovou komunikaci.

:::

## Kryt

Volitelně vložte sestavené zařízení do příslušného krytu, pokud jej máte k dispozici.

:::info

Více informací o krytech naleznete v dokumentu [**Enclosures**](https://docs.hardwario.com/chester/hardware-description/enclosures/).

:::

## Integrace s IFTTT

V této části vytvoříme **Applet** ve službě **IFTTT**. **Applet** funguje jako mechanismus pro spouštění událostí.

#### Krok 1: Otevřete webový prohlížeč a přejděte na [**IFTTT**](https://ifttt.com/)

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-01.webp')}/>
  </div>
</div>

#### Krok 2: Přihlaste se do služby IFTTT. Můžete se zaregistrovat pomocí účtu Google nebo Facebook.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-02.webp')}/>
  </div>
</div>

#### Krok 3: V menu přejděte do sekce My Applets a klikněte na tlačítko New Applet.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-03.webp')}/>
  </div>
</div>

#### Krok 4: Klikněte na **+this** ve větě `if this then that`.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-04.webp')}/>
  </div>
</div>

#### Krok 5: Vyhledejte službu s názvem **Webhooks** a vyberte ji.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-05.webp')}/>
  </div>
</div>

#### Krok 6: Klikněte na **Receive a web request**.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-06.webp')}/>
  </div>
</div>

#### Krok 7: Do pole `Event Name` napište **Motion** a klikněte na **Create Trigger**.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-07.webp')}/>
  </div>
</div>

#### Krok 8: Klikněte na **+that** ve větě `if this then that`.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-08.webp')}/>
  </div>
</div>

#### Krok 9: Vyhledejte akční službu s názvem **Notifications** a vyberte ji.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-09.webp')}/>
  </div>
</div>

#### Krok 10: Klikněte na **Send a notification from the IFTTT app** (Odeslat notifikaci z aplikace IFTTT)

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-10.webp')}/>
  </div>
</div>

#### Krok 11: Upravte pole **Notification** a vložte text `The motion detected on {{OccurredAt}}`, poté klikněte na tlačítko **Create action**.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-11.webp')}/>
  </div>
</div>

#### Krok 12: Klikněte na tlačítko **Finish**.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-12.webp')}/>
  </div>
</div>

#### Krok 13: Klikněte na tlačítko **Webhooks**.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-13.webp')}/>
  </div>
</div>

#### Krok 14: Klikněte na tlačítko **Documentation**.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-14.webp')}/>
  </div>
</div>

#### Krok 15: Klikněte na pole **event**.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-15.webp')}/>
  </div>
</div>

#### Krok 16: Vložte název `button` do pole **event** a ponechte okno otevřené.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-16.webp')}/>
  </div>
</div>

#### Krok 17: Instalace do chytrého telefonu

Nainstalujte si aplikaci **IFTTT** do svého chytrého telefonu a přihlaste se pomocí stejného účtu, který jste použili k vytvoření appletu. Při výzvě povolte aplikaci zasílání push notifikací.

#### Krok 18: Otestujte to

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-17.webp')}/>
  </div>
</div>

#### Krok 19: Během několika sekund byste měli obdržet push notifikaci na svůj chytrý telefon

#### Krok 20: Zkopírujte tuto URL adresu do schránky pro pozdější použití

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-ifttt-18.webp')}/>
  </div>
</div><br></br>

:::success

V tomto bodě máte funkční notifikační **Applet** ve službě **IFTTT**.

:::

## Propojení IFTTT v Node-RED

V této části vytvoříme propojení mezi událostí tlačítka přes MQTT a HTTP požadavkem na **IFTTT**, který spustí push notifikaci.

#### Krok 1: Přepněte se do svého flow v **Node-RED**

#### Krok 2: Vložte následující úryvek do flow (pomocí **Menu >> Import**):

```text
[{"id":"aa6e1255.ea79f","type":"mqtt in","z":"1683bd68.e7a7b3","name":"","topic":"node/motion-detector:0/pir/-/event-count","qos":"2","broker":"3db59913.baf0c6","x":580,"y":580,"wires":[["fd3ce751.8e9ba8"]]},{"id":"74e6dfc1.7c1dc","type":"http request","z":"1683bd68.e7a7b3","name":"","method":"POST","ret":"txt","url":"https://maker.ifttt.com/trigger/motion/with/key/bbtA7Dn-3HKPG8OcfZMP7WyvKh6I69iEW9j9OtUBGGB","tls":"","x":910,"y":580,"wires":[[]]},{"id":"fd3ce751.8e9ba8","type":"change","z":"1683bd68.e7a7b3","name":"","rules":[{"t":"delete","p":"payload","pt":"msg"}],"action":"","property":"","from":"","to":"","reg":false,"x":710,"y":680,"wires":[["42aed05e.e145"]]},{"id":"42aed05e.e145","type":"delay","z":"1683bd68.e7a7b3","name":"","pauseType":"delay","timeout":"30","timeoutUnits":"seconds","rate":"1","nbRateUnits":"1","rateUnits":"second","randomFirst":"1","randomLast":"5","randomUnits":"seconds","drop":false,"x":900,"y":680,"wires":[["74e6dfc1.7c1dc"]]},{"id":"3db59913.baf0c6","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```

Bude to vypadat takto:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-node-red-ifttt-snippet.webp')}/>
  </div>
</div><br></br>

:::info

Tento úryvek vytváří propojení mezi MQTT tématem `node/motion-detector:0/pir/-/event-count` a HTTP požadavkem. Před předáním zprávy do HTTP požadavku odstraňujeme parametr `payload`, protože by jinak byl použit v těle HTTP požadavku.

:::

#### Krok 3: Klikněte na uzel **http request** a upravte IFTTT URL adresu, kterou jste získali v předchozí části.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-motion-detector/radio-motion-detector-node-red-ifttt-url.webp')}/>
  </div>
</div>

#### Krok 4: Uložte URL adresu kliknutím na tlačítko **Done**.

#### Krok 5: Nasazení flow pomocí tlačítka **Deploy** v pravém horním rohu.

:::success

V tomto bodě byste měli obdržet push notifikaci po stisknutí tlačítka.

:::

### <a id="related-documents">Související dokumenty </a>

* [**Instalace na Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/)
* [**Nastavení Toolchain**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain)
* [**Průvodce Toolchain**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain)
