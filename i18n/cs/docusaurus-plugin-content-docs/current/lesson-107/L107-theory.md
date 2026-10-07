---
slug: iot-light-monitor-theory
title: Teorie
title_meta: "Teorie (L107: IoT osvětlení)"
---
import Image from '@theme/IdealImage';

**Časová dotace**: 10 min.

## Světlo

Světlo je **viditelná část [elektromagnetického záření](https://cs.wikipedia.org/wiki/Elektromagnetick%C3%A9_z%C3%A1%C5%99en%C3%AD)**.
Jeho **[frekvence](https://cs.wikipedia.org/wiki/Frekvence)** se pohybuje přibližně mezi *3,9×10¹⁴* a *7,9×10¹⁴* [Hz](https://cs.wikipedia.org/wiki/Hertz), což odpovídá **vlnovým délkám** ve vakuu od **390 do 760 [nm](https://cs.wikipedia.org/wiki/Metr#D%C3%ADly_metru)**. 

Toto pásmo se nachází mezi [ultrafialovým](https://cs.wikipedia.org/wiki/Ultrafialov%C3%A9_z%C3%A1%C5%99en%C3%AD) (UV) a [infračerveným](https://cs.wikipedia.org/wiki/Infra%C4%8Derven%C3%A9_z%C3%A1%C5%99en%C3%AD) (IR) zářením.
 V některých vědních oborech lze za světlo považovat i širší spektrum, které zasahuje do oblasti UV a IR.

Světlo lze popsat několika způsoby:

- **[Fotometricky](https://cs.wikipedia.org/wiki/Fotometrie)**: například [svítivostí](https://cs.wikipedia.org/wiki/Sv%C3%ADtivost) nebo [světelným tokem](https://cs.wikipedia.org/wiki/Sv%C4%9Bteln%C3%BD_tok)
- **[Kolorimetricky](https://cs.wikipedia.org/wiki/Kolorimetrie)**: barvou a [spektrem](https://cs.wikipedia.org/wiki/Frekvence)
- **[Koherencí](https://cs.wikipedia.org/wiki/Koherence_(vln%C4%9Bn%C3%AD))** a **[polarizací](https://cs.wikipedia.org/wiki/Polarizace_(elektrodynamika))**


:::info
Tyto vlastnosti určují, jak se světlo chová při odrazu, lomu, průchodu materiálem nebo při interferenci a ohybu.
:::

> Díky vlnově-částicovému dualismu má světlo vlastnosti **[částice](https://cs.wikipedia.org/wiki/%C4%8C%C3%A1stice)** i **[vlnění](https://cs.wikipedia.org/wiki/Vln%C4%9Bn%C3%AD)**.

Různé frekvence světla vnímáme jako různé [barvy](https://cs.wikipedia.org/wiki/Barva): od **[červené](https://cs.wikipedia.org/wiki/%C4%8Cerven%C3%A1)** (nejnižší frekvence, nejdelší vlnová délka) po **[fialovou](https://cs.wikipedia.org/wiki/Fialov%C3%A1)** (nejvyšší frekvence, nejkratší vlnová délka).

<div class="container">
  <div class="row">
    <Image img={require('./srgbspectrum.avif')} alt="Spektrum viditelného světla od fialové po červenou se stupnicemi vlnové délky a frekvence"/>
  </div>
</div>

Na krátkovlnné straně za viditelným spektrem leží **[UV záření](https://cs.wikipedia.org/wiki/Ultrafialov%C3%A9_z%C3%A1%C5%99en%C3%AD)**, které působí na lidskou pokožku a způsobuje **[opálení](https://cs.wikipedia.org/wiki/Opalov%C3%A1n%C3%AD)**.
 Na opačné straně je **[IR záření](https://cs.wikipedia.org/wiki/Infra%C4%8Derven%C3%A9_z%C3%A1%C5%99en%C3%AD)**, které lidské oko nevidí, ale jeho **[teplo](https://cs.wikipedia.org/wiki/Teplo)** vnímáme pomocí receptorů v kůži.

---

## Světelná pohoda

**Intenzita osvětlení** patří k hlavním parametrům vnitřního prostředí.
 Dostatek světla pozitivně ovlivňuje naši **náladu, výkonnost i zdraví**. Pomáhá vytvořit příjemnou atmosféru, zlepšuje soustředění i celkový komfort.

Vedle množství světla je důležitá i **barva světla**. I „bílé“ světlo má několik odstínů:

- **Teplá bílá**: připomíná žárovkové světlo. Působí útulně a využívá se hlavně v obývacích pokojích, ložnicích a dětských pokojích. Nevýhodou je horší vykreslení detailů.
- **Studená bílá**: neutrálnější světlo, které zřetelněji vykresluje kontrasty. Hodí se do kuchyně, koupelny nebo na toaletu.
- **Denní bílá**: má jasný až lehce namodralý odstín, blíží se dennímu světlu. Často se používá ve **vhodně nasvícených pracovních prostorech**.

---

## RGB

**[RGB](https://cs.wikipedia.org/wiki/RGB)** je barevný model, který využívá tři základní barvy: **červenou, zelenou a modrou**.
 Používá se při **míchání vyzařovaného světla**, například v monitorech a projektorech. Na rozdíl od modelu **[CMYK](https://cs.wikipedia.org/wiki/CMYK)** nepotřebuje RGB vnější zdroj světla, protože zařízení svítí samo.

Standardní vlnové délky:

- Červená: 700 nm  
- Zelená: 546,1 nm  
- Modrá: 435,8 nm

Barvy vznikají kombinací intenzit těchto složek:

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

- [Wikipedie: Světlo](https://cs.wikipedia.org/wiki/Světlo)  
- [Wikipedie: RGB](https://cs.wikipedia.org/wiki/RGB)  
- [ASB Portal: Světelná pohoda](https://www.asb-portal.cz/stavebnictvi/technicka-zarizeni-budov/osvetleni-a-elektroinstalace/svetelna-pohoda-ve-vnitrnim-prostredi)
