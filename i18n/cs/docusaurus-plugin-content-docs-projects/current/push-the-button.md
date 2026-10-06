---
slug: push-the-button
title: Tlačítko Push
---
import Image from '@theme/IdealImage';

# Tlačítko Push

**Sada Push** dokáže zasáhnout do vašeho okolí: pošle oznámení do telefonu, přehraje další skladbu na Spotify, ovládne chytré osvětlení, spustí minutku nebo odešle tweet do světa.

V tomto návodu vytvoříte jednoduchý projekt s tlačítkem, které vám po každém stisknutí pošle push notifikaci do telefonu.

<div class="container">
  <div class="row">
    <Image img={require('./img/push-the-button/push-the-button-button-garage.webp')} alt="Ruka mačkající tlačítko na sestavě Push Button Kit před garážovými vraty"/>
  </div>
</div>


## Sestavení hardwaru

Budete potřebovat [Sadu Push](https://www.hardwario.store/cz/p/push-set) a [Radio Dongle](https://www.hardwario.store/cz/p/radio-dongle).

#### Krok 1: Sestavení

Sestavte všechny tři moduly dohromady, abyste vytvořili **Sadu Push**. Všimněte si orientace Mini Battery Module na obrázku níže.

<div class="container">
  <div class="row">
    <Image img={require('./img/push-the-button/push-the-button-mini-battery-module-orientation.webp')} alt="Správné a špatné nasazení Core Modulu na Mini Battery Module, označené OK a WRONG"/>
  </div>
</div>

#### Krok 2: Vložte baterie

:::info

Po vložení baterií se červená LED na modulu Core Module na 2 sekundy rozsvítí. Podle toho poznáte, že baterie jsou v pořádku a sada funguje správně.

:::

## Nastavení Playground

V tomto kroku spustíte aplikaci **Playground**, která spravuje Radio Dongle, Push Button a díky **Node-RED** propojuje vše dohromady.

#### Krok 1: Stáhněte a spusťte nejnovější [**HARDWARIO Playground**](https://github.com/hardwario/hardwario-playground/releases/latest)

<div class="container">
  <div class="row">
    <Image img={require('./img/push-the-button/logo.webp')} alt="Logo aplikace HARDWARIO Playground"/>
  </div>
</div>

#### **Krok 2:** Připojte [Radio Dongle](https://www.hardwario.store/cz/p/radio-dongle) k počítači

<div class="container">
  <div class="row">
    <Image img={require('./img/push-the-button/push-the-button-connect-usb-dongle.webp')} alt="Radio Dongle zapojený do USB portu notebooku"/>
  </div>
</div>

#### Krok 3: Přejděte na záložku **Devices**, zkontrolujte, že aplikace Radio Dongle rozpoznala, a klikněte na **Connect**

:::info

Pokud nevidíte Radio Dongle mezi zařízeními, podívejte se na kapitolu [Troubleshooting](https://docs.hardwario.com/tower/firmware-sdk/how-to/how-to-push-button/).

:::

<div class="container">
  <div class="row">
    <Image img={require('./img/push-the-button/push-the-button-playground-devices-connect.webp')} alt="Záložka Devices v Playgroundu s vybraným portem Radio Donglu a zvýrazněným tlačítkem Connect"/>
  </div>
</div>

#### Krok 4: Po připojení se v seznamu spárovaných zařízení objeví sada Push, která už má nahraný firmware a je spárovaná.

<div class="container">
  <div class="row">
    <Image img={require('./img/push-the-button/push-the-button-playground-devices-connected.webp')} alt="Připojený Radio Dongle a spárovaný Push Button Kit uvedený v seznamu jako push-button:0"/>
  </div>
</div>

#### Krok 5: Přepněte na záložku **Functions** a ujistěte se, že vidíte flow na obrázku níže

<div class="container">
  <div class="row">
    <Image img={require('./img/push-the-button/push-the-button-node-red-flow.webp')} alt="Flow v Node-RED propojující MQTT téma stisku tlačítka přes Set message s uzlem Blynk notifikace"/>
  </div>
</div>

Pokud flow nevidíte, sestavte ho sami. Potřebujete tři uzly zapojené za sebou:

1. Uzel **MQTT in** přihlášený k topicu stisku tlačítka `node/push-button:0/push-button/-/event-count`.
2. Uzel **change**, který nastaví `msg.payload` na text oznámení, který chcete, například `Button pressed, you're the best!`.
3. Uzel Blynk IoT, který oznámení doručí (ten přidáte v další sekci, jakmile budete mít připravený účet a šablonu Blynk IoT).

Uzel Blynk IoT připojíme níže v sekci **Propojíme vše dohromady**.

## Příprava aplikace Blynk IoT

V tomto kroku nastavíte **Blynk IoT**, aby váš telefon mohl přijímat oznámení z **HARDWARIO Playground**. Stará aplikace Blynk Legacy byla ukončena, proto používáme aktuální platformu **Blynk IoT**.

#### Krok 1: Vytvořte účet, šablonu a zařízení v Blynk IoT

Pokud ještě účet nemáte, vytvořte si ho v **Blynk IoT** a nastavte zařízení. Celý postup, tedy účet, **šablona** (template), **datastreamy** a **zařízení**, je popsán v [této příručce](https://docs.hardwario.com/tower/platform-integrations/blynk-app/). Pokud již máte šablonu z předchozího projektu, můžete ji znovu použít.

Poté si do telefonu stáhněte aplikaci **Blynk IoT** z [**App Store**](https://apps.apple.com/us/app/blynk-iot/id1559317868) nebo [**Google Play**](https://play.google.com/store/apps/details?id=cloud.blynk) a přihlaste se stejnými údaji.

#### Krok 2: Definujte ve své šabloně oznamovací Event

V Blynk IoT se push notifikace odesílají prostřednictvím **Events** (událostí). Otevřete svou šablonu ve webové konzoli Blynk IoT a vytvořte nový **Event** (například s názvem `Button pressed`). V nastavení události zapněte **Notifications** a vyberte, kdo má na propojeném zařízení push notifikaci dostávat.

Toto je zpráva, která se objeví na vašem telefonu pokaždé, když stisknete tlačítko. Přesné kroky a snímky obrazovky najdete v [příručce](https://docs.hardwario.com/tower/platform-integrations/blynk-app/).

## Propojíme vše dohromady

Posledním krokem je propojit Node-RED s Blynk IoT, aby stisk tlačítka spustil vaši oznamovací událost (Event).

#### Krok 1: Přidejte uzel Blynk IoT

V záložce **Functions** v **Playground** přidejte za uzel **change** uzel Blynk IoT a propojte je. Uzly Blynk IoT najdete vlevo v paletě.

#### Krok 2: Nakonfigurujte připojení

Dvakrát klikněte na uzel a kliknutím na **ikonu tužky** nastavte připojení k Blynku. Do pole **Url** zadejte `blynk.cloud` a do polí **Auth Token** a **Template ID** zkopírujte hodnoty z detailu vašeho zařízení ve webové konzoli Blynk IoT. Potvrďte a poté uzel nasměrujte na **Event** (`Button pressed`), který jste v šabloně definovali, aby spouštěl danou notifikaci.

#### **Krok 3:** Klikněte na tlačítko **Deploy**. Pokaždé, když upravíte flow Node-RED, musíte změny aplikovat!

## Akce!

Nastal čas **ZMÁČKNOUT TLAČÍTKO**

<div class="container">
  <div class="row">
    <Image img={require('./img/push-the-button/push-the-button-push-the-button.webp')} alt="Kreslený prst mačkající tlačítko na sestavě Push Button Kit"/>
  </div>
</div>

## Další informace

Cílem projektu **Push Button** je ukázat základy v několika jednoduchých krocích. Víc se dozvíte v **dokumentaci** nebo na **odkazech níže**.

* Podívejte se na další [**projekty**](projects-overview.md) HARDWARIO.
* Prohlédněte si [**přehled modulů**](https://docs.hardwario.com/chester/extension-modules/chester-z1/#module-overview).
* Naučte se pracovat s [**MQTT**](https://docs.hardwario.com/tower/mqtt-protocol/) a [**HARDWARIO MQTT topics**](https://docs.hardwario.com/tower/mqtt-protocol/topics-reference/) pro ovládání LED a relé.
* Vyzkoušejte další [**integrace**](https://docs.hardwario.com/tower/category/platform-integrations/) s **Grafana**, **Blynk**, **IFTTT**, **Ubidots** a dalšími.
* Použijte svůj [**Raspberry PI**](https://docs.hardwario.com/tower/server-raspberry-pi/) nebo jiný jednodeskový počítač \(SBC\) jako server.
* [**Nahrajte jiný firmware**](https://docs.hardwario.com/tower/firmware-development/hardwario-extension-tutorial/#flash-firmware) nebo si **napište vlastní firmware** pro **Core Module**.
* Zkontrolujte [**zapojení pinů modulu Core Module**](https://docs.hardwario.com/tower/hardware-modules/header-pinout/#core-module-pinout) a připojte vlastní tlačítka, relé a senzory.

