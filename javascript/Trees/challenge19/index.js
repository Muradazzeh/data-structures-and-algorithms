const binaryTree=require("./classes/binary-tree")

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
let ten = new Node(10);
let therteen= new Node(13);
let forteen= new Node(14);

eight.left=three
eight.right=ten
three.left=one
three.right=six
six.left=four
six.right=seven
ten.right=forteen
forteen.left=therteen



Tree= new binaryTree(eight)

let preOrder = Tree.preOrder();
console.log('pre order: ', preOrder);

// let inOrder = Tree.inOrder();
// console.log('in order: ', inOrder);

// let postOrder = Tree.postOrder();
// console.log('post order: ', postOrder);

console.log(Tree.findOddSum(),"the sum of odd number in this tree")
console.log(Tree.findOddSum2(),"the sum of the odd number using the 2nd method")
