

/*
let arra = [];
document.querySelectorAll(".items").map(function(item, index) {
    item.addEventListener("click", function(){
        arra.push(item)
    }), console.log(arra) 
}); */




let list = document.querySelectorAll(".items");
let nodeArray = [];
let items = Array.from(list).map(elem => {
    nodeArray.push(elem);
    return nodeArray;
})
function reorderArr(arr){   
    let n = arr.length;
    let i = 0;
    for(n > 0; n--;){
        pick = parseInt((4)*(Math.random())); 
        temp = arr[i]; 
        arr[i] = arr[pick];
        arr[pick] = temp;
        i++; 
    } return console.log(arr)
}
reorderArr(nodeArray);
function turnArrayIntoBlocks (arr){
    let i; 
    for(i= 1; i < arr.length;){
         document.querySelectorAll(".items")[i].id = nodeArray[i].id;
        i++;
    }
}
turnArrayIntoBlocks(nodeArray)

/*
const reoderedArr =   arr.map((i,n) => {
        pick = parseInt((4)*(Math.random())); 
            temp = arr[i]; 
            arr[i] = arr[pick];
            arr[pick] = temp;
})
*/


