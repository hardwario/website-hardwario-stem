---
slug: christmas-detector
title: Detektor Vánoc
---
import Image from '@theme/IdealImage';

## Úvod

Ježíšek je ultratajná osoba, ale s IoT ho můžeš načapat přímo při rozdávání dárků. 🎄 Pomůže ti k tomu PIR Module: detektor pohybu

S tímhle projektem se naučíš **detekovat pohyb ve vzdáleném pokoji**. Díky tomu si můžeš ověřit, jestli po českých domácnostech chodí Santa, Ježíšek, Děda Mráz nebo někdo úplně jiný. 😲

Pokud máš Starter Set, budeš k němu potřebovat ještě [PIR Module](https://obchod.hardwario.cz/p/pir-module/). **Kompletní výbavu** najdeš v sadě [Motion Set](https://obchod.hardwario.cz/pir-module/).


## Připrav si krabičku

1. Sestav svůj Set. Na Core Module potřebuješ firmware **bcf-radio-motion-detector**. <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-1.webp')}/> </div> </div>

2. Při správně nainstalovaném firmware uvidíš v Playgroundu na záložce Devices Alias jako **motion-detector**.
<div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-2.webp')}/> </div> </div>

## Nastav si Node-RED

1. Programování odstartuj v Node-RED. Nejdřív v Playgroundu klikni na záložku **Functions**.
2. Na volnou plochu si přetáhni světle fialový node (bublinu) s názvem **MQTT**. Najdeš ho v sekci Input.

<div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-3.webp')}/> </div> </div>

3. Node rozklikni dvojklikem. V řádku **Topic** určíš klíčovou hodnotu. Teď to bude počítadlo pohybů, které jsou zaznamenány:


```
node/motion-detector:0/pir/-/event-count
```

<div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-4.webp')}/> </div> </div>

Potvrď pomocí tlačítka **Done**.

4. Za tenhle node postav node **Switch** ze sekce Function. Díky němu zařízení pozná, že je detektor zapnutý a může hlásit veškerý pohyb.
5. Uvnitř nodu vyplň řádek **Property** jako _flow_. _detectorActive_ a podmínku uvnitř pole uprav na _is true_ (mrkej na obrázek).
**Náš tip**: Přečti si o téhle funkci víc.
<div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-5.webp')}/> </div> </div>

Potvrď tlačítkem **Done**.

6. Teď přijde **node Change** ze stejné sekce Function.
<div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-6.webp')}/> </div> </div>

7. V něm nastavíš zprávu, která se ti ukáže, jakmile dorazí ten vousáč s dárkama (případně miminko). 🎅 👼 Takže třeba: _Jezisek je v obyvaku_.
**Náš tip**: Pokud si chceš nastavit i upozornění do mobilu, nepoužívej čárky ani háčky, Blynk to nemá rád.
<div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-7.webp')}/> </div> </div>

Potvrď tlačítkem **Done**.

8. Nad tímhle flow načni další, díky kterému budeš moct detektor zapínat a vypínat. Bude se skládat ze dvou nodů. První je **node Switch** ze sekce Dashboard.
<div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-8.webp')}/> </div> </div>

9. Uvnitř tohohle nodu uprav **Label** na _Stav detektoru_. Takhle bude označený tvůj projekt v Dashboardu.
<div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-9.webp')}/> </div> </div>

Potvrď tlačítkem **Done**.

10. Za něj postav **node Change** ze sekce Dashboard. Jojo, ten, co už máš o kousek níž. 👍
<div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-10.webp')}/> </div> </div>

11. Uvnitř nastav v poli **Rules** funkci, se kterou zařízení pozná, jestli je tlačítko vypnuté, nebo zapnuté: _flow_. _detectorActive_ (viz obrázek). Pozor na překlepy!
<div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-11.webp')}/> </div> </div>

Potvrď tlačítkem **Done**.

12. Teď všechny nody **pospojuj podle obrázku**, ale ještě nemačkej tlačítko Deploy. Chybí nám poslední node, který přidáme za chviličku. S ním nastavíš upozornění do mobilu. 🤳
![propojeni nodu](https://res.cloudinary.com/lukasfabik/image/upload/v1572976430/projects/detektor-jeziska/image13.png)


## Nastav si upozornění na mobil

1. Vezmi smartphone a zapni appku Blynk.

2. Vytvoř nový projekt, na e-mail se ti pošle token. V Blynku si na plochu postav **Notification** skrze malé plus v kolečku.

<div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-12.webp')}/> </div> </div>

3. Zmáčkni trojúhelníček **Play** v pravém horním rohu a **přesuň se do Playgroundu na počítači**.

4. Tady postav poslední node celého projektu: node Notify ze sekce Blynk ws. Patří hned za flow se switchem, mrkni na obrázek. 👀
<div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-13.webp')}/> </div> </div>

5. Rozklikni ho a klikni na **malou tužtičku** vpravo.
<div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-14.webp')}/> </div> </div>

6. Tady vyplň URL jednoduchým zkopírováním z pole níž. Navíc sem zkopíruj Token, který ti od Blynku přišel na e-mail.
<div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-15.webp')}/> </div> </div>

Potvrď postupně tlačítky **Add** a **Done**.

7. Nakonec už jenom tenhle pěkně zelený node **propoj** s předchozím flow a zmáčkni tlačítko **Deploy**.
<div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-16.webp')}/> </div> </div>

## A... akce!

1. Je čas špehovat toho dárečkového krále. V záložce **Dashboard** v Playgroundu **zapni svůj detektor**. 🕵️
<div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-17.webp')}/> </div> </div>

2. PIR Module vycítí i sebemenší pohyb a zpráva o cizí přítomnosti ti přijde do mobilu raz dva. **Ježíšek nemá šanci**! Honem se běž podívat a načapej ho

![notification](https://res.cloudinary.com/lukasfabik/image/upload/v1572976428/projects/detektor-jeziska/image5.png)

1. Poznámka na okraj: Ježíška si po načapání **udobři**, aby ti doma vůbec nějaké dárky nechal. 😜
