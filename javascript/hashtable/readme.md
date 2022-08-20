# Code Challenge: 30
## Hash Table implementation

### Introduction
* What Are they
Hashtables are a data structure that utilize key value pairs. This means every Node or Bucket has both a key, and a value.

* The basic idea of a hashtable is the ability to store the key into this data structure, and quickly retrieve the value. This is done through what we call a hash. A hash is the ability to encode the key that will eventually map to a specific location in the data structure that we can look at directly to retrieve the value.

### what required in this lap 
Implement a Hashtable Class with the following methods:

* set
Arguments: key, value
Returns: nothing
This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
Should a given key already exist, replace its value from the value argument given to this method.
* get
Arguments: key
Returns: Value associated with that key in the table
* contains
Arguments: key
Returns: Boolean, indicating if the key exists in the table already.
* keys
Returns: Collection of keys
* hash
Arguments: key
Returns: Index in the collection for that key


### what I did in this challenge 

* hash we have to return index of the collection for that key
```
makeHash(key){
    const ASCi= key.split("").reduce((acc,cur)=>{
        return acc+cur.charCodeAt(0)
    },0)
    const ASCiPrime=ASCi*599
    const Index=ASCiPrime%this.size
    
    return Index
}
```
* this is the result from index js 
![link](./image/Screenshot%20(486).png)


* set
Arguments: key, value
Returns: nothing
This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
Should a given key already exist, replace its value from the value argument given to this method.
```
set(key,value){
    const hash=this.makeHash(key)
    
    if (!this.map[hash]) {
        this.map[hash] = new linkedList();
    }
    this.map[hash].append({ [key]: value });
}
```
* this is the result of index 

![link](./image/Screenshot%20(487).png)

* get
Arguments: key
Returns: Value associated with that key in the table

```
get(key){
    if(! this.contains(key)){
        return null
    }
    const hash= this.makeHash(key)
let result=this.map[hash].head
while(result){
if(Object.keys(result.value)[0]===key){
    return result.value[key]

}
result=result.next
}
return 'no values at this key';


}
```
* this is the result of get method from index

![link](./image/Screenshot%20(488).jpg)

* contains
Arguments: key
Returns: Boolean, indicating if the key exists in the table already.

```
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
```
* this is the result for contain method 

![link](./image/Screenshot%20(489).png)

*  keys
Returns: Collection of keys

```
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
```
* this is the result for key method output 

![link](./image/Screenshot%20(490).png)


## Structure and Testing

### after we finish from the method now is the testing parts , and I prepared these tests for this challenge 

* [x] Setting a key/value to your hashtable results in the value being in the data structure
* [x] Retrieving based on a key returns the value stored
* [x] Successfully returns null for a key that does not exist in the hashtable
* [x] Successfully returns a list of all unique keys that exist in the hashtable
* [x] Successfully handle a collision within the hashtable
* [x] Successfully retrieve a value from a bucket within the hashtable that has a collision
* [x] Successfully hash a key to an in-range value

* this is the test result from [link](./__test__/index.test.js)

![link](./image/Screenshot%20(491).png)



