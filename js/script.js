document.addEventListener('DOMContentLoaded', function () {
    let mainNav = document.querySelector('.header');

    window.onscroll = function () {
        windowScroll();
    };

    function windowScroll() {
        mainNav.classList.toggle("header__scroll", mainNav.scrollTop > 50 || document.documentElement.scrollTop > 50);
    }


    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        // loop: true,
        slidesPerView: 1,
        slidesPerGroup: 1,

        breakpoints: {
            480: {
                slidesPerView: 2,
                grid: {
                    rows: 3,
                },
                spaceBetween: 32,
                slidesPerGroup: 2
            },

            1024: {
                slidesPerView: 4,
                spaceBetween: 15,
            },

            1300: {
                slidesPerView: 5,
                spaceBetween: 18,
            },
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    jQuery(document).ready(function ($) {
        $("#my-accordion").accordionjs();
    });
})