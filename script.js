document.addEventListener('DOMContentLoaded', () => {
  // ✅ Header laden
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    });

  // ✅ Footer laden
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });

  // ✅ Show more / Show less knoppen
  document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
      const cvGroup = button.closest('.cv-group'); // vind de container
      const hiddenItems = cvGroup.querySelectorAll('.collapse');

      hiddenItems.forEach(item => {
        item.classList.toggle('show');
        item.classList.toggle('hidden'); // toggle hidden class
      });

      // ✅ Knoptekst aanpassen
      if (button.textContent.includes('more')) {
        button.textContent = button.textContent.replace('more', 'less');
      } 
      if (button.textContent.includes('less')){
        button.textContent = button.textContent.replace('less', 'more');
      }
    });
  });

  // ✅ Scroll-effect voor header
  window.addEventListener('scroll', () => {
    const header = document.getElementById('site-header');
    if (!header) return;

    if (window.scrollY > 50) {
      header.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
    }

    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.skill-level').forEach(el => {
      const width = el.style.width;
      el.style.width = '0';
      setTimeout(() => {
        el.style.width = width;
      }, 100); // Small delay to trigger transition
    });
  });

  
});
