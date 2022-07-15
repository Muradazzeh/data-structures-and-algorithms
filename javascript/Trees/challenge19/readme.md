# Tree search Challenge 19
## Introduction 
* A binary tree is a tree data structure composed of nodes, each of which has at most, two children, referred to as left and right nodes. The tree starts off with a single node known as the root. Each node in the tree contains left , right , and value.

## what required in this challenge 
* Write the following method for the Binary Tree class 
    * Find the sum of all the odd numbers in a binary search tree. 
     Any of the traversals (depth or breadth) will work for this


* so in this challenge I need to write method that will count all odd number in binery search tree , first lets start with white bored image .

![link](./classes/image/white%20bored%20challenge%2019.jpg)

* I used 2 approach to solve this challenge first approch it take O(n) for Time and O(1) for space , and the second approach it will take O(n) for time and O(n) for space , lets start with the first approach 

* I need to write a method for binery tree that will sum all odd number in the tree
let start with sum variable = zero
then I need helper function to search for all tree both side left and write  using recursion
I have to put condition in the function that if modulus of the any number in the tree = to zero I will sum this number and so on
finally I will return the sum variable

* and this is the code for the solution 

```
 findOddSum(){
        let sum = 0
        let search=(input)=>{
            if(input.left)
                search(input.left)
            if(input.right)
                search(input.right)
                if (input.value % 2 !== 0) 
                    sum = sum +input.value      
        }
        search(this.root)
        return sum
    }
```
* before test lets draw  our tree for test 

![link](./classes/image/bin%20tree.jpg)

* in this tree our result for summing the odd number should be equal to **24**

let see the result 

![link](./classes/image/Screenshot%20(411).png)


 * also we prepared the jest test for this challenge as shown below : 

 ![link](./classes/image/Screenshot%20(413).png)


 * ## now let see the second approach 

 * I used the preoder method we will arange all the value insinde an array , so after that I will loop throw the array and I will sum all the odd number so we will git the same result 

 ``` 
    findOddSum2(){
        let result=[]
        let Trvers=(node)=>{
            result.push(node.value)
            if(node.left) Trvers(node.left)
            if(node.right) Trvers(node.right)
        }
        Trvers(this.root)
        let sum = 0;
        for (let i =0;i<result.length;i++){
            if (result[i] % 2 !==0){
                sum=sum+result[i]
            }
        }
        return sum 
    }

```
* let see the result for both methode 

![link](./classes/image/Screenshot%20(414).png)




   

