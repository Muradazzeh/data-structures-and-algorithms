`use strict`
const binaryTree=require("./binary-tree")
const node = require("./node")

class binarySearchTree extends binaryTree{

    Add(value){
        if(this.root==null){
            this.root=new node(value) 
            return
        }
        
        let addValue=(result)=>{
        if (value>result.value){
            if(!result.right){
                result.right=new node(value)
               
            }
           
            addValue( result.right);
        }
        if(value<result.value){
            if(!result.left){
                result.left=new node(value)
               
            }
             
            addValue(result.left)
        }
    }
    addValue(this.root)
    }

    Contains(value){
        if(!this.root.value){
            return false
        }
            let search = (result) => {
              if (result.value == value) {
                return true
            } else if (result.value > value) {
                if (!result.left) {
                  return false;
                }
                return search(result.left)
            }
            else {
                if (!result.right) {
                  return false;
                }
                return search(result.right);
              }
              
        
}
return search(this.root)
}

}
module.exports=binarySearchTree