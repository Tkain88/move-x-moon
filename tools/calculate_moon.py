#!/usr/bin/env python3
"""
tools/calculate_moon.py
Deterministic astronomical moon calculation engine.
Calculates exact phase, illumination percentage, age, and zodiac sign for any Gregorian date.
"""

import math
import datetime
from typing import Dict, Any

SYNODIC_MONTH = 29.53058867  # Average lunar cycle in days
KNOWN_NEW_MOON_JDN = 2451549.5 + 0.259722  # Reference New Moon epoch: 2000-01-06 18:14 UTC

ZODIAC_SIGNS = [
    "Aries", "Taurus", "Gemini", "Cancer",
    "Leo", "Virgo", "Libra", "Scorpio",
    "Sagittarius", "Capricorn", "Aquarius", "Pisces"
]

def gregorian_to_jdn(year: int, month: int, day: int, hour: float = 12.0) -> float:
    """Convert a Gregorian calendar date to Julian Day Number (JDN)."""
    if month <= 2:
        year -= 1
        month += 12
    a = math.floor(year / 100)
    b = 2 - a + math.floor(a / 4)
    jdn = math.floor(365.25 * (year + 4716)) + math.floor(30.6001 * (month + 1)) + day + b - 1524.5
    jdn += hour / 24.0
    return jdn

def get_moon_phase_info(date_obj: datetime.date) -> Dict[str, Any]:
    """Calculate astronomical moon details for a given date."""
    jdn = gregorian_to_jdn(date_obj.year, date_obj.month, date_obj.day, hour=12.0)
    
    # Days since reference epoch
    days_since_new = jdn - KNOWN_NEW_MOON_JDN
    cycles = days_since_new / SYNODIC_MONTH
    cycle_fraction = cycles - math.floor(cycles)
    age = cycle_fraction * SYNODIC_MONTH
    
    # Phase angle in radians (0 to 2*pi)
    phase_angle = cycle_fraction * 2 * math.pi
    
    # Illumination percentage (0% to 100%)
    illumination = ((1 - math.cos(phase_angle)) / 2.0) * 100.0
    
    # Classify into 8 distinct phases
    # Age ranges:
    # New Moon: [0, 1.84] or [27.69, 29.53]
    # Waxing Crescent: (1.84, 5.53]
    # First Quarter: (5.53, 9.22]
    # Waxing Gibbous: (9.22, 12.91]
    # Full Moon: (12.91, 16.61]
    # Waning Gibbous: (16.61, 20.29]
    # Third Quarter: (20.29, 23.98]
    # Waning Crescent: (23.98, 27.69]
    
    if age < 1.845 or age >= 27.685:
        phase_key = "new_moon"
        phase_name = "New Moon"
        cycle_quarter = "Q1 - Vision Seeding & Origin"
        stage_type = "Primary Phase"
    elif age < 5.535:
        phase_key = "waxing_crescent"
        phase_name = "Waxing Crescent"
        cycle_quarter = "Q1 - Initial Traction & Dot Connecting"
        stage_type = "Intermediate Phase"
    elif age < 9.225:
        phase_key = "first_quarter"
        phase_name = "First Quarter"
        cycle_quarter = "Q2 - Structural Integrity & Decision Point"
        stage_type = "Primary Phase"
    elif age < 12.915:
        phase_key = "waxing_gibbous"
        phase_name = "Waxing Gibbous"
        cycle_quarter = "Q2 - Capacity Expansion & Momentum"
        stage_type = "Intermediate Phase"
    elif age < 16.610:
        phase_key = "full_moon"
        phase_name = "Full Moon"
        cycle_quarter = "Q3 - Maximum Illumination & Harvest"
        stage_type = "Primary Phase"
    elif age < 20.295:
        phase_key = "waning_gibbous"
        phase_name = "Waning Gibbous"
        cycle_quarter = "Q3 - Wisdom Distribution & Synthesis"
        stage_type = "Intermediate Phase"
    elif age < 23.985:
        phase_key = "third_quarter"
        phase_name = "Third Quarter"
        cycle_quarter = "Q4 - Cleanse, Audit & Sovereign Boundaries"
        stage_type = "Primary Phase"
    else:
        phase_key = "waning_crescent"
        phase_name = "Waning Crescent"
        cycle_quarter = "Q4 - Emptying the Vessel & Deep Rest"
        stage_type = "Intermediate Phase"

    # Ecliptic longitude calculation for Moon Zodiac sign
    t = (jdn - 2451545.0) / 36525.0
    # Mean longitude of Moon (degrees)
    l_prime = (218.3164477 + 481267.88128 * t) % 360.0
    # Mean elongation of Moon
    d = (297.8501921 + 445267.11140 * t) % 360.0
    # Sun's mean anomaly
    m = (357.5291092 + 35999.05029 * t) % 360.0
    # Moon's mean anomaly
    m_prime = (134.9633964 + 477198.867505 * t) % 360.0
    
    # Moon ecliptic longitude approximation
    moon_lon = l_prime + 6.289 * math.sin(math.radians(m_prime)) \
               - 1.274 * math.sin(math.radians(m_prime - 2 * d)) \
               + 0.658 * math.sin(math.radians(2 * d)) \
               - 0.186 * math.sin(math.radians(m))
    moon_lon = moon_lon % 360.0
    zodiac_idx = int(moon_lon / 30.0) % 12
    zodiac_sign = ZODIAC_SIGNS[zodiac_idx]

    return {
        "date": date_obj.isoformat(),
        "phase_key": phase_key,
        "phase_name": phase_name,
        "illumination": round(illumination, 1),
        "age_in_days": round(age, 1),
        "cycle_quarter": cycle_quarter,
        "stage_type": stage_type,
        "zodiac_sign": zodiac_sign,
        "phase_angle_degrees": round(math.degrees(phase_angle), 1)
    }

if __name__ == "__main__":
    test_dates = [
        datetime.date(2026, 8, 25),
        datetime.date(2026, 8, 28),
        datetime.date(2026, 9, 11),
        datetime.date(2026, 9, 26)
    ]
    print("Testing calculate_moon.py across sample dates:")
    for d in test_dates:
        res = get_moon_phase_info(d)
        print(f"Date: {res['date']} | Phase: {res['phase_name']} ({res['illumination']}%) | Sign: {res['zodiac_sign']} | Age: {res['age_in_days']}d")
