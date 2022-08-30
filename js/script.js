//alert('hola mundo')
const menuInicioJuego = document.getElementById('menu-inicio-juego')
const menuInstruccionesJuego = document.getElementById('menu-instrucciones-juego')
const botonInstruccionesJuego = document.getElementById('boton-instruccion-inicio')
const contenedorJuego = document.getElementById('contenedor-juego-principal')
const botonJugar = document.getElementById('boton-inicio-juego')
const botonInstrucciones = document.getElementById('boton-instrucciones-juego')
const botonReiniciar = document.getElementById('boton-reiniciar')
function juegoGato() {
    contenedorJuego.style.display = 'none'
    menuInstruccionesJuego.style.display = 'none'
    botonJugar.addEventListener('click', juegoPrincipal)
    botonInstrucciones.addEventListener('click', instruccionesJuego)
}
function instruccionesJuego() {
    menuInicioJuego.style.display = 'none'
    menuInstruccionesJuego.style.display = 'grid'
    botonInstruccionesJuego.addEventListener('click', juegoPrincipal)
}
function juegoPrincipal() {
    menuInicioJuego.style.display = 'none'
    menuInstruccionesJuego.style.display = 'none'
    contenedorJuego.style.display = 'block'
}
window.addEventListener('load', juegoGato)