'use strict'

// Funciones para opacidad de botones

const dispararOpacidadGato = () => {
    cat_boton.classList.remove('opacity_inactiva');
    cat_boton.classList.add('.opacity_activa');
    dog_boton.classList.remove('.opacity_activa')
    dog_boton.classList.add('opacity_inactiva');
   
}
const dispararOpacidadPerro = () => {
    cat_boton.classList.remove('.opacity_activa');
    cat_boton.classList.add('opacity_inactiva');
    dog_boton.classList.remove('opacity_inactiva');
    dog_boton.classList.add('.opacity_activa');
}    

// Botones con opacity

const dog_boton = document.querySelector('.dog_icon');
const cat_boton = document.querySelector('.cat_icon');

cat_boton.addEventListener("click", dispararOpacidadGato);
dog_boton.addEventListener("click", dispararOpacidadPerro);

let direccion = '/imagenes/chester.svg';

let contenedor = document.querySelector('.prueba1');
contenedor.innerHTML += `
    <img  src = "${direccion}">
    <img  src = "${direccion}">
    <img  src = "${direccion}">
    <img  src = "${direccion}">
`;