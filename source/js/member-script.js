const videoSwiper = new Swiper('.video-swiper', {
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
    el: ".video-swiper__scrollbar",
    dragSize: 35,
    dragClass: 'video__drag'
  },
  navigation: {
    nextEl: ".video__button_forward",
    prevEl: ".video__button_back",
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

const membersSwiper = new Swiper('.other-members-swiper', {
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
    el: ".other-members-swiper__scrollbar",
    dragSize: 35,
    dragClass: 'other-members-swiper__drag'
  },
  navigation: {
    nextEl: ".other-members__button_forward",
    prevEl: ".other-members__button_back",
  },
});
