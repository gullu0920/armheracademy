document.addEventListener('DOMContentLoaded', () => {
  // Animate sections on scroll
  const sections = document.querySelectorAll('main section');
  function revealSections() {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add('visible');
      }
    });
  }
  revealSections();
  window.addEventListener('scroll', revealSections);

  // Smooth scroll for nav links
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const id = link.getAttribute('href').substring(1);
      const target = document.getElementById(id);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });

  // Gallery lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('show');
      lightbox.focus();
    });
  });
  lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('show');
    lightboxImg.src = '';
  });
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('show');
      lightboxImg.src = '';
    }
  });
  lightbox.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      lightbox.classList.remove('show');
      lightboxImg.src = '';
    }
  });
});