const menuBare = document.querySelector('.menu-bar')

// THE FIRST METHODE =>

// const humburger = document.querySelector('.menu-bar i.fa-bars')
// const xmark = document.querySelector('.menu-bar i.fa-xmark')

// menuBare.addEventListener('click', () => {
//   humburger.classList.toggle('show')
//   xmark.classList.toggle('show')
// })

// THE SECONDE METHODE =>
const mobileNav = document.querySelector('.mobile-nav')
const icons = document.querySelectorAll('.menu-bar i.fa-solid')
menuBare.addEventListener('click', () => {
  icons.forEach(icon => {
    icon.classList.toggle('show')
    icon.classList.toggle('rotate')
  })
  mobileNav.classList.toggle('show')
})
