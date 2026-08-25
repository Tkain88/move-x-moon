# Project Constitution: claude.md

## Data Schemas

### 1. Lunar Calendar Day Reading Schema (`LunarDayPayload`)
```json
{
  "date": "2026-08-25",
  "astronomy": {
    "phase_key": "waxing_gibbous",
    "phase_name": "Waxing Gibbous",
    "illumination": 88.4,
    "age_in_days": 11.2,
    "zodiac_sign": "Capricorn",
    "cycle_quarter": "Q2 - Expansion & Dot-Connecting"
  },
  "business_guidance": {
    "core_frequency": "Momentum & Capacity Expansion",
    "strategic_theme": "Connecting the Dots & Refining Form",
    "business_meaning": "The foundation is locked; you are now actively testing and refining your delivery in the field. This is not the time to second-guess the vision—it is the time to build structural integrity and expand capacity.",
    "planning_framework": {
      "focus_areas": [
        "Capacity testing and infrastructure stress-tests",
        "Refining sales conduits and messaging flow",
        "Following up on warm dots and active relationships"
      ],
      "strategic_inquiry": "Where is my delivery experiencing friction, and what simple tweak allows more current to flow?",
      "energy_cadence": "High projective focus with grounded bodily anchors"
    },
    "execution_directives": {
      "priority_actions": [
        "Reach out directly to 3 key strategic relationships or warm leads.",
        "Review workflow bottlenecks before full launch delivery.",
        "Ensure fulfillment systems are ready to receive volume."
      ],
      "what_to_avoid": "Starting completely new unvetted concepts or pivoting out of momentary impatience.",
      "tuesday_afternoon_action": "Send that pending voice note or proposal you drafted yesterday. The field is primed."
    },
    "activation_wisdom": {
      "source_activation": "Waxing Moon Activation",
      "somatic_anchor": "Skeletal structure alignment: sit tall, feel the spinal column supporting your capacity to hold volume.",
      "core_transmission": "Aligned action is not about forced immediate gratification—it connects dots in the field that reveal your full capacity."
    }
  }
}
```

### 2. Lunar Phase Strategic Mapping Reference
- **New Moon (0% - 3%)**: Vision Seeding, Deep Origin, The Unknown, Soul Direction, Big Dreaming with Earth Anchors.
- **Waxing Crescent (4% - 49%)**: Initial Traction, Dot-Connecting, Micro-commitments, Stepping onto the Earth Grid.
- **First Quarter (50%)**: Decision Point, Structural Integrity, Overcoming Friction, Re-establishing Boundaries.
- **Waxing Gibbous (51% - 99%)**: Momentum, Capacity Expansion, System Optimization, Pre-Launch Refinement.
- **Full Moon (100%)**: Illumination, Harvest, Celebration, Full Disclosure, Gratitude, Receiving, Boundary Check.
- **Waning Gibbous / Disseminating (99% - 51%)**: Distribution, Sharing Wisdom, Teaching, Evaluating Reception.
- **Third Quarter (50%)**: Cleanse & Audit, Saying The "No" That Fuels The Greater "Yes", Cutting Lineage Contracts.
- **Waning Crescent / Balsamic (49% - 0%)**: Surrender, Deep Rest, Emptying the Vessel, Incubation for the Next Cycle.

---

## Behavioral Rules & Constitution
1. **Deterministic Business Logic**: Never guess lunar dates or business meanings. All date-to-phase calculations follow precise astronomical formulas; interpretations draw directly from the five core activation transmissions.
2. **Brand Voice Invariant**:
   - Persona: Warm, dry, grounded, worldly, soul-deep, Caribbean/London savvy.
   - Tone: "Lovingly catty gay male best friend" energy—sharp, affectionate, deeply on your side.
   - Grounding Principle: The stars always reference the feet on the ground.
   - **STRICT PROHIBITION**: Absolutely NO emojis in any client-facing copy.
3. **Design & Aesthetic Invariants**:
   - **Background**: Warm luxury paper / linen parchment (`#FBF9F5`, container backgrounds `#F3EFE6` / `#EBE5D8`). No black backgrounds.
   - **Typography (Three-Typeface System)**:
     - **Headlines & Titles**: `Oswald` (weight 600, all-caps, slight letter-spacing) — leads every layout.
     - **Subtitles & Supporting Voice**: `EB Garamond` (italic, weight 500) — sized smaller, like a handwritten note under a printed title.
     - **Body Copy**: `Lora` (regular 400) — carries the narrative without pulling focus.
   - **Text**: Deep rich charcoal / black (`#141414` / `#222222`).
   - **Vibrant Accent Pops**:
     - Teal (`#1A8285` / `#007C82`) -> Creative / Insight / Clarity
     - Burnt Orange (`#C94A10` / `#D4541B`) -> Active / Launch / Execution
     - Blush Red (`#D95D69` / `#C74B50`) -> Heart / Integrity / Boundaries
4. **GHL Integration Invariant**:
   - Zero external runtime server dependencies required; self-contained, responsive, iframe-embeddable in GoHighLevel membership portals and accessible via standalone URL.
   - Export and deploy production build to `Moon + Motion/`.

---

## Architectural Invariants (A.N.T. 3-Layer)
1. **Layer 1: Architecture (`architecture/`)**: Markdown SOPs describing exact calculation logic, phase mapping, and UI components.
2. **Layer 2: Navigation**: Orchestration layer routing astronomical calculations, transcript data, and UI renderers.
3. **Layer 3: Tools (`tools/`)**: Modular, testable Python & JS utilities.
4. **Intermediate Files**: All temp/scratch files reside in `.tmp/`.
5. **Output Repository**: `Moon + Motion/` contains clean, production-ready static assets.

---

## Maintenance & Release Log
- **2026-08-25 (v1.1.0)**:
  - Rebranded application to **MOON x MOTION** with enlarged luxury celestial logo and Oswald 600 headlines.
  - Implemented 3-typeface typography system: Oswald (headlines/titles), EB Garamond Italic (subtitles/quotes), and Lora (body narrative).
  - Upgraded hero layout to full-width panoramic desert sunset with left-aligned editorial text and soft paper scrim.
  - Streamlined UI by keeping raw activation transcripts strictly backend/internal, focusing the frontend on the daily business intelligence, tactical planning, execution checklist, and somatic anchors.
- **2026-08-25 (v1.0.0)**:
  - Initialized deterministic astronomical calculation engine (`calculate_moon.py` and `lunar_data.js`).
  - Extracted transmission wisdom from all 5 activation transcripts (`extract_activation_knowledge.py`).
  - Built editorial web application with warm paper background, rich black typography, pops of teal, burnt orange, and blush red.
  - Validated zero emoji invariant across all client files.
  - Automated build suite validated via `python3 tools/build_site.py`.
