const HashMap=require("../index")
const Node= require("../classes/node")
const binaryTree=require("../classes/binary-tree")
const {treeIntersection} =require("../index")

describe('hashTable  tree intersection test cases ', () => {

let tree1 = null ; 
let tree2 = null ; 
let tree3 = null ; 
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

// console.log(Tree)
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
    // const myhashmap = new HashMap(100);
    tree1= new binaryTree()
    tree2= new binaryTree(three)
    tree3= new binaryTree(n3)
    it('first test is one of the tree is empty so we should get null or message ', () => {
        expect(treeIntersection(tree1,tree2)).toBe("no repeated value")
    })
    it('2nd test if our both tree has repeated value so we will get out put  ', () => {
        expect(treeIntersection(tree2,tree3)).toBe [
            100, 160, 125,
            175, 200, 350,
            500
          ]
    })
   
  

})