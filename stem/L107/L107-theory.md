---
slug: iot-light-monitor-theory
title: Theory
---
import Image from '@theme/IdealImage';

**Time allocation**: 10 min.

## Light

Light is the visible part o [electromagnetic radiation](https://en.wikipedia.org/wiki/Electromagnetic_radiation)**.
JIts **[frekvency](https://en.wikipedia.org/wiki/Frequency)** ranges approximately between 3.9×10¹⁴ and 7.9×10¹⁴ Hz, which corresponds to wavelengths in a vacuum from 390 to 760 [nm](https://en.wikipedia.org/wiki/Metre)**. 

This range lies between [ultraviolet](https://en.wikipedia.org/wiki/Ultraviolet) (UV) and [infrared](https://en.wikipedia.org/wiki/Infrared) (IR) radiation.
A broader spectrum extending into UV and IR is also considered light in some scientific fields.

Light can be described in several ways:

- **[Photometrically](https://en.wikipedia.org/wiki/Photometry_(optics))**: by [luminance](https://en.wikipedia.org/wiki/Luminance) or [luminous flux](https://en.wikipedia.org/wiki/Luminous_flux)
- **[Colorimetrically](https://en.wikipedia.org/wiki/Colorimetry)**: by color and [spectrum](https://en.wikipedia.org/wiki/Frequency)
- **By [coherence](https://en.wikipedia.org/wiki/Coherence)** and **[polarization](https://en.wikipedia.org/wiki/Polarization_(waves))**


:::info
These properties determine how light behaves during reflection, refraction, passage through materials, interference, and diffraction.
:::

Due to wave–particle duality, light exhibits the properties of both **[particles](https://en.wikipedia.org/wiki/Particle)** and **[waves](https://en.wikipedia.org/wiki/Wave)**.

Different light frequencies are perceived as different [colors](https://en.wikipedia.org/wiki/Color): from **[red](https://en.wikipedia.org/wiki/Red)** (lowest frequency, longest wavelength) to **[violet](https://en.wikipedia.org/wiki/Violet_(color))** (highest frequency, shortest wavelength).

<div class="container">
  <div class="row">
    <Image img={require('./srgbspectrum.avif')}/>
  </div>
</div>

On the shortwave side beyond visible light lies **[UV radiation](https://en.wikipedia.org/wiki/Ultraviolet)**, which affects human skin and causes **[tanning](https://en.wikipedia.org/wiki/Sun_tanning)**.
On the opposite side is **[IR radiation](https://en.wikipedia.org/wiki/Infrared)** – invisible to the human eye, but we feel its **[heat](https://en.wikipedia.org/wiki/Heat)** through skin receptors.

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

**[RGB](https://en.wikipedia.org/wiki/RGB_color_model)** is a color model that uses three primary colors: **red, green, and blue**.
For example, it is used for **emissive color mixing** in monitors and projectors. Unlike the **[CMYK](https://en.wikipedia.org/wiki/CMYK_color_model)** model, RGB does not require external light – the device emits light on its own.

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

- [Wikipedia – Light](https://en.wikipedia.org/wiki/Light)  
- [Wikipedia – RGB](https://en.wikipedia.org/wiki/RGB_color_model)  
- [ASB Portal – Lighting Comfort](https://www.asb-portal.cz/stavebnictvi/technicka-zarizeni-budov/osvetleni-a-elektroinstalace/svetelna-pohoda-ve-vnitrnim-prostredi)
