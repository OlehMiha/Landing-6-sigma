//Прелодер и первичные анимации
(jQuery)(document).ready(function($){ 
        var $preloader = $('.volosunov'),
            $spinner = $preloader.find('.spinner');
        $spinner.delay(650).fadeOut('slow');
        $preloader.delay(650).fadeOut('slow');
        $('.mov_fadeInUp_start').addClass('animated fadeInUp');
        $('.mov_zoomIn_start').css("opacity","1");
        $('.mov_zoomIn_start').addClass('animated zoomIn');
        $('.mov_fadeInRight_start').addClass('animated fadeInRight');
    });


(jQuery)(document).ready(function($){ 
//Отключить выделение
    window.oncontextmenu = function() {
        return false;
    } 

    document.addEventListener('mousemove',function(e){
      if( e.target.getAttribute('unselectable')=='on' )
        e.target.ownerDocument.defaultView.getSelection().removeAllRanges();
    },false);
    
    


    //Меню топ  
    var close = false;
    $(".button_mobi_menu").on('click', function () {
        if ($(this).hasClass('active')) {
            $('.button_mobi_menu').removeClass("active");
            $('.menu_scrollbar').removeClass("active");
            $('.menu_top').removeClass("active");
            close = false;
            return;
        }
        $('.button_mobi_menu').addClass("active");
        $('.menu_scrollbar').addClass("active");
        $('.menu_div').addClass("scroll");
        $(".menu_div_off").css('display', 'block');

        setTimeout(function() {
            $('.menu_top').addClass("active");
        }, 100);
            close = true;
    }); 

    $(".menu_top li a:not(.no-click)").on('click', function () {
        if(close == true){
            $('.button_mobi_menu').removeClass("active");
            $('.menu_scrollbar').removeClass("active");
            $('.menu_top').removeClass("active");
            close = false;
        }
    }); 

    //Phone top button
    $(".button_mobi_phone_block").on('click', function () {
        if ($(this).hasClass('active')) {
            $('.button_mobi_phone_block').removeClass("active");
            $('.heder_div').removeClass("active");
            return;
        }
        $('.button_mobi_phone_block').addClass("active");
        $('.heder_div').addClass("active");
        $('.menu_div').addClass("scroll");
    }); 
    $(".arr_up").on('click', function () {
        $('.button_mobi_phone_block').removeClass("active");
        $('.heder_div').removeClass("active");
    }); 




//no-click
$('.no-click').on('click', function (e) {
    e.preventDefault();

    if ($(this).siblings("ul").hasClass('active_iner')) {
        $(".menu_top li ul").removeClass("active_iner");
    }
    else {
        $(".menu_top li ul").removeClass("active_iner");
        $(this).siblings("ul").addClass('active_iner');
    }
});
//Плавный скрол
    $('.menu_top a').mPageScroll2id({
        scrollSpeed: 900,
        scrollEasing: 'swing',
        scrollingEasing: 'swing',
        offset: 82
    });
    $('.menu_footer a').mPageScroll2id({
        scrollSpeed: 900,
        scrollEasing: 'swing',
        scrollingEasing: 'swing',
        offset: 82
    });
    $('a.go_a').mPageScroll2id({
        scrollSpeed: 900,
        scrollEasing: 'swing',
        scrollingEasing: 'swing',
        offset: 82
    });
//Для мобильного 
    var width_el = Number(document.documentElement.clientWidth);
    if(width_el <= 991){
        $('.menu_top a').mPageScroll2id({
            scrollSpeed: 900,
            scrollEasing: 'swing',
            scrollingEasing: 'swing',
            offset: 62
        });

        $('.menu_footer a').mPageScroll2id({
            scrollSpeed: 900,
            scrollEasing: 'swing',
            scrollingEasing: 'swing',
            offset: 62
        });
        $('a.go_a').mPageScroll2id({
            scrollSpeed: 900,
            scrollEasing: 'swing',
            scrollingEasing: 'swing',
            offset: 62
        });
    } else {

        //Parallax
        $(".top-image-parallax").fallings({
            velocity: .2,
            initialPosition: -155,
            bgParallax: true,
            bgPercent: '0%'
        });
        $(".image-parallax").fallings({
            velocity: .3,
            initialPosition: -600,
            bgParallax: true,
            bgPercent: '0%'
        });
        $(".image-parallax-2").fallings({
            velocity: .3,
            initialPosition: -3200,
            bgParallax: true,
            bgPercent: '0%'
        });
        $(".image-parallax-3").fallings({
            velocity: .3,
            initialPosition: -4100,
            bgParallax: true,
            bgPercent: '0%'
        });
    }


//Tabs
$(".tab_js." + $('.tabs_js.active').attr('data-tab')).fadeIn(200);
$('.tabs_js').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
        return;
    }

    var class_tab = $(this).attr('data-tab');

    $(".tabs_js").removeClass('active');
    $(".tab_js").css('display','none');

    $(".tab_js." + class_tab).fadeIn(400);
    $(this).addClass('active');
});

//no-click
$('.no-click').on('click', function (e) {
    e.preventDefault();
});

//cards
$(".card_tile_js." + $('.click_tile_js.active').attr('data-card')).fadeIn(200);
$('.click_tile_js').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
        return;
    }

    var class_tab = $(this).attr('data-card');

    $(".click_tile_js").removeClass('active');
    $(".card_tile_js").css('display','none');

    $(".card_tile_js." + class_tab).fadeIn(400);
    $(this).addClass('active');
});


//анимация на моб    
if(width_el <= 991){
    $('.advantage-block').removeClass('mov mov_next_fadeInLeft');
    $('.advantage-block').removeClass('mov mov_next_fadeInRight');
}

//Меню топ : скрол анимация
    var h = $(window).height();
 
    if ( ($(this).scrollTop()) > $(".menu_div").offset().top ) {
        $(".menu_div").addClass('scroll');
        $(".menu_div_off").css('display', 'block');
    } 

    function go_animated_scroll() {

        $('.mov_next_fadeInUp').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+h) {
                $(this).addClass('animated fadeInUp');
            } else {
                $(this).removeClass('animated fadeInUp');
            }
        });


        $('.mov_next_fadeInLeft').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+h) {
                $(this).addClass('animated fadeInLeft');
            } else {
                $(this).removeClass('animated fadeInLeft');
            }
        });

        $('.mov_next_fadeInRight').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+h) {
                $(this).addClass('animated fadeInRight');
            } else {
                $(this).removeClass('animated fadeInRight');
            }
        });

        $('.mov_next_fadeInLeft_p').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+h) {
                $.each($(this).find('p'), function(i, el) {
                    setTimeout(function() {
                        $(el).addClass('animated fadeInLeft')
                    }, 0 + (i * 200));

                  });
            } else {
                $(this).find('p').removeClass('animated fadeInLeft');
            }
        });
        $('.mov_next_fadeInRight_p').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+h) {
                $.each($(this).find('p'), function(i, el) {
                    setTimeout(function() {
                        $(el).addClass('animated fadeInRight')
                    }, 0 + (i * 200));

                  });
            } else {
                $(this).find('p').removeClass('animated fadeInRight');
            }
        });


        $('.mov_next_fadeIn').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+h) {
                $(this).addClass('animated fadeIn');
            } else {
                $(this).removeClass('animated fadeIn');
            }
        });

        $('.mov_next_fadeIn_timeOut').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+h) {
                var el = $(this);
                setTimeout(function() {
                        $(el).addClass('animated fadeIn');
                    }, 500);
            } else {
                $(this).removeClass('animated fadeIn');
            }
        });


        $('.mov_slideInLeft').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+h) {
                $.each($(this).find('.block_4_iner'), function(i, el) {
                    setTimeout(function() {
                        $(el).addClass('animated fadeInLeft');
                    }, 0 + (i * 150));

                  });
            } else {
                $(this).find('.block_4_iner').removeClass('animated fadeInLeft');
            }
        });
    }

    if(width_el > 991){
        go_animated_scroll();
    }

    $(window).scroll(function(){
        if ( ($(this).scrollTop()) > $(".menu_div").offset().top  ) {
            $(".menu_div").addClass('scroll');
            $(".menu_div_off").css('display', 'block');
        } 
        if ( $(this).scrollTop() < $(".menu_div_off").offset().top  ) {
            $(".menu_div").removeClass('scroll');
            $(".menu_div_off").css('display', 'none');
        }

        if(width_el > 991){
            go_animated_scroll();
        }
    });
    
	

//Формы  
    
$("#sps").on("click","div", function () {
        $('#sps').modal('toggle');
 });


$("#manedj_form").submit(function() {

    var th = $(this);
    $.ajax({
        type: "POST",
        url: "zakaz.php", 
        data: th.serialize()
    }).done(function() {
        
        th.trigger("reset");
        $('#exampleModal_1').modal('toggle');
        setTimeout(function() {
            $('#sps').modal('toggle');
        },250);
    });
    return false;
});

$(".header_form").submit(function() {

    var th = $(this);
    $.ajax({
        type: "POST",
        url: "zakaz.php", 
        data: th.serialize()
    }).done(function() {
        
        th.trigger("reset");
        setTimeout(function() {
            $('#sps').modal('toggle');
        },250);
    });
    return false;
});

$("#index_form").submit(function() {

    var th = $(this);
    $.ajax({
        type: "POST",
        url: "zakaz.php", 
        data: th.serialize()
    }).done(function() {
        
        th.trigger("reset");
        setTimeout(function() {
            $('#sps').modal('toggle');
        },250);
    });
    return false;
});


$("#perezvon_form").submit(function() {

    var th = $(this);
    $.ajax({
        type: "POST",
        url: "zakaz.php", 
        data: th.serialize()
    }).done(function() {
        
        th.trigger("reset");
        $('#exampleModal_2').modal('toggle');
        setTimeout(function() {
            $('#sps').modal('toggle');
        },250);
    });
    return false;
});

$("#katalog_form").submit(function() {

    var th = $(this);
    $.ajax({
        type: "POST",
        url: "zakaz.php", 
        data: th.serialize()
    }).done(function() {
        
        th.trigger("reset");
        $('#exampleModal_3').modal('toggle');
        setTimeout(function() {
            $('#sps').modal('toggle');
        },250);
    });
    return false;
});

});