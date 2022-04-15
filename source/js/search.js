const searchInputs = document.querySelectorAll('.search__input');
const searchDropdown = document.querySelectorAll('.search-dropdown');

for (let i = 0; i < searchDropdown.length; i++) {
  searchDropdown[i].addEventListener('click', (e) => {
    if (e.target.classList.contains('search-dropdown__item')) {
      searchInputs[i].textContent = e.target.textContent;
      searchDropdown[i].classList.remove('search-dropdown_active')
    }
  })
  searchInputs[i].addEventListener('click', (e) => {
    searchDropdown.forEach((item, index) => {
      if (i !== index)
        item.classList.remove('search-dropdown_active');
    })
    e.cancelBubble = true
    searchDropdown[i].classList.toggle('search-dropdown_active');
  })
}


window.addEventListener('click', (e) => {
  searchDropdown.forEach(item => {
    item.classList.remove('search-dropdown_active');
  })
})