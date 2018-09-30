$(document).ready(function(){ 
    
//Слайдер

  $('.slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      arrows: true,
      dots: true,
      speed: 500,
      fade: true,
      pauseOnFocus: false,
	  pauseOnHover: false,
	  pauseOnDotsHover: false,
	  TouchMove: false,
	  swipe: true,
	  swipeToSlide: true,
      responsive: [
          {
            breakpoint: 750,
            settings: {
              arrows: false,
            }
          },
      ]
  });

  $('.slider2').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      arrows: false,
      dots: true,
      speed: 500,
      fade: true,
      pauseOnFocus: false,
	  pauseOnHover: false,
	  pauseOnDotsHover: false,
	  TouchMove: false,
	  swipe: true,
	  swipeToSlide: true,
      responsive: [
          {
            breakpoint: 991,
            settings: {
              dots: false,
            }
          },
      ]
  });

	$('#table_1').on('shown.bs.modal', function (e) {
	  $("#table_1 .slider").slick('setPosition');
	})
	$('#table_2').on('shown.bs.modal', function (e) {
	  $("#table_2 .slider").slick('setPosition');
	})
	$('#table_3').on('shown.bs.modal', function (e) {
	  $("#table_3 .slider").slick(setPosition);
	})
	$('#table_4').on('shown.bs.modal', function (e) {
	  $("#table_4 .slider").slick('setPosition');
	})
});
