`use strict`

class binaryTree{
    constructor (root=null){
        this.root=root
    }
    // Pre order 
    preOrder(){
        let result=[]
        let Trvers=(node)=>{
            result.push(node.value)
            if(node.left) Trvers(node.left)
            if(node.right) Trvers(node.right)
        }
        Trvers(this.root)
        return result
    }
    inOrder(){
        let result=[]
        let Trvers=(node)=>{
            
            if(node.left) 
                Trvers(node.left)
                result.push(node.value)
            
            if(node.right) Trvers(node.right)
        }
        Trvers(this.root)
        return result
    }
    postOrder(){
        let result=[]
        let Trvers=(node)=>{
            
            if(node.left) Trvers(node.left)
            if(node.right) 
                Trvers(node.right)
                result.push(node.value)
            
        }
        Trvers(this.root)
        return result
    }
}

module.exports=binaryTree