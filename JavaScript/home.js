'use strict'
class mascota{
    constructor(categoria,nombre,raza,edad){
        this.categoria = categoria;
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
    }
}

const perros = [];
perros.push(new mascota('perro', 'Chester', 'Golden retriever', '3 Meses'), new mascota('perro', 'Papi', 'Chihuahua', '4 Meses'), new mascota('perro', 'Rocky', 'Rottweiler', '5 Meses'), new mascota('perro', 'Pelusa', 'Bichón frisé', '1 Año'));
const gatos = []
gatos.push(new mascota('gato', 'Matilde', 'British Shorthair', '6 Meses'), new mascota('gato', 'Pelusa', 'Birmano', '1 Año'), new mascota('gato', 'Kity', 'Bombay', '2 Meses'), new mascota('gato', 'Bombon', 'Gato Americano', '4 Meses'));

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
    // Mascotas 1 
    document.querySelector(".mascota1").setAttribute("src",`${imagenes_perros[0]}`)
    document.querySelector(".mascota1").classList.remove('Matilde');
    document.querySelector(".mascota1").classList.add('Chester');
    // Mascotas 2 
    document.querySelector(".mascota2").setAttribute("src",`${imagenes_perros[1]}`)
    document.querySelector(".mascota2").classList.remove('Pelusa');
    document.querySelector(".mascota2").classList.add('Papi');

    //Mascotas 3 
    document.querySelector(".mascota3").setAttribute("src",`${imagenes_perros[2]}`)
    document.querySelector(".mascota3").classList.remove('Kity');
    document.querySelector(".mascota3").classList.add('Rocky');

    // Mascotas 4 
    document.querySelector(".mascota4").setAttribute("src",`${imagenes_perros[3]}`)
    document.querySelector(".mascota4").classList.remove('Bombon');
    document.querySelector(".mascota4").classList.add('Pelusa');
    
}
const dibujarGatos = () =>{
    // Mascotas 1 
    document.querySelector(".mascota1").setAttribute("src",`${imagenes_gatos[0]}`)
    document.querySelector(".mascota1").classList.remove('Chester');
    document.querySelector(".mascota1").classList.add('Matilde');

    // Mascotas 2 
    document.querySelector(".mascota2").setAttribute("src",`${imagenes_gatos[1]}`)
    document.querySelector(".mascota2").classList.remove('Papi');
    document.querySelector(".mascota2").classList.add('Pelusa');

    // Mascotas 3
    document.querySelector(".mascota3").setAttribute("src",`${imagenes_gatos[2]}`)
    document.querySelector(".mascota3").classList.remove('Rocky');
    document.querySelector(".mascota3").classList.add('Kity');

    // Mascotas4
    document.querySelector(".mascota4").setAttribute("src",`${imagenes_gatos[3]}`)
    document.querySelector(".mascota4").classList.remove('Pelusa');
    document.querySelector(".mascota4").classList.add('Bombon');
}

const ocultarSeccion = () => {
    // document.querySelector('.home-title-container').style.display = 'none';
    // document.querySelector('.main-container').style.display = 'none';
    // document.querySelector('.cards-mascotas').style.display = 'none';
    // document.querySelector('#footer-container').style.display = 'none';
}


// Botones con opacity

const imagenes_perros = ['/imagenes/chester.svg', '/imagenes/papi.svg', '/imagenes/rocky.svg','/imagenes/pelusa.svg']

const imagenes_gatos = ['/imagenes/matilde.png', '/imagenes/pelusa.png', '/imagenes/kity.png', '/imagenes/bombon.png'];
const dog_boton = document.querySelector('.dog_icon');
const cat_boton = document.querySelector('.cat_icon');

cat_boton.addEventListener("click", dispararOpacidadGato);
dog_boton.addEventListener("click", dispararOpacidadPerro);


const cards_perros = document.querySelector('#cards-perros');
cards_perros.addEventListener("click", dibujarPerros);

const cards_gatos = document.querySelector('#cards-gatos');
cards_gatos.addEventListener("click", dibujarGatos);

// let chester = document.querySelector('.mascota1');
// chester.addEventListener("click", ocultarSeccion);


let pruebas = [];

const descripcionChester = () => {
    document.querySelector('.home-title-container').style.display = 'none';
    document.querySelector('.main-container').style.display = 'none';
    document.querySelector('.cards-mascotas').style.display = 'none';
    document.querySelector('#footer-container').style.display = 'none';
    const c = document.querySelector('#body')
    c.innerHTML = `
    
    <a class = 'back' href = "home.html"> 
        <img src = '/imagenes/back.png'>
    </a>
    <header class = "imagen-grande-mascota">
            <img  src = '/imagenes/rocky-grande.png'>
        </header>
        <main class = 'mascota-container'>
            <div class = "informacion-container"> 
                <div class = "title-container"> 
                    <div>${pruebas[0].nombre} 
                    </div>
                    <img  src = '/imagenes/masculino.png'>
                </div>
                <div class = "icono-favoritos">
                    <img src = '/imagenes/favoritos-circulo.png'>  
                </div>
            </div>
            <div class = "title-container-two">
                <div class = 'raza-container'>
                    <img src = '/imagenes/pergamino.png'>
                    <div>
                        ${pruebas[0].raza}
                    </div>
                </div>
                <div class = 'edad-container'>
                    <div> 
                        <img src = '/imagenes/mascota-peque.png'>
                    </div>
                    <div class = "title-container"> ${pruebas[0].edad}</div>
                </div>
            </div>
            <div class = 'ubication-container'> 
                <img src = '/imagenes/ubicacion.png'>
                <div>4140 Parker Rd. Allentown, </br>
                New Mexico 31134</div>
            </div>
            <div class = 'personalidades-container'>
                <div class = 'personalidad-title'> Personalidad </div>
                <div class = 'personalidades-img'>
                    <img src = '/imagenes/cariñoso.png' style = "padding-right: 24px;">
                    <img src = '/imagenes/inquieto.png' style = "padding-right: 24px;">
                    <img src = '/imagenes/jugueton.png'>
                </div>
            </div>
            <div class = 'description-container'>
                <div>  Historia de ${pruebas[0].nombre}  </div>
                <p>  ${pruebas[0].nombre} es un ${pruebas[0].categoria} muy lindo y cariñoso, tiene 5 hermanitos más y por cuestiones de espacio y tiempo no podremos cuidar a todos, nuestra misión es encontrar la familia ideal para él y seguro que tú eres la persona indicada.  </p>
            </div>
            <div class = 'contacto-description'>
                <div class = 'persona-description'>
                    <img src = '/imagenes/mifoto.jpg' width = '42px' height = '42px'>
                    <div> 
                        <span class = 'publicado-por'>Publicado por </span>
                        <span class = 'name-publicacion'> Ysnaldo Lopez </span>
                    </div>
                </div>
                <button> 
                    Contactar
                </button>
            </div>
        </main>
    
    `;
    pruebas = [];
}


const mascotas1 = () => {
    if(mascota1.classList.contains('Chester')){
        pruebas.push(new mascota('perro', 'Chester', 'Golden retriever', '3 Meses'))
        descripcionChester();
    }
    else if(mascota1.classList.contains('Matilde')){
        pruebas.push(new mascota('gato', 'Matilde', 'British Shorthair', '6 Meses'))
        descripcionChester();
    }
}

const mascotas2 = () => {
    if(mascota2.classList.contains('Papi')){
        pruebas.push(new mascota('perro', 'Papi', 'Chihuahua', '4 Meses'));
        descripcionChester();
    }
    else if(mascota2.classList.contains('Pelusa')){
        pruebas.push(new mascota('gato', 'Pelusa', 'Birmano', '1 Año'))
        descripcionChester();
    }
}

const mascotas3 = () => {
    if(mascota3.classList.contains('Rocky')){
        pruebas.push(new mascota('perro', 'Rocky', 'Rottweiler', '5 Meses'));
        descripcionChester();
    }
    else if(mascota3.classList.contains('Kity')){
        pruebas.push(new mascota('gato', 'Kity', 'Bombay', '2 Meses'))
        descripcionChester();
    }
}

const mascotas4 = () => {
    if(mascota4.classList.contains('Pelusa')){
        pruebas.push(new mascota('perro', 'Pelusa', 'Bichón frisé', '1 Año'));
        descripcionChester();
    }
    else if(mascota4.classList.contains('Bombon')){
        pruebas.push(new mascota('gato', 'Bombon', 'Gato Americano', '4 Meses'))
        descripcionChester();
    }
}

let mascota1 = document.getElementById('mascota1');
mascota1.addEventListener("click", mascotas1);

let mascota2 = document.getElementById('mascota2');
mascota2.addEventListener("click", mascotas2 );

let mascota3 = document.getElementById('mascota3');
mascota3.addEventListener("click", mascotas3 );

let mascota4 = document.getElementById('mascota4');
mascota4.addEventListener("click", mascotas4 );




