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

	/*Reviews slider  */

	$('.reviews__slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: true,
		autoplay: true,
		autoplaySpeed: 9000,
		prevArrow: '<button class="reviews__slider-btn reviews__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button > ',
		nextArrow: '<button class="reviews__slider-btn reviews__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button > ',
	});

	$('.preview-class').slick({
		arrows: false,
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		vertical: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-class'
	});

	$('.slider-class').slick({
		arrows: false,
		fade: true,
		dots: false,
		lazyLoad: 'progressive',
		slidesToScroll: 1,
		slidesToShow: 1,
		infinite: true,
		swipe: true,
		asNavFor: '.preview-class'
	});

	/*Modals*/
	$('[data-modal]').on('click', function (event) {
		event.preventDefault();
		let modal = $(this).data('modal');

		$('body').addClass('no-scroll');
		$(modal).addClass('show');

		setTimeout(function () {
			$(modal).find('.modal__content').css({
				transform: 'scale(1)',
				opacity: '1',
			});
		}, 500);
	});

	$('[data-modal-close]').on('click', function (event) {
		event.preventDefault();
		let modal = $(this).parents('.modal');

		modalClose(modal);

	});

	$('.modal').on('click', function () {
		let modal = $(this);

		modalClose(modal);

	});

	$('.modal__content').on('click', function (event) {
		event.stopPropagation();
	});

	function modalClose(modal) {

		modal.find('.modal__content').css({
			transform: 'scale(.5)',
			opacity: '0',
		});

		setTimeout(function () {
			$('body').removeClass('no-scroll');
			modal.removeClass('show');
		}, 500);
	}

});