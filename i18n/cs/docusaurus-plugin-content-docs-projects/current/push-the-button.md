---
slug: push-the-button
title: Tlačítko Push
---
import Image from '@theme/IdealImage';

# Tlačítko Push

**Sada Push** propojí tlačítko se světem kolem vás: pošle oznámení do telefonu, pustí další skladbu na Spotify, ovládne chytré osvětlení, spustí minutku nebo odešle tweet do světa.

V tomto návodu vytvoříte jednoduchý projekt s tlačítkem, které vám po každém stisknutí pošle push notifikaci do telefonu.

<div class="container">
  <div class="row">
    <Image img={require('./img/push-the-button/push-the-button-button-garage.webp')} alt="Ruka tiskne tlačítko na Sadě Push před garážovými vraty"/>
  </div>
</div>


## Sestavení hardwaru

Budete potřebovat [Sadu Push](https://www.hardwario.store/cz/p/push-set) a [Radio Dongle](https://www.hardwario.store/cz/p/radio-dongle).

#### Krok 1: Sestavení

Složte všechny tři moduly dohromady do **Sady Push**. Na obrázku níže si všimněte, jak má být otočený modul Mini Battery Module.

<div class="container">
  <div class="row">
    <Image img={require('./img/push-the-button/push-the-button-mini-battery-module-orientation.webp')} alt="Správné a špatné nasazení modulu Core Module na Mini Battery Module, označené OK a WRONG"/>
  </div>
</div>

#### Krok 2: Vložte baterie

:::info

Po vložení baterií se červená LED na modulu Core Module na 2 sekundy rozsvítí. Podle toho poznáte, že baterie jsou v pořádku a sada funguje správně.

:::

## Nastavení aplikace Playground

V tomto kroku spustíte aplikaci **Playground**. Ta spravuje Radio Dongle a tlačítko Push Button a pomocí **Node-RED** všechno propojí.

#### Krok 1: Stáhněte a spusťte nejnovější [**HARDWARIO Playground**](https://github.com/hardwario/hardwario-playground/releases/latest)

<div class="container">
  <div class="row">
    <Image img={require('./img/push-the-button/logo.webp')} alt="Logo aplikace HARDWARIO Playground"/>
  </div>
</div>

#### Krok 2: Připojte [Radio Dongle](https://www.hardwario.store/cz/p/radio-dongle) k počítači

<div class="container">
  <div class="row">
    <Image img={require('./img/push-the-button/push-the-button-connect-usb-dongle.webp')} alt="Radio Dongle zapojený do USB portu notebooku"/>
  </div>
</div>

#### Krok 3: Přejděte na záložku **Devices**, zkontrolujte, že aplikace Radio Dongle rozpoznala, a klikněte na **Connect**

:::info

Pokud Radio Dongle mezi zařízeními nevidíte, podívejte se do kapitoly [Řešení problémů](https://docs.hardwario.com/tower/firmware-development/firmware-quick-start/#troubleshooting).

:::

<div class="container">
  <div class="row">
    <Image img={require('./img/push-the-button/push-the-button-playground-devices-connect.webp')} alt="Záložka Devices v Playgroundu s vybraným portem Radio Dongle a zvýrazněným tlačítkem Connect"/>
  </div>
</div>

#### Krok 4: Po připojení se v seznamu spárovaných zařízení objeví Sada Push, která už má nahraný firmware a je spárovaná

<div class="container">
  <div class="row">
    <Image img={require('./img/push-the-button/push-the-button-playground-devices-connected.webp')} alt="Připojený Radio Dongle a spárovaná Sada Push uvedená v seznamu jako push-button:0"/>
  </div>
</div>

#### Krok 5: Přepněte na záložku **Functions** a sestavte flow podle obrázku níže

<div class="container">
  <div class="row">
    <Image img={require('./img/push-the-button/push-the-button-node-red-flow.webp')} alt="Flow v Node-RED, který vede topic MQTT se stiskem tlačítka přes uzel Set message do uzlu notifikace Blynk"/>
  </div>
</div>

Potřebujete tři uzly zapojené za sebou:

1. Uzel **mqtt in**, který odebírá topic stisku tlačítka `node/push-button:0/push-button/-/event-count`.
2. Uzel **change**, který nastaví `msg.payload` na požadovaný text oznámení, například `Button pressed, you're the best!`.
3. Uzel **write** ze sekce Blynk IoT, který text předá Blynku (přidáte ho později, až budete mít připravený účet a šablonu Blynk IoT).

Obrázek ukazuje původní flow, který končil uzlem pro oznámení ze starého Blynku. Pokud tenhle flow v Playgroundu máte, jeho poslední uzel smažte: už nefunguje a jeho místo zaujme uzel write. Uzel write připojíme níže v sekci **Všechno dohromady**.

## Příprava aplikace Blynk IoT

V tomto kroku nastavíte **Blynk IoT**, aby vám do telefonu chodila oznámení z aplikace **HARDWARIO Playground**. Starší aplikace Blynk Legacy byla ukončena, proto používáme aktuální platformu **Blynk IoT**. Node-RED pošle text oznámení do Blynku a automatizace v Blynku z každé nové zprávy udělá push notifikaci.

#### Krok 1: Vytvořte účet a šablonu v Blynk IoT

Pokud ještě nemáte účet v [Blynk IoT](https://blynk.io), založte si ho. Na tento projekt stačí bezplatný tarif: v době psaní návodu zahrnuje push notifikace v aplikaci a až pět automatizací.

Pak vytvořte šablonu zařízení (template). Jak na to, ukazuje [rychlý návod Blynku](https://docs.blynk.io/en/getting-started/template-quick-setup). Pokud už máte šablonu z předchozího projektu, můžete ji použít znovu.

#### Krok 2: Přidejte datastream pro zprávu

V šabloně otevřete záložku **Datastreams**, klikněte na **New Datastream** a vyberte **Virtual Pin**. Datastream pojmenujte (třeba `Zprava`), vyberte volný pin (třeba V2) a jako datový typ (**Data Type**) zvolte **String**, protože notifikace ponese váš vlastní text.

V nastavení datastreamu povolte, aby ho automatizace mohly použít jako spouštěč: v části **Automations** zapněte **Use as Condition**. Datastream vytvořte a šablonu uložte.

#### Krok 3: Založte zařízení

Ze šablony založte zařízení: v sekci **Devices** přidejte nové zařízení, vyberte svou šablonu a zařízení pojmenujte. Na jeho záložce **Device Info** najdete **Auth Token**, který budete potřebovat v Node-RED.

#### Krok 4: Vytvořte automatizaci

V Blynku otevřete **Automations** a založte novou automatizaci. Jako podmínku (**When**) zvolte **Device State**, pak své zařízení, svůj datastream a **Is Any**. Automatizace tak zareaguje na každé stisknutí, i když bude text stejný jako minule.

V části **Do this** přidejte akci, která pošle notifikaci do mobilní aplikace (**Send In-App Notifications**), a jako příjemce zvolte sebe. Do textu notifikace vložte zástupný symbol **Trigger value** (`{TRIGGER_VALUE}`). Blynk za něj dosadí text, který mu pošle Node-RED.

Automatizaci pojmenujte. **Limit period** určuje, za jak dlouho se automatizace smí spustit znovu: zvolte co nejkratší dobu, jinak by vám oznámení o druhém stisknutí krátce po prvním nedorazilo. Automatizaci uložte.

#### Krok 5: Nainstalujte si aplikaci do telefonu

Stáhněte si do telefonu aplikaci **Blynk IoT** z [**App Store**](https://apps.apple.com/us/app/blynk-iot/id1559317868) nebo [**Google Play**](https://play.google.com/store/apps/details?id=cloud.blynk) a přihlaste se stejným účtem. Zkontrolujte, že má aplikace povolená upozornění, aby se zpráva mohla zobrazit.

## Všechno dohromady

Zbývá propojit Node-RED s Blynk IoT, aby stisk tlačítka poslal váš text do datastreamu a automatizace z něj udělala oznámení.

#### Krok 1: Přidejte uzel write z Blynk IoT

V aplikaci **Playground** na záložce **Functions** přidejte za uzel **change** uzel **write** ze sekce **Blynk IoT** a oba propojte. Sekci **Blynk ws** nepoužívejte, patří ke starému Blynku, který už nefunguje.

#### Krok 2: Nastavte připojení

Dvakrát klikněte na uzel. Vedle pole **Connection** uvidíte **malou tužku**. Klikněte na ni a otevře se nové okno. Do pole **Url** zadejte `blynk.cloud` a do polí **Auth Token** a **Template ID** zkopírujte hodnoty z webové konzole Blynk IoT: Auth Token najdete na záložce **Device Info** zařízení, Template ID v detailu šablony. Potvrďte tlačítkem **Add**. Pak do pole **Virtual Pin** zadejte číslo pinu svého datastreamu (pro V2 je to 2) a potvrďte tlačítkem **Done**.

#### Krok 3: Klikněte na tlačítko **Deploy**. Po každé úpravě flow v Node-RED musíte změny znovu nasadit!

## Akce!

Nastal čas **stisknout tlačítko**

<div class="container">
  <div class="row">
    <Image img={require('./img/push-the-button/push-the-button-push-the-button.webp')} alt="Kreslený prst tiskne tlačítko na Sadě Push"/>
  </div>
</div>

## Další informace

Cílem projektu **Push Button** je ukázat základy v několika jednoduchých krocích. Víc se dozvíte v **dokumentaci** nebo v **odkazech níže**.

* Podívejte se na další [**projekty**](projects-overview.md) HARDWARIO.
* Prohlédněte si [**přehled modulů**](https://docs.hardwario.com/tower/hardware-modules/).
* Naučte se, jak pomocí [**MQTT**](https://docs.hardwario.com/tower/mqtt-protocol/) a [**HARDWARIO MQTT topics**](https://docs.hardwario.com/tower/mqtt-protocol/topics-reference/) ovládat LED a relé.
* Vyzkoušejte další [**integrace**](https://docs.hardwario.com/tower/category/platform-integrations/): **Grafana**, **Blynk**, **IFTTT**, **Ubidots** a další.
* Použijte svůj [**Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/) nebo jiný jednodeskový počítač \(SBC\) jako server.
* [**Nahrajte jiný firmware**](https://docs.hardwario.com/tower/desktop-programming/firmware-flashing/) nebo si [**napište vlastní firmware**](https://docs.hardwario.com/tower/firmware-sdk/) pro modul **Core Module**.
* Zkontrolujte [**zapojení pinů modulu Core Module**](https://docs.hardwario.com/tower/hardware-modules/header-pinout/#core-module-pinout) a připojte vlastní tlačítka, relé a senzory.
