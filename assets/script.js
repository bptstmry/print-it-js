const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// -- basic parameter --
const numberOfSlides = slides.length;
// position
let currentIndex = 0;

// -- bullets points --
// creating all <div class="dot"> under <div class="dots">
let parentElement = document.querySelector(".dots");
for (let i = 0; i < numberOfSlides; i++) {
    let nouvelElement = document.createElement('div');
    parentElement.appendChild(nouvelElement);
    nouvelElement.classList.add("dot");
}
// add active bulletsPoints for the current position
let bulletsPoints = document.querySelectorAll(".dot");
bulletsPoints[currentIndex].classList.add("dot_selected");

// -- eventListener for arrowLeft --
let arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", function () {
    console.log("You clicked on the left arrow");})

// -- eventListener for arrowRight --
let arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", function () {
    console.log("You clicked on the right arrow");})