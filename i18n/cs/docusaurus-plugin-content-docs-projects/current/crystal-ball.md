---
slug: crystal-ball
title: Věštecká koule
---
import Image from '@theme/IdealImage';

## Úvod

I mladí programátoři chtějí znát svůj osud. Vyvěštěte si ho s krabičkou. IoT magie odpoví na všechny otázky, které se vám honí hlavou. 🔮 😱

V tomto projektu se naučíte udělat z krabičky věšteckou kouli neboli **magic 8-ball**. ️🎱 Nastavíte ji tak, aby při zatřesení náhodně zvolila jednu z možností.

Budete potřebovat **krabičku s tlačítkem a USB dongle**. Vystačíte si tedy se základní sadou HARDWARIO, [**Start Set**](https://www.hardwario.store/p/start-set/).


## Rozjeďte to v Node-RED

1. Start Set[ sestavte a spárujte](https://hardwario.academy/). Do modulu Core Module potřebujete firmware **radio-8-ball**. 

Po nahrání firmwaru uvidíte, že se Alias vašeho zařízení na záložce Devices změnil na **Future teller**.

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-1.webp')} alt="Záložka Devices v Playgroundu se spárovaným zařízením pod aliasem future-teller:0"/> </div> </div>

2. V Playgroundu klikněte na **záložku Functions**, kde je programovací plocha.
3. Na plochu umístěte node **MQTT** ze sekce Input.

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-2.webp')} alt="Uzel mqtt in zvýrazněný v paletě a uzel mqtt umístěný na ploše"/> </div> </div>

4. Na node dvakrát klikněte a nastavte v něm klíčovou funkci: věštění. 🔮 **Do pole Topic zkopírujte tento řádek**:


```
node/future-teller:0/future/trigger
```

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-3.webp')} alt="Dialog Edit mqtt in node se zvýrazněným polem Topic s tématem trigger uzlu future-teller"/> </div> </div>

Potvrďte tlačítkem **Done**.

## Přidejte náhodu

1. Krabička funguje tak, že vám vyhodí jednu z předem nastavených odpovědí, a to vždy **na základě náhody**. Teď ji nastavíme.

Náhodnou volbu naprogramujete jednoduchým JavaScriptem. Jak na to? Vedle MQTT umístěte **node Function**, který najdete ve stejnojmenné sekci.

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-4.webp')} alt="Function uzel zvýrazněný v paletě a umístěný vedle MQTT uzlu future-telleru"/> </div> </div>

2. Dvojklikem node otevřete. V řádku **Name** ho pojmenujte (třeba 8-ball). Do řádku **Function** zkopírujte tento kód přesně tak, jak to vidíte na obrázku.


```
var answers = ["Nejspíš ano", "S tím nepočítej", "Možná", "Určitě ano"]
var num = Math.floor(Math.random() * Math.floor(answers.length));
msg.payload = answers[num];
return msg;
```

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-5.webp')} alt="Dialog Edit function node pojmenovaný 8-ball s JavaScriptem náhodné odpovědi na záložce On Message"/> </div> </div>

Díky tomuhle kódu se vybere **jedna ze čtyř možností**:

- Nejspíš ano,

- S tím nepočítej,

- Možná,

- Určitě ano.

Potvrďte tlačítkem **Done**.

3. Vedle Náhody přidejte další node, a to **Text** ze sekce Dashboard.
4. V něm nastavte **Label**, tedy štítek, na Odpověď.

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-6.webp')} alt="Dialog Edit text node s Label nastaveným na Odpověď a textovým uzlem na ploše"/> </div> </div>

Potvrďte tlačítkem **Done**.

5. Přidejte na plochu ještě robota, který vám výsledek nahlas přečte. Aby to bylo pořádně strašidelné. 🤖 Najdete ho jako node Audio out, také v sekci Dashboard.

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-7.webp')} alt="Uzel audio out zvýrazněný v paletě dashboard a umístěný pod flow s odpovědí"/> </div> </div>

Uvnitř nodu nastavte hlas, který bude zprávu číst.

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-8.webp')} alt="Dialog Edit audio out node s vybraným hlasem TTS, který odpověď přečte nahlas"/> </div> </div>

Potvrďte tlačítkem **Done**.

6. **Nody propojte** podle obrázku.

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-9.webp')} alt="Propojené uzly MQTT, 8-ball, text a audio out, se zvýrazněným tlačítkem Deploy"/> </div> </div>

Flow spusťte tlačítkem **Deploy** vpravo nahoře.

## Nechť osud promluví

1. Zvedněte svou mocnou krabičku a **položte jí otázku**, která vás pálí. Třeba:

- Opětuje David o ročník výš mou lásku?

- Budou zítra ve škole k obědu borůvkové knedlíky?

- Stanu se jednou úspěšným cirkusovým umělcem?

- Vyjde ráno slunce?

- Naučím se konečně jíst hůlkami?

- Budu jednou pracovat v Googlu?

- Mám si nabarvit vlasy nazeleno?

2. **Zatřeste krabičkou** a v Playgroundu na záložce Dashboard se dozvíte odpověď. ️🎱 Nezapomeňte si zapnout reproduktory, odpověď totiž i uslyšíte. Aleluja!

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-10.webp')} alt="Dlaždice Odpověď na Dashboardu s vylosovanou odpovědí Nejspíš ano"/> </div> </div>

P. S. Krabička neručí za to, že má pravdu. 🤡
