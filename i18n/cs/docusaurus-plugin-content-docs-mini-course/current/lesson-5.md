---
slug: lesson-5
title: Lekce 5 - Závěr a teorie
---

**Trvání:** 45 minut
**Cílová skupina:** pro jednotlivce i dvojice / třídu

**Úkol:** Shrňte, co jste se naučili, pochopte teorii **Node-RED** a **MQTT**, vytvořte malý projekt, který vše spojí.

## 1. Shrnutí, co jsme zvládli

V předchozích lekcích jste:

- připravili **HARDWARIO TOWER**, párovali moduly, nainstalovali firmware,
- měřili různé veličiny (teplotu, orientaci, pohyb),
- vytvářeli jste grafy a dashboardy ve Playgroundu,
- filtrovali zprávy, používali jste podmínky,
- ovládali LED pásek a další výstupy.

> Účelem této lekce je propojit všechny tyto znalosti, pochopit, jak to funguje „pod pokličkou“, a vyzkoušet si to v jednom celistvém projektu.

## 2. Co je Node-RED

Node-RED je vizuální prostředí pro „tokové“ programování, často v oblasti IoT.

- Skládá se z **uzlů** (nodes), které vstupují, zpracovávají zprávy a vystupují.
- Uzly se spojují do **toků** (flows).
- Zpráva (message) má většinou dvě důležité části:
  - `topic` – téma, kategorie/kanál zprávy
  - `payload` – obsah zprávy, např. číslo, text, **JSON** objekt
- Uzly jako **Switch**, **Change**, **Function**, **Debug** umožňují zprávu měnit, filtrovat, reagovat.
- Playground využívá **Node-RED** pro vizuální skládání toků, testování a interakci se zařízeními.

## 3. Co je MQTT

**MQTT** je protokol pro zasílání zpráv, obzvláště vhodný pro IoT.

- Princip *publish / subscribe*: zařízení (publisher) odesílá zprávy na dané téma (topic), a jiná zařízení (subscribers) se k tématu přihlásí a přijímají zprávy.
- Rozdíl oproti přímému posílání: publisher neví, kdo zprávu přijme; subscriber neví, kdo ji odeslal.
- **Broker** je server, který všechny zprávy zprostředkovává.
- Důležité vlastnosti:
  - hierarchie topiců (např. `home/pokoj1/teplota`)
  - možné úrovně QoS (Quality of Service) – např. „doručeno alespoň jednou“, „doručeno přesně jednou“
  - retenční zprávy (retained messages) – poslední zpráva může být uložena a noví odběratelé ji dostanou hned při přihlášení
- Bezpečnost: ověřování, šifrování komunikace, pečlivé spravování klíčů / tokenů.

## 4. Jak vše do sebe zapadá – architektura

Níže je zjednodušené schéma, jak tok zprávy ve vašich projektech funguje:

- Modul senzor měří, odešle data do **HARDWARIO Playground**.
- Aplikace **HARDWARIO Playground** rádiem přijatou zprávu z **Radio Dongle** publikuje přes **MQTT** protokol.
- **Node-RED** zprávu z **MQTT** zpracuje: může filtrovat, reagovat, či opět předat dál přes **MQTT**.
- Broker distribuuje zprávy těm, kdo o ně mají zájem – aplikacím, výstupním modulům, dashboardům.
- Výstupy reagují – LED, upozornění aj.

## 5. Závěrečný projekt

Vyzkoušejte si následující projekt:

**Úloha:**

1. Použijte senzor (např. teplotu) a modul detekce pohybu / orientace.
2. Když teplota překročí nastavenou mez *a* je přítomen pohyb / změna orientace, pak:

   - rozsvítí se LED pásek na červeno,
   - v **HARDWARIO Playground** se zobrazí zpráva.

3. Zobrazujte dashboard s aktuální teplotou, stavem pohybu/orientace a stavem LED pásku.
4. Nakreslete tok zpráv: topic(y), payloady, uzly v **Node-RED**, kdo co publikuje / subscribuje.

## 6. Dobré zásady a na co si dát pozor

- Pečlivě pojmenovávejte topic(y) – přehlednost se hodí.
- Neposílejte data zbytečně často – šetříte síť a zdroje zařízení.
- Zabezpečení: hesla / tokeny / klíče nesdílejte. Používejte silné.
- Sledujte, co se děje při výpadku nebo chybě – co když senzor nepřijde, **MQTT broker** je nedostupný.

## 7. Reflexe a sdílení

- Co bylo pro vás nejtěžší? Co naopak nejjednodušší?
- Která část by vás zajímala do hloubky více (např. fungování **MQTT**, bezpečnost, databáze...)?
- Sdílejte svůj projekt nebo tok zpráv s ostatními – vysvětlete, jak jste to udělali.

## Shrnutí ✅

Gratulujeme! Dokončili jste celý kurz, znáte **HARDWARIO TOWER** nejen prakticky, ale i na úrovni teorie.
Teď už máte základy pro tvoření vlastních IoT projektů – a můžete je dál rozšiřovat podle vlastních nápadů.
