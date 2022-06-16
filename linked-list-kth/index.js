`use strict`
const linkedList=require("./library/linked-List")

const allNodes= new linkedList()
allNodes.append(4)
allNodes.append(5)
allNodes.append(6)
allNodes.append(7)
allNodes.append(8)
allNodes.append(9)
allNodes.append(10)
allNodes.toString()
console.log(allNodes.kthFromEnd(-1))
