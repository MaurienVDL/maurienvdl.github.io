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

  // ✅ Toggle buttons met pijltje
  document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
      const collapsibles = button.previousElementSibling.querySelectorAll('.collapse');

      collapsibles.forEach(item => {
        item.classList.toggle('show'); // Toon of verberg de inhoud
      });

      // ✅ Pijltje draaien
      button.classList.toggle('open');
    });
  });

  // ✅ Scroll-effect voor header
  window.addEventListener('scroll', () => {
    const header = document.getElementById('site-header');
    if (!header) return; // Als er geen header is, niks doen

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
});

