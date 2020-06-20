(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        // modal video
        $(".video_play_btn").modalVideo();

        $(".video_play_btn").on('click', function () {
            return false;
        });

        // client testimonial
        $('.client_carousel_area').owlCarousel({
            items: 2,
            loop: true,
            nav: false,
            margin: 30,
            dots: false,
            autoplay: false,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 2,
                },
                993: {
                    items: 1,
                },
                1200: {
                    items: 2,
                }
            }
        });

        // mobile menu
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "992"
        });

        // header sticky

        $(window).on('scroll', function(){
            var scroll = $(window).scrollTop();
            if(scroll < 245) {
                $("#header_sticky").removeClass("sticky_bar");
            }else{
                $("#header_sticky").addClass("sticky_bar");
            }
        });

        // One Page Nav
        if ($(".header_area").length) {
            var top_offset = $('header_area').height() + 82;
            $('.main_menu nav ul').onePageNav({
                currentClass: 'active',
                scrollOffset: top_offset,
            });
        }

        // sticky nav
        if($("#firefly").length) {
            $.firefly({
                color: '#000',
                minPixel: 3,
                maxPixel: 5,
                total: 30,
                on: '#firefly'
            });
        }

    });

    jQuery(window).load(function () {
        // preloader
        $(".spinner").fadeOut();
        $(".body_preloader_wrap").delay(450).fadeOut('slow');
    });

}(jQuery));	