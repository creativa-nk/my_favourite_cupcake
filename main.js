

let lightbox1 = document.querySelector('.crema_cupcake')

const images = document.querySelectorAll('.cremas img')
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



let lightbox3 = document.querySelector('.crema_topping')

const images3 = document.querySelectorAll('.topping img')
images3.forEach(image => {
  image.addEventListener('click', e => {
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox3.firstChild) {
        lightbox3.removeChild(lightbox3.firstChild)
      }
    lightbox3.appendChild(img)
  })
})

