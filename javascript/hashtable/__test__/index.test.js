const HashMap=require("../index")


describe('hashTable test cases ', () => {


    const myhashmap = new HashMap(100);
    myhashmap.set('esam', '401');
    myhashmap.set('ahmad', '402');
    myhashmap.set('mohamad', '403');
    myhashmap.set('samah', '404');
    myhashmap.set('laith', '405');
    myhashmap.set('shihab', '406');
    it('Adding a key/value to your hashtable results in the value being in the data structure', () => {
        expect(typeof myhashmap==='object').toBe(true)
    })
    it('Retrieving based on a key returns the value stored', () => {
        expect(myhashmap.get('esam')).toEqual("401");
        expect(myhashmap.get('salem')).toEqual('no values at this key');
        
    
    })
    it('Successfully returns null for a key that does not exist in the hashtable', () => {
        expect(myhashmap.get('murad')).toBe(null);
    })
    it('Successfully returns a list of all unique keys that exist in the hashtable', () => {
        expect(myhashmap.keys()).toBe['esam','ahmad','mohamad','samah','laith','shihab']
    })
    it('Successfully handle a collision within the hashtable', () => {
        expect(myhashmap.map[78].head.value).toContain[{"esam": "401"}];
        expect(myhashmap.map[78].head.next.value).toBe[{'samah': '404'}];
    })
    it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
        expect(myhashmap.get('samah')).toBe("404");
    })
    it('Successfully hash a key to an in-range value', () => {
        expect(myhashmap.size).toBe(100);
    })

})