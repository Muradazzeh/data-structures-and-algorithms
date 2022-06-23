`use strict`
const pseudoQueue=require("./Queues/queue")

const newQueue=new pseudoQueue()

newQueue.enqueue(1)
newQueue.enqueue(2)
newQueue.enqueue(3)
console.log(newQueue)
console.log(newQueue.dequeue())
console.log(newQueue.dequeue())
console.log(newQueue.dequeue())


console.log(newQueue)
