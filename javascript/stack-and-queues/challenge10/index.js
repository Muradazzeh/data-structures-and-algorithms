`use strict`
const Stack=require("./stack/stack")
const Queue=require("./Queues/queue")
let newStack=new Stack()
let newQueue=new Queue()
console.log("******************************")

newStack.push(1)
newStack.push(2)
newStack.push(3)
newStack.push(4)
console.log(newStack)
console.log("******************************")
console.log(newStack.peek(),"peek value")
console.log("******************************")
newStack.pop()
newStack.pop()
console.log(newStack)
console.log("******************************")
newStack.pop()
newStack.pop()
console.log(newStack,"empty stack")
console.log("******************************")





newQueue.enqueue(1)
newQueue.enqueue(3)
newQueue.enqueue(5)
newQueue.enqueue(7)
console.log(newQueue)
console.log("******************************")
console.log(newQueue.peek2())
console.log("******************************")
newQueue.dequeue()
newQueue.dequeue()
newQueue.dequeue()
console.log(newQueue)
console.log("******************************")
newQueue.dequeue()
console.log(newQueue)