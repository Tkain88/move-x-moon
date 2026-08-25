#!/usr/bin/env python3
"""
tools/extract_activation_knowledge.py
Constructs the complete deterministic Lunar Business Wisdom knowledge base
linking astronomical phases with the 5 activation transcripts and Tash's voice rules.
"""

import json
from typing import Dict, Any

def get_lunar_knowledge_base() -> Dict[str, Any]:
    """Return the structured master knowledge base for all 8 lunar phases."""
    return {
  "new_moon": {
    "phase_key": "new_moon",
    "phase_name": "New Moon",
    "illumination_range": "0% - 3%",
    "color_accent": "teal",
    "strategic_theme": "Planting The Seeds For Big, Bold, Beautiful Visions",
    "core_frequency": "The Emptiness To Receive & The Delicious Gumption To Ask",
    "business_meaning": "This is where the soul schools the human, darling. Put the strategy to one side for a moment and dare to imagine an offer so delightfully stretchy it gives you butterflies. We aren't doing vague lottery-ticket daydreaming here; we're planting roots deep into the physical earth so your vision has actual living ground to stand on.",
    "planning_framework": {
      "focus_areas": [
        "Dream up the grand design of your upcoming business cycle",
        "Protect your quiet incubation bubble before broadcasting anything",
        "Align your intuitive third-eye clarity with your full-body juicy YES"
      ],
      "strategic_inquiry": "What big business dream switches you on, turns you up and makes you uncomfortable all at the same time? How are you anchoring it into your real world and experience today?",
      "energy_cadence": "Incubation, spacious reflection, quiet broadcasting"
    },
    "execution_directives": {
      "priority_actions": [
        "Draft the raw, unfiltered vision document for your next offer, launch, or creative turn.",
        "Audit a past project and intentionally release any half-hearted commitments that you already know are going nowhere.",
        "Map the first three tasks you need to complete to give real form to this new seed."
      ],
      "what_to_pause": [
        "Premature public broadcasting before the inner container has actually formed.",
        "Asking for unvetted opinions from people who can barely manage their own Tuesday."
      ],
      "tuesday_afternoon_action": "Open a blank page and write down the single most high-leverage offer you want to bring into the world. Don't edit, avoid shrinking... write without filters."
    },
    "activation_wisdom": {
      "source_activation": "New Moon Activation",
      "somatic_anchor": "See a light being switched on at the base of your spine and the soles of your feet at the same time. Feel how this activates your connection to the earth beneath you. Pause and appreciate the connection.",
      "core_transmission": "When we speak the language of new beginnings, we speak the language of the unknown. Dream big enough so you can root deeply into the core of your earth.",
      "activation_excerpt": "Notice the continuous communication between your feet and the earth beneath you. Your conscious awareness of the life beneath you demands a reflection from the earth's intelligence. This gives an opening for you as an individual physical entity to be schooled by the infinite physical entity."
    }
  },
  "waxing_crescent": {
    "phase_key": "waxing_crescent",
    "phase_name": "Waxing Moon",
    "illumination_range": "4% - 49%",
    "color_accent": "teal",
    "strategic_theme": "Connecting the Dots & Making Contact",
    "core_frequency": "Micro-Commitments & First Steps",
    "business_meaning": "Just because only a sliver of the moon is showing doesn't mean the rest went on holiday. In your business, this phase is all about making contact with the path ahead. Aligned momentum doesn't require a big song and dance; send three warm voice notes or publish that raw initial thought process; this activates a real current in the field that starts a ripple outward.",
    "planning_framework": {
      "focus_areas": [
        "Establish low-friction connection points with potential clients, allies, and dream collaborators (start by saying hi!)",
        "Test early offer concepts through direct, face-to-face conversations",
        "Build the simple daily rhythm that keeps your operations humming without burnout"
      ],
      "strategic_inquiry": "Which single dot can you connect today to tell your market and community that you're switched on, magnetic, and open for business?",
      "energy_cadence": "Curious, responsive, outward momentum"
    },
    "execution_directives": {
      "priority_actions": [
        "Send 3 personalized voice messages or emails to past collaborators or warm leads.",
        "Sketch out the curriculum, scope of work, or service outline.",
        "Set up your calendar booking flow and payment links so people can pay you."
      ],
      "what_to_pause": [
        "Over-engineering a 12-step automation before you've spoken to 3 live human beings.",
        "Waiting for 100% certainty before sharing your brilliant perspective."
      ],
      "tuesday_afternoon_action": "Record a 90-second voice note to a dream collaborator introducing a brilliant concept with zero pressure and 100% warmth."
    },
    "activation_wisdom": {
      "source_activation": "Waxing Moon Activation",
      "somatic_anchor": "Skeletal alignment: Bring your attention to your spine, pelvis, and rib cage, see them lighting up and feel how they are fully supported by the ground beneath you.",
      "core_transmission": "As soon as you take action that feels activated you begin connecting dots in the field around you. As you do this consistently you increase your access and your capacity.",
      "activation_excerpt": "When the moon is waxing, we can only see a sliver of silver; the rest is slowly coming out of the dark. In reflection, you're opening up to reveal more and more of your own capacity through the small expressions and moments of presence that eventually become a tidal wave over time."
    }
  },
  "first_quarter": {
    "phase_key": "first_quarter",
    "phase_name": "Waxing Moon",
    "illumination_range": "50%",
    "color_accent": "burnt_orange",
    "strategic_theme": "Integrity & Decisive Action",
    "core_frequency": "Strengthening Boundaries, Cutting Fence Sitting & Strongly Saying 'I Will...'",
    "business_meaning": "The halfway mark to full illumination always brings a little friction test. Doubts love to creep in right here to check whether your structure actually has integrity. Stand tall in your spine, eliminate decision fatigue, stop tolerating messy boundaries, and make the firm executive call you've been putting off.",
    "planning_framework": {
      "focus_areas": [
        "Remove bottlenecks in your client onboarding and your delivery system",
        "Lock in firm pricing, ironclad contracts, and crystal clear payment deadlines",
        "Make swift, decisive calls on lingering wishy-washy commitments"
      ],
      "strategic_inquiry": "Where is hesitation costing you revenue or peace of mind, and what clean decision clears the air immediately?",
      "energy_cadence": "Assertive, focused, highly disciplined"
    },
    "execution_directives": {
      "priority_actions": [
        "Review active proposals and establish clear deadlines.",
        "Say no to non-essential meeting invites that clutter your prime creative hours.",
        "Fix or delegate that one niggling glitch you've been grumbling about for weeks."
      ],
      "what_to_pause": [
        "Discounting your pricing or compromising your terms out of temporary scarcity.",
        "Procrastinating on uncomfortable administration or contractual decisions."
      ],
      "tuesday_afternoon_action": "Make the pending decision you've been circling all week, send the email, and don't look back."
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
    "illumination_range": "51% - 99%",
    "color_accent": "burnt_orange",
    "strategic_theme": "Expanded Capacity & Pre-Launch Touches",
    "core_frequency": "Momentum, Flow Testing & Faster Movements",
    "business_meaning": "The moon is nearly full and the momentum is building, my love. Your systems, messaging, and capacity are about to handle peak volume. Please don't invent five new side projects right now; double down on stress-testing your existing flows and getting ready to receive.",
    "planning_framework": {
      "focus_areas": [
        "Stress-testing your ability to deliver and auditing the end-to-end customer journey",
        "Warming up your audience awareness and building delicious anticipation for your launch",
        "Finalising your promotions, presentations, and checkout flows"
      ],
      "strategic_inquiry": "Is your business flowing clear and wide enough so you can receive the clients and money you're calling in?",
      "energy_cadence": "Projective energy, meticulous attention to detail, high output"
    },
    "execution_directives": {
      "priority_actions": [
        "Conduct a full test transaction on your checkout and onboarding sequence on your own phone.",
        "Publish key value-driven teasers or case studies that prove the concept.",
        "Brief your team or collaborators on launch day responsibilities so everyone is in flow."
      ],
      "what_to_pause": [
        "Starting completely new product lines or restructuring core systems mid-stride.",
        "Letting minor cosmetic perfectionism delay your public delivery."
      ],
      "tuesday_afternoon_action": "Go through your own client onboarding flow on your mobile right now. If anything feels clunky, smooth it out immediately."
    },
    "activation_wisdom": {
      "source_activation": "Waxing Moon Activation",
      "somatic_anchor": "Breathe deeply from your diaphragm, so your abdominals move out as you breathe in, filling your lungs to capacity, and your abs move in as you breathe out, emptying the lungs completely. Give yourself a moment to see how many pathways on the earth are lit up and activated for you.",
      "core_transmission": "You are the center of your universe, as you become conscious of this, you become conscious of the pathways that are open to you. In your business this creates natural streams for money and resources to flow.",
      "activation_excerpt": "Witness that on this entire globe, your pathways are activated. Open up to grow and expand your perspective on what you have the capacity to receive."
    }
  },
  "full_moon": {
    "phase_key": "full_moon",
    "phase_name": "Full Moon",
    "illumination_range": "100%",
    "color_accent": "blush_red",
    "strategic_theme": "Maximum Illumination & The Big Harvest",
    "core_frequency": "Radiant Visibility, Celebration & Full-Blown Yes",
    "business_meaning": "The spotlight is fully on you, my love. Everything is visible. This is prime time for public launches, celebrating major wins, and closing sales cycles. Your heart creates the very best experiences and circumstances life has to offer through your gratitude and clarity. Give genuine thanks for what has landed and make your invitations without apology.",
    "planning_framework": {
      "focus_areas": [
        "Deliver public launch events, workshops, webinars, or signature keynotes with full presence",
        "Review Your Harvest: measure revenue, client intake, and transformative community impact",
        "Celebrate your performance and express deep appreciation to your supporters"
      ],
      "strategic_inquiry": "What full-bodied win are you ready to celebrate, and what bold invitation are you making today without a single apology?",
      "energy_cadence": "Radiant, expressive, celebratory, magnetic"
    },
    "execution_directives": {
      "priority_actions": [
        "Open the cart or deliver your signature workshop with unshakeable conviction.",
        "Send personalized thank-you notes to top clients, partners, and referrers.",
        "Document immediate financial and measurable results from this cycle."
      ],
      "what_to_pause": [
        "Operating from depletion or panic during live launch windows.",
        "Hiding behind back office administration when your visibility, voice, and charisma are needed."
      ],
      "tuesday_afternoon_action": "Send an unprompted note of appreciation to three people who contributed to your growth this month, then celebrate yourself with something that feels delicious."
    },
    "activation_wisdom": {
      "source_activation": "Full Moon Activation",
      "somatic_anchor": "Take a moment to connect to your heart center and see it radiating golden light through your bodily waters, bloodlines, and energy fields.",
      "core_transmission": "Your heart cannot lie; it vibrates and communicates blueprints into the field of energy all around you. Say a heartfelt yes to what's been received.",
      "activation_excerpt": "The full moon brings an actual sense of fullness and fulfillment. Let the pulsing vibration of your heart open up to a deep-seated sense of appreciation."
    }
  },
  "waning_gibbous": {
    "phase_key": "waning_gibbous",
    "phase_name": "Waning Moon",
    "illumination_range": "99% - 51%",
    "color_accent": "teal",
    "strategic_theme": "Wisdom Synthesis & Intellectual Property (IP)",
    "core_frequency": "Distilling Lessons, Signature Frameworks & Thought Leadership",
    "business_meaning": "The peak launch intensity settles into rich, pure gold. Take everything that just happened\u2014the triumphs, the surprises, the client breakthroughs\u2014and distill it into repeatable frameworks, case studies, and thought leadership. Your lived experience is your most valuable asset.",
    "planning_framework": {
      "focus_areas": [
        "Collate your launch information and client feedback into structured, high-value case studies",
        "Create grounded transformative content and signature frameworks",
        "Document your systems and training materials so they can be scaled in the long term with ease"
      ],
      "strategic_inquiry": "What hard-won insight from this cycle can you turn into a signature framework that positions you as the obvious authority?",
      "energy_cadence": "Generous, wisdom sharing with grounded authority"
    },
    "execution_directives": {
      "priority_actions": [
        "Interview or survey recent clients to extract punchy quotes, measurable results, and testimonials.",
        "Draft an insightful long-form breakdown sharing the lessons of your latest project.",
        "Archive all launch materials and assets into your permanent business library."
      ],
      "what_to_pause": [
        "Pushing cold hard-sell promotions when your audience is craving your insights and mastery.",
        "Letting client breakthroughs and transformations go undocumented."
      ],
      "tuesday_afternoon_action": "Write down the 3 biggest breakthroughs your clients experienced this month and turn them into a repeatable model."
    },
    "activation_wisdom": {
      "source_activation": "Waning Moon Activation",
      "somatic_anchor": "Solar plexus alignment: Take a moment to connect with your Solar Plexus. Standing tall as a Queen / King, really feel yourself as an individuated thumbprint of source.",
      "core_transmission": "Honor the lineage of the things that came before and allow the culmination of your lived truth to shape the way you command and lead yourself.",
      "activation_excerpt": "Bring your unique flavor of source into your energetic field and witness how it shifts from an individuated creation into an infinite creation. You are the center of the divinely expressed universe as it occurs through you and as you."
    }
  },
  "third_quarter": {
    "phase_key": "third_quarter",
    "phase_name": "Waning Moon",
    "illumination_range": "50%",
    "color_accent": "blush_red",
    "strategic_theme": "The Sacred 'No' & Strategic Purge",
    "core_frequency": "Cord Cutting, Pruning Inefficiencies & Setting Your Boundaries",
    "business_meaning": "Time for a surgical spring cleaning. You cannot step into your next empire while dragging expired commitments, fussy low-margin clients, or bloated software stacks. Saying a sharp, loving 'no' to what drains you is the only way to say a thunderous 'yes' to your next level.",
    "planning_framework": {
      "focus_areas": [
        "Financial audits: cancel zombie subscriptions and unnecessary operational bloat",
        "Prune sluggish offers, unengaged subscribers, and cluttered digital file systems",
        "Renegotiate or end misaligned client contracts with absolute clarity and grace"
      ],
      "strategic_inquiry": "What tolerated drain on your time, wallet, or sanity are you lovingly cutting off today?",
      "energy_cadence": "Discerning, releasing, liberating, holding your ground"
    },
    "execution_directives": {
      "priority_actions": [
        "Audit your bank statements and cancel recurring software you haven't used in 60 days.",
        "Politely decline or offboard misaligned commitments or draining clients.",
        "Clean and archive your desktop, downloads folder, and active email inbox."
      ],
      "what_to_pause": [
        "Holding onto unproductive obligations out of people-pleasing or guilt.",
        "Starting fresh commitments before you've cleared the messy old slate."
      ],
      "tuesday_afternoon_action": "Cancel 2 recurring subscriptions you haven't used in two months and archive open browser tabs that you were done with ages ago."
    },
    "activation_wisdom": {
      "source_activation": "Waning Moon Activation",
      "somatic_anchor": "Navel point cord clearing: Bring your attention to your navel point (belly button), this is your point of power. Make a point of releasing any active contractions that limit your expression and keep you small.",
      "core_transmission": "Say no to being minimized. When you say no to what no longer serves you, you say a deeper, sovereign yes to life.",
      "activation_excerpt": "This is a space where we get to clean and cleanse. Release the spaces where you hold onto past hurts. Allow the letting go process to happen with the utmost grace and ease."
    }
  },
  "waning_crescent": {
    "phase_key": "waning_crescent",
    "phase_name": "Waning Moon",
    "illumination_range": "49% - 0%",
    "color_accent": "teal",
    "strategic_theme": "Emptying the Vessel & Lush Restfulness",
    "core_frequency": "Deep Biological Replenishment & Sacred Spaciousness",
    "business_meaning": "The dark phase right before the next seed sprouts. High-performing leaders burn out when they treat this phase like a failure rather than a biological necessity. Close the laptop, sink into the couch, and allow your subconscious to weave the next breakthrough in the silence.",
    "planning_framework": {
      "focus_areas": [
        "Deep physical and nervous system restoration without a drop of guilt",
        "Spacious contemplation without the pressure to produce immediately",
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
        "Forcing epiphanies when your biological system is begging for rest."
      ],
      "tuesday_afternoon_action": "Designate tomorrow morning as an unscheduled focus block for rest, long walks, or pure strategic daydreaming."
    },
    "activation_wisdom": {
      "source_activation": "Waning Moon Activation",
      "somatic_anchor": "Whole-body relaxation: Releasing muscular holding patterns into the supportive ground.",
      "core_transmission": "Rest is not a reward for work completed; it's the fertile ground from which all future empire springs.",
      "activation_excerpt": "When the moon is waning down to dark, we are entering the temple of restoration. Emptying the vessel so the next divine frequency can enter without friction."
    }
  }
}

if __name__ == "__main__":
    kb = get_lunar_knowledge_base()
    print(f"Loaded {len(kb)} lunar phase entries successfully.")
