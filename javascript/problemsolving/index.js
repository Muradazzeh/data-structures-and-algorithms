
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


/// remove duplicated from sorted array and

// arr = [1,1,2,2,2,2,3,3,4,5,6,7,7,7,7,8,9] output [1,2,3,4,5,6,7,8,9]


let arr2=[1,1,2,2,2,2,3,3,4,5,6,7,7,7,7,8,9]
let newArr=[] 
let count = 0
for (let i= 0; i<arr2.length; i++){

  if (newArr.indexOf(arr2[i])=== -1){
    count++
    newArr.push(arr2[i])
  }

 
}
console.log(newArr)
console.log(count)


/////// 

let x = -1234 ; 
let newX= Math.abs(x)
console.log(newX )
let str=''
for (let i=newX.length-1 ; i >=0 ; i--){
   str += newX[i] 
}
console.log(Number(str))

////// What is OOPs?
/// Difference between Procedural programming and OOPs?
///Class v.s Object
///Static Method
///Encapsulation
///Abstraction
///Overloading v.s Overriding
///Inheritance 
///Constructors
///Access modifiers
///Superclass v.s Subclass?
///Polymorphism
///Interface 
///Exception
///Can you create an instance of an abstract class?
///Local variable v.s Instance variable
