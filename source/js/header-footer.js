const header = document.querySelector('.header');
const logo = header.querySelector('.logo__image');

if (window.pageYOffset > 10) {
  header.classList.add('header_active')
  logo.src = 'img/logo-blue.svg';
}


window.addEventListener('scroll', () => {
  if (window.pageYOffset > 10) {
    header.classList.add('header_active')
    logo.src = 'img/logo-blue.svg'
  } else {
    header.classList.remove('header_active')
    logo.src = 'img/logo.svg'
  }
})

const itemDropdown = document.querySelectorAll('.header__item_dropdown')
const headerDropdown = document.querySelectorAll('.header-dropdown');

for (let i = 0; i < itemDropdown.length; i++) {
  itemDropdown[i].addEventListener('click', e => {
    const item = headerDropdown[i]
    e.currentTarget.classList.toggle('active')
    headerDropdown.forEach((item, index) => {
      if (i !== index) {
        itemDropdown[index].classList.remove('active')
        item.style.maxHeight = null;
      }
    })
    if (item.style.maxHeight) {
      item.style.maxHeight = null;
    } else {
      item.style.maxHeight = item.scrollHeight + "px";
    }
  })
}

const burger = document.querySelector('.burger');
const burgerClose = document.querySelector('.burger-menu-header__close')
const headerContent = document.querySelector('.header__content')

burger.addEventListener('click', (e) => {
  e._isBurgerClicked = true
  headerContent.classList.add('header__content_active')
})

burgerClose.addEventListener('click', (e) => {
  headerContent.classList.remove('header__content_active')
})

headerContent.addEventListener('click', (e) => {
  e._isBurgerClicked = true
})

window.addEventListener('click', (e) => {
  if (!e._isBurgerClicked)
    headerContent.classList.remove('header__content_active')
})



const footerButtons = document.querySelectorAll('.menu__title');
const footerMenu = document.querySelectorAll('.menu__list')

for (let i = 0; i < footerButtons.length; i++) {
  footerButtons[i].addEventListener('click', (e) => {
    footerMenu.forEach((item, index) => {
      if (i !== index) {
        footerButtons[index].classList.remove('menu__title_active')
        item.style.maxHeight = null;
      }
    })
    e.currentTarget.classList.toggle('menu__title_active')
    const item = footerMenu[i]
    if (item.style.maxHeight) {
      item.style.maxHeight = null;
    } else {
      item.style.maxHeight = item.scrollHeight + "px";
    }
  })
}