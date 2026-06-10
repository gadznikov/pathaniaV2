/* ============================================================
   TYPEWRITER.JS — Hero cycling text animation
   Edit 'phrases' array to change what cycles through
   ============================================================ */
(function () {
  // ↓ Edit these phrases to match your roles
  const phrases = [
    'Developer.',
    'Security Researcher.',
    'Security Analyst.',
    'Builder.',
  ];

  const el = document.getElementById('typewriter');
  if (!el) return;

  const TYPE_MS   = 72;
  const DELETE_MS = 42;
  const HOLD_MS   = 1900;  /* pause at end of each phrase */
  const GAP_MS    = 380;   /* pause before typing next phrase */

  let phraseIdx = 0;
  let charIdx   = 0;
  let deleting  = false;

  function tick() {
    const phrase = phrases[phraseIdx];

    if (deleting) {
      charIdx--;
      el.textContent = phrase.slice(0, charIdx);

      if (charIdx === 0) {
        deleting  = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        setTimeout(tick, GAP_MS);
        return;
      }

      setTimeout(tick, DELETE_MS);
    } else {
      charIdx++;
      el.textContent = phrase.slice(0, charIdx);

      if (charIdx === phrase.length) {
        setTimeout(() => { deleting = true; tick(); }, HOLD_MS);
        return;
      }

      setTimeout(tick, TYPE_MS);
    }
  }

  /* Small initial delay so the page loads before animation starts */
  setTimeout(tick, 700);
})();
