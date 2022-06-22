## Stacks and Queues
### what is stacks :
* A stack is a data structure that consists of Nodes. Each Node references the next Node in the stack, but does not reference its previous.

Common terminology for a stack is

* Push - Nodes or items that are put into the stack are pushed

* Pop - Nodes or items that are removed from the stack are popped. When you attempt to pop an empty stack an exception will be raised.

* Top - This is the top of the stack.

* Peek - When you peek you will view the value of the top Node in the stack. When you attempt to peek an empty stack an exception will be raised.

* IsEmpty - returns true when stack is empty otherwise returns false

![link](./image/stack-operations.gif)


### What I did in this challenge part 1 stack 

* we prepare class to create nodes for the stack so each node contain value and pointer to the next node , then we prepare stack class constructor have top proparitey and length , it will be the container for our nodes 

* then we prepare some method for the stack class costructor , push(value)  , so we can push nodes to the stack then we make pop() method to remove from the stack , so we will folow FILO : first value we push it in it will be last value pop out 
* and we will follow LIFO : last value pushed will be first value poped 
* and we prepare helping method , is Empty(), and peek() to help us in impleminting stack

#### Big O notation for stack method 

| method      | Big o (   ) | explain    |
| :---        |    :----:   |          ---: |
| Push()      | O(1)       | we push one value at a time    |
| Pop()       | O(1)        | we pop one value at a time      |
| Peek()      | O(1)        | we get only one value no matare how long the stack    |
| IsEmpty()       | O(1)        | we only check on one node     |

* Here is my index result , I pushed 4 value in the stack , then I console log it , after that I checked the peek , then I poped the value until it get empty .

![link](./image/Screenshot%20(306).png)

* And I prepared the jest test for 7 test cases as shown 
* [x] Can successfully push onto a stack
* [x] Can successfully push multiple values onto a stack
* [x] Can successfully pop off the stack
* [x] Can successfully empty a stack after multiple pops
* [x] Can successfully peek the next item on the stack
* [x] Can successfully instantiate an empty stack
* [x] Calling pop or peek on empty stack raises exception

![link](./image/Screenshot%20(307).png)

## What is a Queue
* Common terminology for a queue is

* Enqueue - Nodes or items that are added to the queue.
* Dequeue - Nodes or items that are removed from the queue. If called when the queue is empty an exception will be raised.
* Front - This is the front/first Node of the queue.
* Rear - This is the rear/last Node of the queue.
* Peek - When you peek you will view the value of the front Node bin the queue. If called when the queue is empty an exception will be raised.
* IsEmpty - returns true when queue is empty otherwise returns false.

* Queues follow these concepts:

    * FIFO
        * First In First Out

            This means that the first item in the queue will be the first item out of the queue.

    * LILO
        * Last In Last Out

            This means that the last item in the queue will be the last item out of the queue.


### what I did in part 2 Queue 

* the same as stack I prepared class constructor for nodes , the I preperd class constructor  for Queue , so we can enqueue : that mean add to the queue , dequeue :remove from the queue , and I add two helper method peek2() and isEmpty2()

 * we start with the big notation of the Queue 

#### Big O notation for stack method 

| method      | Big o (   ) | explain    |
| :---        |    :----:   |          ---: |
| enqueue()      | O(1)       | we add one value at a time    |
| dequeue()       | O(1)        | we remove one value at a time      |
| Peek2()       | O(1)        | we get only one value no matare how long the Queue   |
| IsEmpty2()       | O(1)        | we only check on one node     |


* now We see my index result I add using enqueue to my queue 4 value as shown then I checked peek value , so it gives the first value enterd , we called it front , and I kept dequeue until we get it empty as shown .

![link](./image/Screenshot%20(308).png)

* I prepared test cases for the queue also as shown below : 
* [x] Can successfully enqueue into a queue
* [x] Can successfully enqueue multiple values into a queue
* [x] Can successfully dequeue out of a queue the expected value
* [x] Can successfully peek into a queue, seeing the expected value
* [x] Can successfully empty a queue after multiple dequeues
* [x] Can successfully instantiate an empty queue
* [x] Calling dequeue or peek on empty queue raises exception

* All the test result as shown .

![link](./image/Screenshot%20(304).png)

![link](./image/Screenshot%20(309).png)