
let newArr=[];
function reverseArray (arr){
for(let i = arr.length-1;i>=0;i--){
    newArr.push(arr[i])
}
return newArr;
}








let newArr1=[];
function reversArray (arr){
    arr.forEach(element => {
        newArr1.unshift(element)
    });
    return newArr1
}

