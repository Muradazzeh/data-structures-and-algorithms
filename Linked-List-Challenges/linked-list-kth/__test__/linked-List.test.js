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

     test ("Testing The head property will properly point to the first node in the linked list", ()=>{
         let list = new linkedList()
         list.append(5)
         expect(list.head.value).toEqual(5)
         list.append(8)
         expect(list.head.value).toEqual(5)
         list.append(9);
         list.append(7);
         list.append(8);
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
    test("the function should do console logging and we have to recive the requierd result",()=>{
        let consolSpy=jest.spyOn(console, 'log');
        let list = new linkedList()
        list.append(5)
        list.toString()
        expect(consolSpy).toHaveBeenCalled()
        expect(consolSpy).toHaveBeenCalledWith("5 => NULL")
    })
    test("This is the test for the methode  kthFromEnd the value in the middle of the linked list  ",()=>{
        let list = new linkedList()
        list.append(9);
        list.append(7);
        list.append(8);
       
        expect( list.kthFromEnd(0)).toEqual(8)
    })
    test("This is the test for the methode  kthFromEnd if k is greater than the length of the linked list ",()=>{
        let list = new linkedList()
        list.append(9);
        
       
        expect( list.kthFromEnd(2)).toEqual("Exeption this index more than the length")
    })
    test("This is the test for the methode  kthFromEnd Where k and the length of the list are the same ",()=>{
        let list = new linkedList()
        list.append(9);
        list.append(10);
        list.append(11);
        
       
        expect( list.kthFromEnd(2)).toEqual(9)
    })
    test("This is the test for the methode  kthFromEnd WhereWhere k is not a positive integer ",()=>{
        let list = new linkedList()
        list.append(9);
        list.append(10);
        list.append(11);
        
       
        expect( list.kthFromEnd(-1)).toEqual("negative number not allowed")
    })



})

