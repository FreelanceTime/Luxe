new Swiper('.main-slider__body', {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: true,
    speed: 800,
    paginations: {
        el: '.mainslider__dotts',
        clickable: true,
    },
    navigation: {
        nextEl: '.arrow-next',
        prevEl: '.arrow-prev',
    },
    on: {
        lazyImageReady: function () {
            ibg();
        },
    }
});

new Swiper('.slider-lots__body', {
    observer: true,
    observeParents: true,
  //  slidesPerView: 3,
    breakpoints: {
        // when window width is >= 320px
        800: {
            slidesPerView: 3,
            //spaceBetween: 10
        },
        540: {
            slidesPerView: 2,
            //spaceBetween: 10
        }
    },
    spaceBetween: 0,
    autoHeight: true,
    speed: 800,
    paginations: {
        el: '.mainslider__dotts',
        clickable: true,
    },
    navigation: {
        nextEl: '.slider-lots__arrow-next',
        prevEl: '.slider-lots__arrow-prev',
    },
    on: {
        lazyImageReady: function () {
            ibg();
        },
    }
});
new Swiper('.communication-slider', {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: true,
    speed: 800,
    paginations: {
        el: '.mainslider__dotts',
        clickable: true,
    },
    navigation: {
        nextEl: '.communication-control',
        
    },
    on: {
        lazyImageReady: function () {
            ibg();
        },
    }
});