// Preloader Function
$(window).on('load', function(){
	$(".preloader").fadeOut(500);
    $(".top-wrapper").toggleClass("sticky-bar");
	});

// Arrow icons for Desktop
const prevArr = '<span class="prev-arrow-lft"><img src="./assets/icon/arrow-left-on-light.png" alt="Previous"/></span>';
const nextArr = '<span class="next-arrow-rgt"><img src="./assets/icon/arrow-right-on-light.png" alt="Next"/></span>';

// Arrow icons for Mobile Devices
const prevArrMob = '<span class="prev-arrow-lft"><img src="./assets/icon/arrow-left-mobile.png" alt="Previous"/></span>';
const nextArrMob = '<span class="next-arrow-rgt"><img src="./assets/icon/arrow-right-mobile.png" alt="Next"/></span>';

// Banner slider
$('.carousel').carousel({
    interval: 5000,
});

// Owl slider (Top Selling Section)
$('.owl-ts-top').owlCarousel({
    slideBy: 1,
    slideTransition: `ease`,
    loop: false,
    margin: 30,
    dots: false,
    autoWidth: true,
    nav: false,
    navText : [
        prevArr,
        nextArr
    ],
    responsiveClass: false,
});

// Owl slider (Top Selling Section)
$('.top-selling-top').owlCarousel({
    slideBy: 1,
    slideTransition: `ease`,
    loop: false,
    margin: 0,
    dots: false,
    autoWidth: true,
    nav: true,
    navText : [
        prevArr,
        nextArr
    ],
    responsiveClass: false,
});

// Owl slider (Navbar - Phones & Tablets Section)
$('.nav-1').owlCarousel({
    autoWidth: true,
    slideBy: 1,
    slideTransition: `ease`,
    loop: false,
    margin: 0,
    center: true,
    dots: false,
    nav: true,
    navText : [
        prevArr,
        nextArr
    ],
    responsiveClass: false,
});



// Owl slider (Navbar - Accessories Section)
$('.owl-nav').owlCarousel({
    autoWidth: true,
    slideBy: 1,
    slideTransition: `ease`,
    loop: false,
    margin: 0,
    dots: false,
    nav: true,
    navText : [
        prevArr,
        nextArr
    ],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            navText: [
                prevArrMob,
                nextArrMob
            ],
        },
        400: {
            items: 1,
            navText: [
                prevArrMob,
                nextArrMob
            ],
        },
        575: {
            items: 1,
        },
        992: {
            items: 2,
        },
        1100: {
            items: 2,
        },
        1300: {
            items: 2,
        }
    } 
});

// Owl offers slider (Offers Section)
$('.owl-offers').owlCarousel({
    autoWidth: false,
    slideTransition: `ease`,
    sliderBy: 2,
    loop: false,
    margin: 20,
    dots: false,
    nav: true,
    navText : [
        prevArr,
        nextArr
    ],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            navText: [
                prevArrMob,
                nextArrMob
            ],
        },
        400: {
            items: 1,
            navText: [
                prevArrMob,
                nextArrMob
            ],
        },
        575: {
            items: 1,
            navText: [
                prevArrMob,
                nextArrMob
            ],
        },
        992: {
            items: 2,
        },
        1100: {
            items: 2,
        },
        1300: {
            items: 2,
        }
    }
});

// Product slider with Owl Carousel //
// Owl slider (All Product Section)
$('.owl-carousel').owlCarousel({
    // autoWidth: true,
    slideBy: 4,
    slideTransition: `ease`,
    loop: false,
    margin: 20,
    dots: false,
    nav: true,
    navText : [
        prevArr,
        nextArr,
    ],
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
            slideBy: 2,
            navText: [
                prevArrMob,
                nextArrMob
            ],
        },
        400: {
            items: 2,
            slideBy: 2,
            navText: [
                prevArrMob,
                nextArrMob
            ],
        },
        575: {
            items: 2,
            slideBy: 2,
            navText: [
                prevArrMob,
                nextArrMob
            ],
        },
        992: {
            items: 4,
        },
        1100: {
            items: 3,
        },
        1300: {
            items: 4,
        }
    }
});


// Slick slider (Shop by Brands Section)
$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 9,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        spaceBetween: 100,
        swipe: false,
        arrows: true,
        dots: false,
        pauseOnHover: true,
        prevArrow: prevArr,
        nextArrow: nextArr,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                prevArrow: prevArrMob,
                nextArrow: nextArrMob,
            }
        }]
    })
});

// Scroll Top Btn
const scrollTopBtn = document.getElementById('scrollTopBtn');
scrollTopBtn.addEventListener('click', topScroll);
function topScroll() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Modal
$('#initText').modal();




