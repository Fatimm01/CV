// ============================================================
//  CV DIGITAL - FATIM
//  script.js
// ============================================================

// ------------------------------------------------------------
// Smooth scroll to a section by id
// ------------------------------------------------------------
function goToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ------------------------------------------------------------
// EXPERIENCE — tab switcher
// ------------------------------------------------------------
const EXP_MAP = {
  org:       'exp-org',
  committee: 'exp-committee',
  other:     'exp-other'
};

function switchExpTab(btn, tab) {
  // Update tab button states
  document.querySelectorAll('.exp-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  // Hide all panels, show selected
  Object.values(EXP_MAP).forEach(id => {
    document.getElementById(id).style.display = 'none';
  });

  const panel = document.getElementById(EXP_MAP[tab]);
  panel.style.display = 'flex';
  triggerFadeIn(panel);
}

// ------------------------------------------------------------
// PORTFOLIO — tab switcher
// ------------------------------------------------------------
const PORT_MAP = {
  akademik:    'port-akademik',
  profesional: 'port-profesional',
  digital:     'port-digital'
};

function switchPortTab(item, tab) {
  // Update menu item states
  document.querySelectorAll('.portfolio-menu-item').forEach(i => i.classList.remove('active'));
  item.classList.add('active');

  // Hide all panels, show selected
  Object.values(PORT_MAP).forEach(id => {
    document.getElementById(id).style.display = 'none';
  });

  const panel = document.getElementById(PORT_MAP[tab]);
  panel.style.display = 'block';
  triggerFadeIn(panel);
}

// ------------------------------------------------------------
// Re-trigger CSS fade-in animation
// ------------------------------------------------------------
function triggerFadeIn(el) {
  el.classList.remove('fade-in');
  void el.offsetWidth; // force reflow
  el.classList.add('fade-in');
}

// ------------------------------------------------------------
// Highlight active nav label while scrolling
// ------------------------------------------------------------
const sections = ['home', 'about', 'experience', 'portfolio', 'contact'];

function onScroll() {
  const scrollY = window.scrollY + window.innerHeight / 3;

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;

    const top    = el.offsetTop;
    const bottom = top + el.offsetHeight;

    if (scrollY >= top && scrollY < bottom) {
      // Mark all nav dots / labels inside every sidebar that match this section
      highlightNav(id);
    }
  });
}

function highlightNav(activeId) {
  // nav-labels are text-based; find matching ones by text content
  document.querySelectorAll('.nav-label').forEach(label => {
    const text = label.textContent.trim().toLowerCase().replace(/\s/g, '');
    const id   = activeId.toLowerCase().replace(/\s/g, '');

    // Map section ids to nav label text
    const labelMap = {
      home:       'home',
      about:      'aboutme',
      experience: 'experience',
      portfolio:  'portofolio',
      contact:    'contact'
    };

    if (labelMap[activeId] && text === labelMap[activeId]) {
      label.classList.add('active');
    } else {
      label.classList.remove('active');
    }
  });
}

// ------------------------------------------------------------
// Init
// ------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
});