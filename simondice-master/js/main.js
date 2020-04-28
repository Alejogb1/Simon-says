

document.querySelectorAll(".items").forEach(function(item, index) {
    item.addEventListener("click", function(){
        console.log("Clickeaste el bloque nro: " + index)
    });
});