const placeholders = document.querySelectorAll('.cruise-form__text');
const inputs = document.querySelectorAll('.cruise-form__input')

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('focus', () => {
    placeholders[i].classList.add('cruise-form__text_focus')
  })
  inputs[i].addEventListener('blur', (e) => {
    if (e.currentTarget.value === '')
      placeholders[i].classList.remove('cruise-form__text_focus')
  })
}
