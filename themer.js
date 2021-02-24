const body = document.body;
const themeSwitcher = document.getElementById("theme-switcher");

const theme = localStorage.getItem("theme");
if (theme) {
	body.classList.add(theme);
} else {
	localStorage.setItem("theme", "light");
	body.classList.add("light");
}

setTimeout(() => {
	body.style.transition = "300ms ease-in-out";
}, 100);

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
