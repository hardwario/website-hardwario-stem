---
slug: iot-light-monitor-theory
title: Teorie
---
import Image from '@theme/IdealImage';

**Časová dotace**: 10 min.

## Světlo

Světlo je **viditelná část [elektromagnetického záření](https://cs.wikipedia.org/wiki/Elektromagnetick%C3%A9_z%C3%A1%C5%99en%C3%AD)**.
Jeho **[frekvence](https://cs.wikipedia.org/wiki/Frekvence)** se pohybuje přibližně mezi *3,9×10¹⁴* a *7,9×10¹⁴* [Hz](https://cs.wikipedia.org/wiki/Hertz), což odpovídá **vlnovým délkám** ve vakuu od **390 do 760 [nm](https://cs.wikipedia.org/wiki/Metr#D%C3%ADly_metru)**. 

Toto pásmo se nachází mezi [ultrafialovým](https://cs.wikipedia.org/wiki/Ultrafialov%C3%A9_z%C3%A1%C5%99en%C3%AD) (UV) a [infračerveným](https://cs.wikipedia.org/wiki/Infra%C4%8Derven%C3%A9_z%C3%A1%C5%99en%C3%AD) (IR) zářením.
 V některých oblastech vědy se za světlo může považovat i širší spektrum zasahující do UV a IR.

Světlo lze charakterizovat několika hledisky:

- **[Fotometrickými](https://cs.wikipedia.org/wiki/Fotometrie)**: jako je [svítivost](https://cs.wikipedia.org/wiki/Sv%C3%ADtivost) nebo [světelný tok](https://cs.wikipedia.org/wiki/Sv%C4%9Bteln%C3%BD_tok)
- **[Kolorimetrickými](https://cs.wikipedia.org/wiki/Kolorimetrie)**: tedy barvou a [spektrem](https://cs.wikipedia.org/wiki/Frekvence)
- **[Koherencí](https://cs.wikipedia.org/wiki/Koherence_(vln%C4%9Bn%C3%AD))** a **[polarizací](https://cs.wikipedia.org/wiki/Polarizace_(elektrodynamika))**


:::info
Tyto vlastnosti určují, jak se světlo chová při odrazu, lomu, průchodu materiálem nebo při interferenci a ohybu.
:::

> Díky dualitě má světlo vlastnosti **[částice](https://cs.wikipedia.org/wiki/%C4%8C%C3%A1stice)** i **[vlnění](https://cs.wikipedia.org/wiki/Vln%C4%9Bn%C3%AD)**.

Různé frekvence světla vnímáme jako různé [barvy](https://cs.wikipedia.org/wiki/Barva): od **[červené](https://cs.wikipedia.org/wiki/%C4%8Cerven%C3%A1)** (nejnižší frekvence, nejdelší vlnová délka) po **[fialovou](https://cs.wikipedia.org/wiki/Fialov%C3%A1)** (nejvyšší frekvence, nejkratší vlnová délka).

<div class="container">
  <div class="row">
    <Image img={require('./srgbspectrum.avif')} alt="Spektrum viditelného světla od fialové po červenou se stupnicemi vlnové délky a frekvence"/>
  </div>
</div>

Na krátkovlnné straně za viditelným spektrem leží **[UV záření](https://cs.wikipedia.org/wiki/Ultrafialov%C3%A9_z%C3%A1%C5%99en%C3%AD)**, které ovlivňuje lidskou pokožku – způsobuje **[opálení](https://cs.wikipedia.org/wiki/Opalov%C3%A1n%C3%AD)**.
 Na opačné straně je **[IR záření](https://cs.wikipedia.org/wiki/Infra%C4%8Derven%C3%A9_z%C3%A1%C5%99en%C3%AD)** – to lidské oko nevidí, ale jeho **[teplo](https://cs.wikipedia.org/wiki/Teplo)** vnímáme pomocí receptorů v kůži.

---

## Světelná pohoda

**Intenzita osvětlení** patří mezi hlavní parametry prostředí v interiéru.
 Dostatek světla pozitivně ovlivňuje naši **náladu, výkonnost i zdraví**. Pomáhá vytvářet příjemnou atmosféru, zvyšuje soustředění a celkový komfort.

Vedle množství světla je důležitá i **barva světla**. Existují různé varianty i v rámci „bílé“:

- **Teplá bílá** – připomíná žárovkové světlo. Působí útulně a využívá se hlavně v obývacích pokojích, ložnicích a dětských pokojích. Nevýhodou je horší vykreslení detailů.
- **Studená bílá** – neutrálnější světlo, které zřetelněji vykresluje kontrasty. Vhodná do kuchyně, koupelny nebo na toaletu.
- **Denní bílá** – má jasný až lehce namodralý odstín, blíží se dennímu světlu. Často se používá ve **vhodně nasvícených pracovních prostorech**.

---

## RGB

**[RGB](https://cs.wikipedia.org/wiki/RGB)** je barevný model, který využívá tři základní barvy: **červenou, zelenou a modrou**.
 Používá se při **míchání vyzařovaného světla**, například v monitorech a projektorech. Na rozdíl od **[CMYK](https://cs.wikipedia.org/wiki/CMYK)** modelu RGB nepotřebuje externí světlo – zařízení svítí samo.

Standardní vlnové délky:

- Červená: 700 nm  
- Zelená: 546,1 nm  
- Modrá: 435,8 nm

Barvy vznikají kombinací intenzity těchto složek:

| R   | G   | B   | Barva     |
| --- | --- | --- | --------- |
| 0   | 0   | 0   | černá     |
| 255 | 0   | 0   | červená   |
| 0   | 255 | 0   | zelená    |
| 0   | 0   | 255 | modrá     |
| 255 | 255 | 0   | žlutá     |
| 255 | 0   | 255 | purpurová |
| 0   | 255 | 255 | azurová   |
| 255 | 255 | 255 | bílá      |

---

### Zdroje

- [Wikipedia – Světlo](https://cs.wikipedia.org/wiki/Světlo)  
- [Wikipedia – RGB](https://cs.wikipedia.org/wiki/RGB)  
- [ASB Portal – Světelná pohoda](https://www.asb-portal.cz/stavebnictvi/technicka-zarizeni-budov/osvetleni-a-elektroinstalace/svetelna-pohoda-ve-vnitrnim-prostredi)
