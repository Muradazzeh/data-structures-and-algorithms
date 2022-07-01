## Challenge 14 
### DUck Duck Goose 

* this is the white bored challenge 

![link](./white%20bored%20challenge%2014%20a.jpg)

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
