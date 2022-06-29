`use strict`
const Stack = require('../stack/stack');

describe("Satck tests", () => {
    test("Can successfully push into a stack", () => {
        let newStack= new Stack()
        newStack.push(1)
        // console.log(newStack,">>>>>>>>>>>>>>>>>>>>>>>>>>")
        expect(newStack.top.value).toEqual(1);
    })
    test("Can successfully push multiple values onto a stack", () => {
        let newStack= new Stack()
        newStack.push(1)
        newStack.push(2)
        expect(newStack.top.value).toEqual(2);
    })
    test("Can successfully pop off the stack", () => {
        let newStack= new Stack()
        newStack.push(1)
        newStack.push(2)
        newStack.pop()

        expect(newStack.top.value).toEqual(1);
    })
    test("Can successfully empty a stack after multiple pops", () => {
        let newStack= new Stack()
        newStack.push(1)
        newStack.push(2)
        newStack.pop()
        newStack.pop()
        console.log(newStack)
        expect(newStack.top).toBeNull()
    })
    test("Can successfully peek the next item on the stack", () => {
        let newStack= new Stack()
        newStack.push(1)
        newStack.push(2)
        newStack.push(7)
        expect(newStack.peek()).toBe(7)
    })
    test("Can successfully instantiate an empty stack", () => {
        let newStack= new Stack()
        
        expect(newStack).toBeInstanceOf( Stack)
    })
    test("Calling pop or peek on empty stack raises exception", () => {
        let newStack= new Stack()
        
        expect(newStack.pop()).toBe("this stack is empty")
        expect(newStack.peek()).toBe("no peek")
    })

 
})