'use strict'
const fizzBuzzTree= require("../index")
const KaryTree=require("../classes/K-ary-tree")
const Node=require("../classes/node")

let Tree = null

let three = new Node(3);
let two = new Node(2);
let four = new Node(4);
let five = new Node(5);
let fifteen = new Node (15)
let nine=new Node (9)
let six= new Node(6)

three.child=[two,fifteen,four,five];
two.child=[nine,six]
Tree = new KaryTree(three);

describe('K-ary-Tree ttest',()=>{
    test('first check that value of 3  changed and the root result should be fizz',()=>{
        let x= fizzBuzzTree(Tree)
        expect(x.value).toBe('Fizz')

    })
    test(' check that value of 2 changed to string',()=>{
        let x= fizzBuzzTree(Tree)
        expect(x.child[0].value).toBe('2')

    })
    test(' check that value of 15 changed to FizzBuzz',()=>{
        let x= fizzBuzzTree(Tree)
        expect(x.child[1].value).toBe('FizzBuzz')

    })
    test(' check that value of 5 changed to Buzz',()=>{
        let x= fizzBuzzTree(Tree)
        expect(x.child[3].value).toBe('Buzz')

    })


})
   