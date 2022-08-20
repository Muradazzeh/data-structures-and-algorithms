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

const myhashmap = new HashMap(100);
myhashmap.set('esam', '401');
myhashmap.set('ahmad', '402');
myhashmap.set('mohamad', '403');
myhashmap.set('samah', '404');
myhashmap.set('laith', '405');
myhashmap.set('shihab', '406');

console.log(myhashmap.keys())
// console.log(myhashmap)
// console.log(myhashmap.contains('murad'));
// console.log(myhashmap.contains('ahmad'));
// console.log(myhashmap.get('laith'));
// myhashmap.map.forEach((ll) => {
    
//      console.log(ll.values());
// })

module.exports =HashMap