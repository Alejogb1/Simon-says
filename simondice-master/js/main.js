

document.querySelectorAll(".items").forEach(function(item, index) {
    item.addEventListener("click", function(){
        console.log("Clickeaste el bloque nro: " + index)
    });
});

const $botonplay = document.querySelector("#b-play");
$botonplay.onclick = function Fun (){
    displayPCturn();
}

;
/*
const $botonplay = document.querySelector("#b-play").onclick( function(arr){
     PCturn()
}
) */