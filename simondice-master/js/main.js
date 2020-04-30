

document.querySelectorAll(".items").forEach(function(item, index) {
    item.addEventListener("click", function(){
        console.log("Clickeaste el bloque nro: " + index)
    });
});

function selectedBlock (){
    document.querySelectorAll(".items").forEach(function(item, index) {
        setTimeout(() => {
            item.classList.add("selected");
        }, index * 200);
    });
}
function unselectedBlock (){
    document.querySelectorAll(".items").forEach(function(item, index) {
        item.fadeOut();
    });
}
function displayPCturn (){
   selectedBlock();
}
function PCturn (){
    displayPCturn()
}
PCturn();
/*
const $botonplay = document.querySelector("#b-play").onclick( function(arr){
     PCturn()
}
) */