---
slug: dragons-fire
title: Dračí dech
---

## Úvod

Bav se s kámoši díky IoT. Kdo z vás bude mít nejžhavější, nebo nejchladnější dech? Je na tobě, čím si k vítězství pomůžeš. Smí se všechno. 😱

S tímhle projektem se naučíš **měřit teplotu s IoT**. Postačí ti základní HARDWARIO sada, tedy [**Start Set**](https://obchod.hardwario.cz/p/start-set/).


## Připrav si krabičku

1. Start Set sestav a spáruj: Na Core Module potřebuješ firmware **radio push button**.

2. Otevři v Playgroundu záložku **Messages**. Tady uvidíš změny teploty. Teplota se měří automaticky, a to buď pravidelně po 15 sekundách, nebo když dojde k větší změně. A právě toho využijeme.


![messages](https://res.cloudinary.com/lukasfabik/image/upload/v1566154531/projects/dragon-fire/image4.png)

## Nastav si Node-RED

1. Messages jsou pro tebe možná málo. ✌️ Nastav si rovnou svůj vlastní barevný ukazatel teploty, a to pomocí bublin v Node-RED. Nejdřív v Playgroundu klikni na záložku **Functions**.

2. Na čistou plochu polož světle fialový node (bublinu) s názvem **MQTT**. Najdeš ho v sekci Input.

3. Node rozklikni dvojklikem. V řádku **Topic** určíš, co chceš, aby barevný ukazatel zobrazoval. Teď to bude teplota. Proto do řádku zkopíruj zprávu s teplotou ze záložky Messages (bez čísla). Nebo klidně použij tuhle:
```
node/push-button:0/thermometer/0:1/temperature
```

![MQTT](https://res.cloudinary.com/lukasfabik/image/upload/v1566154530/projects/dragon-fire/image3.png)

Potvrď tlačítkem **Done**.

4. Vedle nodu postav druhý, tentokrát modrý s názvem **Gauge**. Najdeš ho v sekci Dashboard. Tímhle nodem určíš, jak bude naměřená teplota znázorněná na obrazovce: jako ukazatel. Oba nody propoj.

![Gauce chart](https://res.cloudinary.com/lukasfabik/image/upload/v1566154530/projects/dragon-fire/image1.png)

5. Na node Gauge dvakrát klikni. V řádku **Type** si nastavíš, jak se bude graf zobrazovat (nejlepší bude Gauge). V řádku **Range** upravíš minimální a maximální hodnotu ukazatele (zkus 0 a 50).

![Node-RED](https://res.cloudinary.com/lukasfabik/image/upload/v1566154530/projects/dragon-fire/image2.png)

Potvrď tlačítkem **Done**.
**Náš tip:** V záložce **Label** si svůj ukazatel libovolně přejmenuj.

6. Teď můžeš zmáčknout červené tlačítko **Deploy** v pravém horním rohu obrazovky. 🚨 Tím celý flow aktivuješ.
❗ **Pozor**: Při každé změně v nodech musíš Deploy mačkat znovu.

7. Překlikni se do jiné záložky, do **Dashboardu**. Tvůj ukazatel žije právě tady. 😲

![Node-RED](https://res.cloudinary.com/lukasfabik/image/upload/v1566154530/projects/dragon-fire/image5.png)

## Rozjeď hru s kámoši

1. **Sedněte si s kamarády ke stolu.**

2. Nejdřív změřte, kdo v sobě skrývá **dračí oheň**. 🔥 **Jeden po druhém na krabičku dýchejte**. Pomůcky dovoleny, zkuste si dech zahřát s tím, co máte po ruce. Go wild a zkoušej všechno možné i nemožné. 🙌
❓ **Vyzkoušej:** Co dech zahřeje víc – čaj, nebo pálivé papričky?

3. Po skončení prvního kola následuje **mrazivé kolo**. ❄ Kdo zvládne svůj dech ochladit tak, aby ho měl **nejchladnější**?
❓ **Vyzkoušej:** Ochladí dech víc kostka ledu, nebo chladivé žvýkačky?

4. **Rekordy zapište** a při příští hře je zkuste překonat.
