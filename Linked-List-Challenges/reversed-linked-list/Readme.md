# challenge 9 revese a given linked list 

* I choosed the reversed linked list 
* and I used two approach one is worked and the other approach it dosen't work
### working approach
````
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
````
### not working approach
````
  let reverse= function (list) {
    let current = list.head
    if (current == null||current.next==null)
        return current;

    let reversed = reverse(current.next);
    current.next.next = list;

   
   current.next = null;
    return reversed;
}
````


### white bored pic 

![link](./Screenshot%20(302).png)

### test result 
![link](./Screenshot%20(303).png)
## Singly Linked List 
* is linear data structure thats contains nodes and the nods contains value and pointer to the next node , as showen below 


   


