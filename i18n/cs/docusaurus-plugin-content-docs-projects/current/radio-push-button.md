---
slug: radio-push-button
title: Bezdrátové tlačítko
---
import Image from '@theme/IdealImage';

# Bezdrátové tlačítko

Tento návod vás provede projektem **Bezdrátové tlačítko**. S tlačítkem budete pracovat v prostředí **Node-RED**, a když ho stisknete, služba **IFTTT** vám pošle push notifikaci do chytrého telefonu.

## Blokové schéma

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-block-diagram.webp')} alt="Blokové schéma: sada s tlačítkem propojená sub-GHz rádiem přes Radio Dongle s Node-RED, který volá IFTTT webhook"/>
  </div>
</div>

## Požadavky

* Buď [**Sada Push**](https://www.hardwario.store/cz/p/push-set), nebo jednotlivé komponenty:
  * 1x [**Button Module**](https://www.hardwario.store/cz/p/button-module)
  * 1x [**Core Module**](https://www.hardwario.store/cz/p/core-module)
  * 1x [**Mini Battery Module**](https://www.hardwario.store/cz/p/mini-battery-module)
  * 1x [**Radio Dongle**](https://www.hardwario.store/cz/p/radio-dongle)
  
* Jedna z následujících možností:
  
  * Nainstalovaný **HARDWARIO Playground** (doporučeno)<br></br>
    Více informací najdete v dokumentu [**Rychlý start s firmwarem**](https://docs.hardwario.com/tower/firmware-development/firmware-quick-start/).
  * **Raspberry Pi** s distribucí **HARDWARIO Raspbian**<br></br>
    Více informací najdete v dokumentu [**Instalace na Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/).
  * Nainstalovaný **HARDWARIO Toolchain**<br></br>
    Více informací najdete v dokumentu [**Nastavení toolchainu**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain).

## Nahrání firmwaru

Firmware nahrajete do modulu **Core Module** v aplikaci **HARDWARIO Playground**.

#### Krok 1: Připojte modul **Core Module** kabelem Micro USB k počítači

#### Krok 2: Nahrajte firmware

Spusťte HARDWARIO Playground, na záložce Firmware vyberte firmware `bcf-radio-push-button` a nahrajte ho do modulu **Core Module**:

:::warning

**Nahrávání firmwaru do Core Module R1 a R2**
Rozdíly v nahrávání firmwaru do staršího **Core Module 1** a novějšího **Core Module 2** popisuje srovnání **Core Module R1 a R2** v sekci **Hardware**.

:::

#### Krok 3: Odpojte kabel Micro USB od modulu **Core Module** a od počítače

:::success

Firmware je úspěšně nahraný.

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

#### Krok 1: Začněte modulem **Mini Battery Module**

#### Krok 2: Nasaďte **Core Module** na **Mini Battery Module**

#### Krok 3: Nasaďte **Button Module** na **Core Module**

## Příprava Playgroundu

:::danger

Pokud používáte nový **HARDWARIO Playground**, použijte místo adresy [**http://localhost:1880/**](http://localhost:1880/) záložku **Functions**. Párování teď probíhá na záložce **Devices** a komunikaci otestujete na záložce **Messages**.

:::

#### Krok 1: Otevřete **Node-RED** ve webovém prohlížeči

[http://localhost:1880/](http://localhost:1880/)

#### Krok 2: Měli byste vidět prázdnou pracovní plochu **Flow 1**

#### Krok 3: Vložte do flow následující úryvek (pomocí **Menu >> Import**) a klikněte na záložku **Flow 1**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-node-red-gw-controls.webp')} alt="Flow v Node-RED s tlačítky inject pro příkazy brány: výpis bran, spuštění a zastavení párování uzlů"/>
  </div>
</div><br></br>

:::info

Úryvek přidá tlačítka pro příkazy brány a rádia. Příkazy se odesílají protokolem MQTT.

:::

#### Krok 4: Nasaďte flow tlačítkem **Deploy** v pravém horním rohu

#### Krok 5: Otevřete záložku **debug**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-node-red-gw-debug.webp')} alt="Editor Node-RED se zvýrazněnou záložkou debug v pravém panelu"/>
  </div>
</div><br></br>

:::info

Na záložce **debug** uvidíte všechny zprávy MQTT.

:::

#### Krok 6: Klikněte na tlačítko **List all gateways**. Na záložce **debug** byste měli vidět podobnou odpověď

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-node-red-gw-list.webp')} alt="Záložka debug s odpovědí brány obsahující název firmwaru a ID po kliknutí na List all gateways"/>
  </div>
</div><br></br>

:::success

Teď máte funkční **Node-RED**, **MQTT**, **HARDWARIO Radio Dongle** a **HARDWARIO Gateway**.

:::

## Rádiové párování

V této části navážeme rádiové spojení mezi **Radio Dongle** a sestavou **Radio Push Button**.

V prostředí **Node-RED** postupujte takto:

#### Krok 1: Klikněte na tlačítko **Start node pairing**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-node-red-gw-pair-start.webp')} alt="Flow v Node-RED se zvýrazněným inject tlačítkem Start node pairing"/>
  </div>
</div>

#### Krok 2: Zapněte sestavu

Vložte baterie do sestavy **Radio Push Button**, čímž odešlete požadavek na párování (červená LED na modulu **Core Module** by se také měla asi na 2 sekundy rozsvítit).

#### Krok 3: Klikněte na tlačítko **Stop node pairing**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-node-red-gw-pair-stop.webp')} alt="Flow v Node-RED se zvýrazněným inject tlačítkem Stop node pairing"/>
  </div>
</div><br></br>

:::success

Teď máte navázané rádiové spojení mezi uzlem (**Radio Push Button**) a bránou (**Radio Dongle**).

:::

## Test komunikace

V prostředí **Node-RED** postupujte takto:

#### Krok 1: Přepněte se na záložku **debug** vpravo

#### Krok 2: Stiskněte tlačítko. Měli byste vidět zprávy s počtem stisknutí

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-radio-test.webp')} alt="Záložka debug se zprávami event-count, jejichž hodnota roste s každým stisknutím tlačítka"/>
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

## Integrace s IFTTT

V této části vytvoříme **Applet** ve službě **IFTTT**. **Applet** je pravidlo, které na určitou událost zareaguje akcí.

#### Krok 1: Otevřete webový prohlížeč a přejděte na [**IFTTT**](https://ifttt.com/)

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-01.webp')} alt="Úvodní stránka IFTTT se zvýrazněným tlačítkem Sign in vpravo nahoře"/>
  </div>
</div>

#### Krok 2: Přihlaste se do služby IFTTT. Zaregistrovat se můžete i účtem Google nebo Facebook

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-02.webp')} alt="Horní menu IFTTT se zvýrazněnou položkou My Applets"/>
  </div>
</div>

#### Krok 3: V menu přejděte do **My Applets** a klikněte na tlačítko **New Applet**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-03.webp')} alt="Stránka My Applets se zvýrazněným tlačítkem New Applet"/>
  </div>
</div>

#### Krok 4: Ve větě `if this then that` klikněte na **+this**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-04.webp')} alt="Stránka New Applet se zvýrazněným +this ve větě if this then that"/>
  </div>
</div>

#### Krok 5: Vyhledejte službu **Webhooks** a vyberte ji

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-05.webp')} alt="Krok Choose a service s vyhledanou a zvýrazněnou službou Webhooks"/>
  </div>
</div>

#### Krok 6: Klikněte na **Receive a web request**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-06.webp')} alt="Krok Choose trigger se zvýrazněným spouštěčem Receive a web request"/>
  </div>
</div>

#### Krok 7: Do pole **Event Name** napište `button` a klikněte na **Create Trigger**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-07.webp')} alt="Pole spouštěče s vyplněným Event Name button a zvýrazněným tlačítkem Create trigger"/>
  </div>
</div>

#### Krok 8: Ve větě `if this then that` klikněte na **+that**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-08.webp')} alt="Stránka New Applet se zvýrazněným +that ve větě if this then that"/>
  </div>
</div>

#### Krok 9: Vyhledejte službu pro akci **Notifications** a vyberte ji

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-09.webp')} alt="Krok Choose action service s vyhledanou a zvýrazněnou službou Notifications"/>
  </div>
</div>

#### Krok 10: Klikněte na **Send a notification from the IFTTT app**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-10.webp')} alt="Krok Choose action se zvýrazněnou akcí Send a notification from the IFTTT app"/>
  </div>
</div>

#### Krok 11: Do pole **Notification** vložte text `The button has been pressed on {{OccurredAt}}` a klikněte na tlačítko **Create action**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-11.webp')} alt="Pole Notification s textem o stisknutém tlačítku a zvýrazněným tlačítkem Create action"/>
  </div>
</div>

#### Krok 12: Klikněte na tlačítko **Finish**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-12.webp')} alt="Krok Review and finish se zvýrazněným tlačítkem Finish"/>
  </div>
</div>

#### Krok 13: Klikněte na tlačítko **Webhooks**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-13.webp')} alt="Stránka hotového appletu se zvýrazněnou ikonou Webhooks"/>
  </div>
</div>

#### Krok 14: Klikněte na tlačítko **Documentation**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-14.webp')} alt="Stránka služby Webhooks se zvýrazněným tlačítkem Documentation"/>
  </div>
</div>

#### Krok 15: Klikněte do pole **event**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-15.webp')} alt="Dokumentace Webhooks se zvýrazněným polem event v URL spouštěče"/>
  </div>
</div>

#### Krok 16: Do pole **event** vložte název `button` a okno nechte otevřené

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-16.webp')} alt="Dokumentace Webhooks s hodnotou button vyplněnou v poli event v URL spouštěče"/>
  </div>
</div>

#### Krok 17: Mobilní aplikace

Nainstalujte si do chytrého telefonu aplikaci **IFTTT** a přihlaste se stejným účtem, ve kterém jste applet vytvořili. Když se aplikace zeptá, povolte jí push notifikace.

#### Krok 18: V okně prohlížeče klikněte na tlačítko **Test It**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-17.webp')} alt="Dokumentace Webhooks se zvýrazněným tlačítkem Test It"/>
  </div>
</div>

#### Krok 19: Do několika sekund by vám na chytrý telefon měla přijít push notifikace

#### Krok 20: Zkopírujte si tuto adresu URL do schránky, budete ji potřebovat později

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-ifttt-18.webp')} alt="Zvýrazněná URL spouštěče Webhooks ke zkopírování do schránky"/>
  </div>
</div><br></br>

:::success

Teď máte ve službě **IFTTT** funkční **Applet** pro notifikace.

:::

## Propojení Node-RED s IFTTT

V této části propojíme událost tlačítka v MQTT s požadavkem HTTP na **IFTTT**, který spustí push notifikaci.

#### Krok 1: Přepněte se do svého flow v **Node-RED**

#### Krok 2: Vložte do flow následující úryvek (pomocí **Menu >> Import**)

```text
[{"id":"e507a379.e9d1d","type":"mqtt in","z":"dfc861b.b2a02a","name":"","topic":"node/push-button:0/push-button/-/event-count","qos":"2","broker":"b9592cd0.2b74f","x":660,"y":760,"wires":[["5d4d5593.80242c"]]},{"id":"62133f2.84223c","type":"http request","z":"dfc861b.b2a02a","name":"","method":"POST","ret":"txt","url":"","tls":"","x":1010,"y":760,"wires":[[]]},{"id":"5d4d5593.80242c","type":"change","z":"dfc861b.b2a02a","name":"","rules":[{"t":"delete","p":"payload","pt":"msg"}],"action":"","property":"","from":"","to":"","reg":false,"x":890,"y":860,"wires":[["62133f2.84223c"]]},{"id":"b9592cd0.2b74f","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```

Bude to vypadat takto:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-node-red-ifttt-snippet.webp')} alt="Flow v Node-RED s uzlem MQTT pro event-count tlačítka napojeným přes delete msg.payload na uzel http request"/>
  </div>
</div><br></br>

:::info

Úryvek propojí topic MQTT `node/push-button:0/push-button/-/event-count` s požadavkem HTTP. Než zprávu předáme do požadavku HTTP, odstraníme z ní parametr `payload`, jinak by se použil jako tělo požadavku.

:::

#### Krok 3: Dvakrát klikněte na uzel **http request** a upravte adresu URL IFTTT, kterou jste získali v předchozí části

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-push-button/radio-push-button-node-red-ifttt-url.webp')} alt="Dialog Edit http request node s vyplněnou IFTTT webhook URL v poli URL"/>
  </div>
</div>

#### Krok 4: Adresu URL uložte tlačítkem **Done**

#### Krok 5: Nasaďte flow tlačítkem **Deploy** v pravém horním rohu

:::success

Teď by vám měla přijít push notifikace pokaždé, když stisknete tlačítko.

:::

## Související dokumenty

* [**Instalace na Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/)
* [**Nastavení toolchainu**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain)
* [**Průvodce toolchainem**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain)
