$(window).on('load', function() {

    $(".loading-overlay img").fadeOut(500,
        function() {
            $(this).parent().fadeOut(500);
            $("body").removeClass("overflow")
        });
})


var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
});
wow.init();


$(document).ready(function() {

    // This is to Open Language menu in large Screens
    $(".page-language .lang .lang-name").click(function() {
        $(".lang-back").fadeIn(300);
    });

    $(".page-language .lang .lang-name").click(function() {
        $(".lang .lang-list").slideDown(300);
    });

    $(".lang-back").click(function() {
        $(".lang-back").fadeOut(300);
    });

    $(".lang-back").click(function() {
        $(".lang .lang-list").slideUp(300);
    });


    //This is to Open Search Box in small screens

    if ($(window).width() <= 991) {
        $(".search-box").unwrap();
    }

    $(".user-terms .search").click(function() {
        $("body").addClass("overflow");
        $(".overlay-box2").slideDown(300);
    });

    $(".user-terms .search").click(function() {
        $("body").addClass("overflow");
        $(".user-terms .search-icon").removeClass("open-search")
        $(".user-terms .search-icon").addClass("close-search")
        $(".close-search-btn").show(300)
        $(".search-box").slideDown(300);
    });

    $(".close-search-btn,.overlay-box2").click(function() {
        $("body").removeClass("overflow");
        $(".overlay-box2").slideUp(300);
    });

    $(".close-search-btn,.overlay-box2").click(function() {
        $("body").removeClass("overflow");
        $(".user-terms .search-icon").addClass("open-search")
        $(".user-terms .search-icon").removeClass("close-search")
        $(".close-search-btn").hide(300)
        $(".search-box").slideUp(300);
    });


    //This is to Open Side Menu in Small Screens
    $(".user-terms .menu").click(function() {
        $("body").addClass("overflow")
        $(".nav").addClass("menu-open");
        $(".overlay-box").fadeIn(500);
    });

    $(".close,.overlay-box").click(function() {
        $("body").removeClass("overflow")
        $(".nav").removeClass("menu-open");
        $(".overlay-box").fadeOut(500);
    });

    //This is to Open user-config, language & Products Menus in Small Screens Side Menu

    $(".shabi").click(function() {
        $(".shabi .nav-link").toggleClass("rotate");
        $(".shabi-list").slideToggle(300);
    });

    $(".nav .lang-name").click(function() {
        $(".nav .lang-name").toggleClass("rotate");
        $(".nav .lang-list").slideToggle(300);
    });
    $(".nav .my-account").click(function() {
        $(".nav .my-account").toggleClass("rotate");
        $(".nav .config-box").slideToggle(300);
    });

    // This is to Open Configuration menu  
    $(".user-terms .config").click(function() {
        $(".overlay-box3").fadeIn(300);
    });

    $(".user-terms .config").click(function() {
        $(".terms-content .user-config").slideDown(300);
    });

    $(".overlay-box3").click(function() {
        $(".overlay-box3").fadeOut(300);
    });

    $(".overlay-box3").click(function() {
        $(".terms-content .user-config").slideUp(300);
    });


    $('.main-slider .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 20,
        rtl: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            768: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            992: {
                items: 1,
                nav: true,
                dots: true,
                loop: true
            },
            1200: {
                items: 1,
                nav: true,
                dots: true,
                loop: true
            }
        }
    })


    $('.bestsellers .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 15,
        rtl: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
                loop: true
            },
            480: {
                items: 2,
                dots: true,
                nav: false,
                loop: true
            },
            720: {
                items: 3,
                dots: true,
                nav: false,
                loop: true
            },
            992: {
                items: 4,
                nav: false,
                dots: true,
                loop: true
            },
            1200: {
                items: 5,
                nav: true,
                dots: true,
                loop: true
            }
        }
    });


    $('.offers .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 15,
        rtl: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
                loop: true
            },
            480: {
                items: 2,
                dots: true,
                nav: false,
                loop: true
            },
            720: {
                items: 3,
                dots: true,
                nav: false,
                loop: true
            },
            992: {
                items: 4,
                nav: false,
                dots: true,
                loop: true
            },
            1200: {
                items: 5,
                nav: true,
                dots: true,
                loop: true
            }
        }
    });

    if ($(window).width() <= 991) {
        $('.collapse[data-parent="#parent"]').on('show.bs.collapse', function() {
            $('.collapse[data-parent="#parent"]').not(this).collapse('hide');
        });
    } else {
        $(".slide-list").addClass("in")
    }


    //This is To rotate after arrows in footer ----------------------------------------

    $(".first .footer-heading").click(function() {
        var x = $(".first .slide-list")
        if (x.hasClass("collapse")) {
            $(".first .footer-heading").addClass("rotate")
            $(".middle .footer-heading").removeClass("rotate")
            $(".last .footer-heading").removeClass("rotate")
        }
    });
    $(".first .footer-heading").click(function() {
        var x = $(".first .slide-list")
        if (x.hasClass("in")) {
            $(".first .footer-heading").removeClass("rotate")
        }
    });


    $(".middle .footer-heading").click(function() {
        var x = $(".middle .slide-list")
        if (x.hasClass("collapse")) {
            $(".middle .footer-heading").addClass("rotate")
            $(".first .footer-heading").removeClass("rotate")
            $(".last .footer-heading").removeClass("rotate")
        }
    });
    $(".middle .footer-heading").click(function() {
        var x = $(".middle .slide-list")
        if (x.hasClass("in")) {
            $(".middle .footer-heading").removeClass("rotate")
        }
    });

    $(".last .footer-heading").click(function() {
        var x = $(".last .slide-list")
        if (x.hasClass("collapse")) {
            $(".last .footer-heading").addClass("rotate")
            $(".first .footer-heading").removeClass("rotate")
            $(".middle .footer-heading").removeClass("rotate")
        }
    });
    $(".last .footer-heading").click(function() {
        var x = $(".last .slide-list")
        if (x.hasClass("in")) {
            $(".last .footer-heading").removeClass("rotate")
        }
    });

});