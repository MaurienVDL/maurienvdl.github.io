document.addEventListener('DOMContentLoaded', () => {
  // ✅ Header laden
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    })
    .catch(err => console.error("Header load failed:", err));

  // ✅ Footer laden
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    })
    .catch(err => console.error("Footer load failed:", err));

  // ✅ Show more / Show less knoppen
  document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
      const cvGroup = button.closest('.cv-group');
      const collapsible = cvGroup.querySelector('.collapse');

      collapsible.classList.toggle('show');
      button.textContent = collapsible.classList.contains('show')
        ? 'Show less'
        : 'Show more';
    });
  });

  // ✅ Skill bar animation
  document.querySelectorAll('.skill-level').forEach(el => {
    const width = el.style.width;
    el.style.width = '0';
    setTimeout(() => {
      el.style.width = width;
    }, 100);
  });

  // ✅ Scroll-effect voor header
  window.addEventListener('scroll', () => {
    const header = document.getElementById('site-header');
    if (!header) return;

    header.classList.toggle('shrink', window.scrollY > 50);
    header.classList.toggle('scrolled', window.scrollY > 20);
  });

  // ✅ Adjust about offset
  function adjustAboutOffset() {
    const banner = document.getElementById("site-header");
    const about = document.querySelector(".about-section");
  
    if (banner && about) {
      const bannerStyles = getComputedStyle(banner);
      const marginTop = parseInt(bannerStyles.marginTop, 10);
      const marginBottom = parseInt(bannerStyles.marginBottom, 10);

      const bannerHeightWithMargins =
        banner.offsetHeight + marginTop + marginBottom;

      about.style.marginTop = bannerHeightWithMargins + "px";
    }
  }

  window.addEventListener("load", adjustAboutOffset);
  window.addEventListener("resize", adjustAboutOffset);

  const banner = document.getElementById("site-header");
  if (banner) {
    const resizeObserver = new ResizeObserver(adjustAboutOffset);
    resizeObserver.observe(banner);
  }

  function adjustAboutOffset() {
  const banner = document.getElementById("site-header");
  const about = document.querySelector(".about-section");
  
  // Run again when header is fetched and injected
  fetch('header.html')
    .then(r => r.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
      adjustAboutOffset(); // <-- recalc placement here
  });

});
