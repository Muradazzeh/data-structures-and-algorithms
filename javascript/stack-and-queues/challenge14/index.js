`use strict`
const Queue=require("./Queues/queue")
let newQueue=new Queue()


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


  