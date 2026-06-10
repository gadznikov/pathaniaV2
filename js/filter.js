/* ============================================================
   FILTER.JS — Projects section filter bar
   Cards use data-category="dev" | "security" | "ctf"
   ============================================================ */
(function () {
  const btns  = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  if (!btns.length) return;

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      /* Update active button */
      btns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      /* Fade non-matching cards, restore matching ones */
      cards.forEach((card) => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.style.opacity       = match ? '' : '0.1';
        card.style.pointerEvents = match ? '' : 'none';
        card.style.userSelect    = match ? '' : 'none';
      });
    });
  });
})();
