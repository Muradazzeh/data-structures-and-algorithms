`use strict`
const Stack=require("./stack/stack")

function validateBrackets(string){
    let newStack=new Stack()

let newStr=string.replace(/([A-Z])/gi,"")
console.log(newStr)
let bracket={
    '(':')',
    '{':'}',
    '[':']',
}
for(let s of newStr){
    if(bracket[s]){
        newStack.push(bracket[s])
    }
    else {
        if(newStack.pop()!==s) return false
    }
}
console.log(newStack)
return (!newStack.length)
}
module.exports=validateBrackets


console.log(validateBrackets("{}(){}"))
console.log("--------------------------------")
console.log(validateBrackets("(){}[[]]"))
console.log("--------------------------------")
console.log(validateBrackets("()[[ExtraCharacters]]"))
console.log("--------------------------------")
console.log(validateBrackets("{}{}[(())]"))
console.log("--------------------------------")
console.log(validateBrackets("{}{Code}[Fellows](())(){}[[]]"))
console.log("--------------------------------")
console.log(validateBrackets("[({}]"))
console.log("--------------------------------")
console.log(validateBrackets("[({}]"))
console.log("--------------------------------")
console.log(validateBrackets("(]("))
console.log("--------------------------------")
console.log(validateBrackets("{(})"))
console.log("--------------------------------")
console.log(validateBrackets("[}"))




//     for (let i=0;i<string.length;i++){
       
//         if(string[i]=="(" || string[i]=="{"|| string[i]=="[" ) {
//             newStack.push(string[i])
//         }
       
//         else if((newStack.pop()=="("&&string[i]==")")||(newStack.pop()=="{"&&string[i]=="}")||(newStack.pop()=="["&&string[i]=="]")){
             
//         }else 
//         return false
//     }
//      console.log(newStack)
//     console.log(newStack.length)
// return newStack.length ? true:false