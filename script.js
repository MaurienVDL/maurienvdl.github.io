const toggleButtons = document.querySelectorAll(".toggle-btn");

toggleButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const collapse = btn.previousElementSibling;
    collapse.classList.toggle("hidden");
    btn.textContent = collapse.classList.contains("hidden")
      ? btn.textContent.includes("Licenses")
        ? "Show Licenses"
        : btn.textContent.includes("Volunteering")
        ? "Show Volunteering"
        : "Show more"
      : btn.textContent.includes("Licenses")
      ? "Hide Licenses"
      : btn.textContent.includes("Volunteering")
      ? "Hide Volunteering"
      : "Show less";
  });
});
