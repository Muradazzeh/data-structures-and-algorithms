`use strict`
const AnimalShelter=require("../Animals/Animals")
describe("Test for anima shelter", () => {
    test("Can successfully Can successfully enqueue into ashelter", () => {
        let newQueue= new AnimalShelter()
        newQueue.enqueue("cat")
        
        expect(newQueue.cats.front.value).toEqual("cat");
    })
    test("Can successfully Can successfully enqueue into ashelter", () => {
        let newQueue= new AnimalShelter()
        newQueue.enqueue("dog")
        
        expect(newQueue.dogs.front.value).toEqual("dog");
    })
    test("try to enter other animal enqueue into ashelter", () => {
        let newQueue= new AnimalShelter()
        newQueue.enqueue("donkey")
        
        expect(newQueue.cats.front).toBeNull();
        expect(newQueue.dogs.front).toBeNull();
    })
    test("try to dequeue from ashelter", () => {
        let newQueue= new AnimalShelter()
        newQueue.enqueue("cat")
        newQueue.enqueue("cat")
        newQueue.enqueue("cat")
        newQueue.dequeue("cat")
        newQueue.dequeue("cat")
        newQueue.dequeue("cat")

        
        expect(newQueue.cats.length).toBe(0);
        
    })
    test("try to dequeue from ashelter not acat or dog", () => {
        let newQueue= new AnimalShelter()
        newQueue.enqueue("cat")
        newQueue.enqueue("cat")
        
        newQueue.dequeue("ant")

        
        expect(newQueue.cats.length).toBe(2);
        
    })
})