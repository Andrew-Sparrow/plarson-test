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
