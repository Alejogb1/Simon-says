

const $botonplay = document.querySelector("#b-play");
const $containerBloques = document.querySelectorAll(".items")
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
    
    //
    secuencia_usuario.push($seleccionado)       
    // Cuadro 1 // Array [0]
    const $cuadroMaquina = secuencia_pc[secuencia_usuario.length -1];
    if ($seleccionado.id !== $cuadroMaquina.id){
        perder();
        return;
    }
    else if (secuencia_usuario.length === secuencia_pc.length){
        bloquearInputUsuario();
        setTimeout(manejarTurnoPC, 1000)
    }
}
function selectBlock (bloque){
        bloque.style.opacity = 1;  
}  

function actualizarTexto (texto) {
   const TEXTO_ELEMENT = document.querySelector("#text-play");
   TEXTO_ELEMENT.textContent =  texto;
}
function actualizarRonda (){
    const RONDA_ELEMENT = document.querySelector("#ronda");
    RONDA_ELEMENT.textContent =  ronda;
}
function numeroRandom () {
   return parseInt((4)*(Math.random()))
}
function manejarTurnoPC(){
    bloquearInputUsuario();
    actualizarTexto("Turno de la pc")
    const $numeroAleatorio = numeroRandom();
    secuencia_pc.push($numeroAleatorio);
    const RETRASO_JUGADOR = 1000;
    $containerBloques.forEach(function(bloque, index){
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
    secuencia_usuario= [];
    ronda ++;
    actualizarRonda (ronda)
}