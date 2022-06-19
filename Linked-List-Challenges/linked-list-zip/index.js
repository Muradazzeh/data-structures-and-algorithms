`use strict`
const linkedList=require("./library/linked-List")

const LL1= new linkedList()
const LL2= new linkedList()
LL1.append(4)
LL1.append(6)
// LL1.append(10)
// LL1.append(20)


LL2.append(7)
LL2.append(9)
LL2.append(10)
LL2.append(20)







function zipLists1(list1,list2){
   let list3= new linkedList()
   let curr3=list3.head
    if (!list1.head) {
       curr3=list2
        return curr3.toString() ;
    } else if (!list2.head) {
        curr3=list1
        return curr3.toString()
        
    }
    let curr1 = list1.head
   let curr2 = list2.head 
   let count = 0
   while (curr1 != null && curr2!= null) {
    if(count%2==0){
        list3.append(curr1.value)
        curr1= curr1.next
       count++  
    }
    list3.append(curr2.value)
    curr2=curr2.next
    count++   
}

while(curr1){
    list3.append(curr1.value)
    curr1= curr1.next
}
while(curr2){
    list3.append(curr2.value)
    curr2= curr2.next
}
    
return list3.toString();

} 

   

   
LL1.toString()
LL2.toString()
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
zipLists1(LL1, LL2)


module.exports = zipLists1;

// function zipLists(list1, list2){
   
//     if (!list1.head) {
       
//         return list2.toString() ;
//     } else if (!list2.head) {
        
//         return list1.toString()
        
//     }
//     let curr1 = list1.head, next1 = list1.head.next;
//    let curr2 = list2.head, next2 = list2.head.next;
//    while (curr1 != null && curr2 != null) {
   
    
//         next2 = curr2.next;
//         console.log(next2,"next 2")
//         curr1.next = curr2;
//         curr2.next = next1;

        
//         curr1 = curr2;
//         curr2 = next2;
    
        
     
// }
// return list1.toString();
// }