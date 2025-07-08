document.addEventListener('DOMContentLoaded', () => {
  // Header laden
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    });

  // Footer laden
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });

  // Show/Hide toggle voor de CV-secties
  document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
      const collapsibles = button.previousElementSibling.querySelectorAll('.collapse');

      collapsibles.forEach(item => {
        item.classList.toggle('show'); // Voeg de 'show'-class toe of verwijder hem
      });

      // Tekst van de knop aanpassen
      if (button.textContent.includes('Show')) {
        button.textContent = button.textContent.replace('Show', 'Hide');
      } else {
        button.textContent = button.textContent.replace('Hide', 'Show');
      }
    });
  });

  // Scroll-effect voor header
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
