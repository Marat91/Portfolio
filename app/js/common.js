$(function() {

	$('#my-menu').mmenu({
		extensions: [ 'theme-black', 'effect-menu-slide', 'pagedim-black' ],
		navbar: {
		 title:'<img src="img/logo-1.svg" alt="Салон красоты">'
		},
		offCanvas: {
			position: "right"
		 }
	});

	var api = $('#my-menu').data('mmenu');

	api.bind('open:finish', function(){
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});
	$('.carousel-services').on('initialized.owl.carousel', function(){
		setTimeout(function() {
			carouselService()
		}, 100);
	});
	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fas fa-angle-double-left"></i>', '<i class="fas fa-angle-double-right"></i>'],
		responsiveClass: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			}
		}
	});

	$('.carousel-services-content').equalHeights();

	function carouselService(){
		$('.carousel-services-item').each(function() {
			var ths = $(this),
				thsh = ths.find('.carousel-services-content').outerHeight();
				ths.find('.carousel-services-image').css('min-height', thsh);
		});
	}carouselService();

	$('.carousel-services-composition .h3').each(function(){
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});
	$('section .h2').each(function(){
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	});
	$('select').selectize();


		//scroll
		$(window).scroll(function() {
			if ($(this).scrollTop() > $(this).height()){
				$('.top').addClass('active');
			} else {
				$('.top').removeClass('active');
			}
		});
		//scroll active
		$('.top').click(function(){
			$('html,body').stop().animate({scrollTop: 0}, 'slow', 'swing');
		});


		//e-mail Ajax send
		$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.succes').remmoveClass('active').fadeOut();
				// Done Functions
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});
	$('.partners').owlCarousel({
		loop: true,
		smartSpeed: 700,
		dots: false,
		nav: true,
		responsiveClass: true,
		navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});

	function onResize(){
		$('.carousel-services-content').equalHeights();
	}onResize();
	window.onresize = function() {onResize()};
});
//preloader
    $(window).on('load', function() {
    	$('.preloader').delay(1000).fadeOut('slow');
    });