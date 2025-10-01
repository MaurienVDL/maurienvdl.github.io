document.addEventListener('DOMContentLoaded', () => {
  // ✅ Load Header
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;

      // Attach smooth scroll to "Home" after header exists
      const homeLink = document.getElementById("home-link");
      if (homeLink) {
        homeLink.addEventListener("click", (e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      }

      // Run offset adjustment after header loads
      adjustAboutOffset();
      window.addEventListener("resize", adjustAboutOffset);

      const banner = document.getElementById("site-header");
      if (banner) {
        const resizeObserver = new ResizeObserver(adjustAboutOffset);
        resizeObserver.observe(banner);
      }
    });

  // ✅ Load Footer
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });

  // ✅ Show more / Show less buttons
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

  // ✅ Scroll effect for header
  window.addEventListener('scroll', () => {
    const header = document.getElementById('site-header');
    if (!header) return;

    header.classList.toggle('shrink', window.scrollY > 50);
    header.classList.toggle('scrolled', window.scrollY > 20);
  });

  // ✅ Animate skill bars
  document.querySelectorAll('.skill-level').forEach(el => {
    const width = el.style.width;
    el.style.width = '0';
    setTimeout(() => {
      el.style.width = width;
    }, 100);
  });

  // ✅ Function to adjust spacing for "About"
  function adjustAboutOffset() {
    const banner = document.getElementById("site-header");
    const about = document.querySelector("main");

    if (banner && about) {
      const styles = getComputedStyle(banner);
      const paddingTop = parseFloat(styles.paddingTop) || 0;
      const bannerHeight = banner.getBoundingClientRect().height - paddingTop;
      about.style.setProperty("--banner-offset", bannerHeight + "px");
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-toggle");
    menuBtn.addEventListener("click", () => {
      const nav = document.getElementById("nav-menu");
      nav.classList.toggle("show");
  });
});


});
