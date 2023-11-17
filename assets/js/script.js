
// Sticky Header
jQuery(document).ready(function ($) {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('.header').addClass('is-sticky');
        } else {
            $('.header').removeClass('is-sticky');
        }
    });
});

// Sidebar 
jQuery(document).ready(function ($) {
    $('.toggle-menu').click(function () {
        $('.sidebar').addClass('active');
        $('.close-sidebar').addClass('active');
        $('body').addClass('menu_open');
    })
    $('.close-sidebar').click(function () {
        $('.sidebar').removeClass('active');
        $('body').removeClass('menu_open');
        $(this).removeClass('active');
    })
    $(document).keyup(function (e) {
        $('.sidebar').removeClass('active');
        $('.close-sidebar').removeClass('active');
        $('body').removeClass('menu_open');
    });
});

// Banner Slider
if ($(".bannerslider-wrapper").length) {
    $(document).ready(function () {
        var heroslider = new Swiper(".bannerslider__loop", {
            draggable: true,
            loop: true,
            autoplay: {
                delay: 1200,
            },
            speed: 1000,
            effect: 'fade',
            grabCursor: true,
        });
    });
}

// Animation
jQuery(document).ready(function () {
    function Te(e, t) {
        var i;
        return function () {
            var n = arguments,
                s = this;
            i || (e.apply(s, n), i = !0, setTimeout((function () {
                return i = !1
            }), t))
        }
    }

    var e = Array.prototype.slice.call(document.querySelectorAll(".fade-ani"));
    if (!(e.length < 1)) {
        var t = Te((function () {
            for (var i = 0; i < e.length; i++) n = e[i], s = void 0, r = void 0, o = void 0, a = void 0, s = n.getBoundingClientRect(),
                r = window.innerHeight || document.documentElement.clientHeight, o = s.bottom < r && s.bottom >= .70 *
                r, a = s.top <= 0 && s.bottom >= r, (s.top >= 0 && s.top <= .70 * r || a || o) && (e[i].classList.add("is-visible"), e.splice(i, 1), i -= 1);
            var n, s, r, o, a;
            e.length || (window.removeEventListener("scroll", t), window.removeEventListener("resize", t))
        }), 60);
        window.addEventListener("load", t, {
            once: !0
        }), window.addEventListener("scroll", t, {
            passive: !0
        }), window.addEventListener("resize", t, {
            passive: !0
        })
    }
});


// load-more button blog page
$(function () {
    $(".blog-card").slice(0, 4).show();
    $("body").on('click touchstart', '.load-more', function (e) {
        e.preventDefault();
        $(".blog-card:hidden").slice(0, 3).slideDown();
        if ($(".blog-card:hidden").length == 0) {
            $("#load").css('display', 'none');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1000);
    });
});


// on click add class in blog filter
$(".filter-li").on('click', 'li', function () {
    $(".filter-li li.active").removeClass("active");
    // adding classname 'active' to current click li 
    $(this).addClass("active");
});