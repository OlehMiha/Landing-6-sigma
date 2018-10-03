$(document).ready(function(){ 
    
//Слайдер

  $('.slider_doc').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      arrows: true,
      dots: false,
      speed: 500,
      pauseOnFocus: false,
  	  pauseOnHover: false,
  	  pauseOnDotsHover: false,
  	  TouchMove: false,
  	  swipe: true,
  	  swipeToSlide: true,
      responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 470,
            settings: {
              arrows: false,
            }
          },
      ]
  });


});
