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
    findMax(){
        let max = this.root.value
        let search=(input)=>{
            if(input.left)
                // if(input.value>max )
                //     max = input.value
                
                search(input.left)
                // return max
            
            if(input.right)
                // if(input.value>max )
                //     max = input.value
                
                search(input.right)
                // return max  
            
            if (input.value>max) max = input.value 
            
        }
        search(this.root)
        return max
    }

    findMax2(){
        let result=[]
        let Trvers=(node)=>{
            result.push(node.value)
            if(node.left) Trvers(node.left)
            if(node.right) Trvers(node.right)
        }
        Trvers(this.root)
        return Math.max(...result)
    }



}

module.exports=binaryTree