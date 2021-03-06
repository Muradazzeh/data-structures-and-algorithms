`use strict`
const Node=require("./node")

class Queue{
    constructor(){
        this.front=null;
        this.rear=null;
        this.length=0
    }

    isEmpty2(){
        if(this.front===null||this.length==0){
            return true
        }
        return false
    }

    enqueue(value) {
       
        const newNode = new Node(value);
        if (this.isEmpty2()) {
            this.front = newNode;
            this.rear = newNode;
            this.length += 1;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
            this.length += 1;
}
}
    dequeue() {
    
    if (this.isEmpty2()) {
        return 'the queue is empty';
    } else {
        const temp = this.front;
        this.front = this.front.next;
        temp.next = null;
        this.length -= 1;
        return temp.value;
    }
}

    peek2(){
        if(this.isEmpty2()){
            return null
        }
        return this.front.value
    }
}
module.exports=Queue