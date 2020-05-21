

const $botonplay = document.querySelector("#b-play");
let secuencia_pc = [];
let secuencia_usuario = [];
let ronda = 0;

$botonplay.onclick = function play (){
    manejarTurnoPC();
};

function bloquearInputUsuario (){
        document.querySelectorAll(".items").forEach(
            function(bloque){
                bloque.onclick = function (){};
            }
        )
    }

function desbloquearInputUsuario (){
    document.querySelectorAll(".items").forEach(function(item){
        item.onclick = manejarInputUsuario;
    })
}
function manejarInputUsuario (e){
    const $seleccionado = e.target;
    console.log($seleccionado);
    selectBlock($seleccionado);    
}
function selectBlock (item){
        item.style.opacity = 1;  
}  

function actualizarTexto (texto) {
   const TEXTO_ELEMENT = document.querySelector("#text-play");
   TEXTO_ELEMENT.textContent =  texto;
}
function actualizarRonda (){
    const RONDA_ELEMENT = document.querySelector("#ronda");
    RONDA_ELEMENT.textContent =  ronda;
}
function manejarTurnoPC(){
    bloquearInputUsuario();
    actualizarTexto("Turno de la pc")
    const $numeroAleatorio = randomNumber();
    secuencia_pc.push($numeroAleatorio);
    const RETRASO_JUGADOR = 1000;
    secuencia_pc.forEach(function(bloque, index){
        RETRASO_MS = 1000   
        setTimeout(() => {
        selectBlock(bloque)
        }, RETRASO_MS);
    })
   setTimeout(
       function(){
        actualizarTexto("Es el turno del jugador")
        desbloquearInputUsuario();
       }, RETRASO_JUGADOR
   )
    ronda ++;
    actualizarRonda (ronda)
}