`use strict`
const sortedArray= require("../index")

describe("All tests for sorted array " , () =>{
    test('the function return proper sorted array', () => { 
        let arr = [8,4,23,42,16,15]
        let create=sortedArray(arr)
        expect(create).toBe[4,8,15,16,23,42]
     })
    })