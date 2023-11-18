
const app = () => {

    const mobibeMenu = document.getElementById('menu-btn')
    const ul = document.querySelector('.continer')
    const close = document.querySelector('.close')
    const open = document.querySelector('.open')

    toggleMenu = () => {
        ul.classList.toggle('active')
        close.classList.toggle('visible')
        open.classList.toggle('invisible')
    }


    mobibeMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded',app)