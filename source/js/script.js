const reviewsSwiperDOM = document.querySelector('.reviews-swiper');
let reviewsSwiper;

const resize = () => {
  if (document.documentElement.clientWidth < 1025 && reviewsSwiperDOM.dataset.mobile === 'false') {
    reviewsSwiperDOM.dataset.mobile = 'true';
    reviewsSwiper = new Swiper('.reviews-swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      allowTouchMove: true,
      scrollbar: {
        el: ".reviews-swiper__scrollbar",
        dragSize: 35,
        dragClass: 'reviews-swiper__drag'
      },
    });
  } else if (document.documentElement.clientWidth >= 1025) {
    if (reviewsSwiperDOM.dataset.mobile === 'true') {
      reviewsSwiperDOM.dataset.mobile = 'false';
      reviewsSwiper.destroy()
    }
  }
}

resize();
window.addEventListener('resize', resize)

const heroSwiper = new Swiper('.hero-swiper', {
  slidesPerView: 1,
  allowTouchMove: true,
  breakpoints: {
    1025: {
      allowTouchMove: false,
    }
  },
  scrollbar: {
    el: ".hero__scrollbar",
    dragSize: 35,
    dragClass: 'hero__drag'
  },
  navigation: {
    nextEl: ".hero__arrow_forward",
    prevEl: ".hero__arrow_back",
  },
});

const recomendSwiper = new Swiper('.recommend-swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  allowTouchMove: true,
  breakpoints: {
    1025: {
      slidesPerView: 3,
      spaceBetween: 30,
      allowTouchMove: false,
    }
  },
  scrollbar: {
    el: ".recommend-swiper__scrollbar",
    dragSize: 35,
    dragClass: 'recommend-swiper__drag'
  },
  navigation: {
    nextEl: ".recommend__button_forward",
    prevEl: ".recommend__button_back",
  },
});

const specialOfferSwiper = new Swiper('.special-offer-swiper', {
  allowTouchMove: true,
  breakpoints: {
    1025: {
      allowTouchMove: false,
    }
  },
  navigation: {
    nextEl: ".special-offer__arrow_forward",
    prevEl: ".special-offer__arrow_back",
  },
  scrollbar: {
    el: ".special-offer__scrollbar",
    dragSize: 35,
    dragClass: 'special-offer__drag'
  },
});

const swiper3 = new Swiper('.why-us-swiper', {
  allowTouchMove: false,
  spaceBetween: 50,
  initialSlide: 2,
  navigation: {
    nextEl: ".why-us-swiper__arrow_forward",
    prevEl: ".why-us-swiper__arrow_back",
  },
  pagination: {
    el: ".why-us__pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' ' + 'why-us__bullet' + '">' + (index + 1) + "</span>";
    },
  },
});

window.addEventListener('resize', resize)