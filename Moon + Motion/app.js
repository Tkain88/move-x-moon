/**
 * Moon + Motion: Interactive Application Logic
 * Renders calendar, SVG moon phase graphics, and daily strategic readings.
 */

// Global State
let selectedDate = new Date();
let currentViewDate = new Date(); // Controls month/year shown in calendar

// SVG Moon Renderer
function generateMoonSVG(illumination, phaseAngleDegrees, size = 60) {
  // Normalize angle between 0 and 360
  const angle = ((phaseAngleDegrees % 360) + 360) % 360;
  const isWaxing = angle <= 180;
  
  // Calculate crescent curve factor (-1 to 1)
  // -1 is dark, 0 is half, 1 is full
  const k = Math.cos((angle * Math.PI) / 180);
  const r = size / 2 - 2;
  const cx = size / 2;
  const cy = size / 2;

  // We draw a base dark circle, then draw the lit portion
  let litPath = "";

  if (illumination <= 1.5) {
    // New moon: completely dark with subtle outline
    litPath = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#181818" stroke="#D4AF37" stroke-width="1.2" opacity="0.6"/>`;
  } else if (illumination >= 98.5) {
    // Full moon: fully illuminated golden white
    litPath = `
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#fullMoonGrad)" stroke="#D4AF37" stroke-width="1.5"/>
      <circle cx="${cx}" cy="${cy}" r="${r - 4}" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="0.75" stroke-dasharray="2 3"/>
    `;
  } else {
    // Crescent / Gibbous Arc calculation
    const sweepLit = isWaxing ? 1 : 0;
    
    // Control x for the terminator ellipse
    const rxTerminator = Math.abs(r * k);
    const terminatorSweep = (k < 0) ? (isWaxing ? 1 : 0) : (isWaxing ? 0 : 1);

    litPath = `
      <defs>
        <radialGradient id="moonGlow_${size}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFFDF7" stop-opacity="0.95"/>
          <stop offset="75%" stop-color="#EFE2C2" stop-opacity="0.85"/>
          <stop offset="100%" stop-color="#D4AF37" stop-opacity="0.95"/>
        </radialGradient>
      </defs>
      <!-- Base Dark Disk -->
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="#1A1816" stroke="rgba(197,160,89,0.3)" stroke-width="1"/>
      
      <!-- Lit Hemisphere / Curve -->
      <path d="
        M ${cx} ${cy - r}
        A ${r} ${r} 0 0 ${sweepLit} ${cx} ${cy + r}
        A ${rxTerminator} ${r} 0 0 ${terminatorSweep} ${cx} ${cy - r}
        Z
      " fill="url(#moonGlow_${size})" />
      
      <!-- Outer Rim Ring -->
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#C5A059" stroke-width="1.2" opacity="0.8"/>
    `;
  }

  return `
    <svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" class="moon-phase-graphic">
      <defs>
        <radialGradient id="fullMoonGrad" cx="45%" cy="45%" r="55%">
          <stop offset="0%" stop-color="#FFFFFF"/>
          <stop offset="60%" stop-color="#F7EFD8"/>
          <stop offset="100%" stop-color="#D4AF37"/>
        </radialGradient>
      </defs>
      ${litPath}
    </svg>
  `;
}

// Format Dates
function formatHumanDate(dateObj) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return dateObj.toLocaleDateString('en-US', options);
}

function formatMonthYear(dateObj) {
  return dateObj.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

// Render Calendar Month
function renderCalendar(viewDate, activeSelectedDate) {
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const titleEl = document.getElementById("calendarMonthTitle");
  if (titleEl) {
    titleEl.textContent = formatMonthYear(viewDate);
  }

  const daysGrid = document.getElementById("calendarDaysGrid");
  if (!daysGrid) return;
  daysGrid.innerHTML = "";

  const firstDayIndex = new Date(year, month, 1).getDay(); // 0 = Sun
  const totalDaysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonthLastDay = new Date(year, month, 0).getDate();

  const today = new Date();
  const todayStr = formatLocalDateString(today);
  const selectedStr = formatLocalDateString(activeSelectedDate);

  // Render Previous Month Padding Days
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    const prevDay = prevMonthLastDay - i;
    const dateCell = new Date(year, month - 1, prevDay);
    const details = calculateMoonDetails(dateCell);
    const cellEl = createDayCellElement(details, prevDay, true, selectedStr, todayStr);
    daysGrid.appendChild(cellEl);
  }

  // Render Current Month Days
  for (let day = 1; day <= totalDaysInMonth; day++) {
    const dateCell = new Date(year, month, day);
    const details = calculateMoonDetails(dateCell);
    const cellEl = createDayCellElement(details, day, false, selectedStr, todayStr);
    daysGrid.appendChild(cellEl);
  }

  // Render Next Month Padding Days to complete 35 or 42 grid cells
  const currentTotalCells = daysGrid.children.length;
  const targetTotal = currentTotalCells <= 35 ? 35 : 42;
  const remainingCells = targetTotal - currentTotalCells;

  for (let nextDay = 1; nextDay <= remainingCells; nextDay++) {
    const dateCell = new Date(year, month + 1, nextDay);
    const details = calculateMoonDetails(dateCell);
    const cellEl = createDayCellElement(details, nextDay, true, selectedStr, todayStr);
    daysGrid.appendChild(cellEl);
  }
}

function createDayCellElement(details, dayNum, isOtherMonth, selectedStr, todayStr) {
  const cell = document.createElement("div");
  cell.className = "cal-day-cell";
  if (isOtherMonth) cell.classList.add("other-month");
  if (details.dateString === todayStr) cell.classList.add("is-today");
  if (details.dateString === selectedStr) cell.classList.add("is-selected");

  // Indicator dot for primary anchor phases (New & Full)
  let dotHtml = "";
  if (details.phaseKey === "new_moon") {
    dotHtml = '<span class="day-key-phase-dot dot-new" title="New Moon Anchor (Seed Big Visions)"></span>';
  } else if (details.phaseKey === "full_moon") {
    dotHtml = '<span class="day-key-phase-dot dot-full" title="Full Moon Anchor (Peak Harvest)"></span>';
  }

  cell.innerHTML = `
    <span class="day-num">${dayNum}</span>
    <div class="day-moon-container">
      ${generateMoonSVG(details.illumination, details.phaseAngleDegrees, 18)}
    </div>
    ${dotHtml}
  `;

  cell.addEventListener("click", () => {
    selectedDate = new Date(details.date);
    renderDashboard(selectedDate);
    renderCalendar(currentViewDate, selectedDate);
  });

  return cell;
}

// Render the entire Reading Dashboard for a chosen date
function renderDashboard(dateObj) {
  const details = calculateMoonDetails(dateObj);
  const kb = details.knowledge;

  // 1. Update Top Banner / Live Status
  const bannerPhase = document.getElementById("bannerPhaseName");
  const bannerIllum = document.getElementById("bannerIllumBadge");
  const bannerPrompt = document.getElementById("bannerPromptText");
  const bannerMoon = document.getElementById("bannerMiniMoon");

  if (bannerPhase) bannerPhase.textContent = details.phaseName;
  if (bannerIllum) bannerIllum.textContent = `${details.illumination}% Illumination`;
  if (bannerPrompt) bannerPrompt.innerHTML = `"${kb.planning_framework.strategic_inquiry}"`;
  if (bannerMoon) bannerMoon.innerHTML = generateMoonSVG(details.illumination, details.phaseAngleDegrees, 36);

  // 2. Update Hero Reading Card
  const heroDate = document.getElementById("readingHumanDate");
  const heroPhase = document.getElementById("readingPhaseHeading");
  const heroSub = document.getElementById("readingPhaseSub");
  const heroMoon = document.getElementById("heroLargeMoon");
  const heroIllum = document.getElementById("metricIllum");
  const heroAge = document.getElementById("metricAge");
  const heroZodiac = document.getElementById("metricZodiac");

  if (heroDate) heroDate.textContent = formatHumanDate(dateObj);
  if (heroPhase) heroPhase.textContent = details.phaseName;
  if (heroSub) heroSub.textContent = details.cycleQuarter;
  if (heroMoon) heroMoon.innerHTML = generateMoonSVG(details.illumination, details.phaseAngleDegrees, 92);
  if (heroIllum) heroIllum.textContent = `${details.illumination}%`;
  if (heroAge) heroAge.textContent = `${details.ageInDays} Days`;
  if (heroZodiac) heroZodiac.textContent = details.zodiacSign;

  // 3. Strategic Theme
  const themeEyebrow = document.getElementById("themeEyebrow");
  const themeTitle = document.getElementById("themeTitle");
  const themeNarrative = document.getElementById("themeNarrative");

  if (themeTitle) themeTitle.textContent = kb.strategic_theme;
  if (themeEyebrow) themeEyebrow.textContent = kb.core_frequency;
  if (themeNarrative) themeNarrative.innerHTML = kb.business_meaning;

  // 4. Tactical Card 1: How to Plan
  const planList = document.getElementById("planningFocusList");
  const planInquiry = document.getElementById("strategicInquiryQuote");
  const planEnergy = document.getElementById("energyCadenceBadge");
  const planPauseList = document.getElementById("planningPauseList");

  if (planList) {
    planList.innerHTML = kb.planning_framework.focus_areas.map(item => `<li>${item}</li>`).join("");
  }
  if (planInquiry) planInquiry.innerHTML = `"${kb.planning_framework.strategic_inquiry}"`;
  if (planEnergy) planEnergy.textContent = kb.planning_framework.energy_cadence;
  if (planPauseList && kb.execution_directives.what_to_pause) {
    planPauseList.innerHTML = kb.execution_directives.what_to_pause.map(item => `<li>${item}</li>`).join("");
  }

  // 5. Tactical Card 2: What to Execute
  const execList = document.getElementById("executionPriorityList");
  const tuesdayDirective = document.getElementById("tuesdayDirectiveText");

  if (execList) {
    execList.innerHTML = kb.execution_directives.priority_actions.map(action => `
      <li>
        <label style="cursor:pointer; display:flex; align-items:flex-start; gap:8px;">
          <input type="checkbox" style="margin-top:4px; accent-color:var(--accent-orange);" onchange="this.parentElement.style.textDecoration = this.checked ? 'line-through' : 'none'; this.parentElement.style.opacity = this.checked ? '0.6' : '1';">
          <span>${action}</span>
        </label>
      </li>
    `).join("");
  }
  if (tuesdayDirective) tuesdayDirective.textContent = kb.execution_directives.tuesday_afternoon_action;

  // 6. Somatic Anchor & Activation Wisdom
  const somaticInstruction = document.getElementById("somaticInstruction");
  const wisdomQuote = document.getElementById("activationWisdomQuote");
  const quoteAttribution = document.getElementById("quoteAttribution");

  if (somaticInstruction) somaticInstruction.textContent = kb.activation_wisdom.somatic_anchor;
  if (wisdomQuote) wisdomQuote.textContent = `"${kb.activation_wisdom.core_transmission}"`;
  if (quoteAttribution) quoteAttribution.textContent = `Direct Transmission: ${kb.activation_wisdom.source_activation}`;
}

// Find Next Target Moon Phase Date
function jumpToNextPhase(target) {
  let probe = new Date(selectedDate);
  // Search up to 35 days forward
  for (let i = 1; i <= 35; i++) {
    probe.setDate(probe.getDate() + 1);
    const det = calculateMoonDetails(probe);
    if (target === "new_moon" && det.phaseKey === "new_moon") {
      selectedDate = new Date(probe);
      currentViewDate = new Date(probe);
      renderDashboard(selectedDate);
      renderCalendar(currentViewDate, selectedDate);
      return;
    }
    if (target === "full_moon" && det.phaseKey === "full_moon") {
      selectedDate = new Date(probe);
      currentViewDate = new Date(probe);
      renderDashboard(selectedDate);
      renderCalendar(currentViewDate, selectedDate);
      return;
    }
    if (target === "waxing_moon" && det.phaseName === "Waxing Moon") {
      selectedDate = new Date(probe);
      currentViewDate = new Date(probe);
      renderDashboard(selectedDate);
      renderCalendar(currentViewDate, selectedDate);
      return;
    }
    if (target === "waning_moon" && det.phaseName === "Waning Moon") {
      selectedDate = new Date(probe);
      currentViewDate = new Date(probe);
      renderDashboard(selectedDate);
      renderCalendar(currentViewDate, selectedDate);
      return;
    }
  }
}

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  // Calendar Navigation
  const btnPrevMonth = document.getElementById("btnPrevMonth");
  const btnNextMonth = document.getElementById("btnNextMonth");

  if (btnPrevMonth) {
    btnPrevMonth.addEventListener("click", () => {
      currentViewDate = new Date(currentViewDate.getFullYear(), currentViewDate.getMonth() - 1, 1);
      renderCalendar(currentViewDate, selectedDate);
    });
  }

  if (btnNextMonth) {
    btnNextMonth.addEventListener("click", () => {
      currentViewDate = new Date(currentViewDate.getFullYear(), currentViewDate.getMonth() + 1, 1);
      renderCalendar(currentViewDate, selectedDate);
    });
  }

  // Quick Jump Phase Buttons (4 Core Business Rhythms)
  const btnJumpNew = document.getElementById("btnJumpNextNew");
  const btnJumpWaxing = document.getElementById("btnJumpNextWaxing");
  const btnJumpFull = document.getElementById("btnJumpNextFull");
  const btnJumpWaning = document.getElementById("btnJumpNextWaning");

  if (btnJumpNew) btnJumpNew.addEventListener("click", () => jumpToNextPhase("new_moon"));
  if (btnJumpWaxing) btnJumpWaxing.addEventListener("click", () => jumpToNextPhase("waxing_moon"));
  if (btnJumpFull) btnJumpFull.addEventListener("click", () => jumpToNextPhase("full_moon"));
  if (btnJumpWaning) btnJumpWaning.addEventListener("click", () => jumpToNextPhase("waning_moon"));

  // Initial Render
  renderDashboard(selectedDate);
  renderCalendar(currentViewDate, selectedDate);
});
