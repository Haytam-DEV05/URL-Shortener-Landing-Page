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

// MAKE THE ANIMATION USING INTERSECTION OBSERVER =>

const boxes = document.querySelectorAll(
  '.about .container .container-boxes .box'
)

const observer = new IntersectionObserver(entries => {
  entries.forEach(entrie => {
    if (entrie.isIntersecting) {
      entrie.target.classList.add('box-animation')
      observer.unobserve(entrie.target)
    }
  })
})

boxes.forEach((box, index) => {
  box.style.animationDelay = index * 0.1 + 's'
  observer.observe(box)
})
