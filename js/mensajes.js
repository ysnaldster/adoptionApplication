'use strict'
// Seccion de mensajes 
const detallesMensajes = () => {
    document.querySelector('.title-container').style.display = 'none';
    document.querySelector('.content-container').style.display = 'none';
    document.querySelector('#footer-container').style.display = 'none';
    const e = document.querySelector('#body');
    e.innerHTML = `
    
        <header class = "descripcion-container-mensajes"> 
            <div class = "cabecera-container"> 
                <div class = "person-img">
                    <img src="./imagenes/perfil-img.svg" width="64px" height="64px">
                </div>
                <div class = "person-title" >Mario Dolores</div>
            </div>
        </header>
        <main>

        <input type = "text">
            </main>

    `;
}




let flecha = document.getElementById('ir-mensajes');
flecha.addEventListener("click", detallesMensajes);

