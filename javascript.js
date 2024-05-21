window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("scroll", window.scrollY>0);
});

function mostrarInformacion(id) {
    // Ocultar todas las secciones de información
    const secciones = document.querySelectorAll('.cronograma_day');
    secciones.forEach(function(seccion) {
        seccion.style.display = 'none';
    });
    // Mostrar la} sección de información correspondiente al botón clicado
    const seccionSeleccionada = document.getElementById(id);
    if (seccionSeleccionada) {
        seccionSeleccionada.style.display = 'block';
    }
}

document.getElementById("nav_responsive-button").addEventListener("click", function() {
    const menuItems = document.querySelector(".nav_li-container");
    const menuBoton = document.querySelector(".nav_responsive-ul");
    
    // Verificar si el menú está visible
    if (menuItems.style.display === "flex") {
        // Si está visible, ocultarlo
        menuItems.style.display = "none";
        // Restaurar el color de fondo original
        menuBoton.style.background = "transparent";
    } else {
        // Si está oculto, mostrarlo
        menuItems.style.display = "flex";
        // Cambiar el color de fondo
        menuBoton.style.background = "rgb(13, 33, 161)";
    }
});

const elementosPreguntas = document.querySelectorAll(".preguntas_card-item");

elementosPreguntas.forEach(function(elemento) {
    elemento.addEventListener("click", function() {
        const estiloPreguntas = this;
        const computedStyle = window.getComputedStyle(estiloPreguntas);

        if(computedStyle.backgroundColor === "rgb(0, 76, 178)") {
            estiloPreguntas.style.backgroundColor = "rgba(232, 232, 232, 0.6)";
            estiloPreguntas.style.color = "#212b82";
            estiloPreguntas.style.borderRadius = "20px";
            estiloPreguntas.style.transition = "0.2s";
        } else {
            estiloPreguntas.style.backgroundColor = "#004CB2";
            estiloPreguntas.style.color = "#ffff";
            estiloPreguntas.style.borderRadius = "20px 20px 0px 0px";
            estiloPreguntas.style.transition = "0.2s";
        }
    });
});

const botonUno = document.querySelector(".buttonUno");
const botonDos = document.querySelector(".buttonDos");
const botonTres = document.querySelector(".buttonTres");

botonUno.addEventListener("click", function(){
    botonUno.style.backgroundColor = "#0074ca"
    botonDos.style.backgroundColor = "#004cb2"
    botonTres.style.backgroundColor = "#004cb2"
})
botonDos.addEventListener("click", function(){
    botonUno.style.backgroundColor = "#004cb2"
    botonDos.style.backgroundColor = "#0074ca"
    botonTres.style.backgroundColor = "#004cb2"
})
botonTres.addEventListener("click", function(){
    botonUno.style.backgroundColor = "#004cb2"
    botonDos.style.backgroundColor = "#004cb2"
    botonTres.style.backgroundColor = "#0074ca"
})