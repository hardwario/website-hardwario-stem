---
slug: crystal-ball
title: Věštecká koule
---
## Úvod

I mladí programátoři chtějí znát svůj osud. Vyvěšti si ho s krabičkou. IoT magie odpoví na všechny otázky, které se ti honí hlavou. 🔮 😱

V tomhle projektu se naučíš udělat z krabičky věšteckou kouli neboli **magic 8-ball**. ️🎱 Nastavíš ji tak, aby při zatřepání náhodně zvolila jednu z možností.

Budeš potřebovat **krabičku s tlačítkem a USB dongle**. Vystačíš si tedy se základní HARDWARIO sadou, [**Start Set**](https://shop.hardwario.com/p/start-set/).


## Rozjeď to v Node-RED

1. Start Set[ sestav a spáruj](/cs/handbook/). Na Core Module potřebuješ firmware **radio-8-ball**. 

Po nahrání firmware uvidíš, že se Alias tvého přístroje na záložce Devices změnilo na **Future teller**.

![NODE-RED](https://res.cloudinary.com/lukasfabik/image/upload/v1573310716/projects/vestici-koule/image9.png)

2. V Playgroundu klikni na **záložku Functions**, kde je programovací plocha.
3. Na plochu postav node **MQTT** ze sekce Input.

![MQTT](https://res.cloudinary.com/lukasfabik/image/upload/v1573310714/projects/vestici-koule/image3.png)

4. Na node dvakrát klikni a nastav v něm klíčovou funkci – věštění. 🔮 **Do pole Topic zkopíruj tenhle řádek**:


```
node/future-teller:0/future/trigger
```

![Topic](https://res.cloudinary.com/lukasfabik/image/upload/v1573310714/projects/vestici-koule/image4.png)

Potvrď tlačítkem **Done**.

## Hoď tam náhodu

1. Krabička funguje tak, že ti vyhodí jednu z předem nastavených odpovědí. Funguje přitom vždycky **na základě náhody**. Tak ji teď pojď nastavit.

Náhodnou volbu naprogramuješ podle jednoduchého javascriptu. Jak se to dělá? Vedle MQTT postav **node Function**, který najdeš ve stejnojmenné sekci.

![node Function](https://res.cloudinary.com/lukasfabik/image/upload/v1573310716/projects/vestici-koule/image11.png)

2. Dvojklikem node otevři. Na řádku **Name** node pojmenuj (třeba 8-ball). Do řádku **Function** zkopíruj tenhle kód, přesně jak to vidíš na obrázku.


```
var answers = ["Nejspíš ano", "S tím nepočítej", "Možná", "Určitě ano"]
var num = Math.floor(Math.random() * Math.floor(answers.length));
msg.payload = answers\[num];
return msg;
```

![Name node](https://res.cloudinary.com/lukasfabik/image/upload/v1573310715/projects/vestici-koule/image5.png)

Díky tomuhle kódu se vybere **jedna ze čtyř možností**:

- Nejspíš ano,

- S tím nepočítej,

- Možná,

- Určitě ano.

Potvrď tlačítkem **Done**.

3. Vedle Náhody přidej další node, a to **Text** ze sekce Dashboard.

![Text](https://res.cloudinary.com/lukasfabik/image/upload/v1573310715/projects/vestici-koule/image2.png)

4. V něm nastav **Label**, tedy štítek, na Odpověď.

![Label](https://res.cloudinary.com/lukasfabik/image/upload/v1573310715/projects/vestici-koule/image6.png)

Potvrď tlačítkem **Done**.

5. Přidej na plochu ještě robota, který ti výsledek nahlas přečte. Aby to bylo správně creepy. 🤖 Najdeš ho jako node Audio out taky v sekci Dashboard.

![Dashboard](https://res.cloudinary.com/lukasfabik/image/upload/v1573310715/projects/vestici-koule/image1.png)

Uvnitř nodu si nastav hlas, který bude zprávu číst.

![nastavení hlasu](https://res.cloudinary.com/lukasfabik/image/upload/v1573310716/projects/vestici-koule/image10.png)

Potvrď tlačítkem **Done**.

6. **Nody pospojuj** podle obrázku.

![Deploy](https://res.cloudinary.com/lukasfabik/image/upload/v1573310715/projects/vestici-koule/image8.png)

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

![Dashboard](https://res.cloudinary.com/lukasfabik/image/upload/v1573310715/projects/vestici-koule/image7.png)

P. S. Krabička neručí za to, že má pravdu. 🤡
