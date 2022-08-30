const linkedList = require('./linked-List')

class HashMap {
    constructor(size){
        this.size=size,
        this.map= new Array(size)

}
makeHash(key){
    const ASCi= key.split("").reduce((acc,cur)=>{
        return acc+cur.charCodeAt(0)
    },0)
    const ASCiPrime=ASCi*599
    const Index=ASCiPrime%this.size
    // console.log(Index)
    return Index
}
set(key,value){
    const hash=this.makeHash(key)
    
    if (!this.map[hash]) {
        this.map[hash] = new linkedList();
    }
    this.map[hash].append({ [key]: value });
}

get(key){
    if(! this.contains(key)){
        return null
    }
    const hash= this.makeHash(key)
let result=this.map[hash].head

// console.log(this.map,"11111111111111111111111")

while(result){
    // console.log(Object.keys(result.value)[0],"1111111111")
    // console.log(key,"1112222222222 1")
if(Object.keys(result.value)[0]===key){
    return result.value[key]

}
result=result.next
}
return 'no values at this key';


}

contains(key) {
    const hash = this.makeHash(key);
    if (this.map[hash]) {
      let currentNode = this.map[hash].head;
      while (currentNode) {
        if (currentNode.value[key]) {
          return true;
        }
        currentNode = currentNode.next;
      }
    } else {
      return false;
    }
  }


keys(){
    let arr=[]
    this.map.forEach((element)=>{
    
        let result = element.head
        
        while(result){
           arr.push(Object.keys(result.value))
        result=result.next
        
        }
        // console.log(arr)
        
        
    })
    return arr
}


}




// function mostCommonWord (str) {
//     const myhashmap = new HashMap(100)
//     let newStr = str.toLowerCase().split(/[ ,.]+/)
//     console.log(newStr)
//     let counter= 0 
//     for (let i = 0; i<newStr.length; i++) {
    
//      myhashmap.set(newStr[i],"")
     
//      let key = myhashmap.keys()
//     //  console.log(key)
//     let hash = myhashmap.makeHash(newStr[i])
 
// //    console.log(hash)
//     // console.log(myhashmap.map[hash].head)
//     // if(myhashmap.map[hash].head.next){
//     //     return newStr[i]
//     // }
   
        
//     }
//     console.log(Math.max(myhashmap.map.length))
//     // console.log(myhashmap.map)
//         return "no repeated word"
    
// }

function uniqueCharacters(str){
    const myhashmap = new HashMap(100)
        let newStr = str.toLowerCase().split("")
        for (let i = 0; i<newStr.length; i++) {
                if(newStr[i] !== ' '){
                 myhashmap.set(newStr[i],"")
                //  console.log(newStr)
                 let hash = myhashmap.makeHash(newStr[i])
                //  console.log(myhashmap.map[hash].head)
                 if(myhashmap.map[hash].head.next ){
                    // console.log(myhashmap.map[hash].head)
                    return false
                 }
                }
                    
                 
        }
        return true
}




console.log(uniqueCharacters('No. Try not. Do or do not. There is no try.no to leave me no'))
console.log(uniqueCharacters('The quick brown fox jumps over the lazy dog'))
console.log(uniqueCharacters('I love cats'))
console.log(uniqueCharacters('Donald the duck'))
console.log(uniqueCharacters('abcdef'))

module.exports ={HashMap ,uniqueCharacters }