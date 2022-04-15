const cruisePriceSwiperDOM = document.querySelector('.cruise-price-swiper');
const antarcticSwiperDOM = document.querySelector('.antarctic-swiper');

let antarcticSwiper;
let cruisePriceSwiper;
let tabSwiper;

const resize = () => {
  if (document.documentElement.clientWidth < 1025 && antarcticSwiperDOM.dataset.mobile === 'false') {
    antarcticSwiperDOM.dataset.mobile = 'true';

    antarcticSwiper = new Swiper('.antarctic-swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      allowTouchMove: true,
      scrollbar: {
        el: ".antarctic-swiper__scrollbar",
        dragSize: 35,
        dragClass: 'antarctic-swiper__drag'
      },
    });

    tabSwiper = new Swiper('.tab-swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      allowTouchMove: true,
    });

    cruisePriceSwiper = new Swiper('.cruise-price-swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      allowTouchMove: true,
      scrollbar: {
        el: ".cruise-price-swiper__scrollbar",
        dragSize: 35,
        dragClass: 'cruise-price-swiper__drag'
      },
    });

  } else if (document.documentElement.clientWidth >= 1025) {
    if (antarcticSwiperDOM.dataset.mobile === 'true') {
      antarcticSwiperDOM.dataset.mobile = 'false';
      cruisePriceSwiperDOM.dataset.mobile = 'false';
      antarcticSwiper.destroy()

      cruisePriceSwiper.destroy()
    }
  }
}

resize()

window.addEventListener('resize', resize)
