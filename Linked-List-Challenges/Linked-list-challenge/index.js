`use strict`
const linkedList=require("./library/linked-List")

const allNodes= new linkedList()
allNodes.append(4)
allNodes.append(5)
allNodes.append(6)
allNodes.append(7)
allNodes.append(8)
allNodes.append(10)
allNodes.insert(100)
allNodes.insert(200)


console.log(allNodes)
console.log(allNodes.includes(4))
console.log(allNodes.includes(10))
console.log(allNodes.includes(5))
console.log(allNodes.includes(8))
console.log(allNodes.includes(3))
console.log(allNodes.includes(11))
console.log(allNodes.includes(100))
console.log(allNodes.includes(200))

allNodes.toString()