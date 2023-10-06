const swiper = new Swiper('.swiper__offers', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 14,
    speed: 1000,
    pagination: {
      el: '.offers-pagination',
    },

    navigation: {
      nextEl: '.btn-offers-prev',
      prevEl: '.btn-offers-next',
    },


    breakpoints: {
      321: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1241: {
        slidesPerView: 3,
        spaceBetween: 16,
      }
    }
  });