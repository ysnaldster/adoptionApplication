'use strict';
// Evento Load
setInterval(function () {
   loadEvent();
}, 2000);

function loadEvent() {
    document.getElementById('loader-event').classList.add('hide');
}

// Funciones a utilizar 
// Funciones para quitar secciones 
function ocultarSeccion() {
    const ocultarOnePage = document.querySelector('.container-description');
    ocultarOnePage.classList.add('hide');
    const secondPage = document.querySelector('.container-description-second');
    secondPage.classList.remove('hide');
}


// Evento de boton siguiente uno
const activarSecondPage = document.getElementById('container-description');
activarSecondPage.addEventListener("click", ocultarSeccion);


