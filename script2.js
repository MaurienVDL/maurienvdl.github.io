document.addEventListener('DOMContentLoaded', () => {
  //
  // ✅ Load Header
  //
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    })
    .catch(err => console.error("Header load failed:", err));

  //
  // ✅ Load Footer
  //
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    })
    .catch(err => console.error("Footer load failed:", err));

  //
  // ✅ Show more / Show less buttons
  //
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

  //
  // ✅ Skill bar animation
  //
  document.querySelectorAll('.skill-level').forEach(el => {
    const width = el.style.width; // save original width
    el.style.width = '0'; // start from zero
    setTimeout(() => {
      el.style.width = width; // animate to final width
    }, 100);
  });

  //
  // ✅ Scroll-effect for header (with throttle)
  //
  function throttle(fn, limit) {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        fn.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  window.addEventListener(
    'scroll',
    throttle(() => {
      const header = document.getElementById('site-header');
      if (!header) return;

      header.classList.toggle('shrink', window.scrollY > 50);
      header.classList.toggle('scrolled', window.scrollY > 20);
    }, 100) // update at most every 100ms
  );

  //
  // ✅ Adjust "About" offset (with margins + ResizeObserver)
  //
  function adjustAboutOffset() {
    const banner = document.getElementById("site-header");
    const about = document.querySelector(".about-section");

    if (banner && about) {
      const bannerStyles = getComputedStyle(banner);
      const marginTop = parseInt(bannerStyles.marginTop, 10) || 0;
      const marginBottom = parseInt(bannerStyles.marginBottom, 10) || 0;

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
});
