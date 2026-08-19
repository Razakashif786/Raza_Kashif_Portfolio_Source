// ---- Data ----------------------------------------------------------
  const STAGES = [
    { id: "summary", label: "Summary", tc: "TC-01" },
    { id: "experience", label: "Experience", tc: "TC-02" },
    { id: "skills", label: "Skills", tc: "TC-03" },
    { id: "projects", label: "Projects", tc: "TC-04" },
    { id: "certifications", label: "Certs", tc: "TC-05" },
    { id: "contact", label: "Contact", tc: "TC-06" },
  ];

  const HERO_LINES = [
    { prompt: "$ whoami", output: "raza_kashif — Test Analyst / QA Automation Engineer / SDET" },
    { prompt: "$ suite --health BiblioSuite", output: "recovered 15–20% → 95–98% pass rate (CI-verified)" },
    { prompt: "$ releases --owned-solo", output: "4 / 6 — regression + system testing, end-to-end" },
    { prompt: "$ status", output: "open to relocation · immediate joiner" },
  ];

  const EXPERIENCE_STEPS = [
    { action: "Completed structured onboarding (Java, Selenium WebDriver, TestNG, Apache POI, SQL, API testing, DevOps tooling)", result: "Ready for OUP BiblioSuite project assignment" },
    { action: "Inherited a legacy automation suite averaging just 15–20% pass rate — brittle locators, flawed logic", result: "Rebuilt core logic + dynamic, resilient locator strategy from the ground up" },
    { action: "Maintained suite health across releases despite routine UI and application-side changes", result: "Sustained a 95–98% pass rate, verified through daily CI run reports" },
    { action: "Senior teammate departed mid-project, leaving a release-ownership gap", result: "Took over full release ownership independently" },
    { action: "Owned 4 of the team's last 6 releases solo — regression + system testing, incl. overnight pushes", result: "Zero missed deadlines, recognized by client and management" },
    { action: "Delivered hands-on onboarding training (JS, Node.js, WebdriverIO, locators, OAF, full BiblioSuite workflow) to new Graduate Engineer Trainees", result: "Faster ramp-up for newly onboarded engineers" },
    { action: "API testing (Postman), test-artifact management (Jira/Xray, RTM), CI integration (Jenkins, GitHub Actions)", result: "Audit-ready documentation, continuous testing on every push" },
    { action: "Applied prompt engineering + AI coding assistants (Claude, GitHub Copilot) to accelerate test authoring and script scaffolding", result: "Faster turnaround, full manual review and ownership retained" },
  ];

  const SKILL_GROUPS = [
    { label: "Automation Frameworks", items: ["WebdriverIO (JS/Node.js)", "Selenium WebDriver (Java)", "OAF (BiblioSuite)", "POM", "Cucumber (BDD)", "TestNG"] },
    { label: "Testing Types", items: ["Functional", "Regression", "Smoke", "Sanity", "End-to-End", "Cross-Browser", "Data-Driven", "API", "UAT Support"] },
    { label: "Languages", items: ["JavaScript (ES6+)", "Java", "SQL", "Python (basics)"] },
    { label: "CI/CD & DevOps", items: ["Jenkins", "GitHub Actions", "Git", "GitHub", "GitLab", "Docker"] },
    { label: "Test Management", items: ["Jira", "Xray", "Apache POI", "RTM", "Defect Lifecycle"] },
    { label: "AI & Productivity", items: ["Prompt Engineering", "Claude", "GitHub Copilot", "GenAI Test Automation"] },
    { label: "Methodologies", items: ["Agile/Scrum", "SDLC", "STLC", "Sprint Planning"] },
  ];

  const PROJECTS = [
    { id: "TC-04.1", title: "E-Commerce Platform Test Automation", tag: "Practice Project", dev: false,
      stack: "Java · Selenium WebDriver · TestNG · Apache POI · POM",
      points: ["End-to-end framework: auth, search, cart, order placement, payment validation", "Data-driven layer via Apache POI, multi-scenario Excel datasets — 3x functional coverage", "Cross-browser regression across Chrome, Firefox, Edge — zero UI regressions"] },
    { id: "TC-04.2", title: "Insurance Portal Test Automation", tag: "Practice Project", dev: false,
      stack: "Selenium WebDriver · TestNG · POM · Jenkins CI/CD",
      points: ["Modular Selenium + TestNG + POM framework for search, form validation, comparison flows", "Jenkins CI/CD integration for scheduled and on-demand execution", "Negative and boundary testing surfaced critical input defects before UAT"] },
    { id: "TC-04.3", title: "Bike Rental Management System", tag: "Dev Project — Final Year (BCA)", dev: true,
      stack: "JavaScript · Node.js · Database",
      points: ["Full-stack web application — not a testing project, a self-built product", "End-to-end booking, return, and payment modules", "Built solo as a final-year academic project"] },
  ];

  const CERTIFICATIONS = [
    { name: "Claude Certified Architect — Foundations", issuer: "Anthropic · Credly-verified", date: "Jul 2026" },
    { name: "GenAI & AI Agents for QA Automation", issuer: "Copilot & Claude Code · Rahul Shetty Academy", date: "Jun 2026" },
    { name: "Gen AI Test Automation", issuer: "Selenium, Playwright, Copilot, Claude · Firstlink Consulting", date: "Jun 2026" },
    { name: "Cognizant Analyst Trainee Program", issuer: "QA & Automation · Cognizant Technology Solutions", date: "2025" },
    { name: "Namaste JavaScript — Advanced JS (ES6+)", issuer: "Akshay Saini", date: "2025" },
  ];

  const RECOGNITION = ['"Tester of the Month" ×2', '"Rising Star" Award ×2', "Highest Quarterly Performance Rating", "Promoted: Analyst Trainee → Analyst (Apr 2026)"];

  // ---- Build static sections ------------------------------------------
  function el(html) { const d = document.createElement("div"); d.innerHTML = html.trim(); return d.firstChild; }

  // Pipeline nav
  const pipelineEl = document.getElementById("pipeline");
  STAGES.forEach((s, i) => {
    const btn = document.createElement("button");
    btn.className = "stage-btn";
    btn.id = "stagebtn-" + s.id;
    btn.onclick = () => scrollToId(s.id);
    btn.innerHTML = `
      <svg class="icon check-icon" viewBox="0 0 24 24" fill="none" stroke="#1e293b" stroke-width="2" style="display:none;"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
      <svg class="icon active-icon" viewBox="0 0 24 24" fill="rgba(251,191,36,0.3)" stroke="#fbbf24" stroke-width="2" style="display:none;"><circle cx="12" cy="12" r="9"/></svg>
      <svg class="icon future-icon" viewBox="0 0 24 24" fill="none" stroke="#475569" stroke-width="2"><circle cx="12" cy="12" r="9"/></svg>
      <span class="stage-label future">${s.tc} ${s.label}</span>`;
    pipelineEl.appendChild(btn);
    if (i < STAGES.length - 1) {
      const c = document.createElement("span");
      c.className = "connector";
      c.id = "conn-" + i;
      pipelineEl.appendChild(c);
    }
  });

  function setPipelineState(activeId) {
    const idx = STAGES.findIndex((s) => s.id === activeId);
    STAGES.forEach((s, i) => {
      const btn = document.getElementById("stagebtn-" + s.id);
      const label = btn.querySelector(".stage-label");
      const checkIcon = btn.querySelector(".check-icon");
      const activeIcon = btn.querySelector(".active-icon");
      const futureIcon = btn.querySelector(".future-icon");
      checkIcon.style.display = "none"; activeIcon.style.display = "none"; futureIcon.style.display = "none";
      if (i < idx) { checkIcon.style.display = "block"; label.className = "stage-label past"; }
      else if (i === idx) { activeIcon.style.display = "block"; label.className = "stage-label active"; }
      else { futureIcon.style.display = "block"; label.className = "stage-label future"; }
      if (i < STAGES.length - 1) {
        const conn = document.getElementById("conn-" + i);
        conn.className = "connector" + (i < idx ? " past" : "");
      }
    });
  }
  setPipelineState("summary");

  // Recognition badges
  const badgeWrap = document.getElementById("recognition-badges");
  RECOGNITION.forEach((r) => {
    badgeWrap.appendChild(el(`<span class="pill mono">🏆 ${r}</span>`));
  });

  // Experience steps
  const stepsWrap = document.getElementById("exp-steps");
  EXPERIENCE_STEPS.forEach((s, i) => {
    stepsWrap.appendChild(el(`
      <div class="step-row">
        <div class="step-num mono">Step-${i + 1}</div>
        <div class="step-body">
          <div class="step-action">${s.action}</div>
          <div class="step-result">→ ${s.result}</div>
        </div>
        <span class="pass-badge">✓ PASS</span>
      </div>`));
  });

  // Skills
  const skillsGrid = document.getElementById("skills-grid");
  SKILL_GROUPS.forEach((g) => {
    skillsGrid.appendChild(el(`
      <div class="card skill-card" style="padding:16px;">
        <div class="skill-group-title mono">◆ ${g.label}</div>
        <div class="chip-wrap">${g.items.map((it) => `<span class="chip mono">${it}</span>`).join("")}</div>
      </div>`));
  });

  // Projects
  const projGrid = document.getElementById("proj-grid");
  PROJECTS.forEach((p) => {
    projGrid.appendChild(el(`
      <div class="proj-card ${p.dev ? "dev" : ""}">
        <div class="proj-top">
          <span class="proj-id mono">${p.id}</span>
          <span class="proj-tag mono ${p.dev ? "dev" : ""}">${p.tag}</span>
        </div>
        <div class="proj-title">${p.title}</div>
        <div class="proj-stack mono">${p.stack}</div>
        <ul class="proj-points">${p.points.map((pt) => `<li>${pt}</li>`).join("")}</ul>
      </div>`));
  });

  // Certifications
  const certsGrid = document.getElementById("certs-grid");
  CERTIFICATIONS.forEach((c) => {
    certsGrid.appendChild(el(`
      <div class="cert-card">
        <div class="cert-icon">✨</div>
        <div>
          <div class="cert-name">${c.name}</div>
          <div class="cert-issuer">${c.issuer}</div>
        </div>
        <span class="cert-date mono">${c.date}</span>
      </div>`));
  });

  // ---- Hero lines (pure CSS handles the stagger animation) --------------
  const termBody = document.getElementById("term-body");
  termBody.innerHTML = HERO_LINES.map((l, i) => `
    <div class="term-line">
      <div class="term-prompt">${l.prompt}${i === HERO_LINES.length - 1 ? '<span class="final-cursor">▍</span>' : ""}</div>
      <div class="term-output">→ ${l.output}</div>
    </div>`).join("");

  // ---- Scroll spy --------------------------------------------------------
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setPipelineState(entry.target.id);
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );
  STAGES.forEach((s) => {
    const target = document.getElementById(s.id);
    if (target) observer.observe(target);
  });

  function scrollToId(id) {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // ---- Ambient floating particles (decorative, safe if it fails) --------
  try {
    const field = document.getElementById("particle-field");
    const positions = [
      [6, 20, 3, 0], [16, 60, 4, 0.4], [28, 10, 2.5, 0.8], [42, 75, 3.5, 1.2],
      [55, 30, 2, 1.6], [68, 85, 4, 0.2], [80, 15, 3, 1.0], [90, 55, 2.5, 0.6],
    ];
    positions.forEach(([leftPct, topPct, size, delay]) => {
      const p = document.createElement("span");
      p.className = "particle";
      p.style.left = leftPct + "%";
      p.style.top = topPct + "%";
      p.style.width = size + "px";
      p.style.height = size + "px";
      p.style.animationDuration = (4 + size) + "s";
      p.style.animationDelay = delay + "s";
      field.appendChild(p);
    });
  } catch (e) { /* purely decorative — safe to skip */ }

  // ---- Scroll progress bar (fails safe: bar just stays empty) -----------
  try {
    const progressBar = document.getElementById("scroll-progress");
    function updateProgress() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
      progressBar.style.width = pct + "%";
    }
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
  } catch (e) { /* decorative — safe to skip */ }

  // ---- Scroll-reveal for sections (default is visible; JS only enhances) -
  try {
    const revealEls = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.08 }
    );
    revealEls.forEach((elToWatch) => {
      elToWatch.classList.add("reveal-armed");
      revealObserver.observe(elToWatch);
    });
  } catch (e) { /* if this fails, .reveal elements simply stay visible */ }

  // ---- Count-up stats (final correct value is already in the HTML) ------
  try {
    const statEls = document.querySelectorAll(".stat-num");
    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const node = entry.target;
          if (node.dataset.counted) return;
          node.dataset.counted = "1";
          const target = parseInt(node.dataset.target, 10);
          const suffix = node.dataset.suffix || "";
          if (isNaN(target)) return;
          let current = 0;
          const steps = 24;
          const stepVal = target / steps;
          const iv = setInterval(() => {
            current += stepVal;
            if (current >= target) {
              node.textContent = target + suffix;
              clearInterval(iv);
            } else {
              node.textContent = Math.round(current) + suffix;
            }
          }, 35);
          statObserver.unobserve(node);
        });
      },
      { threshold: 0.4 }
    );
    statEls.forEach((n) => statObserver.observe(n));
  } catch (e) { /* if this fails, the static final numbers already show */ }

  // ---- Cursor spotlight on hero terminal ---------------------------------
  try {
    const panel = document.getElementById("terminal-panel");
    panel.addEventListener("mousemove", (evt) => {
      const rect = panel.getBoundingClientRect();
      const x = ((evt.clientX - rect.left) / rect.width) * 100;
      const y = ((evt.clientY - rect.top) / rect.height) * 100;
      panel.style.setProperty("--spot-x", x + "%");
      panel.style.setProperty("--spot-y", y + "%");
    });
  } catch (e) { /* decorative — safe to skip */ }
