# Layer 1 SOP: UI Architecture & GoHighLevel (GHL) Embed Specification

## 1. Purpose
Define the design tokens, visual components, layout hierarchy, and responsive embedding rules for the "Moon in Motion" web application inside GoHighLevel memberships and standalone viewports.

## 2. Design Tokens & Palette
- **Background Root**: `#FBF9F5` (Warm luxury linen paper)
- **Container / Card Background**: `#F3EFE6` (Subtle warm parchment elevation)
- **Card Border / Divider**: `rgba(20, 20, 20, 0.08)` / `rgba(26, 130, 133, 0.15)`
- **Typography Primary**: `#141414` (Deep obsidian charcoal)
- **Typography Secondary**: `#5A554E` (Muted warm taupe-gray)
- **Typography Accent Serif**: `EB Garamond`, `Baur Bodoni`, serif
- **Typography Modern Sans**: `Raleway`, `Inter`, -apple-system, sans-serif
- **Accent Pops**:
  - **Teal**: `#1A8285` (Creative intuition, clarity, focus)
  - **Burnt Orange**: `#C94A10` (Active momentum, execution, launch)
  - **Blush Red**: `#D95D69` (Integrity, boundary delineation, heart-anchoring)
  - **Gold Sheen**: `#C5A059` / `#D4AF37` (Subtle metallic celestial highlight)

## 3. UI Component Breakdown
1. **App Shell**:
   - Editorial Header with "Moon in Motion" branding, date controls, quick navigation ("Today", "Next New Moon", "Next Full Moon").
   - Live Today Status Bar showcasing illumination badge, cycle quarter, and one-line strategic prompt.
2. **Interactive Calendar Grid**:
   - Month Selector with previous/next month controls.
   - Day Cells displaying: Day number, SVG moon phase icon, illumination badge, active state highlight.
   - Phase indicators for Key Moons (New, Full, First Quarter, Third Quarter).
3. **Daily Lunar Reading & Strategic Blueprint Panel**:
   - Side-by-side or stacked responsive layout.
   - High-definition dynamic Moon Phase glyph with interactive glow.
   - Phase title, illumination percentage, age in lunar days, and zodiac sign.
   - "Business Meaning & Theme" (Editorial card).
   - "How to Plan" (Strategic inquiry, focus points, energy cadence with Teal badge).
   - "What Needs to be Executed" (Priority actions, "Tuesday Afternoon" concrete action with Burnt Orange badge).
   - "Activation Wisdom & Somatic Anchor" (Direct transmission quote and physical grounding practice with Blush Red badge).
4. **Interactive Activation Library Modal / Drawer**:
   - In-depth transcripts and guidance for the 5 key activations (New Moon, Waxing Moon, Full Moon, Waning Moon, Moon Meditation).

## 4. GoHighLevel (GHL) Embed Invariants
- Self-contained HTML/CSS/JS with zero external runtime build dependencies.
- Fluid auto-resizing with clean mobile touch targets (min 44px).
- Secure `postMessage` or standalone URL support for seamless iframe embedding inside GHL custom code blocks.
