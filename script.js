document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
    });

    // Mobile Navigation Toggle
    const navToggle = document.querySelector(".nav-toggle");
    const navList = document.querySelector(".nav-list");

    navToggle.addEventListener("click", function () {
        navList.classList.toggle("active");
    });

    // Dynamic Year in Footer
    document.getElementById("current-year").textContent = new Date().getFullYear();
});
