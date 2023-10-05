/* alert del acerca de*/
window.onload = function() {
  alert("¡Bienvenido/as a la página web de emprendedores! Aquí encontrarás información sobre el equipo. Esperamos poder ayudarte.");
};

function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    if (!validarNombre(nombre)) {
        alert("El nombre no es válido. Debe contener solo letras y espacios, hasta 50 caracteres.");
        return false;
    }

    if (!validarEmail(email)) {
        alert("El correo electrónico no es válido.");
        return false;
    }

    if (!validarMensaje(mensaje)) {
        alert("El mensaje no es válido. Debe tener máximo 300 caracteres.");
        return false;
    }

    return true;
}

function validarNombre(nombre) {
    return /^[a-zA-Z\s]{1,50}$/.test(nombre);
}

function validarEmail(email) {
    return /^[A-Za-z0-9+_.-]+@(.+)$/.test(email);
}

function validarMensaje(mensaje) {
    return mensaje.length <= 300;
}
function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
}
// Recuperar los datos del localStorage
var equipoJSON = localStorage.getItem('equipo');

// Convertir el JSON de vuelta a un objeto JavaScript
var equipo = JSON.parse(equipoJSON);

// Obtener el contenedor donde quieres mostrar los datos del equipo
var equipoContainer = document.getElementById('equipo-container');

// Recorrer el objeto de datos del equipo y mostrarlos en el DOM
equipo.forEach(function(miembro) {
    var divMiembro = document.createElement('div');
    divMiembro.classList.add('miembro');

    var nombre = document.createElement('h3');
    nombre.innerText = miembro.nombre;

    var funcion = document.createElement('p');
    funcion.innerText = miembro.funcion;

    divMiembro.appendChild(nombre);
    divMiembro.appendChild(funcion);

    equipoContainer.appendChild(divMiembro);
});
