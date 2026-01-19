// Minimal interactions: year and mobile menu
document.addEventListener('DOMContentLoaded', function () {
  // year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // menu toggle
  const menuBtn = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');

  if (menuBtn && nav) {
    function setMenuOpen(open) {
      menuBtn.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('open', open);
    }

    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      setMenuOpen(!expanded);
    });

    // close when clicking outside
    document.addEventListener('click', (e) => {
      const target = e.target;
      if (!nav.contains(target) && target !== menuBtn) {
        setMenuOpen(false);
      }
    });

    // Escape closes menu
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    });
  }
});