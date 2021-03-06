requirejs.config({
	baseUrl: './js',
});

requirejs([
	'domReady!',
	'jquery',
	'slick',
	'mediaelement-and-player'


], function () {
	'use strict';

	$('.main-slider').slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 2500
	});

	$('.vertical-slider').slick({
		vertical: true,
		slidesToShow: 5
	});

	$(".block-slider").slick({

		slidesToShow: 5,
		slidesToScroll: 1,


		responsive: [{

			breakpoint: 1500,
			settings: {
				slidesToShow: 4,
			}

			}, {

			breakpoint: 1300,
			settings: {
				slidesToShow: 3,
			}

			}, {

			breakpoint: 965,
			settings: {
				slidesToShow: 2,
			}

			}, {
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
			}
		}]
	});

	var menu = {
		init: function(){
			this.btnMenu();
		},
		btnMenu: function() {
			$('.btn-menu').on('click', function(){
				if(!$(this).hasClass('active')){
					$(this).addClass('active');
					$(this).next().slideDown('fast');
				} else {
					$(this).removeClass('active');
					$(this).next().slideUp('fast');
				}
			});
			$(document).on('click', function(event){
				if(!$(event.target).hasClass('btn-menu') && $(event.target).closest('.header__nav').length != 1){
					$('.btn-menu').removeClass('active');
					$('.btn-menu').next().slideUp();
				}
			});
		}
	};

	menu.init();


	var player = new MediaElementPlayer('.player1');


});


