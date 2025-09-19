---
slug: lesson-2
title: Lekce 2 - Měř a vykresluj
---
import Image from '@theme/IdealImage';

🧑‍💻 **Trvání:** 30 minut
🎯 **Cílová skupina:** pro jednotlivce i malé skupiny

## 1. Úvod do vizuálního programování

Playground umožňuje programování přetahováním bloků a okamžitě reaguje na připojené moduly.

## 2. Začínáme s HARDWARIO Playgroundem

Ověřte si, že máte z předchozí lekce vše připraveno:

✅ Playground je spuštěný
✅ Dongle je připojený
✅ PIR senzor má baterie
✅ V **Messages** vidíte výstupy z PIR senzoru

## 3. První program

Vytvořte program pro zpracování výstupů z **PIR Module**.

:::info

Tento text není úplná dokumentace **Node-RED**.
Pro hlubší pochopení doporučujeme [oficiální příklady](https://docs.hardwario.com/tower/desktop-programming/node-red-programming/).

:::

**Úkol:** Připravte **přehledový dashboard** s následujícími prvky:

- 🧭 **Měřidlo (gauge)** pro orientaci **PIR Module**
- 📈 **Graf orientace v čase**
- 🌡️ **Graf teploty v čase**

👉 Dbejte na popisky os:
- **Osa X**: čas
- **Osa Y**: hodnota

## 4. Ukázkové řešení

Funkce pro zpracování dat z PIR Module

<div class="container">
  <div class="row">
    <Image img={require('./img/iot-function_orientation.webp')}/>
  </div>
</div>
<br></br>

Výsledný dashboard

<div class="container">
  <div class="row">
    <Image img={require('./img/iot-chart_orientation.webp')}/>
  </div>
</div>
<br></br>

## 5. Shrnutí

✅ Už umíte připojit moduly, sledovat jejich výstupy a zobrazit je graficky.

👉 Zkuste připojit také **Climate Module** a sledovat tlak, vlhkost nebo světlo.

:::info
V této lekci byl **PIR Module** použit pro orientaci a teplotu.
Jeho detekce pohybu je méně vhodná pro rychlé testování, ale můžete ji vyzkoušet, pokud je v okolí klid.
:::
