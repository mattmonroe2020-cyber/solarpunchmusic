// ============================================
// SOLAR PUNCH STUDIO — main.js
// ============================================

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    // Animate hamburger → X
    const spans = navToggle.querySelectorAll('span');
    const isOpen = navLinks.classList.contains('open');
    if (isOpen) {
      spans[0].style.transform = 'translateY(7px) rotate(45deg)';
      spans[1].style.opacity   = '0';
      spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity   = '';
      spans[2].style.transform = '';
    }
  });
  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      const spans = navToggle.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity   = '';
      spans[2].style.transform = '';
    });
  });
}

// Nav background on scroll
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
      nav.style.background = 'rgba(10, 10, 10, 0.92)';
    }
  }, { passive: true });
}

// Fade-in on scroll (intersection observer)
const fadeEls = document.querySelectorAll('.service-card, .portfolio-card, .service-row, .contact-method, .stat');
if (fadeEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${i * 0.06}s`;
        entry.target.style.animation = 'fade-up 0.6s both';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  fadeEls.forEach(el => observer.observe(el));
}
