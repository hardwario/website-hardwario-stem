---
slug: lesson-2
title: Lekce 2 – Měřte a vykreslujte
---
import Image from '@theme/IdealImage';

🧑‍💻 **Trvání:** 30 minut  
🎯 **Cílová skupina:** pro jednotlivce i malé skupiny

## 1. Úvod do vizuálního programování

V aplikaci Playground programujete přetahováním bloků a aplikace okamžitě reaguje na připojené moduly.

## 2. Začínáme s aplikací HARDWARIO Playground

Ověřte si, že máte z předchozí lekce vše připraveno:

✅ Playground je spuštěný  
✅ Dongle je připojený  
✅ PIR senzor má baterie  
✅ V **Messages** vidíte výstupy z PIR senzoru

## 3. První program

Vytvořte program, který zpracuje výstupy z **PIR Module**.

:::info

Tento text nenahrazuje úplnou dokumentaci **Node-RED**.
Chcete-li proniknout hlouběji, doporučujeme [oficiální příklady](https://docs.hardwario.com/tower/desktop-programming/node-red-programming/).

:::

**Úkol:** Připravte **přehledový dashboard** s následujícími prvky:

- 🧭 **Budík (gauge)** pro orientaci **PIR Module**
- 📈 **Graf orientace v čase**
- 🌡️ **Graf teploty v čase**

👉 Dbejte na popisky os:
- **Osa X**: čas
- **Osa Y**: hodnota

## 4. Ukázkové řešení

Funkce pro zpracování dat z PIR Module

<div class="container">
  <div class="row">
    <Image img={require('./img/iot-function-orientation.webp')} alt="Flow v Node-RED: topicy orientace a teploty propojené s uzly grafu a budíku na dashboardu"/>
  </div>
</div>
<br></br>

Výsledný dashboard

<div class="container">
  <div class="row">
    <Image img={require('./img/iot-chart-orientation.webp')} alt="Dashboard s budíkem orientace, grafem orientace v čase a grafem teploty v čase"/>
  </div>
</div>
<br></br>

## 5. Shrnutí

✅ Už umíte připojit moduly, sledovat jejich výstupy a zobrazit je graficky.

👉 Zkuste připojit také **Climate Module** a sledovat tlak, vlhkost nebo osvětlenost.

:::info
V této lekci jste z **PIR Module** využili orientaci a teplotu.
Detekce pohybu se pro rychlé testování hodí méně, ale můžete ji vyzkoušet, když je v okolí klid.
:::
