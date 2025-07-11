---
slug: bottle-party-game
title: Hra lahev
---

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

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image18.png "MQTT topic")

Potvrď to tlačítkem **Done**.

## Nastav náhodnou volbu

1. Náhodnou volbu můžeš naprogramovat pomocí jednoduchého JavaScriptu. Ale neboj, pomůžeme ti. Nejprve umísti vedle MQTT uzlu **Function uzel** ze sekce Function.

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image5.png "Node-RED function node")

2. Dvojklikem otevři uzel. Do řádku **Name** zadej název uzlu (*např. Náhodná volba*). Do pole **Function** zkopíruj tento kód přesně tak, jak je uveden na obrázku.
Tento kód zajistí, že bude náhodně vybrán jeden z účastníků.


```
var rand = Math.round( Math.random() * (flow.get("numberOfContestants") - 1));
msg.payload = flow.get("contestantArr")[rand];
return msg;
```

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image9.png "Node-RED Random")

Potvrď to tlačítkem **Done**.

3. Přidej vedle uzlu Náhodná volba ještě jeden uzel – **Delay** (najdeš ho také v sekci Function). Díky tomuto uzlu se odpověď trochu zpozdí a vytvoří se napínavá atmosféra. Baf! 😲

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image14.png "Node-RED delay")

4. Uvnitř uzlu nastav, aby bylo zpoždění náhodné – klikni na **random delay** a zvol čas v rozmezí **2 až 4 sekundy**. To bude tak akorát na udržení napětí ve vzduchu.

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image3.png "Node-RED random delay")

Potvrď to tlačítkem **Done**.

5. Nad všechny tyto uzly umísti uzel, který nastaví zprávu zobrazující se při výběru. Použij k tomu uzel **Change** ze stejné sekce.

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image1.png "Node-RED change node")

6. Otevři uzel dvojklikem a napiš svou zprávu – například: *Probíhá výběr…*

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image4.png "Node-RED - HARDWARIO playground")

## Nastav účastníky

1. Tvoje loterie se neobejde bez tlačítka pro resetování tabulky – díky němu můžeš pokračovat ve hře. Pod uzel **MQTT** umísti **Button node**, tentokrát ze sekce **Dashboard**.

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image17.png "Node-RED dashboard button")

2. Dvojklikem otevři uzel a do řádku **Label** napiš název *Reset*.

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image13.png "HARDWARIO Playground dashboard button")

Potvrď to tlačítkem **Done**.

3. Pokračujeme dál! Teď nastav všechny kámoše, kteří se budou hry účastnit – zatím anonymně. Přidej je na plochu pomocí uzlu **Text input** ze sekce **Dashboard**. Přidej tolik uzlů, kolik vás je.

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image10.png "Node-RED text input")

4. V každém uzlu proveď následující nastavení:
   *	Do pole **Label** napiš Účastník 1, Účastník 2, atd. podle počtu hráčů.
	*	Do pole **Delay** zadej hodnotu 0.
	*	**Odškrtni** políčko hned pod ním – tím zajistíš, že se pole skutečně vymažou po stisknutí resetu.

Opakuj tohle nastavení pro každý uzel s účastníkem.

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image6.png "HARDWARIO Playground function")

Potvrď to tlačítkem **Done**.

5. Umísti další JavaScriptový kód vedle účastníků. Tento kód přiřadí jména účastníků na odpovídající místa. Opět jej vlož jako uzel typu **Function**.

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image19.png "HARDWARIO Playground function")

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

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image7.png "Node-RED function node")

Potvrď kliknutím na tlačítko **Done**.

7. Neboj se, už jsme skoro u konce. 🙌 Umísti na plochu uzel **Change**. Ten zajistí, že se při resetování vše vrátí do původního stavu. 🖖

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image11.png "Node-RED change payload")

8. V nastavení tohoto uzlu vyplň dvě **Pravidla** tak, jak je vidět na obrázku. První bude **Delete | flow | ContestantArr**. Pro přidání dalšího pravidla klikni na malé tlačítko **+ Add** pod polem. V tomto druhém pravidle nastav **Delete | flow | numberOfContestants**.

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image2.png "Node-RED rules")

Potvrď kliknutím na tlačítko **Done**.

## Pouze jeden může být vybrán.

1. Umístěte na plochu poslední uzel. Ten oznámí, kdo byl vybrán. 🙏 Najdete ho jednoduše jako uzel **Text** v sekci Dashboard.

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image16.png "Node-RED dashboard text")

2. V řádku **Label** uvnitř uzlu nastavte, jak bude zpráva vypadat při náhodném výběru jednoho účastníka.

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image12.png "Text label in dashboard Node-RED")

Potvrď kliknutím na tlačítko **Done**.

3. A poté **všechno krásně propojte**. V horní části spojte všechny uzly, které zajišťují losování, ve spodní části spojte ty, které tvoří losovací tabulku.

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image15.png "HARDWARIO Playground connect nodes in Node-RED")

4. Nezapomeňte kliknout na tlačítko **Deploy** v pravém horním rohu! 🚨

## Ať zábava začne!

1. A teď hurá do akce! V záložce **Dashboard** zadej jména všech účastníků. Pokud jsi v uzlech pro jednotlivé účastníky nenastavil automatické obnovení, nezapomeň po každém jménu stisknout klávesu Enter. 👈

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image8.png "show dashboard Node-RED / HARDWARIO Playground")

2. **Koho si osud vybral**? A za co? To už je jen na tobě. 😈
   
Můžeš například:

* vylosovat, kdo komu dá pusu (woohoo),
* vytáhnout nejkratší sirku pro toho, kdo vynáší odpadky,
* určit výherce soutěže,
* přidělit bláznivé úkoly vybrané náhodně,
* a cokoliv dalšího, co tě napadne!
