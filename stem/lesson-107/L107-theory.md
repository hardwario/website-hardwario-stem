---
slug: iot-light-monitor-theory
title: Theory
title_meta: "Theory (L107: IoT Light Monitor)"
---
import Image from '@theme/IdealImage';

**Time allocation**: 10 min.

## Light

Light is the **visible part of [electromagnetic radiation](https://en.wikipedia.org/wiki/Electromagnetic_radiation)**.
Its **[frequency](https://en.wikipedia.org/wiki/Frequency)** ranges from about *3.9×10¹⁴* to *7.9×10¹⁴* [Hz](https://en.wikipedia.org/wiki/Hertz), which corresponds to **wavelengths** in a vacuum of **390 to 760 [nm](https://en.wikipedia.org/wiki/Metre)**. 

This band lies between [ultraviolet](https://en.wikipedia.org/wiki/Ultraviolet) (UV) and [infrared](https://en.wikipedia.org/wiki/Infrared) (IR) radiation.
Some fields of science also count a wider spectrum, reaching into the UV and IR, as light.

Light can be described in several ways:

- **[Photometrically](https://en.wikipedia.org/wiki/Photometry_(optics))**: for example by [luminous intensity](https://en.wikipedia.org/wiki/Luminous_intensity) or [luminous flux](https://en.wikipedia.org/wiki/Luminous_flux)
- **[Colorimetrically](https://en.wikipedia.org/wiki/Colorimetry)**: by its color and [spectrum](https://en.wikipedia.org/wiki/Frequency)
- **By its [coherence](https://en.wikipedia.org/wiki/Coherence)** and **[polarization](https://en.wikipedia.org/wiki/Polarization_(waves))**


:::info
These properties determine how light behaves when it is reflected, refracted, passes through a material, interferes or diffracts.
:::

> Thanks to wave–particle duality, light has the properties of both **[particles](https://en.wikipedia.org/wiki/Particle)** and **[waves](https://en.wikipedia.org/wiki/Wave)**.

We perceive different frequencies of light as different [colors](https://en.wikipedia.org/wiki/Color): from **[red](https://en.wikipedia.org/wiki/Red)** (lowest frequency, longest wavelength) to **[violet](https://en.wikipedia.org/wiki/Violet_(color))** (highest frequency, shortest wavelength).

<div class="container">
  <div class="row">
    <Image img={require('./srgbspectrum.avif')} alt="Visible light spectrum from violet to red with wavelength and frequency scales"/>
  </div>
</div>

Beyond the visible spectrum, on the short-wave side, lies **[UV radiation](https://en.wikipedia.org/wiki/Ultraviolet)**, which acts on human skin and causes **[tanning](https://en.wikipedia.org/wiki/Sun_tanning)**.
On the opposite side is **[IR radiation](https://en.wikipedia.org/wiki/Infrared)**: the human eye cannot see it, but we feel its **[heat](https://en.wikipedia.org/wiki/Heat)** through receptors in the skin.

---

## Visual comfort

**Illuminance** is one of the main parameters of the indoor environment.
Enough light has a positive effect on our **mood, performance and health**. It helps create a pleasant atmosphere and improves concentration and overall comfort.

Besides the amount of light, the **color of light** matters too. Even “white” light comes in several shades:

* **Warm white**: resembles the light of an incandescent bulb. It feels cozy and is used mainly in living rooms, bedrooms and children's rooms. Its drawback is that details are harder to see.
* **Cool white**: a more neutral light that shows contrast more clearly. It suits kitchens, bathrooms and toilets.
* **Daylight white**: a bright, slightly bluish shade close to daylight. It is often used in **well-lit workspaces**.

---

## RGB

**[RGB](https://en.wikipedia.org/wiki/RGB_color_model)** is a color model built on three primary colors: **red, green and blue**.
It is used for **mixing emitted light**, for example in monitors and projectors. Unlike the **[CMYK](https://en.wikipedia.org/wiki/CMYK_color_model)** model, RGB needs no external light source, because the device emits light itself.

Standard wavelengths:

* Red: 700 nm  
* Green: 546.1 nm  
* Blue: 435.8 nm

Colors are created by combining the intensities of these components:

| R   | G   | B   | Color     |
| --- | --- | --- | --------- |
| 0   | 0   | 0   | Black     |
| 255 | 0   | 0   | Red       |
| 0   | 255 | 0   | Green     |
| 0   | 0   | 255 | Blue      |
| 255 | 255 | 0   | Yellow    |
| 255 | 0   | 255 | Magenta   |
| 0   | 255 | 255 | Cyan      |
| 255 | 255 | 255 | White     |

---

### Sources

- [Wikipedia: Light](https://en.wikipedia.org/wiki/Light)  
- [Wikipedia: RGB](https://en.wikipedia.org/wiki/RGB_color_model)  
- [ASB Portal: Visual comfort](https://www.asb-portal.cz/stavebnictvi/technicka-zarizeni-budov/osvetleni-a-elektroinstalace/svetelna-pohoda-ve-vnitrnim-prostredi)
