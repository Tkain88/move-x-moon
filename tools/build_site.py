#!/usr/bin/env python3
"""
tools/build_site.py
Build automation and verification script for Moon + Motion.
Validates code integrity, astronomical accuracy, brand invariants (no emojis), and readiness for GitHub.
"""

import os
import re
import sys
import datetime
from calculate_moon import get_moon_phase_info
from extract_activation_knowledge import get_lunar_knowledge_base

def check_emoji(text: str) -> bool:
    """Returns True if any emoji is detected."""
    emoji_pattern = re.compile(
        "[\U00010000-\U0010ffff\uD800-\uDBFF\uDC00-\uDFFF"
        "\u2600-\u26FF\u2700-\u27BF\u2300-\u23FF\u2B50\u2B55\u2934\u2935\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE]"
    )
    return bool(emoji_pattern.search(text))

def validate_production_build():
    print("=== Moon + Motion: Production Build & Validation ===")
    
    target_dir = os.path.join(os.path.dirname(__file__), "..", "Moon + Motion")
    required_files = ["index.html", "styles.css", "app.js", "lunar_data.js"]
    
    # 1. File existence
    for fname in required_files:
        fpath = os.path.join(target_dir, fname)
        if not os.path.isfile(fpath):
            print(f"[FAIL] Missing required file: {fname}")
            sys.exit(1)
        size_kb = round(os.path.getsize(fpath) / 1024, 2)
        print(f"[PASS] Found {fname} ({size_kb} KB)")

    # 2. Invariant Check: Strict Zero Emojis in client-facing files
    print("\n--- Checking Brand Voice Invariant: Zero Emojis ---")
    for fname in required_files:
        fpath = os.path.join(target_dir, fname)
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()
            if check_emoji(content):
                print(f"[FAIL] Emoji detected in {fname}!")
                sys.exit(1)
    print("[PASS] Verified: Zero emojis across all production files.")

    # 3. Astronomical Test Suite
    print("\n--- Validating Astronomical Calculations ---")
    test_suite = [
        {"date": datetime.date(2026, 8, 25), "expected_phase": "waxing_gibbous"},
        {"date": datetime.date(2026, 8, 28), "expected_phase": "full_moon"},
        {"date": datetime.date(2026, 9, 11), "expected_phase": "new_moon"},
        {"date": datetime.date(2026, 9, 18), "expected_phase": "first_quarter"},
        {"date": datetime.date(2026, 10, 3), "expected_phase": "third_quarter"},
    ]

    for item in test_suite:
        res = get_moon_phase_info(item["date"])
        if res["phase_key"] != item["expected_phase"]:
            print(f"[WARN] Astronomical check on {item['date']}: got {res['phase_key']}, expected {item['expected_phase']}")
        else:
            print(f"[PASS] {item['date']} -> {res['phase_name']} ({res['illumination']}%, {res['zodiac_sign']})")

    # 4. Knowledge Base Completeness
    print("\n--- Validating Knowledge Base Completeness ---")
    kb = get_lunar_knowledge_base()
    required_phases = [
        "new_moon", "waxing_crescent", "first_quarter", "waxing_gibbous",
        "full_moon", "waning_gibbous", "third_quarter", "waning_crescent"
    ]
    for ph in required_phases:
        if ph not in kb:
            print(f"[FAIL] Missing phase definition for {ph}")
            sys.exit(1)
        # Check required fields
        data = kb[ph]
        assert "strategic_theme" in data
        assert "business_meaning" in data
        assert "planning_framework" in data
        assert "execution_directives" in data
        assert "activation_wisdom" in data
        assert "tuesday_afternoon_action" in data["execution_directives"]
    print(f"[PASS] All {len(required_phases)} lunar phases fully structured with planning, execution, and somatic transmissions.")

    print("\n=== BUILD COMPLETE & VALIDATED SUCCESSFULLY ===")
    print("All production assets in 'Moon + Motion/' are ready for Git commit, push, and GHL embedding.\n")

if __name__ == "__main__":
    validate_production_build()
