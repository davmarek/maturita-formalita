// THEME VARIABLES
const body = document.body;
const themeSwitcher = document.getElementById("theme-switcher");
// SCROLLUP VARIABLES
const scrollUp = document.getElementById("scroll-up");
var hideScrollUp;

const updateScrollUpBtn = () => {
	if (document.documentElement.scrollTop > 200 || body.scrollTop > 200) {
		clearTimeout(hideScrollUp);
		scrollUp.style.display = "grid";
		scrollUp.classList.remove("hidden");
	} else {
		//scrollUp.style.display = "none";
		scrollUp.classList.add("hidden");
		hideScrollUp = setTimeout(() => {
			if (scrollUp.classList.contains("hidden"))
				scrollUp.style.display = "none";
		}, 300);
	}
};

// CHECK FOR STORED THEME
const theme = localStorage.getItem("theme");
if (theme) {
	body.classList.add(theme);
} else {
	localStorage.setItem("theme", "light");
	body.classList.add("light");
}
// SET TRANSITION AFTER THEME IS SET
setTimeout(() => {
	body.style.transition = "300ms ease-in-out";
}, 100);

// EVENT LISTENERS
themeSwitcher.onclick = () => {
	if (body.classList.contains("light")) {
		body.classList.add("dark");
		body.classList.remove("light");
		localStorage.setItem("theme", "dark");
	} else {
		body.classList.add("light");
		body.classList.remove("dark");
		localStorage.setItem("theme", "light");
	}
};

if (scrollUp != null) {
	updateScrollUpBtn();
	window.onscroll = () => updateScrollUpBtn();
}
