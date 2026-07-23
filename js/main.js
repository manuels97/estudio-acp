/* ============================================================
   ACP Estudio — JavaScript principal
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- Header: transparente sobre hero, sólido al salir ---
  const header = document.getElementById('header');
  if (header) {
    const hero = document.getElementById('inicio');
    if (!hero) {
      // Subpáginas: header siempre sólido
      header.classList.add('scrolled');
    } else {
      const getThreshold = () => hero.offsetHeight - header.offsetHeight;
      const onScroll = () => {
        header.classList.toggle('scrolled', window.scrollY > getThreshold());
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
  }

  // --- Menú mobile ---
  const hamburger  = document.getElementById('hamburger');
  const nav        = document.getElementById('nav');
  const overlay    = document.getElementById('mobileOverlay');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('active');
      nav.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';

      if (overlay) {
        if (isOpen) {
          overlay.classList.add('visible');
          requestAnimationFrame(() => overlay.classList.add('active'));
        } else {
          closeOverlay();
        }
      }
    });

    // Cerrar al hacer click en overlay
    if (overlay) {
      overlay.addEventListener('click', closeMenu);
    }

    // Cerrar al hacer click en un link
    nav.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  function closeMenu() {
    if (!hamburger) return;
    hamburger.classList.remove('active');
    nav.classList.remove('open');
    document.body.style.overflow = '';
    closeOverlay();
  }

  function closeOverlay() {
    if (!overlay) return;
    overlay.classList.remove('active');
    overlay.addEventListener('transitionend', () => {
      overlay.classList.remove('visible');
    }, { once: true });
  }

  // --- Nav link activo al scroll (solo home) ---
  const navLinks = document.querySelectorAll('.nav__link[href^="#"]');
  const sections = document.querySelectorAll('section[id]');

  if (sections.length && navLinks.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            link.classList.toggle('active', href === `#${id}`);
          });
        }
      });
    }, { threshold: 0.35, rootMargin: `-${getComputedStyle(document.documentElement).getPropertyValue('--header-h') || '80px'} 0px 0px 0px` });

    sections.forEach(s => sectionObserver.observe(s));
  }

  // --- Formulario de contacto (demo — sin envío real) ---
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      if (!btn) return;

      const original = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando&hellip;';
      btn.disabled = true;

      setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> ¡Consulta enviada!';
        btn.classList.add('btn--success');
        form.reset();

        setTimeout(() => {
          btn.innerHTML = original;
          btn.classList.remove('btn--success');
          btn.disabled = false;
        }, 3500);
      }, 1400);
    });
  }

  // --- Carrusel continuo de testimonios ---
  const testimTrack = document.getElementById('testimoniosTrack');
  if (testimTrack) {
    // Clonar slides para el loop sin corte (duplicar el contenido)
    const originals = Array.from(testimTrack.children);
    originals.forEach(card => {
      const clone = card.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      testimTrack.appendChild(clone);
    });

    // Pausar al hacer hover
    const outer = testimTrack.closest('.testimonios__outer');
    if (outer) {
      outer.addEventListener('mouseenter', () => testimTrack.classList.add('paused'));
      outer.addEventListener('mouseleave', () => testimTrack.classList.remove('paused'));
    }
  }

  // --- AOS ---
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 680,
      easing: 'ease-out-cubic',
      once: true,
      offset: 56,
    });
  }

});
