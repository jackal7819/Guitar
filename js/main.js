let swiperSliders = new Swiper(".mySwiperSliders", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        }
    }
});

let swiperProducts = new Swiper(".mySwiperProducts", {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        576: {
          slidesPerView: 3,
          spaceBetween: 0
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 0
        },
    },
});

let swiperPartners = new Swiper(".mySwiperPartners", {
    slidesPerView: 2,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        576: {
          slidesPerView: 5,
          spaceBetween: 0
        },
        768: {
            slidesPerView: 8,
            spaceBetween: 0
        },
    },
});