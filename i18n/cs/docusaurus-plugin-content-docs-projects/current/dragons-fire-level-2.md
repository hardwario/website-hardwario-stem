---
slug: dragons-fire-level-2
title: Dračí dech level 2
---
import Image from '@theme/IdealImage';

## Úvod

Troufáš si? Sestav jeden projekt, ve kterém zprovozníš dva typy své oblíbené soutěže naráz a budeš mezi nimi libovolně přepínat! Při párty máte o zábavu postaráno. 🕺

S tímhle projektem se naučíš **ukládat nejvyšší naměřenou hodnotu a nastavit několik typů soutěže v jednom projektu a přepínat mezi nimi**.

Základní verzi tohohle projektu najdeš tady: [IoT párty hra: máš v sobě dračí oheň, nebo mrazivý dech?](/cs/projects/dragons-fire/)

I tentokrát ti postačí základní HARDWARIO sada, tedy [**Start Set**](https://www.hardwario.store/cz/p/start-set/).


## Připrav si Node-RED

1. Start Set sestav a spáruj. Na Core Module potřebuješ zase ten starý známý firmware **bcf-radio-push-button**.

<div class="container">
  <div class="row">
    <Image img={require('./img/push-the-button/push-the-button-playground-devices-connected.webp')} alt="Záložka Devices v Playgroundu se spárovaným Core Module pod aliasem push-button:0"/>
  </div>
</div>

## Změř nejžhavější dech

Sestav si tohle flow, se kterým odhalíš **nejžhavějšího draka** z vaší party. 🐉 Nejvyšší teplota se začne měřit **krátkým stisknutím tlačítka**.

![zmer nejzhavejsi dech](./img/dragons-fire-level-2/image9.png)

**Potřebuješ poradit, jak na to?**

- **MQTT node** ze sekce Input v sobě skrývá Topic s krátkým zmáčknutím tlačítka:

```
node/push-button:0/push-button/-/event-count
```

- javascriptový kód z **node Function** vypadá takhle

```
var hottestTemp = flow.get("hottestTemp");
var pressed = flow.get("pressed") || false;

flow.set("holded", false);flow.set("pressed", !pressed);

if(!flow.get("pressed"))
{
 if(flow.get("contestantTemp") > hottestTemp)
 {
 flow.set("hottestTemp", flow.get("contestantTemp"));
 msg.payload = flow.get("hottestTemp");
 return msg;
 }
}
```

- spodní **node Text** zaznamenává nejvyšší teplotu, nezapomeň do řádku Value format vyplnit hodnotu `{{msg.payload}}°C`

- **Change node** vypisuje nejžhavějšího účastníka, musíš v něm nastavit flow. contestantName

![change node](./img/dragons-fire-level-2/image8.png)

- flow uzavírá obyčejný **Text node**

## Změř nejmrazivější dech

Pod předchozí flow umísti další. S tímhle změříš, kdo z vás dýchá tak studeně, že by mohl **konkurovat Nočnímu králi**. ❄ Nejchladnější teplota se začne měřit až **při dlouhém stisknutí tlačítka**.

**Náš tip**: Vyhni se tvoření podobného flow od nuly a nody jednoduše zkopíruj a přepiš. Kopírování funguje jednoduchým **CRTL+C & CTRL+V**, jde to udělat i s několika nody naráz. Sláva 🙌

![zmer nejmrazivejsi dech](./img/dragons-fire-level-2/image1.png)

**Potřebuješ poradit, jak na to?**

- Topic v **MQTT node** obsahuje dlouhé stisknutí tlačítka:

```
node/push-button:0/push-button/-/hold-count
```

- javascript ve **Function node** vypadá zase takhle:

```
var coldestTemp = flow.get("coldestTemp");
var holded = flow.get("holded") || false;

flow.set("pressed", false);

flow.set("holded", !holded);

if(!flow.get("holded"))
{
if(flow.get("contestantTemp") < coldestTemp)
 {
  flow.set("coldestTemp", flow.get("contestantTemp"));

  msg.payload = flow.get("coldestTemp");
  return msg;
 }
}
```

- **oba Text nody jsou stejné jako v předchozím flow**, jen je změň z nejžhavějšího na nejchladnější

- **Change node je stejný jako v předchozím flow**

❗ **Náš tip**: Něco nefunguje, jak by mělo? Přidej na plochu Debug node, který ti pomůže odstranit případné brouky. 🐞

## Nastav průběžná měření

Vytvoř nový flow, který umísti pod oba předchozí. S tímhle flow změříš každý pokus, a navíc si tabulka zapamatuje jména účastníků.

![prubezna mereni flow](./img/dragons-fire-level-2/image15.png)

**Potřebuješ poradit, jak na to?**

- Topic v **MQTT node** obsahuje měření teploty:

```
node/push-button:0/thermometer/0:1/temperature
```

- javascript ve **Function node** vypadá takhle:

```
var temp = msg.payload;

if(flow.get("pressed"))
{
 if(flow.get("contestantTemp") < temp)
 {
  flow.set("contestantTemp", temp);
  return msg;
  }
}
else if(flow.get("holded"))
{
  if(flow.get("contestantTemp") > temp)
  {
   flow.set("contestantTemp", temp);
   return msg;
 }
}
```

- tmavě modrý **Text node** s teplotou, kterou krabička naměří aktuálnímu soutěžícímu, obsahuje stupně Celsia: `{{msg.payload}}°C`

- **Text input node** (ten světle modrý) má v řádku Delay nulu (jméno soutěžícího pak musíš v tabulce potvrdit Enterem)

- **Change node** má dvě pravidla. Jedno nechává prázdnou hodnotu, dokud nezaregistruje první teplotu. A druhé nastaví jako průměrnou teplotu 30 °C, to znamená, že teplejší výsledky budou nad 30 °C, chladnější zase pod.

![prubezne mereni](./img/dragons-fire-level-2/image3.png)

- **Function node** s javascriptem pro ukládání jmen vypadá jednoduše takto

```
flow.set("contestantName", msg.payload);
return msg;
```

- a poslední **Text node** je prostě text node, který oznamuje aktuálního soutěžícího. Voilà!

## Nastav si typ soutěže

Ízy špízy? Tak tam přihoď jeden **timestamp flow**, se kterým změníš typ hry! Krátké zmáčknutí tlačítka změří nejžhavější dech a dlouhé podržení tlačítka změří nejmrazivější dech. Krutý 👍

![timestamp flow](./img/dragons-fire-level-2/image4.png)

### Potřebuješ poradit, jak na to?

- první node se jmenuje **Inject** a najdeš ho v sekci Input. Ten každou sekundu kontroluje, která soutěž probíhá. Podle dlouhého nebo krátkého zmáčknutí tlačítka zjistí, jestli se zrovna soutěží o nejchladnější nebo nejteplejší dech, a takovou soutěž pak vypíše.

![inject](./img/dragons-fire-level-2/image12.png)

Nastav do něj opakování po jedné sekundě.

![nastaveni intervalu](./img/dragons-fire-level-2/image5.png)

- **vrchní Switch node** reaguje na krátké zmáčknutí tlačítka a obsahuje _is true_

![switch node](./img/dragons-fire-level-2/image7.png)

- **spodní Switch node** reaguje na podržení tlačítka a taky obsahuje _is true_

![spodni switch node](./img/dragons-fire-level-2/image2.png)

- všechny tři Change nody obsahují zprávu: horní obsahuje zprávu, která oznamuje **soutěž o nejžhavější dech**

![soutez o nejzhavejsi dech](./img/dragons-fire-level-2/image13.png)

prostřední zprávu, že **zrovna žádná soutěž neběží**

![zprava soutez nebezi](./img/dragons-fire-level-2/image14.png)

a spodní oznamuje **soutěž o nejmrazivější dech**

![soutez o nejmrazivejsi dech](./img/dragons-fire-level-2/image10.png)

- no a závěrečný **Text node** oznamuje typ soutěže

## Nastav výchozí hodnoty

Drž si klobouk, frčíme do finále. Poslední flow nastaví **výchozí hodnoty**: 30 °C jako optimální teplotu, hoooodně chladnou nejnižší teplotu a hoooodně horkou nejvyšší teplotu. S těmito teplotami se pak skutečně naměřené teploty porovnávají.

![timestamp nastaveni hodnot](./img/dragons-fire-level-2/image17.png)


### Potřebuješ poradit, jak na to?

- **Inject node** obsahuje zaškrtnuté políčko, se kterým se nastaví výchozí hodnoty jen malou chvilku po stisknutí tlačítka Deploy.

![inject node](./img/dragons-fire-level-2/image11.png)

-  a **node Function** obsahuje javascript, který nastavuje výchozí hodnoty.

```
flow.set("contestantTemp", 30);
flow.set("hottestTemp", 0);
flow.set("coldestTemp", 100);
return msg;
```

## Podívej se na tu nádheru

Takhle sexy teď vypadá tvoje plocha. Vychutnej si to, jako když jsi poprvé viděl moře… 🌊 Ještě chvilku… A ještě chvilku… A pak už jenom zmáčkni starýho dobrýho kamaráda **Deploy** vpravo nahoře.

![Deploy](./img/dragons-fire-level-2/image18.png)

## Jdeme soutěžit!

1. Jak už sis asi všiml, krabička reaguje na dva typy zmáčknutí: při obyčejném krátkém se spustí **soutěž o nejteplejší dech**, při dlouhém podržení tlačítka se spustí **soutěž o nejmrazivější dech**.


### Jak soutěžit?

- Otevři záložku **Dashboard** v Playgroundu.
- Nejdřív napiš jméno soutěžícího,
- potvrď ho pomocí **Enter**,
- a potom **dlouhým nebo krátkým stisknutím tlačítka** zvol typ soutěže. 👇
- Až soutěžící zkusí, co umí, **stejně dlouhým stisknutím tlačítka** aktuální soutěž ukončíš a uložíš.
- U dalšího soutěžícího postupujte stejně, jedno po druhém.

![soutezici](./img/dragons-fire-level-2/image16.png)

2. I u tohohle levelu obtížností platí, že **jakákoli pomoc je povolena**. Vyzkoušej, co ti nejvíc rozžhaví dech, a co ho naopak vymrazí. Držíme palce, draku! 💪
