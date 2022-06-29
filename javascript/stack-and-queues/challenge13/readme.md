## Code Challenge: Class 13
### Multi-bracket Validation.
### what is stacks :
* A stack is a data structure that consists of Nodes. Each Node references the next Node in the stack, but does not reference its previous.

Common terminology for a stack is

* Push - Nodes or items that are put into the stack are pushed

* Pop - Nodes or items that are removed from the stack are popped. When you attempt to pop an empty stack an exception will be raised.

* Top - This is the top of the stack.

* Peek - When you peek you will view the value of the top Node in the stack. When you attempt to peek an empty stack an exception will be raised.

* IsEmpty - returns true when stack is empty otherwise returns false


### what is requierd in this lap 
* Feature Tasks
* Write a function called validate brackets
* Arguments: string
* Return: boolean
* representing whether or not the brackets in the string are balanced
* There are 3 types of brackets:

* Lets start with the white bored picture 
![link](./image/white%20bored%20challenge%2013.jpg)


### What I did in this lap 
* I need to function that will take a string as  input , and the string contain all type of brackets
* for My approach first I need to check the string if it contain  different letters so I will remove these letter so I will keep in the new string only the brackets
* I need to make reference for the brackets , it is object contain the
* then I will use the stack to store inside it
* then I will loop throw the newStr
* If the string contain any of the key of bracket object , we will push it into the stack
* then if I removed the last value of the stack and it is not equal the value what I need we will return false
last case if stack got back empty so that mean all bracket are same so we will return true

### let see the code 
````
function validateBrackets(string){
    let newStack=new Stack()

let newStr=string.replace(/([A-Z])/gi,"")
console.log(newStr)
let bracket={
    '(':')',
    '{':'}',
    '[':']',
}
for(let s of newStr){
    if(bracket[s]){
        newStack.push(bracket[s])
    }
    else {
        if(newStack.pop()!==s) return false
    }
}
console.log(newStack)
return (!newStack.length)
}
````
 * the code simple and clear 

 ### now I will print out the result for all test cases 
 * now we will see the function result I console the the new string that contain only brackets and the result 
 ![link](./image/Screenshot%20(325).png)

 ### also I prepared the jest test for the function 
 in the link [for jest test](./__test__/index.test.js)

* here the result for the the function jest test 
![link](./image/Screenshot%20(326).png)

* And we dont forget the stack test result 
![link](./image/Screenshot%20(327).png)
