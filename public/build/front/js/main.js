/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/front/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/front/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/front/js/main.js":
/*!*********************************!*\
  !*** ./assets/front/js/main.js ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var lastScroll = 0;

//check for browser os
var isMobile = false;
var isiPhoneiPad = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isMobile = true;
}

if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    isiPhoneiPad = true;
}

function SetMegamenuPosition() {
    if ($(window).width() > 991) {
        setTimeout(function () {
            var totalHeight = $('nav.navbar').outerHeight();
            $('.mega-menu').css({ top: totalHeight });
            if ($('.navbar-brand-top').length === 0) $('.dropdown.simple-dropdown > .dropdown-menu').css({ top: totalHeight });
        }, 200);
    } else {
        $('.mega-menu').css('top', '');
        $('.dropdown.simple-dropdown > .dropdown-menu').css('top', '');
    }
}

function pad(d) {
    return d < 10 ? '0' + d.toString() : d.toString();
}

function isIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
        {
            return true;
        } else // If another browser, return 0
        {
            return false;
        }
}

//page title space
function setPageTitleSpace() {
    if ($('.navbar').hasClass('navbar-top') || $('nav').hasClass('navbar-fixed-top')) {
        if ($('.top-space').length > 0) {
            var top_space_height = $('.navbar').outerHeight();
            if ($('.top-header-area').length > 0) {
                top_space_height = top_space_height + $('.top-header-area').outerHeight();
            }
            $('.top-space').css('margin-top', top_space_height + 'px');
        }
    }
}

//swiper button position in auto height slider
function setButtonPosition() {
    if ($(window).width() > 767 && $(".swiper-auto-height-container").length > 0) {
        var leftPosition = parseInt($('.swiper-auto-height-container .swiper-slide').css('padding-left'));
        var bottomPosition = parseInt($('.swiper-auto-height-container .swiper-slide').css('padding-bottom'));
        var bannerWidth = parseInt($('.swiper-auto-height-container .slide-banner').outerWidth());
        $('.navigation-area').css({ 'left': bannerWidth + leftPosition + 'px', 'bottom': bottomPosition + 'px' });
    } else if ($(".swiper-auto-height-container").length > 0) {
        $('.navigation-area').css({ 'left': '', 'bottom': '' });
    }
}

$(window).on("scroll", init_scroll_navigate);
function init_scroll_navigate() {
    /*==============================================================
     One Page Main JS - START CODE
     =============================================================*/
    var menu_links = $(".navbar-nav li a");
    var scrollPos = $(document).scrollTop();
    menu_links.each(function () {
        var currLink = $(this);
        var split = currLink.attr("href").split("#");
        var refElement = $('#' + split[1]);
        if (split[1] != null && currLink.attr("href").includes("#") && refElement.length > 0) {
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                menu_links.removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        }
    });

    /*==============================================================
     One Page Main JS - END CODE
     =============================================================*/

    /*==============================================================*/
    //background color slider Start
    /*==============================================================*/
    var $window = $(window);

    var $body = $('.bg-background-fade');
    var $panel = $('.color-code');
    var scroll = $window.scrollTop() + $window.height() / 2;
    $panel.each(function () {
        var $this = $(this);
        if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            $body.removeClass(function (index, css) {
                return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
            });
            $body.addClass('color-' + $(this).data('color'));
        }
    });
    /*==============================================================*/
    //background color slider End
    /*==============================================================*/

    /* ===================================
     sticky nav Start
     ====================================== */
    var headerHeight = $('nav').outerHeight();
    if (!$('header').hasClass('no-sticky')) {
        if ($(document).scrollTop() >= headerHeight) {
            $('header').addClass('sticky');
        } else if ($(document).scrollTop() <= headerHeight) {
            $('header').removeClass('sticky');
            setTimeout(function () {
                setPageTitleSpace();
            }, 500);
        }
        SetMegamenuPosition();
    }

    /* ===================================
     header appear on scroll up
     ====================================== */
    var st = $(this).scrollTop();
    if (st > lastScroll) {
        $('.sticky').removeClass('header-appear');
        //        $('.dropdown.on').removeClass('on').removeClass('open').find('.dropdown-menu').fadeOut(100);
    } else $('.sticky').addClass('header-appear');
    lastScroll = st;
    if (lastScroll <= headerHeight) $('header').removeClass('header-appear');
    /* ===================================
     sticky nav End
     ====================================== */
}

/*==============================================================
 parallax text - START CODE
 ==============================================================*/
function parallax_text() {
    var window_width = $(window).width();
    if (window_width > 1024) {
        if ($('.swiper-auto-slide .swiper-slide').length !== 0) {
            $(document).on("mousemove", ".swiper-auto-slide .swiper-slide", function (e) {
                var positionX = e.clientX;
                var positionY = e.clientY;
                positionX = Math.round(positionX / 10) - 80;
                positionY = Math.round(positionY / 10) - 40;
                $(this).find('.parallax-text').css({ 'transform': 'translate(' + positionX + 'px,' + positionY + 'px)', 'transition-duration': '0s' });
            });

            $(document).on("mouseout", ".swiper-auto-slide .swiper-slide", function (e) {
                $('.parallax-text').css({ 'transform': 'translate(0,0)', 'transition-duration': '0.5s' });
            });
        }
    }
}
/*==============================================================*/
//parallax text - END CODE
/*==============================================================*/

/*==============================================================*/
//Search - START CODE
/*==============================================================*/
function ScrollStop() {
    return false;
}
function ScrollStart() {
    return true;
}
function validationSearchForm() {
    var error = true;
    $('#search-header input[type=text]').each(function (index) {
        if (index === 0) {
            if ($(this).val() === null || $(this).val() === "") {
                $("#search-header").find('input:eq(' + index + ')').css({ "border": "none", "border-bottom": "2px solid red" });
                error = false;
            } else {
                $("#search-header").find('input:eq(' + index + ')').css({ "border": "none", "border-bottom": "2px solid #000" });
            }
        }
    });
    return error;
}
/*==============================================================
 Search - END CODE
 ==============================================================*/

/*==============================================================
 equalize - START CODE
 ==============================================================*/
function equalizeHeight() {
    $(document).imagesLoaded(function () {
        if ($(window).width() < 768) {
            $('.equalize').equalize({ equalize: 'outerHeight', reset: true });
            $('.equalize.md-equalize-auto').children().css("height", "");
            $('.equalize.sm-equalize-auto').children().css("height", "");
            $('.equalize.xs-equalize-auto').children().css("height", "");
            return false;
        } else if ($(window).width() < 992) {
            $('.equalize').equalize({ equalize: 'outerHeight', reset: true });
            $('.equalize.md-equalize-auto').children().css("height", "");
            $('.equalize.sm-equalize-auto').children().css("height", "");
            return false;
        } else if ($(window).width() < 1199) {
            $('.equalize').equalize({ equalize: 'outerHeight', reset: true });
            $('.equalize.md-equalize-auto').children().css("height", "");
            return false;
        } else {
            $('.equalize').equalize({ equalize: 'outerHeight', reset: true });
        }
    });
}
/*==============================================================
 equalize - END CODE
 ==============================================================*/

/*==============================================================
 dynamic font size START CODE
 ==============================================================*/
function feature_dynamic_font_line_height() {
    if ($('.dynamic-font-size').length > 0) {
        var site_width = 1100;
        var window_width = $(window).width();
        if (window_width < site_width) {
            var window_site_width_ratio = window_width / site_width;
            $('.dynamic-font-size').each(function () {
                var font_size = $(this).attr('data-fontsize');
                var line_height = $(this).attr('data-lineheight');
                if (font_size != '' && font_size != undefined) {
                    var new_font_size = Math.round(font_size * window_site_width_ratio * 1000) / 1000;
                    $(this).css('font-size', new_font_size + 'px');
                }
                if (line_height !== '' && line_height !== undefined) {
                    var new_line_height = Math.round(line_height * window_site_width_ratio * 1000) / 1000;
                    $(this).css('line-height', new_line_height + 'px');
                }
            });
        } else {
            $('.dynamic-font-size').each(function () {
                var font_size = $(this).attr('data-fontsize');
                var line_height = $(this).attr('data-lineheight');
                if (font_size !== '' && font_size !== undefined) {
                    $(this).css('font-size', font_size + 'px');
                }
                if (line_height !== '' && line_height !== undefined) {
                    $(this).css('line-height', line_height + 'px');
                }
            });
        }
    }
}
/*==============================================================
 dynamic font size END CODE
 ==============================================================*/

/*==============================================================
 set parallax
 ==============================================================*/
function stellarParallax() {
    if ($(window).width() > 1024) {
        $.stellar();
    } else {
        $.stellar('destroy');
        $('.parallax').css('background-position', '');
    }
}

/*==============================================================
 full screen START CODE
 ==============================================================*/
function fullScreenHeight() {
    var element = $(".full-screen");
    var $minheight = $(window).height();
    element.parents('section').imagesLoaded(function () {
        if ($(".top-space .full-screen").length > 0) {
            var $headerheight = $("header nav.navbar").outerHeight();
            $(".top-space .full-screen").css('min-height', $minheight - $headerheight);
        } else {
            element.css('min-height', $minheight);
        }
    });

    var minwidth = $(window).width();
    $(".full-screen-width").css('min-width', minwidth);

    var sidebarNavHeight = $('.sidebar-nav-style-1').height() - $('.logo-holder').parent().height() - $('.footer-holder').parent().height() - 10;
    $(".sidebar-nav-style-1 .nav").css('height', sidebarNavHeight);
    var style2NavHeight = parseInt($('.sidebar-part2').height() - parseInt($('.sidebar-part2 .sidebar-middle').css('padding-top')) - parseInt($('.sidebar-part2 .sidebar-middle').css('padding-bottom')) - parseInt($(".sidebar-part2 .sidebar-middle .sidebar-middle-menu .nav").css('margin-bottom')));
    $(".sidebar-part2 .sidebar-middle .sidebar-middle-menu .nav").css('height', style2NavHeight);
}
/*==============================================================
 full screen END CODE
 ==============================================================*/
function SetResizeContent() {
    //    all function call
    feature_dynamic_font_line_height();
    SetMegamenuPosition();
    setPageTitleSpace();
    setButtonPosition();
    parallax_text();
    stellarParallax();
    fullScreenHeight();
    equalizeHeight();
}

/* ===================================
 START RESIZE
 ====================================== */
$(window).resize(function (event) {
    // Bootsnav menu work with eualize height
    $("nav.navbar.bootsnav ul.nav").each(function () {
        $("li.dropdown", this).on("mouseenter", function (e) {
            if ($(window).width() > 991) {
                $(this).find('.equalize').equalize({ equalize: 'outerHeight', reset: true });
                return false;
            }
        });
    });

    setTimeout(function () {
        SetResizeContent();
    }, 500);

    event.preventDefault();
});
/* ===================================
 END RESIZE
 ====================================== */

/* ===================================
 START READY
 ====================================== */
$(document).ready(function () {
    // Bootsnav menu work with eualize height
    $("nav.navbar.bootsnav ul.nav").each(function () {
        $("li.dropdown", this).on("mouseenter", function () {
            if ($(window).width() > 991) {
                $(this).find('.equalize').equalize({ equalize: 'outerHeight', reset: true });
                return false;
            }
        });
    });
    // Bootsnav tab work with eualize height
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href");
        if ($(window).width() > 991) {
            $(target).find('.equalize').equalize({ equalize: 'outerHeight', reset: true });
            return false;
        }
    });

    // Active class to current menu for only html
    var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    var $hash = window.location.hash.substring(1);

    if ($hash) {
        $hash = '#' + $hash;
        pgurl = pgurl.replace($hash, "");
    } else {
        pgurl = pgurl.replace("#", "");
    }

    $(".nav li a").each(function () {
        if ($(this).attr("href") == pgurl || $(this).attr("href") == pgurl + '.html') {
            $(this).parent().addClass("active");
            $(this).parents('li.dropdown').addClass("active");
        }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) $('.scroll-top-arrow').fadeIn('slow');else $('.scroll-top-arrow').fadeOut('slow');
    });
    //Click event to scroll to top
    $(document).on('click', '.scroll-top-arrow', function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    /* ===================================
     swiper slider
     ====================================== */
    var swiperFull = new Swiper('.swiper-full-screen', {
        loop: true,
        slidesPerView: 1,
        preventClicks: false,
        allowTouchMove: true,
        pagination: {
            el: '.swiper-full-screen-pagination',
            clickable: true
        },
        autoplay: {
            delay: 5000
        },
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        on: {
            resize: function resize() {
                swiperFull.update();
            }
        }
    });

    var swiperAutoFade = new Swiper('.swiper-auto-fade', {
        allowTouchMove: true,
        loop: true,
        slidesPerView: 1,
        preventClicks: false,
        effect: 'fade',
        autoplay: {
            delay: 5000
        },
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-auto-pagination',
            clickable: true
        },
        on: {
            resize: function resize() {
                swiperAutoFade.update();
            }
        }
    });

    var swiperSecond = new Swiper('.swiper-slider-second', {
        allowTouchMove: true,
        slidesPerView: 1,
        preventClicks: false,
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination-second',
            clickable: true
        },
        on: {
            resize: function resize() {
                swiperSecond.update();
            }
        }
    });

    var swiperThird = new Swiper('.swiper-slider-third', {
        allowTouchMove: true,
        slidesPerView: 1,
        preventClicks: false,
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination-third',
            clickable: true
        },
        on: {
            resize: function resize() {
                swiperThird.update();
            }
        }
    });

    var swiperNumber = new Swiper('.swiper-number-pagination', {
        allowTouchMove: true,
        preventClicks: false,
        autoplay: {
            delay: 4000,
            disableOnInteraction: true
        },
        pagination: {
            el: '.swiper-number',
            clickable: true,
            renderBullet: function renderBullet(index, className) {
                return '<span class="' + className + '">' + pad(index + 1) + '</span>';
            }
        },
        on: {
            resize: function resize() {
                swiperNumber.update();
            }
        }
    });

    var swiperVerticalPagination = new Swiper('.swiper-vertical-pagination', {
        allowTouchMove: true,
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 0,
        preventClicks: false,
        mousewheel: {
            mousewheel: true,
            sensitivity: 1,
            releaseOnEdges: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination-vertical',
            clickable: true
        },
        on: {
            resize: function resize() {
                swiperVerticalPagination.update();
            }
        }
    });

    var swiperClients = new Swiper('.swiper-slider-clients', {
        allowTouchMove: true,
        slidesPerView: 4,
        paginationClickable: true,
        preventClicks: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true
        },
        pagination: {
            el: null
        },
        breakpoints: {
            1199: {
                slidesPerView: 3
            },
            991: {
                slidesPerView: 2
            },
            767: {
                slidesPerView: 1
            }
        },
        on: {
            resize: function resize() {
                swiperClients.update();
            }
        }
    });

    var swiperClients2 = new Swiper('.swiper-slider-clients-second', {
        allowTouchMove: true,
        slidesPerView: 4,
        paginationClickable: true,
        preventClicks: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true
        },
        pagination: {
            el: null
        },
        breakpoints: {
            1199: {
                slidesPerView: 3
            },
            991: {
                slidesPerView: 2
            },
            767: {
                slidesPerView: 1
            }
        },
        on: {
            resize: function resize() {
                swiperClients2.update();
            }
        }
    });

    var swiperThreeSlides = new Swiper('.swiper-three-slides', {
        allowTouchMove: true,
        slidesPerView: 3,
        preventClicks: false,
        pagination: {
            el: '.swiper-pagination-three-slides',
            clickable: true
        },
        autoplay: {
            delay: 3000
        },
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.swiper-three-slide-next',
            prevEl: '.swiper-three-slide-prev'
        },
        breakpoints: {
            991: {
                slidesPerView: 2
            },
            767: {
                slidesPerView: 1
            }
        },
        on: {
            resize: function resize() {
                swiperThreeSlides.update();
            }
        }
    });

    var swiperFourSlides = new Swiper('.swiper-four-slides', {
        allowTouchMove: true,
        slidesPerView: 4,
        preventClicks: false,
        pagination: {
            el: '.swiper-pagination-four-slides',
            clickable: true
        },
        autoplay: {
            delay: 3000
        },
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            1199: {
                slidesPerView: 3
            },
            991: {
                slidesPerView: 2
            },
            767: {
                slidesPerView: 1
            }
        },
        on: {
            resize: function resize() {
                swiperFourSlides.update();
            }
        }
    });

    var swiperDemoHeaderStyle = new Swiper('.swiper-demo-header-style', {
        allowTouchMove: true,
        loop: true,
        slidesPerView: 4,
        preventClicks: true,
        slidesPerGroup: 4,
        pagination: {
            el: '.swiper-pagination-demo-header-style',
            clickable: true
        },
        autoplay: {
            delay: 3000
        },
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            1199: {
                slidesPerGroup: 2,
                slidesPerView: 2
            },
            767: {
                slidesPerGroup: 1,
                slidesPerView: 1
            }
        },
        on: {
            resize: function resize() {
                swiperDemoHeaderStyle.update();
            }
        }
    });

    var $swiperAutoSlideIndex = 0;
    var swiperAutoSlide = new Swiper('.swiper-auto-slide', {
        allowTouchMove: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 80,
        preventClicks: false,
        observer: true,
        speed: 1000,
        pagination: {
            el: null
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            hide: false,
            snapOnRelease: true
        },
        autoplay: {
            delay: 3000
        },
        mousewheel: {
            invert: false
        },
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.swiper-next-style2',
            prevEl: '.swiper-prev-style2'
        },
        breakpoints: {
            1199: {
                spaceBetween: 60
            },
            960: {
                spaceBetween: 30
            },
            767: {
                spaceBetween: 15
            }
        },
        on: {
            resize: function resize() {
                swiperAutoSlide.update();
            }
        }
    });

    if ($(window).width() > 767) {
        var swiperBottomScrollbarFull = new Swiper('.swiper-bottom-scrollbar-full', {
            allowTouchMove: true,
            slidesPerView: 'auto',
            grabCursor: true,
            preventClicks: false,
            spaceBetween: 30,
            keyboardControl: true,
            speed: 1000,
            pagination: {
                el: null
            },
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
                hide: false,
                snapOnRelease: true
            },
            mousewheel: {
                enable: true
            },
            keyboard: {
                enabled: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
    }

    var swiperAutoHieght = new Swiper('.swiper-auto-height-container', {
        allowTouchMove: true,
        effect: 'fade',
        loop: true,
        autoHeight: true,
        pagination: {
            el: '.swiper-auto-height-pagination',
            clickable: true
        },
        autoplay: {
            delay: 3000
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        on: {
            resize: function resize() {
                swiperAutoHieght.update();
            }
        }
    });

    var swiperMultyRow = new Swiper('.swiper-multy-row-container', {
        allowTouchMove: true,
        slidesPerView: 4,
        spaceBetween: 15,
        pagination: {
            el: '.swiper-multy-row-pagination',
            clickable: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: true
        },
        navigation: {
            nextEl: '.swiper-portfolio-next',
            prevEl: '.swiper-portfolio-prev'
        },
        breakpoints: {
            991: {
                slidesPerView: 2
            },
            767: {
                slidesPerView: 1
            }
        },
        on: {
            resize: function resize() {
                swiperMultyRow.update();
            }
        }
    });

    var swiperBlog = new Swiper('.swiper-blog', {
        allowTouchMove: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 15,
        preventClicks: false,
        loop: true,
        loopedSlides: 3,
        pagination: {
            el: '.swiper-blog-pagination',
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        on: {
            resize: function resize() {
                swiperBlog.update();
            }
        }
    });

    var swiperPresentation = new Swiper('.swiper-presentation', {
        allowTouchMove: true,
        slidesPerView: 4,
        centeredSlides: true,
        spaceBetween: 30,
        preventClicks: true,
        loop: true,
        loopedSlides: 6,
        pagination: {
            el: '.swiper-presentation-pagination',
            clickable: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: true
        },
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            991: {
                spaceBetween: 15,
                slidesPerView: 2
            },
            767: {
                slidesPerView: 1
            }
        },
        on: {
            resize: function resize() {
                swiperPresentation.update();
            }
        }
    });

    var resizeId = void 0;

    $(window).resize(function () {
        if ($(".swiper-auto-slide").length > 0 && swiperAutoSlide) {
            $swiperAutoSlideIndex = swiperAutoSlide.activeIndex;
            swiperAutoSlide.detachEvents();
            swiperAutoSlide.destroy(true, false);
            swiperAutoSlide = undefined;
            $(".swiper-auto-slide .swiper-wrapper").css("transform", "").css("transition-duration", "");
            $(".swiper-auto-slide .swiper-slide").css("margin-right", "");

            setTimeout(function () {
                swiperAutoSlide = new Swiper('.swiper-auto-slide', {
                    allowTouchMove: true,
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    spaceBetween: 80,
                    preventClicks: false,
                    mousewheelControl: true,
                    observer: true,
                    speed: 1000,
                    pagination: {
                        el: null
                    },
                    scrollbar: {
                        el: '.swiper-scrollbar',
                        draggable: true,
                        hide: false,
                        snapOnRelease: true
                    },
                    autoplay: {
                        delay: 3000
                    },
                    keyboard: {
                        enabled: true
                    },
                    navigation: {
                        nextEl: '.swiper-next-style2',
                        prevEl: '.swiper-prev-style2'
                    },
                    breakpoints: {
                        1199: {
                            spaceBetween: 60
                        },
                        960: {
                            spaceBetween: 30
                        },
                        767: {
                            spaceBetween: 15
                        }
                    },
                    on: {
                        resize: function resize() {
                            swiperAutoSlide.update();
                        }
                    }
                });

                swiperAutoSlide.slideTo($swiperAutoSlideIndex, 1000, false);
            }, 1000);
        }

        if ($(".swiper-bottom-scrollbar-full").length > 0) {
            clearTimeout(resizeId);
            resizeId = setTimeout(doneResizing, 1000);
        }

        /* update all swiper on window resize */

        setTimeout(function () {
            if ($('.swiper-full-screen').length > 0 && swiperFull) {
                swiperFull.update();
            }

            if ($('.swiper-auto-fade').length > 0 && swiperAutoFade) {
                swiperAutoFade.update();
            }

            if ($('.swiper-slider-second').length > 0 && swiperSecond) {
                swiperSecond.update();
            }

            if ($('.swiper-slider-third').length > 0 && swiperThird) {
                swiperThird.update();
            }

            if ($('.swiper-number-pagination').length > 0 && swiperNumber) {
                swiperNumber.update();
            }

            if ($('.swiper-vertical-pagination').length > 0 && swiperVerticalPagination) {
                swiperVerticalPagination.update();
            }

            if ($('.swiper-slider-clients').length > 0 && swiperClients) {
                swiperClients.update();
            }

            if ($('.swiper-slider-clients-second').length > 0 && swiperClients2) {
                swiperClients2.update();
            }

            if ($('.swiper-three-slides').length > 0 && swiperThreeSlides) {
                swiperThreeSlides.update();
            }

            if ($('.swiper-four-slides').length > 0 && swiperFourSlides) {
                swiperFourSlides.update();
            }

            if ($('.swiper-demo-header-style').length > 0 && swiperDemoHeaderStyle) {
                swiperDemoHeaderStyle.update();
            }

            if ($('.swiper-auto-slide').length > 0 && swiperAutoSlide) {
                swiperAutoSlide.update();
            }

            if ($('.swiper-auto-height-container').length > 0 && swiperAutoHieght) {
                swiperAutoHieght.update();
            }

            if ($('.swiper-multy-row-container').length > 0 && swiperMultyRow) {
                swiperMultyRow.update();
            }

            if ($('.swiper-blog').length > 0 && swiperBlog) {
                swiperBlog.update();
            }

            if ($('.swiper-presentation').length > 0 && swiperPresentation) {
                swiperPresentation.update();
            }
        }, 500);
        if (isIE()) {
            setTimeout(function () {
                if ($('.swiper-full-screen').length > 0 && swiperFull) {
                    swiperFull.update();
                }

                if ($('.swiper-auto-fade').length > 0 && swiperAutoFade) {
                    swiperAutoFade.update();
                }

                if ($('.swiper-slider-second').length > 0 && swiperSecond) {
                    swiperSecond.update();
                }

                if ($('.swiper-slider-third').length > 0 && swiperThird) {
                    swiperThird.update();
                }

                if ($('.swiper-number-pagination').length > 0 && swiperNumber) {
                    swiperNumber.update();
                }

                if ($('.swiper-vertical-pagination').length > 0 && swiperVerticalPagination) {
                    swiperVerticalPagination.update();
                }

                if ($('.swiper-slider-clients').length > 0 && swiperClients) {
                    swiperClients.update();
                }

                if ($('.swiper-slider-clients-second').length > 0 && swiperClients2) {
                    swiperClients2.update();
                }

                if ($('.swiper-three-slides').length > 0 && swiperThreeSlides) {
                    swiperThreeSlides.update();
                }

                if ($('.swiper-four-slides').length > 0 && swiperFourSlides) {
                    swiperFourSlides.update();
                }

                if ($('.swiper-demo-header-style').length > 0 && swiperDemoHeaderStyle) {
                    swiperDemoHeaderStyle.update();
                }

                if ($('.swiper-auto-slide').length > 0 && swiperAutoSlide) {
                    swiperAutoSlide.update();
                }

                if ($('.swiper-auto-height-container').length > 0 && swiperAutoHieght) {
                    swiperAutoHieght.update();
                }

                if ($('.swiper-multy-row-container').length > 0 && swiperMultyRow) {
                    swiperMultyRow.update();
                }

                if ($('.swiper-blog').length > 0 && swiperBlog) {
                    swiperBlog.update();
                }

                if ($('.swiper-presentation').length > 0 && swiperPresentation) {
                    swiperPresentation.update();
                }
            }, 500);
        }
    });

    function doneResizing() {
        if (swiperBottomScrollbarFull) {
            swiperBottomScrollbarFull.detachEvents();
            swiperBottomScrollbarFull.destroy(true, true);
            swiperBottomScrollbarFull = undefined;
        }

        $(".swiper-bottom-scrollbar-full .swiper-wrapper").css("transform", "").css("transition-duration", "");
        $(".swiper-bottom-scrollbar-full .swiper-slide").css("margin-right", "");
        $('.swiper-bottom-scrollbar-full .swiper-wrapper').removeAttr('style');
        $('.swiper-bottom-scrollbar-full .swiper-slide').removeAttr('style');

        if ($(window).width() > 767) {
            setTimeout(function () {
                swiperBottomScrollbarFull = new Swiper('.swiper-bottom-scrollbar-full', {
                    allowTouchMove: true,
                    slidesPerView: 'auto',
                    grabCursor: true,
                    preventClicks: false,
                    spaceBetween: 30,
                    keyboardControl: true,
                    speed: 1000,
                    pagination: {
                        el: null
                    },
                    scrollbar: {
                        el: '.swiper-scrollbar',
                        draggable: true,
                        hide: false,
                        snapOnRelease: true
                    },
                    mousewheel: {
                        enable: true
                    },
                    keyboard: {
                        enabled: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                });
            }, 500);
        }
    }

    /*==============================================================
     smooth scroll
     ==============================================================*/

    var scrollAnimationTime = 1200;

    var scrollAnimation = 'easeInOutExpo';
    $(document).on('click.smoothscroll', 'a.scrollto', function (event) {
        event.preventDefault();
        var target = this.hash;
        if ($(target).length != 0) {
            $('html, body').stop().animate({
                'scrollTop': $(target).offset().top
            }, scrollAnimationTime, scrollAnimation, function () {
                window.location.hash = target;
            });
        }
    });

    /*==============================================================
     humburger menu one page navigation
     ==============================================================*/

    if ($('.full-width-pull-menu').length > 0) {
        $(document).on('click', '.full-width-pull-menu .inner-link', function (e) {
            //$('body').removeClass('overflow-hidden position-fixed');
            $(".full-width-pull-menu .close-button-menu").trigger("click");
            var _this = $(this);
            setTimeout(function () {
                var target = _this.attr("href");
                if ($(target).length > 0) {
                    $('html, body').stop().animate({
                        'scrollTop': $(target).offset().top
                    });
                }
            }, 500);
        });
    }

    // Inner links
    if ($('.navbar-top').length > 0 || $('.navbar-scroll-top').length > 0 || $('.nav-top-scroll').length > 0) {
        $('.inner-link').smoothScroll({
            speed: 900,
            offset: 0
        });
    } else {
        $('.inner-link').smoothScroll({
            speed: 900,
            offset: -59
        });
    }

    $('.section-link').smoothScroll({
        speed: 900,
        offset: 1
    });

    /*==============================================================*/
    //PieChart For Onepage - START CODE
    /*==============================================================*/
    if ($('.chart1').length > 0) {
        $('.chart1').appear();
        $('.chart1').easyPieChart({
            barColor: '#929292',
            trackColor: '#d9d9d9',
            scaleColor: false,
            easing: 'easeOutBounce',
            scaleLength: 1,
            lineCap: 'round',
            lineWidth: 3, //12
            size: 150, //110
            animate: {
                duration: 2000,
                enabled: true
            },
            onStep: function onStep(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
        $(document.body).on('appear', '.chart1', function (e) {
            // this code is executed for each appeared element
            if (!$(this).hasClass('appear')) {
                $(this).addClass('appear');
                $(this).data('easyPieChart').update(0).update($(this).data('percent'));
            }
        });
    }

    if ($('.chart2').length > 0) {
        $('.chart2').appear();
        $('.chart2').easyPieChart({
            easing: 'easeOutCirc',
            barColor: '#ff214f',
            trackColor: '#c7c7c7',
            scaleColor: false,
            scaleLength: 1,
            lineCap: 'round',
            lineWidth: 2, //12
            size: 120, //110
            animate: {
                duration: 2000,
                enabled: true
            },
            onStep: function onStep(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
        $(document.body).on('appear', '.chart2', function (e) {
            // this code is executed for each appeared element
            if (!$(this).hasClass('appear')) {
                $(this).addClass('appear');
                $(this).data('easyPieChart').update(0).update($(this).data('percent'));
            }
        });
    }

    if ($('.chart3').length > 0) {
        $('.chart3').appear();
        $('.chart3').easyPieChart({
            easing: 'easeOutCirc',
            barColor: '#ff214f',
            trackColor: '',
            scaleColor: false,
            scaleLength: 1,
            lineCap: 'round',
            lineWidth: 3, //12
            size: 140, //110
            animate: {
                duration: 2000,
                enabled: true
            },
            onStep: function onStep(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
        $(document.body).on('appear', '.chart3', function (e) {
            // this code is executed for each appeared element
            if (!$(this).hasClass('appear')) {
                $(this).addClass('appear');
                $(this).data('easyPieChart').update(0).update($(this).data('percent'));
            }
        });
    }
    /*==============================================================*/
    //PieChart For Onepage - END CODE
    /*==============================================================*/

    /*==============================================================
     portfolio filter
     ==============================================================*/
    var $portfolio_filter = $('.portfolio-grid');
    $portfolio_filter.imagesLoaded(function () {
        $portfolio_filter.isotope({
            layoutMode: 'masonry',
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer'
            }
        });
        $portfolio_filter.isotope();
    });
    var $grid_selectors = $('.portfolio-filter > li > a');
    $grid_selectors.on('click', function () {
        $grid_selectors.parent().removeClass('active');
        $(this).parent().addClass('active');
        var selector = $(this).attr('data-filter');
        $portfolio_filter.find('.grid-item').removeClass('animated').css("visibility", ""); // avoid problem to filter after sorting
        $portfolio_filter.find('.grid-item').each(function () {
            /* remove perticular element from WOW array when you don't want animation on element after DOM lead */
            wow.removeBox(this);
            $(this).css("-webkit-animation", "none");
            $(this).css("-moz-animation", "none");
            $(this).css("-ms-animation", "none");
            $(this).css("animation", "none");
        });
        $portfolio_filter.isotope({ filter: selector });
        return false;
    });
    $(window).resize(function () {
        if (!isMobile && !isiPhoneiPad) {
            $portfolio_filter.imagesLoaded(function () {
                setTimeout(function () {
                    $portfolio_filter.find('.grid-item').removeClass('wow').removeClass('animated'); // avoid problem to filter after window resize
                    $portfolio_filter.isotope('layout');
                }, 300);
            });
        }
    });
    var $blog_filter = $('.blog-grid');
    $blog_filter.imagesLoaded(function () {
        $blog_filter.isotope({
            layoutMode: 'masonry',
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer'
            }
        });
    });
    $(window).resize(function () {
        setTimeout(function () {
            $blog_filter.find('.grid-item').removeClass('wow').removeClass('animated'); // avoid problem to filter after window resize
            $blog_filter.isotope('layout');
        }, 300);
    });

    /*==============================================================
     lightbox gallery
     ==============================================================*/
    $('.lightbox-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-fade',
        fixedContentPos: true,
        closeBtnInside: false,
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
    });
    /* for group gallery */
    var lightboxgallerygroups = {};
    $('.lightbox-group-gallery-item').each(function () {
        var id = $(this).attr('data-group');
        if (!lightboxgallerygroups[id]) {
            lightboxgallerygroups[id] = [];
        }
        lightboxgallerygroups[id].push(this);
    });
    $.each(lightboxgallerygroups, function () {
        $(this).magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            gallery: { enabled: true }
        });
    });

    $('.lightbox-portfolio').magnificPopup({
        delegate: '.gallery-link',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-fade',
        fixedContentPos: true,
        closeBtnInside: false,
        gallery: {
            enabled: true,
            navigateByImgClick: false,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
    });
    /*==============================================================
     single image lightbox - zoom animation
     ==============================================================*/
    $('.single-image-lightbox').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        fixedContentPos: true,
        closeBtnInside: false,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }
    });
    /*==============================================================
     zoom gallery
     ==============================================================*/
    $('.zoom-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        fixedContentPos: true,
        closeBtnInside: false,
        image: {
            verticalFit: true,
            titleSrc: function titleSrc(item) {
                return item.el.attr('title');
            }
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function opener(element) {
                return element.find('img');
            }
        }
    });
    /*==============================================================*/
    //Modal popup - START CODE
    /*==============================================================*/
    $('.modal-popup').magnificPopup({
        type: 'inline',
        preloader: false,
        // modal: true,
        blackbg: true,
        callbacks: {
            open: function open() {
                $('html').css('margin-right', 0);
            }
        }
    });
    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
    /*==============================================================*/
    //Modal popup - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //Modal popup - zoom animation - START CODE
    /*==============================================================*/
    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        blackbg: true,
        mainClass: 'my-mfp-zoom-in'
    });

    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        blackbg: true,
        mainClass: 'my-mfp-slide-bottom'
    });
    /*==============================================================*/
    //Modal popup - zoom animation - END CODE
    /*==============================================================*/

    /*==============================================================
     popup with form
     ==============================================================*/
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        closeBtnInside: false,
        fixedContentPos: true,
        focus: '#name',
        callbacks: {
            beforeOpen: function beforeOpen() {
                if ($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });
    /*==============================================================
     video magnific popup
     ==============================================================*/

    $('.popup-youtube, .popup-vimeo, .popup-googlemap').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true,
        closeBtnInside: false
    });
    /*==============================================================
     ajax magnific popup for onepage portfolio
     ==============================================================*/
    $('.ajax-popup').magnificPopup({
        type: 'ajax',
        alignTop: true,
        fixedContentPos: true,
        overflowY: 'scroll', // as we know that popup content is tall we set scroll overflow by default to avoid jump
        callbacks: {
            open: function open() {
                $('.navbar .collapse').removeClass('in');
                $('.navbar a.dropdown-toggle').addClass('collapsed');
            }
        }
    });

    /*==============================================================
     mega menu width
     ===============================================================*/
    $("ul.mega-menu-full").each(function (idx, elm) {
        var megaMenuWidth = 0;
        $(this).children('li').each(function (idx, elm) {
            var LIheight = 0;
            megaMenuWidth += $(this).outerWidth();
        });
        $(this).width(megaMenuWidth + 95);
        megaMenuWidth = 0;
    });
    /*==============================================================
     fit videos
     ==============================================================*/
    $(".fit-videos").fitVids();

    /*==============================================================
     form to email
     ==============================================================*/
    $("#success-subscribe-newsletter").hide();
    $("#success-subscribe-newsletter2").hide();
    $("#success-contact-form").hide();
    $("#success-project-contact-form").hide();
    $("#success-contact-form-2").hide();
    $("#success-contact-form-3").hide();
    $("#success-project-contact-form-4").hide();

    //Subscribe newsletter form
    $(document).on("click", '#button-subscribe-newsletter', function () {
        var error = ValidationsubscribenewsletterForm();
        if (error) {
            $.ajax({
                type: "POST",
                url: "email-templates/subscribe-newsletter.php",
                data: $("#subscribenewsletterform").serialize(),
                success: function success(result) {
                    // Un-comment below code to redirect user to thank you page.
                    //window.location.href="thank-you.html";

                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    });
                    $("#success-subscribe-newsletter").html(result);
                    $("#success-subscribe-newsletter").fadeIn("slow");
                    $('#success-subscribe-newsletter').delay(4000).fadeOut("slow");
                }
            });
        }
    });

    function ValidationsubscribenewsletterForm() {
        var error = true;
        $('#subscribenewsletterform input[type=text]').each(function (index) {
            if (index == 0) {
                if (!/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val())) {
                    $("#subscribenewsletterform").find('input:eq(' + index + ')').addClass("required-error");
                    error = false;
                } else {
                    $("#subscribenewsletterform").find('input:eq(' + index + ')').removeClass("required-error");
                }
            }
        });
        return error;
    }

    $(document).on("click", '#button-subscribe-newsletter2', function () {
        var error = ValidationsubscribenewsletterForm2();
        if (error) {
            $.ajax({
                type: "POST",
                url: "email-templates/subscribe-newsletter.php",
                data: $("#subscribenewsletterform2").serialize(),
                success: function success(result) {
                    // Un-comment below code to redirect user to thank you page.
                    //window.location.href="thank-you.html";

                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    });
                    $("#success-subscribe-newsletter2").html(result);
                    $("#success-subscribe-newsletter2").fadeIn("slow");
                    $('#success-subscribe-newsletter2').delay(4000).fadeOut("slow");
                }
            });
        }
    });

    function ValidationsubscribenewsletterForm2() {
        var error = true;
        $('#subscribenewsletterform2 input[type=text]').each(function (index) {
            if (index == 0) {
                if (!/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val())) {
                    $("#subscribenewsletterform2").find('input:eq(' + index + ')').addClass("required-error");
                    error = false;
                } else {
                    $("#subscribenewsletterform2").find('input:eq(' + index + ')').removeClass("required-error");
                }
            }
        });
        return error;
    }

    //Contact us form
    $(document).on("click", '#contact-us-button', function () {
        var error = ValidationContactForm();
        if (error) {
            $.ajax({
                type: "POST",
                url: "email-templates/contact.php",
                data: $("#contact-form").serialize(),
                success: function success(result) {
                    // Un-comment below code to redirect user to thank you page.
                    //window.location.href="thank-you.html";

                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    });
                    $("#success-contact-form").html(result);
                    $("#success-contact-form").fadeIn("slow");
                    $('#success-contact-form').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function ValidationContactForm() {
        var error = true;
        $('#contact-form input[type=text]').each(function (index) {
            if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#contact-form").find('input:eq(' + index + ')').addClass("required-error");
                    error = false;
                } else {
                    $("#contact-form").find('input:eq(' + index + ')').removeClass("required-error");
                }
            } else if (index == 1) {
                if (!/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val())) {
                    $("#contact-form").find('input:eq(' + index + ')').addClass("required-error");
                    error = false;
                } else {
                    $("#contact-form").find('input:eq(' + index + ')').removeClass("required-error");
                }
            }
        });
        return error;
    }

    //Contact us form 2
    $('#contact-us-button-2').on("click", function () {
        var error = ValidationContactForm2();
        if (error) {
            $.ajax({
                type: "POST",
                url: "email-templates/contact.php",
                data: $("#contact-form-2").serialize(),
                success: function success(result) {
                    // Un-comment below code to redirect user to thank you page.
                    //window.location.href="thank-you.html";

                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    });
                    $("#success-contact-form-2").html(result);
                    $("#success-contact-form-2").fadeIn("slow");
                    $('#success-contact-form-2').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function ValidationContactForm2() {
        var error = true;
        $('#contact-form-2 input[type=text]').each(function (index) {
            if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#contact-form-2").find('input:eq(' + index + ')').addClass("required-error");
                    error = false;
                } else {
                    $("#contact-form-2").find('input:eq(' + index + ')').removeClass("required-error");
                }
            } else if (index == 1) {
                if (!/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val())) {
                    $("#contact-form-2").find('input:eq(' + index + ')').addClass("required-error");
                    error = false;
                } else {
                    $("#contact-form-2").find('input:eq(' + index + ')').removeClass("required-error");
                }
            }
        });
        return error;
    }

    //Contact us form 3

    $(document).on("click", '#contact-us-button-3', function () {
        var error = ValidationContactForm3();
        if (error) {
            $.ajax({
                type: "POST",
                url: "email-templates/contact.php",
                data: $("#contact-form-3").serialize(),
                success: function success(result) {
                    // Un-comment below code to redirect user to thank you page.
                    //window.location.href="thank-you.html";
                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    });
                    $("#success-contact-form-3").html(result);
                    $("#success-contact-form-3").fadeIn("slow");
                    $('#success-contact-form-3').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function ValidationContactForm3() {
        var error = true;
        $('#contact-form-3 input[type=text]').each(function (index) {
            if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#contact-form-3").find('input:eq(' + index + ')').addClass("required-error");
                    error = false;
                } else {
                    $("#contact-form-3").find('input:eq(' + index + ')').removeClass("required-error");
                }
            } else if (index == 1) {
                if (!/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val())) {
                    $("#contact-form-3").find('input:eq(' + index + ')').addClass("required-error");
                    error = false;
                } else {
                    $("#contact-form-3").find('input:eq(' + index + ')').removeClass("required-error");
                }
            }
        });
        return error;
    }

    //Project Contact us form
    $(document).on("click", '#project-contact-us-button', function () {
        var error = ValidationProjectContactForm();
        if (error) {
            $.ajax({
                type: "POST",
                url: "email-templates/project-contact.php",
                data: $("#project-contact-form").serialize(),
                success: function success(result) {
                    // Un-comment below code to redirect user to thank you page.
                    //window.location.href="thank-you.html";

                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    });
                    $("#success-project-contact-form").html(result);
                    $("#success-project-contact-form").fadeIn("slow");
                    $('#success-project-contact-form').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function ValidationProjectContactForm() {
        var error = true;
        $('#project-contact-form input[type=text]').each(function (index) {
            if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#project-contact-form").find('input:eq(' + index + ')').addClass("required-error");
                    error = false;
                } else {
                    $("#project-contact-form").find('input:eq(' + index + ')').removeClass("required-error");
                }
            } else if (index == 2) {
                if (!/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val())) {
                    $("#project-contact-form").find('input:eq(' + index + ')').addClass("required-error");
                    error = false;
                } else {
                    $("#project-contact-form").find('input:eq(' + index + ')').removeClass("required-error");
                }
            }
        });
        return error;
    }

    //Project Contact us form 2
    $(document).on("click", '#project-contact-us-4-button', function () {
        var error = ValidationProjectContactForm4();
        if (error) {
            $.ajax({
                type: "POST",
                url: "email-templates/project-contact.php",
                data: $("#project-contact-form-4").serialize(),
                success: function success(result) {
                    // Un-comment below code to redirect user to thank you page.
                    //window.location.href="thank-you.html";

                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    });
                    $("#success-project-contact-form-4").html(result);
                    $("#success-project-contact-form-4").fadeIn("slow");
                    $('#success-project-contact-form-4').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function ValidationProjectContactForm4() {
        var error = true;
        $('#project-contact-form-4 input[type=text]').each(function (index) {
            if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#project-contact-form-4").find('input:eq(' + index + ')').addClass("required-error");
                    error = false;
                } else {
                    $("#project-contact-form-4").find('input:eq(' + index + ')').removeClass("required-error");
                }
            } else if (index == 2) {
                if (!/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val())) {
                    $("#project-contact-form-4").find('input:eq(' + index + ')').addClass("required-error");
                    error = false;
                } else {
                    $("#project-contact-form-4").find('input:eq(' + index + ')').removeClass("required-error");
                }
            }
        });
        return error;
    }

    /*==============================================================
     End form to email
     ==============================================================*/

    /*==============================================================
     wow animation - on scroll
     ==============================================================*/
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    });
    $(window).imagesLoaded(function () {
        wow.init();
    });
    /*==============================================================
     counter
     ==============================================================*/
    $(function ($) {
        animatecounters();
    });
    function animatecounters() {
        $('.timer').each(count);
        function count(options) {
            var $this = $(this);
            options = $.extend({}, options || {}, $this.data('countToOptions') || {});
            $this.countTo(options);
        }
    }
    /* ===================================
     counter number reset while scrolling
     ====================================== */
    $('.timer').appear();
    $(document.body).on('appear', '.timer', function (e) {
        // this code is executed for each appeared element
        if (!$(this).hasClass('appear')) {
            animatecounters();
            $(this).addClass('appear');
        }
    });
    $('.countdown').countdown($('.countdown').attr("data-enddate")).on('update.countdown', function (event) {
        $(this).html(event.strftime('' + '<div class="counter-container"><div class="counter-box first"><div class="number">%-D</div><span>Day%!d</span></div>' + '<div class="counter-box"><div class="number">%H</div><span>Hours</span></div>' + '<div class="counter-box"><div class="number">%M</div><span>Minutes</span></div>' + '<div class="counter-box last"><div class="number">%S</div><span>Seconds</span></div></div>'));
    });

    /* ===================================
     left nav
     ====================================== */
    $(document).on('click', '.right-menu-button', function (e) {
        $('body').toggleClass('left-nav-on');
    });

    /*==============================================================*/
    //    hamburger menu
    /*==============================================================*/
    $(document).on('click', '.btn-hamburger', function () {
        $('.hamburger-menu').toggleClass('show-menu');
        $('body').removeClass('show-menu');
    });

    /*==============================================================*/
    //sidebar nav open
    /*==============================================================*/
    $(document).on('click', '#mobileToggleSidenav', function () {
        $(this).closest('nav').toggleClass('sidemenu-open');
    });

    /*=================================
     //justified Gallery
     =================================*/
    $(document).imagesLoaded(function () {
        if ($(".justified-gallery").length > 0) {
            $(".justified-gallery").justifiedGallery({
                rowHeight: 400,
                maxRowHeight: false,
                captions: true,
                margins: 10,
                waitThumbnailsLoad: true
            });
        }
    });

    $('.atr-nav').on("click", function () {
        $(".atr-div").append("<a class='close-cross' href='#'>X</a>");
        $(".atr-div").animate({
            width: "toggle"
        });
    });

    $('.close-cross').on("click", function () {
        $(".atr-div").hide();
    });

    var menuRight = document.getElementById('cbp-spmenu-s2');
    var showRightPush = document.getElementById('showRightPush');
    var body = document.body;
    if (showRightPush) {
        showRightPush.onclick = function () {
            classie.toggle(this, 'active');
            if (menuRight) classie.toggle(menuRight, 'cbp-spmenu-open');
        };
    }

    var test = document.getElementById('close-pushmenu');
    if (test) {
        test.onclick = function () {
            classie.toggle(this, 'active');
            if (menuRight) classie.toggle(menuRight, 'cbp-spmenu-open');
        };
    }

    //blog page header animation
    $(".blog-header-style1 li").hover(function () {
        $('.blog-header-style1 li.blog-column-active').removeClass('blog-column-active');
        $(this).addClass('blog-column-active');
    }, function () {
        $(this).removeClass('blog-column-active');
        $('.blog-header-style1 li:first-child').addClass('blog-column-active');
    });

    /*==============================================================*/
    //big menu open close start
    /*==============================================================*/
    $('.big-menu-open').on("click", function () {
        $('.big-menu-right').addClass("open");
    });

    $('.big-menu-close').on("click", function () {
        $('.big-menu-right').removeClass("open");
    });
    /*==============================================================*/
    //big menu open close end
    /*==============================================================*/

    /*==============================================================
     instagramfeed
     ==============================================================*/
    if ($('#instaFeed-style1').length != 0) {
        var instaFeedStyle1 = new Instafeed({
            target: 'instaFeed-style1',
            get: 'user',
            userId: 5640046896,
            limit: '8',
            accessToken: '5640046896.1677ed0.f7cd85767e124a9f9f8d698cb33252a0',
            resolution: "low_resolution",
            error: {
                template: '<div class="col-md-12 col-sm-12 col-xs-12"><span class=text-center>No Images Found</span></div>'
            },
            template: '<div class="col-md-3 col-sm-6 col-xs-12 instafeed-style1"><a class="insta-link" href="{{link}}" target="_blank"><img src="{{image}}" class="insta-image" /><div class="insta-counts"><span><i class="ti-heart"></i> <span class="count-number">{{likes}}</span></span><span><i class="ti-comment"></i> <span class="count-number">{{comments}}</span></span></div></a></div>'
        });
        instaFeedStyle1.run();
    }

    if ($('#instaFeed-aside').length != 0) {
        var instaFeedAside = new Instafeed({
            target: 'instaFeed-aside',
            get: 'user',
            userId: 5640046896,
            limit: '6',
            accessToken: '5640046896.1677ed0.f7cd85767e124a9f9f8d698cb33252a0',
            resolution: "low_resolution",
            after: function after() {
                equalizeHeight();
            },

            error: {
                template: '<div class="col-md-12 col-sm-12 col-xs-12"><span class=text-center>No Images Found</span></div>'
            },
            template: '<li><figure><a href="{{link}}" target="_blank"><img src="{{image}}" class="insta-image" /><span class="insta-counts"><i class="ti-heart"></i>{{likes}}</span></a></figure></li>'
        });
        instaFeedAside.run();
    }

    if ($('#instaFeed-footer').length != 0) {
        var instaFeedFooter = new Instafeed({
            target: 'instaFeed-footer',
            get: 'user',
            userId: 5640046896,
            limit: '6',
            accessToken: '5640046896.1677ed0.f7cd85767e124a9f9f8d698cb33252a0',
            resolution: "low_resolution",
            after: function after() {
                equalizeHeight();
            },

            error: {
                template: '<div class="col-md-12 col-sm-12 col-xs-12"><span class=text-center>No Images Found</span></div>'
            },
            template: '<li><figure><a href="{{link}}" target="_blank"><img src="{{image}}" class="insta-image" /><span class="insta-counts"><i class="ti-heart"></i><span>{{likes}}</span></span></a></figure></li>'
        });
        instaFeedFooter.run();
    }
    /*==============================================================
     instagramfeed end
     ==============================================================*/

    /*==============================================================*/
    //revolution Start
    /*==============================================================*/
    /* ================================
     home-creative-studio
     ================================*/
    if ($("#rev_slider_151_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_151_1");
    } else {
        $("#rev_slider_151_1").show().revolution({
            sliderType: "standard",
            jsFileLocation: "revolution/js/",
            sliderLayout: "fullscreen",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "vertical",
                mouseScrollNavigation: "off",
                mouseScrollReverse: "default",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {
                    style: "uranus",
                    enable: true,
                    hide_onmobile: false,
                    hide_over: 479,
                    hide_onleave: false,
                    tmp: '',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    }
                }
            },
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [868, 768, 960, 720],
            lazyType: "none",
            scrolleffect: {
                blur: "on",
                maxblur: "20",
                on_slidebg: "on",
                direction: "top",
                multiplicator: "2",
                multiplicator_layers: "2",
                tilt: "10",
                disable_on_mobile: "off"
            },
            parallax: {
                type: "scroll",
                origo: "slidercenter",
                speed: 400,
                levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55]
            },
            shadow: 0,
            spinner: "spinner3",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            fullScreenAutoWidth: "off",
            fullScreenAlignForce: "off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "0px",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false
            }
        });
    }

    /* ================================
     home-classic-web-agency
     ================================*/
    if ($("#rev_slider_1174_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_1174_1");
    } else {
        $("#rev_slider_1174_1").show().revolution({
            sliderType: "hero",
            jsFileLocation: "revolution/js/",
            sliderLayout: "fullscreen",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {},
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [868, 768, 960, 720],
            lazyType: "none",
            parallax: {
                type: "scroll",
                origo: "slidercenter",
                speed: 400,
                levels: [10, 15, 20, 25, 30, 35, 40, -10, -15, -20, -25, -30, -35, -40, -45, 55]
            },
            shadow: 0,
            spinner: "off",
            autoHeight: "off",
            fullScreenAutoWidth: "off",
            fullScreenAlignForce: "off",
            fullScreenOffsetContainer: "",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                disableFocusListener: false
            }
        });
    }

    /* ================================
     home-classic-corporate
     ================================*/
    if ($("#rev_slider_1078_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_1078_1");
    } else {
        $("#rev_slider_1078_1").show().revolution({
            sliderType: "standard",
            jsFileLocation: "revolution/js/",
            sliderLayout: "fullscreen",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {
                keyboardNavigation: "on",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                mouseScrollReverse: "default",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },

                arrows: {
                    style: "zeus",
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 600,
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 30,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 30,
                        v_offset: 0
                    }
                },

                bullets: {
                    enable: true,
                    hide_onmobile: false,
                    hide_under: 300,
                    style: "hermes",
                    hide_onleave: false,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 30,
                    space: 8,
                    tmp: '<span class="tp-bullet-img-wrap">  <span class="tp-bullet-image"></span></span><span class="tp-bullet-title">{{title}}</span>'
                }
            },
            viewPort: {
                enable: true,
                outof: "pause",
                visible_area: "80%",
                presize: false
            },
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [600, 600, 500, 400],
            lazyType: "none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 2000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 46, 47, 48, 49, 50, 55]
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false
            }
        });
    }
    /*==============================================================*/
    //revolution End
    /*==============================================================*/

    /*==============================================================*/
    //magnificPopup Start
    /*==============================================================*/
    $('.header-search-form').magnificPopup({
        mainClass: 'mfp-fade',
        closeOnBgClick: true,
        preloader: false,
        // for white backgriund
        fixedContentPos: false,
        closeBtnInside: false,
        callbacks: {
            open: function open() {
                setTimeout(function () {
                    $('.search-input').focus();
                }, 500);
                $('#search-header').parent().addClass('search-popup');
                if (!isMobile) {
                    $('body').addClass('overflow-hidden');
                    //$('body').addClass('position-fixed');
                    $('body').addClass('width-100');
                    document.onmousewheel = ScrollStop;
                } else {
                    $('body, html').on('touchmove', function (e) {
                        e.preventDefault();
                    });
                }
            },
            close: function close() {
                if (!isMobile) {
                    $('body').removeClass('overflow-hidden');
                    //$('body').removeClass('position-fixed');
                    $('body').removeClass('width-100');
                    $('#search-header input[type=text]').each(function (index) {
                        if (index == 0) {
                            $(this).val('');
                            $("#search-header").find('input:eq(' + index + ')').css({ "border": "none", "border-bottom": "2px solid rgba(255,255,255,0.5)" });
                        }
                    });
                    document.onmousewheel = ScrollStart;
                } else {
                    $('body, html').unbind('touchmove');
                }
            }
        }
    });

    /*==============================================================*/
    //magnificPopup End
    /*==============================================================*/
    $("input.search-input").on("keypress", function (event) {
        if (event.which == 13 && !isMobile) {
            $("button.search-button").trigger("click");
            event.preventDefault();
        }
    });

    $("input.search-input").on("keyup", function (event) {
        if ($(this).val() == null || $(this).val() == "") {
            $(this).css({ "border": "none", "border-bottom": "2px solid red" });
        } else {
            $(this).css({ "border": "none", "border-bottom": "2px solid rgba(255,255,255,0.5)" });
        }
    });

    $("form.search-form, form.search-form-result").submit(function (event) {
        var error = validationSearchForm();
        if (error) {
            var action = $(this).attr('action');
            action = action == '#' || action == '' ? 'blog-grid-3columns.html' : action;
            action = action + '?' + $(this).serialize();
            window.location = action;
        }

        event.preventDefault();
    });

    $(document).on("click", '.navbar .navbar-collapse a.dropdown-toggle, .accordion-style1 .panel-heading a, .accordion-style2 .panel-heading a, .accordion-style3 .panel-heading a, .toggles .panel-heading a, .toggles-style2 .panel-heading a, .toggles-style3 .panel-heading a, a.carousel-control, .nav-tabs a[data-toggle="tab"], a.shopping-cart', function (e) {
        e.preventDefault();
    });

    $(document).on('touchstart click', 'body', function (e) {
        if ($(window).width() < 992) {
            if (!$('.navbar-collapse').has(e.target).is('.navbar-collapse') && $('.navbar-collapse').hasClass('in') && !$(e.target).hasClass('navbar-toggle')) {
                $('.navbar-collapse').collapse('hide');
            }
        } else {
            if (!$('.navbar-collapse').has(e.target).is('.navbar-collapse') && $('.navbar-collapse ul').hasClass('in')) {
                $('.navbar-collapse').find('a.dropdown-toggle').addClass('collapsed');
                $('.navbar-collapse').find('ul.dropdown-menu').removeClass('in');
                $('.navbar-collapse a.dropdown-toggle').removeClass('active');
            }
        }
    });

    $('.navbar-collapse a.dropdown-toggle').on('touchstart', function (e) {
        $('.navbar-collapse a.dropdown-toggle').not(this).removeClass('active');
        if ($(this).hasClass('active')) $(this).removeClass('active');else $(this).addClass('active');
    });

    $('button.navbar-toggle').on("click", function (e) {
        if (isMobile) {
            $(".cart-content").css('opacity', '0');
            $(".cart-content").css('visibility', 'hidden');
        }
    });

    $('a.dropdown-toggle').on("click", function (e) {
        if (isMobile) {
            $(".cart-content").css('opacity', '0');
            $(".cart-content").css('visibility', 'hidden');
        }
    });

    $(document).on('touchstart click', '.navbar-collapse [data-toggle="dropdown"]', function (event) {

        var $innerLinkLI = $(this).parents('ul.navbar-nav').find('li.dropdown a.inner-link').parent('li.dropdown');
        if (!$(this).hasClass('inner-link') && !$(this).hasClass('dropdown-toggle') && $innerLinkLI.hasClass('open')) {
            $innerLinkLI.removeClass('open');
        }
        var target = $(this).attr('target');
        if ($(window).width() <= 991 && $(this).attr('href') && $(this).attr('href').indexOf("#") <= -1 && !$(event.target).is('i')) {
            if (event.ctrlKey || event.metaKey) {
                window.open($(this).attr('href'), "_blank");
                return false;
            } else if (!target) window.location = $(this).attr('href');else window.open($(this).attr('href'), target);
        } else if ($(window).width() > 991 && $(this).attr('href').indexOf("#") <= -1) {
            if (event.ctrlKey || event.metaKey) {
                window.open($(this).attr('href'), "_blank");
                return false;
            } else if (!target) window.location = $(this).attr('href');else window.open($(this).attr('href'), target);
        } else if ($(window).width() <= 991 && $(this).attr('href') && $(this).attr('href').length > 1 && $(this).attr('href').includes("#") && $(this).hasClass('inner-link')) {
            $(this).parents('ul.navbar-nav').find('li.dropdown').not($(this).parent('.dropdown')).removeClass('open');
            if ($(this).parent('.dropdown').hasClass('open')) {
                $(this).parent('.dropdown').removeClass('open');
            } else {
                $(this).parent('.dropdown').addClass('open');
            }
            $(this).toggleClass('active');
        }
    });

    /* ===================================
     skillbar
     ====================================== */
    $('.skillbar').appear();
    $('.skillbar').skillBars({
        from: 0,
        speed: 4000,
        interval: 100,
        decimals: 0
    });

    $(document.body).on('appear', '.skillbar', function (e) {
        // this code is executed for each appeared element
        if (!$(this).hasClass('appear')) {
            $(this).addClass('appear');
            $(this).find('.skillbar-bar').css("width", "0%");
            $(this).skillBars({
                from: 0,
                speed: 4000,
                interval: 100,
                decimals: 0
            });
        }
    });

    /* ===================================
     touchstart click
     ====================================== */
    $('body').on('touchstart click', function (e) {
        if ($(window).width() < 992) {}
    });

    /*==============================================================*/
    //Set Resize Header Menu - START CODE
    /*==============================================================*/
    $('nav.full-width-pull-menu ul.panel-group li.dropdown a.dropdown-toggle').on("click", function (e) {
        if ($(this).parent('li').find('ul.dropdown-menu').length > 0) {
            if ($(this).parent('li').hasClass('open')) {
                $(this).parent('li').removeClass('open');
            } else {
                $(this).parent('li').addClass('open');
            }
        }
    });

    /*==============================================================*/
    //accordion  - START CODE
    /*==============================================================*/
    $('.accordion-style1 .collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="ti-minus"></i>');
    });

    $('.accordion-style1 .collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="ti-plus"></i>');
    });

    $('.nav.navbar-nav a.inner-link').on("click", function (e) {
        $(this).parents('ul.navbar-nav').find('a.inner-link').removeClass('active');
        var $this = $(this);
        if ($('.nav-header-container .navbar-toggle').is(':visible')) $(this).parents('.navbar-collapse').collapse('hide');
        setTimeout(function () {
            $this.addClass('active');
        }, 1000);
    });

    $('.accordion-style2 .collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title').find('i').addClass('fa-angle-up').removeClass('fa-angle-down');
    });

    $('.accordion-style2 .collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
    });

    $('.accordion-style3 .collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title').find('i').addClass('fa-angle-up').removeClass('fa-angle-down');
    });

    $('.accordion-style3 .collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
    });
    /*==============================================================*/
    //accordion - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //toggles  - START CODE
    /*==============================================================*/
    $('.toggles .collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="ti-minus"></i>');
    });

    $('.toggles .collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="ti-plus"></i>');
    });

    $('.toggles-style2 .collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-angle-up"></i>');
    });

    $('.toggles-style2 .collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="fas fa-angle-down"></i>');
    });
    /*==============================================================*/
    //toggles  - END CODE
    /*==============================================================*/

    /* ===================================
     blog hover box
     ====================================== */
    $(document).on("mouseenter", ".blog-post-style4 .grid-item", function (e) {
        $(this).find("figcaption .blog-hover-text").slideDown(300);
    });
    $(document).on("mouseleave", ".blog-post-style4 .grid-item", function (e) {
        $(this).find("figcaption .blog-hover-text").slideUp(300);
    });
    /* ===================================
     End blog hover box
     ====================================== */
    SetResizeContent();

    var $allNonRatinaImages = $("img:not([data-rjs])");
    $allNonRatinaImages.attr('data-no-retina', '');

    /*==============================================================*/
    //demo button  - START CODE
    /*==============================================================*/

    var $buythemediv = '<div class="buy-theme alt-font sm-display-none"><a href="https://themeforest.net/item/pofo-creative-agency-corporate-and-portfolio-multipurpose-template/20645944?ref=themezaa" target="_blank"><i class="ti-shopping-cart"></i><span>Buy Theme</span></a></div><div class="all-demo alt-font sm-display-none"><a href="mailto:info@themezaa.com?subject=POFO – Creative Agency, Corporate and Portfolio Multi-purpose Template - Quick Question"><i class="ti-email"></i><span>Quick Question?</span></a></div>';
    $('body').append($buythemediv);

    /*==============================================================*/
    //demo button  - END CODE
    /*==============================================================*/

    $(document).on("touchstart", ".sidebar-wrapper", function () {
        clearOpen();
    });

    var getNav = $("nav.navbar.bootsnav");
    var getIn = getNav.find("ul.nav").data("in");
    var getOut = getNav.find("ul.nav").data("out");
    // Hidden dropdown
    function clearOpen() {
        $('li.dropdown').removeClass("on").removeClass("open");
        $(".dropdown-menu").stop().fadeOut('fast');
        $(".dropdown-menu").removeClass(getIn);
        $(".dropdown-menu").addClass(getOut);
    }
});
/* ===================================
 END READY
 ====================================== */

/* ===================================
 START Page Load
 ====================================== */
$(window).load(function () {
    var hash = window.location.hash.substr(1);
    if (hash != "") {
        setTimeout(function () {
            $(window).imagesLoaded(function () {
                var scrollAnimationTime = 1200;
                var scrollAnimation = 'easeInOutExpo';
                var target = '#' + hash;
                if ($(target).length > 0) {

                    $('html, body').stop().animate({
                        'scrollTop': $(target).offset().top
                    }, scrollAnimationTime, scrollAnimation, function () {
                        window.location.hash = target;
                    });
                }
            });
        }, 500);
    }

    fullScreenHeight();
});
/* ===================================
 END Page Load
 ====================================== */

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjU1NWMzNGUzYWJjYjRmZGU2YjMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Zyb250L2pzL21haW4uanMiXSwibmFtZXMiOlsibGFzdFNjcm9sbCIsImlzTW9iaWxlIiwiaXNpUGhvbmVpUGFkIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIlNldE1lZ2FtZW51UG9zaXRpb24iLCIkIiwid2luZG93Iiwid2lkdGgiLCJzZXRUaW1lb3V0IiwidG90YWxIZWlnaHQiLCJvdXRlckhlaWdodCIsImNzcyIsInRvcCIsImxlbmd0aCIsInBhZCIsImQiLCJ0b1N0cmluZyIsImlzSUUiLCJ1YSIsIm1zaWUiLCJpbmRleE9mIiwibWF0Y2giLCJzZXRQYWdlVGl0bGVTcGFjZSIsImhhc0NsYXNzIiwidG9wX3NwYWNlX2hlaWdodCIsInNldEJ1dHRvblBvc2l0aW9uIiwibGVmdFBvc2l0aW9uIiwicGFyc2VJbnQiLCJib3R0b21Qb3NpdGlvbiIsImJhbm5lcldpZHRoIiwib3V0ZXJXaWR0aCIsIm9uIiwiaW5pdF9zY3JvbGxfbmF2aWdhdGUiLCJtZW51X2xpbmtzIiwic2Nyb2xsUG9zIiwiZG9jdW1lbnQiLCJzY3JvbGxUb3AiLCJlYWNoIiwiY3VyckxpbmsiLCJzcGxpdCIsImF0dHIiLCJyZWZFbGVtZW50IiwiaW5jbHVkZXMiLCJwb3NpdGlvbiIsImhlaWdodCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCIkd2luZG93IiwiJGJvZHkiLCIkcGFuZWwiLCJzY3JvbGwiLCIkdGhpcyIsImluZGV4Iiwiam9pbiIsImRhdGEiLCJoZWFkZXJIZWlnaHQiLCJzdCIsInBhcmFsbGF4X3RleHQiLCJ3aW5kb3dfd2lkdGgiLCJlIiwicG9zaXRpb25YIiwiY2xpZW50WCIsInBvc2l0aW9uWSIsImNsaWVudFkiLCJNYXRoIiwicm91bmQiLCJmaW5kIiwiU2Nyb2xsU3RvcCIsIlNjcm9sbFN0YXJ0IiwidmFsaWRhdGlvblNlYXJjaEZvcm0iLCJlcnJvciIsInZhbCIsImVxdWFsaXplSGVpZ2h0IiwiaW1hZ2VzTG9hZGVkIiwiZXF1YWxpemUiLCJyZXNldCIsImNoaWxkcmVuIiwiZmVhdHVyZV9keW5hbWljX2ZvbnRfbGluZV9oZWlnaHQiLCJzaXRlX3dpZHRoIiwid2luZG93X3NpdGVfd2lkdGhfcmF0aW8iLCJmb250X3NpemUiLCJsaW5lX2hlaWdodCIsInVuZGVmaW5lZCIsIm5ld19mb250X3NpemUiLCJuZXdfbGluZV9oZWlnaHQiLCJzdGVsbGFyUGFyYWxsYXgiLCJzdGVsbGFyIiwiZnVsbFNjcmVlbkhlaWdodCIsImVsZW1lbnQiLCIkbWluaGVpZ2h0IiwicGFyZW50cyIsIiRoZWFkZXJoZWlnaHQiLCJtaW53aWR0aCIsInNpZGViYXJOYXZIZWlnaHQiLCJwYXJlbnQiLCJzdHlsZTJOYXZIZWlnaHQiLCJTZXRSZXNpemVDb250ZW50IiwicmVzaXplIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlYWR5IiwidGFyZ2V0IiwicGd1cmwiLCJsb2NhdGlvbiIsImhyZWYiLCJzdWJzdHIiLCJsYXN0SW5kZXhPZiIsIiRoYXNoIiwiaGFzaCIsInN1YnN0cmluZyIsInJlcGxhY2UiLCJmYWRlSW4iLCJmYWRlT3V0IiwiYW5pbWF0ZSIsInN3aXBlckZ1bGwiLCJTd2lwZXIiLCJsb29wIiwic2xpZGVzUGVyVmlldyIsInByZXZlbnRDbGlja3MiLCJhbGxvd1RvdWNoTW92ZSIsInBhZ2luYXRpb24iLCJlbCIsImNsaWNrYWJsZSIsImF1dG9wbGF5IiwiZGVsYXkiLCJrZXlib2FyZCIsImVuYWJsZWQiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwidXBkYXRlIiwic3dpcGVyQXV0b0ZhZGUiLCJlZmZlY3QiLCJzd2lwZXJTZWNvbmQiLCJzd2lwZXJUaGlyZCIsInN3aXBlck51bWJlciIsImRpc2FibGVPbkludGVyYWN0aW9uIiwicmVuZGVyQnVsbGV0IiwiY2xhc3NOYW1lIiwic3dpcGVyVmVydGljYWxQYWdpbmF0aW9uIiwiZGlyZWN0aW9uIiwic3BhY2VCZXR3ZWVuIiwibW91c2V3aGVlbCIsInNlbnNpdGl2aXR5IiwicmVsZWFzZU9uRWRnZXMiLCJzd2lwZXJDbGllbnRzIiwicGFnaW5hdGlvbkNsaWNrYWJsZSIsImJyZWFrcG9pbnRzIiwic3dpcGVyQ2xpZW50czIiLCJzd2lwZXJUaHJlZVNsaWRlcyIsInN3aXBlckZvdXJTbGlkZXMiLCJzd2lwZXJEZW1vSGVhZGVyU3R5bGUiLCJzbGlkZXNQZXJHcm91cCIsIiRzd2lwZXJBdXRvU2xpZGVJbmRleCIsInN3aXBlckF1dG9TbGlkZSIsImNlbnRlcmVkU2xpZGVzIiwib2JzZXJ2ZXIiLCJzcGVlZCIsInNjcm9sbGJhciIsImRyYWdnYWJsZSIsImhpZGUiLCJzbmFwT25SZWxlYXNlIiwiaW52ZXJ0Iiwic3dpcGVyQm90dG9tU2Nyb2xsYmFyRnVsbCIsImdyYWJDdXJzb3IiLCJrZXlib2FyZENvbnRyb2wiLCJlbmFibGUiLCJzd2lwZXJBdXRvSGllZ2h0IiwiYXV0b0hlaWdodCIsInN3aXBlck11bHR5Um93Iiwic3dpcGVyQmxvZyIsImxvb3BlZFNsaWRlcyIsInN3aXBlclByZXNlbnRhdGlvbiIsInJlc2l6ZUlkIiwiYWN0aXZlSW5kZXgiLCJkZXRhY2hFdmVudHMiLCJkZXN0cm95IiwibW91c2V3aGVlbENvbnRyb2wiLCJzbGlkZVRvIiwiY2xlYXJUaW1lb3V0IiwiZG9uZVJlc2l6aW5nIiwicmVtb3ZlQXR0ciIsInNjcm9sbEFuaW1hdGlvblRpbWUiLCJzY3JvbGxBbmltYXRpb24iLCJzdG9wIiwib2Zmc2V0IiwidHJpZ2dlciIsIl90aGlzIiwic21vb3RoU2Nyb2xsIiwiYXBwZWFyIiwiZWFzeVBpZUNoYXJ0IiwiYmFyQ29sb3IiLCJ0cmFja0NvbG9yIiwic2NhbGVDb2xvciIsImVhc2luZyIsInNjYWxlTGVuZ3RoIiwibGluZUNhcCIsImxpbmVXaWR0aCIsInNpemUiLCJkdXJhdGlvbiIsIm9uU3RlcCIsImZyb20iLCJ0byIsInBlcmNlbnQiLCJ0ZXh0IiwiYm9keSIsIiRwb3J0Zm9saW9fZmlsdGVyIiwiaXNvdG9wZSIsImxheW91dE1vZGUiLCJpdGVtU2VsZWN0b3IiLCJwZXJjZW50UG9zaXRpb24iLCJtYXNvbnJ5IiwiY29sdW1uV2lkdGgiLCIkZ3JpZF9zZWxlY3RvcnMiLCJzZWxlY3RvciIsIndvdyIsInJlbW92ZUJveCIsImZpbHRlciIsIiRibG9nX2ZpbHRlciIsIm1hZ25pZmljUG9wdXAiLCJkZWxlZ2F0ZSIsInR5cGUiLCJ0TG9hZGluZyIsIm1haW5DbGFzcyIsImZpeGVkQ29udGVudFBvcyIsImNsb3NlQnRuSW5zaWRlIiwiZ2FsbGVyeSIsIm5hdmlnYXRlQnlJbWdDbGljayIsInByZWxvYWQiLCJsaWdodGJveGdhbGxlcnlncm91cHMiLCJpZCIsInB1c2giLCJjbG9zZU9uQ29udGVudENsaWNrIiwiaW1hZ2UiLCJ2ZXJ0aWNhbEZpdCIsInpvb20iLCJ0aXRsZVNyYyIsIml0ZW0iLCJvcGVuZXIiLCJwcmVsb2FkZXIiLCJibGFja2JnIiwiY2FsbGJhY2tzIiwib3BlbiIsImNsb3NlIiwiZml4ZWRCZ1BvcyIsIm92ZXJmbG93WSIsIm1pZENsaWNrIiwicmVtb3ZhbERlbGF5IiwiZm9jdXMiLCJiZWZvcmVPcGVuIiwiZGlzYWJsZU9uIiwiYWxpZ25Ub3AiLCJpZHgiLCJlbG0iLCJtZWdhTWVudVdpZHRoIiwiTEloZWlnaHQiLCJmaXRWaWRzIiwiVmFsaWRhdGlvbnN1YnNjcmliZW5ld3NsZXR0ZXJGb3JtIiwiYWpheCIsInVybCIsInNlcmlhbGl6ZSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJodG1sIiwiVmFsaWRhdGlvbnN1YnNjcmliZW5ld3NsZXR0ZXJGb3JtMiIsIlZhbGlkYXRpb25Db250YWN0Rm9ybSIsIlZhbGlkYXRpb25Db250YWN0Rm9ybTIiLCJWYWxpZGF0aW9uQ29udGFjdEZvcm0zIiwiVmFsaWRhdGlvblByb2plY3RDb250YWN0Rm9ybSIsIlZhbGlkYXRpb25Qcm9qZWN0Q29udGFjdEZvcm00IiwiV09XIiwiYm94Q2xhc3MiLCJhbmltYXRlQ2xhc3MiLCJtb2JpbGUiLCJsaXZlIiwiaW5pdCIsImFuaW1hdGVjb3VudGVycyIsImNvdW50Iiwib3B0aW9ucyIsImV4dGVuZCIsImNvdW50VG8iLCJjb3VudGRvd24iLCJzdHJmdGltZSIsInRvZ2dsZUNsYXNzIiwiY2xvc2VzdCIsImp1c3RpZmllZEdhbGxlcnkiLCJyb3dIZWlnaHQiLCJtYXhSb3dIZWlnaHQiLCJjYXB0aW9ucyIsIm1hcmdpbnMiLCJ3YWl0VGh1bWJuYWlsc0xvYWQiLCJhcHBlbmQiLCJtZW51UmlnaHQiLCJnZXRFbGVtZW50QnlJZCIsInNob3dSaWdodFB1c2giLCJvbmNsaWNrIiwiY2xhc3NpZSIsInRvZ2dsZSIsImhvdmVyIiwiaW5zdGFGZWVkU3R5bGUxIiwiSW5zdGFmZWVkIiwiZ2V0IiwidXNlcklkIiwibGltaXQiLCJhY2Nlc3NUb2tlbiIsInJlc29sdXRpb24iLCJ0ZW1wbGF0ZSIsInJ1biIsImluc3RhRmVlZEFzaWRlIiwiYWZ0ZXIiLCJpbnN0YUZlZWRGb290ZXIiLCJyZXZvbHV0aW9uIiwicmV2c2xpZGVyX3Nob3dEb3VibGVKcXVlcnlFcnJvciIsInNob3ciLCJzbGlkZXJUeXBlIiwianNGaWxlTG9jYXRpb24iLCJzbGlkZXJMYXlvdXQiLCJkb3R0ZWRPdmVybGF5Iiwia2V5Ym9hcmROYXZpZ2F0aW9uIiwia2V5Ym9hcmRfZGlyZWN0aW9uIiwibW91c2VTY3JvbGxOYXZpZ2F0aW9uIiwibW91c2VTY3JvbGxSZXZlcnNlIiwib25Ib3ZlclN0b3AiLCJ0b3VjaCIsInRvdWNoZW5hYmxlZCIsInN3aXBlX3RocmVzaG9sZCIsInN3aXBlX21pbl90b3VjaGVzIiwic3dpcGVfZGlyZWN0aW9uIiwiZHJhZ19ibG9ja192ZXJ0aWNhbCIsImFycm93cyIsInN0eWxlIiwiaGlkZV9vbm1vYmlsZSIsImhpZGVfb3ZlciIsImhpZGVfb25sZWF2ZSIsInRtcCIsImxlZnQiLCJoX2FsaWduIiwidl9hbGlnbiIsImhfb2Zmc2V0Iiwidl9vZmZzZXQiLCJyaWdodCIsInJlc3BvbnNpdmVMZXZlbHMiLCJ2aXNpYmlsaXR5TGV2ZWxzIiwiZ3JpZHdpZHRoIiwiZ3JpZGhlaWdodCIsImxhenlUeXBlIiwic2Nyb2xsZWZmZWN0IiwiYmx1ciIsIm1heGJsdXIiLCJvbl9zbGlkZWJnIiwibXVsdGlwbGljYXRvciIsIm11bHRpcGxpY2F0b3JfbGF5ZXJzIiwidGlsdCIsImRpc2FibGVfb25fbW9iaWxlIiwicGFyYWxsYXgiLCJvcmlnbyIsImxldmVscyIsInNoYWRvdyIsInNwaW5uZXIiLCJzdG9wTG9vcCIsInN0b3BBZnRlckxvb3BzIiwic3RvcEF0U2xpZGUiLCJzaHVmZmxlIiwiZnVsbFNjcmVlbkF1dG9XaWR0aCIsImZ1bGxTY3JlZW5BbGlnbkZvcmNlIiwiZnVsbFNjcmVlbk9mZnNldENvbnRhaW5lciIsImZ1bGxTY3JlZW5PZmZzZXQiLCJoaWRlVGh1bWJzT25Nb2JpbGUiLCJoaWRlU2xpZGVyQXRMaW1pdCIsImhpZGVDYXB0aW9uQXRMaW1pdCIsImhpZGVBbGxDYXB0aW9uQXRMaWxtaXQiLCJkZWJ1Z01vZGUiLCJmYWxsYmFja3MiLCJzaW1wbGlmeUFsbCIsIm5leHRTbGlkZU9uV2luZG93Rm9jdXMiLCJkaXNhYmxlRm9jdXNMaXN0ZW5lciIsImRpc2FibGVQcm9ncmVzc0JhciIsImhpZGVfdW5kZXIiLCJoaWRlX2RlbGF5IiwiaGlkZV9kZWxheV9tb2JpbGUiLCJidWxsZXRzIiwic3BhY2UiLCJ2aWV3UG9ydCIsIm91dG9mIiwidmlzaWJsZV9hcmVhIiwicHJlc2l6ZSIsImNsb3NlT25CZ0NsaWNrIiwib25tb3VzZXdoZWVsIiwidW5iaW5kIiwid2hpY2giLCJzdWJtaXQiLCJhY3Rpb24iLCJoYXMiLCJpcyIsImNvbGxhcHNlIiwibm90IiwiJGlubmVyTGlua0xJIiwiY3RybEtleSIsIm1ldGFLZXkiLCJza2lsbEJhcnMiLCJpbnRlcnZhbCIsImRlY2ltYWxzIiwic2xpZGVEb3duIiwic2xpZGVVcCIsIiRhbGxOb25SYXRpbmFJbWFnZXMiLCIkYnV5dGhlbWVkaXYiLCJj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QkFBVyxZQUFNO0FBQ2JILGNBQUVDLE1BQUYsRUFBVW1FLFlBQVYsQ0FBdUIsWUFBTTtBQUN6QixvQkFBTTZHLHNCQUFzQixJQUE1QjtBQUNBLG9CQUFNQyxrQkFBa0IsZUFBeEI7QUFDQSxvQkFBTWxGLGVBQWFPLElBQW5CO0FBQ0Esb0JBQUl2RyxFQUFFZ0csTUFBRixFQUFVeEYsTUFBVixHQUFtQixDQUF2QixFQUEwQjs7QUFFdEJSLHNCQUFFLFlBQUYsRUFBZ0JtTCxJQUFoQixHQUNLdkUsT0FETCxDQUNhO0FBQ0wscUNBQWE1RyxFQUFFZ0csTUFBRixFQUFVb0YsTUFBVixHQUFtQjdLO0FBRDNCLHFCQURiLEVBR08wSyxtQkFIUCxFQUc0QkMsZUFINUIsRUFHNkMsWUFBTTtBQUMzQ2pMLCtCQUFPaUcsUUFBUCxDQUFnQkssSUFBaEIsR0FBdUJQLE1BQXZCO0FBQ0gscUJBTEw7QUFNSDtBQUNKLGFBYkQ7QUFjSCxTQWZELEVBZUcsR0FmSDtBQWdCSDs7QUFFRGQ7QUFDSCxDQXRCRDtBQXVCQSIsImZpbGUiOiJqcy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL2Zyb250L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvZnJvbnQvanMvbWFpbi5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiNTU1YzM0ZTNhYmNiNGZkZTZiMyIsImxldCBsYXN0U2Nyb2xsID0gMDtcblxuLy9jaGVjayBmb3IgYnJvd3NlciBvc1xubGV0IGlzTW9iaWxlID0gZmFsc2U7XG5sZXQgaXNpUGhvbmVpUGFkID0gZmFsc2U7XG5pZiAoL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgaXNNb2JpbGUgPSB0cnVlO1xufVxuXG5pZiAoL2lQaG9uZXxpUGFkfGlQb2QvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgaXNpUGhvbmVpUGFkID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gU2V0TWVnYW1lbnVQb3NpdGlvbigpIHtcbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA5OTEpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b3RhbEhlaWdodCA9ICQoJ25hdi5uYXZiYXInKS5vdXRlckhlaWdodCgpO1xuICAgICAgICAgICAgJCgnLm1lZ2EtbWVudScpLmNzcyh7dG9wOiB0b3RhbEhlaWdodH0pO1xuICAgICAgICAgICAgaWYgKCQoJy5uYXZiYXItYnJhbmQtdG9wJykubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgICQoJy5kcm9wZG93bi5zaW1wbGUtZHJvcGRvd24gPiAuZHJvcGRvd24tbWVudScpLmNzcyh7dG9wOiB0b3RhbEhlaWdodH0pO1xuICAgICAgICB9LCAyMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoJy5tZWdhLW1lbnUnKS5jc3MoJ3RvcCcsICcnKTtcbiAgICAgICAgJCgnLmRyb3Bkb3duLnNpbXBsZS1kcm9wZG93biA+IC5kcm9wZG93bi1tZW51JykuY3NzKCd0b3AnLCAnJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwYWQoZCkge1xuICAgIHJldHVybiAoZCA8IDEwKSA/IGAwJHtkLnRvU3RyaW5nKCl9YCA6IGQudG9TdHJpbmcoKTtcbn1cblxuZnVuY3Rpb24gaXNJRSgpIHtcbiAgICBjb25zdCB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuICAgIGNvbnN0IG1zaWUgPSB1YS5pbmRleE9mKFwiTVNJRSBcIik7XG4gICAgaWYgKG1zaWUgPiAwIHx8ICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVHJpZGVudC4qcnZcXDoxMVxcLi8pKSAgLy8gSWYgSW50ZXJuZXQgRXhwbG9yZXIsIHJldHVybiB2ZXJzaW9uIG51bWJlclxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlICAvLyBJZiBhbm90aGVyIGJyb3dzZXIsIHJldHVybiAwXG4gICAge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG4vL3BhZ2UgdGl0bGUgc3BhY2VcbmZ1bmN0aW9uIHNldFBhZ2VUaXRsZVNwYWNlKCkge1xuICAgIGlmICgkKCcubmF2YmFyJykuaGFzQ2xhc3MoJ25hdmJhci10b3AnKSB8fCAkKCduYXYnKS5oYXNDbGFzcygnbmF2YmFyLWZpeGVkLXRvcCcpKSB7XG4gICAgICAgIGlmICgkKCcudG9wLXNwYWNlJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHRvcF9zcGFjZV9oZWlnaHQgPSAkKCcubmF2YmFyJykub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgICAgIGlmICgkKCcudG9wLWhlYWRlci1hcmVhJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRvcF9zcGFjZV9oZWlnaHQgPSB0b3Bfc3BhY2VfaGVpZ2h0ICsgJCgnLnRvcC1oZWFkZXItYXJlYScpLm91dGVySGVpZ2h0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKCcudG9wLXNwYWNlJykuY3NzKCdtYXJnaW4tdG9wJywgYCR7dG9wX3NwYWNlX2hlaWdodH1weGApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vL3N3aXBlciBidXR0b24gcG9zaXRpb24gaW4gYXV0byBoZWlnaHQgc2xpZGVyXG5mdW5jdGlvbiBzZXRCdXR0b25Qb3NpdGlvbigpIHtcbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA3NjcgJiYgJChcIi5zd2lwZXItYXV0by1oZWlnaHQtY29udGFpbmVyXCIpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgbGVmdFBvc2l0aW9uID0gcGFyc2VJbnQoJCgnLnN3aXBlci1hdXRvLWhlaWdodC1jb250YWluZXIgLnN3aXBlci1zbGlkZScpLmNzcygncGFkZGluZy1sZWZ0JykpO1xuICAgICAgICBjb25zdCBib3R0b21Qb3NpdGlvbiA9IHBhcnNlSW50KCQoJy5zd2lwZXItYXV0by1oZWlnaHQtY29udGFpbmVyIC5zd2lwZXItc2xpZGUnKS5jc3MoJ3BhZGRpbmctYm90dG9tJykpO1xuICAgICAgICBjb25zdCBiYW5uZXJXaWR0aCA9IHBhcnNlSW50KCQoJy5zd2lwZXItYXV0by1oZWlnaHQtY29udGFpbmVyIC5zbGlkZS1iYW5uZXInKS5vdXRlcldpZHRoKCkpO1xuICAgICAgICAkKCcubmF2aWdhdGlvbi1hcmVhJykuY3NzKHsnbGVmdCc6IGAke2Jhbm5lcldpZHRoICsgbGVmdFBvc2l0aW9ufXB4YCwgJ2JvdHRvbSc6IGAke2JvdHRvbVBvc2l0aW9ufXB4YH0pO1xuICAgIH0gZWxzZSBpZiAoJChcIi5zd2lwZXItYXV0by1oZWlnaHQtY29udGFpbmVyXCIpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgJCgnLm5hdmlnYXRpb24tYXJlYScpLmNzcyh7J2xlZnQnOiAnJywgJ2JvdHRvbSc6ICcnfSk7XG4gICAgfVxufVxuXG4kKHdpbmRvdykub24oXCJzY3JvbGxcIiwgaW5pdF9zY3JvbGxfbmF2aWdhdGUpO1xuZnVuY3Rpb24gaW5pdF9zY3JvbGxfbmF2aWdhdGUoKSB7XG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICBPbmUgUGFnZSBNYWluIEpTIC0gU1RBUlQgQ09ERVxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICBjb25zdCBtZW51X2xpbmtzID0gJChcIi5uYXZiYXItbmF2IGxpIGFcIik7XG4gICAgY29uc3Qgc2Nyb2xsUG9zID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCk7XG4gICAgbWVudV9saW5rcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgY3VyckxpbmsgPSAkKHRoaXMpO1xuICAgICAgICBjb25zdCBzcGxpdCA9IGN1cnJMaW5rLmF0dHIoXCJocmVmXCIpLnNwbGl0KFwiI1wiKTtcbiAgICAgICAgY29uc3QgcmVmRWxlbWVudCA9ICQoYCMke3NwbGl0WzFdfWApO1xuICAgICAgICBpZiAoc3BsaXRbMV0gIT0gbnVsbCAmJiBjdXJyTGluay5hdHRyKFwiaHJlZlwiKS5pbmNsdWRlcyhcIiNcIikgJiYgcmVmRWxlbWVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAocmVmRWxlbWVudC5wb3NpdGlvbigpLnRvcCA8PSBzY3JvbGxQb3MgJiYgcmVmRWxlbWVudC5wb3NpdGlvbigpLnRvcCArIHJlZkVsZW1lbnQuaGVpZ2h0KCkgPiBzY3JvbGxQb3MpIHtcbiAgICAgICAgICAgICAgICBtZW51X2xpbmtzLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIGN1cnJMaW5rLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyTGluay5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICBPbmUgUGFnZSBNYWluIEpTIC0gRU5EIENPREVcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAvL2JhY2tncm91bmQgY29sb3Igc2xpZGVyIFN0YXJ0XG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgY29uc3QgJHdpbmRvdyA9ICQod2luZG93KTtcblxuICAgIGNvbnN0ICRib2R5ID0gJCgnLmJnLWJhY2tncm91bmQtZmFkZScpO1xuICAgIGNvbnN0ICRwYW5lbCA9ICQoJy5jb2xvci1jb2RlJyk7XG4gICAgY29uc3Qgc2Nyb2xsID0gJHdpbmRvdy5zY3JvbGxUb3AoKSArICgkd2luZG93LmhlaWdodCgpIC8gMik7XG4gICAgJHBhbmVsLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgIGlmICgkdGhpcy5wb3NpdGlvbigpLnRvcCA8PSBzY3JvbGwgJiYgJHRoaXMucG9zaXRpb24oKS50b3AgKyAkdGhpcy5oZWlnaHQoKSA+IHNjcm9sbCkge1xuICAgICAgICAgICAgJGJvZHkucmVtb3ZlQ2xhc3MoKGluZGV4LCBjc3MpID0+IChjc3MubWF0Y2goLyhefFxccyljb2xvci1cXFMrL2cpIHx8IFtdKS5qb2luKCcgJykpO1xuICAgICAgICAgICAgJGJvZHkuYWRkQ2xhc3MoYGNvbG9yLSR7JCh0aGlzKS5kYXRhKCdjb2xvcicpfWApO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgLy9iYWNrZ3JvdW5kIGNvbG9yIHNsaWRlciBFbmRcbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuICAgIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgIHN0aWNreSBuYXYgU3RhcnRcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSAkKCduYXYnKS5vdXRlckhlaWdodCgpO1xuICAgIGlmICghJCgnaGVhZGVyJykuaGFzQ2xhc3MoJ25vLXN0aWNreScpKSB7XG4gICAgICAgIGlmICgkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSA+PSBoZWFkZXJIZWlnaHQpIHtcbiAgICAgICAgICAgICQoJ2hlYWRlcicpLmFkZENsYXNzKCdzdGlja3knKTtcblxuICAgICAgICB9IGVsc2UgaWYgKCQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpIDw9IGhlYWRlckhlaWdodCkge1xuICAgICAgICAgICAgJCgnaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ3N0aWNreScpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0UGFnZVRpdGxlU3BhY2UoKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICAgICAgU2V0TWVnYW1lbnVQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgIGhlYWRlciBhcHBlYXIgb24gc2Nyb2xsIHVwXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gICAgY29uc3Qgc3QgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xuICAgIGlmIChzdCA+IGxhc3RTY3JvbGwpIHtcbiAgICAgICAgJCgnLnN0aWNreScpLnJlbW92ZUNsYXNzKCdoZWFkZXItYXBwZWFyJyk7XG4vLyAgICAgICAgJCgnLmRyb3Bkb3duLm9uJykucmVtb3ZlQ2xhc3MoJ29uJykucmVtb3ZlQ2xhc3MoJ29wZW4nKS5maW5kKCcuZHJvcGRvd24tbWVudScpLmZhZGVPdXQoMTAwKTtcbiAgICB9IGVsc2VcbiAgICAgICAgJCgnLnN0aWNreScpLmFkZENsYXNzKCdoZWFkZXItYXBwZWFyJyk7XG4gICAgbGFzdFNjcm9sbCA9IHN0O1xuICAgIGlmIChsYXN0U2Nyb2xsIDw9IGhlYWRlckhlaWdodClcbiAgICAgICAgJCgnaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2hlYWRlci1hcHBlYXInKTtcbiAgICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICBzdGlja3kgbmF2IEVuZFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gcGFyYWxsYXggdGV4dCAtIFNUQVJUIENPREVcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5mdW5jdGlvbiBwYXJhbGxheF90ZXh0KCkge1xuICAgIGNvbnN0IHdpbmRvd193aWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuICAgIGlmICh3aW5kb3dfd2lkdGggPiAxMDI0KSB7XG4gICAgICAgIGlmICgkKCcuc3dpcGVyLWF1dG8tc2xpZGUgLnN3aXBlci1zbGlkZScpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgJChkb2N1bWVudCkub24oXCJtb3VzZW1vdmVcIiwgXCIuc3dpcGVyLWF1dG8tc2xpZGUgLnN3aXBlci1zbGlkZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvblggPSBlLmNsaWVudFg7XG4gICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uWSA9IGUuY2xpZW50WTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvblggPSBNYXRoLnJvdW5kKHBvc2l0aW9uWCAvIDEwKSAtIDgwO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uWSA9IE1hdGgucm91bmQocG9zaXRpb25ZIC8gMTApIC0gNDA7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcucGFyYWxsYXgtdGV4dCcpLmNzcyh7J3RyYW5zZm9ybSc6IGB0cmFuc2xhdGUoJHtwb3NpdGlvblh9cHgsJHtwb3NpdGlvbll9cHgpYCwgJ3RyYW5zaXRpb24tZHVyYXRpb24nOiAnMHMnfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJChkb2N1bWVudCkub24oXCJtb3VzZW91dFwiLCBcIi5zd2lwZXItYXV0by1zbGlkZSAuc3dpcGVyLXNsaWRlXCIsIGUgPT4ge1xuICAgICAgICAgICAgICAgICQoJy5wYXJhbGxheC10ZXh0JykuY3NzKHsndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZSgwLDApJywgJ3RyYW5zaXRpb24tZHVyYXRpb24nOiAnMC41cyd9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4vL3BhcmFsbGF4IHRleHQgLSBFTkQgQ09ERVxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLy9TZWFyY2ggLSBTVEFSVCBDT0RFXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbmZ1bmN0aW9uIFNjcm9sbFN0b3AoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gU2Nyb2xsU3RhcnQoKSB7XG4gICAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiB2YWxpZGF0aW9uU2VhcmNoRm9ybSgpIHtcbiAgICBsZXQgZXJyb3IgPSB0cnVlO1xuICAgICQoJyNzZWFyY2gtaGVhZGVyIGlucHV0W3R5cGU9dGV4dF0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpID09PSBudWxsIHx8ICQodGhpcykudmFsKCkgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAkKFwiI3NlYXJjaC1oZWFkZXJcIikuZmluZChgaW5wdXQ6ZXEoJHtpbmRleH0pYCkuY3NzKHtcImJvcmRlclwiOiBcIm5vbmVcIiwgXCJib3JkZXItYm90dG9tXCI6IFwiMnB4IHNvbGlkIHJlZFwifSk7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChcIiNzZWFyY2gtaGVhZGVyXCIpLmZpbmQoYGlucHV0OmVxKCR7aW5kZXh9KWApLmNzcyh7XCJib3JkZXJcIjogXCJub25lXCIsIFwiYm9yZGVyLWJvdHRvbVwiOiBcIjJweCBzb2xpZCAjMDAwXCJ9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBlcnJvcjtcbn1cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiBTZWFyY2ggLSBFTkQgQ09ERVxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuIGVxdWFsaXplIC0gU1RBUlQgQ09ERVxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbmZ1bmN0aW9uIGVxdWFsaXplSGVpZ2h0KCkge1xuICAgICQoZG9jdW1lbnQpLmltYWdlc0xvYWRlZCgoKSA9PiB7XG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDc2OCkge1xuICAgICAgICAgICAgJCgnLmVxdWFsaXplJykuZXF1YWxpemUoe2VxdWFsaXplOiAnb3V0ZXJIZWlnaHQnLCByZXNldDogdHJ1ZX0pO1xuICAgICAgICAgICAgJCgnLmVxdWFsaXplLm1kLWVxdWFsaXplLWF1dG8nKS5jaGlsZHJlbigpLmNzcyhcImhlaWdodFwiLCBcIlwiKTtcbiAgICAgICAgICAgICQoJy5lcXVhbGl6ZS5zbS1lcXVhbGl6ZS1hdXRvJykuY2hpbGRyZW4oKS5jc3MoXCJoZWlnaHRcIiwgXCJcIik7XG4gICAgICAgICAgICAkKCcuZXF1YWxpemUueHMtZXF1YWxpemUtYXV0bycpLmNoaWxkcmVuKCkuY3NzKFwiaGVpZ2h0XCIsIFwiXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKCQod2luZG93KS53aWR0aCgpIDwgOTkyKSB7XG4gICAgICAgICAgICAkKCcuZXF1YWxpemUnKS5lcXVhbGl6ZSh7ZXF1YWxpemU6ICdvdXRlckhlaWdodCcsIHJlc2V0OiB0cnVlfSk7XG4gICAgICAgICAgICAkKCcuZXF1YWxpemUubWQtZXF1YWxpemUtYXV0bycpLmNoaWxkcmVuKCkuY3NzKFwiaGVpZ2h0XCIsIFwiXCIpO1xuICAgICAgICAgICAgJCgnLmVxdWFsaXplLnNtLWVxdWFsaXplLWF1dG8nKS5jaGlsZHJlbigpLmNzcyhcImhlaWdodFwiLCBcIlwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDExOTkpIHtcbiAgICAgICAgICAgICQoJy5lcXVhbGl6ZScpLmVxdWFsaXplKHtlcXVhbGl6ZTogJ291dGVySGVpZ2h0JywgcmVzZXQ6IHRydWV9KTtcbiAgICAgICAgICAgICQoJy5lcXVhbGl6ZS5tZC1lcXVhbGl6ZS1hdXRvJykuY2hpbGRyZW4oKS5jc3MoXCJoZWlnaHRcIiwgXCJcIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcuZXF1YWxpemUnKS5lcXVhbGl6ZSh7ZXF1YWxpemU6ICdvdXRlckhlaWdodCcsIHJlc2V0OiB0cnVlfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiBlcXVhbGl6ZSAtIEVORCBDT0RFXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gZHluYW1pYyBmb250IHNpemUgU1RBUlQgQ09ERVxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbmZ1bmN0aW9uIGZlYXR1cmVfZHluYW1pY19mb250X2xpbmVfaGVpZ2h0KCkge1xuICAgIGlmICgkKCcuZHluYW1pYy1mb250LXNpemUnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHNpdGVfd2lkdGggPSAxMTAwO1xuICAgICAgICBjb25zdCB3aW5kb3dfd2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgaWYgKHdpbmRvd193aWR0aCA8IHNpdGVfd2lkdGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvd19zaXRlX3dpZHRoX3JhdGlvID0gd2luZG93X3dpZHRoIC8gc2l0ZV93aWR0aDtcbiAgICAgICAgICAgICQoJy5keW5hbWljLWZvbnQtc2l6ZScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvbnRfc2l6ZSA9ICQodGhpcykuYXR0cignZGF0YS1mb250c2l6ZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVfaGVpZ2h0ID0gJCh0aGlzKS5hdHRyKCdkYXRhLWxpbmVoZWlnaHQnKTtcbiAgICAgICAgICAgICAgICBpZiAoZm9udF9zaXplICE9ICcnICYmIGZvbnRfc2l6ZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3X2ZvbnRfc2l6ZSA9IE1hdGgucm91bmQoZm9udF9zaXplICogd2luZG93X3NpdGVfd2lkdGhfcmF0aW8gKiAxMDAwKSAvIDEwMDA7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdmb250LXNpemUnLCBgJHtuZXdfZm9udF9zaXplfXB4YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsaW5lX2hlaWdodCAhPT0gJycgJiYgbGluZV9oZWlnaHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdfbGluZV9oZWlnaHQgPSBNYXRoLnJvdW5kKGxpbmVfaGVpZ2h0ICogd2luZG93X3NpdGVfd2lkdGhfcmF0aW8gKiAxMDAwKSAvIDEwMDA7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdsaW5lLWhlaWdodCcsIGAke25ld19saW5lX2hlaWdodH1weGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnLmR5bmFtaWMtZm9udC1zaXplJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9udF9zaXplID0gJCh0aGlzKS5hdHRyKCdkYXRhLWZvbnRzaXplJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGluZV9oZWlnaHQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtbGluZWhlaWdodCcpO1xuICAgICAgICAgICAgICAgIGlmIChmb250X3NpemUgIT09ICcnICYmIGZvbnRfc2l6ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdmb250LXNpemUnLCBgJHtmb250X3NpemV9cHhgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxpbmVfaGVpZ2h0ICE9PSAnJyAmJiBsaW5lX2hlaWdodCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCdsaW5lLWhlaWdodCcsIGAke2xpbmVfaGVpZ2h0fXB4YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gZHluYW1pYyBmb250IHNpemUgRU5EIENPREVcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiBzZXQgcGFyYWxsYXhcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5mdW5jdGlvbiBzdGVsbGFyUGFyYWxsYXgoKSB7XG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gMTAyNCkge1xuICAgICAgICAkLnN0ZWxsYXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkLnN0ZWxsYXIoJ2Rlc3Ryb3knKTtcbiAgICAgICAgJCgnLnBhcmFsbGF4JykuY3NzKCdiYWNrZ3JvdW5kLXBvc2l0aW9uJywgJycpO1xuICAgIH1cbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuIGZ1bGwgc2NyZWVuIFNUQVJUIENPREVcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5mdW5jdGlvbiBmdWxsU2NyZWVuSGVpZ2h0KCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSAkKFwiLmZ1bGwtc2NyZWVuXCIpO1xuICAgIGNvbnN0ICRtaW5oZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gICAgZWxlbWVudC5wYXJlbnRzKCdzZWN0aW9uJykuaW1hZ2VzTG9hZGVkKCgpID0+IHtcbiAgICAgICAgaWYgKCQoXCIudG9wLXNwYWNlIC5mdWxsLXNjcmVlblwiKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCAkaGVhZGVyaGVpZ2h0ID0gJChcImhlYWRlciBuYXYubmF2YmFyXCIpLm91dGVySGVpZ2h0KCk7XG4gICAgICAgICAgICAkKFwiLnRvcC1zcGFjZSAuZnVsbC1zY3JlZW5cIikuY3NzKCdtaW4taGVpZ2h0JywgJG1pbmhlaWdodCAtICRoZWFkZXJoZWlnaHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5jc3MoJ21pbi1oZWlnaHQnLCAkbWluaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgbWlud2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAkKFwiLmZ1bGwtc2NyZWVuLXdpZHRoXCIpLmNzcygnbWluLXdpZHRoJywgbWlud2lkdGgpO1xuXG4gICAgY29uc3Qgc2lkZWJhck5hdkhlaWdodCA9ICQoJy5zaWRlYmFyLW5hdi1zdHlsZS0xJykuaGVpZ2h0KCkgLSAkKCcubG9nby1ob2xkZXInKS5wYXJlbnQoKS5oZWlnaHQoKSAtICQoJy5mb290ZXItaG9sZGVyJykucGFyZW50KCkuaGVpZ2h0KCkgLSAxMDtcbiAgICAkKFwiLnNpZGViYXItbmF2LXN0eWxlLTEgLm5hdlwiKS5jc3MoJ2hlaWdodCcsIChzaWRlYmFyTmF2SGVpZ2h0KSk7XG4gICAgY29uc3Qgc3R5bGUyTmF2SGVpZ2h0ID0gcGFyc2VJbnQoJCgnLnNpZGViYXItcGFydDInKS5oZWlnaHQoKSAtIHBhcnNlSW50KCQoJy5zaWRlYmFyLXBhcnQyIC5zaWRlYmFyLW1pZGRsZScpLmNzcygncGFkZGluZy10b3AnKSkgLSBwYXJzZUludCgkKCcuc2lkZWJhci1wYXJ0MiAuc2lkZWJhci1taWRkbGUnKS5jc3MoJ3BhZGRpbmctYm90dG9tJykpIC0gcGFyc2VJbnQoJChcIi5zaWRlYmFyLXBhcnQyIC5zaWRlYmFyLW1pZGRsZSAuc2lkZWJhci1taWRkbGUtbWVudSAubmF2XCIpLmNzcygnbWFyZ2luLWJvdHRvbScpKSk7XG4gICAgJChcIi5zaWRlYmFyLXBhcnQyIC5zaWRlYmFyLW1pZGRsZSAuc2lkZWJhci1taWRkbGUtbWVudSAubmF2XCIpLmNzcygnaGVpZ2h0JywgKHN0eWxlMk5hdkhlaWdodCkpO1xuXG5cbn1cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiBmdWxsIHNjcmVlbiBFTkQgQ09ERVxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbmZ1bmN0aW9uIFNldFJlc2l6ZUNvbnRlbnQoKSB7XG4gICAgLy8gICAgYWxsIGZ1bmN0aW9uIGNhbGxcbiAgICBmZWF0dXJlX2R5bmFtaWNfZm9udF9saW5lX2hlaWdodCgpO1xuICAgIFNldE1lZ2FtZW51UG9zaXRpb24oKTtcbiAgICBzZXRQYWdlVGl0bGVTcGFjZSgpO1xuICAgIHNldEJ1dHRvblBvc2l0aW9uKCk7XG4gICAgcGFyYWxsYXhfdGV4dCgpO1xuICAgIHN0ZWxsYXJQYXJhbGxheCgpO1xuICAgIGZ1bGxTY3JlZW5IZWlnaHQoKTtcbiAgICBlcXVhbGl6ZUhlaWdodCgpO1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuIFNUQVJUIFJFU0laRVxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4kKHdpbmRvdykucmVzaXplKGV2ZW50ID0+IHtcbiAgICAvLyBCb290c25hdiBtZW51IHdvcmsgd2l0aCBldWFsaXplIGhlaWdodFxuICAgICQoXCJuYXYubmF2YmFyLmJvb3RzbmF2IHVsLm5hdlwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcImxpLmRyb3Bkb3duXCIsIHRoaXMpLm9uKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gOTkxKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuZXF1YWxpemUnKS5lcXVhbGl6ZSh7ZXF1YWxpemU6ICdvdXRlckhlaWdodCcsIHJlc2V0OiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBTZXRSZXNpemVDb250ZW50KCk7XG4gICAgfSwgNTAwKTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59KTtcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gRU5EIFJFU0laRVxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gU1RBUlQgUkVBRFlcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuICAgIC8vIEJvb3RzbmF2IG1lbnUgd29yayB3aXRoIGV1YWxpemUgaGVpZ2h0XG4gICAgJChcIm5hdi5uYXZiYXIuYm9vdHNuYXYgdWwubmF2XCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwibGkuZHJvcGRvd25cIiwgdGhpcykub24oXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDk5MSkge1xuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLmVxdWFsaXplJykuZXF1YWxpemUoe2VxdWFsaXplOiAnb3V0ZXJIZWlnaHQnLCByZXNldDogdHJ1ZX0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gQm9vdHNuYXYgdGFiIHdvcmsgd2l0aCBldWFsaXplIGhlaWdodFxuICAgICQoJ2FbZGF0YS10b2dnbGU9XCJ0YWJcIl0nKS5vbignc2hvd24uYnMudGFiJywgZSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9ICQoZS50YXJnZXQpLmF0dHIoXCJocmVmXCIpO1xuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA5OTEpIHtcbiAgICAgICAgICAgICQodGFyZ2V0KS5maW5kKCcuZXF1YWxpemUnKS5lcXVhbGl6ZSh7ZXF1YWxpemU6ICdvdXRlckhlaWdodCcsIHJlc2V0OiB0cnVlfSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEFjdGl2ZSBjbGFzcyB0byBjdXJyZW50IG1lbnUgZm9yIG9ubHkgaHRtbFxuICAgIGxldCBwZ3VybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN1YnN0cih3aW5kb3cubG9jYXRpb24uaHJlZi5sYXN0SW5kZXhPZihcIi9cIikgKyAxKTtcbiAgICBsZXQgJGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSk7XG5cbiAgICBpZiAoJGhhc2gpIHtcbiAgICAgICAgJGhhc2ggPSBgIyR7JGhhc2h9YDtcbiAgICAgICAgcGd1cmwgPSBwZ3VybC5yZXBsYWNlKCRoYXNoLCBcIlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwZ3VybCA9IHBndXJsLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xuICAgIH1cblxuICAgICQoXCIubmF2IGxpIGFcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmF0dHIoXCJocmVmXCIpID09IHBndXJsIHx8ICQodGhpcykuYXR0cihcImhyZWZcIikgPT0gYCR7cGd1cmx9Lmh0bWxgKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCdsaS5kcm9wZG93bicpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gMTUwKVxuICAgICAgICAgICAgJCgnLnNjcm9sbC10b3AtYXJyb3cnKS5mYWRlSW4oJ3Nsb3cnKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgJCgnLnNjcm9sbC10b3AtYXJyb3cnKS5mYWRlT3V0KCdzbG93Jyk7XG4gICAgfSk7XG4gICAgLy9DbGljayBldmVudCB0byBzY3JvbGwgdG8gdG9wXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zY3JvbGwtdG9wLWFycm93JywgKCkgPT4ge1xuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAwfSwgODAwKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgc3dpcGVyIHNsaWRlclxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICAgIGNvbnN0IHN3aXBlckZ1bGwgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWZ1bGwtc2NyZWVuJywge1xuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICBwcmV2ZW50Q2xpY2tzOiBmYWxzZSxcbiAgICAgICAgYWxsb3dUb3VjaE1vdmU6IHRydWUsXG4gICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgIGVsOiAnLnN3aXBlci1mdWxsLXNjcmVlbi1wYWdpbmF0aW9uJyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBhdXRvcGxheToge1xuICAgICAgICAgICAgZGVsYXk6IDUwMDBcbiAgICAgICAgfSxcbiAgICAgICAga2V5Ym9hcmQ6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2J1xuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgICAgcmVzaXplKCkge1xuICAgICAgICAgICAgICAgIHN3aXBlckZ1bGwudXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHN3aXBlckF1dG9GYWRlID0gbmV3IFN3aXBlcignLnN3aXBlci1hdXRvLWZhZGUnLCB7XG4gICAgICAgIGFsbG93VG91Y2hNb3ZlOiB0cnVlLFxuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICBwcmV2ZW50Q2xpY2tzOiBmYWxzZSxcbiAgICAgICAgZWZmZWN0OiAnZmFkZScsXG4gICAgICAgIGF1dG9wbGF5OiB7XG4gICAgICAgICAgICBkZWxheTogNTAwMFxuICAgICAgICB9LFxuICAgICAgICBrZXlib2FyZDoge1xuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnXG4gICAgICAgIH0sXG4gICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgIGVsOiAnLnN3aXBlci1hdXRvLXBhZ2luYXRpb24nLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgICByZXNpemUoKSB7XG4gICAgICAgICAgICAgICAgc3dpcGVyQXV0b0ZhZGUudXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHN3aXBlclNlY29uZCA9IG5ldyBTd2lwZXIoJy5zd2lwZXItc2xpZGVyLXNlY29uZCcsIHtcbiAgICAgICAgYWxsb3dUb3VjaE1vdmU6IHRydWUsXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgIHByZXZlbnRDbGlja3M6IGZhbHNlLFxuICAgICAgICBrZXlib2FyZDoge1xuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnXG4gICAgICAgIH0sXG4gICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uLXNlY29uZCcsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICAgIHJlc2l6ZSgpIHtcbiAgICAgICAgICAgICAgICBzd2lwZXJTZWNvbmQudXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHN3aXBlclRoaXJkID0gbmV3IFN3aXBlcignLnN3aXBlci1zbGlkZXItdGhpcmQnLCB7XG4gICAgICAgIGFsbG93VG91Y2hNb3ZlOiB0cnVlLFxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICBwcmV2ZW50Q2xpY2tzOiBmYWxzZSxcbiAgICAgICAga2V5Ym9hcmQ6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2J1xuICAgICAgICB9LFxuICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbi10aGlyZCcsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICAgIHJlc2l6ZSgpIHtcbiAgICAgICAgICAgICAgICBzd2lwZXJUaGlyZC51cGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgc3dpcGVyTnVtYmVyID0gbmV3IFN3aXBlcignLnN3aXBlci1udW1iZXItcGFnaW5hdGlvbicsIHtcbiAgICAgICAgYWxsb3dUb3VjaE1vdmU6IHRydWUsXG4gICAgICAgIHByZXZlbnRDbGlja3M6IGZhbHNlLFxuICAgICAgICBhdXRvcGxheToge1xuICAgICAgICAgICAgZGVsYXk6IDQwMDAsXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICBlbDogJy5zd2lwZXItbnVtYmVyJyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHJlbmRlckJ1bGxldChpbmRleCwgY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPiR7cGFkKChpbmRleCArIDEpKX08L3NwYW4+YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICAgIHJlc2l6ZSgpIHtcbiAgICAgICAgICAgICAgICBzd2lwZXJOdW1iZXIudXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHN3aXBlclZlcnRpY2FsUGFnaW5hdGlvbiA9IG5ldyBTd2lwZXIoJy5zd2lwZXItdmVydGljYWwtcGFnaW5hdGlvbicsIHtcbiAgICAgICAgYWxsb3dUb3VjaE1vdmU6IHRydWUsXG4gICAgICAgIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxuICAgICAgICBwcmV2ZW50Q2xpY2tzOiBmYWxzZSxcbiAgICAgICAgbW91c2V3aGVlbDoge1xuICAgICAgICAgICAgbW91c2V3aGVlbDogdHJ1ZSxcbiAgICAgICAgICAgIHNlbnNpdGl2aXR5OiAxLFxuICAgICAgICAgICAgcmVsZWFzZU9uRWRnZXM6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2J1xuICAgICAgICB9LFxuICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbi12ZXJ0aWNhbCcsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICAgIHJlc2l6ZSgpIHtcbiAgICAgICAgICAgICAgICBzd2lwZXJWZXJ0aWNhbFBhZ2luYXRpb24udXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHN3aXBlckNsaWVudHMgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLXNsaWRlci1jbGllbnRzJywge1xuICAgICAgICBhbGxvd1RvdWNoTW92ZTogdHJ1ZSxcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgICAgcGFnaW5hdGlvbkNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgcHJldmVudENsaWNrczogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXk6IHtcbiAgICAgICAgICAgIGRlbGF5OiAzMDAwLFxuICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgZWw6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAgIDExOTk6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgOTkxOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDc2Nzoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICAgIHJlc2l6ZSgpIHtcbiAgICAgICAgICAgICAgICBzd2lwZXJDbGllbnRzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBzd2lwZXJDbGllbnRzMiA9IG5ldyBTd2lwZXIoJy5zd2lwZXItc2xpZGVyLWNsaWVudHMtc2Vjb25kJywge1xuICAgICAgICBhbGxvd1RvdWNoTW92ZTogdHJ1ZSxcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgICAgcGFnaW5hdGlvbkNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgcHJldmVudENsaWNrczogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXk6IHtcbiAgICAgICAgICAgIGRlbGF5OiAzMDAwLFxuICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgZWw6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAgIDExOTk6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgOTkxOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDc2Nzoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICAgIHJlc2l6ZSgpIHtcbiAgICAgICAgICAgICAgICBzd2lwZXJDbGllbnRzMi51cGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgc3dpcGVyVGhyZWVTbGlkZXMgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLXRocmVlLXNsaWRlcycsIHtcbiAgICAgICAgYWxsb3dUb3VjaE1vdmU6IHRydWUsXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgIHByZXZlbnRDbGlja3M6IGZhbHNlLFxuICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbi10aHJlZS1zbGlkZXMnLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGF1dG9wbGF5OiB7XG4gICAgICAgICAgICBkZWxheTogMzAwMFxuICAgICAgICB9LFxuICAgICAgICBrZXlib2FyZDoge1xuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLXRocmVlLXNsaWRlLW5leHQnLFxuICAgICAgICAgICAgcHJldkVsOiAnLnN3aXBlci10aHJlZS1zbGlkZS1wcmV2J1xuICAgICAgICB9LFxuICAgICAgICBicmVha3BvaW50czoge1xuICAgICAgICAgICAgOTkxOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDc2Nzoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICAgIHJlc2l6ZSgpIHtcbiAgICAgICAgICAgICAgICBzd2lwZXJUaHJlZVNsaWRlcy51cGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgc3dpcGVyRm91clNsaWRlcyA9IG5ldyBTd2lwZXIoJy5zd2lwZXItZm91ci1zbGlkZXMnLCB7XG4gICAgICAgIGFsbG93VG91Y2hNb3ZlOiB0cnVlLFxuICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgICAgICBwcmV2ZW50Q2xpY2tzOiBmYWxzZSxcbiAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24tZm91ci1zbGlkZXMnLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGF1dG9wbGF5OiB7XG4gICAgICAgICAgICBkZWxheTogMzAwMFxuICAgICAgICB9LFxuICAgICAgICBrZXlib2FyZDoge1xuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnXG4gICAgICAgIH0sXG4gICAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgICAgICAxMTk5OiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogM1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDk5MToge1xuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA3Njc6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgICByZXNpemUoKSB7XG4gICAgICAgICAgICAgICAgc3dpcGVyRm91clNsaWRlcy51cGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgc3dpcGVyRGVtb0hlYWRlclN0eWxlID0gbmV3IFN3aXBlcignLnN3aXBlci1kZW1vLWhlYWRlci1zdHlsZScsIHtcbiAgICAgICAgYWxsb3dUb3VjaE1vdmU6IHRydWUsXG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICAgIHByZXZlbnRDbGlja3M6IHRydWUsXG4gICAgICAgIHNsaWRlc1Blckdyb3VwOiA0LFxuICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbi1kZW1vLWhlYWRlci1zdHlsZScsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgYXV0b3BsYXk6IHtcbiAgICAgICAgICAgIGRlbGF5OiAzMDAwXG4gICAgICAgIH0sXG4gICAgICAgIGtleWJvYXJkOiB7XG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldidcbiAgICAgICAgfSxcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAgIDExOTk6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJHcm91cDogMixcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNzY3OiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgICAgcmVzaXplKCkge1xuICAgICAgICAgICAgICAgIHN3aXBlckRlbW9IZWFkZXJTdHlsZS51cGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGV0ICRzd2lwZXJBdXRvU2xpZGVJbmRleCA9IDA7XG4gICAgbGV0IHN3aXBlckF1dG9TbGlkZSA9IG5ldyBTd2lwZXIoJy5zd2lwZXItYXV0by1zbGlkZScsIHtcbiAgICAgICAgYWxsb3dUb3VjaE1vdmU6IHRydWUsXG4gICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogODAsXG4gICAgICAgIHByZXZlbnRDbGlja3M6IGZhbHNlLFxuICAgICAgICBvYnNlcnZlcjogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IDEwMDAsXG4gICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgIGVsOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgICBoaWRlOiBmYWxzZSxcbiAgICAgICAgICAgIHNuYXBPblJlbGVhc2U6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgYXV0b3BsYXk6IHtcbiAgICAgICAgICAgIGRlbGF5OiAzMDAwXG4gICAgICAgIH0sXG4gICAgICAgIG1vdXNld2hlZWw6IHtcbiAgICAgICAgICAgIGludmVydDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAga2V5Ym9hcmQ6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1uZXh0LXN0eWxlMicsXG4gICAgICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLXByZXYtc3R5bGUyJ1xuICAgICAgICB9LFxuICAgICAgICBicmVha3BvaW50czoge1xuICAgICAgICAgICAgMTE5OToge1xuICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogNjBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA5NjA6IHtcbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDMwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNzY3OiB7XG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgICAgcmVzaXplKCkge1xuICAgICAgICAgICAgICAgIHN3aXBlckF1dG9TbGlkZS51cGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gNzY3KSB7XG4gICAgICAgIHZhciBzd2lwZXJCb3R0b21TY3JvbGxiYXJGdWxsID0gbmV3IFN3aXBlcignLnN3aXBlci1ib3R0b20tc2Nyb2xsYmFyLWZ1bGwnLCB7XG4gICAgICAgICAgICBhbGxvd1RvdWNoTW92ZTogdHJ1ZSxcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgICAgIGdyYWJDdXJzb3I6IHRydWUsXG4gICAgICAgICAgICBwcmV2ZW50Q2xpY2tzOiBmYWxzZSxcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICAgICAgICBrZXlib2FyZENvbnRyb2w6IHRydWUsXG4gICAgICAgICAgICBzcGVlZDogMTAwMCxcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgICBlbDogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICAgICAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBoaWRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbmFwT25SZWxlYXNlOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2V3aGVlbDoge1xuICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGtleWJvYXJkOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgICAgICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2J1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBzd2lwZXJBdXRvSGllZ2h0ID0gbmV3IFN3aXBlcignLnN3aXBlci1hdXRvLWhlaWdodC1jb250YWluZXInLCB7XG4gICAgICAgIGFsbG93VG91Y2hNb3ZlOiB0cnVlLFxuICAgICAgICBlZmZlY3Q6ICdmYWRlJyxcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgYXV0b0hlaWdodDogdHJ1ZSxcbiAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLWF1dG8taGVpZ2h0LXBhZ2luYXRpb24nLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGF1dG9wbGF5OiB7XG4gICAgICAgICAgICBkZWxheTogMzAwMFxuICAgICAgICB9LFxuICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgICByZXNpemUoKSB7XG4gICAgICAgICAgICAgICAgc3dpcGVyQXV0b0hpZWdodC51cGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgc3dpcGVyTXVsdHlSb3cgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLW11bHR5LXJvdy1jb250YWluZXInLCB7XG4gICAgICAgIGFsbG93VG91Y2hNb3ZlOiB0cnVlLFxuICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgICAgICBzcGFjZUJldHdlZW46IDE1LFxuICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICBlbDogJy5zd2lwZXItbXVsdHktcm93LXBhZ2luYXRpb24nLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGF1dG9wbGF5OiB7XG4gICAgICAgICAgICBkZWxheTogMzAwMCxcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgICAgIG5leHRFbDogJy5zd2lwZXItcG9ydGZvbGlvLW5leHQnLFxuICAgICAgICAgICAgcHJldkVsOiAnLnN3aXBlci1wb3J0Zm9saW8tcHJldidcbiAgICAgICAgfSxcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAgIDk5MToge1xuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA3Njc6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgICByZXNpemUoKSB7XG4gICAgICAgICAgICAgICAgc3dpcGVyTXVsdHlSb3cudXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHN3aXBlckJsb2cgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWJsb2cnLCB7XG4gICAgICAgIGFsbG93VG91Y2hNb3ZlOiB0cnVlLFxuICAgICAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICAgICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMTUsXG4gICAgICAgIHByZXZlbnRDbGlja3M6IGZhbHNlLFxuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBsb29wZWRTbGlkZXM6IDMsXG4gICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgIGVsOiAnLnN3aXBlci1ibG9nLXBhZ2luYXRpb24nLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGF1dG9wbGF5OiB7XG4gICAgICAgICAgICBkZWxheTogNTAwMCxcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldidcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICAgIHJlc2l6ZSgpIHtcbiAgICAgICAgICAgICAgICBzd2lwZXJCbG9nLnVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBzd2lwZXJQcmVzZW50YXRpb24gPSBuZXcgU3dpcGVyKCcuc3dpcGVyLXByZXNlbnRhdGlvbicsIHtcbiAgICAgICAgYWxsb3dUb3VjaE1vdmU6IHRydWUsXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgICAgICBwcmV2ZW50Q2xpY2tzOiB0cnVlLFxuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBsb29wZWRTbGlkZXM6IDYsXG4gICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgIGVsOiAnLnN3aXBlci1wcmVzZW50YXRpb24tcGFnaW5hdGlvbicsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgYXV0b3BsYXk6IHtcbiAgICAgICAgICAgIGRlbGF5OiAzMDAwLFxuICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAga2V5Ym9hcmQ6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2J1xuICAgICAgICB9LFxuICAgICAgICBicmVha3BvaW50czoge1xuICAgICAgICAgICAgOTkxOiB7XG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNSxcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNzY3OiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgICAgcmVzaXplKCkge1xuICAgICAgICAgICAgICAgIHN3aXBlclByZXNlbnRhdGlvbi51cGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGV0IHJlc2l6ZUlkO1xuXG4gICAgJCh3aW5kb3cpLnJlc2l6ZSgoKSA9PiB7XG4gICAgICAgIGlmICgkKFwiLnN3aXBlci1hdXRvLXNsaWRlXCIpLmxlbmd0aCA+IDAgJiYgc3dpcGVyQXV0b1NsaWRlKSB7XG4gICAgICAgICAgICAkc3dpcGVyQXV0b1NsaWRlSW5kZXggPSBzd2lwZXJBdXRvU2xpZGUuYWN0aXZlSW5kZXg7XG4gICAgICAgICAgICBzd2lwZXJBdXRvU2xpZGUuZGV0YWNoRXZlbnRzKCk7XG4gICAgICAgICAgICBzd2lwZXJBdXRvU2xpZGUuZGVzdHJveSh0cnVlLCBmYWxzZSk7XG4gICAgICAgICAgICBzd2lwZXJBdXRvU2xpZGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAkKFwiLnN3aXBlci1hdXRvLXNsaWRlIC5zd2lwZXItd3JhcHBlclwiKS5jc3MoXCJ0cmFuc2Zvcm1cIiwgXCJcIikuY3NzKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiLCBcIlwiKTtcbiAgICAgICAgICAgICQoXCIuc3dpcGVyLWF1dG8tc2xpZGUgLnN3aXBlci1zbGlkZVwiKS5jc3MoXCJtYXJnaW4tcmlnaHRcIiwgXCJcIik7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXBlckF1dG9TbGlkZSA9IG5ldyBTd2lwZXIoJy5zd2lwZXItYXV0by1zbGlkZScsIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dUb3VjaE1vdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogODAsXG4gICAgICAgICAgICAgICAgICAgIHByZXZlbnRDbGlja3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBtb3VzZXdoZWVsQ29udHJvbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNwZWVkOiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbDogbnVsbFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbmFwT25SZWxlYXNlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMzAwMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBrZXlib2FyZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLW5leHQtc3R5bGUyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZFbDogJy5zd2lwZXItcHJldi1zdHlsZTInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAxMTk5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA2MFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDk2MDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICA3Njc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDE1XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNpemUoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpcGVyQXV0b1NsaWRlLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzd2lwZXJBdXRvU2xpZGUuc2xpZGVUbygkc3dpcGVyQXV0b1NsaWRlSW5kZXgsIDEwMDAsIGZhbHNlKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCQoXCIuc3dpcGVyLWJvdHRvbS1zY3JvbGxiYXItZnVsbFwiKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQocmVzaXplSWQpO1xuICAgICAgICAgICAgcmVzaXplSWQgPSBzZXRUaW1lb3V0KGRvbmVSZXNpemluZywgMTAwMCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiB1cGRhdGUgYWxsIHN3aXBlciBvbiB3aW5kb3cgcmVzaXplICovXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoJCgnLnN3aXBlci1mdWxsLXNjcmVlbicpLmxlbmd0aCA+IDAgJiYgc3dpcGVyRnVsbClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzd2lwZXJGdWxsLnVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJCgnLnN3aXBlci1hdXRvLWZhZGUnKS5sZW5ndGggPiAwICYmIHN3aXBlckF1dG9GYWRlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN3aXBlckF1dG9GYWRlLnVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJCgnLnN3aXBlci1zbGlkZXItc2Vjb25kJykubGVuZ3RoID4gMCAmJiBzd2lwZXJTZWNvbmQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3dpcGVyU2Vjb25kLnVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJCgnLnN3aXBlci1zbGlkZXItdGhpcmQnKS5sZW5ndGggPiAwICYmIHN3aXBlclRoaXJkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN3aXBlclRoaXJkLnVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJCgnLnN3aXBlci1udW1iZXItcGFnaW5hdGlvbicpLmxlbmd0aCA+IDAgJiYgc3dpcGVyTnVtYmVyKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN3aXBlck51bWJlci51cGRhdGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCQoJy5zd2lwZXItdmVydGljYWwtcGFnaW5hdGlvbicpLmxlbmd0aCA+IDAgJiYgc3dpcGVyVmVydGljYWxQYWdpbmF0aW9uKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN3aXBlclZlcnRpY2FsUGFnaW5hdGlvbi51cGRhdGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCQoJy5zd2lwZXItc2xpZGVyLWNsaWVudHMnKS5sZW5ndGggPiAwICYmIHN3aXBlckNsaWVudHMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3dpcGVyQ2xpZW50cy51cGRhdGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCQoJy5zd2lwZXItc2xpZGVyLWNsaWVudHMtc2Vjb25kJykubGVuZ3RoID4gMCAmJiBzd2lwZXJDbGllbnRzMilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzd2lwZXJDbGllbnRzMi51cGRhdGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCQoJy5zd2lwZXItdGhyZWUtc2xpZGVzJykubGVuZ3RoID4gMCAmJiBzd2lwZXJUaHJlZVNsaWRlcylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzd2lwZXJUaHJlZVNsaWRlcy51cGRhdGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCQoJy5zd2lwZXItZm91ci1zbGlkZXMnKS5sZW5ndGggPiAwICYmIHN3aXBlckZvdXJTbGlkZXMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3dpcGVyRm91clNsaWRlcy51cGRhdGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCQoJy5zd2lwZXItZGVtby1oZWFkZXItc3R5bGUnKS5sZW5ndGggPiAwICYmIHN3aXBlckRlbW9IZWFkZXJTdHlsZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzd2lwZXJEZW1vSGVhZGVyU3R5bGUudXBkYXRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkKCcuc3dpcGVyLWF1dG8tc2xpZGUnKS5sZW5ndGggPiAwICYmIHN3aXBlckF1dG9TbGlkZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzd2lwZXJBdXRvU2xpZGUudXBkYXRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkKCcuc3dpcGVyLWF1dG8taGVpZ2h0LWNvbnRhaW5lcicpLmxlbmd0aCA+IDAgJiYgc3dpcGVyQXV0b0hpZWdodClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzd2lwZXJBdXRvSGllZ2h0LnVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJCgnLnN3aXBlci1tdWx0eS1yb3ctY29udGFpbmVyJykubGVuZ3RoID4gMCAmJiBzd2lwZXJNdWx0eVJvdylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzd2lwZXJNdWx0eVJvdy51cGRhdGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCQoJy5zd2lwZXItYmxvZycpLmxlbmd0aCA+IDAgJiYgc3dpcGVyQmxvZylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzd2lwZXJCbG9nLnVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJCgnLnN3aXBlci1wcmVzZW50YXRpb24nKS5sZW5ndGggPiAwICYmIHN3aXBlclByZXNlbnRhdGlvbilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzd2lwZXJQcmVzZW50YXRpb24udXBkYXRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgaWYgKGlzSUUoKSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCQoJy5zd2lwZXItZnVsbC1zY3JlZW4nKS5sZW5ndGggPiAwICYmIHN3aXBlckZ1bGwpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzd2lwZXJGdWxsLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgkKCcuc3dpcGVyLWF1dG8tZmFkZScpLmxlbmd0aCA+IDAgJiYgc3dpcGVyQXV0b0ZhZGUpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzd2lwZXJBdXRvRmFkZS51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJCgnLnN3aXBlci1zbGlkZXItc2Vjb25kJykubGVuZ3RoID4gMCAmJiBzd2lwZXJTZWNvbmQpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzd2lwZXJTZWNvbmQudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCQoJy5zd2lwZXItc2xpZGVyLXRoaXJkJykubGVuZ3RoID4gMCAmJiBzd2lwZXJUaGlyZClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXBlclRoaXJkLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgkKCcuc3dpcGVyLW51bWJlci1wYWdpbmF0aW9uJykubGVuZ3RoID4gMCAmJiBzd2lwZXJOdW1iZXIpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzd2lwZXJOdW1iZXIudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCQoJy5zd2lwZXItdmVydGljYWwtcGFnaW5hdGlvbicpLmxlbmd0aCA+IDAgJiYgc3dpcGVyVmVydGljYWxQYWdpbmF0aW9uKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVyVmVydGljYWxQYWdpbmF0aW9uLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgkKCcuc3dpcGVyLXNsaWRlci1jbGllbnRzJykubGVuZ3RoID4gMCAmJiBzd2lwZXJDbGllbnRzKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVyQ2xpZW50cy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJCgnLnN3aXBlci1zbGlkZXItY2xpZW50cy1zZWNvbmQnKS5sZW5ndGggPiAwICYmIHN3aXBlckNsaWVudHMyKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVyQ2xpZW50czIudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCQoJy5zd2lwZXItdGhyZWUtc2xpZGVzJykubGVuZ3RoID4gMCAmJiBzd2lwZXJUaHJlZVNsaWRlcylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXBlclRocmVlU2xpZGVzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgkKCcuc3dpcGVyLWZvdXItc2xpZGVzJykubGVuZ3RoID4gMCAmJiBzd2lwZXJGb3VyU2xpZGVzKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVyRm91clNsaWRlcy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJCgnLnN3aXBlci1kZW1vLWhlYWRlci1zdHlsZScpLmxlbmd0aCA+IDAgJiYgc3dpcGVyRGVtb0hlYWRlclN0eWxlKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVyRGVtb0hlYWRlclN0eWxlLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgkKCcuc3dpcGVyLWF1dG8tc2xpZGUnKS5sZW5ndGggPiAwICYmIHN3aXBlckF1dG9TbGlkZSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXBlckF1dG9TbGlkZS51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJCgnLnN3aXBlci1hdXRvLWhlaWdodC1jb250YWluZXInKS5sZW5ndGggPiAwICYmIHN3aXBlckF1dG9IaWVnaHQpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzd2lwZXJBdXRvSGllZ2h0LnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgkKCcuc3dpcGVyLW11bHR5LXJvdy1jb250YWluZXInKS5sZW5ndGggPiAwICYmIHN3aXBlck11bHR5Um93KVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVyTXVsdHlSb3cudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCQoJy5zd2lwZXItYmxvZycpLmxlbmd0aCA+IDAgJiYgc3dpcGVyQmxvZylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXBlckJsb2cudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCQoJy5zd2lwZXItcHJlc2VudGF0aW9uJykubGVuZ3RoID4gMCAmJiBzd2lwZXJQcmVzZW50YXRpb24pXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzd2lwZXJQcmVzZW50YXRpb24udXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9XG5cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGRvbmVSZXNpemluZygpIHtcbiAgICAgICAgaWYgKHN3aXBlckJvdHRvbVNjcm9sbGJhckZ1bGwpIHtcbiAgICAgICAgICAgIHN3aXBlckJvdHRvbVNjcm9sbGJhckZ1bGwuZGV0YWNoRXZlbnRzKCk7XG4gICAgICAgICAgICBzd2lwZXJCb3R0b21TY3JvbGxiYXJGdWxsLmRlc3Ryb3kodHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICBzd2lwZXJCb3R0b21TY3JvbGxiYXJGdWxsID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgJChcIi5zd2lwZXItYm90dG9tLXNjcm9sbGJhci1mdWxsIC5zd2lwZXItd3JhcHBlclwiKS5jc3MoXCJ0cmFuc2Zvcm1cIiwgXCJcIikuY3NzKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiLCBcIlwiKTtcbiAgICAgICAgJChcIi5zd2lwZXItYm90dG9tLXNjcm9sbGJhci1mdWxsIC5zd2lwZXItc2xpZGVcIikuY3NzKFwibWFyZ2luLXJpZ2h0XCIsIFwiXCIpO1xuICAgICAgICAkKCcuc3dpcGVyLWJvdHRvbS1zY3JvbGxiYXItZnVsbCAuc3dpcGVyLXdyYXBwZXInKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAkKCcuc3dpcGVyLWJvdHRvbS1zY3JvbGxiYXItZnVsbCAuc3dpcGVyLXNsaWRlJykucmVtb3ZlQXR0cignc3R5bGUnKTtcblxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA3NjcpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXBlckJvdHRvbVNjcm9sbGJhckZ1bGwgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWJvdHRvbS1zY3JvbGxiYXItZnVsbCcsIHtcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dUb3VjaE1vdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgZ3JhYkN1cnNvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJldmVudENsaWNrczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICAgICAgICAgICAgICAgIGtleWJvYXJkQ29udHJvbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3BlZWQ6IDEwMDAsXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsOiBudWxsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNuYXBPblJlbGVhc2U6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW91c2V3aGVlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGtleWJvYXJkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgc21vb3RoIHNjcm9sbFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiAgICBjb25zdCBzY3JvbGxBbmltYXRpb25UaW1lID0gMTIwMDtcblxuICAgIGNvbnN0IHNjcm9sbEFuaW1hdGlvbiA9ICdlYXNlSW5PdXRFeHBvJztcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2suc21vb3Roc2Nyb2xsJywgJ2Euc2Nyb2xsdG8nLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5oYXNoO1xuICAgICAgICBpZiAoJCh0YXJnZXQpLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpXG4gICAgICAgICAgICAgICAgLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAnc2Nyb2xsVG9wJzogJCh0YXJnZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAub2Zmc2V0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b3BcbiAgICAgICAgICAgICAgICB9LCBzY3JvbGxBbmltYXRpb25UaW1lLCBzY3JvbGxBbmltYXRpb24sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgaHVtYnVyZ2VyIG1lbnUgb25lIHBhZ2UgbmF2aWdhdGlvblxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiAgICBpZiAoJCgnLmZ1bGwtd2lkdGgtcHVsbC1tZW51JykubGVuZ3RoID4gMCkge1xuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmZ1bGwtd2lkdGgtcHVsbC1tZW51IC5pbm5lci1saW5rJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8vJCgnYm9keScpLnJlbW92ZUNsYXNzKCdvdmVyZmxvdy1oaWRkZW4gcG9zaXRpb24tZml4ZWQnKTtcbiAgICAgICAgICAgICQoXCIuZnVsbC13aWR0aC1wdWxsLW1lbnUgLmNsb3NlLWJ1dHRvbi1tZW51XCIpLnRyaWdnZXIoXCJjbGlja1wiKTtcbiAgICAgICAgICAgIGNvbnN0IF90aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IF90aGlzLmF0dHIoXCJocmVmXCIpO1xuICAgICAgICAgICAgICAgIGlmICgkKHRhcmdldCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Njcm9sbFRvcCc6ICQodGFyZ2V0KS5vZmZzZXQoKS50b3BcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIElubmVyIGxpbmtzXG4gICAgaWYgKCQoJy5uYXZiYXItdG9wJykubGVuZ3RoID4gMCB8fCAkKCcubmF2YmFyLXNjcm9sbC10b3AnKS5sZW5ndGggPiAwIHx8ICQoJy5uYXYtdG9wLXNjcm9sbCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgJCgnLmlubmVyLWxpbmsnKS5zbW9vdGhTY3JvbGwoe1xuICAgICAgICAgICAgc3BlZWQ6IDkwMCxcbiAgICAgICAgICAgIG9mZnNldDogMFxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKCcuaW5uZXItbGluaycpLnNtb290aFNjcm9sbCh7XG4gICAgICAgICAgICBzcGVlZDogOTAwLFxuICAgICAgICAgICAgb2Zmc2V0OiAtNTlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgJCgnLnNlY3Rpb24tbGluaycpLnNtb290aFNjcm9sbCh7XG4gICAgICAgIHNwZWVkOiA5MDAsXG4gICAgICAgIG9mZnNldDogMVxuICAgIH0pO1xuXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgLy9QaWVDaGFydCBGb3IgT25lcGFnZSAtIFNUQVJUIENPREVcbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICBpZiAoJCgnLmNoYXJ0MScpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgJCgnLmNoYXJ0MScpLmFwcGVhcigpO1xuICAgICAgICAkKCcuY2hhcnQxJykuZWFzeVBpZUNoYXJ0KHtcbiAgICAgICAgICAgIGJhckNvbG9yOiAnIzkyOTI5MicsXG4gICAgICAgICAgICB0cmFja0NvbG9yOiAnI2Q5ZDlkOScsXG4gICAgICAgICAgICBzY2FsZUNvbG9yOiBmYWxzZSxcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRCb3VuY2UnLFxuICAgICAgICAgICAgc2NhbGVMZW5ndGg6IDEsXG4gICAgICAgICAgICBsaW5lQ2FwOiAncm91bmQnLFxuICAgICAgICAgICAgbGluZVdpZHRoOiAzLCAvLzEyXG4gICAgICAgICAgICBzaXplOiAxNTAsIC8vMTEwXG4gICAgICAgICAgICBhbmltYXRlOiB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uU3RlcChmcm9tLCB0bywgcGVyY2VudCkge1xuICAgICAgICAgICAgICAgICQodGhpcy5lbCkuZmluZCgnLnBlcmNlbnQnKS50ZXh0KE1hdGgucm91bmQocGVyY2VudCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgJChkb2N1bWVudC5ib2R5KS5vbignYXBwZWFyJywgJy5jaGFydDEnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgLy8gdGhpcyBjb2RlIGlzIGV4ZWN1dGVkIGZvciBlYWNoIGFwcGVhcmVkIGVsZW1lbnRcbiAgICAgICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnYXBwZWFyJykpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhcHBlYXInKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmRhdGEoJ2Vhc3lQaWVDaGFydCcpLnVwZGF0ZSgwKS51cGRhdGUoJCh0aGlzKS5kYXRhKCdwZXJjZW50JykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoJCgnLmNoYXJ0MicpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgJCgnLmNoYXJ0MicpLmFwcGVhcigpO1xuICAgICAgICAkKCcuY2hhcnQyJykuZWFzeVBpZUNoYXJ0KHtcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRDaXJjJyxcbiAgICAgICAgICAgIGJhckNvbG9yOiAnI2ZmMjE0ZicsXG4gICAgICAgICAgICB0cmFja0NvbG9yOiAnI2M3YzdjNycsXG4gICAgICAgICAgICBzY2FsZUNvbG9yOiBmYWxzZSxcbiAgICAgICAgICAgIHNjYWxlTGVuZ3RoOiAxLFxuICAgICAgICAgICAgbGluZUNhcDogJ3JvdW5kJyxcbiAgICAgICAgICAgIGxpbmVXaWR0aDogMiwgLy8xMlxuICAgICAgICAgICAgc2l6ZTogMTIwLCAvLzExMFxuICAgICAgICAgICAgYW5pbWF0ZToge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblN0ZXAoZnJvbSwgdG8sIHBlcmNlbnQpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMuZWwpLmZpbmQoJy5wZXJjZW50JykudGV4dChNYXRoLnJvdW5kKHBlcmNlbnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgICQoZG9jdW1lbnQuYm9keSkub24oJ2FwcGVhcicsICcuY2hhcnQyJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8vIHRoaXMgY29kZSBpcyBleGVjdXRlZCBmb3IgZWFjaCBhcHBlYXJlZCBlbGVtZW50XG4gICAgICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2FwcGVhcicpKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYXBwZWFyJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5kYXRhKCdlYXN5UGllQ2hhcnQnKS51cGRhdGUoMCkudXBkYXRlKCQodGhpcykuZGF0YSgncGVyY2VudCcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCQoJy5jaGFydDMnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICQoJy5jaGFydDMnKS5hcHBlYXIoKTtcbiAgICAgICAgJCgnLmNoYXJ0MycpLmVhc3lQaWVDaGFydCh7XG4gICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0Q2lyYycsXG4gICAgICAgICAgICBiYXJDb2xvcjogJyNmZjIxNGYnLFxuICAgICAgICAgICAgdHJhY2tDb2xvcjogJycsXG4gICAgICAgICAgICBzY2FsZUNvbG9yOiBmYWxzZSxcbiAgICAgICAgICAgIHNjYWxlTGVuZ3RoOiAxLFxuICAgICAgICAgICAgbGluZUNhcDogJ3JvdW5kJyxcbiAgICAgICAgICAgIGxpbmVXaWR0aDogMywgLy8xMlxuICAgICAgICAgICAgc2l6ZTogMTQwLCAvLzExMFxuICAgICAgICAgICAgYW5pbWF0ZToge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblN0ZXAoZnJvbSwgdG8sIHBlcmNlbnQpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMuZWwpLmZpbmQoJy5wZXJjZW50JykudGV4dChNYXRoLnJvdW5kKHBlcmNlbnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgICQoZG9jdW1lbnQuYm9keSkub24oJ2FwcGVhcicsICcuY2hhcnQzJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8vIHRoaXMgY29kZSBpcyBleGVjdXRlZCBmb3IgZWFjaCBhcHBlYXJlZCBlbGVtZW50XG4gICAgICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2FwcGVhcicpKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYXBwZWFyJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5kYXRhKCdlYXN5UGllQ2hhcnQnKS51cGRhdGUoMCkudXBkYXRlKCQodGhpcykuZGF0YSgncGVyY2VudCcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIC8vUGllQ2hhcnQgRm9yIE9uZXBhZ2UgLSBFTkQgQ09ERVxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICBwb3J0Zm9saW8gZmlsdGVyXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICBjb25zdCAkcG9ydGZvbGlvX2ZpbHRlciA9ICQoJy5wb3J0Zm9saW8tZ3JpZCcpO1xuICAgICRwb3J0Zm9saW9fZmlsdGVyLmltYWdlc0xvYWRlZCgoKSA9PiB7XG4gICAgICAgICRwb3J0Zm9saW9fZmlsdGVyLmlzb3RvcGUoe1xuICAgICAgICAgICAgbGF5b3V0TW9kZTogJ21hc29ucnknLFxuICAgICAgICAgICAgaXRlbVNlbGVjdG9yOiAnLmdyaWQtaXRlbScsXG4gICAgICAgICAgICBwZXJjZW50UG9zaXRpb246IHRydWUsXG4gICAgICAgICAgICBtYXNvbnJ5OiB7XG4gICAgICAgICAgICAgICAgY29sdW1uV2lkdGg6ICcuZ3JpZC1zaXplcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgICRwb3J0Zm9saW9fZmlsdGVyLmlzb3RvcGUoKTtcbiAgICB9KTtcbiAgICBjb25zdCAkZ3JpZF9zZWxlY3RvcnMgPSAkKCcucG9ydGZvbGlvLWZpbHRlciA+IGxpID4gYScpO1xuICAgICRncmlkX3NlbGVjdG9ycy5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRncmlkX3NlbGVjdG9ycy5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICBjb25zdCBzZWxlY3RvciA9ICQodGhpcykuYXR0cignZGF0YS1maWx0ZXInKTtcbiAgICAgICAgJHBvcnRmb2xpb19maWx0ZXIuZmluZCgnLmdyaWQtaXRlbScpLnJlbW92ZUNsYXNzKCdhbmltYXRlZCcpLmNzcyhcInZpc2liaWxpdHlcIiwgXCJcIik7IC8vIGF2b2lkIHByb2JsZW0gdG8gZmlsdGVyIGFmdGVyIHNvcnRpbmdcbiAgICAgICAgJHBvcnRmb2xpb19maWx0ZXIuZmluZCgnLmdyaWQtaXRlbScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLyogcmVtb3ZlIHBlcnRpY3VsYXIgZWxlbWVudCBmcm9tIFdPVyBhcnJheSB3aGVuIHlvdSBkb24ndCB3YW50IGFuaW1hdGlvbiBvbiBlbGVtZW50IGFmdGVyIERPTSBsZWFkICovXG4gICAgICAgICAgICB3b3cucmVtb3ZlQm94KHRoaXMpO1xuICAgICAgICAgICAgJCh0aGlzKS5jc3MoXCItd2Via2l0LWFuaW1hdGlvblwiLCBcIm5vbmVcIik7XG4gICAgICAgICAgICAkKHRoaXMpLmNzcyhcIi1tb3otYW5pbWF0aW9uXCIsIFwibm9uZVwiKTtcbiAgICAgICAgICAgICQodGhpcykuY3NzKFwiLW1zLWFuaW1hdGlvblwiLCBcIm5vbmVcIik7XG4gICAgICAgICAgICAkKHRoaXMpLmNzcyhcImFuaW1hdGlvblwiLCBcIm5vbmVcIik7XG4gICAgICAgIH0pO1xuICAgICAgICAkcG9ydGZvbGlvX2ZpbHRlci5pc290b3BlKHtmaWx0ZXI6IHNlbGVjdG9yfSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICAkKHdpbmRvdykucmVzaXplKCgpID0+IHtcbiAgICAgICAgaWYgKCFpc01vYmlsZSAmJiAhaXNpUGhvbmVpUGFkKSB7XG4gICAgICAgICAgICAkcG9ydGZvbGlvX2ZpbHRlci5pbWFnZXNMb2FkZWQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAkcG9ydGZvbGlvX2ZpbHRlci5maW5kKCcuZ3JpZC1pdGVtJykucmVtb3ZlQ2xhc3MoJ3dvdycpLnJlbW92ZUNsYXNzKCdhbmltYXRlZCcpOyAvLyBhdm9pZCBwcm9ibGVtIHRvIGZpbHRlciBhZnRlciB3aW5kb3cgcmVzaXplXG4gICAgICAgICAgICAgICAgICAgICRwb3J0Zm9saW9fZmlsdGVyLmlzb3RvcGUoJ2xheW91dCcpO1xuICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0ICRibG9nX2ZpbHRlciA9ICQoJy5ibG9nLWdyaWQnKTtcbiAgICAkYmxvZ19maWx0ZXIuaW1hZ2VzTG9hZGVkKCgpID0+IHtcbiAgICAgICAgJGJsb2dfZmlsdGVyLmlzb3RvcGUoe1xuICAgICAgICAgICAgbGF5b3V0TW9kZTogJ21hc29ucnknLFxuICAgICAgICAgICAgaXRlbVNlbGVjdG9yOiAnLmdyaWQtaXRlbScsXG4gICAgICAgICAgICBwZXJjZW50UG9zaXRpb246IHRydWUsXG4gICAgICAgICAgICBtYXNvbnJ5OiB7XG4gICAgICAgICAgICAgICAgY29sdW1uV2lkdGg6ICcuZ3JpZC1zaXplcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgJCh3aW5kb3cpLnJlc2l6ZSgoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgJGJsb2dfZmlsdGVyLmZpbmQoJy5ncmlkLWl0ZW0nKS5yZW1vdmVDbGFzcygnd293JykucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkJyk7IC8vIGF2b2lkIHByb2JsZW0gdG8gZmlsdGVyIGFmdGVyIHdpbmRvdyByZXNpemVcbiAgICAgICAgICAgICRibG9nX2ZpbHRlci5pc290b3BlKCdsYXlvdXQnKTtcbiAgICAgICAgfSwgMzAwKTtcbiAgICB9KTtcblxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgbGlnaHRib3ggZ2FsbGVyeVxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgJCgnLmxpZ2h0Ym94LWdhbGxlcnknKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgZGVsZWdhdGU6ICdhJyxcbiAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgdExvYWRpbmc6ICdMb2FkaW5nIGltYWdlICMlY3VyciUuLi4nLFxuICAgICAgICBtYWluQ2xhc3M6ICdtZnAtZmFkZScsXG4gICAgICAgIGZpeGVkQ29udGVudFBvczogdHJ1ZSxcbiAgICAgICAgY2xvc2VCdG5JbnNpZGU6IGZhbHNlLFxuICAgICAgICBnYWxsZXJ5OiB7XG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgbmF2aWdhdGVCeUltZ0NsaWNrOiB0cnVlLFxuICAgICAgICAgICAgcHJlbG9hZDogWzAsIDFdIC8vIFdpbGwgcHJlbG9hZCAwIC0gYmVmb3JlIGN1cnJlbnQsIGFuZCAxIGFmdGVyIHRoZSBjdXJyZW50IGltYWdlXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvKiBmb3IgZ3JvdXAgZ2FsbGVyeSAqL1xuICAgIGNvbnN0IGxpZ2h0Ym94Z2FsbGVyeWdyb3VwcyA9IHt9O1xuICAgICQoJy5saWdodGJveC1ncm91cC1nYWxsZXJ5LWl0ZW0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgaWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtZ3JvdXAnKTtcbiAgICAgICAgaWYgKCFsaWdodGJveGdhbGxlcnlncm91cHNbaWRdKSB7XG4gICAgICAgICAgICBsaWdodGJveGdhbGxlcnlncm91cHNbaWRdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgbGlnaHRib3hnYWxsZXJ5Z3JvdXBzW2lkXS5wdXNoKHRoaXMpO1xuICAgIH0pO1xuICAgICQuZWFjaChsaWdodGJveGdhbGxlcnlncm91cHMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgICAgICBjbG9zZU9uQ29udGVudENsaWNrOiB0cnVlLFxuICAgICAgICAgICAgY2xvc2VCdG5JbnNpZGU6IGZhbHNlLFxuICAgICAgICAgICAgZ2FsbGVyeToge2VuYWJsZWQ6IHRydWV9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgJCgnLmxpZ2h0Ym94LXBvcnRmb2xpbycpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICBkZWxlZ2F0ZTogJy5nYWxsZXJ5LWxpbmsnLFxuICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICB0TG9hZGluZzogJ0xvYWRpbmcgaW1hZ2UgIyVjdXJyJS4uLicsXG4gICAgICAgIG1haW5DbGFzczogJ21mcC1mYWRlJyxcbiAgICAgICAgZml4ZWRDb250ZW50UG9zOiB0cnVlLFxuICAgICAgICBjbG9zZUJ0bkluc2lkZTogZmFsc2UsXG4gICAgICAgIGdhbGxlcnk6IHtcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICBuYXZpZ2F0ZUJ5SW1nQ2xpY2s6IGZhbHNlLFxuICAgICAgICAgICAgcHJlbG9hZDogWzAsIDFdIC8vIFdpbGwgcHJlbG9hZCAwIC0gYmVmb3JlIGN1cnJlbnQsIGFuZCAxIGFmdGVyIHRoZSBjdXJyZW50IGltYWdlXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgIHNpbmdsZSBpbWFnZSBsaWdodGJveCAtIHpvb20gYW5pbWF0aW9uXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAkKCcuc2luZ2xlLWltYWdlLWxpZ2h0Ym94JykubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgIGNsb3NlT25Db250ZW50Q2xpY2s6IHRydWUsXG4gICAgICAgIGZpeGVkQ29udGVudFBvczogdHJ1ZSxcbiAgICAgICAgY2xvc2VCdG5JbnNpZGU6IGZhbHNlLFxuICAgICAgICBtYWluQ2xhc3M6ICdtZnAtbm8tbWFyZ2lucyBtZnAtd2l0aC16b29tJywgLy8gY2xhc3MgdG8gcmVtb3ZlIGRlZmF1bHQgbWFyZ2luIGZyb20gbGVmdCBhbmQgcmlnaHQgc2lkZVxuICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgdmVydGljYWxGaXQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgem9vbToge1xuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAgLy8gZG9uJ3QgZm9nZXQgdG8gY2hhbmdlIHRoZSBkdXJhdGlvbiBhbHNvIGluIENTU1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICB6b29tIGdhbGxlcnlcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICQoJy56b29tLWdhbGxlcnknKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgZGVsZWdhdGU6ICdhJyxcbiAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgbWFpbkNsYXNzOiAnbWZwLXdpdGgtem9vbSBtZnAtaW1nLW1vYmlsZScsXG4gICAgICAgIGZpeGVkQ29udGVudFBvczogdHJ1ZSxcbiAgICAgICAgY2xvc2VCdG5JbnNpZGU6IGZhbHNlLFxuICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgdmVydGljYWxGaXQ6IHRydWUsXG4gICAgICAgICAgICB0aXRsZVNyYyhpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZWwuYXR0cigndGl0bGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2FsbGVyeToge1xuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB6b29tOiB7XG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMCwgLy8gZG9uJ3QgZm9nZXQgdG8gY2hhbmdlIHRoZSBkdXJhdGlvbiBhbHNvIGluIENTU1xuICAgICAgICAgICAgb3BlbmVyKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5maW5kKCdpbWcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIC8vTW9kYWwgcG9wdXAgLSBTVEFSVCBDT0RFXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgJCgnLm1vZGFsLXBvcHVwJykubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgIHR5cGU6ICdpbmxpbmUnLFxuICAgICAgICBwcmVsb2FkZXI6IGZhbHNlLFxuICAgICAgICAvLyBtb2RhbDogdHJ1ZSxcbiAgICAgICAgYmxhY2tiZzogdHJ1ZSxcbiAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgICBvcGVuKCkge1xuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5jc3MoJ21hcmdpbi1yaWdodCcsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5wb3B1cC1tb2RhbC1kaXNtaXNzJywgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJC5tYWduaWZpY1BvcHVwLmNsb3NlKCk7XG4gICAgfSk7XG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgLy9Nb2RhbCBwb3B1cCAtIEVORCBDT0RFXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAvL01vZGFsIHBvcHVwIC0gem9vbSBhbmltYXRpb24gLSBTVEFSVCBDT0RFXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgJCgnLnBvcHVwLXdpdGgtem9vbS1hbmltJykubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgIHR5cGU6ICdpbmxpbmUnLFxuICAgICAgICBmaXhlZENvbnRlbnRQb3M6IGZhbHNlLFxuICAgICAgICBmaXhlZEJnUG9zOiB0cnVlLFxuICAgICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICAgICAgY2xvc2VCdG5JbnNpZGU6IHRydWUsXG4gICAgICAgIHByZWxvYWRlcjogZmFsc2UsXG4gICAgICAgIG1pZENsaWNrOiB0cnVlLFxuICAgICAgICByZW1vdmFsRGVsYXk6IDMwMCxcbiAgICAgICAgYmxhY2tiZzogdHJ1ZSxcbiAgICAgICAgbWFpbkNsYXNzOiAnbXktbWZwLXpvb20taW4nXG4gICAgfSk7XG5cbiAgICAkKCcucG9wdXAtd2l0aC1tb3ZlLWFuaW0nKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgdHlwZTogJ2lubGluZScsXG4gICAgICAgIGZpeGVkQ29udGVudFBvczogZmFsc2UsXG4gICAgICAgIGZpeGVkQmdQb3M6IHRydWUsXG4gICAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgICAgICBjbG9zZUJ0bkluc2lkZTogdHJ1ZSxcbiAgICAgICAgcHJlbG9hZGVyOiBmYWxzZSxcbiAgICAgICAgbWlkQ2xpY2s6IHRydWUsXG4gICAgICAgIHJlbW92YWxEZWxheTogMzAwLFxuICAgICAgICBibGFja2JnOiB0cnVlLFxuICAgICAgICBtYWluQ2xhc3M6ICdteS1tZnAtc2xpZGUtYm90dG9tJ1xuICAgIH0pO1xuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIC8vTW9kYWwgcG9wdXAgLSB6b29tIGFuaW1hdGlvbiAtIEVORCBDT0RFXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgIHBvcHVwIHdpdGggZm9ybVxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgJCgnLnBvcHVwLXdpdGgtZm9ybScpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICB0eXBlOiAnaW5saW5lJyxcbiAgICAgICAgcHJlbG9hZGVyOiBmYWxzZSxcbiAgICAgICAgY2xvc2VCdG5JbnNpZGU6IGZhbHNlLFxuICAgICAgICBmaXhlZENvbnRlbnRQb3M6IHRydWUsXG4gICAgICAgIGZvY3VzOiAnI25hbWUnLFxuICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgIGJlZm9yZU9wZW4oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgNzAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3QuZm9jdXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0LmZvY3VzID0gJyNuYW1lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgIHZpZGVvIG1hZ25pZmljIHBvcHVwXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuICAgICQoJy5wb3B1cC15b3V0dWJlLCAucG9wdXAtdmltZW8sIC5wb3B1cC1nb29nbGVtYXAnKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgZGlzYWJsZU9uOiA3MDAsXG4gICAgICAgIHR5cGU6ICdpZnJhbWUnLFxuICAgICAgICBtYWluQ2xhc3M6ICdtZnAtZmFkZScsXG4gICAgICAgIHJlbW92YWxEZWxheTogMTYwLFxuICAgICAgICBwcmVsb2FkZXI6IGZhbHNlLFxuICAgICAgICBmaXhlZENvbnRlbnRQb3M6IHRydWUsXG4gICAgICAgIGNsb3NlQnRuSW5zaWRlOiBmYWxzZVxuICAgIH0pO1xuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgYWpheCBtYWduaWZpYyBwb3B1cCBmb3Igb25lcGFnZSBwb3J0Zm9saW9cbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICQoJy5hamF4LXBvcHVwJykubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgIHR5cGU6ICdhamF4JyxcbiAgICAgICAgYWxpZ25Ub3A6IHRydWUsXG4gICAgICAgIGZpeGVkQ29udGVudFBvczogdHJ1ZSxcbiAgICAgICAgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgLy8gYXMgd2Uga25vdyB0aGF0IHBvcHVwIGNvbnRlbnQgaXMgdGFsbCB3ZSBzZXQgc2Nyb2xsIG92ZXJmbG93IGJ5IGRlZmF1bHQgdG8gYXZvaWQganVtcFxuICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgIG9wZW4oKSB7XG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhciAuY29sbGFwc2UnKS5yZW1vdmVDbGFzcygnaW4nKTtcbiAgICAgICAgICAgICAgICAkKCcubmF2YmFyIGEuZHJvcGRvd24tdG9nZ2xlJykuYWRkQ2xhc3MoJ2NvbGxhcHNlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgIG1lZ2EgbWVudSB3aWR0aFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICQoXCJ1bC5tZWdhLW1lbnUtZnVsbFwiKS5lYWNoKGZ1bmN0aW9uIChpZHgsIGVsbSkge1xuICAgICAgICBsZXQgbWVnYU1lbnVXaWR0aCA9IDA7XG4gICAgICAgICQodGhpcykuY2hpbGRyZW4oJ2xpJykuZWFjaChmdW5jdGlvbiAoaWR4LCBlbG0pIHtcbiAgICAgICAgICAgIGNvbnN0IExJaGVpZ2h0ID0gMDtcbiAgICAgICAgICAgIG1lZ2FNZW51V2lkdGggKz0gJCh0aGlzKS5vdXRlcldpZHRoKCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKHRoaXMpLndpZHRoKG1lZ2FNZW51V2lkdGggKyA5NSk7XG4gICAgICAgIG1lZ2FNZW51V2lkdGggPSAwO1xuICAgIH0pO1xuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgZml0IHZpZGVvc1xuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgJChcIi5maXQtdmlkZW9zXCIpLmZpdFZpZHMoKTtcblxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgZm9ybSB0byBlbWFpbFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgJChcIiNzdWNjZXNzLXN1YnNjcmliZS1uZXdzbGV0dGVyXCIpLmhpZGUoKTtcbiAgICAkKFwiI3N1Y2Nlc3Mtc3Vic2NyaWJlLW5ld3NsZXR0ZXIyXCIpLmhpZGUoKTtcbiAgICAkKFwiI3N1Y2Nlc3MtY29udGFjdC1mb3JtXCIpLmhpZGUoKTtcbiAgICAkKFwiI3N1Y2Nlc3MtcHJvamVjdC1jb250YWN0LWZvcm1cIikuaGlkZSgpO1xuICAgICQoXCIjc3VjY2Vzcy1jb250YWN0LWZvcm0tMlwiKS5oaWRlKCk7XG4gICAgJChcIiNzdWNjZXNzLWNvbnRhY3QtZm9ybS0zXCIpLmhpZGUoKTtcbiAgICAkKFwiI3N1Y2Nlc3MtcHJvamVjdC1jb250YWN0LWZvcm0tNFwiKS5oaWRlKCk7XG5cbiAgICAvL1N1YnNjcmliZSBuZXdzbGV0dGVyIGZvcm1cbiAgICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsICcjYnV0dG9uLXN1YnNjcmliZS1uZXdzbGV0dGVyJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBlcnJvciA9IFZhbGlkYXRpb25zdWJzY3JpYmVuZXdzbGV0dGVyRm9ybSgpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgdXJsOiBcImVtYWlsLXRlbXBsYXRlcy9zdWJzY3JpYmUtbmV3c2xldHRlci5waHBcIixcbiAgICAgICAgICAgICAgICBkYXRhOiAkKFwiI3N1YnNjcmliZW5ld3NsZXR0ZXJmb3JtXCIpLnNlcmlhbGl6ZSgpLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVuLWNvbW1lbnQgYmVsb3cgY29kZSB0byByZWRpcmVjdCB1c2VyIHRvIHRoYW5rIHlvdSBwYWdlLlxuICAgICAgICAgICAgICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmPVwidGhhbmsteW91Lmh0bWxcIjtcblxuICAgICAgICAgICAgICAgICAgICAkKCdpbnB1dFt0eXBlPXRleHRdLHRleHRhcmVhJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnZhbCgnJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAkKFwiI3N1Y2Nlc3Mtc3Vic2NyaWJlLW5ld3NsZXR0ZXJcIikuaHRtbChyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAkKFwiI3N1Y2Nlc3Mtc3Vic2NyaWJlLW5ld3NsZXR0ZXJcIikuZmFkZUluKFwic2xvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI3N1Y2Nlc3Mtc3Vic2NyaWJlLW5ld3NsZXR0ZXInKS5kZWxheSg0MDAwKS5mYWRlT3V0KFwic2xvd1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gVmFsaWRhdGlvbnN1YnNjcmliZW5ld3NsZXR0ZXJGb3JtKCkge1xuICAgICAgICBsZXQgZXJyb3IgPSB0cnVlO1xuICAgICAgICAkKCcjc3Vic2NyaWJlbmV3c2xldHRlcmZvcm0gaW5wdXRbdHlwZT10ZXh0XScpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmICghKC8oLispQCguKyl7Mix9XFwuKC4rKXsyLH0vLnRlc3QoJCh0aGlzKS52YWwoKSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICQoXCIjc3Vic2NyaWJlbmV3c2xldHRlcmZvcm1cIikuZmluZChgaW5wdXQ6ZXEoJHtpbmRleH0pYCkuYWRkQ2xhc3MoXCJyZXF1aXJlZC1lcnJvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKFwiI3N1YnNjcmliZW5ld3NsZXR0ZXJmb3JtXCIpLmZpbmQoYGlucHV0OmVxKCR7aW5kZXh9KWApLnJlbW92ZUNsYXNzKFwicmVxdWlyZWQtZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuXG4gICAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCAnI2J1dHRvbi1zdWJzY3JpYmUtbmV3c2xldHRlcjInLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gVmFsaWRhdGlvbnN1YnNjcmliZW5ld3NsZXR0ZXJGb3JtMigpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgdXJsOiBcImVtYWlsLXRlbXBsYXRlcy9zdWJzY3JpYmUtbmV3c2xldHRlci5waHBcIixcbiAgICAgICAgICAgICAgICBkYXRhOiAkKFwiI3N1YnNjcmliZW5ld3NsZXR0ZXJmb3JtMlwiKS5zZXJpYWxpemUoKSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBVbi1jb21tZW50IGJlbG93IGNvZGUgdG8gcmVkaXJlY3QgdXNlciB0byB0aGFuayB5b3UgcGFnZS5cbiAgICAgICAgICAgICAgICAgICAgLy93aW5kb3cubG9jYXRpb24uaHJlZj1cInRoYW5rLXlvdS5odG1sXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgJCgnaW5wdXRbdHlwZT10ZXh0XSx0ZXh0YXJlYScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS52YWwoJycpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNzdWNjZXNzLXN1YnNjcmliZS1uZXdzbGV0dGVyMlwiKS5odG1sKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICQoXCIjc3VjY2Vzcy1zdWJzY3JpYmUtbmV3c2xldHRlcjJcIikuZmFkZUluKFwic2xvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI3N1Y2Nlc3Mtc3Vic2NyaWJlLW5ld3NsZXR0ZXIyJykuZGVsYXkoNDAwMCkuZmFkZU91dChcInNsb3dcIik7XG5cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBWYWxpZGF0aW9uc3Vic2NyaWJlbmV3c2xldHRlckZvcm0yKCkge1xuICAgICAgICBsZXQgZXJyb3IgPSB0cnVlO1xuICAgICAgICAkKCcjc3Vic2NyaWJlbmV3c2xldHRlcmZvcm0yIGlucHV0W3R5cGU9dGV4dF0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoISgvKC4rKUAoLispezIsfVxcLiguKyl7Mix9Ly50ZXN0KCQodGhpcykudmFsKCkpKSkge1xuICAgICAgICAgICAgICAgICAgICAkKFwiI3N1YnNjcmliZW5ld3NsZXR0ZXJmb3JtMlwiKS5maW5kKGBpbnB1dDplcSgke2luZGV4fSlgKS5hZGRDbGFzcyhcInJlcXVpcmVkLWVycm9yXCIpO1xuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQoXCIjc3Vic2NyaWJlbmV3c2xldHRlcmZvcm0yXCIpLmZpbmQoYGlucHV0OmVxKCR7aW5kZXh9KWApLnJlbW92ZUNsYXNzKFwicmVxdWlyZWQtZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cblxuICAgIC8vQ29udGFjdCB1cyBmb3JtXG4gICAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCAnI2NvbnRhY3QtdXMtYnV0dG9uJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBlcnJvciA9IFZhbGlkYXRpb25Db250YWN0Rm9ybSgpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgdXJsOiBcImVtYWlsLXRlbXBsYXRlcy9jb250YWN0LnBocFwiLFxuICAgICAgICAgICAgICAgIGRhdGE6ICQoXCIjY29udGFjdC1mb3JtXCIpLnNlcmlhbGl6ZSgpLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVuLWNvbW1lbnQgYmVsb3cgY29kZSB0byByZWRpcmVjdCB1c2VyIHRvIHRoYW5rIHlvdSBwYWdlLlxuICAgICAgICAgICAgICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmPVwidGhhbmsteW91Lmh0bWxcIjtcblxuICAgICAgICAgICAgICAgICAgICAkKCdpbnB1dFt0eXBlPXRleHRdLHRleHRhcmVhJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnZhbCgnJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAkKFwiI3N1Y2Nlc3MtY29udGFjdC1mb3JtXCIpLmh0bWwocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNzdWNjZXNzLWNvbnRhY3QtZm9ybVwiKS5mYWRlSW4oXCJzbG93XCIpO1xuICAgICAgICAgICAgICAgICAgICAkKCcjc3VjY2Vzcy1jb250YWN0LWZvcm0nKS5kZWxheSg0MDAwKS5mYWRlT3V0KFwic2xvd1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGZ1bmN0aW9uIFZhbGlkYXRpb25Db250YWN0Rm9ybSgpIHtcbiAgICAgICAgbGV0IGVycm9yID0gdHJ1ZTtcbiAgICAgICAgJCgnI2NvbnRhY3QtZm9ybSBpbnB1dFt0eXBlPXRleHRdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykudmFsKCkgPT0gbnVsbCB8fCAkKHRoaXMpLnZhbCgpID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNjb250YWN0LWZvcm1cIikuZmluZChgaW5wdXQ6ZXEoJHtpbmRleH0pYCkuYWRkQ2xhc3MoXCJyZXF1aXJlZC1lcnJvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKFwiI2NvbnRhY3QtZm9ybVwiKS5maW5kKGBpbnB1dDplcSgke2luZGV4fSlgKS5yZW1vdmVDbGFzcyhcInJlcXVpcmVkLWVycm9yXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT0gMSkge1xuICAgICAgICAgICAgICAgIGlmICghKC8oLispQCguKyl7Mix9XFwuKC4rKXsyLH0vLnRlc3QoJCh0aGlzKS52YWwoKSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICQoXCIjY29udGFjdC1mb3JtXCIpLmZpbmQoYGlucHV0OmVxKCR7aW5kZXh9KWApLmFkZENsYXNzKFwicmVxdWlyZWQtZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNjb250YWN0LWZvcm1cIikuZmluZChgaW5wdXQ6ZXEoJHtpbmRleH0pYCkucmVtb3ZlQ2xhc3MoXCJyZXF1aXJlZC1lcnJvclwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG5cbiAgICAvL0NvbnRhY3QgdXMgZm9ybSAyXG4gICAgJCgnI2NvbnRhY3QtdXMtYnV0dG9uLTInKS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBWYWxpZGF0aW9uQ29udGFjdEZvcm0yKCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICB1cmw6IFwiZW1haWwtdGVtcGxhdGVzL2NvbnRhY3QucGhwXCIsXG4gICAgICAgICAgICAgICAgZGF0YTogJChcIiNjb250YWN0LWZvcm0tMlwiKS5zZXJpYWxpemUoKSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBVbi1jb21tZW50IGJlbG93IGNvZGUgdG8gcmVkaXJlY3QgdXNlciB0byB0aGFuayB5b3UgcGFnZS5cbiAgICAgICAgICAgICAgICAgICAgLy93aW5kb3cubG9jYXRpb24uaHJlZj1cInRoYW5rLXlvdS5odG1sXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgJCgnaW5wdXRbdHlwZT10ZXh0XSx0ZXh0YXJlYScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS52YWwoJycpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNzdWNjZXNzLWNvbnRhY3QtZm9ybS0yXCIpLmh0bWwocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNzdWNjZXNzLWNvbnRhY3QtZm9ybS0yXCIpLmZhZGVJbihcInNsb3dcIik7XG4gICAgICAgICAgICAgICAgICAgICQoJyNzdWNjZXNzLWNvbnRhY3QtZm9ybS0yJykuZGVsYXkoNDAwMCkuZmFkZU91dChcInNsb3dcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBmdW5jdGlvbiBWYWxpZGF0aW9uQ29udGFjdEZvcm0yKCkge1xuICAgICAgICBsZXQgZXJyb3IgPSB0cnVlO1xuICAgICAgICAkKCcjY29udGFjdC1mb3JtLTIgaW5wdXRbdHlwZT10ZXh0XScpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpID09IG51bGwgfHwgJCh0aGlzKS52YWwoKSA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICQoXCIjY29udGFjdC1mb3JtLTJcIikuZmluZChgaW5wdXQ6ZXEoJHtpbmRleH0pYCkuYWRkQ2xhc3MoXCJyZXF1aXJlZC1lcnJvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKFwiI2NvbnRhY3QtZm9ybS0yXCIpLmZpbmQoYGlucHV0OmVxKCR7aW5kZXh9KWApLnJlbW92ZUNsYXNzKFwicmVxdWlyZWQtZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoLyguKylAKC4rKXsyLH1cXC4oLispezIsfS8udGVzdCgkKHRoaXMpLnZhbCgpKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNjb250YWN0LWZvcm0tMlwiKS5maW5kKGBpbnB1dDplcSgke2luZGV4fSlgKS5hZGRDbGFzcyhcInJlcXVpcmVkLWVycm9yXCIpO1xuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQoXCIjY29udGFjdC1mb3JtLTJcIikuZmluZChgaW5wdXQ6ZXEoJHtpbmRleH0pYCkucmVtb3ZlQ2xhc3MoXCJyZXF1aXJlZC1lcnJvclwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuXG4gICAgLy9Db250YWN0IHVzIGZvcm0gM1xuXG4gICAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCAnI2NvbnRhY3QtdXMtYnV0dG9uLTMnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gVmFsaWRhdGlvbkNvbnRhY3RGb3JtMygpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgdXJsOiBcImVtYWlsLXRlbXBsYXRlcy9jb250YWN0LnBocFwiLFxuICAgICAgICAgICAgICAgIGRhdGE6ICQoXCIjY29udGFjdC1mb3JtLTNcIikuc2VyaWFsaXplKCksXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVW4tY29tbWVudCBiZWxvdyBjb2RlIHRvIHJlZGlyZWN0IHVzZXIgdG8gdGhhbmsgeW91IHBhZ2UuXG4gICAgICAgICAgICAgICAgICAgIC8vd2luZG93LmxvY2F0aW9uLmhyZWY9XCJ0aGFuay15b3UuaHRtbFwiO1xuICAgICAgICAgICAgICAgICAgICAkKCdpbnB1dFt0eXBlPXRleHRdLHRleHRhcmVhJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnZhbCgnJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAkKFwiI3N1Y2Nlc3MtY29udGFjdC1mb3JtLTNcIikuaHRtbChyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAkKFwiI3N1Y2Nlc3MtY29udGFjdC1mb3JtLTNcIikuZmFkZUluKFwic2xvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI3N1Y2Nlc3MtY29udGFjdC1mb3JtLTMnKS5kZWxheSg0MDAwKS5mYWRlT3V0KFwic2xvd1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGZ1bmN0aW9uIFZhbGlkYXRpb25Db250YWN0Rm9ybTMoKSB7XG4gICAgICAgIGxldCBlcnJvciA9IHRydWU7XG4gICAgICAgICQoJyNjb250YWN0LWZvcm0tMyBpbnB1dFt0eXBlPXRleHRdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykudmFsKCkgPT0gbnVsbCB8fCAkKHRoaXMpLnZhbCgpID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNjb250YWN0LWZvcm0tM1wiKS5maW5kKGBpbnB1dDplcSgke2luZGV4fSlgKS5hZGRDbGFzcyhcInJlcXVpcmVkLWVycm9yXCIpO1xuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQoXCIjY29udGFjdC1mb3JtLTNcIikuZmluZChgaW5wdXQ6ZXEoJHtpbmRleH0pYCkucmVtb3ZlQ2xhc3MoXCJyZXF1aXJlZC1lcnJvclwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoISgvKC4rKUAoLispezIsfVxcLiguKyl7Mix9Ly50ZXN0KCQodGhpcykudmFsKCkpKSkge1xuICAgICAgICAgICAgICAgICAgICAkKFwiI2NvbnRhY3QtZm9ybS0zXCIpLmZpbmQoYGlucHV0OmVxKCR7aW5kZXh9KWApLmFkZENsYXNzKFwicmVxdWlyZWQtZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNjb250YWN0LWZvcm0tM1wiKS5maW5kKGBpbnB1dDplcSgke2luZGV4fSlgKS5yZW1vdmVDbGFzcyhcInJlcXVpcmVkLWVycm9yXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cblxuICAgIC8vUHJvamVjdCBDb250YWN0IHVzIGZvcm1cbiAgICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsICcjcHJvamVjdC1jb250YWN0LXVzLWJ1dHRvbicsICgpID0+IHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBWYWxpZGF0aW9uUHJvamVjdENvbnRhY3RGb3JtKCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICB1cmw6IFwiZW1haWwtdGVtcGxhdGVzL3Byb2plY3QtY29udGFjdC5waHBcIixcbiAgICAgICAgICAgICAgICBkYXRhOiAkKFwiI3Byb2plY3QtY29udGFjdC1mb3JtXCIpLnNlcmlhbGl6ZSgpLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVuLWNvbW1lbnQgYmVsb3cgY29kZSB0byByZWRpcmVjdCB1c2VyIHRvIHRoYW5rIHlvdSBwYWdlLlxuICAgICAgICAgICAgICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmPVwidGhhbmsteW91Lmh0bWxcIjtcblxuICAgICAgICAgICAgICAgICAgICAkKCdpbnB1dFt0eXBlPXRleHRdLHRleHRhcmVhJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnZhbCgnJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAkKFwiI3N1Y2Nlc3MtcHJvamVjdC1jb250YWN0LWZvcm1cIikuaHRtbChyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAkKFwiI3N1Y2Nlc3MtcHJvamVjdC1jb250YWN0LWZvcm1cIikuZmFkZUluKFwic2xvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI3N1Y2Nlc3MtcHJvamVjdC1jb250YWN0LWZvcm0nKS5kZWxheSg0MDAwKS5mYWRlT3V0KFwic2xvd1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGZ1bmN0aW9uIFZhbGlkYXRpb25Qcm9qZWN0Q29udGFjdEZvcm0oKSB7XG4gICAgICAgIGxldCBlcnJvciA9IHRydWU7XG4gICAgICAgICQoJyNwcm9qZWN0LWNvbnRhY3QtZm9ybSBpbnB1dFt0eXBlPXRleHRdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykudmFsKCkgPT0gbnVsbCB8fCAkKHRoaXMpLnZhbCgpID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNwcm9qZWN0LWNvbnRhY3QtZm9ybVwiKS5maW5kKGBpbnB1dDplcSgke2luZGV4fSlgKS5hZGRDbGFzcyhcInJlcXVpcmVkLWVycm9yXCIpO1xuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQoXCIjcHJvamVjdC1jb250YWN0LWZvcm1cIikuZmluZChgaW5wdXQ6ZXEoJHtpbmRleH0pYCkucmVtb3ZlQ2xhc3MoXCJyZXF1aXJlZC1lcnJvclwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09IDIpIHtcbiAgICAgICAgICAgICAgICBpZiAoISgvKC4rKUAoLispezIsfVxcLiguKyl7Mix9Ly50ZXN0KCQodGhpcykudmFsKCkpKSkge1xuICAgICAgICAgICAgICAgICAgICAkKFwiI3Byb2plY3QtY29udGFjdC1mb3JtXCIpLmZpbmQoYGlucHV0OmVxKCR7aW5kZXh9KWApLmFkZENsYXNzKFwicmVxdWlyZWQtZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNwcm9qZWN0LWNvbnRhY3QtZm9ybVwiKS5maW5kKGBpbnB1dDplcSgke2luZGV4fSlgKS5yZW1vdmVDbGFzcyhcInJlcXVpcmVkLWVycm9yXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cblxuICAgIC8vUHJvamVjdCBDb250YWN0IHVzIGZvcm0gMlxuICAgICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgJyNwcm9qZWN0LWNvbnRhY3QtdXMtNC1idXR0b24nLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gVmFsaWRhdGlvblByb2plY3RDb250YWN0Rm9ybTQoKTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIHVybDogXCJlbWFpbC10ZW1wbGF0ZXMvcHJvamVjdC1jb250YWN0LnBocFwiLFxuICAgICAgICAgICAgICAgIGRhdGE6ICQoXCIjcHJvamVjdC1jb250YWN0LWZvcm0tNFwiKS5zZXJpYWxpemUoKSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBVbi1jb21tZW50IGJlbG93IGNvZGUgdG8gcmVkaXJlY3QgdXNlciB0byB0aGFuayB5b3UgcGFnZS5cbiAgICAgICAgICAgICAgICAgICAgLy93aW5kb3cubG9jYXRpb24uaHJlZj1cInRoYW5rLXlvdS5odG1sXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgJCgnaW5wdXRbdHlwZT10ZXh0XSx0ZXh0YXJlYScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS52YWwoJycpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNzdWNjZXNzLXByb2plY3QtY29udGFjdC1mb3JtLTRcIikuaHRtbChyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAkKFwiI3N1Y2Nlc3MtcHJvamVjdC1jb250YWN0LWZvcm0tNFwiKS5mYWRlSW4oXCJzbG93XCIpO1xuICAgICAgICAgICAgICAgICAgICAkKCcjc3VjY2Vzcy1wcm9qZWN0LWNvbnRhY3QtZm9ybS00JykuZGVsYXkoNDAwMCkuZmFkZU91dChcInNsb3dcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBmdW5jdGlvbiBWYWxpZGF0aW9uUHJvamVjdENvbnRhY3RGb3JtNCgpIHtcbiAgICAgICAgbGV0IGVycm9yID0gdHJ1ZTtcbiAgICAgICAgJCgnI3Byb2plY3QtY29udGFjdC1mb3JtLTQgaW5wdXRbdHlwZT10ZXh0XScpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpID09IG51bGwgfHwgJCh0aGlzKS52YWwoKSA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICQoXCIjcHJvamVjdC1jb250YWN0LWZvcm0tNFwiKS5maW5kKGBpbnB1dDplcSgke2luZGV4fSlgKS5hZGRDbGFzcyhcInJlcXVpcmVkLWVycm9yXCIpO1xuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQoXCIjcHJvamVjdC1jb250YWN0LWZvcm0tNFwiKS5maW5kKGBpbnB1dDplcSgke2luZGV4fSlgKS5yZW1vdmVDbGFzcyhcInJlcXVpcmVkLWVycm9yXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT0gMikge1xuICAgICAgICAgICAgICAgIGlmICghKC8oLispQCguKyl7Mix9XFwuKC4rKXsyLH0vLnRlc3QoJCh0aGlzKS52YWwoKSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICQoXCIjcHJvamVjdC1jb250YWN0LWZvcm0tNFwiKS5maW5kKGBpbnB1dDplcSgke2luZGV4fSlgKS5hZGRDbGFzcyhcInJlcXVpcmVkLWVycm9yXCIpO1xuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQoXCIjcHJvamVjdC1jb250YWN0LWZvcm0tNFwiKS5maW5kKGBpbnB1dDplcSgke2luZGV4fSlgKS5yZW1vdmVDbGFzcyhcInJlcXVpcmVkLWVycm9yXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG5cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgIEVuZCBmb3JtIHRvIGVtYWlsXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgd293IGFuaW1hdGlvbiAtIG9uIHNjcm9sbFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgdmFyIHdvdyA9IG5ldyBXT1coe1xuICAgICAgICBib3hDbGFzczogJ3dvdycsXG4gICAgICAgIGFuaW1hdGVDbGFzczogJ2FuaW1hdGVkJyxcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBtb2JpbGU6IGZhbHNlLFxuICAgICAgICBsaXZlOiB0cnVlXG4gICAgfSk7XG4gICAgJCh3aW5kb3cpLmltYWdlc0xvYWRlZCgoKSA9PiB7XG4gICAgICAgIHdvdy5pbml0KCk7XG4gICAgfSk7XG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICBjb3VudGVyXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAkKCQgPT4ge1xuICAgICAgICBhbmltYXRlY291bnRlcnMoKTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBhbmltYXRlY291bnRlcnMoKSB7XG4gICAgICAgICQoJy50aW1lcicpLmVhY2goY291bnQpO1xuICAgICAgICBmdW5jdGlvbiBjb3VudChvcHRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICBvcHRpb25zID0gJC5leHRlbmQoe30sIG9wdGlvbnMgfHwge30sICR0aGlzLmRhdGEoJ2NvdW50VG9PcHRpb25zJykgfHwge30pO1xuICAgICAgICAgICAgJHRoaXMuY291bnRUbyhvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICBjb3VudGVyIG51bWJlciByZXNldCB3aGlsZSBzY3JvbGxpbmdcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgICAkKCcudGltZXInKS5hcHBlYXIoKTtcbiAgICAkKGRvY3VtZW50LmJvZHkpLm9uKCdhcHBlYXInLCAnLnRpbWVyJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gdGhpcyBjb2RlIGlzIGV4ZWN1dGVkIGZvciBlYWNoIGFwcGVhcmVkIGVsZW1lbnRcbiAgICAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdhcHBlYXInKSkge1xuICAgICAgICAgICAgYW5pbWF0ZWNvdW50ZXJzKCk7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhcHBlYXInKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgICQoJy5jb3VudGRvd24nKS5jb3VudGRvd24oJCgnLmNvdW50ZG93bicpLmF0dHIoXCJkYXRhLWVuZGRhdGVcIikpLm9uKCd1cGRhdGUuY291bnRkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICQodGhpcykuaHRtbChldmVudC5zdHJmdGltZSgnJyArICc8ZGl2IGNsYXNzPVwiY291bnRlci1jb250YWluZXJcIj48ZGl2IGNsYXNzPVwiY291bnRlci1ib3ggZmlyc3RcIj48ZGl2IGNsYXNzPVwibnVtYmVyXCI+JS1EPC9kaXY+PHNwYW4+RGF5JSFkPC9zcGFuPjwvZGl2PicgKyAnPGRpdiBjbGFzcz1cImNvdW50ZXItYm94XCI+PGRpdiBjbGFzcz1cIm51bWJlclwiPiVIPC9kaXY+PHNwYW4+SG91cnM8L3NwYW4+PC9kaXY+JyArICc8ZGl2IGNsYXNzPVwiY291bnRlci1ib3hcIj48ZGl2IGNsYXNzPVwibnVtYmVyXCI+JU08L2Rpdj48c3Bhbj5NaW51dGVzPC9zcGFuPjwvZGl2PicgKyAnPGRpdiBjbGFzcz1cImNvdW50ZXItYm94IGxhc3RcIj48ZGl2IGNsYXNzPVwibnVtYmVyXCI+JVM8L2Rpdj48c3Bhbj5TZWNvbmRzPC9zcGFuPjwvZGl2PjwvZGl2PicpKTtcbiAgICB9KTtcblxuICAgIC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgIGxlZnQgbmF2XG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5yaWdodC1tZW51LWJ1dHRvbicsIGUgPT4ge1xuICAgICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ2xlZnQtbmF2LW9uJyk7XG4gICAgfSk7XG5cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAvLyAgICBoYW1idXJnZXIgbWVudVxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYnRuLWhhbWJ1cmdlcicsICgpID0+IHtcbiAgICAgICAgJCgnLmhhbWJ1cmdlci1tZW51JykudG9nZ2xlQ2xhc3MoJ3Nob3ctbWVudScpO1xuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3Nob3ctbWVudScpO1xuICAgIH0pO1xuXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgLy9zaWRlYmFyIG5hdiBvcGVuXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNtb2JpbGVUb2dnbGVTaWRlbmF2JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJ25hdicpLnRvZ2dsZUNsYXNzKCdzaWRlbWVudS1vcGVuJyk7XG4gICAgfSk7XG5cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAvL2p1c3RpZmllZCBHYWxsZXJ5XG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgJChkb2N1bWVudCkuaW1hZ2VzTG9hZGVkKCgpID0+IHtcbiAgICAgICAgaWYgKCQoXCIuanVzdGlmaWVkLWdhbGxlcnlcIikubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgJChcIi5qdXN0aWZpZWQtZ2FsbGVyeVwiKS5qdXN0aWZpZWRHYWxsZXJ5KHtcbiAgICAgICAgICAgICAgICByb3dIZWlnaHQ6IDQwMCxcbiAgICAgICAgICAgICAgICBtYXhSb3dIZWlnaHQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNhcHRpb25zOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1hcmdpbnM6IDEwLFxuICAgICAgICAgICAgICAgIHdhaXRUaHVtYm5haWxzTG9hZDogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJy5hdHItbmF2Jykub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICQoXCIuYXRyLWRpdlwiKS5hcHBlbmQoXCI8YSBjbGFzcz0nY2xvc2UtY3Jvc3MnIGhyZWY9JyMnPlg8L2E+XCIpO1xuICAgICAgICAkKFwiLmF0ci1kaXZcIikuYW5pbWF0ZSh7XG4gICAgICAgICAgICB3aWR0aDogXCJ0b2dnbGVcIlxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgICQoJy5jbG9zZS1jcm9zcycpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAkKFwiLmF0ci1kaXZcIikuaGlkZSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbWVudVJpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NicC1zcG1lbnUtczInKTtcbiAgICBjb25zdCBzaG93UmlnaHRQdXNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dSaWdodFB1c2gnKTtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICBpZiAoc2hvd1JpZ2h0UHVzaCkge1xuICAgICAgICBzaG93UmlnaHRQdXNoLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjbGFzc2llLnRvZ2dsZSh0aGlzLCAnYWN0aXZlJyk7XG4gICAgICAgICAgICBpZiAobWVudVJpZ2h0KVxuICAgICAgICAgICAgICAgIGNsYXNzaWUudG9nZ2xlKG1lbnVSaWdodCwgJ2NicC1zcG1lbnUtb3BlbicpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IHRlc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UtcHVzaG1lbnUnKTtcbiAgICBpZiAodGVzdCkge1xuICAgICAgICB0ZXN0Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjbGFzc2llLnRvZ2dsZSh0aGlzLCAnYWN0aXZlJyk7XG4gICAgICAgICAgICBpZiAobWVudVJpZ2h0KVxuICAgICAgICAgICAgICAgIGNsYXNzaWUudG9nZ2xlKG1lbnVSaWdodCwgJ2NicC1zcG1lbnUtb3BlbicpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vYmxvZyBwYWdlIGhlYWRlciBhbmltYXRpb25cbiAgICAkKFwiLmJsb2ctaGVhZGVyLXN0eWxlMSBsaVwiKS5ob3ZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5ibG9nLWhlYWRlci1zdHlsZTEgbGkuYmxvZy1jb2x1bW4tYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2Jsb2ctY29sdW1uLWFjdGl2ZScpO1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdibG9nLWNvbHVtbi1hY3RpdmUnKTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2Jsb2ctY29sdW1uLWFjdGl2ZScpO1xuICAgICAgICAkKCcuYmxvZy1oZWFkZXItc3R5bGUxIGxpOmZpcnN0LWNoaWxkJykuYWRkQ2xhc3MoJ2Jsb2ctY29sdW1uLWFjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgLy9iaWcgbWVudSBvcGVuIGNsb3NlIHN0YXJ0XG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgJCgnLmJpZy1tZW51LW9wZW4nKS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgJCgnLmJpZy1tZW51LXJpZ2h0JykuYWRkQ2xhc3MoXCJvcGVuXCIpO1xuICAgIH0pO1xuXG4gICAgJCgnLmJpZy1tZW51LWNsb3NlJykub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICQoJy5iaWctbWVudS1yaWdodCcpLnJlbW92ZUNsYXNzKFwib3BlblwiKTtcbiAgICB9KTtcbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAvL2JpZyBtZW51IG9wZW4gY2xvc2UgZW5kXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgIGluc3RhZ3JhbWZlZWRcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIGlmICgkKCcjaW5zdGFGZWVkLXN0eWxlMScpLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgIGNvbnN0IGluc3RhRmVlZFN0eWxlMSA9IG5ldyBJbnN0YWZlZWQoe1xuICAgICAgICAgICAgdGFyZ2V0OiAnaW5zdGFGZWVkLXN0eWxlMScsXG4gICAgICAgICAgICBnZXQ6ICd1c2VyJyxcbiAgICAgICAgICAgIHVzZXJJZDogNTY0MDA0Njg5NixcbiAgICAgICAgICAgIGxpbWl0OiAnOCcsXG4gICAgICAgICAgICBhY2Nlc3NUb2tlbjogJzU2NDAwNDY4OTYuMTY3N2VkMC5mN2NkODU3NjdlMTI0YTlmOWY4ZDY5OGNiMzMyNTJhMCcsXG4gICAgICAgICAgICByZXNvbHV0aW9uOiBcImxvd19yZXNvbHV0aW9uXCIsXG4gICAgICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBjb2wtc20tMTIgY29sLXhzLTEyXCI+PHNwYW4gY2xhc3M9dGV4dC1jZW50ZXI+Tm8gSW1hZ2VzIEZvdW5kPC9zcGFuPjwvZGl2PidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJjb2wtbWQtMyBjb2wtc20tNiBjb2wteHMtMTIgaW5zdGFmZWVkLXN0eWxlMVwiPjxhIGNsYXNzPVwiaW5zdGEtbGlua1wiIGhyZWY9XCJ7e2xpbmt9fVwiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPVwie3tpbWFnZX19XCIgY2xhc3M9XCJpbnN0YS1pbWFnZVwiIC8+PGRpdiBjbGFzcz1cImluc3RhLWNvdW50c1wiPjxzcGFuPjxpIGNsYXNzPVwidGktaGVhcnRcIj48L2k+IDxzcGFuIGNsYXNzPVwiY291bnQtbnVtYmVyXCI+e3tsaWtlc319PC9zcGFuPjwvc3Bhbj48c3Bhbj48aSBjbGFzcz1cInRpLWNvbW1lbnRcIj48L2k+IDxzcGFuIGNsYXNzPVwiY291bnQtbnVtYmVyXCI+e3tjb21tZW50c319PC9zcGFuPjwvc3Bhbj48L2Rpdj48L2E+PC9kaXY+J1xuICAgICAgICB9KTtcbiAgICAgICAgaW5zdGFGZWVkU3R5bGUxLnJ1bigpO1xuICAgIH1cblxuICAgIGlmICgkKCcjaW5zdGFGZWVkLWFzaWRlJykubGVuZ3RoICE9IDApIHtcbiAgICAgICAgY29uc3QgaW5zdGFGZWVkQXNpZGUgPSBuZXcgSW5zdGFmZWVkKHtcbiAgICAgICAgICAgIHRhcmdldDogJ2luc3RhRmVlZC1hc2lkZScsXG4gICAgICAgICAgICBnZXQ6ICd1c2VyJyxcbiAgICAgICAgICAgIHVzZXJJZDogNTY0MDA0Njg5NixcbiAgICAgICAgICAgIGxpbWl0OiAnNicsXG4gICAgICAgICAgICBhY2Nlc3NUb2tlbjogJzU2NDAwNDY4OTYuMTY3N2VkMC5mN2NkODU3NjdlMTI0YTlmOWY4ZDY5OGNiMzMyNTJhMCcsXG4gICAgICAgICAgICByZXNvbHV0aW9uOiBcImxvd19yZXNvbHV0aW9uXCIsXG4gICAgICAgICAgICBhZnRlcigpIHtcbiAgICAgICAgICAgICAgICBlcXVhbGl6ZUhlaWdodCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGNvbC1zbS0xMiBjb2wteHMtMTJcIj48c3BhbiBjbGFzcz10ZXh0LWNlbnRlcj5ObyBJbWFnZXMgRm91bmQ8L3NwYW4+PC9kaXY+J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnPGxpPjxmaWd1cmU+PGEgaHJlZj1cInt7bGlua319XCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGltZyBzcmM9XCJ7e2ltYWdlfX1cIiBjbGFzcz1cImluc3RhLWltYWdlXCIgLz48c3BhbiBjbGFzcz1cImluc3RhLWNvdW50c1wiPjxpIGNsYXNzPVwidGktaGVhcnRcIj48L2k+e3tsaWtlc319PC9zcGFuPjwvYT48L2ZpZ3VyZT48L2xpPidcbiAgICAgICAgfSk7XG4gICAgICAgIGluc3RhRmVlZEFzaWRlLnJ1bigpO1xuICAgIH1cblxuICAgIGlmICgkKCcjaW5zdGFGZWVkLWZvb3RlcicpLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgIGNvbnN0IGluc3RhRmVlZEZvb3RlciA9IG5ldyBJbnN0YWZlZWQoe1xuICAgICAgICAgICAgdGFyZ2V0OiAnaW5zdGFGZWVkLWZvb3RlcicsXG4gICAgICAgICAgICBnZXQ6ICd1c2VyJyxcbiAgICAgICAgICAgIHVzZXJJZDogNTY0MDA0Njg5NixcbiAgICAgICAgICAgIGxpbWl0OiAnNicsXG4gICAgICAgICAgICBhY2Nlc3NUb2tlbjogJzU2NDAwNDY4OTYuMTY3N2VkMC5mN2NkODU3NjdlMTI0YTlmOWY4ZDY5OGNiMzMyNTJhMCcsXG4gICAgICAgICAgICByZXNvbHV0aW9uOiBcImxvd19yZXNvbHV0aW9uXCIsXG4gICAgICAgICAgICBhZnRlcigpIHtcbiAgICAgICAgICAgICAgICBlcXVhbGl6ZUhlaWdodCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGNvbC1zbS0xMiBjb2wteHMtMTJcIj48c3BhbiBjbGFzcz10ZXh0LWNlbnRlcj5ObyBJbWFnZXMgRm91bmQ8L3NwYW4+PC9kaXY+J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnPGxpPjxmaWd1cmU+PGEgaHJlZj1cInt7bGlua319XCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGltZyBzcmM9XCJ7e2ltYWdlfX1cIiBjbGFzcz1cImluc3RhLWltYWdlXCIgLz48c3BhbiBjbGFzcz1cImluc3RhLWNvdW50c1wiPjxpIGNsYXNzPVwidGktaGVhcnRcIj48L2k+PHNwYW4+e3tsaWtlc319PC9zcGFuPjwvc3Bhbj48L2E+PC9maWd1cmU+PC9saT4nXG4gICAgICAgIH0pO1xuICAgICAgICBpbnN0YUZlZWRGb290ZXIucnVuKCk7XG4gICAgfVxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgaW5zdGFncmFtZmVlZCBlbmRcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgLy9yZXZvbHV0aW9uIFN0YXJ0XG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgaG9tZS1jcmVhdGl2ZS1zdHVkaW9cbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIGlmICgkKFwiI3Jldl9zbGlkZXJfMTUxXzFcIikucmV2b2x1dGlvbiA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV2c2xpZGVyX3Nob3dEb3VibGVKcXVlcnlFcnJvcihcIiNyZXZfc2xpZGVyXzE1MV8xXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjcmV2X3NsaWRlcl8xNTFfMVwiKS5zaG93KCkucmV2b2x1dGlvbih7XG4gICAgICAgICAgICBzbGlkZXJUeXBlOiBcInN0YW5kYXJkXCIsXG4gICAgICAgICAgICBqc0ZpbGVMb2NhdGlvbjogXCJyZXZvbHV0aW9uL2pzL1wiLFxuICAgICAgICAgICAgc2xpZGVyTGF5b3V0OiBcImZ1bGxzY3JlZW5cIixcbiAgICAgICAgICAgIGRvdHRlZE92ZXJsYXk6IFwibm9uZVwiLFxuICAgICAgICAgICAgZGVsYXk6IDkwMDAsXG4gICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgICAgICAga2V5Ym9hcmROYXZpZ2F0aW9uOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgIGtleWJvYXJkX2RpcmVjdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgICAgIG1vdXNlU2Nyb2xsTmF2aWdhdGlvbjogXCJvZmZcIixcbiAgICAgICAgICAgICAgICBtb3VzZVNjcm9sbFJldmVyc2U6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgIG9uSG92ZXJTdG9wOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgIHRvdWNoOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoZW5hYmxlZDogXCJvblwiLFxuICAgICAgICAgICAgICAgICAgICBzd2lwZV90aHJlc2hvbGQ6IDc1LFxuICAgICAgICAgICAgICAgICAgICBzd2lwZV9taW5fdG91Y2hlczogMSxcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVfZGlyZWN0aW9uOiBcImhvcml6b250YWxcIixcbiAgICAgICAgICAgICAgICAgICAgZHJhZ19ibG9ja192ZXJ0aWNhbDogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFycm93czoge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZTogXCJ1cmFudXNcIixcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBoaWRlX29ubW9iaWxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaGlkZV9vdmVyOiA0NzksXG4gICAgICAgICAgICAgICAgICAgIGhpZGVfb25sZWF2ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHRtcDogJycsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhfYWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdl9hbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhfb2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgdl9vZmZzZXQ6IDBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhfYWxpZ246IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZfYWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoX29mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZfb2Zmc2V0OiAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzcG9uc2l2ZUxldmVsczogWzEyNDAsIDEwMjQsIDc3OCwgNDgwXSxcbiAgICAgICAgICAgIHZpc2liaWxpdHlMZXZlbHM6IFsxMjQwLCAxMDI0LCA3NzgsIDQ4MF0sXG4gICAgICAgICAgICBncmlkd2lkdGg6IFsxMjQwLCAxMDI0LCA3NzgsIDQ4MF0sXG4gICAgICAgICAgICBncmlkaGVpZ2h0OiBbODY4LCA3NjgsIDk2MCwgNzIwXSxcbiAgICAgICAgICAgIGxhenlUeXBlOiBcIm5vbmVcIixcbiAgICAgICAgICAgIHNjcm9sbGVmZmVjdDoge1xuICAgICAgICAgICAgICAgIGJsdXI6IFwib25cIixcbiAgICAgICAgICAgICAgICBtYXhibHVyOiBcIjIwXCIsXG4gICAgICAgICAgICAgICAgb25fc2xpZGViZzogXCJvblwiLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogXCJ0b3BcIixcbiAgICAgICAgICAgICAgICBtdWx0aXBsaWNhdG9yOiBcIjJcIixcbiAgICAgICAgICAgICAgICBtdWx0aXBsaWNhdG9yX2xheWVyczogXCIyXCIsXG4gICAgICAgICAgICAgICAgdGlsdDogXCIxMFwiLFxuICAgICAgICAgICAgICAgIGRpc2FibGVfb25fbW9iaWxlOiBcIm9mZlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFyYWxsYXg6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcInNjcm9sbFwiLFxuICAgICAgICAgICAgICAgIG9yaWdvOiBcInNsaWRlcmNlbnRlclwiLFxuICAgICAgICAgICAgICAgIHNwZWVkOiA0MDAsXG4gICAgICAgICAgICAgICAgbGV2ZWxzOiBbNSwgMTAsIDE1LCAyMCwgMjUsIDMwLCAzNSwgNDAsIDQ1LCA0NiwgNDcsIDQ4LCA0OSwgNTAsIDUxLCA1NV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaGFkb3c6IDAsXG4gICAgICAgICAgICBzcGlubmVyOiBcInNwaW5uZXIzXCIsXG4gICAgICAgICAgICBzdG9wTG9vcDogXCJvZmZcIixcbiAgICAgICAgICAgIHN0b3BBZnRlckxvb3BzOiAtMSxcbiAgICAgICAgICAgIHN0b3BBdFNsaWRlOiAtMSxcbiAgICAgICAgICAgIHNodWZmbGU6IFwib2ZmXCIsXG4gICAgICAgICAgICBhdXRvSGVpZ2h0OiBcIm9mZlwiLFxuICAgICAgICAgICAgZnVsbFNjcmVlbkF1dG9XaWR0aDogXCJvZmZcIixcbiAgICAgICAgICAgIGZ1bGxTY3JlZW5BbGlnbkZvcmNlOiBcIm9mZlwiLFxuICAgICAgICAgICAgZnVsbFNjcmVlbk9mZnNldENvbnRhaW5lcjogXCJcIixcbiAgICAgICAgICAgIGZ1bGxTY3JlZW5PZmZzZXQ6IFwiMHB4XCIsXG4gICAgICAgICAgICBoaWRlVGh1bWJzT25Nb2JpbGU6IFwib2ZmXCIsXG4gICAgICAgICAgICBoaWRlU2xpZGVyQXRMaW1pdDogMCxcbiAgICAgICAgICAgIGhpZGVDYXB0aW9uQXRMaW1pdDogMCxcbiAgICAgICAgICAgIGhpZGVBbGxDYXB0aW9uQXRMaWxtaXQ6IDAsXG4gICAgICAgICAgICBkZWJ1Z01vZGU6IGZhbHNlLFxuICAgICAgICAgICAgZmFsbGJhY2tzOiB7XG4gICAgICAgICAgICAgICAgc2ltcGxpZnlBbGw6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgbmV4dFNsaWRlT25XaW5kb3dGb2N1czogXCJvZmZcIixcbiAgICAgICAgICAgICAgICBkaXNhYmxlRm9jdXNMaXN0ZW5lcjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgaG9tZS1jbGFzc2ljLXdlYi1hZ2VuY3lcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIGlmICgkKFwiI3Jldl9zbGlkZXJfMTE3NF8xXCIpLnJldm9sdXRpb24gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldnNsaWRlcl9zaG93RG91YmxlSnF1ZXJ5RXJyb3IoXCIjcmV2X3NsaWRlcl8xMTc0XzFcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiNyZXZfc2xpZGVyXzExNzRfMVwiKS5zaG93KCkucmV2b2x1dGlvbih7XG4gICAgICAgICAgICBzbGlkZXJUeXBlOiBcImhlcm9cIixcbiAgICAgICAgICAgIGpzRmlsZUxvY2F0aW9uOiBcInJldm9sdXRpb24vanMvXCIsXG4gICAgICAgICAgICBzbGlkZXJMYXlvdXQ6IFwiZnVsbHNjcmVlblwiLFxuICAgICAgICAgICAgZG90dGVkT3ZlcmxheTogXCJub25lXCIsXG4gICAgICAgICAgICBkZWxheTogOTAwMCxcbiAgICAgICAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXNwb25zaXZlTGV2ZWxzOiBbMTI0MCwgMTAyNCwgNzc4LCA0ODBdLFxuICAgICAgICAgICAgdmlzaWJpbGl0eUxldmVsczogWzEyNDAsIDEwMjQsIDc3OCwgNDgwXSxcbiAgICAgICAgICAgIGdyaWR3aWR0aDogWzEyNDAsIDEwMjQsIDc3OCwgNDgwXSxcbiAgICAgICAgICAgIGdyaWRoZWlnaHQ6IFs4NjgsIDc2OCwgOTYwLCA3MjBdLFxuICAgICAgICAgICAgbGF6eVR5cGU6IFwibm9uZVwiLFxuICAgICAgICAgICAgcGFyYWxsYXg6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcInNjcm9sbFwiLFxuICAgICAgICAgICAgICAgIG9yaWdvOiBcInNsaWRlcmNlbnRlclwiLFxuICAgICAgICAgICAgICAgIHNwZWVkOiA0MDAsXG4gICAgICAgICAgICAgICAgbGV2ZWxzOiBbMTAsIDE1LCAyMCwgMjUsIDMwLCAzNSwgNDAsIC0xMCwgLTE1LCAtMjAsIC0yNSwgLTMwLCAtMzUsIC00MCwgLTQ1LCA1NV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaGFkb3c6IDAsXG4gICAgICAgICAgICBzcGlubmVyOiBcIm9mZlwiLFxuICAgICAgICAgICAgYXV0b0hlaWdodDogXCJvZmZcIixcbiAgICAgICAgICAgIGZ1bGxTY3JlZW5BdXRvV2lkdGg6IFwib2ZmXCIsXG4gICAgICAgICAgICBmdWxsU2NyZWVuQWxpZ25Gb3JjZTogXCJvZmZcIixcbiAgICAgICAgICAgIGZ1bGxTY3JlZW5PZmZzZXRDb250YWluZXI6IFwiXCIsXG4gICAgICAgICAgICBkaXNhYmxlUHJvZ3Jlc3NCYXI6IFwib25cIixcbiAgICAgICAgICAgIGhpZGVUaHVtYnNPbk1vYmlsZTogXCJvZmZcIixcbiAgICAgICAgICAgIGhpZGVTbGlkZXJBdExpbWl0OiAwLFxuICAgICAgICAgICAgaGlkZUNhcHRpb25BdExpbWl0OiAwLFxuICAgICAgICAgICAgaGlkZUFsbENhcHRpb25BdExpbG1pdDogMCxcbiAgICAgICAgICAgIGRlYnVnTW9kZTogZmFsc2UsXG4gICAgICAgICAgICBmYWxsYmFja3M6IHtcbiAgICAgICAgICAgICAgICBzaW1wbGlmeUFsbDogXCJvZmZcIixcbiAgICAgICAgICAgICAgICBkaXNhYmxlRm9jdXNMaXN0ZW5lcjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgaG9tZS1jbGFzc2ljLWNvcnBvcmF0ZVxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgaWYgKCQoXCIjcmV2X3NsaWRlcl8xMDc4XzFcIikucmV2b2x1dGlvbiA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV2c2xpZGVyX3Nob3dEb3VibGVKcXVlcnlFcnJvcihcIiNyZXZfc2xpZGVyXzEwNzhfMVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI3Jldl9zbGlkZXJfMTA3OF8xXCIpLnNob3coKS5yZXZvbHV0aW9uKHtcbiAgICAgICAgICAgIHNsaWRlclR5cGU6IFwic3RhbmRhcmRcIixcbiAgICAgICAgICAgIGpzRmlsZUxvY2F0aW9uOiBcInJldm9sdXRpb24vanMvXCIsXG4gICAgICAgICAgICBzbGlkZXJMYXlvdXQ6IFwiZnVsbHNjcmVlblwiLFxuICAgICAgICAgICAgZG90dGVkT3ZlcmxheTogXCJub25lXCIsXG4gICAgICAgICAgICBkZWxheTogOTAwMCxcbiAgICAgICAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgICAgICAgICBrZXlib2FyZE5hdmlnYXRpb246IFwib25cIixcbiAgICAgICAgICAgICAgICBrZXlib2FyZF9kaXJlY3Rpb246IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICAgICAgICAgIG1vdXNlU2Nyb2xsTmF2aWdhdGlvbjogXCJvZmZcIixcbiAgICAgICAgICAgICAgICBtb3VzZVNjcm9sbFJldmVyc2U6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgIG9uSG92ZXJTdG9wOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgIHRvdWNoOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoZW5hYmxlZDogXCJvblwiLFxuICAgICAgICAgICAgICAgICAgICBzd2lwZV90aHJlc2hvbGQ6IDc1LFxuICAgICAgICAgICAgICAgICAgICBzd2lwZV9taW5fdG91Y2hlczogMSxcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVfZGlyZWN0aW9uOiBcImhvcml6b250YWxcIixcbiAgICAgICAgICAgICAgICAgICAgZHJhZ19ibG9ja192ZXJ0aWNhbDogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgIGFycm93czoge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZTogXCJ6ZXVzXCIsXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgaGlkZV9vbm1vYmlsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgaGlkZV91bmRlcjogNjAwLFxuICAgICAgICAgICAgICAgICAgICBoaWRlX29ubGVhdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGhpZGVfZGVsYXk6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgaGlkZV9kZWxheV9tb2JpbGU6IDEyMDAsXG4gICAgICAgICAgICAgICAgICAgIHRtcDogJzxkaXYgY2xhc3M9XCJ0cC10aXRsZS13cmFwXCI+ICBcdDxkaXYgY2xhc3M9XCJ0cC1hcnItaW1naG9sZGVyXCI+PC9kaXY+IDwvZGl2PicsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhfYWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdl9hbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhfb2Zmc2V0OiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZfb2Zmc2V0OiAwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoX2FsaWduOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2X2FsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaF9vZmZzZXQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgdl9vZmZzZXQ6IDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAsXG4gICAgICAgICAgICAgICAgYnVsbGV0czoge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGhpZGVfb25tb2JpbGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBoaWRlX3VuZGVyOiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiBcImhlcm1lc1wiLFxuICAgICAgICAgICAgICAgICAgICBoaWRlX29ubGVhdmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBoaWRlX2RlbGF5OiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIGhpZGVfZGVsYXlfbW9iaWxlOiAxMjAwLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICAgICAgICAgICAgICBoX2FsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICB2X2FsaWduOiBcImJvdHRvbVwiLFxuICAgICAgICAgICAgICAgICAgICBoX29mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgdl9vZmZzZXQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICBzcGFjZTogOCxcbiAgICAgICAgICAgICAgICAgICAgdG1wOiAnPHNwYW4gY2xhc3M9XCJ0cC1idWxsZXQtaW1nLXdyYXBcIj4gIDxzcGFuIGNsYXNzPVwidHAtYnVsbGV0LWltYWdlXCI+PC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz1cInRwLWJ1bGxldC10aXRsZVwiPnt7dGl0bGV9fTwvc3Bhbj4nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZpZXdQb3J0OiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG91dG9mOiBcInBhdXNlXCIsXG4gICAgICAgICAgICAgICAgdmlzaWJsZV9hcmVhOiBcIjgwJVwiLFxuICAgICAgICAgICAgICAgIHByZXNpemU6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzcG9uc2l2ZUxldmVsczogWzEyNDAsIDEwMjQsIDc3OCwgNDgwXSxcbiAgICAgICAgICAgIHZpc2liaWxpdHlMZXZlbHM6IFsxMjQwLCAxMDI0LCA3NzgsIDQ4MF0sXG4gICAgICAgICAgICBncmlkd2lkdGg6IFsxMjQwLCAxMDI0LCA3NzgsIDQ4MF0sXG4gICAgICAgICAgICBncmlkaGVpZ2h0OiBbNjAwLCA2MDAsIDUwMCwgNDAwXSxcbiAgICAgICAgICAgIGxhenlUeXBlOiBcIm5vbmVcIixcbiAgICAgICAgICAgIHBhcmFsbGF4OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJtb3VzZVwiLFxuICAgICAgICAgICAgICAgIG9yaWdvOiBcInNsaWRlcmNlbnRlclwiLFxuICAgICAgICAgICAgICAgIHNwZWVkOiAyMDAwLFxuICAgICAgICAgICAgICAgIGxldmVsczogWzIsIDMsIDQsIDUsIDYsIDcsIDEyLCAxNiwgMTAsIDUwLCA0NiwgNDcsIDQ4LCA0OSwgNTAsIDU1XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNoYWRvdzogMCxcbiAgICAgICAgICAgIHNwaW5uZXI6IFwib2ZmXCIsXG4gICAgICAgICAgICBzdG9wTG9vcDogXCJvZmZcIixcbiAgICAgICAgICAgIHN0b3BBZnRlckxvb3BzOiAtMSxcbiAgICAgICAgICAgIHN0b3BBdFNsaWRlOiAtMSxcbiAgICAgICAgICAgIHNodWZmbGU6IFwib2ZmXCIsXG4gICAgICAgICAgICBhdXRvSGVpZ2h0OiBcIm9mZlwiLFxuICAgICAgICAgICAgaGlkZVRodW1ic09uTW9iaWxlOiBcIm9mZlwiLFxuICAgICAgICAgICAgaGlkZVNsaWRlckF0TGltaXQ6IDAsXG4gICAgICAgICAgICBoaWRlQ2FwdGlvbkF0TGltaXQ6IDAsXG4gICAgICAgICAgICBoaWRlQWxsQ2FwdGlvbkF0TGlsbWl0OiAwLFxuICAgICAgICAgICAgZGVidWdNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgIGZhbGxiYWNrczoge1xuICAgICAgICAgICAgICAgIHNpbXBsaWZ5QWxsOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgIG5leHRTbGlkZU9uV2luZG93Rm9jdXM6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgZGlzYWJsZUZvY3VzTGlzdGVuZXI6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAvL3Jldm9sdXRpb24gRW5kXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAvL21hZ25pZmljUG9wdXAgU3RhcnRcbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAkKCcuaGVhZGVyLXNlYXJjaC1mb3JtJykubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgIG1haW5DbGFzczogJ21mcC1mYWRlJyxcbiAgICAgICAgY2xvc2VPbkJnQ2xpY2s6IHRydWUsXG4gICAgICAgIHByZWxvYWRlcjogZmFsc2UsXG4gICAgICAgIC8vIGZvciB3aGl0ZSBiYWNrZ3JpdW5kXG4gICAgICAgIGZpeGVkQ29udGVudFBvczogZmFsc2UsXG4gICAgICAgIGNsb3NlQnRuSW5zaWRlOiBmYWxzZSxcbiAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgICBvcGVuKCkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAkKCcuc2VhcmNoLWlucHV0JykuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgICAgICQoJyNzZWFyY2gtaGVhZGVyJykucGFyZW50KCkuYWRkQ2xhc3MoJ3NlYXJjaC1wb3B1cCcpO1xuICAgICAgICAgICAgICAgIGlmICghaXNNb2JpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdvdmVyZmxvdy1oaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgLy8kKCdib2R5JykuYWRkQ2xhc3MoJ3Bvc2l0aW9uLWZpeGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnd2lkdGgtMTAwJyk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2V3aGVlbCA9IFNjcm9sbFN0b3A7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnYm9keSwgaHRtbCcpLm9uKCd0b3VjaG1vdmUnLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsb3NlKCkge1xuICAgICAgICAgICAgICAgIGlmICghaXNNb2JpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdvdmVyZmxvdy1oaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgLy8kKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3Bvc2l0aW9uLWZpeGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnd2lkdGgtMTAwJyk7XG4gICAgICAgICAgICAgICAgICAgICQoJyNzZWFyY2gtaGVhZGVyIGlucHV0W3R5cGU9dGV4dF0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnZhbCgnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNzZWFyY2gtaGVhZGVyXCIpLmZpbmQoYGlucHV0OmVxKCR7aW5kZXh9KWApLmNzcyh7XCJib3JkZXJcIjogXCJub25lXCIsIFwiYm9yZGVyLWJvdHRvbVwiOiBcIjJweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNSlcIn0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQub25tb3VzZXdoZWVsID0gU2Nyb2xsU3RhcnQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnYm9keSwgaHRtbCcpLnVuYmluZCgndG91Y2htb3ZlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAvL21hZ25pZmljUG9wdXAgRW5kXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgJChcImlucHV0LnNlYXJjaC1pbnB1dFwiKS5vbihcImtleXByZXNzXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LndoaWNoID09IDEzICYmICFpc01vYmlsZSkge1xuICAgICAgICAgICAgJChcImJ1dHRvbi5zZWFyY2gtYnV0dG9uXCIpLnRyaWdnZXIoXCJjbGlja1wiKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoXCJpbnB1dC5zZWFyY2gtaW5wdXRcIikub24oXCJrZXl1cFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKCQodGhpcykudmFsKCkgPT0gbnVsbCB8fCAkKHRoaXMpLnZhbCgpID09IFwiXCIpIHtcbiAgICAgICAgICAgICQodGhpcykuY3NzKHtcImJvcmRlclwiOiBcIm5vbmVcIiwgXCJib3JkZXItYm90dG9tXCI6IFwiMnB4IHNvbGlkIHJlZFwifSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKHRoaXMpLmNzcyh7XCJib3JkZXJcIjogXCJub25lXCIsIFwiYm9yZGVyLWJvdHRvbVwiOiBcIjJweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNSlcIn0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKFwiZm9ybS5zZWFyY2gtZm9ybSwgZm9ybS5zZWFyY2gtZm9ybS1yZXN1bHRcIikuc3VibWl0KGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBjb25zdCBlcnJvciA9IHZhbGlkYXRpb25TZWFyY2hGb3JtKCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgbGV0IGFjdGlvbiA9ICQodGhpcykuYXR0cignYWN0aW9uJyk7XG4gICAgICAgICAgICBhY3Rpb24gPSBhY3Rpb24gPT0gJyMnIHx8IGFjdGlvbiA9PSAnJyA/ICdibG9nLWdyaWQtM2NvbHVtbnMuaHRtbCcgOiBhY3Rpb247XG4gICAgICAgICAgICBhY3Rpb24gPSBgJHthY3Rpb259PyR7JCh0aGlzKS5zZXJpYWxpemUoKX1gO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gYWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgJy5uYXZiYXIgLm5hdmJhci1jb2xsYXBzZSBhLmRyb3Bkb3duLXRvZ2dsZSwgLmFjY29yZGlvbi1zdHlsZTEgLnBhbmVsLWhlYWRpbmcgYSwgLmFjY29yZGlvbi1zdHlsZTIgLnBhbmVsLWhlYWRpbmcgYSwgLmFjY29yZGlvbi1zdHlsZTMgLnBhbmVsLWhlYWRpbmcgYSwgLnRvZ2dsZXMgLnBhbmVsLWhlYWRpbmcgYSwgLnRvZ2dsZXMtc3R5bGUyIC5wYW5lbC1oZWFkaW5nIGEsIC50b2dnbGVzLXN0eWxlMyAucGFuZWwtaGVhZGluZyBhLCBhLmNhcm91c2VsLWNvbnRyb2wsIC5uYXYtdGFicyBhW2RhdGEtdG9nZ2xlPVwidGFiXCJdLCBhLnNob3BwaW5nLWNhcnQnLCBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ3RvdWNoc3RhcnQgY2xpY2snLCAnYm9keScsIGUgPT4ge1xuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA5OTIpIHtcbiAgICAgICAgICAgIGlmICghJCgnLm5hdmJhci1jb2xsYXBzZScpLmhhcyhlLnRhcmdldCkuaXMoJy5uYXZiYXItY29sbGFwc2UnKSAmJiAkKCcubmF2YmFyLWNvbGxhcHNlJykuaGFzQ2xhc3MoJ2luJykgJiYgISQoZS50YXJnZXQpLmhhc0NsYXNzKCduYXZiYXItdG9nZ2xlJykpIHtcbiAgICAgICAgICAgICAgICAkKCcubmF2YmFyLWNvbGxhcHNlJykuY29sbGFwc2UoJ2hpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghJCgnLm5hdmJhci1jb2xsYXBzZScpLmhhcyhlLnRhcmdldCkuaXMoJy5uYXZiYXItY29sbGFwc2UnKSAmJiAkKCcubmF2YmFyLWNvbGxhcHNlIHVsJykuaGFzQ2xhc3MoJ2luJykpIHtcbiAgICAgICAgICAgICAgICAkKCcubmF2YmFyLWNvbGxhcHNlJykuZmluZCgnYS5kcm9wZG93bi10b2dnbGUnKS5hZGRDbGFzcygnY29sbGFwc2VkJyk7XG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhci1jb2xsYXBzZScpLmZpbmQoJ3VsLmRyb3Bkb3duLW1lbnUnKS5yZW1vdmVDbGFzcygnaW4nKTtcbiAgICAgICAgICAgICAgICAkKCcubmF2YmFyLWNvbGxhcHNlIGEuZHJvcGRvd24tdG9nZ2xlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcubmF2YmFyLWNvbGxhcHNlIGEuZHJvcGRvd24tdG9nZ2xlJykub24oJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAkKCcubmF2YmFyLWNvbGxhcHNlIGEuZHJvcGRvd24tdG9nZ2xlJykubm90KHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKVxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgJCgnYnV0dG9uLm5hdmJhci10b2dnbGUnKS5vbihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICBpZiAoaXNNb2JpbGUpIHtcbiAgICAgICAgICAgICQoXCIuY2FydC1jb250ZW50XCIpLmNzcygnb3BhY2l0eScsICcwJyk7XG4gICAgICAgICAgICAkKFwiLmNhcnQtY29udGVudFwiKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJ2EuZHJvcGRvd24tdG9nZ2xlJykub24oXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgaWYgKGlzTW9iaWxlKSB7XG4gICAgICAgICAgICAkKFwiLmNhcnQtY29udGVudFwiKS5jc3MoJ29wYWNpdHknLCAnMCcpO1xuICAgICAgICAgICAgJChcIi5jYXJ0LWNvbnRlbnRcIikuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbigndG91Y2hzdGFydCBjbGljaycsICcubmF2YmFyLWNvbGxhcHNlIFtkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJdJywgZnVuY3Rpb24gKGV2ZW50KSB7XG5cbiAgICAgICAgY29uc3QgJGlubmVyTGlua0xJID0gJCh0aGlzKS5wYXJlbnRzKCd1bC5uYXZiYXItbmF2JykuZmluZCgnbGkuZHJvcGRvd24gYS5pbm5lci1saW5rJykucGFyZW50KCdsaS5kcm9wZG93bicpO1xuICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2lubmVyLWxpbmsnKSAmJiAhJCh0aGlzKS5oYXNDbGFzcygnZHJvcGRvd24tdG9nZ2xlJykgJiYgJGlubmVyTGlua0xJLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgICAgICRpbm5lckxpbmtMSS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRhcmdldCA9ICQodGhpcykuYXR0cigndGFyZ2V0Jyk7XG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSA5OTEgJiYgJCh0aGlzKS5hdHRyKCdocmVmJykgJiYgJCh0aGlzKS5hdHRyKCdocmVmJykuaW5kZXhPZihcIiNcIikgPD0gLTEgJiYgISQoZXZlbnQudGFyZ2V0KS5pcygnaScpKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSB7XG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oJCh0aGlzKS5hdHRyKCdocmVmJyksIFwiX2JsYW5rXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRhcmdldClcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB3aW5kb3cub3BlbigkKHRoaXMpLmF0dHIoJ2hyZWYnKSwgdGFyZ2V0KTtcblxuICAgICAgICB9IGVsc2UgaWYgKCQod2luZG93KS53aWR0aCgpID4gOTkxICYmICQodGhpcykuYXR0cignaHJlZicpLmluZGV4T2YoXCIjXCIpIDw9IC0xKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSB7XG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oJCh0aGlzKS5hdHRyKCdocmVmJyksIFwiX2JsYW5rXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRhcmdldClcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB3aW5kb3cub3BlbigkKHRoaXMpLmF0dHIoJ2hyZWYnKSwgdGFyZ2V0KTtcblxuICAgICAgICB9IGVsc2UgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDk5MSAmJiAkKHRoaXMpLmF0dHIoJ2hyZWYnKSAmJiAkKHRoaXMpLmF0dHIoJ2hyZWYnKS5sZW5ndGggPiAxICYmICQodGhpcykuYXR0cignaHJlZicpLmluY2x1ZGVzKFwiI1wiKSAmJiAkKHRoaXMpLmhhc0NsYXNzKCdpbm5lci1saW5rJykpIHtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50cygndWwubmF2YmFyLW5hdicpLmZpbmQoJ2xpLmRyb3Bkb3duJykubm90KCQodGhpcykucGFyZW50KCcuZHJvcGRvd24nKSkucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnBhcmVudCgnLmRyb3Bkb3duJykuaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCcuZHJvcGRvd24nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgnLmRyb3Bkb3duJykuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICBza2lsbGJhclxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICAgICQoJy5za2lsbGJhcicpLmFwcGVhcigpO1xuICAgICQoJy5za2lsbGJhcicpLnNraWxsQmFycyh7XG4gICAgICAgIGZyb206IDAsXG4gICAgICAgIHNwZWVkOiA0MDAwLFxuICAgICAgICBpbnRlcnZhbDogMTAwLFxuICAgICAgICBkZWNpbWFsczogMFxuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudC5ib2R5KS5vbignYXBwZWFyJywgJy5za2lsbGJhcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIHRoaXMgY29kZSBpcyBleGVjdXRlZCBmb3IgZWFjaCBhcHBlYXJlZCBlbGVtZW50XG4gICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnYXBwZWFyJykpIHtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FwcGVhcicpO1xuICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuc2tpbGxiYXItYmFyJykuY3NzKFwid2lkdGhcIiwgXCIwJVwiKTtcbiAgICAgICAgICAgICQodGhpcykuc2tpbGxCYXJzKHtcbiAgICAgICAgICAgICAgICBmcm9tOiAwLFxuICAgICAgICAgICAgICAgIHNwZWVkOiA0MDAwLFxuICAgICAgICAgICAgICAgIGludGVydmFsOiAxMDAsXG4gICAgICAgICAgICAgICAgZGVjaW1hbHM6IDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICB0b3VjaHN0YXJ0IGNsaWNrXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gICAgJCgnYm9keScpLm9uKCd0b3VjaHN0YXJ0IGNsaWNrJywgZSA9PiB7XG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDk5Mikge1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAvL1NldCBSZXNpemUgSGVhZGVyIE1lbnUgLSBTVEFSVCBDT0RFXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgJCgnbmF2LmZ1bGwtd2lkdGgtcHVsbC1tZW51IHVsLnBhbmVsLWdyb3VwIGxpLmRyb3Bkb3duIGEuZHJvcGRvd24tdG9nZ2xlJykub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoJCh0aGlzKS5wYXJlbnQoJ2xpJykuZmluZCgndWwuZHJvcGRvd24tbWVudScpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnBhcmVudCgnbGknKS5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoJ2xpJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoJ2xpJykuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgLy9hY2NvcmRpb24gIC0gU1RBUlQgQ09ERVxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICQoJy5hY2NvcmRpb24tc3R5bGUxIC5jb2xsYXBzZScpLm9uKCdzaG93LmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBpZCA9ICQodGhpcykuYXR0cignaWQnKTtcbiAgICAgICAgJChgYVtocmVmPVwiIyR7aWR9XCJdYCkuY2xvc2VzdCgnLnBhbmVsLWhlYWRpbmcnKS5hZGRDbGFzcygnYWN0aXZlLWFjY29yZGlvbicpO1xuICAgICAgICAkKGBhW2hyZWY9XCIjJHtpZH1cIl0gLnBhbmVsLXRpdGxlIHNwYW5gKS5odG1sKCc8aSBjbGFzcz1cInRpLW1pbnVzXCI+PC9pPicpO1xuICAgIH0pO1xuXG4gICAgJCgnLmFjY29yZGlvbi1zdHlsZTEgLmNvbGxhcHNlJykub24oJ2hpZGUuYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGlkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xuICAgICAgICAkKGBhW2hyZWY9XCIjJHtpZH1cIl1gKS5jbG9zZXN0KCcucGFuZWwtaGVhZGluZycpLnJlbW92ZUNsYXNzKCdhY3RpdmUtYWNjb3JkaW9uJyk7XG4gICAgICAgICQoYGFbaHJlZj1cIiMke2lkfVwiXSAucGFuZWwtdGl0bGUgc3BhbmApLmh0bWwoJzxpIGNsYXNzPVwidGktcGx1c1wiPjwvaT4nKTtcbiAgICB9KTtcblxuICAgICQoJy5uYXYubmF2YmFyLW5hdiBhLmlubmVyLWxpbmsnKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICQodGhpcykucGFyZW50cygndWwubmF2YmFyLW5hdicpLmZpbmQoJ2EuaW5uZXItbGluaycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgY29uc3QgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICBpZiAoJCgnLm5hdi1oZWFkZXItY29udGFpbmVyIC5uYXZiYXItdG9nZ2xlJykuaXMoJzp2aXNpYmxlJykpXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5uYXZiYXItY29sbGFwc2UnKS5jb2xsYXBzZSgnaGlkZScpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSwgMTAwMCk7XG5cbiAgICB9KTtcblxuICAgICQoJy5hY2NvcmRpb24tc3R5bGUyIC5jb2xsYXBzZScpLm9uKCdzaG93LmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBpZCA9ICQodGhpcykuYXR0cignaWQnKTtcbiAgICAgICAgJChgYVtocmVmPVwiIyR7aWR9XCJdYCkuY2xvc2VzdCgnLnBhbmVsLWhlYWRpbmcnKS5hZGRDbGFzcygnYWN0aXZlLWFjY29yZGlvbicpO1xuICAgICAgICAkKGBhW2hyZWY9XCIjJHtpZH1cIl0gLnBhbmVsLXRpdGxlYCkuZmluZCgnaScpLmFkZENsYXNzKCdmYS1hbmdsZS11cCcpLnJlbW92ZUNsYXNzKCdmYS1hbmdsZS1kb3duJyk7XG4gICAgfSk7XG5cbiAgICAkKCcuYWNjb3JkaW9uLXN0eWxlMiAuY29sbGFwc2UnKS5vbignaGlkZS5icy5jb2xsYXBzZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XG4gICAgICAgICQoYGFbaHJlZj1cIiMke2lkfVwiXWApLmNsb3Nlc3QoJy5wYW5lbC1oZWFkaW5nJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1hY2NvcmRpb24nKTtcbiAgICAgICAgJChgYVtocmVmPVwiIyR7aWR9XCJdIC5wYW5lbC10aXRsZWApLmZpbmQoJ2knKS5yZW1vdmVDbGFzcygnZmEtYW5nbGUtdXAnKS5hZGRDbGFzcygnZmEtYW5nbGUtZG93bicpO1xuICAgIH0pO1xuXG4gICAgJCgnLmFjY29yZGlvbi1zdHlsZTMgLmNvbGxhcHNlJykub24oJ3Nob3cuYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGlkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xuICAgICAgICAkKGBhW2hyZWY9XCIjJHtpZH1cIl1gKS5jbG9zZXN0KCcucGFuZWwtaGVhZGluZycpLmFkZENsYXNzKCdhY3RpdmUtYWNjb3JkaW9uJyk7XG4gICAgICAgICQoYGFbaHJlZj1cIiMke2lkfVwiXSAucGFuZWwtdGl0bGVgKS5maW5kKCdpJykuYWRkQ2xhc3MoJ2ZhLWFuZ2xlLXVwJykucmVtb3ZlQ2xhc3MoJ2ZhLWFuZ2xlLWRvd24nKTtcbiAgICB9KTtcblxuICAgICQoJy5hY2NvcmRpb24tc3R5bGUzIC5jb2xsYXBzZScpLm9uKCdoaWRlLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBpZCA9ICQodGhpcykuYXR0cignaWQnKTtcbiAgICAgICAgJChgYVtocmVmPVwiIyR7aWR9XCJdYCkuY2xvc2VzdCgnLnBhbmVsLWhlYWRpbmcnKS5yZW1vdmVDbGFzcygnYWN0aXZlLWFjY29yZGlvbicpO1xuICAgICAgICAkKGBhW2hyZWY9XCIjJHtpZH1cIl0gLnBhbmVsLXRpdGxlYCkuZmluZCgnaScpLnJlbW92ZUNsYXNzKCdmYS1hbmdsZS11cCcpLmFkZENsYXNzKCdmYS1hbmdsZS1kb3duJyk7XG4gICAgfSk7XG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgLy9hY2NvcmRpb24gLSBFTkQgQ09ERVxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgLy90b2dnbGVzICAtIFNUQVJUIENPREVcbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAkKCcudG9nZ2xlcyAuY29sbGFwc2UnKS5vbignc2hvdy5icy5jb2xsYXBzZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XG4gICAgICAgICQoYGFbaHJlZj1cIiMke2lkfVwiXWApLmNsb3Nlc3QoJy5wYW5lbC1oZWFkaW5nJykuYWRkQ2xhc3MoJ2FjdGl2ZS1hY2NvcmRpb24nKTtcbiAgICAgICAgJChgYVtocmVmPVwiIyR7aWR9XCJdIC5wYW5lbC10aXRsZSBzcGFuYCkuaHRtbCgnPGkgY2xhc3M9XCJ0aS1taW51c1wiPjwvaT4nKTtcbiAgICB9KTtcblxuICAgICQoJy50b2dnbGVzIC5jb2xsYXBzZScpLm9uKCdoaWRlLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBpZCA9ICQodGhpcykuYXR0cignaWQnKTtcbiAgICAgICAgJChgYVtocmVmPVwiIyR7aWR9XCJdYCkuY2xvc2VzdCgnLnBhbmVsLWhlYWRpbmcnKS5yZW1vdmVDbGFzcygnYWN0aXZlLWFjY29yZGlvbicpO1xuICAgICAgICAkKGBhW2hyZWY9XCIjJHtpZH1cIl0gLnBhbmVsLXRpdGxlIHNwYW5gKS5odG1sKCc8aSBjbGFzcz1cInRpLXBsdXNcIj48L2k+Jyk7XG4gICAgfSk7XG5cbiAgICAkKCcudG9nZ2xlcy1zdHlsZTIgLmNvbGxhcHNlJykub24oJ3Nob3cuYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGlkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xuICAgICAgICAkKGBhW2hyZWY9XCIjJHtpZH1cIl1gKS5jbG9zZXN0KCcucGFuZWwtaGVhZGluZycpLmFkZENsYXNzKCdhY3RpdmUtYWNjb3JkaW9uJyk7XG4gICAgICAgICQoYGFbaHJlZj1cIiMke2lkfVwiXSAucGFuZWwtdGl0bGUgc3BhbmApLmh0bWwoJzxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtdXBcIj48L2k+Jyk7XG4gICAgfSk7XG5cbiAgICAkKCcudG9nZ2xlcy1zdHlsZTIgLmNvbGxhcHNlJykub24oJ2hpZGUuYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGlkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xuICAgICAgICAkKGBhW2hyZWY9XCIjJHtpZH1cIl1gKS5jbG9zZXN0KCcucGFuZWwtaGVhZGluZycpLnJlbW92ZUNsYXNzKCdhY3RpdmUtYWNjb3JkaW9uJyk7XG4gICAgICAgICQoYGFbaHJlZj1cIiMke2lkfVwiXSAucGFuZWwtdGl0bGUgc3BhbmApLmh0bWwoJzxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLWRvd25cIj48L2k+Jyk7XG4gICAgfSk7XG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgLy90b2dnbGVzICAtIEVORCBDT0RFXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiAgICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICBibG9nIGhvdmVyIGJveFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICAgICQoZG9jdW1lbnQpLm9uKFwibW91c2VlbnRlclwiLCBcIi5ibG9nLXBvc3Qtc3R5bGU0IC5ncmlkLWl0ZW1cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgJCh0aGlzKS5maW5kKFwiZmlnY2FwdGlvbiAuYmxvZy1ob3Zlci10ZXh0XCIpLnNsaWRlRG93bigzMDApO1xuICAgIH0pO1xuICAgICQoZG9jdW1lbnQpLm9uKFwibW91c2VsZWF2ZVwiLCBcIi5ibG9nLXBvc3Qtc3R5bGU0IC5ncmlkLWl0ZW1cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgJCh0aGlzKS5maW5kKFwiZmlnY2FwdGlvbiAuYmxvZy1ob3Zlci10ZXh0XCIpLnNsaWRlVXAoMzAwKTtcbiAgICB9KTtcbiAgICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICBFbmQgYmxvZyBob3ZlciBib3hcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgICBTZXRSZXNpemVDb250ZW50KCk7XG5cbiAgICBjb25zdCAkYWxsTm9uUmF0aW5hSW1hZ2VzID0gJChcImltZzpub3QoW2RhdGEtcmpzXSlcIik7XG4gICAgJGFsbE5vblJhdGluYUltYWdlcy5hdHRyKCdkYXRhLW5vLXJldGluYScsICcnKTtcblxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgIC8vZGVtbyBidXR0b24gIC0gU1RBUlQgQ09ERVxuICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4gICAgY29uc3QgJGJ1eXRoZW1lZGl2ID0gJzxkaXYgY2xhc3M9XCJidXktdGhlbWUgYWx0LWZvbnQgc20tZGlzcGxheS1ub25lXCI+PGEgaHJlZj1cImh0dHBzOi8vdGhlbWVmb3Jlc3QubmV0L2l0ZW0vcG9mby1jcmVhdGl2ZS1hZ2VuY3ktY29ycG9yYXRlLWFuZC1wb3J0Zm9saW8tbXVsdGlwdXJwb3NlLXRlbXBsYXRlLzIwNjQ1OTQ0P3JlZj10aGVtZXphYVwiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzPVwidGktc2hvcHBpbmctY2FydFwiPjwvaT48c3Bhbj5CdXkgVGhlbWU8L3NwYW4+PC9hPjwvZGl2PjxkaXYgY2xhc3M9XCJhbGwtZGVtbyBhbHQtZm9udCBzbS1kaXNwbGF5LW5vbmVcIj48YSBocmVmPVwibWFpbHRvOmluZm9AdGhlbWV6YWEuY29tP3N1YmplY3Q9UE9GTyDigJMgQ3JlYXRpdmUgQWdlbmN5LCBDb3Jwb3JhdGUgYW5kIFBvcnRmb2xpbyBNdWx0aS1wdXJwb3NlIFRlbXBsYXRlIC0gUXVpY2sgUXVlc3Rpb25cIj48aSBjbGFzcz1cInRpLWVtYWlsXCI+PC9pPjxzcGFuPlF1aWNrIFF1ZXN0aW9uPzwvc3Bhbj48L2E+PC9kaXY+JztcbiAgICAkKCdib2R5JykuYXBwZW5kKCRidXl0aGVtZWRpdik7XG5cbiAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAvL2RlbW8gYnV0dG9uICAtIEVORCBDT0RFXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiAgICAkKGRvY3VtZW50KS5vbihcInRvdWNoc3RhcnRcIiwgXCIuc2lkZWJhci13cmFwcGVyXCIsICgpID0+IHtcbiAgICAgICAgY2xlYXJPcGVuKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBnZXROYXYgPSAkKFwibmF2Lm5hdmJhci5ib290c25hdlwiKTtcbiAgICBjb25zdCBnZXRJbiA9IGdldE5hdi5maW5kKFwidWwubmF2XCIpLmRhdGEoXCJpblwiKTtcbiAgICBjb25zdCBnZXRPdXQgPSBnZXROYXYuZmluZChcInVsLm5hdlwiKS5kYXRhKFwib3V0XCIpO1xuICAgIC8vIEhpZGRlbiBkcm9wZG93blxuICAgIGZ1bmN0aW9uIGNsZWFyT3BlbigpIHtcbiAgICAgICAgJCgnbGkuZHJvcGRvd24nKS5yZW1vdmVDbGFzcyhcIm9uXCIpLnJlbW92ZUNsYXNzKFwib3BlblwiKTtcbiAgICAgICAgJChcIi5kcm9wZG93bi1tZW51XCIpLnN0b3AoKS5mYWRlT3V0KCdmYXN0Jyk7XG4gICAgICAgICQoXCIuZHJvcGRvd24tbWVudVwiKS5yZW1vdmVDbGFzcyhnZXRJbik7XG4gICAgICAgICQoXCIuZHJvcGRvd24tbWVudVwiKS5hZGRDbGFzcyhnZXRPdXQpO1xuICAgIH1cbn0pO1xuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiBFTkQgUkVBRFlcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gU1RBUlQgUGFnZSBMb2FkXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiQod2luZG93KS5sb2FkKCgpID0+IHtcbiAgICBjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpO1xuICAgIGlmIChoYXNoICE9IFwiXCIpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAkKHdpbmRvdykuaW1hZ2VzTG9hZGVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxBbmltYXRpb25UaW1lID0gMTIwMDtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxBbmltYXRpb24gPSAnZWFzZUluT3V0RXhwbyc7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gYCMke2hhc2h9YDtcbiAgICAgICAgICAgICAgICBpZiAoJCh0YXJnZXQpLmxlbmd0aCA+IDApIHtcblxuICAgICAgICAgICAgICAgICAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Njcm9sbFRvcCc6ICQodGFyZ2V0KS5vZmZzZXQoKS50b3BcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHNjcm9sbEFuaW1hdGlvblRpbWUsIHNjcm9sbEFuaW1hdGlvbiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfVxuXG4gICAgZnVsbFNjcmVlbkhlaWdodCgpO1xufSk7XG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuIEVORCBQYWdlIExvYWRcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9mcm9udC9qcy9tYWluLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==