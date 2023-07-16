const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const navItems = document.querySelectorAll(".primary-navigation li");


function setFalse() {
	primaryNav.setAttribute('data-visible', "false")
	navToggle.setAttribute('aria-expanded', "false")
	navToggle.classList.toggle('rotate');
	navToggle.classList.add('uil-apps');
	navToggle.classList.remove('uil-times');


	navItems.forEach((item) => {
		item.style.transitionDelay = `300ms`;
		item.setAttribute('data-visible', "false")
	})
}
navToggle.addEventListener('click', () => {
	const visibility = primaryNav.getAttribute('data-visible');


	if (visibility === "false") {
		primaryNav.setAttribute('data-visible', "true")
		navToggle.setAttribute('aria-expanded', "true")
		navToggle.classList.toggle('rotate');
		navToggle.classList.remove('uil-apps');
		navToggle.classList.add('uil-times');

		navItems.forEach((item, i) => {
			item.setAttribute('data-visible', "true")
			item.style.transitionDelay = `${i*200 + 800}ms`;
			item.addEventListener('click', setFalse);
		})


	} else if (visibility === "true") {
		navItems.forEach((item) => {
			item.removeEventListener('click', setFalse)
		})
		setFalse();
	}
})


function navScroll() {
	window.onscroll = function() {
		var top = window.scrollY;
		var landing = document.querySelector(".page-landing")
		var landing_height = document.querySelector("#landing").getBoundingClientRect().height;
		var about = document.querySelector(".page-about");
		var about_height = document.querySelector("#about").getBoundingClientRect().height;
		var education = document.querySelector(".page-education");
		var education_height = document.querySelector("#education").getBoundingClientRect().height;
		var experience = document.querySelector(".page-experience");
		var experience_height = document.querySelector("#experience").getBoundingClientRect().height;


		if (top < landing_height) {
			landing.classList.add('active');
			about.classList.remove('active');
			education.classList.remove('active');
			experience.classList.remove('active');
		} else if (top >= landing_height && top <= landing_height + about_height) {
			landing.classList.remove('active');
			about.classList.add('active');
			education.classList.remove('active');
			experience.classList.remove('active');
		} else if (top >= landing_height + about_height && top <= landing_height + about_height + education_height) {
			landing.classList.remove('active');
			about.classList.remove('active');
			education.classList.add('active');
			experience.classList.remove('active');
		} else if (top >= landing_height + about_height + education_height + vh(20)) {
			landing.classList.remove('active');
			about.classList.remove('active');
			education.classList.remove('active');
			experience.classList.add('active');
		}
	}
}


navScroll();
