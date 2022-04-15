const advantageSwiperDOM = document.querySelector('.advantage-swiper');
let advantageSwiper;

const resize = () => {
  if (document.documentElement.clientWidth < 1025 && advantageSwiperDOM.dataset.mobile === 'false') {
    advantageSwiperDOM.dataset.mobile = 'true';
    advantageSwiper = new Swiper('.advantage-swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      allowTouchMove: true,
      scrollbar: {
        el: ".advantage-swiper__scrollbar",
        dragSize: 35,
        dragClass: 'advantage-swiper__drag'
      },
    });
  } else if (document.documentElement.clientWidth >= 1025) {
    if (advantageSwiperDOM.dataset.mobile === 'true') {
      advantageSwiperDOM.dataset.mobile = 'false';
      advantageSwiper.destroy()
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