/**
 * Moon + Motion: Lunar Data & Astronomical Calculation Engine
 * Deterministic client-side astronomical algorithms and business knowledge base.
 */

const SYNODIC_MONTH = 29.53058867;
const KNOWN_NEW_MOON_JDN = 2451549.5 + 0.259722; // Reference New Moon epoch: 2000-01-06 18:14 UTC

const ZODIAC_SIGNS = [
  "Aries", "Taurus", "Gemini", "Cancer",
  "Leo", "Virgo", "Libra", "Scorpio",
  "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

function formatLocalDateString(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

const LUNAR_KNOWLEDGE_BASE = {
  "new_moon": {
    "phase_key": "new_moon",
    "phase_name": "New Moon",
    "illumination_range": "0% - 3%",
    "color_accent": "teal",
    "strategic_theme": "Seeding Big, Bold, Beautiful Visions",
    "core_frequency": "Dark Void Receptivity & Delicious Audacity",
    "business_meaning": "This is where the soul schools the human, darling. Close the spreadsheets for an hour and dare to imagine an offer so delightfully stretchy it gives you butterflies. We aren't doing vague lottery-ticket daydreaming here; we're planting roots deep into the physical earth so your vision has actual scaffolding to stand on.",
    "planning_framework": {
      "focus_areas": [
        "Dreaming up the grand, delicious architecture for your upcoming business cycle",
        "Protecting your quiet incubation bubble before broadcasting anything to the crowd",
        "Aligning your intuitive third-eye clarity with a full-body somatic YES"
      ],
      "strategic_inquiry": "What audacious business dream feels delightfully uncomfortable for you right now, and how are you anchoring it into the real world today?",
      "energy_cadence": "Internal incubation, spacious reflection, low external broadcasting"
    },
    "execution_directives": {
      "priority_actions": [
        "Draft the raw, unfiltered vision document for your next offer, launch, or creative pivot.",
        "Audit past project baggage and intentionally release any half-hearted commitments.",
        "Map the first three physical milestones needed to give real form to this new seed."
      ],
      "what_to_pause": [
        "Premature public broadcasting before the internal container has actually formed.",
        "Asking for unvetted opinions from people who can barely manage their own Tuesday."
      ],
      "tuesday_afternoon_action": "Open a blank page and write down the single most audacious, high-leverage offer you want to bring into the world—no editing, no shrinking."
    },
    "activation_wisdom": {
      "source_activation": "New Moon Activation",
      "somatic_anchor": "Switch the light on at the base of your spine and the soles of your feet. Feel the earth come right up to meet you from an activated state.",
      "core_transmission": "When we speak the language of new beginnings, we speak the language of the unknown. Dream big dreams that root deep into the core of your earth.",
      "activation_excerpt": "Notice how your feet are meeting the earth beneath you from that lit state. Your activation is demanding a reflection from the earth that is also activated. We are opening up for ourselves as a physical entity to be schooled by ourselves as an infinite entity."
    }
  },
  "waxing_crescent": {
    "phase_key": "waxing_crescent",
    "phase_name": "Waxing Moon",
    "illumination_range": "4% - 49%",
    "color_accent": "teal",
    "strategic_theme": "Connecting the Dots & Making Contact",
    "core_frequency": "Micro-Commitments & Stepping onto the Earth Grid",
    "business_meaning": "Just because only a sliver of the moon is showing doesn't mean the rest went on holiday. In your business, this phase is all about making contact with the grid. Aligned momentum doesn't require fireworks; sending three warm voice notes or publishing that raw initial thinking activates real current in the field.",
    "planning_framework": {
      "focus_areas": [
        "Establishing low-friction connection points with potential clients, allies, and dream collaborators",
        "Testing early offer concepts through direct, human-to-human conversations",
        "Building the simple daily rhythm that keeps your operations humming without burnout"
      ],
      "strategic_inquiry": "Which single dot can you connect today that tells the market you are switched on, magnetic, and open for business?",
      "energy_cadence": "Curious, responsive, outward-stepping momentum"
    },
    "execution_directives": {
      "priority_actions": [
        "Send 3 personalized voice messages or emails to past collaborators or warm leads.",
        "Sketch out the pilot curriculum, scope of work, or service deliverable outline.",
        "Set up the calendar booking conduits and payment links so people can actually pay you."
      ],
      "what_to_pause": [
        "Over-engineering a 12-step automation before you've spoken to 3 live human beings.",
        "Waiting for 100% certainty before sharing your brilliant perspective."
      ],
      "tuesday_afternoon_action": "Record a 90-second voice note to a dream collaborator introducing a brilliant concept with zero pressure and 100% warmth."
    },
    "activation_wisdom": {
      "source_activation": "Waxing Moon Activation",
      "somatic_anchor": "Skeletal structure alignment: Feel your spine, pelvis, and rib cage lit up, wide, and fully supported by the ground.",
      "core_transmission": "Aligned action acts as an activation for connecting the dots. Consistency in connecting dots reveals your full capacity.",
      "activation_excerpt": "When the moon is waxing, just because we can only see a sliver doesn't mean the rest isn't there. We are opening up to reveal more and more of our capacity by expressing in the world and allowing the dots to be connected."
    }
  },
  "first_quarter": {
    "phase_key": "first_quarter",
    "phase_name": "Waxing Moon",
    "illumination_range": "50%",
    "color_accent": "burnt_orange",
    "strategic_theme": "Structural Integrity & Decisive Action",
    "core_frequency": "Fortifying Boundaries, Cutting Indecision & Decisive Will",
    "business_meaning": "The halfway mark to full illumination always brings a little friction test. Doubts love to creep in right here to check whether your structure actually has integrity. Stand tall in your spine, eliminate decision fatigue, stop tolerating messy boundaries, and make the executive call you've been putting off.",
    "planning_framework": {
      "focus_areas": [
        "Removing bottlenecks in your client onboarding and operational delivery",
        "Locking in firm pricing, ironclad contracts, and explicit payment deadlines",
        "Making swift, decisive executive calls on lingering ambiguities"
      ],
      "strategic_inquiry": "Where is hesitation costing you revenue or peace of mind, and what clean decision clears the air immediately?",
      "energy_cadence": "Assertive, focused, highly disciplined execution"
    },
    "execution_directives": {
      "priority_actions": [
        "Review active proposals and establish explicit, polite acceptance deadlines.",
        "Say no to non-essential meeting invites that clutter your prime creative morning hours.",
        "Fix or delegate that one technical glitch you have been grumbling about for weeks."
      ],
      "what_to_pause": [
        "Discounting your pricing or compromising core terms out of temporary scarcity.",
        "Procrastinating on uncomfortable administrative or contractual decisions."
      ],
      "tuesday_afternoon_action": "Make the one pending executive decision you've been circling all week, send the email, and don't look back."
    },
    "activation_wisdom": {
      "source_activation": "Waxing Moon Activation",
      "somatic_anchor": "Expanded rib cage and spine integrity; feeling the grounded, sovereign authority of your skeletal frame.",
      "core_transmission": "We take this structured framework and allow it to be empowered, strengthened, and for the integrity at the center of it to be established.",
      "activation_excerpt": "Everything that is giving you structure, everything that is giving you form, everything holding you together is being filled with your light. From this place comes trust, security, and empowered expansion."
    }
  },
  "waxing_gibbous": {
    "phase_key": "waxing_gibbous",
    "phase_name": "Waxing Moon",
    "illumination_range": "51% - 99%",
    "color_accent": "burnt_orange",
    "strategic_theme": "Capacity Expansion & Pre-Launch Polish",
    "core_frequency": "Momentum, Conduit Testing & High Velocity",
    "business_meaning": "The moon is nearly full and the momentum is building, my love. Your systems, messaging, and capacity are about to handle peak volume. Please don't invent five new side projects right now; double down on stress-testing your existing conduits and getting ready to receive.",
    "planning_framework": {
      "focus_areas": [
        "Stress-testing fulfillment capacity and auditing the end-to-end customer journey",
        "Warming up audience awareness and building delicious anticipation for your launch",
        "Finalizing promotional copy, presentation decks, and technical checkout flows"
      ],
      "strategic_inquiry": "Is your business flowing clear and wide enough so you can receive the clients and money you're calling in?",
      "energy_cadence": "High projective energy, meticulous polish, high output"
    },
    "execution_directives": {
      "priority_actions": [
        "Conduct a full test transaction on your checkout and onboarding sequence on your phone.",
        "Publish key value-driven teasers or case studies that demonstrate proof of concept.",
        "Brief team members or collaborators on launch day responsibilities so everyone is in flow."
      ],
      "what_to_pause": [
        "Starting completely new product lines or restructuring core systems mid-stride.",
        "Letting minor cosmetic perfectionism delay your public delivery."
      ],
      "tuesday_afternoon_action": "Go through your own client onboarding flow on mobile right now. If anything feels clunky, smooth it out immediately."
    },
    "activation_wisdom": {
      "source_activation": "Waxing Moon Activation",
      "somatic_anchor": "Diaphragmatic breathing filling the lungs, witnessing the worldwide grid illuminated.",
      "core_transmission": "You are the center of your universe, lighting up your grid. Open streams naturally for money and resources to flow.",
      "activation_excerpt": "Witnessing that on an entire globe, your grid is activated. Opening up to grow and expand the perspective of what you have the capacity to receive."
    }
  },
  "full_moon": {
    "phase_key": "full_moon",
    "phase_name": "Full Moon",
    "illumination_range": "100%",
    "color_accent": "blush_red",
    "strategic_theme": "Maximum Illumination & The Big Harvest",
    "core_frequency": "Radiant Visibility, Celebration & Unreserved Yes",
    "business_meaning": "The spotlight is fully on you, my love. Everything is visible. This is prime time for public launches, celebrating major wins, and closing sales cycles. The heart is the ultimate reality-creator through gratitude and clarity. Give genuine thanks for what has landed and make your invitation without apology.",
    "planning_framework": {
      "focus_areas": [
        "Delivering public launch events, workshops, webinars, or signature keynotes with full presence",
        "Harvest review: measuring revenue, client intake, and transformative community impact",
        "Celebrating team performance and expressing deep appreciation to your supporters"
      ],
      "strategic_inquiry": "What full-bodied win is ready for your celebration, and what bold invitation are you making today without a single apology?",
      "energy_cadence": "Radiant, expressive, celebratory, magnetic"
    },
    "execution_directives": {
      "priority_actions": [
        "Open the cart or deliver your signature workshop with unshakeable conviction.",
        "Send personalized thank-you notes to top clients, partners, and referrers.",
        "Document immediate financial and qualitative results from this cycle."
      ],
      "what_to_pause": [
        "Operating from depletion or panic during live launch windows.",
        "Hiding behind administrative busywork when your visibility, voice, and charisma are needed."
      ],
      "tuesday_afternoon_action": "Send an unprompted note of appreciation to three people who contributed to your growth this month, then celebrate yourself with something delicious."
    },
    "activation_wisdom": {
      "source_activation": "Full Moon Activation",
      "somatic_anchor": "Heart center radiating golden light through all bodily waters, bloodlines, and energy fields.",
      "core_transmission": "The heart cannot lie; it vibrates blueprints into the subtle field. Say yes to what has been received.",
      "activation_excerpt": "The full moon is really that sense of the fullness of fulfillment. The heart is the musical organ creating blueprints through vibration. Let the vibration of the heart open up to deep-seated gratitude."
    }
  },
  "waning_gibbous": {
    "phase_key": "waning_gibbous",
    "phase_name": "Waning Moon",
    "illumination_range": "99% - 51%",
    "color_accent": "teal",
    "strategic_theme": "Wisdom Synthesis & Proprietary IP",
    "core_frequency": "Distilling Lessons, Signature Frameworks & Thought Leadership",
    "business_meaning": "The peak launch intensity settles into rich, pure gold. Take everything that just happened—the triumphs, the surprises, the client breakthroughs—and distill it into repeatable frameworks, case studies, and thought leadership. Your lived experience is your most expensive asset.",
    "planning_framework": {
      "focus_areas": [
        "Synthesizing launch data and client feedback into structured, high-value case studies",
        "Creating foundational thought leadership content and signature frameworks",
        "Documenting SOPs and training materials for long-term scalability and ease"
      ],
      "strategic_inquiry": "What hard-won insight from this cycle can you turn into a signature framework that positions you as the obvious authority?",
      "energy_cadence": "Generous, didactic, grounded authority"
    },
    "execution_directives": {
      "priority_actions": [
        "Interview or survey recent clients to extract punchy quotes, metrics, and testimonials.",
        "Draft an insightful long-form breakdown sharing the lessons of your latest project.",
        "Archive all launch collateral and assets into your permanent business library."
      ],
      "what_to_pause": [
        "Pushing cold hard-sell promotions when your audience is craving your insights and mastery.",
        "Letting client breakthroughs and transformations go undocumented."
      ],
      "tuesday_afternoon_action": "Write down the 3 biggest breakthroughs your clients experienced this month and formulate them into a repeatable model."
    },
    "activation_wisdom": {
      "source_activation": "Waning Moon Activation",
      "somatic_anchor": "Solar plexus alignment: Standing tall as a sovereign, individuated thumbprint of source.",
      "core_transmission": "We honor the lineage and synthesize the lived truth into sovereign authority.",
      "activation_excerpt": "Bringing your unique flavor of source into your auric field and seeing this creation move into the cosmos. You are the center of the divinely expressed universe as it occurs through you."
    }
  },
  "third_quarter": {
    "phase_key": "third_quarter",
    "phase_name": "Waning Moon",
    "illumination_range": "50%",
    "color_accent": "blush_red",
    "strategic_theme": "The Sacred 'No' & Strategic Purge",
    "core_frequency": "Cord Cutting, Pruning Inefficiencies & Sovereign Boundaries",
    "business_meaning": "Time for a surgical spring cleaning. You cannot step into your next empire while dragging expired commitments, fussy low-margin clients, or bloated software stacks. Saying a sharp, loving 'no' to what drains you is the only way to say a thunderous 'yes' to your next level.",
    "planning_framework": {
      "focus_areas": [
        "Financial audits: canceling zombie subscriptions and unnecessary operational bloat",
        "Pruning sluggish offers, unengaged subscribers, and cluttered digital file systems",
        "Renegotiating or ending misaligned client contracts with absolute clarity and grace"
      ],
      "strategic_inquiry": "What tolerated drain on your time, wallet, or sanity are you lovingly cutting off today?",
      "energy_cadence": "Discerning, surgical, liberating, unyielding"
    },
    "execution_directives": {
      "priority_actions": [
        "Audit your bank statements and cancel recurring software you haven't used in 60 days.",
        "Politely decline or offboard misaligned advisory commitments or draining clients.",
        "Clean and archive your desktop, downloads folder, and active email inbox."
      ],
      "what_to_pause": [
        "Holding onto unproductive obligations out of people-pleasing or guilt.",
        "Starting fresh commitments before you've cleared the old slate."
      ],
      "tuesday_afternoon_action": "Cancel 2 recurring subscriptions you haven't used in two months and archive 20 open browser tabs."
    },
    "activation_wisdom": {
      "source_activation": "Waning Moon Activation",
      "somatic_anchor": "Navel point cord clearing: Transmuting contractions and reclaiming sovereign power.",
      "core_transmission": "Say no to being minimized. Say no so you can say a deeper, sovereign yes to life.",
      "activation_excerpt": "This is a space where we get to clean and cleanse. Saying no to all the spaces where you hold onto past hurts or contractions. We allow for the letting go process to happen with grace and ease."
    }
  },
  "waning_crescent": {
    "phase_key": "waning_crescent",
    "phase_name": "Waning Moon",
    "illumination_range": "49% - 0%",
    "color_accent": "teal",
    "strategic_theme": "Emptying the Vessel & Delicious Rest",
    "core_frequency": "Deep Biological Replenishment & Sacred Spaciousness",
    "business_meaning": "The dark phase right before the next seed sprouts. High-performing leaders burn out when they treat this phase like a failure rather than a biological necessity. Close the laptop, sink into the couch, and allow your subconscious to weave the next breakthrough in the silence.",
    "planning_framework": {
      "focus_areas": [
        "Deep physical and nervous system restoration without a drop of guilt",
        "Spacious executive contemplation without the pressure to produce immediately",
        "Reviewing cash reserves, lifestyle design, and overall business health"
      ],
      "strategic_inquiry": "How deliciously spacious can you make your calendar today so your nervous system is fully primed for what's next?",
      "energy_cadence": "Restorative, quiet, inward-looking, gentle"
    },
    "execution_directives": {
      "priority_actions": [
        "Block out guilt-free calendar buffer days with zero external client meetings.",
        "Engage in somatic restoration: long walks in nature, bodywork, or extra sleep replenishment.",
        "Review high-level financials and quietly celebrate the total revenue generated."
      ],
      "what_to_pause": [
        "Panicking over temporary lulls in daily activity or pipeline quietness.",
        "Forcing strategic epiphanies when your biological system is begging for rest."
      ],
      "tuesday_afternoon_action": "Designate tomorrow morning as an unscheduled focus block for rest, long walks, or pure strategic daydreaming."
    },
    "activation_wisdom": {
      "source_activation": "Waning Moon Activation",
      "somatic_anchor": "Whole-body relaxation: Releasing muscular holding patterns into the supportive ground.",
      "core_transmission": "Rest is not a reward for work completed; it is the fertile ground from which all future empire springs.",
      "activation_excerpt": "When the moon is waning down to dark, we are entering the temple of restoration. Emptying the vessel so the next divine frequency can enter without friction."
    }
  }
};

function gregorianToJDN(year, month, day, hour = 12.0) {
  if (month <= 2) {
    year -= 1;
    month += 12;
  }
  const a = Math.floor(year / 100);
  const b = 2 - a + Math.floor(a / 4);
  let jdn = Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + b - 1524.5;
  jdn += hour / 24.0;
  return jdn;
}

function calculateMoonDetails(dateObj) {
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const jdn = gregorianToJDN(year, month, day, 12.0);

  const daysSinceNew = jdn - KNOWN_NEW_MOON_JDN;
  const cycles = daysSinceNew / SYNODIC_MONTH;
  const cycleFraction = cycles - Math.floor(cycles);
  const age = cycleFraction * SYNODIC_MONTH;

  const phaseAngle = cycleFraction * 2 * Math.PI;
  const illumination = ((1 - Math.cos(phaseAngle)) / 2.0) * 100.0;

  let phaseKey, phaseName, cycleQuarter, stageType, accentClass;

  if (age < 1.845 || age >= 27.685) {
    phaseKey = "new_moon";
    phaseName = "New Moon";
    cycleQuarter = "New Moon: Big Vision, Deep Dreaming & Clean Slates";
    stageType = "Seed & Intention Setting";
    accentClass = "accent-teal";
  } else if (age < 5.535) {
    phaseKey = "waxing_crescent";
    phaseName = "Waxing Moon";
    cycleQuarter = "Waxing Moon: Connecting Dots, Outreach & Early Momentum";
    stageType = "Expansion & Momentum";
    accentClass = "accent-teal";
  } else if (age < 9.225) {
    phaseKey = "first_quarter";
    phaseName = "Waxing Moon";
    cycleQuarter = "Waxing Moon: Boundaries, Integrity & Decisive Execution";
    stageType = "Expansion & Momentum";
    accentClass = "accent-orange";
  } else if (age < 12.915) {
    phaseKey = "waxing_gibbous";
    phaseName = "Waxing Moon";
    cycleQuarter = "Waxing Moon: Opening Conduits, Polish & High Velocity";
    stageType = "Expansion & Momentum";
    accentClass = "accent-orange";
  } else if (age < 16.610) {
    phaseKey = "full_moon";
    phaseName = "Full Moon";
    cycleQuarter = "Full Moon: Maximum Illumination, Big Wins & Harvest";
    stageType = "Harvest & Celebration";
    accentClass = "accent-blush";
  } else if (age < 20.295) {
    phaseKey = "waning_gibbous";
    phaseName = "Waning Moon";
    cycleQuarter = "Waning Moon: Distilling Wisdom & Proprietary IP";
    stageType = "Integration & Mastery";
    accentClass = "accent-teal";
  } else if (age < 23.985) {
    phaseKey = "third_quarter";
    phaseName = "Waning Moon";
    cycleQuarter = "Waning Moon: The Sacred 'No' & The Strategic Purge";
    stageType = "Integration & Pruning";
    accentClass = "accent-blush";
  } else {
    phaseKey = "waning_crescent";
    phaseName = "Waning Moon";
    cycleQuarter = "Waning Moon: Delicious Rest, Zero Guilt & Recharging";
    stageType = "Deep Restoration & Spaciousness";
    accentClass = "accent-teal";
  }

  // Zodiac Calculation
  const t = (jdn - 2451545.0) / 36525.0;
  const lPrime = (218.3164477 + 481267.88128 * t) % 360.0;
  const d = (297.8501921 + 445267.11140 * t) % 360.0;
  const m = (357.5291092 + 35999.05029 * t) % 360.0;
  const mPrime = (134.9633964 + 477198.867505 * t) % 360.0;

  const toRad = deg => (deg * Math.PI) / 180.0;
  let moonLon = lPrime + 6.289 * Math.sin(toRad(mPrime))
                - 1.274 * Math.sin(toRad(mPrime - 2 * d))
                + 0.658 * Math.sin(toRad(2 * d))
                - 0.186 * Math.sin(toRad(m));
  moonLon = (moonLon % 360.0 + 360.0) % 360.0;
  const zodiacIdx = Math.floor(moonLon / 30.0) % 12;
  const zodiacSign = ZODIAC_SIGNS[zodiacIdx];

  const knowledge = LUNAR_KNOWLEDGE_BASE[phaseKey] || LUNAR_KNOWLEDGE_BASE["new_moon"];

  return {
    date: dateObj,
    dateString: formatLocalDateString(dateObj),
    phaseKey,
    phaseName,
    illumination: Math.round(illumination * 10) / 10,
    ageInDays: Math.round(age * 10) / 10,
    cycleQuarter,
    stageType,
    accentClass,
    zodiacSign,
    phaseAngleDegrees: Math.round(((phaseAngle * 180) / Math.PI) * 10) / 10,
    knowledge
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    calculateMoonDetails,
    LUNAR_KNOWLEDGE_BASE,
    formatLocalDateString,
    gregorianToJDN
  };
}
