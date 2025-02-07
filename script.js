document.addEventListener("DOMContentLoaded", function () {
  // Navigation Toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navList = document.getElementById("nav-list");

  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", !expanded);
    navList.setAttribute("aria-hidden", expanded);
    navList.classList.toggle("open");
  });

  // Dynamic Footer Year
  document.getElementById("current-year").textContent = new Date().getFullYear();
});
