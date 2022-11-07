
const top_toggle_btn = document.getElementsByClassName("top_toggle_btn"); // 상단 버튼 클래스
const top_toggle_close = document.getElementsByClassName("top_toggle_close"); // 상단 버튼 메뉴 X버튼 클래스
const top_toggle_menu = document.getElementsByClassName("top_toggle_menu"); // 상단 버튼 메뉴 클래스
const ticketing = window.getComputedStyle(top_toggle_menu[0]);
const airport = window.getComputedStyle(top_toggle_menu[1]);
const inflight = window.getComputedStyle(top_toggle_menu[2]);
const skypass = window.getComputedStyle(top_toggle_menu[3]);
const body = document.body;

top_toggle_btn[0].addEventListener("click", toggleup);
function toggleup() {
	if ( ticketing.display === 'none' ) {
		top_toggle_menu[1].style.display = "none";
		top_toggle_menu[2].style.display = "none";
		top_toggle_menu[3].style.display = "none";
		top_toggle_menu[0].style.display = "block";
	} else {
		top_toggle_menu[0].style.display = "none";
	}
}
top_toggle_btn[1].addEventListener("click", toggleup1);
function toggleup1() {
	if ( airport.display === 'none' ) {
		top_toggle_menu[0].style.display = "none";
		top_toggle_menu[2].style.display = "none";
		top_toggle_menu[3].style.display = "none";
		top_toggle_menu[1].style.display = "block";
	} else {
		top_toggle_menu[1].style.display = "none";
	}
}
top_toggle_btn[2].addEventListener("click", toggleup2);
function toggleup2() {
	if ( inflight.display === 'none' ) {
		top_toggle_menu[0].style.display = "none";
		top_toggle_menu[1].style.display = "none";
		top_toggle_menu[3].style.display = "none";
		top_toggle_menu[2].style.display = "block";
	} else {
		top_toggle_menu[2].style.display = "none";
	}
}
top_toggle_btn[3].addEventListener("click", toggleup3);
function toggleup3() {
	if ( skypass.display === 'none' ) {
		top_toggle_menu[0].style.display = "none";
		top_toggle_menu[1].style.display = "none";
		top_toggle_menu[2].style.display = "none";
		top_toggle_menu[3].style.display = "block";
	} else {
		top_toggle_menu[3].style.display = "none";
	}
}
// X버튼 클릭
top_toggle_close[0].addEventListener("click", toggledown);
top_toggle_close[1].addEventListener("click", toggledown);
top_toggle_close[2].addEventListener("click", toggledown);
top_toggle_close[3].addEventListener("click", toggledown);
function toggledown() {
	top_toggle_menu[0].style.display = "none";
	top_toggle_menu[1].style.display = "none";
	top_toggle_menu[2].style.display = "none";
	top_toggle_menu[3].style.display = "none";
}
// 버튼 외부 클릭시 닫기
body.addEventListener("click", bodyclick);
function bodyclick(event) {
	const target = event.target;
	const currentTarget = event.currentTarget;
	
	if ( target.className == currentTarget.querySelector(".top_toggle_btn").className ) { // 메뉴 버튼
		return;
	} else if ( target.className == currentTarget.querySelector(".top_toggle_close").className ) { // X버튼
		return;
	} else if ( target.className == currentTarget.querySelector(".top_toggle_menu").className ) { // 상단 메뉴창
		return;
	} else if ( target.className == currentTarget.querySelector(".top_toggle_menu_1").className ) { // 상단 메뉴 내부 영역
		return;
	} else if ( target.className == currentTarget.querySelector(".top_toggle_menu_2").className ) { // 상단 메뉴 내부 영역
		return;
	} else if ( target.className == currentTarget.querySelector(".top_toggle_menu_3").className ) { // 상단 메뉴 내부 영역
		return;
	} else if ( target.className == currentTarget.querySelector(".top_toggle_menu_4").className ) { // 상단 메뉴 내부 영역
		return;
	} else if ( target.className == currentTarget.querySelector(".list_top_toggle_menu").className ) { // 상단 메뉴 내부 리스트
		return;
	} else {
		top_toggle_menu[0].style.display = "none";
		top_toggle_menu[1].style.display = "none";
		top_toggle_menu[2].style.display = "none";
		top_toggle_menu[3].style.display = "none";
	}
}