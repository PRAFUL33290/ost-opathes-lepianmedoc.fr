// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');

if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ===== MOBILE MENU TOGGLE =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  const navGroups = navLinks.querySelectorAll('.nav-group');
  const isMobileNav = () => window.matchMedia('(max-width: 768px)').matches;

  const closeAllSubmenus = () => {
    navGroups.forEach(group => {
      group.classList.remove('is-open');
      const button = group.querySelector('.nav-item');
      if (button) {
        button.setAttribute('aria-expanded', 'false');
      }
    });
  };

  const closeMobileMenu = () => {
    navLinks.classList.remove('active');
    const spans = navToggle.querySelectorAll('span');
    navToggle.classList.remove('open');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
    closeAllSubmenus();
  };

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const spans = navToggle.querySelectorAll('span');
    navToggle.classList.toggle('open');

    if (navToggle.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(7px, 6px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
      closeMobileMenu();
    }
  });

  document.addEventListener('pointerdown', event => {
    const clickedInsideMenu = navLinks.contains(event.target);
    const clickedToggle = navToggle.contains(event.target);

    if (isMobileNav()) {
      if (!navLinks.classList.contains('active')) return;
      if (!clickedInsideMenu && !clickedToggle) {
        closeMobileMenu();
      }
    } else {
      if (!clickedInsideMenu) {
        closeAllSubmenus();
      }
    }
  });

  navGroups.forEach(group => {
    const button = group.querySelector('button.nav-item');
    if (!button) {
      return;
    }

    button.setAttribute('aria-expanded', 'false');

    button.addEventListener('click', event => {
      event.preventDefault();
      const shouldOpen = !group.classList.contains('is-open');

      closeAllSubmenus();

      if (shouldOpen) {
        group.classList.add('is-open');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });
}

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-item__question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const isActive = item.classList.contains('active');

    // Close all
    document.querySelectorAll('.faq-item').forEach(faq => {
      faq.classList.remove('active');
    });

    // Open clicked if not already active
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// ===== PUBLIC INFO MODAL =====
const publicModal = document.getElementById('publicModal');
const publicModalTitle = document.getElementById('publicModalTitle');
const publicModalBody = document.getElementById('publicModalBody');

if (publicModal && publicModalTitle && publicModalBody) {
  const closePublicModal = () => {
    publicModal.classList.remove('is-open');
    publicModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('[data-modal-target]').forEach(button => {
    button.addEventListener('click', () => {
      const template = document.getElementById(`modal-${button.dataset.modalTarget}`);

      if (!template) {
        return;
      }

      publicModalTitle.textContent = template.dataset.title || '';
      publicModalBody.innerHTML = template.innerHTML;
      publicModal.classList.add('is-open');
      publicModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  publicModal.querySelectorAll('[data-modal-close]').forEach(button => {
    button.addEventListener('click', closePublicModal);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && publicModal.classList.contains('is-open')) {
      closePublicModal();
    }
  });
}

// ===== FADE UP ON SCROLL =====
const fadeUpElements = document.querySelectorAll('.fade-up');

if (fadeUpElements.length) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    fadeUpElements.forEach(el => el.classList.add('is-visible'));
  } else {
    const fadeObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    fadeUpElements.forEach(el => fadeObserver.observe(el));
  }
}

// ===== SMOOTH SCROLL for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 90;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ===== CARROUSEL PHOTOS =====
document.querySelectorAll('[data-carousel]').forEach(carousel => {
  const track = carousel.querySelector('[data-carousel-track]');
  const slides = track ? Array.from(track.children) : [];
  const prevBtn = carousel.querySelector('[data-carousel-prev]');
  const nextBtn = carousel.querySelector('[data-carousel-next]');
  const dotsWrap = carousel.querySelector('[data-carousel-dots]');

  if (!track || slides.length <= 1) {
    return;
  }

  let index = 0;
  let autoplayId = null;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const dots = slides.map((_, i) => {
    if (!dotsWrap) return null;
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'photo-carousel__dot';
    dot.setAttribute('aria-label', `Aller à la photo ${i + 1}`);
    dot.addEventListener('click', () => {
      goTo(i);
      restartAutoplay();
    });
    dotsWrap.appendChild(dot);
    return dot;
  });

  function goTo(next) {
    index = (next + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => {
      if (dot) dot.classList.toggle('is-active', i === index);
    });
    slides.forEach((slide, i) => {
      slide.setAttribute('aria-hidden', i === index ? 'false' : 'true');
    });
  }

  function restartAutoplay() {
    if (prefersReducedMotion) return;
    window.clearInterval(autoplayId);
    autoplayId = window.setInterval(() => goTo(index + 1), 6000);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      goTo(index - 1);
      restartAutoplay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      goTo(index + 1);
      restartAutoplay();
    });
  }

  carousel.addEventListener('mouseenter', () => window.clearInterval(autoplayId));
  carousel.addEventListener('mouseleave', restartAutoplay);

  // Support du swipe tactile
  let startX = 0;
  let isSwiping = false;

  track.addEventListener('touchstart', event => {
    startX = event.touches[0].clientX;
    isSwiping = true;
    window.clearInterval(autoplayId);
  }, { passive: true });

  track.addEventListener('touchend', event => {
    if (!isSwiping) return;
    const delta = event.changedTouches[0].clientX - startX;
    if (Math.abs(delta) > 45) {
      goTo(delta < 0 ? index + 1 : index - 1);
    }
    isSwiping = false;
    restartAutoplay();
  }, { passive: true });

  goTo(0);
  restartAutoplay();
});
