`use strict`
const linkedList=require("../library/linked-List")
const zipLists1 = require("../index")

describe("All tests for linked list file " , () =>{
    test('Creating link list', () => { 
        let create= new linkedList()
        expect(create.head).toBeNull()
     })
     test ("Testing for appending in the list", ()=>{
         let list = new linkedList()
         list.append(5)
         expect(list.head.value).toEqual(5)
         expect(list.head.next).toBeNull()
        //  let list1=new linkedList()
        //  list1.append(10)
        //  expect

     })
   
    



     test ("Testing that we can insert multi node ", () =>{
         let list = new   linkedList();
         list .append(10)
         list .append(20)
         expect(list.head.value).toEqual(10)
         expect(list.head.next.value).toEqual(20)
         expect(list.length).toEqual(2)

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