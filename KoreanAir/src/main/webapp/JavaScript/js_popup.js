const btn_ticketing = document.getElementById("btn_ticketing");
const btn_airport = document.getElementById("btn_airport");
const btn_inflight = document.getElementById("btn_inflight");
const btn_skypass = document.getElementById("btn_skypass");
const top_menu = document.getElementsByClassName("top_menu");
const ticketing = window.getComputedStyle(top_menu[0]);
const airport = window.getComputedStyle(top_menu[1]);
const inflight = window.getComputedStyle(top_menu[2]);
const skypass = window.getComputedStyle(top_menu[3]);
btn_ticketing.addEventListener("click", popup);
function popup() {
	if ( ticketing.display === 'none' ) {
		top_menu[1].style.display = "none";
		top_menu[2].style.display = "none";
		top_menu[3].style.display = "none";
		top_menu[0].style.display = "block";
	} else {
		top_menu[0].style.display = "none";
	}
}
btn_airport.addEventListener("click", popup1);
function popup1() {
	if ( airport.display === 'none' ) {
		top_menu[0].style.display = "none";
		top_menu[2].style.display = "none";
		top_menu[3].style.display = "none";
		top_menu[1].style.display = "block";
	} else {
		top_menu[1].style.display = "none";
	}
}
btn_inflight.addEventListener("click", popup2);
function popup2() {
	if ( inflight.display === 'none' ) {
		top_menu[0].style.display = "none";
		top_menu[1].style.display = "none";
		top_menu[3].style.display = "none";
		top_menu[2].style.display = "block";
	} else {
		top_menu[2].style.display = "none";
	}
}
btn_skypass.addEventListener("click", popup3);
function popup3() {
	if ( skypass.display === 'none' ) {
		top_menu[0].style.display = "none";
		top_menu[1].style.display = "none";
		top_menu[2].style.display = "none";
		top_menu[3].style.display = "block";
	} else {
		top_menu[3].style.display = "none";
	}
}