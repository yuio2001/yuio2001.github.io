"use strict";

var sliderImages = document.querySelectorAll('.slider-item');
var arrowLeft = document.querySelector(".prev");
var arrowRight = document.querySelector(".next");

var arrowLeftMobile = document.querySelector(".gallery-arrows-mobile .prev");
var arrowRightMobile = document.querySelector(".gallery-arrows-mobile .next");

var sliderDots = document.querySelectorAll(".gallery-nav-list span");
var	current = 0;

function reset(){
	for(var i = 0; i < sliderImages.length; i++){
		sliderImages[i].style.display = 'none';
		sliderDots[i].classList.remove('active');
	};
}

function startSlide(){
	reset();
	sliderImages[0].style.display = 'block';
	sliderDots[0].classList.add('active');

};

function slideLeft(){
	reset();
	sliderImages[current - 1].style.display = 'block';
	sliderDots[current - 1].classList.add('active');
	current--;
};

function slideRight(){
	reset();
	sliderImages[current + 1].style.display = 'block';
	sliderDots[current + 1].classList.add('active');
	current++;
};

arrowLeft.onclick = arrowLeftMobile.onclick = function(e){
	if(current === 0){
		current = sliderImages.length;
	};
	slideLeft();
};

arrowRight.onclick = arrowRightMobile.onclick = function(e){
	if(current === sliderImages.length - 1){
		current = -1;
	};
	slideRight();
};

startSlide();