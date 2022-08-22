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
contains(key){
const hash=this.makeHash(key)
// console.log(hash,"contain")
if(this.map[hash]){
    return true
}
else{
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

function repeatedWord (str) {
    const myhashmap = new HashMap(130)
    let newStr = str.toLowerCase().split(/[ ,.]+/)
    // console.log(newStr)
    for (let i = 0; i<newStr.length; i++) {
    
     myhashmap.set(newStr[i],"")
    let hash = myhashmap.makeHash(newStr[i])
    console.log(myhashmap.map[hash].head)
    if(myhashmap.map[hash].head.next){
        return newStr[i]
    }
    
    }
        return "no repeated word"
    
}
console.log(repeatedWord("Once upon a time, there was a brave princess who..."))
console.log(repeatedWord("It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only..."))
console.log(repeatedWord("It was a queer, sultry summer , the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..."))
console.log(repeatedWord("It was a queer, sultry summer "))
// const myhashmap = new HashMap(100);


module.exports ={HashMap,repeatedWord}