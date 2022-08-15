`use strict`
const QuickSort= require("../index")

describe("All tests for QuickSort array " , () =>{
    test('the function return proper QuickSort array', () => { 
        let arr = [8,4,23,42,16,15]
        let create=QuickSort(arr)
        expect(create).toBe[4,8,15,16,23,42]
     })
    })