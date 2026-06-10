/* ============================================================
   MAIN.JS — Init: mobile nav, experience tabs, smooth scroll
   Personal details live in index.html, not here
   ============================================================ */
(function () {

  /* ── Mobile nav overlay ────────────────────────────────────── */
  const hamburger    = document.getElementById('hamburger');
  const overlay      = document.getElementById('navOverlay');
  const overlayClose = document.getElementById('overlayClose');
  const overlayLinks = overlay.querySelectorAll('a');

  function openMenu() {
    overlay.classList.add('open');
    hamburger.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    overlay.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openMenu);
  overlayClose.addEventListener('click', closeMenu);
  overlayLinks.forEach((link) => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  /* ── Experience tabs ────────────────────────────────────────── */
  const tabs   = document.querySelectorAll('.exp-tab');
  const panels = document.querySelectorAll('.exp-panel');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.tab;

      tabs.forEach((t)   => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      panels.forEach((p) => p.classList.remove('active'));

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const panel = document.getElementById(targetId);
      if (panel) panel.classList.add('active');
    });
  });

  /* ── Smooth scroll for all in-page anchor links ─────────────── */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

})();
