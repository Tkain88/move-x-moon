# Project Memory: Task Plan

## Phase 1: Blueprint (Vision & Logic)
- [x] Answer discovery questions (5 questions confirmed).
- [x] Define Data Schema (`LunarDayPayload`) in `claude.md`.
- [x] Lock Brand Voice (no emojis, grounded/sharp/warm) and Aesthetic Rules (warm paper, teal/burnt orange/blush pops, black text, editorial typography).
- [x] User approval on Blueprint.

## Phase 2: Link (Connectivity & Foundation)
- [x] Create directory structure (`architecture/`, `tools/`, `.tmp/`, `Moon + Motion/`).
- [x] Build & test verification tool for astronomical moon calculations and transcript data extraction.

## Phase 3: Architect (The 3-Layer Build)
- [x] **Layer 1: Architecture (`architecture/`)**:
  - `SOP_lunar_astronomy.md` (astronomical date-to-phase and illumination calculation).
  - `SOP_business_mapping.md` (mapping 8 phases and intermediate stages to business meaning, planning, execution, and somatic anchors from transcripts).
  - `SOP_ui_and_ghl_embed.md` (interactive calendar, detail view, responsive GHL embed specifications).
- [x] **Layer 3: Tools (`tools/`)**:
  - `tools/calculate_moon.py` (high precision astronomical phase and illumination engine).
  - `tools/extract_activation_knowledge.py` (extracts activation wisdom from transcripts and builds complete deterministic dataset for any year/month/day).
  - `tools/build_site.py` (assembles self-contained production bundle into `Moon + Motion/`).

## Phase 4: Stylize (Refinement & UI)
- [x] Build luxury "Moon in Motion" interactive web application in `Moon + Motion/`:
  - Warm luxury paper texture & background palette (`#FAF7F2` / `#F4EFE6`).
  - Deep rich black text and typography (`EB Garamond` + `Raleway` + `Inter`).
  - Vibrant pops of Teal (`#1A8285`), Burnt Orange (`#C94A10`), and Blush Red (`#D95D69`).
  - Integrated Tash's full moon desert portrait into the hero showcase card with gold accent framing.
  - Interactive Monthly/Yearly Calendar with dynamic SVG lunar phase icons & illumination glow.
  - Daily Reading drawer/modal featuring:
    - Current Moon Phase & Visual representation
    - Business Meaning & Strategic Alignment
    - "How to Plan" (Inquiries & Energy Cadence)
    - "What Needs to be Executed" (Concrete Actions & "Tuesday Afternoon" step)
    - Somatic Anchor & Activation Wisdom with embodiment thumbnail
  - Quick-switch for Today, New Moon, Full Moon, and major cycle anchors.
  - Integrated full activation transcripts library for all 5 activations.
  - Seamless responsive layout optimized for mobile, desktop, and GHL iframe embedding.

## Phase 5: Trigger (Deployment & Cloud Readiness)
- [x] Validated production build suite with `python3 tools/build_site.py`.
- [x] Verified zero emojis across all client-facing copy.
- [x] Validated JavaScript calculation engine across multiple test dates with `node .tmp/test_js_engine.js`.
- [x] Production files in `Moon + Motion/` ready for Git commit, push, and GHL embed.
- [x] Maintenance log documented in `claude.md`.
