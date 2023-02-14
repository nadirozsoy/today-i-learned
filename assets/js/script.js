const btnHeader = document.querySelector('.header__btn')
const form = document.querySelector('.fact-form')

btnHeader.addEventListener('click', (e) => {
  if (form.classList.contains('hidden')) {
    form.classList.remove('hidden')
    btnHeader.textContent = 'Close'
  } else {
    form.classList.add('hidden')
    btnHeader.textContent = 'Share a fact'
  }
  e.preventDefault()
})
