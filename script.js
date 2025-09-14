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
      const cvGroup = button.closest('.cv-group');
      const collapsible = cvGroup.querySelector('.collapse');
  
      collapsible.classList.toggle('show');
  
      button.textContent = collapsible.classList.contains('show')
        ? 'Show less'
        : 'Show more';
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

  function adjustAboutOffset() {
    const banner = document.getElementById("site-header");
    const about = document.querySelector("main");

     if (banner && about) {
      const bannerStyles = getComputedStyle(banner);
      const marginTop = parseFloat(bannerStyles.marginTop) || 0;
      const marginBottom = parseFloat(bannerStyles.marginBottom) || 0;
  
      const bannerHeightWithMargins =
        banner.offsetHeight;

      about.style.setProperty("--banner-offset", bannerHeightWithMargins + "px");
    }
  }

  // Run on page load
  window.addEventListener("load", adjustAboutOffset);

  // Run again if window is resized (e.g., responsive banner height)
  window.addEventListener("resize", adjustAboutOffset);

   // 🔥 React to banner size changes automatically
  const banner = document.getElementById("site-header");
  if (banner) {
    const resizeObserver = new ResizeObserver(adjustAboutOffset);
    resizeObserver.observe(banner);
  }
  
});
