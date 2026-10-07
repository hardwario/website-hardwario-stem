---
slug: bottle-party-game
title: Losovací párty hra
---
import Image from '@theme/IdealImage';

## Úvod

Proč hrát flašku s opravdovou lahví, když vám stačí chytrá krabička?
Nastavte si Start Set tak, aby náhodně vybral jednoho člena skupiny, ať už na párty, při losování výherce, nebo když se rozhoduje, kdo bude uklízet.

V tomto projektu se naučíte nastavit krabičku tak, aby **náhodně vybrala jednoho člena** vaší skupiny. 😱

Budete potřebovat **krabičku s tlačítkem** a **USB dongle**. Stačí vám tedy základní sada HARDWARIO [Start Set](https://www.hardwario.store/cz/p/start-set).

## Rozjeďte to v Node-RED

1. Sestavte Start Set a spárujte ho.
2. V Playgroundu klikněte na záložku **Functions**, kde najdete programovací plochu.
3. Jdeme na to. 🤞 Umístěte na plochu uzel **MQTT** ze sekce Input.

Dvojklikem uzel otevřete a nastavte klíčovou funkci, tedy stisknutí tlačítka.

**Do pole Topic zkopírujte tento řádek**:

```
node/x-axis-detector:0/accelerometer/-/event-count
```

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-1.webp')} alt="Dialog Edit mqtt in node se zvýrazněným polem Topic vyplněným tématem event-count akcelerometru"/> </div> </div>

Potvrďte tlačítkem **Done**.

## Nastavte náhodný výběr

1. Náhodný výběr naprogramujete jednoduchým JavaScriptem. Nebojte se, pomůžeme vám. Nejdřív umístěte vedle uzlu MQTT uzel **Function** ze sekce Function.

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-2.webp')} alt="Uzel Function zvýrazněný v paletě a umístěný vedle uzlu MQTT akcelerometru"/> </div> </div>

2. Dvojklikem uzel otevřete. Do řádku **Name** zadejte jeho název (*třeba Náhodná volba*). Do pole **Function** zkopírujte tento kód přesně tak, jak ho vidíte na obrázku.
Kód vylosuje jednoho z účastníků.

```
var rand = Math.round( Math.random() * (flow.get("numberOfContestants") - 1));
msg.payload = flow.get("contestantArr")[rand];
return msg;
```

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-3.webp')} alt="Dialog Edit function node pojmenovaný Random pick s JavaScriptem náhodného losování na záložce On Message"/> </div> </div>

Potvrďte tlačítkem **Done**.

3. Vedle uzlu Náhodná volba přidejte další uzel, **Delay** (najdete ho také v sekci Function). Odpověď se díky němu trochu zpozdí a napětí poroste. Baf! 😲

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-4.webp')} alt="Uzel Delay zvýrazněný v paletě, uzel delay 5s je umístěný za funkcí Random pick"/> </div> </div>

4. Aby byl výběr ještě náhodnější, nastavte v uzlu náhodné zpoždění: klikněte na **random delay** a zvolte čas v rozmezí **2 až 4 sekundy**. To je tak akorát, aby napětí nepolevilo.

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-5.webp')} alt="Dialog Edit delay node nastavený na náhodné zpoždění mezi 2 a 4 sekundami"/> </div> </div>

Potvrďte tlačítkem **Done**.

5. Nad všechny tyto uzly umístěte uzel, který nastaví zprávu zobrazenou během losování. Použijte k tomu uzel **Change** ze stejné sekce.

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-6.webp')} alt="Uzel Change zvýrazněný v paletě, uzel set msg.payload je umístěný nad losovacím flow"/> </div> </div>

6. Otevřete uzel dvojklikem a napište svou zprávu, například: *Probíhá výběr…*

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-7.webp')} alt="Dialog Edit change node nastavující msg.payload na text Picking..."/> </div> </div>

## Nastavte účastníky

1. Vaše loterie se neobejde bez tlačítka, které vynuluje tabulku, abyste mohli hrát dál. Pod uzel **MQTT** umístěte uzel **Button**, tentokrát ze sekce **Dashboard**.

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-8.webp')} alt="Uzel button zvýrazněný v paletě dashboard a umístěný pod uzlem MQTT"/> </div> </div>

2. Dvojklikem uzel otevřete a do řádku **Label** napište *Reset*.

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-9.webp')} alt="Dialog Edit button node s polem Label nastaveným na Reset"/> </div> </div>

Potvrďte tlačítkem **Done**.

3. Jedeme dál! Teď nastavte všechny kamarády, kteří budou hrát, zatím anonymně. Přidejte je na plochu jako uzly **Text input** ze sekce **Dashboard**, tolik uzlů, kolik vás je.

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-10.webp')} alt="Uzel text input zvýrazněný v paletě a pět uzlů text input umístěných na ploše"/> </div> </div>

4. V každém uzlu nastavte:
   * Do pole **Label** napište Účastník 1, Účastník 2 a tak dál podle počtu hráčů.
   * Do pole **Delay** zadejte hodnotu 0.
   * **Zrušte zaškrtnutí** políčka hned pod ním, aby se pole po stisknutí tlačítka Reset opravdu vymazala.

Totéž nastavte u každého uzlu s účastníkem.

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-11.webp')} alt="Dialog Edit text input node s Label Participant 2, Delay 0 a odškrtnutým polem pro průchod zpráv"/> </div> </div>

Potvrďte tlačítkem **Done**.

5. Vedle účastníků umístěte další kód v JavaScriptu. Přiřadí jména účastníků na správná místa. Opět ho vložíte jako uzel **Function**.
6. Dvojklikem na uzel otevřete jeho nastavení. Do řádku **Name** napište název uzlu a do pole **Function** zkopírujte tento kód:

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

Zkontrolujte, že má uzel opravdu jen jeden výstup. ❗

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-12.webp')} alt="Dialog Edit function node pojmenovaný Fate, choose one of them s kódem ukládajícím jednotlivé účastníky"/> </div> </div>

Potvrďte tlačítkem **Done**.

7. Nebojte, už jsme skoro u konce. 🙌 Umístěte na plochu uzel **Change**. Postará se o to, aby se při resetu vše vrátilo do původního stavu. 🖖

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-13.webp')} alt="Druhý uzel set msg.payload zvýrazněný pod uzly účastníků"/> </div> </div>

8. V nastavení tohoto uzlu vyplňte dvě pravidla (**Rules**) podle obrázku. První bude **Delete | flow | ContestantArr**. Další pravidlo přidáte malým tlačítkem **+ Add** pod polem. V tomto druhém pravidle nastavte **Delete | flow | numberOfContestants**.

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-14.webp')} alt="Dialog Edit change node se dvěma pravidly Delete, která mažou contestantArr a numberOfContestants"/> </div> </div>

Potvrďte tlačítkem **Done**.

## Vybrán může být jen jeden

1. Umístěte na plochu poslední uzel. Oznámí, kdo byl vybrán. 🙏 Najdete ho jednoduše jako uzel **Text** v sekci Dashboard.

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-15.webp')} alt="Uzel text zvýrazněný v paletě dashboard a umístěný na konec flow"/> </div> </div>

2. V řádku **Label** uvnitř uzlu nastavte, jak bude vypadat zpráva o náhodně vybraném účastníkovi.

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-16.webp')} alt="Dialog Edit text node s polem Label nastaveným na And fate chooses..."/> </div> </div>

Potvrďte tlačítkem **Done**.

3. Pak **všechno pěkně propojte**. V horní části spojte uzly, které se starají o losování, ve spodní části ty, které tvoří losovací tabulku.

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-17.webp')} alt="Hotový flow s propojenými uzly losování a účastníků a zvýrazněným tlačítkem Deploy"/> </div> </div>

4. Nezapomeňte kliknout na tlačítko **Deploy** v pravém horním rohu! 🚨

## Ať zábava začne!

1. A teď hurá do akce! Na záložce **Dashboard** zadejte jména všech účastníků. Pokud jste v uzlech pro jednotlivé účastníky nenastavili automatické obnovení, nezapomeňte po každém jménu stisknout klávesu Enter. 👈

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-18.webp')} alt="Dashboard s tlačítkem Reset, pěti poli se jmény účastníků a vylosovaným jménem dole"/> </div> </div>

2. **Koho si osud vybral**? A k čemu? To už je jen na vás. 😈

Můžete například:

* vylosovat, kdo komu dá pusu (juchů),
* vytáhnout nejkratší sirku pro toho, kdo vynese odpadky,
* určit výherce soutěže,
* rozdělit náhodně bláznivé úkoly,
* a cokoli dalšího, co vás napadne!
