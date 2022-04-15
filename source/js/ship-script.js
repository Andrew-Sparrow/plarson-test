const shipSwiperDOM = document.querySelector('.ship-swiper');
let shipSwiper;

const resize = () => {
  if (document.documentElement.clientWidth < 1025 && shipSwiperDOM.dataset.mobile === 'false') {
   shipSwiperDOM.dataset.mobile = 'true';
   shipSwiper = new Swiper('.ship-swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      allowTouchMove: true,
      scrollbar: {
        el: ".ship-swiper__scrollbar",
        dragSize: 35,
        dragClass: 'ship-swiper__drag'
      },
    });
  } else if (document.documentElement.clientWidth >= 1025) {
    if (shipSwiperDOM.dataset.mobile === 'true') {
     shipSwiperDOM.dataset.mobile = 'false';
     shipSwiper.destroy()
    }
  }
}

resize();
window.addEventListener('resize', resize)
