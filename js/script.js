//alert('hola mundo')
const menuInicioJuego = document.getElementById('menu-inicio-juego')
const menuInstruccionesJuego = document.getElementById('menu-instrucciones-juego')
const botonInstruccionesJuego = document.getElementById('boton-instruccion-inicio')
const contenedorJuego = document.getElementById('contenedor-juego-principal')
const botonJugar = document.getElementById('boton-inicio-juego')
const botonInstrucciones = document.getElementById('boton-instrucciones-juego')
const botonReiniciar = document.getElementById('boton-reiniciar')
let contenedorTarjetaCarta = document.getElementById('contenedor-tarjeta-letra')
const letrasTeclado = document.getElementById('contenedor-letra-teclado')
const contenedorTarjetaGato = document.getElementById('contenedor-tarjeta-gato')
const contenedorReferenciaAcertijo = document.getElementById('contenedor-referencia-acertijo')
let oportunidadesJugador = document.getElementById('oportunidades')
let darMensajeFinal = document.getElementById('mensaje-final')
let palabra = []
let estados = []
let letrasPalabra= []
let botones = []
let asignaletra
let oportunidades
let cont = 0
const botonTeclado = document.getElementsByClassName('letra') 
class Ahorcados{
    constructor(nombre, oportunidad){
        this.nombre = nombre
        this.palabra = []
        this.oportunidad = oportunidad
        this.estados = []
    }
}
let acertijoUno = new Ahorcados('acertijoUno', 10)
let acertijoDos = new Ahorcados('acertijoDos', 10)
acertijoUno.estados.push(
    {estado: 'inicial', gato: '../assets/cheviches.png', reina: '../assets/pregunta1.png', mensaje:'BUENA SUERTE'},
    {estado: 'gana', gato: '../assets/inicio.png', reina: '../assets/reina.png', mensaje:'FELICITACIONES'},
    {estado: 'pierde', gato: '../assets/perdiste.png', reina: '../assets/respuesta1.png', mensaje:'PERDISTE, INTENTA DE NUEVO'}
)
acertijoDos.estados.push(
    {estado: 'inicial', gato: '../assets/cheviches.png', reina: '../assets/pregunta2.png', mensaje:'BUENA SUERTE'},
    {estado: 'gana', gato: '../assets/inicio.png', reina: '../assets/reina.png', mensaje:'FELICITACIONES'},
    {estado: 'pierde', gato: '../assets/perdiste.png', reina: '../assets/respuesta2.png', mensaje:'PERDISTE, INTENTA DE NUEVO'}
)
acertijoUno.palabra.push(
    {nombre: 'soldado', imagenCarta: '../assets/carta.png', letra: 'D'},
    {nombre: 'soldado', imagenCarta: '../assets/carta.png', letra: 'I'},
    {nombre: 'soldado', imagenCarta: '../assets/carta.png', letra: 'F'},
    {nombre: 'soldado', imagenCarta: '../assets/carta.png', letra: 'E'},
    {nombre: 'soldado', imagenCarta: '../assets/carta.png', letra: 'R'},
    {nombre: 'soldado', imagenCarta: '../assets/carta.png', letra: 'E'},
    {nombre: 'soldado', imagenCarta: '../assets/carta.png', letra: 'N'},
    {nombre: 'soldado', imagenCarta: '../assets/carta.png', letra: 'C'},
    {nombre: 'soldado', imagenCarta: '../assets/carta.png', letra: 'I'},
    {nombre: 'soldado', imagenCarta: '../assets/carta.png', letra: 'A'}
)
acertijoDos.palabra.push(
    {nombre: 'soldado', imagenCarta: '../assets/carta.png', letra: 'L'},
    {nombre: 'soldado', imagenCarta: '../assets/carta.png', letra: 'O'},
    {nombre: 'soldado', imagenCarta: '../assets/carta.png', letra: 'C'},
    {nombre: 'soldado', imagenCarta: '../assets/carta.png', letra: 'U'},
    {nombre: 'soldado', imagenCarta: '../assets/carta.png', letra: 'R'},
    {nombre: 'soldado', imagenCarta: '../assets/carta.png', letra: 'A'}
)
let acertijos = [acertijoUno, acertijoDos]
const tecladoJuego = [
                "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
                "A", "S", "D", "F", "G", "H", "J", "K", "L","Ñ",
                "Z", "X", "C", "V", "B", "N", "M"
            ];

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
    contenedorJuego.style.display = 'grid'
    botonReiniciar.style.display = 'none'
    vectorBotones()
    extraerAcertijo()
    encontrarPalabra()
}
function asignaLetraCarta(letra, boton){
    let letraEncontrada
    asignaletra = document.getElementsByClassName(`carta ${letra}`)
    console.log(asignaletra)
    if(asignaletra.length != 0){
        for (let i = 0; i < asignaletra.length; i++) {
            letraEncontrada = letra
            asignaletra[i].innerHTML = letraEncontrada
            cont++
        }
        boton.style.background = '#06FF00'                 
    }else{
        boton.style.background = '#FF1818'
    }
    oportunidades--
    oportunidadesJugador.innerHTML = oportunidades
    boton.disabled = true
}
function encontrarPalabra(){
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            switch (e.target.textContent) {
                case "A":
                    asignaLetraCarta('A', boton)
                    break;
                case "B":
                    asignaLetraCarta('B', boton)
                    break;
                case "C":
                    asignaLetraCarta('C', boton)
                    break;
                case "D":
                    asignaLetraCarta('D', boton)
                    break;
                case "E":
                    asignaLetraCarta('E', boton)
                    break;
                case "F":
                    asignaLetraCarta('F', boton)
                    break;
                case "G":
                    asignaLetraCarta('G', boton)
                    break;
                case "H":
                    asignaLetraCarta('H', boton)
                    break;
                case "I":
                    asignaLetraCarta('I', boton)
                    break;
                case "J":
                    asignaLetraCarta('J', boton)
                    break;
                case "K":
                    asignaLetraCarta('K', boton)
                    break;
                case "L":
                    asignaLetraCarta('L', boton)
                    break;
                case "M":
                    asignaLetraCarta('M', boton)
                    break;
                case "N":
                    asignaLetraCarta('N', boton)
                    break;
                case "Ñ":
                    asignaLetraCarta('Ñ', boton)
                    break;
                case "O":
                    asignaLetraCarta('O', boton)
                    break;
                case "P":
                    asignaLetraCarta('P', boton)
                    break;
                case "Q":
                    asignaLetraCarta('Q', boton)
                    break;
                case "R":
                    asignaLetraCarta('R', boton)
                    break;
                case "S":
                    asignaLetraCarta('S', boton)
                    break;
                case "T":
                    asignaLetraCarta('T', boton)
                    break;
                case "U":
                    asignaLetraCarta('U', boton)
                    break;
                case "V":
                    asignaLetraCarta('V', boton)
                    break;
                case "W":
                    asignaLetraCarta('W', boton)
                    break;
                case "X":
                    asignaLetraCarta('X', boton)
                    break;
                case "Y":
                    asignaLetraCarta('Y', boton)
                    break;
                case "Z":
                    asignaLetraCarta('Z', boton)
                    break;
                default:
                    console.log('defecto')
                    break;
            }
            DesicionFinal()
        })
    })
}
function DesicionFinal(){
    if(palabra.length === cont){
        colocarEstados('gana')
        desabilitarBotones()
    }else if(oportunidades === 0) {
        colocarEstados('pierde')
        desabilitarBotones()
    }
}
function desabilitarBotones() {
    let mostrarMensaje
    botones.forEach((boton) => {
        if(boton.disabled === false){
            boton.disabled = true
        }
    });
    botonReiniciar.style.display = 'block'
    botonReiniciar.addEventListener('click', reiniciarJuego)
}
function reiniciarJuego() {
    location.reload()
}
function extraerAcertijo(){
    let cambiarGato
    acertijoAleatorio = acertijos.sort(() => Math.random()-0.5)[0].nombre
    for (let i = 0; i < acertijos.length; i++) {
        if(acertijoAleatorio === acertijos[i].nombre){
            palabra = acertijos[i].palabra
            estados = acertijos[i].estados
            oportunidades = acertijos[i].oportunidad       
        }
    }
    mostrarAcertijo()
    colocarEstados('inicial')
}
function mostrarAcertijo() {
    let opcionAcertijo
    palabra.forEach((carta) => {
        opcionAcertijo = document.createElement('p')
        opcionAcertijo.classList.add('carta', `${carta.letra}`)
        opcionAcertijo.innerHTML = `<img src=${carta.imagenCarta} alt=${carta.nombre} style="
        width: 100%;
    "/>`
        contenedorTarjetaCarta.appendChild(opcionAcertijo)
    })
    
}
function colocarEstados(momento) {
    let opcionGato
    let opcionReferencia
    estados.forEach((estado) => {
        if(estado.estado === momento){
            opcionGato =`<figure><img src=${estado.gato} alt="gato"/></figure>`
            contenedorTarjetaGato.innerHTML = opcionGato
            opcionReferencia = `<img src=${estado.reina} alt="reina"/>`
            contenedorReferenciaAcertijo.innerHTML = opcionReferencia
            darMensajeFinal.innerHTML = estado.mensaje
        }
    })
    
}
function vectorBotones() {
    let opcionBotonTecla
    let cont = 0
    for (let i = 0; i < tecladoJuego.length; i++) {
        opcionBotonTecla= document.createElement("button")
        opcionBotonTecla.classList.add('letra', tecladoJuego[i])
        opcionBotonTecla.innerHTML = tecladoJuego[i]
        letrasTeclado.appendChild(opcionBotonTecla)
        if (cont == 9) {
            letrasTeclado.appendChild(document.createElement("br"));
            cont=0
        }
        cont++
    }
    botones = document.querySelectorAll('.letra')    
}
window.addEventListener('load', juegoGato)