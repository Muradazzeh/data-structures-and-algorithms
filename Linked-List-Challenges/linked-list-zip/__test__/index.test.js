`use strict`
const linkedList=require("../library/linked-List")

const  zipLists1  = require("../index")

describe("All tests for linked list file " , () =>{
    test('Creating link list', () => { 
        let create= new linkedList()
        expect(create.head).toBeNull()
     })
    // test ("Testing for first case if both list null so we have to recive null",  ()=>{
        
    //     let LL1 = new linkedList()
    //     let LL2 = new linkedList()
    //     LL1.append(10)
    //      LL1.append(20)
    //     // console.log("jest>>>>>>>>>>",list1)
    //     let result=  zipLists1(LL1,LL2)
    //     expect(result).toEqual("10 =>20 => NULL")
    //    //  let list1=new linkedList()
    //    //  list1.append(10)
    //    //  expect

    // })
})