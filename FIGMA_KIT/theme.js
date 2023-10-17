
const form = document.querySelector('.form-container')
const modal = document.querySelector(".modal_darkMode")
const themeButton = document.querySelector('#theme_button')
const input = document.querySelectorAll('input')
const savedClasses = localStorage.getItem('savedClasses')

if (savedClasses) {
  form.className = savedClasses
}


   themeButton.addEventListener('click', (event) => {
    event.preventDefault()
    event.stopPropagation()
    form.classList.toggle('darkMode')
    modal.classList.toggle('darkMode')

    input.map(eachInput => eachInput.classList.toggle('darkMode'))   
  localStorage.setItem('savedClasses', form.className)
 
  if (modal.classList.contains(".darkMode")) {
    themeButton.textContent = "light"
  } else {
    themeButton.textContent = "dark"
  }

})

