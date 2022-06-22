`use strict`
const Queue=require("../Queues/queue")

describe("Queue tests", () => {
    test("Can successfully Can successfully enqueue into a queue", () => {
        let newQueue= new Queue()
        newQueue.enqueue(1)
        // console.log(newStack,">>>>>>>>>>>>>>>>>>>>>>>>>>")
        expect(newQueue.front.value).toEqual(1);
    })
    test("Can successfully enqueue multiple values into a queue", () => {
        let newQueue= new Queue()
        newQueue.enqueue(1)
        newQueue.enqueue(2)
        expect(newQueue.front.value).toEqual(1);
        expect(newQueue.rear.value).toEqual(2);
    })
    test("Can successfully dequeue out of a queue the expected value", () => {
        let newQueue= new Queue()
        newQueue.enqueue(1)
        newQueue.enqueue(2)
        newQueue.dequeue()

        expect(newQueue.front.value).toEqual(2);
        expect(newQueue.length).toEqual(1);
    })
    test("Can successfully peek into a queue, seeing the expected value", () => {
        let newQueue= new Queue()
        newQueue.enqueue(1)
       
       
        expect(newQueue.peek2()).toBe(1)
    })
    test("Can successfully empty a queue after multiple dequeues", () => {
        let newQueue= new Queue()
        newQueue.enqueue(1)
        newQueue.enqueue(2)
        newQueue.dequeue()
        newQueue.dequeue()
        expect(newQueue.front).toBeNull()
        expect(newQueue.length).toBe(0)
    })
    test("Can successfully instantiate an empty queue", () => {
        let newQueue= new Queue()
        expect(newQueue).toBeInstanceOf( Queue)
        expect(newQueue.front).toBeNull()

    })
    test("Calling dequeue or peek on empty queue raises exception", () => {
        let newQueue= new Queue()
        
        expect(newQueue.dequeue()).toBe('the queue is empty')
        expect(newQueue.peek2()).toBe(null)
    })

 
})