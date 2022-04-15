const questionsContainer = document.querySelector('.questions__list');
const questionsDropdowns = questionsContainer.querySelectorAll('.questions__dropdown');

questionsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('questions__button')) {
    const item = questionsDropdowns[e.target.dataset.index - 1];

    questionsContainer.querySelectorAll('.questions__button').forEach((elem, index) => {
      if (index !== Number(e.target.dataset.index - 1)) {
        elem.classList.remove('questions__button_active');
      }
    })

    questionsDropdowns.forEach((elem, index) => {
      if (index !== Number(e.target.dataset.index - 1)) {
        elem.style.maxHeight = null;
      }
    })

    e.target.classList.toggle('questions__button_active');

    if (item) {
      if (item.style.maxHeight) {
        item.style.maxHeight = null;
      } else {
        item.style.maxHeight = item.scrollHeight + 26 + "px";
      }
    }
  }
})
