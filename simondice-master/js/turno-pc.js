function selectedBlock (){
    document.querySelectorAll(".items").forEach(function(item, index) {
        setTimeout(() => {
            item.classList.add("selected");
        }, index * 200
       );
    });
}
function unselectedBlock (){
    document.querySelectorAll(".items").forEach(function(item, index) {
        item.fadeOut();
    });
}
function PCturn (){
   selectedBlock();
}
function displayPCturn (){
    PCturn()
}
