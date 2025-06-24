---
slug: iot-light-monitor-theory
title: Theory
---
import Image from '@theme/IdealImage';

**Time allocation**: 10 min.

## Light

Light is the visible part o [electromagnetic radiation](https://cs.wikipedia.org/wiki/Elektromagnetick%C3%A9_z%C3%A1%C5%99en%C3%AD)**.
JIts **[frekvency](https://cs.wikipedia.org/wiki/Frekvence)** ranges approximately between 3.9×10¹⁴ and 7.9×10¹⁴ Hz, which corresponds to wavelengths in a vacuum from 390 to 760 [nm](https://cs.wikipedia.org/wiki/Metr#D%C3%ADly_metru)**. 

This range lies between [ultraviolet](https://cs.wikipedia.org/wiki/Ultrafialov%C3%A9_z%C3%A1%C5%99en%C3%AD) (UV) and [infrared](https://cs.wikipedia.org/wiki/Infra%C4%8Derven%C3%A9_z%C3%A1%C5%99en%C3%AD) (IR) radiation.
A broader spectrum extending into UV and IR is also considered light in some scientific fields.

Light can be described in several ways:

- **[Photometrically](https://cs.wikipedia.org/wiki/Fotometrie)**: by [luminance](https://cs.wikipedia.org/wiki/Sv%C3%ADtivost) or [luminous flux](https://cs.wikipedia.org/wiki/Sv%C4%9Bteln%C3%BD_tok)
- **[Colorimetrically](https://cs.wikipedia.org/wiki/Kolorimetrie)**: by color and [spectrum](https://cs.wikipedia.org/wiki/Frekvence)
- **By [coherence](https://cs.wikipedia.org/wiki/Koherence_(vln%C4%9Bn%C3%AD))** and **[polarization](https://cs.wikipedia.org/wiki/Polarizace_(elektrodynamika))**


:::info
These properties determine how light behaves during reflection, refraction, passage through materials, interference, and diffraction.
:::

Due to wave–particle duality, light exhibits the properties of both **[particles](https://cs.wikipedia.org/wiki/%C4%8C%C3%A1stice)** i **[waves](https://cs.wikipedia.org/wiki/Vln%C4%9Bn%C3%AD)**.

Different light frequencies are perceived as different [colors](https://cs.wikipedia.org/wiki/Barva): from **[red](https://cs.wikipedia.org/wiki/%C4%8Cerven%C3%A1)** (lowest frequency, longest wavelength) to **[violet](https://cs.wikipedia.org/wiki/Fialov%C3%A1)** (highest frequency, shortest wavelength).

<div class="container">
  <div class="row">
    <Image img={require('./Srgbspectrum.avif')}/>
  </div>
</div>

On the shortwave side beyond visible light lies **[UV radiation](https://cs.wikipedia.org/wiki/Ultrafialov%C3%A9_z%C3%A1%C5%99en%C3%AD)**, which affects human skin and causes **[tanning](https://cs.wikipedia.org/wiki/Opalov%C3%A1n%C3%AD)**.
On the opposite side is **[IR radiation](https://cs.wikipedia.org/wiki/Infra%C4%8Derven%C3%A9_z%C3%A1%C5%99en%C3%AD)** – invisible to the human eye, but we feel its **[heat](https://cs.wikipedia.org/wiki/Teplo)** through skin receptors.

---

## Visual Comfort

**Light intensity** is one of the key environmental factors in interior spaces.
Adequate lighting positively affects our **mood, productivity, and health**. It helps create a pleasant atmosphere, improves focus, and enhances overall comfort.

Besides the amount of light, the **color of light** is also important. There are various shades even within “white” light:

* **Warm white** – resembles incandescent light, is cozy, and is used in living rooms, bedrooms, and children’s rooms. Less suitable for detailed visibility.
* **Cool white** – more neutral light that enhances contrast; ideal for kitchens, bathrooms, or toilets.
* **Daylight white** – bright with a slightly bluish tint, similar to daylight. Commonly used in **well-lit workspaces**.

---

## RGB

**[RGB](https://cs.wikipedia.org/wiki/RGB)** is a color model that uses three primary colors: **red, green, and blue**.
For example, it is used for **emissive color mixing** in monitors and projectors. Unlike the **[CMYK](https://cs.wikipedia.org/wiki/CMYK)** model, RGB does not require external light – the device emits light on its own.

Typical wavelengths:

* Red: 700 nm  
* Green: 546,1 nm  
* Blue*: 435,8 nm

Colors are created by mixing the intensity of these components:

| R   | G   | B   | Color     |
| --- | --- | --- | --------- |
| 0   | 0   | 0   | Black     |
| 255 | 0   | 0   | Red       |
| 0   | 255 | 0   | Green     |
| 0   | 0   | 255 | Blue      |
| 255 | 255 | 0   | Yellow    |
| 255 | 0   | 255 | Magenta   |
| 0   | 255 | 255 | Cyan      |
| 255 | 255 | 255 | white     |

---

### Sources

- [Wikipedia – Light](https://cs.wikipedia.org/wiki/Světlo)  
- [Wikipedia – RGB](https://cs.wikipedia.org/wiki/RGB)  
- [ASB Portal – Lighting Comfort](https://www.asb-portal.cz/stavebnictvi/technicka-zarizeni-budov/osvetleni-a-elektroinstalace/svetelna-pohoda-ve-vnitrnim-prostredi)
