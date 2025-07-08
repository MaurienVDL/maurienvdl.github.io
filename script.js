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

