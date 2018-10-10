(jQuery)(document).ready(function($){ 
    
//Слайдер

  $('.slider_doc').slick({
      lazyLoad: 'ondemand',
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
              slidesToShow: 1,
              arrows: false,
            }
          },
      ]
  });

  //    $('#slick_1').slick({
  //       infinite: true,
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //       arrows: true,
  //       fade: true,
  //       asNavFor: '#slick_2'
  //     });
  //     $('#slick_2').not('.slick-initialized').slick({
  //       infinite: true,
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //       arrows: true,
  //       fade: true,
  //               centerMode: true,
  //       asNavFor: '#slick_1'
  //     });

  // $(document).on('opened', '.remodal', function () {
  //     $("#slick_2").slick('reinit');
  //   });
  //   $('#fancybox').fancybox({
  //       autoSize: true,
  //       beforeShow: function() {
  //         $('#slick_2').slick('setPosition');
  //       }
  //   });

});
