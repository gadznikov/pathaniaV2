/* ============================================================
   SCROLL.JS — Nav frosting, active link spy, reveal observer
   ============================================================ */
(function () {

  /* ── 1. Nav: transparent → frosted glass on scroll ───────── */
  const navbar = document.getElementById('navbar');

  function updateNav() {
    navbar.classList.toggle('scrolled', window.scrollY > 55);
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav(); /* run once on load in case of hard refresh mid-page */

  /* ── 2. Active nav link spy ───────────────────────────────── */
  const sections  = Array.from(document.querySelectorAll('section[id]'));
  const navLinks  = document.querySelectorAll('.nav-links a');

  function updateActiveLink() {
    /* Find the section whose top is closest to the nav bottom */
    let current = sections[0]?.id ?? '';

    sections.forEach((sec) => {
      if (sec.getBoundingClientRect().top <= 80) {
        current = sec.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle(
        'active',
        link.getAttribute('href') === `#${current}`
      );
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();

  /* ── 3. Scroll-reveal via IntersectionObserver ────────────── */
  const revealTargets = document.querySelectorAll('.reveal, .reveal-stagger');

  if (!revealTargets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); /* trigger only once */
        }
      });
    },
    { threshold: 0.1 }
  );

  revealTargets.forEach((el) => observer.observe(el));

})();
