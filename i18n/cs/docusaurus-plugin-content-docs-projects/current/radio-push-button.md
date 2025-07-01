---
slug: radio-push-button
title: Bezdrátové tlačítko
---
import Image from '@theme/IdealImage';

# Bezdrátové tlačítko

Tento dokument vás provede projektem **Bezdrátového tlačítka**. Budete moci komunikovat se svým tlačítkem v prostředí **Node-RED** a spouštět službu push notifikací **IFTTT** při jeho stisknutí. Na svůj chytrý telefon obdržíte upozornění formou push notifikace.

## Blokové schéma

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_block-diagram.webp')}/>
  </div>
</div>

## Požadavky

* Buď **HARDWARIO Sada Push**, nebo jednotlivé komponenty:
  * 1x **HARDWARIO Button Module**
  * 1x **HARDWARIO Core Module**
  * 1x **HARDWARIO Mini Battery Module**
  * 1x **HARDWARIO Radio Dongle**
  
* Jedna z následujících možností:
  
  * Nainstalovaný **HARDWARIO Playground** (doporučeno)
    Více informací naleznete v dokumentu [**Quick Start Guide**](https://docs.hardwario.com/tower/firmware-development/firmware-quick-start/) document.

  * **Raspberry Pi** s distribucí **HARDWARIO Raspbian**
    Více informací naleznete v dokumentu [**Instalace na Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/).

  * Nainstalovaný **HARDWARIO Toolchain**
    Více informací naleznete v dokumentu [**Nastavení Toolchain**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain).

## Nahrání firmwaru

V tomto postupu použijeme **HARDWARIO Playground** k nahrání firmwaru do **Core Modulu**.

### Krok 1: Připojte kabel Micro USB k Core Modulu a k počítači

### Krok 2: Nahrání firmwaru

Spusťte aplikaci HARDWARIO Playground. Na záložce Firmware vyberte a nahrajte firmware `bcf-radio-push-button` do **Core Modulu**.

:::warning

**Nahrávání firmwaru do Core Module R1 a R2**
Pro rozdíly v nahrávání firmwaru do staršího **Core Module 1** a novějšího **Core Module 2** si prosím přečtěte srovnání **Core Module R1 a R2** v sekci **Hardware**.

:::

### Krok 3: Odpojte kabel Micro USB od Core Modulu a počítače.

:::success

V tomto bodě je firmware úspěšně nahrán.

:::

## Sestavení hardwaru

Podívejte se na krátké video s jednoduchou ukázkou krok za krokem:

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
  <iframe
    src="https://www.youtube.com/embed/OCPPKXzCBg0?si=_KXwaBvBpYjCHWzy"     title="YouTube video player"
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
  />
</div>

### Krok 1: Začněte s **Mini Battery Module**

### Krok 2: Připojte **Core Module** na **Mini Battery Module**

### Krok 3: Připojte **Button Module** na **Core Module**

## Spuštění Playgroundu

:::danger

Pokud používáte nový **HARDWARIO Playground**, použijte záložku **Functions místo** [**http://localhost:1880/**](http://localhost:1880/). Proces párování nyní probíhá na záložce **Devices**. Pro otestování komunikace použijte záložku **Messages**.

:::

### Krok 1: Otevřete **Node-RED** ve svém webovém prohlížeči.

[http://localhost:1880/](http://localhost:1880/)

### Krok 2: Měli byste vidět prázdnou pracovní plochu s označením **Flow 1**

### Krok 3: Vložte následující úryvek do flow (pomocí **Menu >> Import**) a klikněte na záložku **Flow 1**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_node-red-gw-controls.webp')}/>
  </div>
</div>

:::info

Tento úryvek poskytuje ovládací tlačítka pro příkazy gateway/rádio. Tyto příkazy jsou odesílány přes protokol MQTT.

:::

### Krok 4: Nasazení flow pomocí tlačítka **Deploy** v pravém horním rohu

### Krok 5: Otevřete záložku **debug**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_node-red-gw-debug.webp')}/>
  </div>
</div>

:::info

V záložce **debug** budete moci vidět všechny MQTT zprávy.

:::

### Krok 6: Klikněte na tlačítko **List all gateways**. V záložce **debug** byste měli vidět odpověď podobnou této.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_node-red-gw-list.webp')}/>
  </div>
</div>

:::success

V tomto bodě máte funkční **Node-RED**, **MQTT**, **HARDWARIO Radio Dongle** a **HARDWARIO Gateway**.

:::

## Párování

V této části vytvoříme rádiové spojení mezi **Radio Dongle** a **Radio Push Button**.

Postupujte podle následujících kroků v **Node-RED**:

### Krok 1: Klikněte na tlačítko **Start node pairing**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_node-red-gw-pair-start.webp')}/>
  </div>
</div>

### Krok 2: Sestavení

Vložte baterie do **Radio Push Button**, čímž odešlete požadavek na spárování (měla by se také rozsvítit červená LED na **Core Module** přibližně na 2 sekundy).

### Krok 3: Klikněte na tlačítko **Stop node pairing**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_node-red-gw-pair-stop.webp')}/>
  </div>
</div>

:::success

V tomto bodě máte navázané rádiové spojení mezi uzlem (**Radio Push Button**) a bránou (**Radio Dongle**).

:::

## Test komunikace

Postupujte podle těchto kroků v **Node-RED**:

### Krok 1: Přepněte se na kartu debug vpravo

### Krok 2: Stiskněte tlačítko a měli byste vidět zprávy s počítáním

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_radio-test.webp')}/>
  </div>
</div>

:::success

V tomto bodě máte ověřenou rádiovou komunikaci.

:::

## Enclosure

Volitelně můžete sestavu vložit do vhodného krytu, pokud jej máte k dispozici.

:::info

Více informací o krytech naleznete v dokumentu [**Enclosures**](https://docs.hardwario.com/chester/hardware-description/enclosures/).

:::

## Integration with IFTTT

V této části vytvoříme **Applet** ve službě **IFTTT**. **Applet** je typ mechanismu pro spouštění událostí.

### Krok 1: Otevřete webový prohlížeč a přejděte na stránku [**IFTTT**](https://ifttt.com/)

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-01.webp')}/>
  </div>
</div>

### Krok 2: Přihlaste se do služby IFTTT. Můžete se zaregistrovat nebo přihlásit pomocí svého účtu Google nebo Facebook.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-02.webp')}/>
  </div>
</div>

### Krok 3: Přejděte v menu na **My Applets** a klikněte na tlačítko **New Applet**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-03.webp')}/>
  </div>
</div>

### Krok 4: Klikněte na **+this** ve větě `if this then that`.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-04.webp')}/>
  </div>
</div>

### Krok 5: Vyhledejte službu s názvem **Webhooks** a vyberte ji.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-05.webp')}/>
  </div>
</div>

### Krok 6: Klikněte na **Receive a web request**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-06.webp')}/>
  </div>
</div>

### Krok 7: Zadejte button do pole **Event Name** (Název události) a klikněte na **Create Trigger** (Vytvořit spouštěč).

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-07.webp')}/>
  </div>
</div>

### Krok 8: Klikněte na **+that** ve větě `if this then that`.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-08.webp')}/>
  </div>
</div>

### Krok 9: Vyhledejte akční službu s názvem **Notifications** (Oznámení) a vyberte ji.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-09.webp')}/>
  </div>
</div>

### Krok 10: Klikněte na **Send a notification from the IFTTT app** (Odeslat oznámení z aplikace IFTTT).

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-10.webp')}/>
  </div>
</div>

### Krok 11: Upravte pole **Notification** a vložte text T`The button has been pressed on {{OccurredAt}}`, poté klikněte na tlačítko **Create action** (Vytvořit akci).

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-11.webp')}/>
  </div>
</div>

### Krok 12: Klikněte na tlačítko **Finish**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-12.webp')}/>
  </div>
</div>

### Krok 13: Klikněte na tlačítko **Webhooks**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-13.webp')}/>
  </div>
</div>

### Krok 14: Klikněte na tlačítko **Documentation**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-14.webp')}/>
  </div>
</div>

### Krok 15: Klikněte do pole **event**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-15.webp')}/>
  </div>
</div>

### Krok 16: Zadejte název `button` do pole **event** a ponechte okno otevřené.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-16.webp')}/>
  </div>
</div>

### Krok 17: Mobilní aplikace

Nainstalujte si aplikaci **IFTTT** do svého chytrého telefonu a přihlaste se pomocí stejného účtu, který jste použili k vytvoření appletu. Povolte aplikaci zasílání push notifikací, pokud budete vyzváni.

### Krok 18: Klikněte na tlačítko **Test It** v okně webového prohlížeče.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-17.webp')}/>
  </div>
</div>

### Krok 19: Během několika sekund byste měli na svém chytrém telefonu obdržet push notifikaci.

### Krok 20: Zkopírujte tuto URL adresu do schránky pro pozdější použití.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_ifttt-18.webp')}/>
  </div>
</div>

:::success

V tomto bodě máte funkční notifikační **Applet** ve službě **IFTTT**.

:::

## Propojení IFTTT v Node-RED

V této části vytvoříme propojení mezi událostí tlačítka na MQTT a HTTP požadavkem na **IFTTT**, který spustí push notifikaci.

### Krok 1: Přepněte se do svého flow v **Node-RED**

### Krok 2: Vložte následující úryvek do flow (použijte **Menu >> Import**)

```text
[{"id":"e507a379.e9d1d","type":"mqtt in","z":"dfc861b.b2a02a","name":"","topic":"node/push-button:0/push-button/-/event-count","qos":"2","broker":"b9592cd0.2b74f","x":660,"y":760,"wires":[["5d4d5593.80242c"]]},{"id":"62133f2.84223c","type":"http request","z":"dfc861b.b2a02a","name":"","method":"POST","ret":"txt","url":"","tls":"","x":1010,"y":760,"wires":[[]]},{"id":"5d4d5593.80242c","type":"change","z":"dfc861b.b2a02a","name":"","rules":[{"t":"delete","p":"payload","pt":"msg"}],"action":"","property":"","from":"","to":"","reg":false,"x":890,"y":860,"wires":[["62133f2.84223c"]]},{"id":"b9592cd0.2b74f","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```

Bude to vypadat takto:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_node-red-ifttt-snippet.webp')}/>
  </div>
</div>

:::info

Tento úryvek vytváří spojení mezi MQTT tématem `node/push-button:0/push-button/-/event-count` a HTTP požadavkem. Před předáním zprávy do HTTP požadavku odstraníme parametr `payload`, protože by jinak byl použit jako tělo HTTP požadavku.

:::

### Krok 3: Klikněte na **http request node** a upravte IFTTT URL adresu získanou v předchozí části.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button_node-red-ifttt-url.webp')}/>
  </div>
</div>

### Krok 4: Uložte URL kliknutím na tlačítko **Done**

### Krok 5: Nasazení flow pomocí tlačítka **Deploy** v pravém horním rohu.

:::success

V tomto bodě byste měli obdržet push notifikaci pokaždé, když stisknete tlačítko.

:::

## Související dokumenty

* [**Instalace na Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/)
* [**Nastavení Toolchain**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain)
* [**Průvodce Toolchain**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain)
