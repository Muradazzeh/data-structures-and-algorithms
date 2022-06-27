## challenge 12 
### First-in, First out Animal Shelter. 

### Feature Tasks
* Create a class called AnimalShelter which holds only dogs and cats.
* The shelter operates using a first-in, first-out approach.
* Implement the following methods:
* enqueue
* Arguments: animal
* animal can be either a dog or a cat object.
* dequeue
* Arguments: pref
* pref can be either "dog" or "cat"
* Return: either a dog or a cat, based on preference.
* If pref is not "dog" or "cat" then return null.

> note I feel this challenge not so clear so I have two approch to do 
* Lets start with the easest one , here white bored 

![link](./Image/white%20bored%20challenge%2012.jpg)


### Explanation 
* I will create class contain cats property and dogs property
then I will required the Queue that we already made in the previous lap
* first method I will check if the animal cats or dog or something else . if cat I will add it to the cat property , and if it dog I will add it to the dog property else return message
* in the dequeue the same if nothing in the shelter will return null , and if the argument pref cat it will take from cat , and if it dog it will take from dog ,
* else if asked for different animal it will return null


> ## note that if they want to put cat or dog as object we have to change the enqueue condation so we will check if animal.type or depends on what object contain 
````
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
       if(pref=="cat"){
            this.cats.dequeue(pref)
        }
        else if (pref=="dog"){
            this.dogs.dequeue(pref)
        }
        return null
        } 
}

module.exports = AnimalShelter;
````
* now lets see the test result , I enqueue 2 cats and one dog 
so the are now on the shelter , and I tryed to enqueue diferent types as shown 

![link](./Image/Screenshot%20(322).png)

* also I prepare the jest test for this challenge 

![link](./Image/Screenshot%20(323).png)


## I tryed this aproch to put both cats and dogs in the same class property 

````

class AnimalShelter {
   constructor(){
        this.Animals= new Queue()
        
     }

    enqueue(animal){
      if(animal=="cat" || animal=="dog"){
           this.Animals.enqueue(animal)
        }
 else{
    return console.log(`you cant put ${animal} in my shilter`)
 }
    }



    dequeue(pref){
         if(this.Animals.isEmpty2()){
            return null
        }
        else if(pref=="cat"||pref=="dog"){
            return this.Animals.dequeue(pref)
         }
        return null
    }
 }




module.exports = AnimalShelter;
````


