`use strict`
const Queue=require("../Queues/queue")

class AnimalShelter {
    constructor(){
        this.cats= new Queue()
        this.dogs=new Queue()
    }

    enqueue(animal){
        if(animal=="cat" ){
            this.cats.enqueue(animal)
        }else if(animal=="dog"){
            this.dogs.enqueue(animal)
        }
        
else{
    return console.log(`you cant put ${animal} in my shilter`)
}
    }

    dequeue(pref){
        // if(this.cats.isEmpty2()||this.dogs.isEmpty2()){
        //     return null
        // }
         if(pref=="cat"){
            this.cats.dequeue()
        }
        else if (pref=="dog"){
            this.dogs.dequeue()
        }else{
        return null
        }
        } 
}

module.exports = AnimalShelter;


// class AnimalShelter {
//     constructor(){
//         this.Animals= new Queue()
        
//     }

//     enqueue(animal){
//         if(animal=="cat" || animal=="dog"){
//            this.Animals.enqueue(animal)
//         }
// else{
//     return console.log(`you cant put ${animal} in my shilter`)
// }
//     }



//     dequeue(pref){
//         if(this.Animals.isEmpty2()){
//             return null
//         }
//         else if(pref=="cat"||pref=="dog"){
//             return this.Animals.dequeue(pref)
//         }
//         return null
//     }
// }




// module.exports = AnimalShelter;