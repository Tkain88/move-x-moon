/**
 * Move x Moon (Well Kept Edition): Luxury Editorial Sanctuary Logic
 * Fixed Left Calendar under Hero + Spacious Scrolling Right Stream
 * Renders SVG moon graphics, personal Being readings, dynamic editorial photography,
 * persistent "Little Things" checklists, and private reflection journal.
 */

// Global State
let selectedDate = new Date();
let currentViewDate = new Date();

// LocalStorage Helpers for Personal Progress & Reflections
function getStorageState(key, fallback) {
  try {
    const raw = localStorage.getItem(`movexmoon_wk_${key}`);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}

function setStorageState(key, val) {
  try {
    localStorage.setItem(`movexmoon_wk_${key}`, JSON.stringify(val));
  } catch (e) {
    // Ignore storage quota errors in restricted iframes
  }
}

// SVG Moon Renderer
function generateMoonSVG(illumination, phaseAngleDegrees, size = 60) {
  const angle = ((phaseAngleDegrees % 360) + 360) % 360;
  const isWaxing = angle <= 180;
  const k = Math.cos((angle * Math.PI) / 180);
  const r = size / 2 - 2;
  const cx = size / 2;
  const cy = size / 2;

  let litPath = "";

  if (illumination <= 1.5) {
    litPath = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#181818" stroke="#D4AF37" stroke-width="1.2" opacity="0.65"/>`;
  } else if (illumination >= 98.5) {
    litPath = `
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#fullMoonGrad)" stroke="#D4AF37" stroke-width="1.5"/>
      <circle cx="${cx}" cy="${cy}" r="${r - 4}" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="0.75" stroke-dasharray="2 3"/>
    `;
  } else {
    const sweepLit = isWaxing ? 1 : 0;
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
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="#1A1816" stroke="rgba(197,160,89,0.3)" stroke-width="1"/>
      <path d="
        M ${cx} ${cy - r}
        A ${r} ${r} 0 0 ${sweepLit} ${cx} ${cy + r}
        A ${rxTerminator} ${r} 0 0 ${terminatorSweep} ${cx} ${cy - r}
        Z
      " fill="url(#moonGlow_${size})" />
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

  const firstDayIndex = new Date(year, month, 1).getDay();
  const totalDaysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonthLastDay = new Date(year, month, 0).getDate();

  const today = new Date();
  const todayStr = formatLocalDateString(today);
  const selectedStr = formatLocalDateString(activeSelectedDate);

  // Previous Month Padding
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    const prevDay = prevMonthLastDay - i;
    const dateCell = new Date(year, month - 1, prevDay);
    const details = calculateMoonDetails(dateCell);
    daysGrid.appendChild(createDayCellElement(details, prevDay, true, selectedStr, todayStr));
  }

  // Current Month Days
  for (let day = 1; day <= totalDaysInMonth; day++) {
    const dateCell = new Date(year, month, day);
    const details = calculateMoonDetails(dateCell);
    daysGrid.appendChild(createDayCellElement(details, day, false, selectedStr, todayStr));
  }

  // Next Month Padding
  const currentTotalCells = daysGrid.children.length;
  const targetTotal = currentTotalCells <= 35 ? 35 : 42;
  const remainingCells = targetTotal - currentTotalCells;

  for (let nextDay = 1; nextDay <= remainingCells; nextDay++) {
    const dateCell = new Date(year, month + 1, nextDay);
    const details = calculateMoonDetails(dateCell);
    daysGrid.appendChild(createDayCellElement(details, nextDay, true, selectedStr, todayStr));
  }
}

function createDayCellElement(details, dayNum, isOtherMonth, selectedStr, todayStr) {
  const cell = document.createElement("div");
  cell.className = "cal-day-cell";
  if (isOtherMonth) cell.classList.add("other-month");
  if (details.dateString === todayStr) cell.classList.add("is-today");
  if (details.dateString === selectedStr) cell.classList.add("is-selected");

  let dotHtml = '<span class="day-key-phase-dot" style="opacity:0"></span>';
  if (details.phaseKey === "new_moon") {
    dotHtml = '<span class="day-key-phase-dot dot-new" title="New Moon (Planting Seeds)"></span>';
  } else if (details.phaseKey === "full_moon") {
    dotHtml = '<span class="day-key-phase-dot dot-full" title="Full Moon (Celebrating What Is Here)"></span>';
  } else if (details.phaseKey === "first_quarter" || details.phaseKey === "third_quarter") {
    dotHtml = '<span class="day-key-phase-dot dot-quarter" title="Half-Lit 50% Moon"></span>';
  }

  cell.innerHTML = `
    <span class="day-num">${dayNum}</span>
    <div class="day-moon-container">
      ${generateMoonSVG(details.illumination, details.phaseAngleDegrees, 20)}
    </div>
    ${dotHtml}
  `;

  cell.addEventListener("click", () => {
    selectAndRenderDate(details.date, true);
  });

  return cell;
}

// Render the Personal Editorial Sanctuary for a chosen date
function renderDashboard(dateObj) {
  const details = calculateMoonDetails(dateObj);
  const kb = details.knowledge;
  const todayStr = formatLocalDateString(new Date());
  const isToday = details.dateString === todayStr;

  // 1. Update Top Hero Live Status Bar
  const bannerDateLabel = document.getElementById("bannerDateLabel");
  const bannerPhase = document.getElementById("bannerPhaseName");
  const bannerIllum = document.getElementById("bannerIllumBadge");
  const bannerRhythm = document.getElementById("bannerRhythmBadge");
  const bannerPrompt = document.getElementById("bannerPromptText");
  const bannerMoon = document.getElementById("bannerMiniMoon");

  if (bannerDateLabel) {
    bannerDateLabel.textContent = isToday ? "Your Active Phase Today" : `Selected Date: ${formatHumanDate(dateObj)}`;
  }
  if (bannerPhase) bannerPhase.textContent = details.phaseName;
  if (bannerIllum) bannerIllum.textContent = `${details.illumination}% Illumination`;
  if (bannerRhythm) bannerRhythm.textContent = details.stageType || "Lunar Rhythm";
  if (bannerPrompt) bannerPrompt.innerHTML = `"${kb.planning_framework.strategic_inquiry}"`;
  if (bannerMoon) bannerMoon.innerHTML = generateMoonSVG(details.illumination, details.phaseAngleDegrees, 48);

  // 2. Update Section 1: Meaning For Your Life + Striking Portrait
  const heroDate = document.getElementById("readingHumanDate");
  const heroIllumRange = document.getElementById("readingIllumRange");
  const heroPhase = document.getElementById("readingPhaseHeading");
  const heroSub = document.getElementById("readingPhaseSub");
  const heroMoon = document.getElementById("heroLargeMoon");
  const heroIllum = document.getElementById("metricIllum");
  const heroAge = document.getElementById("metricAge");
  const heroZodiac = document.getElementById("metricZodiac");
  const planEnergy = document.getElementById("energyCadenceBadge");

  if (heroDate) {
    heroDate.textContent = isToday
      ? `Today • ${formatHumanDate(dateObj)}`
      : `Selected Date • ${formatHumanDate(dateObj)}`;
  }
  if (heroIllumRange) heroIllumRange.textContent = kb.illumination_range || `${details.illumination}% Illumination`;
  if (heroPhase) heroPhase.textContent = details.phaseName;
  if (heroSub) heroSub.textContent = details.cycleQuarter;
  if (heroMoon) heroMoon.innerHTML = generateMoonSVG(details.illumination, details.phaseAngleDegrees, 104);
  if (heroIllum) heroIllum.textContent = `${details.illumination}%`;
  if (heroAge) heroAge.textContent = `Day ${details.ageInDays}`;
  if (heroZodiac) heroZodiac.textContent = details.zodiacSign;
  if (planEnergy) planEnergy.textContent = kb.planning_framework.energy_cadence;

  const themeEyebrow = document.getElementById("themeEyebrow");
  const themeTitle = document.getElementById("themeTitle");
  const themeNarrative = document.getElementById("themeNarrative");
  const chapterOnePortraitImg = document.getElementById("chapterOnePortraitImg");

  if (themeTitle) themeTitle.textContent = kb.strategic_theme;
  if (themeEyebrow) themeEyebrow.textContent = kb.core_frequency;
  if (themeNarrative) themeNarrative.innerHTML = kb.business_meaning;
  if (chapterOnePortraitImg && kb.editorial_image) {
    chapterOnePortraitImg.src = kb.editorial_image;
    chapterOnePortraitImg.alt = kb.strategic_theme || details.phaseName;
  }

  // 3. Update Section 2: Question For You My Love + Private Reflection
  const planInquiry = document.getElementById("strategicInquiryQuote");
  if (planInquiry) planInquiry.innerHTML = `"${kb.planning_framework.strategic_inquiry}"`;

  const journalInput = document.getElementById("personalJournalInput");
  const journalToggleText = document.getElementById("journalToggleText");
  if (journalInput) {
    const savedNote = getStorageState(`journal_${details.phaseKey}`, "");
    journalInput.value = savedNote;
    journalInput.dataset.phaseKey = details.phaseKey;
    if (journalToggleText) {
      const drawer = document.getElementById("personalJournalDrawer");
      const isHidden = drawer ? drawer.hasAttribute("hidden") : true;
      journalToggleText.textContent = !isHidden
        ? "Close Reflection Note"
        : (savedNote.trim().length > 0 ? "Open Your Saved Reflection" : "Open Your Private Reflection");
    }
  }

  // 4. Update Section 3: How to Plan & What to Do: Little Things
  const planList = document.getElementById("planningFocusList");
  const planPauseList = document.getElementById("planningPauseList");

  if (planList) {
    planList.innerHTML = kb.planning_framework.focus_areas.map(item => `<li>${item}</li>`).join("");
  }
  if (planPauseList && kb.execution_directives.what_to_pause) {
    planPauseList.innerHTML = kb.execution_directives.what_to_pause.map(item => `<li>${item}</li>`).join("");
  }

  const execList = document.getElementById("executionPriorityList");
  const progressBadge = document.getElementById("littleThingsProgressBadge");
  const tuesdayDirective = document.getElementById("tuesdayDirectiveText");
  const tuesdayDirectiveInline = document.getElementById("tuesdayDirectiveTextInline");
  const missionFeatureImg = document.getElementById("missionFeatureImg");

  const checkedMap = getStorageState(`checks_${details.phaseKey}`, {});
  const actions = kb.execution_directives.priority_actions;

  function updateChecklistProgress() {
    const total = actions.length;
    const doneCount = Object.values(checkedMap).filter(Boolean).length;
    if (progressBadge) {
      progressBadge.textContent = `${doneCount} of ${total} Done`;
    }
  }

  if (execList) {
    execList.innerHTML = actions.map((action, idx) => {
      const isChecked = Boolean(checkedMap[idx]);
      return `
        <li>
          <label class="checklist-item-label ${isChecked ? 'is-checked' : ''}">
            <input type="checkbox" class="checklist-input" data-idx="${idx}" ${isChecked ? 'checked' : ''}>
            <span class="checklist-text">${action}</span>
          </label>
        </li>
      `;
    }).join("");

    execList.querySelectorAll(".checklist-input").forEach(input => {
      input.addEventListener("change", (e) => {
        const idx = e.target.getAttribute("data-idx");
        checkedMap[idx] = e.target.checked;
        setStorageState(`checks_${details.phaseKey}`, checkedMap);
        const label = e.target.closest(".checklist-item-label");
        if (label) {
          label.classList.toggle("is-checked", e.target.checked);
        }
        updateChecklistProgress();
      });
    });
  }
  updateChecklistProgress();

  // Today's Tiny Mission & "I've Done This" Button
  if (tuesdayDirective) tuesdayDirective.textContent = `"${kb.execution_directives.tuesday_afternoon_action}"`;
  if (tuesdayDirectiveInline) tuesdayDirectiveInline.textContent = kb.execution_directives.tuesday_afternoon_action;
  if (missionFeatureImg && kb.mission_image) {
    missionFeatureImg.src = kb.mission_image;
  }

  const btnMission = document.getElementById("btnMissionComplete");
  const missionStatusPill = document.getElementById("missionStatusPill");
  const missionBtnLabel = document.getElementById("missionBtnLabel");
  const isMissionDone = getStorageState(`mission_${details.dateString}`, false);

  function renderMissionButtonState(done) {
    if (!btnMission) return;
    btnMission.classList.toggle("is-completed", done);
    if (missionBtnLabel) {
      missionBtnLabel.textContent = done ? "I've Done This (Completed)" : "I've Done This";
    }
    if (missionStatusPill) {
      missionStatusPill.textContent = done ? "Complete" : "One Grounded Move";
      missionStatusPill.className = `pill-badge ${done ? 'pill-teal' : 'pill-orange'}`;
    }
  }

  renderMissionButtonState(isMissionDone);
  if (btnMission) {
    btnMission.onclick = () => {
      const current = getStorageState(`mission_${details.dateString}`, false);
      const next = !current;
      setStorageState(`mission_${details.dateString}`, next);
      renderMissionButtonState(next);
    };
  }

  // 5. Update Section 4: Somatic Root & Embodied Wisdom
  const somaticInstruction = document.getElementById("somaticInstruction");
  const wisdomQuote = document.getElementById("activationWisdomQuote");
  const wisdomExcerpt = document.getElementById("activationWisdomExcerpt");
  const quoteAttribution = document.getElementById("quoteAttribution");
  const primaryImg = document.getElementById("somaticPrimaryImg");
  const secondaryImg = document.getElementById("somaticSecondaryImg");

  if (somaticInstruction) somaticInstruction.textContent = kb.activation_wisdom.somatic_anchor;
  if (wisdomQuote) wisdomQuote.textContent = `"${kb.activation_wisdom.core_transmission}"`;
  if (wisdomExcerpt) wisdomExcerpt.textContent = kb.activation_wisdom.activation_excerpt || "";
  if (quoteAttribution) quoteAttribution.textContent = kb.activation_wisdom.source_activation;
  if (primaryImg && kb.somatic_image) {
    primaryImg.src = kb.somatic_image;
    primaryImg.alt = kb.somatic_image_alt || "Embodied Somatic Anchor";
  }
  if (secondaryImg && kb.geometry_image) {
    secondaryImg.src = kb.geometry_image;
  }
}

// Jump to Next Target Rhythm Group (4 Core Rhythms)
function jumpToNextPhase(target) {
  let probe = new Date(selectedDate);
  for (let i = 1; i <= 35; i++) {
    probe.setDate(probe.getDate() + 1);
    const det = calculateMoonDetails(probe);
    if (target === "new_moon" && det.phaseKey === "new_moon") {
      selectAndRenderDate(probe, true);
      return;
    }
    if (target === "full_moon" && det.phaseKey === "full_moon") {
      selectAndRenderDate(probe, true);
      return;
    }
    if (target === "waxing_moon" && det.phaseName === "Waxing Moon") {
      selectAndRenderDate(probe, true);
      return;
    }
    if (target === "waning_moon" && det.phaseName === "Waning Moon") {
      selectAndRenderDate(probe, true);
      return;
    }
  }
}

function selectAndRenderDate(dateObj, scrollToReading = false) {
  selectedDate = new Date(dateObj);
  currentViewDate = new Date(dateObj.getFullYear(), dateObj.getMonth(), 1);
  renderDashboard(selectedDate);
  renderCalendar(currentViewDate, selectedDate);
  if (scrollToReading) {
    const streamTop = document.getElementById("readingStreamTop");
    if (streamTop) {
      const rect = streamTop.getBoundingClientRect();
      if (rect.top < 0 || rect.top > window.innerHeight * 0.6) {
        streamTop.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }
}

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  // Calendar Month Navigation
  const btnPrevMonth = document.getElementById("btnPrevMonth");
  const btnNextMonth = document.getElementById("btnNextMonth");
  const btnReturnToday = document.getElementById("btnReturnToday");

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

  if (btnReturnToday) {
    btnReturnToday.addEventListener("click", () => {
      selectAndRenderDate(new Date(), true);
    });
  }

  // Quick Jump Rhythm Buttons
  const btnJumpNew = document.getElementById("btnJumpNextNew");
  const btnJumpWaxing = document.getElementById("btnJumpNextWaxing");
  const btnJumpFull = document.getElementById("btnJumpNextFull");
  const btnJumpWaning = document.getElementById("btnJumpNextWaning");

  if (btnJumpNew) btnJumpNew.addEventListener("click", () => jumpToNextPhase("new_moon"));
  if (btnJumpWaxing) btnJumpWaxing.addEventListener("click", () => jumpToNextPhase("waxing_moon"));
  if (btnJumpFull) btnJumpFull.addEventListener("click", () => jumpToNextPhase("full_moon"));
  if (btnJumpWaning) btnJumpWaning.addEventListener("click", () => jumpToNextPhase("waning_moon"));

  // Personal Reflection Journal Toggle & Autosave
  const btnToggleJournal = document.getElementById("btnToggleJournal");
  const journalDrawer = document.getElementById("personalJournalDrawer");
  const journalInput = document.getElementById("personalJournalInput");
  const journalToggleText = document.getElementById("journalToggleText");
  const journalSavedIndicator = document.getElementById("journalSavedIndicator");

  if (btnToggleJournal && journalDrawer) {
    btnToggleJournal.addEventListener("click", () => {
      const isHidden = journalDrawer.hasAttribute("hidden");
      if (isHidden) {
        journalDrawer.removeAttribute("hidden");
        if (journalToggleText) journalToggleText.textContent = "Close Reflection Note";
        if (journalInput) journalInput.focus();
      } else {
        journalDrawer.setAttribute("hidden", "");
        const hasText = journalInput && journalInput.value.trim().length > 0;
        if (journalToggleText) {
          journalToggleText.textContent = hasText ? "Open Your Saved Reflection" : "Open Your Private Reflection";
        }
      }
    });
  }

  if (journalInput) {
    journalInput.addEventListener("input", () => {
      const phaseKey = journalInput.dataset.phaseKey || "new_moon";
      setStorageState(`journal_${phaseKey}`, journalInput.value);
      if (journalSavedIndicator) {
        journalSavedIndicator.textContent = "Saved just now";
      }
    });
  }

  // Initial Render
  renderDashboard(selectedDate);
  renderCalendar(currentViewDate, selectedDate);
});
