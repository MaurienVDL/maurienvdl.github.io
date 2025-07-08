// Header loaden
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    });

// Footer loaden
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });

// Header scroll function
window.addEventListener('scroll', function() {
    const header = document.getElementById('site-header');
    if (window.scrollY > 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

window.addEventListener('scroll', function () {
    const header = document.getElementById('site-header');
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});



document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const group = button.previousElementSibling.querySelectorAll('.collapse');

    group.forEach(item => {
      item.classList.toggle('show');
    });

    // Toggle button text
    if (button.textContent.includes('Show')) {
      button.textContent = button.textContent.replace('Show', 'Hide');
    } else {
      button.textContent = button.textContent.replace('Hide', 'Show');
    }
  });
});

