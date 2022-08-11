`use strict`
const mergeSorted= require("../index")

describe("All tests for mergeSorted array " , () =>{
    test('the function return proper mergeSorted array', () => { 
        let arr = [8,4,23,42,16,15]
        let create=mergeSorted(arr)
        expect(create).toBe[4,8,15,16,23,42]
     })
    })