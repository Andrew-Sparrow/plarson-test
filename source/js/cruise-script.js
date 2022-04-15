let shipSwiper;
const shipSwiperDOM = document.querySelector('.ship-swiper')

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

resize()

window.addEventListener('resize', resize)

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


//Показать все для блока маршрут по дням
const showMoreButton = document.querySelectorAll('.description__button');

showMoreButton.forEach(item => {
  item.addEventListener('click', (e) => {
    const temp = document.querySelector('.description__block')
    const flag = e.currentTarget.dataset.show === 'true';
    e.target.dataset.show = !flag
    e.target.textContent = flag ? 'Скрыть' : 'Показать больше'
    temp.style.height = flag ? temp.scrollHeight + "px" : null;
  })
})

//Показать скрыть список
const showList = document.querySelector('.services__button');

showList.addEventListener('click', (e) => {
  const temp = document.querySelectorAll('.services__item_hide')
  const flag = e.currentTarget.dataset.show === 'true';
  e.target.dataset.show = !flag;
  e.target.textContent = flag ? 'Скрыть' : 'Показать больше';
  temp.forEach(item => {
    item.style.display = flag ? 'list-item' : 'none';
  })
})

//Показать все для блока полярные приключения
const showMoreAdventure = document.querySelectorAll('.adventures-article');

showMoreAdventure.forEach(item => {
  item.addEventListener('click', (e) => {
    if (e.target.classList.contains('adventures-article__link')) {
      const temp = e.currentTarget.querySelector('.adventures-article__text-block')
      const flag = e.target.dataset.show === 'true';
      e.target.dataset.show = !flag
      e.target.textContent = flag ? 'Скрыть' : 'Показать больше'
      temp.style.height = flag ? temp.scrollHeight + "px" : null;
    }
  })
})

