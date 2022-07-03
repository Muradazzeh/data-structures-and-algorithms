`use strict`
const binaryTree=require("./binary-tree")
const node = require("./node")

class binarySearchTree extends binaryTree{

    Add(value){
        if(this.root==null){
            this.root=new node(value) 
            return
        }
        if (value>this.root.value){
            if(!this.root.right){
                this.root.right=new node(value)
                return
            }
            this.Add(this.root.right)
        }
        if(value<this.root.value){
            if(!this.root.left){
                this.root.left=new node(value)
                return
            }
            this.Add(this.root.left)
        }
    }

    Contains(value){
        
            let search = (node) => {
              if (node.value == value) {
                return true
            } 
            
              
              if (node.left) search(node.left);
              if (node.right) search(node.right);
            };
            search(this.root);
            return false;
        
}
}
module.exports=binarySearchTree