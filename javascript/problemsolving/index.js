
/// Socumteck question
let str1="eat",str2="ate"
//str1="bar " str2="bare"
//str1="bba"  str2="aab"

function compare(str1, str2) {
  let obj1 = {};

  if (str1.length != str2.length) return false;
  for (let i = 0; i < str1.length; i++) {
    if (obj1[str1[i]]) {
      obj1[str1[i]] += 1;
    } else {
      obj1[str1[i]] -= 1;
    }
    if (obj1[str2[i]]) {
        obj1[[i]] += 1;
      } else {
        obj1[str1[i]] -= 1;
      }
  }

}

console.log(compare(str1, str2))


/// Aspire array question


let arr = [-1,2,3,4,-5,-6,7,-8,9,10,0,-15]

for (let i= 0; i<arr.length; i++) {

if(arr[i]%2!==0 && arr[i]<0 )

console.log(arr[i])


}


/// problem 1 arr=[1,2,3,4,5,6,7,8]   k=2 output=[7,8,1,2,3,4,5,6]



// function test(arr,k){
function test(arr,k){
  for (let i=0;i<k;i++){
let y = arr.pop()
arr.unshift(y)

  }
return arr

}

console.log(test([1,2,3,4,5,6,7,8],2))