---
slug: iot-soil-monitor-theory
title: Theory
---
import Image from '@theme/IdealImage';

**Time allocation**: 10 mins

## Soil monitoring

### What is drought 

Drought is difficult to define because its meaning varies from region to region. In Bali, for example, drought is considered to be a period of six days without rain; in the desert regions, it is logically quite different. In general, drought occurs when there is a lack of rainfall over a prolonged period of time that leads to a shortage of water for an activity, a group of people or the environment. 

Droughts are divided into four types: 

* Meteorological - negative deviation of rainfall from normal over a period of time.
* Agricultural - soil drought, lack of moisture for crops 
* Hydrological - significant reduction in water levels 
* Socio-economic - impacts of drought on quality of life 

On the other hand, high soil moisture can also cause problems. For example, waterlogged soil complicates agricultural work during sowing or harvesting. It is therefore important to monitor the soil and especially soil moisture. With IoT monitoring, for example, we can irrigate more precisely and thus increase crop yields while saving water. 

### Soil water potential 

The water availability for plants is determined by the water potential of the soil. More precisely, it is the force that a plant must overcome to obtain water from the soil and the force that determines the distribution of soil moisture and the transport of solutions through the soil. The value of soil water potential is most often expressed in units of pressure and negative values. For example, if it is 0 MPa, it is full water capacity, all pores are filled with water and the plant has problems getting enough oxygen. If the values are in the range -0.005 to -0.015 MPa, it is a field water capacity, water is in the capillary pores and the plant has enough water and air. The wilting point occurs at -1.5 MPa, when transpiration exceeds water uptake by the wilting plant. 

### How the soil is monitored

A common method of measuring soil moisture is the resistivity method. Such a sensor works on a trivial principle - it measures the conductivity between two electrodes. If the soil is moist, you get a higher conductivity (lower resistance) and vice versa. The electrodes are therefore plated over a large area to increase the contact area. A complication with this method of measurement is oxidation. 

Therefore, the capacitance method is a more suitable method. This is a similar principle to that of smartphone touchscreens. Your finger changes the dielectric properties when it touches the glass. Just briefly - the dielectric is the material and the environment you have around the electrodes. Also, water changes dielectric properties when it gets between the electrodes. In other words: Two pieces of metal (electrodes) have different capacitance to each other when air is there or when water is there. It's the same when you put them in dry soil versus wet soil. 

At HARDWARIO we have developed a fully digital Soil Sensor, with a wide power range from 2.8V to 5.5V (Arduino compatible). It uses an industry-standard 1-Wire bus and allows multiple sensors to be connected in parallel (the number of sensors is virtually unlimited). It is fully sealed with silicone and can of course be submerged in water. And we will experiment with this sensor.