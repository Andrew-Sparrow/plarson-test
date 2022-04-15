
const sortButton = document.querySelector('.sort__button');
const sortDropdown = document.querySelector('.sort__dropdown')

sortButton.addEventListener('click', (e) => {
  e.cancelBubble = true;
  e.currentTarget.classList.toggle('sort__button_active');
})

window.addEventListener('click', () => {
  sortButton.classList.remove('sort__button_active')
})

sortDropdown.addEventListener('click', (e) => {
  if (e.target.classList.contains('sort__item-button')) {
    sortButton.textContent = e.target.textContent;
  }
})
