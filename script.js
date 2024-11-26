document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.getElementById('nav-list');

    navToggle.addEventListener('click', function() {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
        navToggle.setAttribute('aria-expanded', !expanded);
        navList.setAttribute('aria-hidden', expanded);
        navList.classList.toggle('show');

        // Smooth transition for the dropdown menu
        if (expanded) {
            navList.style.maxHeight = null; // Collapse the menu
        } else {
            navList.style.maxHeight = navList.scrollHeight + "px"; // Expand the menu
        }
    });
});
