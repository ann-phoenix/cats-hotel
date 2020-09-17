$(function () {

	/*Rooms slider  https://kenwheeler.github.io/slick/ */

	$('.rooms__slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 9000,
		prevArrow: '<button class="rooms__slider-btn rooms__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button > ',
		nextArrow: '<button class="rooms__slider-btn rooms__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button > ',
	});
});