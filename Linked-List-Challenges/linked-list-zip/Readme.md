# Challeng 08 Zip two linked lists 
* is linear data structure thats contains nodes and the nods contains value and pointer to the next node , as showen below 
![link](./Image/InkedLinkedlist_LI.jpg)


* first I will put white bored image 
![link](./Image/Screenshot%20(292).png)

* this challenge one of the most confusing challenge I see , first I try to make zip function from the linked list class proparty , but it didnt work with me ,  then I decided to make it a function in the index file m with two argument 2 lists , 

* In this function I created new list , third one , so I can store the data in 
*  also I tryed to do the adding in List 1 , but I confused by losing connection between the lists 
* so the finall code I create 3rd list and I used append function , , then I will check for the first edge case , if any of the input list empty 
* will return the other list , and if both empty will return null
* then I will use counter for checking the odd number and the even number , and I will append all list 1 value in the odd index , and the all list 2 value on the even index , using while loop , this test case will work if both lists is equal .
* then I will make another edge case if list 1 length more than list 2 , I will add the remaining value in the new list
* if list 2 longer also I will add the remaining value in the new list .
* finally I will return the new list 

* I prepared all edge cases to show all my results , as shown below :
    * first case if both list is empty 
![link](./Image/Screenshot%20(293).png)
    * 2nd case if any of the lists is empty wil return the other on 
![link](./Image/Screenshot%20(294).png)
![link](./Image/Screenshot%20(295).png)
    * if the both lists is equal length 
![link](./Image/Screenshot%20(296).png)
    * if list 1 length more than list 2 length 
![link](./Image/Screenshot%20(297).png)
    * if list 2 length more than list 1 length 
    ![link](./Image/Screenshot%20(298).png)
    * last case if the list 2 length is half list 1 length 
![link](./Image/Screenshot%20(299).png).


### finally I tryed to prepare jest test for all casess , as shown in the picture above , like I have 6 casses, but I couldn't Implemnt Zip List function on the test , I will try to do it 

## > Update I Used console spy on the function because all my result was printed on console so when I used normal function it is gives me undifined , but now I got result as shown :

![link](./Image/Screenshot%20(300).png)
![link](./Image/Screenshot%20(301).png)

* and this the link for the test file [link for test file](./__test__/index.test.js)







