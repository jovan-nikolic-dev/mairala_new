let nav = document.getElementById("nav");
let logo = document.getElementById("logo");
let navWrapper = document.getElementById("nav-wrapper");

window.onscroll = function() {
	scrollFunction();
}

function scrollFunction() {
	if (document.body.scrollTop > 95 || document.documentElement.scrollTop > 95) {
		navWrapper.style.minHeight = "60px";
		logo.style.height = "27px";
		nav.style.backgroundColor = "rgba(48, 48, 48, 1)";
	} else {
		navWrapper.style.minHeight = "95px";
		logo.style.height = "38px";
		nav.style.backgroundColor = "rgba(48, 48, 48, 0.5)";		
	}
}



let navLink = document.getElementsByClassName("nav-link");
console.log(navLink);


console.log(navLink.length);

for (let i = 0; i < navLink.length; i++) {
	let underline = document.createElement("DIV");
	underline.style.height = "3px";
	underline.style.width = "100%";
	underline.style.position = "absolute";
	underline.style.bottom = "0";
	underline.style.left = "0";
	underline.style.backgroundColor = "#7b6c63";
	underline.style.opacity = "0";
	underline.style.transition = ".4s ease-in-out";
	navLink[i].appendChild(underline);

	navLink[i].onmouseover = function() {
		underline.style.opacity = "1";
	}

	navLink[i].onmouseout = function() {
		underline.style.opacity = "0";
	}
}


