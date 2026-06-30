---
slug: crystal-ball
title: Věštecká koule
---
import Image from '@theme/IdealImage';

## Úvod

I mladí programátoři chtějí znát svůj osud. Vyvěšti si ho s krabičkou. IoT magie odpoví na všechny otázky, které se ti honí hlavou. 🔮 😱

V tomhle projektu se naučíš udělat z krabičky věšteckou kouli neboli **magic 8-ball**. ️🎱 Nastavíš ji tak, aby při zatřepání náhodně zvolila jednu z možností.

Budeš potřebovat **krabičku s tlačítkem a USB dongle**. Vystačíš si tedy se základní HARDWARIO sadou, [**Start Set**](https://www.hardwario.store/p/start-set/).


## Rozjeď to v Node-RED

1. Start Set[ sestav a spáruj](https://hardwario.academy/). Na Core Module potřebuješ firmware **radio-8-ball**. 

Po nahrání firmware uvidíš, že se Alias tvého přístroje na záložce Devices změnilo na **Future teller**.

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-1.webp')}/> </div> </div>

2. V Playgroundu klikni na **záložku Functions**, kde je programovací plocha.
3. Na plochu postav node **MQTT** ze sekce Input.

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-2.webp')}/> </div> </div>

4. Na node dvakrát klikni a nastav v něm klíčovou funkci – věštění. 🔮 **Do pole Topic zkopíruj tenhle řádek**:


```
node/future-teller:0/future/trigger
```

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-3.webp')}/> </div> </div>

Potvrď tlačítkem **Done**.

## Hoď tam náhodu

1. Krabička funguje tak, že ti vyhodí jednu z předem nastavených odpovědí. Funguje přitom vždycky **na základě náhody**. Tak ji teď pojď nastavit.

Náhodnou volbu naprogramuješ podle jednoduchého javascriptu. Jak se to dělá? Vedle MQTT postav **node Function**, který najdeš ve stejnojmenné sekci.

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-4.webp')}/> </div> </div>

2. Dvojklikem node otevři. Na řádku **Name** node pojmenuj (třeba 8-ball). Do řádku **Function** zkopíruj tenhle kód, přesně jak to vidíš na obrázku.


```
var answers = ["Nejspíš ano", "S tím nepočítej", "Možná", "Určitě ano"]
var num = Math.floor(Math.random() * Math.floor(answers.length));
msg.payload = answers[num];
return msg;
```

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-5.webp')}/> </div> </div>

Díky tomuhle kódu se vybere **jedna ze čtyř možností**:

- Nejspíš ano,

- S tím nepočítej,

- Možná,

- Určitě ano.

Potvrď tlačítkem **Done**.

3. Vedle Náhody přidej další node, a to **Text** ze sekce Dashboard.
4. V něm nastav **Label**, tedy štítek, na Odpověď.

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-6.webp')}/> </div> </div>

Potvrď tlačítkem **Done**.

5. Přidej na plochu ještě robota, který ti výsledek nahlas přečte. Aby to bylo správně creepy. 🤖 Najdeš ho jako node Audio out taky v sekci Dashboard.

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-7.webp')}/> </div> </div>

Uvnitř nodu si nastav hlas, který bude zprávu číst.

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-8.webp')}/> </div> </div>

Potvrď tlačítkem **Done**.

6. **Nody pospojuj** podle obrázku.

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-9.webp')}/> </div> </div>

Flow odstartuj tlačítkem **Deploy** vpravo nahoře.

## Nechť osud promluví

1. Ó, velký ty, zvedni svou mocnou krabičku a **zeptej se jí na otázku**, která tě pálí. Třeba:

- Opětuje David o ročník výš mou lásku?

- Budou zítra ve škole k obědu borůvkové knedlíky?

- Stanu se jednou úspěšným cirkusovým umělcem?

- Vyjde ráno slunce?

- Naučím se konečně jíst hůlkami?

- Budu jednou pracovat v Googlu?

- Mám si nabarvit vlasy nazeleno?

2. **Zatřes krabičkou** a v Playgroundu pod záložkou Dashboard se dozvíš svou odpověď. ️🎱 Nezapomeň si zapnout repráky, protože ji i uslyšíš. Aleluja!

<div class="container"> <div class="row"> <Image img={require('./img/crystal-ball/crystal-ball-10.webp')}/> </div> </div>

P. S. Krabička neručí za to, že má pravdu. 🤡
