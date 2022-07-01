`use strict`
const linkedList=require("../library/linked-List")


describe("All tests for linked list file " , () =>{
    test('Creating link list', () => { 
        let create= new linkedList()
        expect(create.head).toBeNull()
     })
     test ("Testing for inserting in the list", ()=>{
         let list = new linkedList()
         list.append(5)
         expect(list.head.value).toEqual(5)
         expect(list.head.next).toBeNull()
     })
     test ("Testing for Append function in the list", ()=>{
         let list = new linkedList()
         list.append(5)
         expect(list.head.value).toEqual(5)
         expect(list.head.next).toBeNull()
     

     })
     test ("Testing for insertAfter function in the list", ()=>{
         let list = new linkedList()
         list.append(5)
         list.insertAfter(5,20)
         expect(list.head.next.value).toEqual(20)
        
     

     })
     test ("Testing The head property will properly point to the first node in the linked list", ()=>{
         let list = new linkedList()
         list.append(5)
         expect(list.head.value).toEqual(5)
         list.append(8)
         expect(list.head.value).toEqual(5)
         list.append(9);
         list.append(7);
         list.append('8');
         expect(list.head.value).toEqual(5)
     })



     test ("Testing that we can insert multi node ", () =>{
         let list = new   linkedList();
         list .append(10)
         list .append(20)
         expect(list.head.value).toEqual(10)
         expect(list.head.next.value).toEqual(20)
         expect(list.length).toEqual(2)

     })
     test ("will return True if the value in the linked list", () =>{
         let list = new linkedList();
        list.append(10)
        list.append(20)
        list.append(50)
        list.append(40)
        list.append(30)
        expect(list.includes(20)).toBeTruthy()
        expect(list.includes(30)).toBeTruthy()
     })

     test ("will return False if the value is not in the linked list", () =>{
        let list = new linkedList();
       list.append(10)
       list.append(20)
       list.append(50)
       list.append(40)
       list.append(30)
       expect(list.includes(5)).toBeFalsy()
       expect(list.includes(35)).toBeFalsy()
    })  

    test("the function should do console logging and we have to recive the requierd result",()=>{
        let consolSpy=jest.spyOn(console, 'log');
        let list = new linkedList()
        list.append(5)
        list.toString()
        expect(consolSpy).toHaveBeenCalled()
        expect(consolSpy).toHaveBeenCalledWith("5 => NULL")
    })
})

// describe("Testing the to string method ", () =>{

//     // let consolSpy=jest.spyOn(console, 'log');
//     // beforeEach(() => {
//     //     consoleSpy = jest.spyOn(console, 'log');
//     // });
   
  

//  })