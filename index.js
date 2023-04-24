function touchHover(x) {
	if (x.style.backgroundColor != "rgba(0, 0, 0, 0)") {
		x.style.backgroundColor = "rgba(0, 0, 0, 0)";
	}

	setTimeout(function () {
		x.style.backgroundColor = x.style.color;
	}, 1000);
}

const toggleMenu = () => {
	let menu = document.querySelector(".navbar__menu__container");
	let content = document.querySelector(".content");
	let contentActive = document.querySelector(".-active");

	menu.classList.toggle("--active");
};
