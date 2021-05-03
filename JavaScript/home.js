'use strict'
class mascota{
    constructor(categoria,nombre,raza){
        this.categoria = categoria;
        this.nombre = nombre;
        this.raza = raza;
    }
}

const perros = [];
perros.push(new mascota('perro', 'Chester', 'Golden retriever'), new mascota('perro', 'Papi', 'Chihuahua'), new mascota('perro', 'Rocky', 'Rottweiler'), new mascota('perro', 'Pelusa', 'Bichón frisé'));
const gatos = []
gatos.push(new mascota('gato', 'Matilde', 'British Shorthair'), new mascota('gato', 'Pelusa', 'Birmano'), new mascota('gato', 'Kity', 'Bombay'), new mascota('gato', 'Bombon', 'Gato Americano'));

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

const dibujarPerros = () =>{
    // let contenedor_gatos = document.querySelector('.cards_gatos');
    // contenedor_gatos.style.display = 'none';
    let contenedor = document.querySelector('.cards_perros');
    // contenedor.style.display = 'flex';
    imagenes_perros.forEach((perro,index) => {
        if(index == 0 || index == 2){
            contenedor.innerHTML += `
            <img src = "${perro}" class = "${perros[index].nombre}">
            `;
        }
        else if(index == 1 || index == 3){
            contenedor.innerHTML += `
            <img src = "${perro}" class = "${perros[index].nombre}">  `
        }
    });
}

// const dibujarGatos = () =>{
//     let contenedor_perros = document.querySelector('.cards_perros');
//     contenedor_perros.style.display = 'none';
//     let contenedor = document.querySelector('.cards_gatos');
//     contenedor.style.display = 'flex'
//     imagenes_gatos.forEach((gato,index) => {
//         if(index == 0 || index == 2){
//             contenedor.innerHTML += `
//             <img src = "${gato}" class = "${gatos[index].nombre}">
//             `;
//         }
//         else if(index == 1 || index == 3){
//             contenedor.innerHTML += `
//             <img src = "${gato}" class = "${gatos[index].nombre}">  `
//         }
//     });
// }


// Botones con opacity

const dog_boton = document.querySelector('.dog_icon');
const cat_boton = document.querySelector('.cat_icon');

cat_boton.addEventListener("click", dispararOpacidadGato);
dog_boton.addEventListener("click", dispararOpacidadPerro);


const imagenes_perros = ['/imagenes/chester.svg', '/imagenes/papi.svg', '/imagenes/rocky.svg','/imagenes/pelusa.svg']

const imagenes_gatos = ['/imagenes/matilde.png', '/imagenes/pelusa.png', '/imagenes/kity.png', '/imagenes/bombon.png'];
const cards_perros = document.querySelector('#cards-perros');
cards_perros.addEventListener("click", dibujarPerros);




//Prueba de remover 

for(var i = 0; i < perros.length; i++){
    var pruebam = document.querySelector();
}


// function remover (){
//     document.body.removeChild(pruebam);
// }

// const cards_gatos = document.querySelector('#cards-gatos');
// cards_gatos.addEventListener("click",remover);
