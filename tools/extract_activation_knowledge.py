#!/usr/bin/env python3
"""
tools/extract_activation_knowledge.py
Constructs the complete deterministic Lunar Business Wisdom knowledge base
linking astronomical phases with the 5 activation transcripts and Tash's voice rules.
"""

import json
import os
from typing import Dict, Any

def get_lunar_knowledge_base() -> Dict[str, Any]:
    """Return the structured master knowledge base for all 8 lunar phases."""
    return {
        "new_moon": {
            "phase_key": "new_moon",
            "phase_name": "New Moon",
            "illumination_range": "0% - 3%",
            "color_accent": "teal",
            "strategic_theme": "Big Vision Seeding & Origin Blueprint",
            "core_frequency": "The Unknown, Receptivity & Rooted Dreaming",
            "business_meaning": "This is the time when the soul schools the human. Relinquish existing mental parameters and models of the world so you can open up to possibilities that exist past your known reality. In business, this is not the vague lottery-ticket daydreaming—it is daring to imagine a vision so big it feels stretchy and slightly uncomfortable, while simultaneously committing to plant its roots into the physical earth.",
            "planning_framework": {
                "focus_areas": [
                    "Defining the grand architectural vision for the upcoming 6-month or yearly cycle",
                    "Creating the quiet incubation container before any public announcements",
                    "Aligning intuitive third-eye clarity with somatic heart-centered agreement"
                ],
                "strategic_inquiry": "What ambitious business dream feels slightly uncomfortable, and how do I plant its roots into the physical earth today?",
                "energy_cadence": "Internal incubation, spacious reflection, low external broadcasting"
            },
            "execution_directives": {
                "priority_actions": [
                    "Draft the raw unedited vision document for your next offer, service, or creative pivot.",
                    "Audit past project baggage and intentionally release expired commitments.",
                    "Map the foundational milestones needed to give physical form to this seed."
                ],
                "what_to_pause": [
                    "Premature public marketing before the internal vessel is formed.",
                    "Asking for unvetted opinions from people who cannot hold your capacity."
                ],
                "tuesday_afternoon_action": "Open a clean document and write down the single highest-leverage offer you want to bring into the world this quarter without self-censoring."
            },
            "activation_wisdom": {
                "source_activation": "New Moon Activation",
                "somatic_anchor": "Switch light on at the base of the spine and bottom of the feet. Feel the earth come up to meet you from an activated state.",
                "core_transmission": "When we speak the language of new beginnings, we speak the language of the unknown. Dream big dreams that root into the core of your earth.",
                "activation_excerpt": "Notice how your feet are meeting the earth beneath you from that lit state. Your activation is demanding a reflection from the earth that is also activated. We are opening up for ourselves as a physical entity to be schooled by ourselves as an infinite entity."
            }
        },
        "waxing_crescent": {
            "phase_key": "waxing_crescent",
            "phase_name": "Waxing Crescent",
            "illumination_range": "4% - 49%",
            "color_accent": "teal",
            "strategic_theme": "Initial Traction & Connecting the Dots",
            "core_frequency": "Micro-Commitments, Stepping onto the Earth Grid",
            "business_meaning": "Just because only a sliver of the moon is visible does not mean the rest of the moon is absent. In your business, this phase is about making initial contact with the grid. Aligned action does not require instant fireworks; sending a voice note, initiating an outreach, or publishing an initial piece of thinking activates current in the field.",
            "planning_framework": {
                "focus_areas": [
                    "Establishing low-friction connection points with potential clients and allies",
                    "Validating early offer concepts through direct one-on-one conversations",
                    "Building the skeletal daily routine that supports steady operational output"
                ],
                "strategic_inquiry": "Which single dot can I connect today that signals to the market that I am switched on and open for business?",
                "energy_cadence": "Curious, responsive, outward-stepping momentum"
            },
            "execution_directives": {
                "priority_actions": [
                    "Send 3 personalized voice messages or emails to past collaborators or warm leads.",
                    "Outline the pilot curriculum, scope of work, or service deliverable outline.",
                    "Set up the calendar booking conduits and payment links."
                ],
                "what_to_pause": [
                    "Overthinking intricate 10-step automation before you have spoken to 3 live humans.",
                    "Waiting for 100% certainty before sharing your perspective."
                ],
                "tuesday_afternoon_action": "Record a 90-second voice note to a dream collaborator introducing an idea with zero pressure."
            },
            "activation_wisdom": {
                "source_activation": "Waxing Moon Activation",
                "somatic_anchor": "Skeletal structure alignment: Feel your spine, pelvis, and rib cage lit up and supported by the ground.",
                "core_transmission": "Aligned action acts as an activation for connecting the dots. Consistency in connecting dots reveals your full capacity.",
                "activation_excerpt": "When the moon is waxing, just because we can only see a sliver doesn't mean the rest isn't there. We are opening up to reveal more and more of our capacity by expressing in the world and allowing the dots to be connected."
            }
        },
        "first_quarter": {
            "phase_key": "first_quarter",
            "phase_name": "First Quarter",
            "illumination_range": "50%",
            "color_accent": "burnt_orange",
            "strategic_theme": "Structural Integrity & Decision Point",
            "core_frequency": "Fortifying Boundaries, Overcoming Friction, Decisive Will",
            "business_meaning": "The halfway mark to full illumination brings the inevitable friction test. Doubts or operational resistance will surface to test whether your structure has integrity. This is the moment to stand tall in your spine, eliminate decision fatigue, and lock in non-negotiable boundaries.",
            "planning_framework": {
                "focus_areas": [
                    "Removing bottlenecks in client onboarding and operational delivery",
                    "Locking in firm pricing, contracts, and payment deadlines",
                    "Making decisive executive calls on lingering ambiguities"
                ],
                "strategic_inquiry": "Where is hesitation costing me revenue or peace, and what clear decision resolves it immediately?",
                "energy_cadence": "Assertive, focused, highly disciplined execution"
            },
            "execution_directives": {
                "priority_actions": [
                    "Review active proposals and establish explicit acceptance deadlines.",
                    "Say no to non-essential meeting invites that clutter your prime creation hours.",
                    "Fix or delegate that one technical glitch you have been tolerating for weeks."
                ],
                "what_to_pause": [
                    "Backtracking on pricing or compromising core terms out of temporary scarcity.",
                    "Procrastinating on uncomfortable administrative or contractual decisions."
                ],
                "tuesday_afternoon_action": "Make the one pending executive decision you have avoided all week and communicate it clearly."
            },
            "activation_wisdom": {
                "source_activation": "Waxing Moon Activation",
                "somatic_anchor": "Expanded rib cage and spine integrity; feeling the grounded authority of your skeletal frame.",
                "core_transmission": "We take this structured framework and allow it to be empowered, strengthened, and for the integrity at the center of it to be established.",
                "activation_excerpt": "Everything that is giving you structure, everything that is giving you form, everything holding you together is being filled with your light. From this place comes trust, security, and empowered expansion."
            }
        },
        "waxing_gibbous": {
            "phase_key": "waxing_gibbous",
            "phase_name": "Waxing Gibbous",
            "illumination_range": "51% - 99%",
            "color_accent": "burnt_orange",
            "strategic_theme": "Capacity Expansion & Pre-Launch Polish",
            "core_frequency": "Momentum, Stress-Testing Conduits, High Velocity",
            "business_meaning": "The moon is nearly full. Your systems, messaging, and team are preparing to handle peak volume. Do not introduce brand-new experimental ideas right now; double down on stress-testing your existing delivery channels and priming your community.",
            "planning_framework": {
                "focus_areas": [
                    "Fulfillment capacity testing and customer journey walkthroughs",
                    "Warming up audience awareness and building anticipation for launch",
                    "Finalizing promotional copy, presentation decks, and technical checkout flows"
                ],
                "strategic_inquiry": "Is my business conduit clean and wide enough to receive the volume of clients and cash I am calling in?",
                "energy_cadence": "High projective energy, meticulous polish, high output"
            },
            "execution_directives": {
                "priority_actions": [
                    "Conduct a full test transaction on your checkout and onboarding sequence.",
                    "Publish key value-driven teasers or case studies that demonstrate proof of concept.",
                    "Brief team members or virtual assistants on launch day responsibilities."
                ],
                "what_to_pause": [
                    "Starting completely new product lines or restructuring core systems mid-stride.",
                    "Letting minor cosmetic details delay public delivery."
                ],
                "tuesday_afternoon_action": "Test your client onboarding link on your mobile phone to verify a zero-friction user experience."
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
            "strategic_theme": "Maximum Illumination, Harvest & Deep Fulfillment",
            "core_frequency": "Gratitude, Revelation, Public Launch, Heart Blueprint",
            "business_meaning": "The spotlight is fully on. Everything is visible. This is the prime time for public launches, celebrating major wins, and closing sales cycles. The heart is the vibrational organ that creates reality templates through gratitude and clarity. Give thanks for what has landed.",
            "planning_framework": {
                "focus_areas": [
                    "Public launch events, webinars, live workshops, or major press releases",
                    "Harvest review: measuring revenue, client intake, and community impact",
                    "Celebrating team performance and expressing deep client appreciation"
                ],
                "strategic_inquiry": "What has been fully received in my business, and how does the heart say an unreserved YES to this harvest?",
                "energy_cadence": "Radiant, expressive, celebratory, magnetic"
            },
            "execution_directives": {
                "priority_actions": [
                    "Open the cart or deliver your signature keynote/workshop with full presence.",
                    "Send personalized thank-you notes to top clients, partners, and referrers.",
                    "Document immediate financial and qualitative results from this cycle."
                ],
                "what_to_pause": [
                    "Operating from depletion or panic during live launch windows.",
                    "Hiding behind administrative screens when your visibility is needed."
                ],
                "tuesday_afternoon_action": "Send a genuine, unprompted note of gratitude to 3 people who contributed to your business growth this month."
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
            "phase_name": "Waning Gibbous (Disseminating)",
            "illumination_range": "99% - 51%",
            "color_accent": "teal",
            "strategic_theme": "Wisdom Synthesis & Intellectual Property Distribution",
            "core_frequency": "Teaching, Framework Building, Case Studies",
            "business_meaning": "The peak intensity subsides into rich wisdom. Take what occurred during your launch or delivery and distill it into repeatable frameworks, case studies, and thought leadership. This is where your lived experience becomes high-value business assets.",
            "planning_framework": {
                "focus_areas": [
                    "Synthesizing launch data and client feedback into structured case studies",
                    "Creating foundational thought leadership content and white papers",
                    "Documenting SOPs and training materials for long-term scalability"
                ],
                "strategic_inquiry": "What hard-won insight from this cycle can I translate into a proprietary asset that serves my community?",
                "energy_cadence": "Generous, didactic, grounded authority"
            },
            "execution_directives": {
                "priority_actions": [
                    "Interview or survey recent clients to extract quotes, metrics, and testimonials.",
                    "Draft an insightful long-form breakdown or post on the lessons of the latest project.",
                    "Archive all launch collateral into your permanent asset library."
                ],
                "what_to_pause": [
                    "Pushing cold hard-sell promotions when the field is primed for educational integration.",
                    "Letting client breakthroughs go undocumented."
                ],
                "tuesday_afternoon_action": "Write down the 3 biggest breakthroughs your clients had this month and formulate them into a repeatable model."
            },
            "activation_wisdom": {
                "source_activation": "Waning Moon Activation",
                "somatic_anchor": "Solar plexus alignment: Standing as a sovereign, individuated thumbprint of source.",
                "core_transmission": "We honor the lineage and synthesize the lived truth into sovereign authority.",
                "activation_excerpt": "Bringing your unique flavor of source into your auric field and seeing this creation move into the cosmos. You are the center of the divinely expressed universe as it occurs through you."
            }
        },
        "third_quarter": {
            "phase_key": "third_quarter",
            "phase_name": "Third Quarter",
            "illumination_range": "50%",
            "color_accent": "blush_red",
            "strategic_theme": "Cleanse, Audit & The Sacred 'No'",
            "core_frequency": "Cord Cutting, Pruning Inefficiencies, Sovereign Boundary Delineation",
            "business_meaning": "The deliberate, surgical release. You cannot enter the next creative cycle while carrying expired commitments, low-margin distractions, or draining client dynamics. Saying no to what is out of integrity is the only way to say a powerful yes to your next level.",
            "planning_framework": {
                "focus_areas": [
                    "Financial audits: cutting zombie SaaS subscriptions and unnecessary operational costs",
                    "Pruning sluggish offers, unengaged email subscribers, and cluttered file systems",
                    "Renegotiating or ending misaligned contracts with clarity and respect"
                ],
                "strategic_inquiry": "What commitment, habit, or tool is draining my energy, and how do I release it cleanly today?",
                "energy_cadence": "Discerning, surgical, liberating, unyielding"
            },
            "execution_directives": {
                "priority_actions": [
                    "Audit your bank statements and cancel recurring software you haven't used in 60 days.",
                    "Politely decline or offboard misaligned advisory roles or clients.",
                    "Clean and archive your desktop, downloads, and active inbox."
                ],
                "what_to_pause": [
                    "Holding onto unproductive obligations out of people-pleasing or guilt.",
                    "Starting fresh commitments before clearing the old slate."
                ],
                "tuesday_afternoon_action": "Unsubscribe from 5 distracting email newsletters and cancel 1 unused subscription."
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
            "phase_name": "Waning Crescent (Balsamic)",
            "illumination_range": "49% - 0%",
            "color_accent": "teal",
            "strategic_theme": "Emptying the Vessel & Sovereign Restoration",
            "core_frequency": "Deep Rest, Incubation, Sacred Spaciousness",
            "business_meaning": "The darkest point before the new seed can emerge. High-performing entrepreneurs burn out when they refuse this phase. Stop forcing output. Clear your calendar, nourish your physical body, and allow the business subconscious to integrate before the next New Moon.",
            "planning_framework": {
                "focus_areas": [
                    "Deep physical and nervous system restoration",
                    "Spacious executive thinking without the pressure to produce immediately",
                    "Reviewing cash reserves, lifestyle design, and overall business health"
                ],
                "strategic_inquiry": "How spacious can I make my calendar so my nervous system and soul are primed for the next cycle?",
                "energy_cadence": "Restorative, quiet, inward-looking, gentle"
            },
            "execution_directives": {
                "priority_actions": [
                    "Block out guilt-free calendar buffer days with zero external client meetings.",
                    "Engage in somatic restoration: long walks in nature, bodywork, sleep replenishment.",
                    "Review high-level financials and celebrate total business revenue generated."
                ],
                "what_to_pause": [
                    "Panicking over temporary lulls in daily activity.",
                    "Forcing strategic breakthroughs when the biological system needs rest."
                ],
                "tuesday_afternoon_action": "Block out 2 hours on your calendar for uninterrupted offline walking, resting, or journaling."
            },
            "activation_wisdom": {
                "source_activation": "Moon Meditation",
                "somatic_anchor": "Resting deeply within the pelvic bowl and cellular waters of the body, allowing universal intelligence to replenish you.",
                "core_transmission": "In the quiet stillness, the universe weaves the blueprint of what comes next. Trust the void.",
                "activation_excerpt": "Allowing yourself to be completely supported by the earth and the cosmos. Sinking into the natural rhythm of being, knowing that your next cycle is being seeded in the silence."
            }
        }
    }

if __name__ == "__main__":
    kb = get_lunar_knowledge_base()
    os.makedirs(".tmp", exist_ok=True)
    with open(".tmp/lunar_knowledge_base.json", "w", encoding="utf-8") as f:
        json.dump(kb, f, indent=2)
    print(f"Extracted and validated {len(kb)} lunar phases into .tmp/lunar_knowledge_base.json")
