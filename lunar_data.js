/**
 * Move x Moon: Well Kept Edition — Lunar Data & Astronomical Calculation Engine
 * Deterministic client-side astronomical algorithms and personal Being knowledge base.
 * Written as MOVE x MOON • Spoken as Move By Moon • Held inside Well Kept
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
    "phase_stage_title": "New Moon",
    "rhythm_group": "New Moon",
    "phase_index": 1,
    "illumination_range": "0% to 3% Illumination",
    "color_accent": "teal",
    "editorial_image": "images/editorial-earth-feet.jpg",
    "editorial_caption": "Living Ground • Soles of Your Feet on the Earth",
    "somatic_image": "images/activation-orb-holding.jpg",
    "somatic_image_alt": "Stillness and inner light activation",
    "geometry_image": "images/somatic-resonance-portal.jpg",
    "mission_image": "images/editorial-morning-tea.jpg",
    "strategic_theme": "Planting The Seeds Of Who You're Becoming",
    "core_frequency": "The Emptiness To Receive & The Delicious Gumption To Ask",
    "business_meaning": "This is where the soul schools the human, darling. The sky is dark, nothing is showing, and that's the whole point. Put the to-do list to one side for a moment and dare to imagine a life so limitless and stretchy it gives you butterflies. We aren't doing vague lottery-ticket daydreaming here. We're planting roots deep into the actual earth, into the floor under your kitchen table and the soles of your feet, so what you long for has living ground to stand on.",
    "planning_framework": {
      "focus_areas": [
        "Dream up the feeling of your next cycle: how you want your mornings, your days and your evenings to feel",
        "Protect your quiet incubation bubble before you tell anyone anything",
        "Check your head's clarity against your body's full juicy YES"
      ],
      "strategic_inquiry": "What do you long for that switches you on, turns you up and makes you a little uncomfortable all at the same time? And how can you anchor it into your real life today, the one with the washing up and the Wednesday plans?",
      "energy_cadence": "Incubation, spacious reflection, quiet knowing"
    },
    "execution_directives": {
      "priority_actions": [
        "Write the raw, unfiltered list of what you want your life to feel like. Feelings first, details after.",
        "Look at one thing you've been half-heartedly saying yes to, the one you already know is going nowhere, and lovingly let it go.",
        "Map the first three small steps that would give your new seed a real form."
      ],
      "what_to_pause": [
        "Telling the whole world before the inner container has actually formed.",
        "Asking for opinions from people who can barely manage their own Tuesday.",
        "Scrolling for inspiration when the answer is already humming inside you."
      ],
      "tuesday_afternoon_action": "Open a blank page and write down the one thing you most want to welcome into your life. Don't edit it. Don't shrink it. Write without filters."
    },
    "activation_wisdom": {
      "source_activation": "New Moon Activation",
      "somatic_anchor": "See a light being switched on at the base of your spine and the soles of your feet at the same time. Feel how this activates your connection to the earth beneath you. Pause and allow yourself to feel solid and stable through this connection.",
      "core_transmission": "When we speak the language of new beginnings, we speak the language of the unknown. Dream big enough so you can root deeply into the core of your earth.",
      "activation_excerpt": "Notice the continuous communication between your feet and the earth beneath you. Your conscious awareness of the life beneath you invites a reflection from the earth's intelligence. This gives an opening for you, as an individual physical being, to be schooled by the infinite physical being."
    }
  },
  "waxing_crescent": {
    "phase_key": "waxing_crescent",
    "phase_name": "Waxing Moon",
    "phase_stage_title": "Early Waxing Moon",
    "rhythm_group": "Waxing Moon",
    "phase_index": 2,
    "illumination_range": "4% to 49% Illumination",
    "color_accent": "teal",
    "editorial_image": "images/ripple-water-touch.jpg",
    "editorial_caption": "First Contact • Sending a Ripple Outward",
    "somatic_image": "images/somatic-gold-touch.jpg",
    "somatic_image_alt": "Hand touching golden concentric rings",
    "geometry_image": "images/fibonacci-spiral-blueprint.jpg",
    "mission_image": "images/editorial-morning-tea.jpg",
    "strategic_theme": "Connecting the Dots & Making Contact",
    "core_frequency": "Micro-Commitments & First Steps",
    "business_meaning": "Just because only a sliver of the moon is showing doesn't mean the rest has gone on holiday. In your life, this phase is all about making contact with the path ahead. Momentum that's aligned doesn't need a big song and dance. Send three warm voice notes to people you value, take a ten minute walk you didn't plan, say the thing out loud that you've only been thinking. That's enough to start a real current in the field and send a ripple outward.",
    "planning_framework": {
      "focus_areas": [
        "Reach out to the people who feed you, and start simply by saying hi",
        "Try things out in real life before you decide anything, one small experiment at a time",
        "Build the simple daily rhythm that keeps you humming without burning you out"
      ],
      "strategic_inquiry": "Which single dot can you connect today that tells life you're switched on, magnetic and open to what's coming?",
      "energy_cadence": "Curious, responsive, gently moving outward"
    },
    "execution_directives": {
      "priority_actions": [
        "Send 3 voice messages to people you love and have been meaning to reach.",
        "Sketch out what a gentle week could look like, with room for you in it.",
        "Put one thing in the diary that is just for you, and treat it like an appointment you'd never cancel."
      ],
      "what_to_pause": [
        "Designing a twelve step morning routine before you've tried one thing for three days in a row.",
        "Waiting for 100% certainty before you let yourself begin."
      ],
      "tuesday_afternoon_action": "Record a 90 second voice note to someone you adore. No agenda, zero pressure and 100% warmth."
    },
    "activation_wisdom": {
      "source_activation": "Waxing Moon Activation",
      "somatic_anchor": "Skeletal alignment: Bring your attention to your spine, pelvis, and rib cage, see them lighting up and feel how they are fully supported by the ground beneath you.",
      "core_transmission": "As soon as you take an action that feels activated, you begin connecting dots in the field around you. As you do this consistently you increase your access and your capacity.",
      "activation_excerpt": "When the moon is waxing, we can only see a sliver of silver; the rest is slowly coming out of the dark. In reflection, you're opening up to reveal more and more of your own capacity through the small expressions and moments of presence that, over time, become a tidal wave."
    }
  },
  "first_quarter": {
    "phase_key": "first_quarter",
    "phase_name": "Waxing Moon",
    "phase_stage_title": "Mid Waxing Moon",
    "rhythm_group": "Waxing Moon",
    "phase_index": 3,
    "illumination_range": "50% Illumination / Half-lit",
    "color_accent": "burnt_orange",
    "editorial_image": "images/somatic-gold-touch.jpg",
    "editorial_caption": "Structural Integrity • Holding Your Ground",
    "somatic_image": "images/activation-orb-holding.jpg",
    "somatic_image_alt": "Inner command and luminous spine",
    "geometry_image": "images/fibonacci-spiral-blueprint.jpg",
    "mission_image": "images/editorial-sanctuary-room.jpg",
    "strategic_theme": "Integrity & Decisive Action",
    "core_frequency": "Strengthening Boundaries, Cutting Fence Sitting & Strongly Saying 'I Will...'",
    "business_meaning": "The halfway mark to full light always brings a little friction test. Doubts love to creep in right here to check whether your promise to yourself has a spine. Stand tall, stop tolerating the fuzzy boundaries, and make the clean call you've been circling for weeks. Decision fatigue happens with a pile of maybes. Clear one and watch how much lighter your whole body feels.",
    "planning_framework": {
      "focus_areas": [
        "Remove the small bottlenecks that make every morning harder than it needs to be",
        "Keep the promises you make to yourself, the way you would for someone you love",
        "Make a swift, decisive call on the wishy-washy maybes that have been hanging around"
      ],
      "strategic_inquiry": "Where is hesitation costing you your peace of mind, and what clean decision would clear the air immediately?",
      "energy_cadence": "Steady, focused, self-honouring"
    },
    "execution_directives": {
      "priority_actions": [
        "Decide on the maybe that's been hanging in the air, and give a clear answer.",
        "Say no to one invitation that would clutter the hours you love most.",
        "Fix, or ask for help with, the one niggling thing you've been grumbling about for weeks."
      ],
      "what_to_pause": [
        "Saying yes when your whole body is saying no.",
        "Putting off the uncomfortable conversation, the form, the appointment or the reply."
      ],
      "tuesday_afternoon_action": "Make the decision you've been circling all week. Send the message, and don't look back."
    },
    "activation_wisdom": {
      "source_activation": "Waxing Moon Activation",
      "somatic_anchor": "Become aware of your in breath as you expand your rib cage and lengthen your spine; feel the grounded command of your skeletal frame.",
      "core_transmission": "Take this expanded and lengthened frame and allow yourself to feel empowered by it. Become aware of the integrity that hums and vibrates at the centre of it.",
      "activation_excerpt": "Allow everything that is giving you structure, everything that is giving you form, everything holding you together to be filled with your light. Let this light amplify your security and your trust in the life that flows through you and animates you."
    }
  },
  "waxing_gibbous": {
    "phase_key": "waxing_gibbous",
    "phase_name": "Waxing Moon",
    "phase_stage_title": "Late Waxing Moon",
    "rhythm_group": "Waxing Moon",
    "phase_index": 4,
    "illumination_range": "51% to 99% Illumination",
    "color_accent": "burnt_orange",
    "editorial_image": "images/editorial-sanctuary-room.jpg",
    "editorial_caption": "A Guest in Your Own Home • Ready to Receive",
    "somatic_image": "images/somatic-gold-touch.jpg",
    "somatic_image_alt": "Hand touching golden concentric resonance rings",
    "geometry_image": "images/somatic-resonance-portal.jpg",
    "mission_image": "images/editorial-morning-tea.jpg",
    "strategic_theme": "Opening The Flow & Getting Ready To Receive",
    "core_frequency": "Momentum, Easy Flow & Faster Movements",
    "business_meaning": "The moon is nearly full and the momentum is building, my love. Your life is about to hold more light, more people and more invitations. Please don't invent five new side projects right now. Smooth what's already here, tend to the little details that make your days feel good, and get yourself ready to receive.",
    "planning_framework": {
      "focus_areas": [
        "Check whether your home, your diary and your body are ready to hold more",
        "Warm up the people around you and build delicious anticipation for something you're about to celebrate",
        "Finalise your plans for the gathering, the trip or the dinner you've been dreaming about"
      ],
      "strategic_inquiry": "Is your life open and clear enough to receive the love, the joy and the abundance you've been calling in?",
      "energy_cadence": "Warm, moving, bright, tending to the details"
    },
    "execution_directives": {
      "priority_actions": [
        "Walk through your own day as if you were a guest in it. Anything that feels clunky, smooth it out.",
        "Plan the little celebration or gathering you'd love to have at the full moon, and send the invitations.",
        "Tell the people close to you what you're stepping into, so they can step in with you."
      ],
      "what_to_pause": [
        "Starting a whole new project or rearranging your life mid-stride.",
        "Letting small perfectionism ('I'll invite people once the house is sorted') delay your joy."
      ],
      "tuesday_afternoon_action": "Walk through your morning right now as if you were a guest in your own home. If anything feels clunky, smooth it out immediately."
    },
    "activation_wisdom": {
      "source_activation": "Waxing Moon Activation",
      "somatic_anchor": "Breathe deeply from your diaphragm, so your abdominals move out as you breathe in, filling your lungs to capacity, and your abs move in as you breathe out, emptying the lungs completely. Give yourself a moment to see how many pathways on the earth are lit up and activated for you.",
      "core_transmission": "You are the centre of your universe. As you become conscious of this, you become conscious of the pathways that are open to you. In your life this creates natural streams for love, money and resources to flow.",
      "activation_excerpt": "Witness that on this entire globe, your pathways are activated. Open up to grow and expand your perspective on what you have the capacity to receive."
    }
  },
  "full_moon": {
    "phase_key": "full_moon",
    "phase_name": "Full Moon",
    "phase_stage_title": "Full Moon",
    "rhythm_group": "Full Moon",
    "phase_index": 5,
    "illumination_range": "100% Illumination",
    "color_accent": "blush_red",
    "editorial_image": "images/hero-moon-walking.jpg",
    "editorial_caption": "Maximum Illumination • Standing in Full Light",
    "somatic_image": "images/activation-orb-holding.jpg",
    "somatic_image_alt": "Radiant heart center illumination",
    "geometry_image": "images/lunar-cycle-mandala.jpg",
    "mission_image": "images/somatic-gold-touch.jpg",
    "strategic_theme": "Maximum Illumination & Celebrating What's Here",
    "core_frequency": "Radiant Visibility, Gratitude & Full-Blown Yes",
    "business_meaning": "The spotlight is fully on you, my love. Everything is visible. This is prime time for being seen, for gathering your people, for celebrating how far you've come and for receiving what has landed. Your heart creates the very best experiences and circumstances life has to offer through your gratitude and clarity. Give genuine thanks for what's here, and make your invitations without apology.",
    "planning_framework": {
      "focus_areas": [
        "Be seen. Show up fully, with your voice, your laughter and your whole presence",
        "Review your harvest: what has grown in you, in your relationships, in your body and in your home",
        "Celebrate yourself and express deep appreciation to the people who love you"
      ],
      "strategic_inquiry": "What full-bodied win are you ready to celebrate, and what bold invitation are you making today without a single apology?",
      "energy_cadence": "Radiant, expressive, celebratory, magnetic"
    },
    "execution_directives": {
      "priority_actions": [
        "Say yes to the invitation you've been wanting to say yes to, or send the invitation yourself.",
        "Send a heartfelt thank you note to three people who have loved you into this chapter.",
        "Write down what has actually changed in you during this cycle."
      ],
      "what_to_pause": [
        "Running on empty or in panic when it's time to be seen and celebrated.",
        "Hiding behind the to-do list when your voice, your charisma and your presence are what's needed."
      ],
      "tuesday_afternoon_action": "Send an unprompted note of appreciation to three people who've contributed to your growth this month, then celebrate yourself with something that feels delicious."
    },
    "activation_wisdom": {
      "source_activation": "Full Moon Activation",
      "somatic_anchor": "Take a moment to connect to your heart center and see it radiating golden light through your bodily waters, bloodlines, and energy fields.",
      "core_transmission": "Your heart cannot lie; it vibrates and communicates blueprints into the field of energy all around you. Say a heartfelt yes to what's been received.",
      "activation_excerpt": "The full moon brings an actual sense of fullness and fulfilment. Let the pulsing vibration of your heart open up to a deep-seated sense of appreciation."
    }
  },
  "waning_gibbous": {
    "phase_key": "waning_gibbous",
    "phase_name": "Waning Moon",
    "phase_stage_title": "Early Waning Moon",
    "rhythm_group": "Waning Moon",
    "phase_index": 6,
    "illumination_range": "99% to 51% Illumination",
    "color_accent": "teal",
    "editorial_image": "images/editorial-morning-tea.jpg",
    "editorial_caption": "Distilling the Gold • Quiet Knowing Over Tea",
    "somatic_image": "images/somatic-gold-touch.jpg",
    "somatic_image_alt": "Golden resonance and lived wisdom",
    "geometry_image": "images/somatic-resonance-portal.jpg",
    "mission_image": "images/editorial-sanctuary-room.jpg",
    "strategic_theme": "Gathering Your Wisdom",
    "core_frequency": "Distilling Lessons, Honouring Your Own Knowing & Passing It On",
    "business_meaning": "The peak settles into rich, pure gold. Take everything that just happened, the joys, the surprises, the breakthroughs and the bits that didn't go to plan, and distil it into what you now know. Your lived experience is the most valuable thing you own. You've been living your own wisdom all along, and now's the time to notice it, name it and keep it.",
    "planning_framework": {
      "focus_areas": [
        "Gather what this cycle taught you into a few lines you can come back to",
        "Notice what works for you, your own rituals and your own rhythm, so you can repeat them with ease",
        "Share your story with someone who's walking a road you've already travelled"
      ],
      "strategic_inquiry": "What hard-won insight from this cycle are you ready to claim as your own deep knowing?",
      "energy_cadence": "Generous, reflective, grounded in what you know"
    },
    "execution_directives": {
      "priority_actions": [
        "Ask one or two people who love you what they've seen shift in you this cycle.",
        "Write a longer reflection on what this chapter taught you, in your own words.",
        "Gather the keepsakes of this cycle (photos, notes, cards, screenshots) into one place you'll enjoy opening."
      ],
      "what_to_pause": [
        "Pushing for more, more, more when your system is asking for reflection.",
        "Letting your breakthroughs and tender turning points go unrecorded."
      ],
      "tuesday_afternoon_action": "Write down the 3 biggest breakthroughs you've had this month, then turn them into three sentences that begin with 'I now know...'"
    },
    "activation_wisdom": {
      "source_activation": "Waning Moon Activation",
      "somatic_anchor": "Solar plexus alignment: Take a moment to connect with your Solar Plexus. Standing tall as a Queen / King, really feel yourself as an individuated thumbprint of source.",
      "core_transmission": "Honour the lineage of the things that came before and allow the culmination of your lived truth to shape the way you command and lead yourself.",
      "activation_excerpt": "Bring your unique flavour of source into your energetic field and witness how it shifts from an individuated creation into an infinite creation. You are the centre of the divinely expressed universe as it occurs through you and as you."
    }
  },
  "third_quarter": {
    "phase_key": "third_quarter",
    "phase_name": "Waning Moon",
    "phase_stage_title": "Mid Waning Moon",
    "rhythm_group": "Waning Moon",
    "phase_index": 7,
    "illumination_range": "50% Illumination / Half-lit",
    "color_accent": "blush_red",
    "editorial_image": "images/ripple-water-touch.jpg",
    "editorial_caption": "The Sacred No • Clearing the Slate with Grace",
    "somatic_image": "images/activation-orb-holding.jpg",
    "somatic_image_alt": "Navel point sovereignty and clearing",
    "geometry_image": "images/fibonacci-spiral-blueprint.jpg",
    "mission_image": "images/editorial-sanctuary-room.jpg",
    "strategic_theme": "The Sacred 'No' & Lovely Clearing Out",
    "core_frequency": "Cord Cutting, Gentle Pruning & Setting Your Boundaries",
    "business_meaning": "Time for a gentle but very thorough spring clean. You can't step into your next chapter while dragging expired commitments, draining dynamics and a phone full of things you stopped caring about in 2022. Saying a clear, loving 'no' to what drains you is the only way to say a thunderous 'yes' to your next level of living.",
    "planning_framework": {
      "focus_areas": [
        "Cancel the zombie subscriptions and anything quietly draining you",
        "Clear the clutter: your wardrobe, your camera roll, your inbox, your desktop",
        "Renegotiate or step back from commitments and dynamics that no longer fit, with clarity and grace"
      ],
      "strategic_inquiry": "What tolerated drain on your time, energy, wallet or sanity are you lovingly cutting off today?",
      "energy_cadence": "Discerning, releasing, liberating, holding your ground"
    },
    "execution_directives": {
      "priority_actions": [
        "Look through your bank statement and cancel anything recurring you haven't used in 60 days.",
        "Politely decline, or step back from, one commitment or dynamic that leaves you drained.",
        "Clear and archive your desktop, your downloads folder and your inbox."
      ],
      "what_to_pause": [
        "Holding onto obligations out of people-pleasing or guilt.",
        "Starting fresh commitments before you've cleared the messy old slate."
      ],
      "tuesday_afternoon_action": "Cancel 2 recurring subscriptions you haven't used in two months, and close the browser tabs you were done with ages ago."
    },
    "activation_wisdom": {
      "source_activation": "Waning Moon Activation",
      "somatic_anchor": "Navel point cord clearing: Bring your attention to your navel point (belly button), this is your point of power. Make a point of releasing any active contractions that limit your expression and keep you small.",
      "core_transmission": "Say no to being minimised. When you say no to what no longer serves you, you say a deeper, sovereign yes to life.",
      "activation_excerpt": "This is a space where we get to clean and cleanse. Release the spaces where you hold onto past hurts. Allow the letting go process to happen with the utmost grace and ease."
    }
  },
  "waning_crescent": {
    "phase_key": "waning_crescent",
    "phase_name": "Waning Moon",
    "phase_stage_title": "Late Waning Moon",
    "rhythm_group": "Waning Moon",
    "phase_index": 8,
    "illumination_range": "49% to 0% Illumination",
    "color_accent": "teal",
    "editorial_image": "images/editorial-silk-rest.jpg",
    "editorial_caption": "Between Breaths • Deep Biological Replenishment",
    "somatic_image": "images/editorial-earth-feet.jpg",
    "somatic_image_alt": "Grounded rest and nervous system release",
    "geometry_image": "images/lunar-cycle-mandala.jpg",
    "mission_image": "images/editorial-morning-tea.jpg",
    "strategic_theme": "Emptying the Vessel & Lush Restfulness",
    "core_frequency": "Deep Biological Replenishment & Sacred Spaciousness",
    "business_meaning": "The dark phase right before the next seed sprouts. Capable women burn out when they treat this phase like a failure instead of the biological necessity it is. Put the phone down, sink into the couch, let the day be a little bit empty, and allow your subconscious to weave the next breakthrough in the silence. Nothing is wrong. You're just between breaths.",
    "planning_framework": {
      "focus_areas": [
        "Deep physical and nervous system restoration without a drop of guilt",
        "Spacious contemplation without any pressure to produce something from it",
        "A gentle look at how your life feels overall: your body, your home, your rhythm, your heart"
      ],
      "strategic_inquiry": "How deliciously spacious can you make your day today, so your nervous system is fully primed for what's next?",
      "energy_cadence": "Restorative, quiet, inward-looking, gentle"
    },
    "execution_directives": {
      "priority_actions": [
        "Block out guilt-free buffer time with nothing in it and nobody to answer to.",
        "Restore yourself somatically: long walks, bodywork, a bath, or extra sleep.",
        "Look back over this cycle and quietly celebrate how far you've come."
      ],
      "what_to_pause": [
        "Panicking over quiet days or a slower pace.",
        "Forcing epiphanies when your body is begging for rest."
      ],
      "tuesday_afternoon_action": "Choose tomorrow morning and leave it completely unscheduled, for rest, a long walk or some pure daydreaming."
    },
    "activation_wisdom": {
      "source_activation": "Waning Moon Activation",
      "somatic_anchor": "Whole-body relaxation: Releasing muscular holding patterns into the supportive ground.",
      "core_transmission": "Rest is not a reward for work completed; it's the fertile ground from which everything that's next will spring.",
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
    cycleQuarter = "New Moon: Planting Seeds, Deep Incubation & Living Ground";
    stageType = "Seed & Intention Setting";
    accentClass = "accent-teal";
  } else if (age < 5.535) {
    phaseKey = "waxing_crescent";
    phaseName = "Waxing Moon";
    cycleQuarter = "Early Waxing Moon: Connecting Dots & First Steps";
    stageType = "Connection & Momentum";
    accentClass = "accent-teal";
  } else if (age < 9.225) {
    phaseKey = "first_quarter";
    phaseName = "Waxing Moon";
    cycleQuarter = "Mid Waxing Moon: Boundaries, Integrity & Clean Decisions";
    stageType = "Integrity & Command";
    accentClass = "accent-orange";
  } else if (age < 12.915) {
    phaseKey = "waxing_gibbous";
    phaseName = "Waxing Moon";
    cycleQuarter = "Late Waxing Moon: Opening the Flow & Getting Ready to Receive";
    stageType = "Flow & Readiness";
    accentClass = "accent-orange";
  } else if (age < 16.610) {
    phaseKey = "full_moon";
    phaseName = "Full Moon";
    cycleQuarter = "Full Moon: Maximum Illumination & Celebrating What's Here";
    stageType = "Radiance & Celebration";
    accentClass = "accent-blush";
  } else if (age < 20.295) {
    phaseKey = "waning_gibbous";
    phaseName = "Waning Moon";
    cycleQuarter = "Early Waning Moon: Gathering Your Wisdom & Lived Knowing";
    stageType = "Wisdom & Reflection";
    accentClass = "accent-teal";
  } else if (age < 23.985) {
    phaseKey = "third_quarter";
    phaseName = "Waning Moon";
    cycleQuarter = "Mid Waning Moon: The Sacred 'No' & Lovely Clearing Out";
    stageType = "Clearing & Boundaries";
    accentClass = "accent-blush";
  } else {
    phaseKey = "waning_crescent";
    phaseName = "Waning Moon";
    cycleQuarter = "Late Waning Moon: Emptying the Vessel & Lush Restfulness";
    stageType = "Deep Restoration";
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
    cycleFraction: Math.round(cycleFraction * 1000) / 1000,
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
