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
    findOddSum(){
        let sum = 0
        let search=(input)=>{
            if(input.left)
                search(input.left)
            if(input.right)
                search(input.right)
                if (input.value % 2 !== 0) 
                    sum = sum +input.value      
        }
        search(this.root)
        return sum
    }

    findOddSum2(){
        let result=[]
        let Trvers=(node)=>{
            result.push(node.value)
            if(node.left) Trvers(node.left)
            if(node.right) Trvers(node.right)
        }
        Trvers(this.root)
        let sum = 0;
        for (let i =0;i<result.length;i++){
            if (result[i] % 2 !==0){
                sum=sum+result[i]
            }
        }
        return sum 
    }



}

module.exports=binaryTree