## This is the readme file for white bored challenge 2 

![link](./Whiteboard%20(2).png)


* this is the written code 
```
function insertShiftArray(arr, number) {
    let index = Math.ceil(arr.length / 2)
    for (let i = arr.length; i > index; i--) {
        arr[i] = arr[i - 1]

    }
    arr[index] = number
    console.log(arr)
}
insertShiftArray([1, 2, 3, 4], 9)
```
*** this is the result on test on different cases 
* ![link](./Screenshot%20(162).png)

* ![link](./Screenshot%20(161).png)

* ![link](./Screenshot%20(160).png)