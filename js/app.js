

console.log('funciona de manera correcta')

//querySelector
const header = document.querySelector('.header__texto h2') // 0 o 1 elemento
header.textContent = 'nuevo titulo'
console.log(header);

//querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a')
console.log(enlaces)
console.log(enlaces[0])

const enlaces1 = enlaces[0].textContent = 'nuevo enlace'
enlaces1.href = 'www.google.com';
console.log(enlaces1)


//getElementByID

const nuevoEnlace = document.createElement('A');

nuevoEnlace.href = 'nuevo-enlace.html'

nuevoEnlace.textContent = 'un nuevo enlace';

nuevoEnlace.classList.add('navegacion__enlace');

const navbar = document.querySelector('.navegacion')
navbar.appendChild(nuevoEnlace)


console.log(nuevoEnlace);

//eventos


console.log(1);

window.addEventListener('load', function(){ // espera que todos los archovos que dependan del html esten listos
    console.log(2);
});

window.onload =  function(){
    console.log(3);
}


document.addEventListener('DOMContentLoaded', function(){ // solo espera que html este listo
    console.log(4);
});

console.log(5);


function imprimir() {
    console.log(6)
}

window.addEventListener('load', imprimir)


//elemetos y asosciadlos a un evento


// const BtnEnviar = document.querySelector('.boton--primario')

// BtnEnviar.addEventListener('click', function(evento){
//     console.log(evento);
//     evento.preventDefault();
//     //validar formulario
//     console.log('enviando formulario...!')
// });

//eventos de sunmit

//eventos de teclado
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

// submit
const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    console.log(e);

    console.log('Di click y la página ya no recarga');

    console.log(datos);

    // Validar el Formulario...

    const { nombre, email, mensaje } = datos;

    if(nombre === '' || email === '' || mensaje === '' ) {
        console.log('Al menos un campo esta vacio');
        mostrarError('Todos los campos son obligatorios');
        return; // Detiene la ejecución de esta función
    }

    console.log('Todo bien...')

    mostrarMensaje('Mensaje enviado correctamente');
});


function mostrarError(mensaje) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add('error');

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

function mostrarMensaje(mensaje) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add('correcto');
    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}


// Eventos de los Inputs...
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');


nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e) {
    // console.log(e);
    // console.log(e.target.value);

    datos[e.target.id] = e.target.value;

    console.log(datos);
}

