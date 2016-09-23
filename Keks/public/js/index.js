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
		dots: true/*,
		autoplay: true,
		autoplaySpeed: 2500*/
	});

	$('.vertical-slider').slick({
		vertical: true,
		slidesToShow: 5
	});

/*	$('.block-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1

		responsive: [{
			breakpoint: 1300,
			settings: {
				slidesToShow: 4
  			}
  		}]
	});
*/
$(".block-slider").slick({

		slidesToShow: 5,
		slidesToScroll: 1,

  // the magic
  responsive: [{

      breakpoint: 1500,
      settings: {
        slidesToShow: 4,
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: true
      }

    }, {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]
});



	var player = new MediaElementPlayer('.player1');


});


