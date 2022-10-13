---
---

/* 
Copied from https://github.com/derekkedziora/jekyll-demo/blob/master/scripts/mode-switcher.js
https://github.com/derekkedziora/jekyll-demo
Creative Commons Attribution 4.0 International License
*/

let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)"); 
let theme = sessionStorage.getItem('theme') || localStorage.getItem('theme');

const iconSun = "{{ site.baseurl }}/assets/img/sun.svg";
const iconMoon = "{{ site.baseurl }}/assets/img/moon.svg";


function changeIconImgSrc(src) {
	document.addEventListener("DOMContentLoaded", () => {
		document.getElementById("theme-toggle-img").src = src;
		document.getElementById("theme-toggle-img--mobile").src = src;
	  });
}

if (systemInitiatedDark.matches) {
	changeIconImgSrc(iconMoon);
} else {
	changeIconImgSrc(iconSun);
}

function prefersColorTest(systemInitiatedDark) {
  if (systemInitiatedDark.matches) {
  	document.documentElement.setAttribute('data-theme', 'dark');		
   	changeIconImgSrc(iconMoon);
   	sessionStorage.setItem('theme', '');
  } else {
  	document.documentElement.setAttribute('data-theme', 'light');
    changeIconImgSrc(iconSun);
    sessionStorage.setItem('theme', '');
  }
}
systemInitiatedDark.addListener(prefersColorTest);


function modeSwitcher() {
	let theme = sessionStorage.getItem('theme');
	if (theme === "dark") {
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
	}	else if (theme === "light") {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
	} else if (systemInitiatedDark.matches) {	
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
	}
    let src = (sessionStorage.getItem('theme') === 'dark') ? iconMoon : iconSun;
    document.getElementById("theme-toggle-img").src = src;
    document.getElementById("theme-toggle-img--mobile").src = src;
    localStorage.setItem('theme', sessionStorage.getItem('theme'));
}

if (theme === "dark") {
	document.documentElement.setAttribute('data-theme', 'dark');
	sessionStorage.setItem('theme', 'dark');
	changeIconImgSrc(iconMoon);
} else if (theme === "light") {
	document.documentElement.setAttribute('data-theme', 'light');
	sessionStorage.setItem('theme', 'light');
	changeIconImgSrc(iconSun);
}