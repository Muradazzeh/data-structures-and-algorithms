const binaryTree=require("./classes/binary-tree")
const Queue= require("./classes/Queues/queue")
const Node=require("./classes/node")

let Tree = null

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

two.left = seven;
two.right =five;
seven.left = new Node(2);
seven.right = six;
six.left =new Node(5);
six.right = new Node(11);
five.right = nine;
nine.left = four;

Tree= new binaryTree(two)
console.log(Tree)
// let preOrder = Tree.preOrder();
// console.log('pre order: ', preOrder);

// let inOrder = Tree.inOrder();
// console.log('in order: ', inOrder);

// let postOrder = Tree.postOrder();
// console.log('post order: ', postOrder);

function breadthFirst(tree){
    let store=new Queue()
    let result=[]
    let current;
    store.enqueue(tree.root)
    while(store.length ){
        current=store.dequeue()
        result.push(current.value)
        if(current.left) store.enqueue(current.left)
        if(current.right) store.enqueue(current.right)
    }
    return result
}       
console.log(breadthFirst(Tree))

module.exports=breadthFirst