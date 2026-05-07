// =============================================
// ChildCoding – Interactive JavaScript
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Navbar scroll effect ──────────────────────
  const navbar = document.getElementById('mainNavbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('shadow');
      navbar.style.background = 'rgba(255,255,255,0.97)';
    } else {
      navbar.classList.remove('shadow');
      navbar.style.background = '#fff';
    }
  });

  // ── Search bar Explore button ─────────────────
  const btnExplore = document.getElementById('btnExplore');
  const searchInput = document.getElementById('searchInput');

  btnExplore.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
      // pulse effect
      btnExplore.classList.add('pulse-anim');
      setTimeout(() => {
        btnExplore.classList.remove('pulse-anim');
        searchInput.value = '';
        searchInput.placeholder = `Searching for "${query}"…`;
        setTimeout(() => {
          searchInput.placeholder = 'What do you want to learn today?';
        }, 2000);
      }, 400);
    } else {
      searchInput.focus();
      searchInput.style.outline = '2px solid #16a34a';
      setTimeout(() => searchInput.style.outline = '', 800);
    }
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') btnExplore.click();
  });

  // ── Bookmark toggles ──────────────────────────
  ['bookmarkCard1', 'bookmarkCard2', 'bookmarkCard3'].forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.addEventListener('click', () => {
      const icon = btn.querySelector('i');
      if (icon.classList.contains('bi-bookmark')) {
        icon.classList.replace('bi-bookmark', 'bi-bookmark-fill');
        icon.style.color = '#16a34a';
      } else {
        icon.classList.replace('bi-bookmark-fill', 'bi-bookmark');
        icon.style.color = '';
      }
    });
  });

  // ── Animate stats on scroll ───────────────────
  const statNums = [
    { el: document.querySelector('#stat1 .stat-number'), target: 120000, suffix: 'K+', divide: 1000 },
    { el: document.querySelector('#stat2 .stat-number'), target: 85, suffix: '%', divide: 1 },
    { el: document.querySelector('#stat3 .stat-number'), target: 450, suffix: '+', divide: 1 },
  ];

  const ratingEl = document.querySelector('#stat4 .stat-number');
  let statsAnimated = false;

  function animateCount({ el, target, suffix, divide }) {
    if (!el) return;
    let start = 0;
    const duration = 1400;
    const step = 16;
    const steps = duration / step;
    const increment = target / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      const val = divide > 1 ? Math.floor(start / divide) : Math.floor(start);
      el.textContent = val + suffix;
    }, step);
  }

  function onStatsVisible() {
    if (statsAnimated) return;
    const statsSection = document.getElementById('statsSection');
    if (!statsSection) return;
    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      statsAnimated = true;
      statNums.forEach(s => animateCount(s));
      // Rating separately
      let rating = 0;
      const ratingTimer = setInterval(() => {
        rating += 0.05;
        if (rating >= 4.9) { rating = 4.9; clearInterval(ratingTimer); }
        if (ratingEl) ratingEl.textContent = rating.toFixed(1) + '/5';
      }, 16);
    }
  }

  window.addEventListener('scroll', onStatsVisible);
  onStatsVisible(); // check on load too

  // ── Smooth active nav highlighting ───────────────
  const sections = ['hero', 'paths', 'scholarship'];
  const navLinks = {
    hero: document.getElementById('navCourses'),
    paths: document.getElementById('navPaths'),
    scholarship: document.getElementById('navScholarship'),
  };

  window.addEventListener('scroll', () => {
    let current = 'hero';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) current = id;
    });
    Object.values(navLinks).forEach(l => l && l.classList.remove('text-success', 'fw-bold'));
    if (navLinks[current]) navLinks[current].classList.add('text-success', 'fw-bold');
  });

  // ── Apply Now button ripple ───────────────────
  const btnApply = document.getElementById('btnApply');
  if (btnApply) {
    btnApply.addEventListener('click', function (e) {
      e.preventDefault();
      this.textContent = '✓ Application Submitted!';
      this.style.background = '#fff';
      this.style.color = '#15803d';
      setTimeout(() => {
        this.innerHTML = 'Apply Now <i class="bi bi-arrow-right ms-1"></i>';
      }, 2500);
    });
  }

  // ── Card entrance animation via IntersectionObserver ──
  const cards = document.querySelectorAll('.path-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(30px)';
        setTimeout(() => {
          entry.target.style.transition = 'opacity .5s ease, transform .5s ease';
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 120);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => observer.observe(card));

});
