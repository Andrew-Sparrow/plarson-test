let reviewsSwiper;
let cruiseSwiper;
const cruiseSwiperrDOM = document.querySelector('.cruise-price-swiper')


const resize = () => {
  if (document.documentElement.clientWidth < 1025 && cruiseSwiperrDOM.dataset.mobile === 'false') {
    cruiseSwiperrDOM.dataset.mobile = 'true';

    cruiseSwiper = new Swiper('.cruise-price-swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      allowTouchMove: true,
      scrollbar: {
        el: ".cruise-price-swiper__scrollbar",
        dragSize: 35,
        dragClass: 'cruise-price-swiper__drag'
      },
    });

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
    if (cruiseSwiperrDOM.dataset.mobile === 'true') {
      cruiseSwiperrDOM.dataset.mobile = 'false';
      cruiseSwiper.destroy()
      reviewsSwiper.destroy()
    }
  }
}

resize()

window.addEventListener('resize', resize)


const gallerySwiper = new Swiper('.gallery-swiper', {
    slidesPerView: 1,
    allowTouchMove: true,
    breakpoints: {
      1025: {
        allowTouchMove: false,
      }
    },
    scrollbar: {
      el: ".gallery-swiper__scrollbar",
      dragSize: 35,
      dragClass: 'gallery-swiper__drag'
    },
    navigation: {
      nextEl: ".gallery__button_forward",
      prevEl: ".gallery__button_back",
    },
  });
  
  const articlesSwiper = new Swiper('.articles-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    allowTouchMove: true,
    breakpoints: {
      1025: {
        slidesPerView: 3,
        allowTouchMove: false,
      }
    },
    scrollbar: {
      el: ".articles-swiper__scrollbar",
      dragSize: 35,
      dragClass: 'articles-swiper__drag'
    },
    navigation: {
      nextEl: ".articles__button_forward",
      prevEl: ".articles__button_back",
    },
  });