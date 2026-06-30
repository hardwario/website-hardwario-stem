---
slug: push-the-button
title: Tlačítko Push
---
import Image from '@theme/IdealImage';

# Tlačítko Push

**Sada Push** může interagovat s vaším světem. Získejte oznámení na telefonu, přehrajte další skladbu na Spotify, ovládejte své chytré osvětlení, spustíte časovač na vejce nebo pošlete Tweet do světa.

V tomto tutoriálu vytvoříte jednoduchý projekt s tlačítkem, které vám pokaždé, když na něj kliknete, pošle push notifikaci na váš telefon.

<div class="container">
  <div class="row">
    <Image img={require('./img/push-the-button/push-the-button-button-garage.webp')}/>
  </div>
</div>


## Sestavení hardware

Budete potřebovat [Sadu Push](https://www.hardwario.store/cz/p/push-set) a [Radio Dongle](https://www.hardwario.store/cz/p/radio-dongle).

#### Krok 1: Sestavení

Sestavte všechny tři moduly dohromady, abyste vytvořili **Sadu Push**. Všimněte si orientace Mini Battery Module na obrázku níže.

<div class="container">
  <div class="row">
    <Image img={require('./img/push-the-button/push-the-button-mini-battery-module-orientation.webp')}/>
  </div>
</div>

#### Krok 2: Vložte baterie

:::info

Červená LED dioda na základním modulu se rozsvítí na 2 sekundy, když jsou vloženy baterie. Tímto způsobem víte, že baterie jsou v pořádku a kit funguje správně.

:::

## Nastavení Playground

V tomto kroku spustíte aplikaci **Playground**, která spravuje Radio Dongle, Push Button a díky **Node-RED** propojuje vše dohromady.

#### Krok 1: Stáhněte a spusťte nejnovější [**HARDWARIO Playground**](https://github.com/hardwario/hardwario-playground/releases/latest)

<div class="container">
  <div class="row">
    <Image img={require('./img/push-the-button/logo.webp')}/>
  </div>
</div>

#### **Krok 2:** Připojte [Radio Dongle](https://www.hardwario.store/cz/p/radio-dongle) k vašemu počítači

<div class="container">
  <div class="row">
    <Image img={require('./img/push-the-button/push-the-button-connect-usb-dongle.webp')}/>
  </div>
</div>

#### Krok 3: Přejděte na záložku **Zařízení**, zkontrolujte, zda je rádio dongle detekován, a klikněte na **Připojit**

:::info

Pokud nevidíte Radio Dongle mezi zařízeními, podívejte se na kapitolu [Troubleshooting](https://docs.hardwario.com/fiber/troubleshooting/).

:::

<div class="container">
  <div class="row">
    <Image img={require('./img/push-the-button/push-the-button-playground-devices-connect.webp')}/>
  </div>
</div>

#### Krok 4: Po připojení. Již nahraná a spárovaná Sada Push bude v seznamu spárovaných zařízení.

<div class="container">
  <div class="row">
    <Image img={require('./img/push-the-button/push-the-button-playground-devices-connected.webp')}/>
  </div>
</div>

#### Krok 5: Přepněte na záložku **Funkce** a ujistěte se, že vidíte flow na obrázku níže

<div class="container">
  <div class="row">
    <Image img={require('./img/push-the-button/push-the-button-node-red-flow.webp')}/>
  </div>
</div>

Pokud nevidíte flow, můžete zkopírovat níže uvedený text a vložit ho do nabídky Node-RED &gt; Import &gt; Clipboard

```text
[{"id":"103c675c.c81139","type":"mqtt in","z":"2c41a2bd.aa36ae","name":"","topic":"node/push-button:0/push-button/-/event-count","qos":"2","broker":"29fba84a.b2af58","x":270,"y":360,"wires":[["ff41c7e0.06eba8"]]},{"id":"f507ecc3.8f82b","type":"blynk-ws-out-notify","z":"2c41a2bd.aa36ae","name":"Blynk notification","client":"fc4bbabb.9bb1b8","queue":false,"rate":5,"x":790,"y":360,"wires":[]},{"id":"ff41c7e0.06eba8","type":"change","z":"2c41a2bd.aa36ae","name":"Set message","rules":[{"t":"set","p":"payload","pt":"msg","to":"Button pressed, you're the best!","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":570,"y":360,"wires":[["f507ecc3.8f82b"]]},{"id":"c131dd35.bb855","type":"comment","z":"2c41a2bd.aa36ae","name":"Push Button Kit flow","info":"","x":190,"y":300,"wires":[]},{"id":"29fba84a.b2af58","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","willTopic":"","willQos":"0","willPayload":""},{"id":"fc4bbabb.9bb1b8","type":"blynk-ws-client","z":"","name":"","path":"ws://blynk-cloud.com/websockets","key":"5cf554e34caf4d49a1b24cd07c5e2c13","dbg_all":false,"dbg_read":false,"dbg_write":false,"dbg_notify":false,"dbg_mail":false,"dbg_prop":false,"dbg_sync":false,"dbg_bridge":false,"dbg_low":false,"dbg_pins":"","multi_cmd":false,"proxy_type":"no","proxy_url":""}]
```

## Nastavení mobilní aplikace Blynk

V tomto kroku nakonfigurujete aplikaci **Blynk** ve svém telefonu, abyste mohli dostávat oznámení z **HARDWARIO Playground**.

#### Krok 1: Stáhněte si Blynk

Nyní si stáhněte aplikaci **Blynk** z [**App Store**](https://itunes.apple.com/us/app/blynk-iot-for-arduino-esp32/id808760481?mt=8) nebo [**Google Play**](https://play.google.com/store/apps/details?id=cc.blynk&hl=en). Vytvořte účet a přihlaste se.

#### Krok 2: Klikněte na **QR kód**

<div class="container">
  <div class="row">
    <Image img={require('./img/push-the-button/push-the-button-blynk.webp')}/>
  </div>
</div>

#### **Krok 3:** Naskenujte následující QR kód, abyste získali vše předkonfigurované

<div class="container">
  <div class="row">
    <Image img={require('./img/push-the-button/push-the-button-blynk-qr-code-push-button-kit.webp')}/>
  </div>
</div>

#### Krok 4: Uvidíte tento importovaný **projekt** s jediným **Widgetem pro oznámení**

Klikněte na **ikonu Nastavení**.

<div class="container">
  <div class="row">
    <Image img={require('./img/push-the-button/push-the-button-blynk-config.webp')}/>
  </div>
</div>

#### Krok 5: Přejděte dolů a klikněte na **Odeslat všechny** tokeny. Tento token z vašeho e-mailu použijeme později.

<div class="container">
  <div class="row">
    <Image img={require('./img/push-the-button/push-the-button-blynk-token.webp')}/>
  </div>
</div>

#### Krok 6: Nyní musíte spustit projekt Blynk. Klikněte na symbol **Přehrát**

<div class="container">
  <div class="row">
    <Image img={require('./img/push-the-button/push-the-button-blynk-play.webp')}/>
  </div>
</div>

## Dát to všechno dohromady

Posledním krokem je propojit Node-RED a Blynk, abyste mohli dostávat oznámení.

#### Krok 1: V záložce **Playground** **Functions** dvojklikněte na  **Blynk notification** none

#### Krok 2: Klikněte na **ikonu tužky** a vložte token, který jste obdrželi v e-mailu. Klikněte na **Hotovo**

#### **Krok 3:** Klikněte na tlačítko **Nasadit**. Pokaždé, když upravíte flow Node-RED, musíte změny aplikovat!

<div class="container">
  <div class="row">
    <Image img={require('./img/push-the-button/push-the-button-node-red-token.webp')}/>
  </div>
</div>

## Akce!

Nastal čas **ZMÁČKNOUT TLAČÍTKO**

<div class="container">
  <div class="row">
    <Image img={require('./img/push-the-button/push-the-button-push-the-button.webp')}/>
  </div>
</div>

## Zjistit více

Cílem tohoto **Push Button Projektu** je ukázat základy v několika jednoduchých krocích. Nyní se můžete dozvědět více procházením **dokumentace** nebo návštěvou **odkazů níže**.

* Podívejte se na dalš HARDWARIO [**projekty**](projects-overview.md).
* Prohlédněte si [**přehled modulů**](https://docs.hardwario.com/chester/extension-modules/chester-z1/#module-overview).
* Naučte se pracovat s [**MQTT**](https://docs.hardwario.com/fiber/mqtt-broker/) a [**HARDWARIO MQTT topics**](https://docs.hardwario.com/fiber/mqtt-broker/) pro ovládání LED a relé.
* Vyzkoušejte další [**integrace**](https://docs.hardwario.com/tower/category/platform-integrations/) s **Grafana**, **Blynk**, **IFTTT**, **Ubidots** a dalšími.
* Použijte svůj [**Raspberry PI**](https://docs.hardwario.com/tower/server-raspberry-pi/) nebo jiný jednodeskový počítač \(SBC\) jako server.
* [**Nahrajte jiný firmware**](https://docs.hardwario.com/tower/firmware-development/hardwario-extension-tutorial/#flash-firmware) nebo si **napište vlastní firmware** pro **Core Module**.
* Zkontrolujte [**zapojení pinů Core Modulu**](https://docs.hardwario.com/tower/hardware-modules/header-pinout/#core-module-pinout) a připojte vlastní tlačítka, relé a senzory.


