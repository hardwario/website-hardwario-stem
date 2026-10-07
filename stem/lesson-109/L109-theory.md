---
slug: iot-soil-monitor-theory
title: Theory
title_meta: "Theory (L109: IoT Soil Monitor)"
---
import Image from '@theme/IdealImage';

**Time allocation**: 10 min.

## Soil monitoring

### What is drought

Drought is hard to define, because its meaning differs from region to region. In Bali, for example, six days without rain count as a drought, while in desert regions the word naturally means something quite different. In general, a drought occurs when there is too little rainfall over a longer period and, as a result, not enough water for an activity, a group of people or the environment.

We distinguish four types of drought:

* **Meteorological**: rainfall below normal over a certain period
* **Agricultural**: soil drought, that is, a lack of moisture for crops
* **Hydrological**: a significant drop in surface water or groundwater levels
* **Socio-economic**: the impact of drought on quality of life and the economy

On the other hand, soil that is too moist can also cause problems. Waterlogged soil, for example, makes sowing and harvesting harder. That is why it is important to monitor soil, above all its moisture. With IoT monitoring we can, for example, irrigate more precisely, increase yields and save water at the same time.

### Soil water potential

The availability of water to plants is determined by the soil water potential. More precisely, it is the force a plant has to overcome to draw water from the soil, and at the same time the force that determines how moisture is distributed and how solutions move through the soil.

Water potential is usually given as a negative pressure. For example:

* **0 MPa**: full water capacity; all pores are filled with water and the plant struggles to take in oxygen
* **-0.005 to -0.015 MPa**: field capacity; water sits in the capillary pores and the plant has enough water and air
* **-1.5 MPa**: the wilting point, where transpiration exceeds water uptake and the plant wilts

### How soil is monitored

Soil moisture is commonly measured with the resistive method. The sensor works on a simple principle: it measures the conductivity between two electrodes. Moist soil conducts better (lower resistance), dry soil worse. The electrodes are plated over a larger area so that their contact surface with the soil is as large as possible. The drawback of this method is electrode oxidation, which can affect the measurement.

That is why the capacitive method is more suitable. It works on a principle similar to smartphone touchscreens: a finger touching the glass changes the dielectric properties. Put simply, the dielectric is the material and environment around the electrodes. Water changes the dielectric properties considerably when it gets between the electrodes. In other words, two metal electrodes have one capacitance when there is air between them and another when there is water. The same happens when you put the electrodes into dry soil and into wet soil.

At HARDWARIO, we have developed the fully digital Soil Sensor with a wide supply voltage range from 2.8 V to 5.5 V (Arduino compatible). It communicates over the industry-standard 1-Wire bus, which can carry several sensors connected in parallel; their number is practically unlimited. The sensor is fully sealed in silicone, so it can of course be submerged in water. This is the sensor we will work with in the experiment.
