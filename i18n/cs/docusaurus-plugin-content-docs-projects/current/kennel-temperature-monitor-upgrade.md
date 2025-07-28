---
slug: kennel-temperature-monitor-upgrade
title: Monitor teploty psí boudy - Vylepšení
---

## Úvod

Základní verzi detektoru teploty do psí boudy už máš? Postav si ještě o třídu lepší. Bude ti posílat notifikace do mobilu a teplotní stav boudy uvidíš odkudkoli. 🐶

S tímhle projektem se naučíš nastavit krabičku tak, aby ti **poslala zprávu, když teplota překročí přednastavenou hodnotu**. 👌 Štěkat krabička sice nezačne, ale i tak je to super projekt. 🐩

Základní verzi tohohle projektu najdeš tady: [Hlídač teploty pro chlupatého hlídače: kontroluj teplotu v boudě svého psa](/i18n/cs/docusaurus-plugin-content-docs-projects/current/kennel-temperature-monitor.md).

Tentokrát ti taky postačí základní HARDWARIO sada, tedy [**Start Set**](https://shop.hardwario.com/start-set/).


## Připrav si Node-RED

1. Firmware, který k projektu potřebuješ, je známý **bcf-radio-push-button**. Máš ho tam? Tak na co čekáš, krabičku spáruj s Donglem.
![NODE-RED](https://res.cloudinary.com/lukasfabik/image/upload/v1573306270/projects/upgrade-hlidac-teploty-pro-chlupateho-hlidace/image5.png)

2. V Playgroundu překlikni na záložku **Functions** a polož na plochu úplně to samé, co v základní verzi projektu:

- jeden kousek **MQTT nodu** ze sekce Input (nahraj na něj znovu **Topic**

```
node/push-button:0/thermometer/0:1/temperature),
```

- a ukazatel, tedy node **Gauge** ze sekce Dashboard. Měl by ukazovat od −15 do 40 °C. Navíc si ho pojmenuj, pro lepší orientaci. ✍️
![Gauge](https://res.cloudinary.com/lukasfabik/image/upload/v1573306271/projects/upgrade-hlidac-teploty-pro-chlupateho-hlidace/image3.png)

![Dashboard](https://res.cloudinary.com/lukasfabik/image/upload/v1573306276/projects/upgrade-hlidac-teploty-pro-chlupateho-hlidace/image25.png)

Drž si cylindr, jedeme dál. 🎩

## Nastav si Blynk

1. Nejdřív si vem do ruky mobil a otevři si [Blynk. Nevíš, co to je nebo jak se to používá? Checkni náš návod](/cs/academy/jak-pripojit-blynk/).

2. V Blynku nahoď všechno potřebné. Na plochu nového projektu nastav nejdřív **Notification**.

![Blynk Step H](https://res.cloudinary.com/lukasfabik/image/upload/v1573306276/projects/upgrade-hlidac-teploty-pro-chlupateho-hlidace/image28.png)

3. Přidej **Gauge**, ukazatel. Klikni na něj a v nastavení přidej stejné rozmezí teploty jako na počítači: **od −15 do 40**.

Nastav si jednotku: **/pin/°C**.

Klikni na nápis **PIN**. Tady nastav **Virtual** a vyber **libovolné číslo**, ale pamatuj si ho. PIN slouží na propojení s nody v Playgroundu.

A graf klidně **pojmenuj**.

U něčeho **váháš? Mrkej na obrázek**.


![Dashboard](https://res.cloudinary.com/lukasfabik/image/upload/v1573306272/projects/upgrade-hlidac-teploty-pro-chlupateho-hlidace/image7.png)


![Blynk](https://res.cloudinary.com/lukasfabik/image/upload/v1573306272/projects/upgrade-hlidac-teploty-pro-chlupateho-hlidace/image12.png)

4. Nakonec přidej **Step H**. Díky němu nastavíš, pod kolik stupňů už by teplota v psí boudě neměla klesnout. To H znamená **horizontální**, naležato. Klidně můžeš použít i Step V, tedy vertikální: nastojato. Záleží na tvém vkusu.

Uvnitř zase nastav rozmezí **od −15 až do 40**.

A zvol **PIN**. Opět to bude Virtual, ale tentokrát musíš vybrat **jiné číslo**.

Nahoře v řádku hlídač optimální teploty **pojmenuj**.



![Blynk Step H](https://res.cloudinary.com/lukasfabik/image/upload/v1573306273/projects/upgrade-hlidac-teploty-pro-chlupateho-hlidace/image17.png)



![Blynk](https://res.cloudinary.com/lukasfabik/image/upload/v1573306272/projects/upgrade-hlidac-teploty-pro-chlupateho-hlidace/image12.png)

5. Celý projekt si **pojmenuj v nastavení projektu** a spusť **tlačítkem Play**. Ještě to ale nic moc dělat nebude, nejdřív musíš vylepšit svůj Node-RED.

## Upgraduj v Node-RED

1. Vrať se k počítači a do Playground nastav další funkce. První z nich bude **notifikace na mobil**. Tu zprovozníš díky třem nodům.

- První node: **node Switch** ze sekce Function.
![Switch](https://res.cloudinary.com/lukasfabik/image/upload/v1573306271/projects/upgrade-hlidac-teploty-pro-chlupateho-hlidace/image10.png)

Uvnitř nodu nastav to, co vidíš níž na obrázku:

a. jako vybranou vlastnost (Property) použij **msg. payload**,

b. zvol, aby se notifikace poslala, když bude teplota rovna nebo nižší −15 °C. Pracuj s proměnnou **flow. optimalTemp** a se značkou menší/rovná se: 
`**<=**`.
![flow](https://res.cloudinary.com/lukasfabik/image/upload/v1573306274/projects/upgrade-hlidac-teploty-pro-chlupateho-hlidace/image20.png)

- Druhý: **node Change** ze stejné sekce. Ten ovlivňuje, jaká zpráva ti na mobil přijde.
![Change](https://res.cloudinary.com/lukasfabik/image/upload/v1573306273/projects/upgrade-hlidac-teploty-pro-chlupateho-hlidace/image16.png)

Uvnitř nodu nastav, co ti telefon zahlásí, až teplota v boudě klesne pod nejnižší teplotu, kterou sis nastavil. Třeba _V boude je moc velka zima_.

**Náš tip**: Zprávu piš bez háčků a čárek, Blynk jim bohužel nerozumí.

- Třetí: **node Notify** ze sekce Blynk ws. Ten zajišťuje propojení s mobilem.
![Notify](https://res.cloudinary.com/lukasfabik/image/upload/v1573306271/projects/upgrade-hlidac-teploty-pro-chlupateho-hlidace/image2.png)

Uvnitř nodu klikni na malou tužku.
![tužka](https://res.cloudinary.com/lukasfabik/image/upload/v1573306276/projects/upgrade-hlidac-teploty-pro-chlupateho-hlidace/image24.png)

Sem zkopíruj **URL** ze spodní části okna a **token**, který ti při zakládání projektu v Blynku přišel na mobil. Váháš? Koukni na obrázek.
![URL](https://res.cloudinary.com/lukasfabik/image/upload/v1573306273/projects/upgrade-hlidac-teploty-pro-chlupateho-hlidace/image9.png)

**Náš tip**: V řádku name si propojení ještě pojmenuj, abys ho později poznal.

## Propoj graf v mobilu s Playgroundem

1. Chce to ještě něco, co říkáš? Správně, **node Write** ze sekce Blynk ws. Ten zajistí, že ti bude fungovat ukazatel v mobilu.
![node Write](https://res.cloudinary.com/lukasfabik/image/upload/v1573306275/projects/upgrade-hlidac-teploty-pro-chlupateho-hlidace/image18.png)

V řádku **Connection** vyber svůj aktuální projekt.

**Na tužku už klikat nemusíš**, token a URL stačí nastavit v každém projektu jednou.

Uvnitř ale ještě nastav **PIN**, který jsi zadával u ukazatele v mobilu. Do nodu ho ale napiš bez počátečního V.
![PIN](https://res.cloudinary.com/lukasfabik/image/upload/v1573306271/projects/upgrade-hlidac-teploty-pro-chlupateho-hlidace/image6.png)

## Hoď tam flow, které hlídá optimální teplotu

1. Poslední třešinka na dortu. Tohle flow se bude skládat ze 4 nodů.

První je **node Write Event** ze sekce Blynk ws. Bacha, Write event, ne jenom Write.
![node Write Event](https://res.cloudinary.com/lukasfabik/image/upload/v1573306271/projects/upgrade-hlidac-teploty-pro-chlupateho-hlidace/image4.png)

Tentokrát ho napoj na **PIN**, který sis v Blynku nastavoval u prvku Step H.
![PIN](https://res.cloudinary.com/lukasfabik/image/upload/v1573306272/projects/upgrade-hlidac-teploty-pro-chlupateho-hlidace/image11.png)

2. Další pán na holení je **node Numeric** ze sekce Dashboard. Zní to jako nějaký padouch z komiksu, že jo? Teď je to ale tvůj kámoš.

Numeric dělá to stejné, co Step H v Blynku. **Zajistí, aby se hodnoty synchronizovaly**.
![node Numeric](https://res.cloudinary.com/lukasfabik/image/upload/v1573306274/projects/upgrade-hlidac-teploty-pro-chlupateho-hlidace/image19.png)

Uvnitř nastav **měrnou jednotku** (°C), **teplotní rozmezí** ( −15 a 40) a **název nodu**.

![nastavení teploty](https://res.cloudinary.com/lukasfabik/image/upload/v1573306276/projects/upgrade-hlidac-teploty-pro-chlupateho-hlidace/image25.png)

3. Vedle toho umísti další **Change node**.
![Change node](https://res.cloudinary.com/lukasfabik/image/upload/v1573306271/projects/upgrade-hlidac-teploty-pro-chlupateho-hlidace/image1.png)

4. V něm nastav, aby se podle změny v nodu Numeric rovnou aktualizovala hodnota minimální teploty (optimalTemp). Mrkej na obrázek.
![Numeric](https://res.cloudinary.com/lukasfabik/image/upload/v1573306275/projects/upgrade-hlidac-teploty-pro-chlupateho-hlidace/image23.png)

5. A pod tenhle node přidej ještě jeden **node Write** ze sekce Blynk ws.
![node Write](https://res.cloudinary.com/lukasfabik/image/upload/v1573306273/projects/upgrade-hlidac-teploty-pro-chlupateho-hlidace/image14.png)

6. Do něj vyplň ten samý **PIN**, který jsi nastavoval u prvku Step H. A také zvol správný projekt na řádku **Connection**.

Tímhle nastavením zase zajistíš zpětnou synchronizaci nastavené teploty, takže změny z Dashboardu uvidíš i v Blynku.
![Connection](https://res.cloudinary.com/lukasfabik/image/upload/v1573306271/projects/upgrade-hlidac-teploty-pro-chlupateho-hlidace/image8.png)

7. Teď už ti to zbývá **propojit podle obrázku** a potvrdit tlačítkem **Deploy**. 🙌
![Deploy](https://res.cloudinary.com/lukasfabik/image/upload/v1573306275/projects/upgrade-hlidac-teploty-pro-chlupateho-hlidace/image21.png)

## A... akce!

1. Krabičku zase nalep na **vnitřní stěnu boudy**.
2. Teplota naměřená v boudě se ti ukazuje nejenom v Playgroundu **na záložce Dashboard**…
![Dashboard](https://res.cloudinary.com/lukasfabik/image/upload/v1573306275/projects/upgrade-hlidac-teploty-pro-chlupateho-hlidace/image26.png)

3. … ale i v **Blynku**. Takže ji můžeš čekovat odkudkoli a kdykoli. 🕵️


![Blynk](https://res.cloudinary.com/lukasfabik/image/upload/v1573306274/projects/upgrade-hlidac-teploty-pro-chlupateho-hlidace/image22.png)

4. Navíc na mobil dostaneš **notifikaci**, kdyby bylo rafíkovi moc hic nebo velká kosa. Šťastný pes = dobrý pes! 🐕
