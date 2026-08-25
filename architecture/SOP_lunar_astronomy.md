# Layer 1 SOP: Astronomical Moon Phase & Illumination Calculation

## 1. Purpose
Define the deterministic mathematical algorithm for calculating the moon's phase, illumination percentage, age in lunar days, and zodiac sign for any given Gregorian calendar date (UTC).

## 2. Astronomical Constants
- **Synodic Month (Mean Lunar Cycle)**: 29.53058867 days
- **Known New Moon Reference Epoch (J2000 Base)**:
  - 2000-01-06 18:14 UTC (Julian Date `2451549.5 + 0.259722`)
  - Alternatively: Reference New Moon on 2026-01-18 19:52 UTC or 1970-01-07 20:35 UTC.
- **Lunar Phase Key Classifications**:
  1. **New Moon**: Phase angle `0° - 22.5°` or `337.5° - 360°` (Illumination: `0% - 3%`, Age: `0.0 - 1.84` days)
  2. **Waxing Crescent**: Phase angle `22.5° - 67.5°` (Illumination: `4% - 49%`, Age: `1.85 - 5.53` days)
  3. **First Quarter**: Phase angle `67.5° - 112.5°` (Illumination: `50%`, Age: `5.54 - 9.22` days)
  4. **Waxing Gibbous**: Phase angle `112.5° - 157.5°` (Illumination: `51% - 99%`, Age: `9.23 - 12.91` days)
  5. **Full Moon**: Phase angle `157.5° - 202.5°` (Illumination: `100%`, Age: `12.92 - 16.61` days)
  6. **Waning Gibbous / Disseminating**: Phase angle `202.5° - 247.5°` (Illumination: `99% - 51%`, Age: `16.62 - 20.29` days)
  7. **Third / Last Quarter**: Phase angle `247.5° - 292.5°` (Illumination: `50%`, Age: `20.30 - 23.98` days)
  8. **Waning Crescent / Balsamic**: Phase angle `292.5° - 337.5°` (Illumination: `49% - 0%`, Age: `23.99 - 29.53` days)

## 3. Algorithm Specification
1. Convert input date `(Year, Month, Day)` to Julian Day Number (JDN).
2. Calculate days elapsed since standard astronomical epoch.
3. Compute mean moon age modulo `29.53058867`.
4. Calculate illumination:
   $$\text{Illumination} = \frac{1 - \cos(\text{Phase Angle})}{2} \times 100$$
5. Map age and illumination to the 8 designated phase keys and cycle quarters (Q1: Seeding, Q2: Expansion, Q3: Harvest/Fulfillment, Q4: Releasing/Audit).
6. Calculate approximate Moon Zodiac sign based on tropical ecliptic longitude.

## 4. Error Handling & Edge Cases
- Leap years and timezone boundary crossings default to standard UTC noon for calendar day representation.
- Illumination is rounded to 1 decimal place for clean UI display.
