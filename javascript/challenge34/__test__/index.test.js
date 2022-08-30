const   {HashMap, uniqueCharacters}=require("../index")



describe('hashTable test cases ', () => {

      
    it('ist test case that alote of repeated characters ', () => {
        expect(uniqueCharacters('No. Try not. Do or do not. There is no try.no to leave me no')).toBeFalsy()
    })
    it('2nd test case also has repeated char characters', () => {
       
        expect(uniqueCharacters('The quick brown fox jumps over the lazy dog')).toBeFalsy()
        
    
    })
    it('3nd test case also has no repeated char characters with some spaces', () => {
       
        expect(uniqueCharacters('I love cats')).toBeTruthy()
        
    
    })
    it('4nd test case also has noo repeated char characters with no spaces', () => {
       
        expect(uniqueCharacters('abcdef')).toBeTruthy()
        
    
    })
   

})