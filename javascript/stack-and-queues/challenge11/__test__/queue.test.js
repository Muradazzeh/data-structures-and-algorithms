'use strict';

const pseudoQueue = require('../Queues/queue');

describe('Testing the pseudoQueue', () => {

  test('Can successfully enqueue into pseudoQueue', () => {
    let newQueue = new pseudoQueue();
    newQueue.enqueue(1);
    expect(newQueue.Stack1.top.value).toEqual(1);
  });

  it('Can successfully enqueue multiple values into pseudoQueue', () => {
    let newQueue = new pseudoQueue();
    newQueue.enqueue(9);
   
    expect(newQueue.Stack1.top.value).toEqual(9);
    newQueue.enqueue(20);
    expect(newQueue.Stack1.top.value).toEqual(20);
  });

  it('Can successfully dequeue out of a Queue the expected value', () => {
    let newQueue = new pseudoQueue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    expect(newQueue.dequeue()).toEqual(1);
    expect(newQueue.dequeue()).toEqual(2);
    expect(newQueue.dequeue()).toEqual(3);
  });
  test("Can successfully empty pseudoQueue after multiple dequeues", () => {
    let newQueue= new pseudoQueue()
    newQueue.enqueue(1)
    newQueue.enqueue(2)
    newQueue.dequeue()
    newQueue.dequeue()
    expect(newQueue.Stack1.top).toBeNull()
    expect(newQueue.Stack1.length).toBe(0)
    expect(newQueue.Stack2.length).toBe(0)
})
  test("Can successfully instantiate an empty queue", () => {
    let newQueue= new pseudoQueue()
    expect(newQueue).toBeInstanceOf( pseudoQueue)
    expect(newQueue.Stack1.top).toBeNull()
})
})