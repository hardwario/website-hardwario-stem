---
slug: lesson-5
title: Lekce 5 – Závěr a teorie
---

**Trvání:** 45 minut  
**Cílová skupina:** pro jednotlivce, dvojice i celou třídu

**Úkol:** Shrňte, co jste se naučili, seznamte se s teorií **Node-RED** a **MQTT** a vytvořte malý projekt, který vše propojí.

## 1. Co jste zvládli

V předchozích lekcích jste:

- připravili stavebnici **HARDWARIO TOWER**, spárovali moduly a nahráli firmware,
- měřili různé veličiny (teplotu, orientaci, pohyb),
- vytvářeli grafy a dashboardy v Playgroundu,
- filtrovali zprávy a používali podmínky,
- ovládali LED pásek a další výstupy.

> V této lekci všechny tyto znalosti propojíte, pochopíte, jak vše funguje „pod pokličkou“, a vyzkoušíte si to na jednom uceleném projektu.

## 2. Co je Node-RED

Node-RED je vizuální prostředí pro „tokové“ programování, které se často používá v IoT.

- Skládá se z **uzlů** (nodes), které zprávy přijímají, zpracovávají a odesílají.
- Uzly se spojují do **toků** (flows).
- Zpráva (message) má většinou dvě důležité části:
  - `topic`: kategorie neboli kanál zprávy
  - `payload`: obsah zprávy, např. číslo, text nebo objekt **JSON**
- Uzly jako **Switch**, **Change**, **Function** nebo **Debug** zprávy mění, filtrují nebo na ně reagují.
- Playground využívá **Node-RED** pro vizuální skládání toků, testování a interakci se zařízeními.

## 3. Co je MQTT

**MQTT** je protokol pro zasílání zpráv, obzvláště vhodný pro IoT.

- Princip *publish / subscribe*: zařízení (publisher) odesílá zprávy do určitého topicu a jiná zařízení (subscribers) se k tomuto topicu přihlásí a zprávy přijímají.
- Rozdíl oproti přímému posílání: publisher neví, kdo zprávu přijme; subscriber neví, kdo ji odeslal.
- **Broker** je server, který všechny zprávy zprostředkovává.
- Důležité vlastnosti:
  - hierarchie topiců (např. `home/pokoj1/teplota`)
  - možné úrovně QoS (Quality of Service): např. „doručeno alespoň jednou“, „doručeno přesně jednou“
  - retenční zprávy (retained messages): poslední zpráva může být uložena a noví odběratelé ji dostanou hned při přihlášení
- Bezpečnost: ověřování, šifrování komunikace, pečlivá správa klíčů a tokenů.

## 4. Jak vše do sebe zapadá – architektura

Zjednodušeně putuje zpráva ve vašich projektech takto:

- Senzorový modul měří a data odešle do aplikace **HARDWARIO Playground**.
- Aplikace **HARDWARIO Playground** převezme zprávu, kterou rádiem přijal **Radio Dongle**, a publikuje ji přes protokol **MQTT**.
- **Node-RED** zprávu z **MQTT** zpracuje: může ji filtrovat, reagovat na ni nebo ji přes **MQTT** předat dál.
- Broker doručí zprávy všem, kdo je odebírají: aplikacím, výstupním modulům a dashboardům.
- Výstupy reagují: LED, upozornění aj.

## 5. Závěrečný projekt

Vyzkoušejte si následující projekt:

**Úloha:**

1. Použijte senzor (např. teploty) a modul pro detekci pohybu nebo orientace.
2. Když teplota překročí nastavenou mez *a* senzor zároveň zaznamená pohyb nebo změnu orientace:

   - LED pásek se rozsvítí červeně,
   - v **HARDWARIO Playground** se zobrazí zpráva.

3. Na dashboardu zobrazte aktuální teplotu, stav pohybu nebo orientace a stav LED pásku.
4. Nakreslete tok zpráv: topic(y), payloady, uzly v **Node-RED** a kdo co publikuje a odebírá.

## 6. Osvědčené postupy a na co si dát pozor

- Topicy pojmenovávejte pečlivě, přehlednost se vyplatí.
- Neposílejte data zbytečně často, šetříte tím síť i zdroje zařízení.
- Zabezpečení: hesla, tokeny ani klíče nesdílejte a volte silná hesla a klíče.
- Sledujte, co se děje při výpadku nebo chybě: co když zpráva ze senzoru nepřijde nebo **MQTT broker** nebude dostupný?

## 7. Reflexe a sdílení

- Co bylo pro vás nejtěžší? Co naopak nejjednodušší?
- Kterou část byste chtěli poznat podrobněji (např. jak funguje **MQTT**, bezpečnost, databáze…)?
- Sdílejte svůj projekt nebo tok zpráv s ostatními: vysvětlete, jak jste to udělali.

## Shrnutí ✅

Gratulujeme! Dokončili jste celý kurz a stavebnici **HARDWARIO TOWER** znáte nejen z praxe, ale i z teorie.  
Teď už máte základy pro vlastní IoT projekty a můžete je dál rozvíjet podle svých nápadů.
