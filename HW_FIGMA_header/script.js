const header = document.querySelector('header')
const themeButton = document.querySelector('.nav-mode')

themeButton.addEventListener('click', () => {
    header.classList.toggle('darkMode')
})