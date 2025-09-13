---
slug: nadefinuj-barevne-efekty-led-pasku
title: Define color effects for the LED strip
---

## 9. Colors and Effects

It would be a shame not to light up the LED lights in their full range, so don’t hesitate to try, for example, the command `node/power-controller:0/led-strip/-/effect/set`, to which you pass the message:  

```json
{"type":"rainbow", "wait":10}
```

Are your eyes hurting from too much brightness? `node/power-controller:0/led-strip/-/brightness/set` takes values from 0–100 as the message and sets the brightness.

## 10. Addressing
The LED strip can also be addressed per individual LED using `node//led-strip/-/set-pixel/set`, the message then contains information like `{"type":"rainbow", "wait":10}`.

```json
{"type":"rainbow", "wait":10}
```

Are your eyes hurting from too much brightness? `node/power-controller:0/led-strip/-/brightness/set` takes values from 0–100 as the message and sets the brightness.

## 11. Summary

You have paired the Power Module with firmware for the LED strip.  
You know how to light up the LED strip in different colors and even add effects.