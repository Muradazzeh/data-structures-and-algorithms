const KaryTree=require("./classes/K-ary-tree")
const Node=require("./classes/node")

let Tree = null

let three = new Node(3);
let two = new Node(2);
let four = new Node(4);
let five = new Node(5);
let fifteen = new Node (15)
let nine=new Node (9)
let six= new Node(6)

three.child=[two,fifteen,four,five];
two.child=[nine,six]
Tree = new KaryTree(three);

console.log(Tree.root)

// function fizzBuzzTree(KTree){
//     let newTree=[]
//     let search=(node)=>{
//         // if(!node) return

//         for ( const item of node.child){
//             if(item.value%5===0 && item.value%3===0){
//                 item.value="FizzBuzz";}
//              else if(item.value%3===0){
//                 item.value="Fizz";
//             }else if(item.value%5===0){
//                 item.value="Buzz";
//             }else{
//                 item.value=item.value.toString();
//             }
//             newTree.push(item)
//           console.log(item)
//             search(item)
//         }
//     }
//     search(KTree.root)
//     return newTree
// }
function fizzBuzzTree(KTree){
    let arr = [];
    arr.push(KTree.root);
    while(arr.length){
        let item=arr.pop();
        if(item.value%5===0 && item.value%3===0){
            item.value="FizzBuzz";
        } else if(item.value%3===0){
            item.value="Fizz";
        }else if(item.value%5===0){
            item.value="Buzz";
        }else{
            item.value=item.value.toString();
        }

    for(const x of item.child){
        arr.push(x)
    }
    }
    return KTree.root;
}


console.log(fizzBuzzTree(Tree))

module.exports=fizzBuzzTree


