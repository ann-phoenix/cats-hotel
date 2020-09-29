$(function () {
	let intro = $('#intro');
	let header = $('#header');
	let introH = intro.innerHeight();
	let headerH = header.innerHeight();
	let scrollTop = $(window).scrollTop();
	let headerMenuToggle = $('#headerMenuToggle');
	let headerMenu = $('#header__menu');

	/* Rooms slider  https://kenwheeler.github.io/slick/ */

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
		responsive: [{
			breakpoint: 761,
			settings: {
				arrows: false,
			}
		}, ]
	});

	/* Reviews slider  */

	$('.reviews__slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: true,
		autoplay: true,
		autoplaySpeed: 9000,
		prevArrow: '<button class="reviews__slider-btn reviews__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button > ',
		nextArrow: '<button class="reviews__slider-btn reviews__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button > ',
		responsive: [{
				breakpoint: 941,
				settings: {
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 761,
				settings: {
					slidesToShow: 1,
					dots: true,
					arrows: false,
				}
			},
		]
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
		asNavFor: '.slider-class',
		responsive: [{
			breakpoint: 941,
			settings: {
				vertical: false,
			}
		}, ]
	});

	$('.slider-class').slick({
		arrows: false,
		dots: false,
		fade: true,
		lazyLoad: 'progressive',
		slidesToScroll: 1,
		slidesToShow: 1,
		infinite: true,
		swipe: true,
		asNavFor: '.preview-class',
		responsive: [{
			breakpoint: 941,
			settings: {
				autoplay: true,
				autoplaySpeed: 7000,
			}
		}, ]
	});

	/* Modals */
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

	/* Header scroll */

	headerScroll();
	$(window).on('scroll resize', function () {
		headerScroll();
	});

	function headerScroll() {
		introH = intro.innerHeight();
		headerH = header.innerHeight();

		let scrollTop = $(this).scrollTop();

		if (scrollTop >= (introH - headerH)) {
			header.addClass('header--dark');
		} else {
			header.removeClass('header--dark');
		}
	}

	/* Scroll to sections */
	$('[data-scroll]').on('click', function (event) {
		event.preventDefault();
		let scrollEl = $(this).data('scroll');
		let scrollElPos = $(scrollEl).offset().top;
		$('body').removeClass('show-header__menu');
		headerMenuToggle.removeClass('active');
		headerMenu.removeClass('show');
		$('html, body').animate({
			scrollTop: scrollElPos - headerH
		}, 500)
	});

	/* Burger */

	headerMenuToggle.on('click', function (event) {
		event.preventDefault();
		$('body').toggleClass('show-header__menu');
		$(this).toggleClass('active');
		headerMenu.toggleClass('show');
	});
	$(window).on('resize', function () {
		$('body').removeClass('show-header__menu');
		headerMenuToggle.removeClass('active');
		headerMenu.removeClass('show');
	});

	/* Jquery form styler  https://www.npmjs.com/package/jquery-form-styler */
	$('.filter-style').styler();


});