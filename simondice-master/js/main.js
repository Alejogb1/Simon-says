

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
function perder (){
    alert("Perdiste Looser");
    secuencia_pc = [];
    secuencia_usuario =[];
    ronda = 0;
    actualizarTexto("Volvé a intentarlo.");
    actualizarRonda(ronda);
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
        setTimeout(function() {
            bloque.style.opacity = 0.5;
        },500)
}  

function actualizarTexto (texto) {
   const TEXTO_ELEMENT = document.querySelector("#text-play");
   TEXTO_ELEMENT.textContent =  texto;
}
function actualizarRonda (){
    const RONDA_ELEMENT = document.querySelector("#ronda");
    RONDA_ELEMENT.textContent =  ronda;
}
function cuadroRandom () {
    const $containerBloques = document.querySelectorAll(".items")
    const indice = parseInt((4)*(Math.random()))
    return $containerBloques[indice]
}
function manejarTurnoPC(){
    bloquearInputUsuario();
    actualizarTexto("PC's turn. ")
    const $numeroAleatorio = cuadroRandom();
    secuencia_pc.push($numeroAleatorio);
    const RETRASO_JUGADOR = (secuencia_pc.length +1)* 1000;
    secuencia_pc.forEach(function(bloque, index){
        RETRASO_MS = (index + 1) * 1000;   
        setTimeout(() => {
        selectBlock(bloque)
        }, RETRASO_MS);
    })
   setTimeout(
       function(){
        actualizarTexto("Your turn.")
        desbloquearInputUsuario();
       }, RETRASO_JUGADOR
   )
    secuencia_usuario= [];
    ronda ++;
    actualizarRonda (ronda)
}