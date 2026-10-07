---
slug: kennel-temperature-monitor
title: Monitor teploty psí boudy
---
## Úvod


Zima, že by ani psa nevyhnal? Hlídejte teplotní pohodlí svého nejlepšího přítele a sledujte teplotu v jeho boudě. 🐶


S tímto projektem se naučíte **měřit teplotu pomocí IoT a zobrazit ji v grafu**. Stačí vám základní sada HARDWARIO, tedy [**Sada Start**](https://www.hardwario.store/cz/p/start-set/). Pes se vám možná odvděčí tím, že nadělá méně nepořádku. Nebo tak nějak. 🐩


## Připravte si krabičku

1. Sestavte a spárujte Sadu Start. Do modulu Core Module potřebujete firmware **twr-radio-push-button**. Pokud nevíte, jak si firmware stáhnout nebo co to je, [najdete to tady](https://docs.hardwario.com/tower/desktop-programming/firmware-flashing/).

2. Změny teploty uvidíte v Playgroundu v záložce **Messages**.

![Záložka Messages v Playgroundu se zprávami o teplotě](./img/kennel-temperature-monitor/image5.png)

## Nastavte si Node-RED

1. Programovat začnete v Node-RED. Nejdřív v Playgroundu klikněte na záložku **Functions**.

2. Na prázdnou plochu přetáhněte světle fialový uzel (bublinu) s názvem **mqtt in**. Najdete ho v sekci network.

3. Uzel otevřete dvojklikem. V řádku **Topic** určíte, co se bude v grafu zobrazovat. Teď to bude teplota. Do řádku proto zkopírujte zprávu s teplotou ze záložky Messages (bez čísla). Nebo klidně použijte tuto:

```
node/push-button:0/thermometer/0:1/temperature
```

![Uzel MQTT s topicem teploty](./img/kennel-temperature-monitor/image1.png)

Potvrďte tlačítkem **Done**.

4. Vedle něj umístěte druhý, světle modrý uzel s názvem **Chart** (graf). Najdete ho v sekci Dashboard. Tímto uzlem určíte, jak se naměřená teplota zobrazí na obrazovce. Oba uzly propojte. 👌

![Uzel Chart pro dashboard v Node-RED](./img/kennel-temperature-monitor/image4.png)

5. Na uzel Chart dvakrát klikněte. V řádku **X-axis** nastavíte, za jak dlouhé období bude graf teplotu ukazovat. Délku zvolte podle sebe.
V řádku **Label** graf libovolně pojmenujte.

![Nastavení uzlu Chart](./img/kennel-temperature-monitor/image3.png)

Potvrďte tlačítkem **Done**.


6. Teď klikněte na červené tlačítko **Deploy** v pravém horním rohu obrazovky. 🚨 Tím celý flow spustíte.

❗ **Pozor:** Po každé změně v uzlech musíte na Deploy kliknout znovu.

7. Přepněte se na záložku **Dashboard**. Tady je váš graf. 👏
![Graf teploty v psí boudě](./img/kennel-temperature-monitor/image2.png)

## A akce!

1. Krabičku přilepte kobercovou páskou **dovnitř boudy na stěnu**. 🏡

2. Sledujte, **jak se mění teplota**, když je pes venku a když je uvnitř. Pes totiž boudu svým tělem trochu vyhřeje. 🐕
**Náš tip:** Až teploty klesnou, vystelte boudu dekou nebo slámou.

3. Když je venku pod −15 °C, na nic nečekejte a **pusťte psa dovnitř domu**, aspoň do předsíně. ❄

4. Uvidíte, že **pes bude spokojený**! 👌
