document.addEventListener('DOMContentLoaded', () => {
  // SCROLL REVEAL com IntersectionObserver
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach((element) => {
    observer.observe(element);
  });

  // NAVBAR DINÂMICA
  const navbar = document.querySelector('.navbar');
  const scrolled = window.scrollY > 50;

  navbar.classList.toggle('scrolled', scrolled);

  navbar.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // CONTADORES ANIMADOS
  const counters = document.querySelectorAll('[data-count]');

  counters.forEach((counter) => {
    const count = parseInt(counter.getAttribute('data-count'));
    let currentCount = 0;

    function animate() {
      currentCount += 1;
      counter.textContent = `${currentCount} / ${count}`;
      if (currentCount < count) {
        setTimeout(animate, 100);
      }
    }

    animate();
  });

  // FAQ ACCORDION
  const accordion = document.querySelectorAll('.faq-accordion');

  accordion.forEach((accordionItem) => {
    const icon = accordionItem.querySelector('.icon');
    const content = accordionItem.querySelector('.content');

    accordionItem.addEventListener('click', () => {
      if (accordionItem.classList.contains('open')) {
        content.style.maxHeight = '0';
        icon.classList.remove('open');
      } else {
        content.style.maxHeight = `${content.scrollHeight}px`;
        icon.classList.add('open');
      }
    });
  });

  // SMOOTH SCROLL para links internos (#section)
  const smoothScrollLinks = document.querySelectorAll('#section');

  smoothScrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = link.getAttribute('href');
      const section = document.querySelector(sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // CURSOR GLOW (opcional, se desktop)
  if (window.matchMedia('(min-width: 768px)').matches) {
    const cursorGlow = document.createElement('div');
    cursorGlow.style.position = 'fixed';
    cursorGlow.style.top = '0';
    cursorGlow.style.right = '0';
    cursorGlow.style.width = '100%';
    cursorGlow.style.height = '100%';
    cursorGlow.style.background = '#fff';
    cursorGlow.style.borderRadius = '50%';
    cursorGlow.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
    document.body.appendChild(cursorGlow);

    const mouseMove = (e) => {
      cursorGlow.style.top = `${e.clientY}px`;
      cursorGlow.style.left = `${e.clientX}px`;
    };

    document.addEventListener('mousemove', (e) => {
      mouseMove(e);
    });
  }

  // FLOATING WHATSAPP
  if (window.matchMedia('(min-width: 768px)').matches) {
    const whatsappButton = document.querySelector('.whatsapp-button');
    const tooltip = document.createElement('div');
    tooltip.style.position = 'fixed';
    tooltip.style.top = '0';
    tooltip.style.right = '0';
    tooltip.style.width = '200px';
    tooltip.style.height = '100px';
    tooltip.style.background = '#fff';
    tooltip.style.borderRadius = '10px';
    tooltip.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
    tooltip.style.display = 'none';

    const mouseOver = (e) => {
      tooltip.style.top = `${e.clientY}px`;
      tooltip.style.left = `${e.clientX}px`;
      tooltip.style.display = 'block';
    };

    const mouseOut = () => {
      tooltip.style.display = 'none';
    };

    whatsappButton.addEventListener('mouseover', mouseOver);
    whatsappButton.addEventListener('mouseout', mouseOut);

    document.addEventListener('mousemove', (e) => {
      if (window.matchMedia('(min-width: 768px)').matches) {
        const tooltip = document.querySelector('.tooltip');
        tooltip.style.top = `${e.clientY}px`;
        tooltip.style.left = `${e.clientX}px`;
        tooltip.style.display = 'block';
      }
    });
  });

  console.log('Script carregado com sucesso!');
});