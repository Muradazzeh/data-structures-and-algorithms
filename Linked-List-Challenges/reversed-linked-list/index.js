`use strict`
const linkedList=require("./library/linked-List")

const list1= new linkedList()
list1.append(4)
list1.append(5)
list1.append(6)
list1.append(7)
list1.append(8)
list1.append(9)

function reversedList(list){
    let previous=null
    let next=null
    let currnt=list.head
    while(currnt!==null){
        next=currnt.next
        currnt.next=previous
        previous=currnt
        currnt=next

    }
    list=previous
    return console.log(list)
    
}
  let reverse= function (list) {
    let current = list.head
    if (current == null||current.next==null)
        return current;

    let reversed = reverse(current.next);
    current.next.next = list;

   
   current.next = null;
    return reversed;
}





list1.toString()
// console.log(list1)
console.log("<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>")
reversedList(list1)
console.log("<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>")
// console.log(reverse(list1))