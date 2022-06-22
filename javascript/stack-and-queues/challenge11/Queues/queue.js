`use strict`
const Stack=require("../stack/stack")

class pseudoQueue{
    constructor(){
        this.Stack1=new Stack();
        this.Stack2=new Stack();
        
    }

    enqueue(value) {
       this.Stack1.push(value)
       
       
        
}
    dequeue() {
    if(this.Stack2.isEmpty()){
            while(!this.Stack1.isEmpty()){
                this.Stack2.push(this.Stack1.pop())
                 }
    
    }
    return this.Stack2.pop()
}
 
}
module.exports=pseudoQueue