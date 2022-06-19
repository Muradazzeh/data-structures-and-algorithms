`use strict`

const Node = require("./node")

class linkedList {
    constructor() {
        this.head = null;
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