`use strict`
 const AnimalShelter=require("./Animals/Animals")

 const animalQueue= new AnimalShelter()


 console.log(animalQueue)
animalQueue.enqueue("monkey")
animalQueue.enqueue("dog")
animalQueue.enqueue("cat")
animalQueue.enqueue("dog")
console.log(animalQueue)
// animalQueue.dequeue("cat")
console.log(animalQueue)
animalQueue.dequeue("dog")
animalQueue.dequeue("cat")
console.log(animalQueue)
animalQueue.dequeue("dog")
console.log(animalQueue)
