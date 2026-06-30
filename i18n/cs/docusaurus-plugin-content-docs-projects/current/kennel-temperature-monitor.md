---
slug: kennel-temperature-monitor
title: Monitor teploty psí boudy
---
## Úvod


Zima, že bys ani psa nevyhnal? Hlídej teplotní komfort svého nejlepšího kámoše a sleduj teplotu v jeho boudě. 🐶


S tímhle projektem se naučíš **měřit teplotu s IoT a zobrazit ji na grafu**. Postačí ti základní HARDWARIO sada, tedy [**Start Set**](https://www.hardwario.store/p/start-set/). Uvidíš, že ti hafan poděkuje. Třeba míň bobky. Nebo tak něco. 🐩


## Připrav si krabičku

1. Start Set sestav a spáruj. Na Core Module potřebuješ firmware **radio push button**. Pokud nevíš, jak si firmware stáhnout nebo co to je, [zjistíš to tady](https://docs.hardwario.com/tower/firmware-development/hardwario-extension-tutorial/#flash-firmware)

2. Změny teploty uvidíš v Playgroundu v záložce **Messages**.

![MQTT messages](https://res.cloudinary.com/lukasfabik/image/upload/v1566156149/projects/kennel-temperature-monitor/image5.png)

## Nastav si Node-RED

1. Programování začni v Node-RED. Nejdřív v Playgroundu klikni na záložku **Functions**.

2. Na čistou plochu přetáhni světle fialový node (bublinu) s názvem **MQTT**. Najdeš ho v sekci Input.

3. Node rozklikni dvojklikem. V řádku **Topic** určíš, co chceš, aby barevný ukazatel zobrazoval. Teď to bude teplota. Proto do řádku zkopíruj zprávu s teplotou ze záložky Messages (bez čísla). Nebo klidně použij tuhle:

```
node/push-button:0/thermometer/0:1/temperature
```

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566156149/projects/kennel-temperature-monitor/image1.png)

Potvrď tlačítkem **Done**.

4. Vedle nodu postav druhý, světle modrý s názvem **Chart** (graf). Najdeš ho v sekci Dashboard. Tímhle nodem určíš, jak bude naměřená teplota znázorněná na obrazovce. Oba nody propoj. 👌

![Node-RED dashboard chart](https://res.cloudinary.com/lukasfabik/image/upload/v1566156149/projects/kennel-temperature-monitor/image4.png)

5. Na node Chart dvakrát klikni. V řádku **X-axis** si nastavíš, za jak dlouhou dobu bude graf teplotu ukazovat. Nastav, kolik potřebuješ.
Na řádku **Label** si graf libovolně přejmenuj.

![Chart settings](https://res.cloudinary.com/lukasfabik/image/upload/v1566156149/projects/kennel-temperature-monitor/image3.png)

Potvrď tlačítkem **Done**.


6. Teď můžeš zmáčknout červené tlačítko **Deploy** v pravém horním rohu obrazovky. 🚨 Tím celý flow aktivuješ.

❗ **Pozor:** Při každé změně v nodech musíš Deploy mačkat znovu.

7. Překlikni se do jiné záložky, do **Dashboardu**. Tady je tvůj graf. 👏
![Temperature chart from kennel](https://res.cloudinary.com/lukasfabik/image/upload/v1566156149/projects/kennel-temperature-monitor/image2.png)

## A akce!

1. Krabičku přilep kobercovou páskou **dovnitř boudy na stěnu**. 🏡

2. Sleduj, **jak se mění teplota**, když je hafan venku a když je uvnitř. Pes totiž boudu trochu zahřívá. 🐕
**Náš tip:** Až teploty klesnou, vylož boudu dekou nebo slámou.

3. Když je pod −15 °C na nic nečekej a **pusť psa dovnitř domu**. Ubytuj ho alespoň v předsíni. ❄

4. Uvidíš, že **hafan bude spoko**! 👌
