// Theme toggle — all .theme-toggle buttons share the same handler
function initThemeToggle() {
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const next = isDark ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  });
}

// Hamburger / mobile nav
function initHamburger() {
  const hamburger = document.getElementById('nav-hamburger');
  const mobileNav = document.getElementById('nav-mobile');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', e => {
    e.stopPropagation();
    const isOpen = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
  });

  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('open');
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('open');
    }
  });
}

// Highlight the current page's nav link
function initActiveNav() {
  const file = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav-link]').forEach(link => {
    const href = link.getAttribute('href');
    if (href === file || (file === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

initThemeToggle();
initHamburger();
initActiveNav();
