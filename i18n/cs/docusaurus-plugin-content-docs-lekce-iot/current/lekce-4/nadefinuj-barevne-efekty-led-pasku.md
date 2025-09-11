---
slug: nadefinuj-barevne-efekty-led-pasku
title: Nadefinuj barevné efekty LED pásku
---

## 9. Barvy a efekty
Byla by škoda nerozsvítit LED světla v plném rozsahu, proto se nebojte vyzkoušet například příkaz `node/power-controller:0/led-strip/-/effect/set`, kterému ale předáte zprávu 
```json
{"type":"rainbow", "wait":10}
```

Bolí vás oči s přílišného jasu? `node/power-controller:0/led-strip/-/brightness/set` bere jako zprávu hodnoty 0-100 a nastaví jas.

## 10. Adresace
Pásek je možné adresovat po jednotlivých LEDkách pomocí node//led-strip/-/set-pixel/set, zpráva pak obsahuje informace 
```json
{"type":"rainbow", "wait":10}
```

Bolí vás oči s přílišného jasu? `node/power-controller:0/led-strip/-/brightness/set` bere jako zprávu hodnoty 0-100 a nastaví jas.

## 11. Shrnutí

Máte spárovaný Power Module s firmware pro LED pásek.
Umíte rozsvítit LED pásek v různých barvách a přidat i efekty.