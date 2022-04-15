let antarcticSwiper;
const antarcticSwiperDOM = document.querySelector('.antarctic-swiper')

let cruiseSwiper;
let reviewsSwiper;
let shipSwiper;

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
    if (antarcticSwiperDOM.dataset.mobile === 'true') {
      antarcticSwiperDOM.dataset.mobile = 'false';
      antarcticSwiper.destroy()
      cruiseSwiper.destroy()
      reviewsSwiper.destroy()
      shipSwiper.destroy()
    }
  }
}

resize()

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

const swiper3 = new Swiper('.why-us-swiper', {
  allowTouchMove: false,
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

const showMoreButton = document.querySelectorAll('.special-option-article');

showMoreButton.forEach(item => {
  item.addEventListener('click', (e) => {
    if (e.target.classList.contains('special-option-article__link')) {
      const temp = e.currentTarget.querySelector('.special-option-article__text-block')
      const flag = e.target.dataset.show === 'true';
      e.target.dataset.show = !flag
      e.target.textContent = flag ? 'Скрыть' : 'Показать больше'
      temp.style.height = flag ? temp.scrollHeight + "px" : null;
    }
  })
})
