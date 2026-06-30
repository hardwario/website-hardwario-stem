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

Pokud flow nevidíte, sestavte ho sami. Potřebujete tři uzly zapojené za sebou:

1. Uzel **MQTT in** přihlášený k topicu stisku tlačítka `node/push-button:0/push-button/-/event-count`.
2. Uzel **change**, který nastaví `msg.payload` na text oznámení, který chcete, například `Button pressed, you're the best!`.
3. Uzel Blynk IoT, který oznámení doručí (ten přidáte v další sekci, jakmile budete mít připravený účet a šablonu Blynk IoT).

Uzel Blynk IoT propojíme v sekci **Dát to všechno dohromady** níže.

## Příprava aplikace Blynk IoT

V tomto kroku nastavíte **Blynk IoT**, aby váš telefon mohl přijímat oznámení z **HARDWARIO Playground**. Stará aplikace Blynk Legacy byla ukončena, proto používáme aktuální platformu **Blynk IoT**.

#### Krok 1: Vytvořte účet, šablonu a zařízení v Blynk IoT

Pokud ještě účet nemáte, vytvořte si ho v **Blynk IoT** a nastavte zařízení. Celý postup — účet, **šablona** (template), **datastreamy** a **zařízení** — je popsán v [této příručce](https://docs.hardwario.com/tower/platform-integrations/blynk-app/). Pokud již máte šablonu z předchozího projektu, můžete ji znovu použít.

Poté si do telefonu stáhněte aplikaci **Blynk IoT** z [**App Store**](https://apps.apple.com/us/app/blynk-iot/id1559317868) nebo [**Google Play**](https://play.google.com/store/apps/details?id=cloud.blynk) a přihlaste se stejnými údaji.

#### Krok 2: Definujte ve své šabloně oznamovací Event

V Blynk IoT se push notifikace odesílají prostřednictvím **Events** (událostí). Otevřete svou šablonu ve webové konzoli Blynk IoT a vytvořte nový **Event** (například s názvem `Button pressed`). V nastavení události zapněte **Notifications** a vyberte, kdo má na propojeném zařízení push notifikaci dostávat.

Toto je zpráva, která se objeví na vašem telefonu pokaždé, když stisknete tlačítko. Přesné kroky a snímky obrazovky najdete v [příručce](https://docs.hardwario.com/tower/platform-integrations/blynk-app/).

## Dát to všechno dohromady

Posledním krokem je propojit Node-RED s Blynk IoT, aby stisk tlačítka spustil vaši oznamovací událost (Event).

#### Krok 1: Přidejte uzel Blynk IoT

V záložce **Funkce** v **Playground** přidejte za uzel **change** uzel Blynk IoT a propojte je. Uzly Blynk IoT najdete vlevo v paletě.

#### Krok 2: Nakonfigurujte připojení

Dvojklikněte na uzel a poté klikněte na **ikonu tužky** pro nastavení připojení k Blynk. Do pole **Url** zadejte `blynk.cloud` a do polí **Auth Token** a **Template ID** zkopírujte hodnoty z detailu vašeho zařízení ve webové konzoli Blynk IoT. Potvrďte a poté uzel nasměrujte na **Event** (`Button pressed`), který jste ve šabloně definovali, aby spouštěl danou notifikaci.

#### **Krok 3:** Klikněte na tlačítko **Nasadit**. Pokaždé, když upravíte flow Node-RED, musíte změny aplikovat!

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


