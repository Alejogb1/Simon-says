

let arr = [1,2,3,4];
let n = arr.length;
let i = 0;
function reorderArr(arr){
    for(n > 0; n--;){
        pick = parseInt((4)*(Math.random())); 
        temp = arr[i]; 
        arr[i] = arr[pick];
        arr[pick] = temp;
        i++; 
    } return console.log(arr)
}


reorderArr([1,2,3,4]);


/*
const reoderedArr =   arr.map((i,n) => {
        pick = parseInt((4)*(Math.random())); 
            temp = arr[i]; 
            arr[i] = arr[pick];
            arr[pick] = temp;
})
*/


