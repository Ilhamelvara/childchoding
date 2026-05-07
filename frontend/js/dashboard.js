// =============================================
// ChildCoding – Dashboard JavaScript
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Greeting based on time ─────────────────
  const greetingEl = document.getElementById('welcomeGreeting');
  if (greetingEl) {
    const hour = new Date().getHours();
    let greeting = 'Selamat malam, 🌙';
    if (hour < 12)        greeting = 'Selamat pagi, 🌅';
    else if (hour < 15)   greeting = 'Selamat siang, ☀️';
    else if (hour < 19)   greeting = 'Selamat sore, 🌤️';
    greetingEl.textContent = greeting;
  }

  // ── Sidebar collapse ───────────────────────
  const sidebarToggle = document.getElementById('sidebarToggle');
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
      document.body.classList.toggle('sidebar-collapsed');
    });
  }

  // ── Mobile sidebar ─────────────────────────
  const topbarMenuBtn = document.getElementById('topbarMenuBtn');
  if (topbarMenuBtn) {
    topbarMenuBtn.addEventListener('click', () => {
      document.body.classList.toggle('sidebar-open');
    });
    // Close on outside click
    document.addEventListener('click', (e) => {
      const sidebar = document.getElementById('dbSidebar');
      if (
        document.body.classList.contains('sidebar-open') &&
        sidebar &&
        !sidebar.contains(e.target) &&
        e.target !== topbarMenuBtn &&
        !topbarMenuBtn.contains(e.target)
      ) {
        document.body.classList.remove('sidebar-open');
      }
    });
  }

  // ── Dark mode toggle ───────────────────────
  const btnDark = document.getElementById('btnDarkMode');
  const savedTheme = localStorage.getItem('edutech-theme');
  if (savedTheme === 'dark') document.body.classList.add('dark-mode');

  if (btnDark) {
    updateDarkIcon();
    btnDark.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('edutech-theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
      updateDarkIcon();
    });
  }

  function updateDarkIcon() {
    if (!btnDark) return;
    const icon = btnDark.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
      icon.className = 'bi bi-sun-fill';
    } else {
      icon.className = 'bi bi-moon-stars-fill';
    }
  }

  // ── Animated stat counters ─────────────────
  const statCards = document.querySelectorAll('.db-stat-card');
  let statsAnimated = false;

  function animateStatVal(el, target) {
    let current = 0;
    const duration = 1200;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.round(current).toLocaleString();
    }, step);
  }

  function tryAnimateStats() {
    if (statsAnimated) return;
    const grid = document.getElementById('statGrid');
    if (!grid) return;
    const rect = grid.getBoundingClientRect();
    if (rect.top < window.innerHeight - 40) {
      statsAnimated = true;
      document.querySelectorAll('.stat-val[data-target]').forEach(el => {
        animateStatVal(el, parseInt(el.dataset.target, 10));
      });
    }
  }

  window.addEventListener('scroll', tryAnimateStats);
  tryAnimateStats();

  // ── Weekly goal ring animation ─────────────
  const goalRingFill = document.getElementById('goalRingFill');
  if (goalRingFill) {
    const circumference = 314;
    const pct = 80; // 80%
    const offset = circumference - (pct / 100) * circumference;
    // Animate on load
    goalRingFill.style.strokeDashoffset = circumference;
    setTimeout(() => {
      goalRingFill.style.strokeDashoffset = offset;
    }, 400);
  }

  // ── Course progress bar animation ─────────
  const progressFills = document.querySelectorAll('.course-progress-fill');
  progressFills.forEach(fill => {
    const target = fill.style.width;
    fill.style.width = '0%';
    setTimeout(() => {
      fill.style.width = target;
    }, 300);
  });

  // ── Continue buttons ───────────────────────
  document.querySelectorAll('.btn-continue').forEach(btn => {
    btn.addEventListener('click', () => {
      const original = btn.innerHTML;
      btn.innerHTML = '<i class="bi bi-check-lg"></i>';
      btn.style.background = '#065f46';
      setTimeout(() => {
        btn.innerHTML = original;
        btn.style.background = '';
      }, 1500);
    });
  });

  // ── Enroll buttons ─────────────────────────
  document.querySelectorAll('.rec-enroll').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const original = btn.textContent;
      btn.textContent = '✓ Enrolled!';
      btn.style.background = '#065f46';
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
      }, 2000);
    });
  });

  // ── Sidebar nav active state ───────────────
  document.querySelectorAll('.sidebar-link[data-section]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      // close mobile sidebar
      document.body.classList.remove('sidebar-open');
    });
  });

  // ── Topbar search ──────────────────────────
  const topbarInput = document.getElementById('topbarSearchInput');
  if (topbarInput) {
    topbarInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const q = topbarInput.value.trim();
        if (q) {
          topbarInput.value = '';
          topbarInput.placeholder = `Mencari "${q}"…`;
          setTimeout(() => {
            topbarInput.placeholder = 'Cari kursus, topik…';
          }, 2000);
        }
      }
    });
  }

  // ── Notification bell toggle ───────────────
  const btnNotif = document.getElementById('btnNotif');
  if (btnNotif) {
    btnNotif.addEventListener('click', () => {
      const dot = btnNotif.querySelector('.notif-dot');
      if (dot) dot.style.display = 'none';
    });
  }

  // ── Rec card entrance ──────────────────────
  const recCards = document.querySelectorAll('.rec-card');
  const recObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(24px)';
        setTimeout(() => {
          entry.target.style.transition = 'opacity .5s ease, transform .5s ease';
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 100);
        recObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  recCards.forEach(c => recObserver.observe(c));

});
