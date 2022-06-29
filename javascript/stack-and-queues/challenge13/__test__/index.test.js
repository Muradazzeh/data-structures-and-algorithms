`use strict`
const validateBrackets = require('../index');


describe('I will test all the cases for the valedate brackets ',()=>{
    test('Input value will be equal to {} so we will get true ',()=>{
        expect(validateBrackets("{}")).toEqual(true);
    })

    test('Input value will be equal to {}(){} so we will get true ',()=>{
        expect(validateBrackets("{}(){}")).toEqual(true);
    })

    test('Input value will be equal to ()[[ExtraCharacters]] so we will get true ',()=>{
        expect(validateBrackets("()[[ExtraCharacters]]")).toEqual(true);
    })

    test('Input value will be equal to (){}[[]] so we will get true ',()=>{
        expect(validateBrackets("(){}[[]]")).toEqual(true);
    })

    test('Input value will be equal to{}{Code}[Fellows](()) so we will get true ',()=>{
        expect(validateBrackets("{}{Code}[Fellows](())")).toEqual(true);
    })

    test('Input value will be equal to [({}] so we will get false ',()=>{
        expect(validateBrackets("[({}]")).toEqual(false);
    })

    test('Input value will be equal to (]( so we will get false',()=>{
        expect(validateBrackets("(](")).toEqual(false);
    })

    test('Input value will be equal to {(}) so we will get false ',()=>{
        expect(validateBrackets("{(})")).toEqual(false);
    })

    test('Input value will be equal to { so we will get false',()=>{
        expect(validateBrackets("{")).toEqual(false);
    })
    
    test('Input value will be equal to ) so we will get false',()=>{
        expect(validateBrackets(")")).toEqual(false);
    })

    test('Input value will be equal to [} so we will get false',()=>{
        expect(validateBrackets("[}")).toEqual(false);
    })

})