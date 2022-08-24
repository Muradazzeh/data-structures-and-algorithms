const linkedList = require('./linked-List')
const binaryTree=require("./classes/binary-tree")

const Node=require("./classes/node")
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
    let hash
    if(typeof key == 'number'){
         hash= key
    }
    else{
        hash=this.makeHash(key)
    }
     
    
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





let Tree = null
let Tree2 = null 
let n =new Node(4)
let n2 =new Node(15)
let n3 =new Node(42)
let one = new Node(75);
let two = new Node(100);
let two1 = new Node(100);
let a= new Node(125);
let three = new Node(150);
let four = new Node(160);
let four1 = new Node(160);
let five = new Node(175);
let six = new Node(200);
let seven = new Node(250);
let eight = new Node(300);
let nine = new Node(350);
let nine1 = new Node(350);
let ten = new Node(500);
let eleven = new Node(600);
// Tree 1 implementation
three.left = two1;
three.right = seven;
two1.left = new Node(75);
two1.right = four1;
seven.left = six;
seven.right = nine1 ;
four1.left = a;
four1.right = five;
nine1.left=eight;
nine1.right=ten;
Tree= new binaryTree(three)

// Tree 2 implementation
n3.left=two;
n3.right=eleven;
two.left=n2;
two.right=four;
four.left=a
four.right=five;
eleven.left=six;
eleven.right=nine
nine.left=n
nine.right=ten
Tree2= new binaryTree(n3)
  

function treeIntersection (tree1, tree2){
    if(tree1.root ==null || tree2.root==null){
        return 'no repeated value'
    }

    let output = [];
    const myhashmap = new HashMap(100);
    let Trvers=(node)=>{
        let key = node.value
        console.log(key)
        myhashmap.set(key,"");
        console.log(myhashmap.map[key].head)
        if(myhashmap.map[key].head.next){
            output.push(key)
        }
        if(node.left) Trvers(node.left)
        if(node.right) Trvers(node.right)
    }
    Trvers(tree1.root)
    console.log("*********************") 
    Trvers(tree2.root)

    return output
}

console.log(treeIntersection(Tree,Tree2))

module.exports ={HashMap, treeIntersection}