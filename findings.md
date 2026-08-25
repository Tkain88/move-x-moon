# Project Memory: Findings

## Discovery & Requirements
- **North Star**: An interactive, high-end Lunar Business Guiding Star web application/embed. Users view an interactive calendar, click any date, and receive:
  - Exact Moon Phase calculation and visual depiction.
  - Business Meaning & Strategic Alignment.
  - Planning Framework ("How to plan").
  - Execution Directives ("What needs to be executed").
  - Ritual / Activation wisdom drawn from the activation transcripts.
- **Integrations & Hosting**:
  - Embedded inside GoHighLevel (GHL) Membership via iframe / direct link.
  - Portable, responsive, zero-friction client-side architecture.
  - Target build/repo folder: `Moon + Motion` (for git commit and push).
- **Source of Truth**:
  - `Transcripts copy/` (5 activations: New Moon, Waxing Moon, Full Moon, Waning Moon, Moon Meditation).
  - Astronomical moon phase calculation algorithm for accurate date-to-phase mapping.
- **Design & Aesthetics**:
  - **Background**: Warm paper / luxury parchment tone (e.g. `#FBF9F5` / `#F7F4EC` / `#F4EFE6`). NOT black.
  - **Text**: Deep rich black / charcoal (`#111111` / `#1A1A1A`).
  - **Accent Pops**: Teal (`#1A8285` / `#0D7C80`), Burnt Orange (`#C94A10` / `#D4541B`), Blush Red (`#D95D69` / `#C74B50`).
  - **Typography**: Editorial Serif headings (EB Garamond / Bodoni), Raleway accents, Lato / Inter body.
  - **Feel**: "Other level", futuristic yet soulful, celestial-meets-modern-editorial.
- **Voice Guidelines**:
  - Follow `Voice`: warm, dry, grounded, worldly, sharp, no emojis in copy.
  - Bridge the cosmos with tangible business Tuesday-afternoon reality.

## Constraints
- Local testing uses `.tmp/` for intermediate data processing.
- Build output resides in `Moon + Motion/`.
- No emojis in any client-facing copy.
