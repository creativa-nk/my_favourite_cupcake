

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

const btn = document.querySelector('.btn');
const contenedor_btn = document.querySelector('.comer');
const btn_mas = document.querySelector(".btn_mas");
const btn_comer = document.querySelector('.btn_comer');
const cerrarContenedor = document.querySelector('.btn_x');
const mordisco1 = document.querySelector('.primer_mordisco');
const mordisco2 = document.querySelector('.segundo_mordisco');
const mordisco3 = document.querySelector('.tercer_mordisco');
const mordisco4 = document.querySelector('.cuarto_mordisco');
const mordisco5 = document.querySelector('.quinto_mordisco');


btn.addEventListener('click', () =>{
  contenedor_btn.classList.toggle('show');
});

cerrarContenedor.addEventListener('click',() =>{
  contenedor_btn.classList.toggle('show');
  location.reload();
} );

btn_mas.addEventListener('click', () =>{
  location.reload();
})


var contador = '0'; 

const comer = function() {

    if(contador == 0){
      mordisco1.style.opacity = 1;
       console.log('uno') 
       contador++;
     } else if(contador == 1){
       mordisco2.style.opacity = 1;
       console.log('dos')
       contador++;
    } else if(contador == 2){
      mordisco3.style.opacity = 1;
      console.log('tres')
      contador++;
    }else{
      mordisco4.style.opacity = 1;
      mordisco5.style.opacity = 1;
      btn_mas.style.opacity = 1;
      btn_mas.style.zIndex = 20;
      console.log('cuatro')
      contador++;
    }
        
  }

  btn_comer.addEventListener('click', comer)




  let glowInTexts = document.querySelectorAll(".glowIn");

  glowInTexts.forEach(glowInText => {
     let letters = glowInText.textContent.split("");
     glowInText.textContent = "";
     letters.forEach((letter, i) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${i * 0.05}s`;
        glowInText.append(span);
  });
});

 





