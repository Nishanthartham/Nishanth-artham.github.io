
$('#ripple').ripples({
	resolution: 512,
	dropRadius: 20,
	perturbance: 0.01,
});
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
// Tag.addEventListener('mouseleave',changeclass())
function changeclass1() {
	img1.src = "./images/web-development-color.png";
}
function Originalclass1() {
	img1.src = "./images/web-development.png";
}
function changeclass2() {
	img2.src = "./images/web-development-color.png";
}
function Originalclass2() {
	img2.src = "./images/web-development.png";
}
function changeclass3() {
	img3.src = "./images/web-development-color.png";
}
function Originalclass3() {
	img3.src = "./images/web-development.png";
}
let menu = document.getElementById('menuicon');
function menuicon(){
	console.log(menu.style.display.value);
}
