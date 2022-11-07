const btn_top = document.getElementsByClassName("btn_top"); // 상단 버튼 클래스
const btn_close = document.getElementsByClassName("btn_close"); // 상단 버튼 메뉴 X버튼 클래스
const top_menu = document.getElementsByClassName("top_menu"); // 상단 버튼 메뉴 클래스
const ticketing = window.getComputedStyle(top_menu[0]);
const airport = window.getComputedStyle(top_menu[1]);
const inflight = window.getComputedStyle(top_menu[2]);
const skypass = window.getComputedStyle(top_menu[3]);
const body = document.body;

btn_top[0].addEventListener("click", popup);
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
btn_top[1].addEventListener("click", popup1);
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
btn_top[2].addEventListener("click", popup2);
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
btn_top[3].addEventListener("click", popup3);
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
// X버튼 클릭
btn_close[0].addEventListener("click", popdown);
btn_close[1].addEventListener("click", popdown);
btn_close[2].addEventListener("click", popdown);
btn_close[3].addEventListener("click", popdown);
function popdown() {
	top_menu[0].style.display = "none";
	top_menu[1].style.display = "none";
	top_menu[2].style.display = "none";
	top_menu[3].style.display = "none";
}
// 버튼 외부 클릭시 닫기
body.addEventListener("click", bodyclick);
function bodyclick(event) {
	const target = event.target;
	const currentTarget = event.currentTarget;
	
	if ( target.className == currentTarget.querySelector(".btn_top").className ) { // 메뉴 버튼
		return;
	} else if ( target.className == currentTarget.querySelector(".btn_close").className ) { // X버튼
		return;
	} else if ( target.className == currentTarget.querySelector(".top_menu").className ) { // 상단 메뉴창
		return;
	} else if ( target.className == currentTarget.querySelector(".top_menu_1").className ) { // 상단 메뉴 내부 영역
		return;
	} else if ( target.className == currentTarget.querySelector(".top_menu_2").className ) { // 상단 메뉴 내부 영역
		return;
	} else if ( target.className == currentTarget.querySelector(".top_menu_3").className ) { // 상단 메뉴 내부 영역
		return;
	} else if ( target.className == currentTarget.querySelector(".top_menu_4").className ) { // 상단 메뉴 내부 영역
		return;
	} else if ( target.className == currentTarget.querySelector(".list_top_menu").className ) { // 상단 메뉴 내부 리스트
		return;
	} else {
		top_menu[0].style.display = "none";
		top_menu[1].style.display = "none";
		top_menu[2].style.display = "none";
		top_menu[3].style.display = "none";
	}
}