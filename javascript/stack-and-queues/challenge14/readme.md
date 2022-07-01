## Challenge 14 
### DUck Duck Goose 

* this is the white bored challenge 
![link](./white%20bored%20challenge%2014.jpg)

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

* and this is the test result 

![link](./Screenshot%20(341).png)
