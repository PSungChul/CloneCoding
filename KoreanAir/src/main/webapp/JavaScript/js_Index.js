const before = document.getElementById("before");
const after = document.getElementById("after");
const div_middle_top = document.getElementById("div_middle_top");
let middle = window.getComputedStyle(div_middle_top);

before.addEventListener("click", bf);
after.addEventListener("click", af);

function bf() {
	if ( middle.backgroundImage === 'url("http://localhost:8080/KoreanAir/CSS/picture/Front_1.jpg")' ) {
		div_middle_top.style.backgroundImage = "url('CSS/picture/Front_4.jpg')"
	} else if ( middle.backgroundImage === 'url("http://localhost:8080/KoreanAir/CSS/picture/Front_2.jpg")' ) {
		div_middle_top.style.backgroundImage = "url('CSS/picture/Front_1.jpg')"
	} else if ( middle.backgroundImage === 'url("http://localhost:8080/KoreanAir/CSS/picture/Front_3.jpg")' ) {
		div_middle_top.style.backgroundImage = "url('CSS/picture/Front_2.jpg')"
	} else if ( middle.backgroundImage === 'url("http://localhost:8080/KoreanAir/CSS/picture/Front_4.jpg")' ) {
		div_middle_top.style.backgroundImage = "url('CSS/picture/Front_3.jpg')"
	}
}

function af() {
	if ( middle.backgroundImage === 'url("http://localhost:8080/KoreanAir/CSS/picture/Front_1.jpg")' ) {
		div_middle_top.style.backgroundImage = "url('CSS/picture/Front_2.jpg')"
	} else if ( middle.backgroundImage === 'url("http://localhost:8080/KoreanAir/CSS/picture/Front_2.jpg")' ) {
		div_middle_top.style.backgroundImage = "url('CSS/picture/Front_3.jpg')"
	} else if ( middle.backgroundImage === 'url("http://localhost:8080/KoreanAir/CSS/picture/Front_3.jpg")' ) {
		div_middle_top.style.backgroundImage = "url('CSS/picture/Front_4.jpg')"
	} else if ( middle.backgroundImage === 'url("http://localhost:8080/KoreanAir/CSS/picture/Front_4.jpg")' ) {
		div_middle_top.style.backgroundImage = "url('CSS/picture/Front_1.jpg')"
	}
}