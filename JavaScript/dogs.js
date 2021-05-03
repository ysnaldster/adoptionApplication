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

const imagenes_perros = ['/imagenes/chester.svg', '/imagenes/papi.svg', '/imagenes/rocky.svg','/imagenes/pelusa.svg']

// console.log(imagenes_perros);
// let filtracion = perros.filter((valor) => {
//     // console.log(valor.categoria);
//     valor.nombre.toLocaleLowerCase() == 'Chester'
// })
// console.log(filtracion);

// perros.forEach(perro => {
//     switch (perro.nombre) {
//         case 'Chester':
            
//             break;
    
//         default:
//             break;
//     } 
// });

let contenedor_perros1 = document.querySelector('.perros1');
let contenedor_perros2 = document.querySelector('.perros2');

imagenes_perros.forEach((perro,index) => {
    if(index == 0 || index == 2){
        contenedor_perros1.innerHTML += `
        <img src = "${perro}" class = "${perros[index].nombre}">
        `;
    }
    else if(index == 1 || index == 3){
        contenedor_perros2.innerHTML += `
        <img src = "${perro}" class = "${perros[index].nombre}">  `
    }
});


