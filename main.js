
/* const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox) */

let lightbox1 = document.querySelector('.crema_cupcake')

const images = document.querySelectorAll('img')
images.forEach(image => {
  image.addEventListener('click', e => {
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox1.firstChild) {
      lightbox1.removeChild(lightbox1.firstChild)
    }
    lightbox1.appendChild(img)
  })
})

/* lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
}) */

let lightbox2 = document.querySelector('.base_cupcake')

const images2 = document.querySelectorAll('.bases img')
images2.forEach(image => {
  image.addEventListener('click', e => {
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox2.firstChild) {
        lightbox2.removeChild(lightbox2.firstChild)
      }
    lightbox2.appendChild(img)
  })
})
