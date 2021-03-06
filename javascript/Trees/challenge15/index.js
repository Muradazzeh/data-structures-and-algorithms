const binaryTree=require("./classes/binary-tree")
const binarySearchTree=require("./classes/binary-tree-search")
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

let Tree1 = null

Tree1= new binarySearchTree(three)
Tree1.Add(4)
Tree1.Add(2)
Tree1.Add(5)
Tree1.Add(1)
console.log(Tree1)

console.log(Tree1.Contains(4))
console.log(Tree1.Contains(7))
console.log(Tree1.Contains(5))
console.log(Tree1.Contains(10))
