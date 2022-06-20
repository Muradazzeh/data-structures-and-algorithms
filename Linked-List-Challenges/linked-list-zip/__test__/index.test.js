`use strict`
const linkedList=require("../library/linked-List")

const  zipLists1  = require("../index")

describe("All tests for linked list file " , () =>{
    test('Creating link list', () => { 
        let create= new linkedList()
        expect(create.head).toBeNull()
     })
    test ("Testing for first case if both list null so we have to recive null",  ()=>{
        let consolSpy=jest.spyOn(console, 'log');
        let LL1 = new linkedList()
        let LL2 = new linkedList()
        
       
        let result=  zipLists1(LL1,LL2)
        expect(consolSpy).toHaveBeenCalled()
        expect(consolSpy).toHaveBeenCalledWith( " NULL")
    

    })
    test ("Testing for 2nd case if list1 have values and list2 empty should return list 1 ",  ()=>{
        let consolSpy=jest.spyOn(console, 'log');
        let LL1 = new linkedList()
        let LL2 = new linkedList()
        LL1.append(10)
         LL1.append(20)
       
        let result=  zipLists1(LL1,LL2)
        expect(consolSpy).toHaveBeenCalled()
        expect(consolSpy).toHaveBeenCalledWith( "10 =>20 => NULL")
    

    })
    test ("Testing for 3rd case if list2 have values and list1 empty should return list 2 ",  ()=>{
        let consolSpy=jest.spyOn(console, 'log');
        let LL1 = new linkedList()
        let LL2 = new linkedList()
        LL2.append(5)
         LL2.append(15)
       
        let result=  zipLists1(LL1,LL2)
        expect(consolSpy).toHaveBeenCalled()
        expect(consolSpy).toHaveBeenCalledWith("5 =>15 => NULL")
    })
    test ("Testing for 4th case if list1 has equal length with list 2 ",  ()=>{
        let consolSpy=jest.spyOn(console, 'log');
        let LL1 = new linkedList()
        let LL2 = new linkedList()
        LL1.append(10)
        LL1.append(20)

        LL2.append(5)
         LL2.append(15)
       
        let result=  zipLists1(LL1,LL2)
        expect(consolSpy).toHaveBeenCalled()
        expect(consolSpy).toHaveBeenCalledWith("10 =>5 =>20 =>15 => NULL")
    

    })
    test ("Testing for 5th case if list1 has longer length than  list 2 ",  ()=>{
        let consolSpy=jest.spyOn(console, 'log');
        let LL1 = new linkedList()
        let LL2 = new linkedList()
        LL1.append(10)
        LL1.append(20)
        LL1.append(30)

        LL2.append(5)
         LL2.append(15)
       
        let result=  zipLists1(LL1,LL2)
        expect(consolSpy).toHaveBeenCalled()
        expect(consolSpy).toHaveBeenCalledWith("10 =>5 =>20 =>15 =>30 => NULL")
    

    })
    test ("Testing for 6th case if list1 has shorter length than  list 2 ",  ()=>{
        let consolSpy=jest.spyOn(console, 'log');
        let LL1 = new linkedList()
        let LL2 = new linkedList()
        LL1.append(10)
        LL1.append(20)
        

        LL2.append(5)
         LL2.append(15)
         LL2.append(30)
         LL2.append(40)
       
        let result=  zipLists1(LL1,LL2)
        expect(consolSpy).toHaveBeenCalled()
        // expect(consolSpy).toHaveBeenCalledWith(" 10 =>5 =>20 =>15 =>30 =>40 => NULL")
    

    })
})