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
     kthFromEnd(k){
            if(k>this.length) return "Exeption this index more than the length"
            if(k<0) return "negative number not allowed"
            let current=this.head
            for (let i = this.length; i > k+1; i--){
            current = current.next;
        }
        return current.value
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

  
  
   
 
}

module.exports = linkedList