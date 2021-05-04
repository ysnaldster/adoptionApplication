'use strict'

// Obtener datos del formulario 

const recibirDatos = () => {
    let nombre = document.getElementById('nombre');
    nombre.setAttribute("value", nombre.value);
    let apellido = document.getElementById('apellido');
    apellido.setAttribute("value", apellido.value);
    let correo = document.getElementById('correo');
    correo.setAttribute("value", correo.value);
    // let persona = {
    //     nombre: nombre,
    //     apellido: apellido,
    //     correo: correo
    // }
    
    localStorage.setItem("nombre", nombre.value);
    localStorage.setItem("apellido", apellido.value);
    localStorage.setItem("correo", correo.value);
    // localStorage.setItem("usuario", JSON.stringify(persona));
    
}



let boton_recibir = document.getElementById('boton-envio');
boton_recibir.addEventListener("click", recibirDatos);


// Uso de localStorage
