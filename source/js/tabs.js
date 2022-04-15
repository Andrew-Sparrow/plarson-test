const tabs = document.querySelector('.tabs');
const tabsField = document.querySelector('.tabs-field');
const cabins = tabsField.querySelectorAll('.tabs-item');

tabs.addEventListener('click', (e) => {
  if (e.target.classList.contains('tabs__button')) {
    document.querySelectorAll('.tabs__button').forEach(item => {
      item.classList.remove('tabs__button_active')
    })

    cabins.forEach(item => {
      item.style.display = 'none';
    })

    document.querySelectorAll(`[data-${e.target.dataset.type}]`).forEach(item => {
      item.style.display = null;
    })
    
    e.target.classList.add('tabs__button_active');

    if(!e.target.dataset.type) {
      cabins.forEach(item => {
        item.style.display = null;
      })
    }
    // shipSwiper.updateSlides()
  }
})