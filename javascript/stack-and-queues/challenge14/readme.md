## Challenge 14 
### Duck Duck Goose 

* this is the white bored challenge 

![link](./white%20bored%20challenge%2014%20a.jpg)

* I wii do small explenation about my method 
  * first I created function called duck duck goose , it will take two argument , string list , or array of string and a K intger , it is normal number 
  * so first thing I did I defined My Queue and I used for loop to insert all strings inside Queue , so I will get a Queue contain all the strings each string in each node (not that this first step I did to get clear result and clear understanding of My method)
  * now we will start with the checking code , so I used while loop to check that , Queue is containing more than one string so we will keep iterating ,
  * the second loop we will use for loop to do a number of iterations from the Queue front until we hit k , so in each iteration we will remove from front of the Queue and insert to the rear of Queue 
  * when we hit K simply we will dequeue the node at K index 
  * we will keep doing this until we have only one node , so it will be the winner 


* this is the code for solution 
`````

function DuckDuckGoose(stringlist,k){
    for(let i=0;i<stringlist.length;i++){
        newQueue.enqueue(stringlist[i])
       
    }
    console.log(newQueue)
    console.log("************************")
    
    while(newQueue.length>1){
      for(let i =0;i<newQueue.length-k;i++){
        newQueue.enqueue(newQueue.dequeue())
      }
        newQueue.dequeue()   
    }
            console.log(newQueue)
            
    return console.log(newQueue.rear.value)
    
}

DuckDuckGoose(['A','B','C','D','E'],3)

``````
### > note that I used console log to show us all the result output to get clear idea about our code 

* and this is the test result , so here is the test case I have this input ['A','B','C','D','E']and the integer k = 3 so My output shows first full Queue contain All string and it is length equal to 5 
* then I print the Queue after last iteration and containing last element is D  

![link](./Screenshot%20(341).png)
