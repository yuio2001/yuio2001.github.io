"use strict";

(function(){
	var lookMore = document.body.querySelectorAll('.see-more');
	var tattooList = document.body.querySelector('.tattoo-list');
	var tattooCatalog = document.body.querySelector('.tattoo-catalog');

	var amount = { arm: 4, medium: 4, tiny: 4 };

	var close = document.body.querySelector('.tattoo-close');
	close.onclick = function(){
		tattooCatalog.style.display = 'none';
	};

	lookMore.forEach(function(link){
		link.onclick = function(event){
			var type = this.getAttribute('data-type');
			var path = 'img/catalog/' + type + '/';	

			for(var i = 1; i <= amount[type]; i++){
				var slide = document.createElement('img');
				slide.setAttribute('src', path + i + '.jpg');
				tattooList.appendChild(slide);
			};

			var sliderImages = document.querySelectorAll('.tattoo-list img');
			var arrowLeft = document.querySelector(".tattoo-arrows .prev");
			var arrowRight = document.querySelector(".tattoo-arrows .next");
			
			var	current = 0;

			function reset(){
				for(var i = 0; i < sliderImages.length; i++){
					sliderImages[i].style.display = 'none';
				};
			}

			function startSlide(){
				reset();
				sliderImages[0].style.display = 'block';
			};

			function slideLeft(){
				reset();
				sliderImages[current - 1].style.display = 'block';
				current--;
			};

			function slideRight(){
				reset();
				sliderImages[current + 1].style.display = 'block';
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
			tattooCatalog.style.display = 'flex';
		};
	});
}());