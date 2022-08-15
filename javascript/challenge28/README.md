# Code Challenge: Class 28

### Assignment
Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.

* We need to convert pseudo code to javascript code and follow the steps 
```
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right.
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp

```
* this is the code in javascript
```
function quickSort(arr,left,right){
  if (left<right){
    let position = partition(arr,left,right)
    quickSort(arr,left,position-1)
    quickSort(arr,position+1,right)
  }
}
function partition(arr,left,right){
  let pivot=arr[right]
  let low = left-1
  for (let i=left;i<=right-1;i++){
if(arr[i] <= pivot){
  low++
  swap(arr,i,low)
}
  }
  swap(arr,right,low+1)
  return low+1
}
function swap(arr,i,low){
  let temp;
  temp=arr[i]
  arr[i]=arr[low]
  arr[low]=temp
}
```

* lets got threw the step for this arr =[10, 7, 8, 9, 1, 5] 
 * the left will be 0 and the right will be higher index = 5

 * first step we will go threw quicksort function 
 * then we will go threw partition
 as shown 

 ![link](./image/Screenshot%20(468).png)

* left = 0 , right = 5 , pivot = 5 
we will loop threw until arr[i]< 5
* then we will got to the swap function and replace arr[i] = 1 , in place of the first element 
* so the array will be look like [1,7,8,9,10,5]

* we will continue and we will swap arr[low] with temp value 
as shown 

![link](./image/Screenshot%20(469).png)

* so the arr will look like  [1,5,8,9,10,7]

* then we start again to check value as shown 

![link](./image/Screenshot%20(470).png)
* left will be 2 right = 5 and pivot = 7 
* we will go threw for loop until arr[i]<= 7 
* and we will swap the values 
* so the array will look like [1,5,7,9,10,8]

* the we will start again in the function as shown 

![link](./image/Screenshot%20(471).png)
* the left will be 3 and right = 5 and pivot = 8 
* we will go threw the loop until arr[i]<= 8 
* we will swap the both value 
* so the array will look like [1,5,7,8,10,9]

* for the last step we will check the left and right as show

![link](./image/Screenshot%20(472).png)
* left = 4 and right = 5 and pivot = 9 
* we will loop threw the array until arr[i]<= 9 
* then we will swap the value 
* so the last array will look like [1,5,7,8,9,10]

* this is white bored implantation 

![link](./image/ch%202%208.jpg)

*  here is the index result 

![link](./image/Screenshot%20(473).png)

* the last thing is the jest test result \

![link](./image/Screenshot%20(474).png)



