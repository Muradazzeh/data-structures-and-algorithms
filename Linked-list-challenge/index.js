`use strict`
const linkedList=require("./library/linked-List")

const allNodes= new linkedList()
allNodes.insert(4)
allNodes.insert(5)
allNodes.insert(6)
allNodes.insert(7)
allNodes.insert(8)
allNodes.insert(10)



console.log(allNodes)
console.log(allNodes.includes(4))
console.log(allNodes.includes(10))
console.log(allNodes.includes(5))
console.log(allNodes.includes(8))
console.log(allNodes.includes(3))
console.log(allNodes.includes(11))


allNodes.toString()