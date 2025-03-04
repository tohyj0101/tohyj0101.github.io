document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navList = document.getElementById("nav-list");
  const darkModeToggle = document.getElementById("dark-mode-toggle");

  // Mobile Menu Toggle
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", !expanded);
    navList.classList.toggle("open");
  });

  // Dark Mode Toggle
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // Dynamic Footer Year
  document.getElementById("current-year").textContent = new Date().getFullYear();
});
