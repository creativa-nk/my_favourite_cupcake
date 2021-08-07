

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


/* const cupcake = document.querySelector('.cupcake_contenedor')
const contenedor_mordiscos = document.createElement('div');
contenedor_mordiscos.id = 'contenedor_mordiscos';
document.body.appendChild(contenedor_mordiscos); */

const btn = document.querySelector('.btn')
const contenedor_btn = document.querySelector('.comer')
const btn_comer = document.querySelector('.btn_comer');
const cerrarContenedor = document.querySelector('.btn_x');
const mordisco1 = document.querySelector('.primer_mordisco');
const mordisco2 = document.querySelector('.segundo_mordisco');



btn.addEventListener('click', () =>{
  contenedor_btn.classList.toggle('show');
});

cerrarContenedor.addEventListener('click',() =>{
  contenedor_btn.classList.toggle('show');
 /*  location.reload(); */
} )


const comer = function(i) {
  if(i= 1){
    mordisco1.style.zIndex = 20;
  } else if (i=2){
    mordisco2.style.zIndex = 20;
  }else{
    document.body.style.background = 'red'
  }
      
} 
btn_comer.addEventListener('click', comer)




