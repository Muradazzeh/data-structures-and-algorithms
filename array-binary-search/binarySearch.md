# Binary Search of Sorted Array
* binary search is way that each time we divide by 2 our array index and the we start with the new index and divide by 2 and so on until we get our result depend in our condition , so it is less time complexity O(log n ) than the nomral for loop that will iterate in the full array O(n) ,  so as shown below the whit bored image .

![link](./Whiteboard%20(3).png) 

![link](./binary-search-sequence-search.gif)

* this is the code..
```` 
function binarySearch(arr, num){
    let firstIndex = 0;
    let lastIndex = arr.length - 1;
    while (firstIndex <= lastIndex) {
    let x = Math.floor((firstIndex+lastIndex)/2);
        if (arr[x] === num) {
            return x;
        } else if (arr[x] < num) {
            firstIndex = x + 1;
        } else {
            lastIndex = x - 1;
        }
    }
    return -1;
}
binarySearch([1,2,3,4,5,6,7,8,9,4,56,2,1,4],56)
````

* finally the test result as shown below 
![link](./Screenshot%20(186).png)