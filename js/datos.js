'use strict'

// Obtener datos del formulario 

const recibirDatos = (e) => {
    e.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let correo = document.getElementById('correo').value;
    
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellido", apellido);
    localStorage.setItem("correo", correo); 
}

let obtenerNombre = localStorage.getItem("nombre");
let obtenerApellido = localStorage.getItem("apellido");
let obtenerCorreo = localStorage.getItem("correo");

document.querySelector('#nombre').setAttribute("value",obtenerNombre);
document.querySelector('#apellido').setAttribute("value",obtenerApellido);
document.querySelector('#correo').setAttribute("value",obtenerCorreo);


let boton_recibir = document.getElementById('boton-envio');
boton_recibir.addEventListener("click", recibirDatos);

