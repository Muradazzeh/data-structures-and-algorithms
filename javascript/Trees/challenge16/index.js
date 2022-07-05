const binaryTree=require("./classes/binary-tree")

const Node=require("./classes/node")

let Tree = null

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(12);
let five = new Node(10);
let six = new Node(6);
let seven = new Node(11);
let eight = new Node(8);
let nine = new Node(9);

one.left = two;
one.right = three;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
three.left = four;
three.right = five;

Tree= new binaryTree(one)

let preOrder = Tree.preOrder();
console.log('pre order: ', preOrder);

let inOrder = Tree.inOrder();
console.log('in order: ', inOrder);

let postOrder = Tree.postOrder();
console.log('post order: ', postOrder);

console.log(Tree.findMax(),"max value in my tree")
console.log(Tree.findMax2(),"findMax2() value in my tree2")
