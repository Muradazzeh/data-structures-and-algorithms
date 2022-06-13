`use strict`

const Node = require("./node")

class linkedList {
    constructor() {
        this.head = null;
        this.tail= null
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            return this;
        } else {
            let currentNode = this.head
            while (currentNode.next) {
                currentNode = currentNode.next

            }
            currentNode.next = newNode

            this.length++
            return this;
        }
    }
    includes(value) {
        let current = this.head
        while (current != null) {
            if (current.value == value)
                return true;
            current = current.next;
        }
        return false;
    }
    toString() {
        let result = ""
        let currentNode = this.head
        while (currentNode) {
            result = `${result}${currentNode.value} =>`
            currentNode = currentNode.next
        }
        console.log(`${result} NULL`)
    }

    append(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            return this;
        } else {
            let currentNode = this.head
            while (currentNode.next) {
                currentNode = currentNode.next

            }
            currentNode.next = newNode

            this.length++
            return this;
        }
    }
  
    insertAfter(value,newValue){
        let current=this.head
        
        while(current!=null){
            if(current.value==value){
                const newNode=new Node(newValue)
                newNode.next=current.next
                current.next=newNode
                this.length++
               return this 
              
            }
            current=current.next
            
        }
        
    }
  
 
}

module.exports = linkedList