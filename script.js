const sr = ScrollReveal({
    distance: '65px',
    duration: 2000,
    delay: 450,
    reset: true,
})

sr.reveal('.hero-text', {delay: 100, origin: 'top'})
sr.reveal('.hero-img', {delay: 350, origin: 'right'})
sr.reveal('.icons', {delay: 200, origin: 'left'})
sr.reveal('.scroll-down', {delay: 220, origin: 'right'})

const burgerMenu = document.querySelector('#burger-menu-icon')
const navList = document.querySelector('.navlist')
console.log(navList)

burgerMenu.onclick = () => {
    burgerMenu.classList.toggle('bx-x')
    navList.classList.toggle('open')
}
