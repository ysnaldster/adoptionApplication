'use strict'

// Obtener datos del formulario 

const recibirDatos = (e) => {
    e.preventDefault();
    let persona = {
        nombre: "",
        apellido: "",
        correo: ""
    }
    persona.nombre = document.getElementById('nombre').value;
    persona.apellido = document.getElementById('apellido').value;
    persona.correo = document.getElementById('correo').value;

    localStorage.setItem("nombre", persona.nombre);
    localStorage.setItem("apellido", persona.apellido);
    localStorage.setItem("correo", persona.correo); 
    console.log(persona);
    
}


let obtenerNombre = localStorage.getItem("nombre");
let obtenerApellido = localStorage.getItem("apellido");
let obtenerCorreo = localStorage.getItem("correo");

document.querySelector('#nombre').setAttribute("value",obtenerNombre);
document.querySelector('#apellido').setAttribute("value",obtenerApellido);
document.querySelector('#correo').setAttribute("value",obtenerCorreo);


let boton_recibir = document.getElementById('boton-envio');
boton_recibir.addEventListener("click", recibirDatos);


