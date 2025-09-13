---
slug: bottle-party-game
title: Hra lahev
---
import Image from '@theme/IdealImage';

## Úvod

Proč hrát Lahev s lahví, když vám stačí chytrá krabička?
Nastavte si Sadu Start tak, aby náhodně vybrala člena skupiny – ať už na párty, při losování výherce nebo když se rozhoduje, kdo uklidí.

V tomto projektu se naučíš, jak nastavit krabičku tak, aby **náhodně vybrala člena** tvé skupiny. 😱

Budeš potřebovat **krabičku s tlačítkem** a **USB dongle**. Stačí ti základní sada od HARDWARIO, tedy [Sada Start](https://www.hardwario.store/cz/p/start-set).

## Spusť to v Node-RED

1. Sestav Start Set a spáruj ho.
2. V Playgroundu klikni na záložku **Functions**, kde se nachází programovací plocha.
3. Pojďme to rozjet. 🤞 Umísti na plochu **MQTT** uzel ze sekce Input.

Dvojklikem otevři uzel a nastav klíčovou funkci – stisknutí tlačítka.

**Zkopíruj následující řádek do pole Topic**:

```
node/x-axis-detector:0/accelerometer/-/event-count
```

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-1.webp')}/> </div> </div>

Potvrď to tlačítkem **Done**.

## Nastav náhodnou volbu

1. Náhodnou volbu můžeš naprogramovat pomocí jednoduchého JavaScriptu. Ale neboj, pomůžeme ti. Nejprve umísti vedle MQTT uzlu **Function uzel** ze sekce Function.

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-2.webp')}/> </div> </div>

2. Dvojklikem otevři uzel. Do řádku **Name** zadej název uzlu (*např. Náhodná volba*). Do pole **Function** zkopíruj tento kód přesně tak, jak je uveden na obrázku.
Tento kód zajistí, že bude náhodně vybrán jeden z účastníků.

```
var rand = Math.round( Math.random() * (flow.get("numberOfContestants") - 1));
msg.payload = flow.get("contestantArr")[rand];
return msg;
```

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-3.webp')}/> </div> </div>

Potvrď to tlačítkem **Done**.

3. Přidej vedle uzlu Náhodná volba ještě jeden uzel – **Delay** (najdeš ho také v sekci Function). Díky tomuto uzlu se odpověď trochu zpozdí a vytvoří se napínavá atmosféra. Baf! 😲

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-4.webp')}/> </div> </div>

4. Uvnitř uzlu nastav, aby bylo zpoždění náhodné – klikni na **random delay** a zvol čas v rozmezí **2 až 4 sekundy**. To bude tak akorát na udržení napětí ve vzduchu.

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-5.webp')}/> </div> </div>

Potvrď to tlačítkem **Done**.

5. Nad všechny tyto uzly umísti uzel, který nastaví zprávu zobrazující se při výběru. Použij k tomu uzel **Change** ze stejné sekce.

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-6.webp')}/> </div> </div>

6. Otevři uzel dvojklikem a napiš svou zprávu – například: *Probíhá výběr…*

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-7.webp')}/> </div> </div>

## Nastav účastníky

1. Tvoje loterie se neobejde bez tlačítka pro resetování tabulky – díky němu můžeš pokračovat ve hře. Pod uzel **MQTT** umísti **Button node**, tentokrát ze sekce **Dashboard**.

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-8.webp')}/> </div> </div>

2. Dvojklikem otevři uzel a do řádku **Label** napiš název *Reset*.

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-9.webp')}/> </div> </div>

Potvrď to tlačítkem **Done**.

3. Pokračujeme dál! Teď nastav všechny kámoše, kteří se budou hry účastnit – zatím anonymně. Přidej je na plochu pomocí uzlu **Text input** ze sekce **Dashboard**. Přidej tolik uzlů, kolik vás je.

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-10.webp')}/> </div> </div>

4. V každém uzlu proveď následující nastavení:
   * Do pole **Label** napiš Účastník 1, Účastník 2, atd. podle počtu hráčů.
   * Do pole **Delay** zadej hodnotu 0.
   * **Odškrtni** políčko hned pod ním – tím zajistíš, že se pole skutečně vymažou po stisknutí resetu.

Opakuj tohle nastavení pro každý uzel s účastníkem.

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-11.webp')}/> </div> </div>

Potvrď to tlačítkem **Done**.

5. Umísti další JavaScriptový kód vedle účastníků. Tento kód přiřadí jména účastníků na odpovídající místa. Opět jej vlož jako uzel typu **Function**.
6. Dvojitým kliknutím na uzel otevři jeho nastavení. Do řádku **Label** napiš název uzlu a do pole **Function** zkopíruj tento kód:

```
var contestants = flow.get("numberOfContestants") || 0;
var contestantArray = flow.get("contestantArr") || [msg.payload];
contestants++;
flow.set("numberOfContestants", contestants);

if(contestants != 1)
{
    contestantArray.push(msg.payload);
}

flow.set("contestantArr", contestantArray);
```

Ujisti se, že výstup je skutečně jen jeden. ❗

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-12.webp')}/> </div> </div>

Potvrď kliknutím na tlačítko **Done**.

7. Neboj se, už jsme skoro u konce. 🙌 Umísti na plochu uzel **Change**. Ten zajistí, že se při resetování vše vrátí do původního stavu. 🖖

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-13.webp')}/> </div> </div>

8. V nastavení tohoto uzlu vyplň dvě **Pravidla** tak, jak je vidět na obrázku. První bude **Delete | flow | ContestantArr**. Pro přidání dalšího pravidla klikni na malé tlačítko **+ Add** pod polem. V tomto druhém pravidle nastav **Delete | flow | numberOfContestants**.

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-14.webp')}/> </div> </div>

Potvrď kliknutím na tlačítko **Done**.

## Pouze jeden může být vybrán.

1. Umístěte na plochu poslední uzel. Ten oznámí, kdo byl vybrán. 🙏 Najdete ho jednoduše jako uzel **Text** v sekci Dashboard.

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-15.webp')}/> </div> </div>

2. V řádku **Label** uvnitř uzlu nastavte, jak bude zpráva vypadat při náhodném výběru jednoho účastníka.

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-16.webp')}/> </div> </div>

Potvrď kliknutím na tlačítko **Done**.

3. A poté **všechno krásně propojte**. V horní části spojte všechny uzly, které zajišťují losování, ve spodní části spojte ty, které tvoří losovací tabulku.

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-17.webp')}/> </div> </div>

4. Nezapomeňte kliknout na tlačítko **Deploy** v pravém horním rohu! 🚨

## Ať zábava začne!

1. A teď hurá do akce! V záložce **Dashboard** zadej jména všech účastníků. Pokud jsi v uzlech pro jednotlivé účastníky nenastavil automatické obnovení, nezapomeň po každém jménu stisknout klávesu Enter. 👈

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-18.webp')}/> </div> </div>

2. **Koho si osud vybral**? A za co? To už je jen na tobě. 😈
   
Můžeš například:

* vylosovat, kdo komu dá pusu (woohoo),
* vytáhnout nejkratší sirku pro toho, kdo vynáší odpadky,
* určit výherce soutěže,
* přidělit bláznivé úkoly vybrané náhodně,
* a cokoliv dalšího, co tě napadne!
