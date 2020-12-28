// function containsVowel(string){
//     vowels=['a','e','i','o','u']
//     containVowel= false;
//     if(string.includes(...vowels)){
//             containsVowel= true;
//     }
//     return true;
//     }
// console.log(containsVowel("Hello"));



// function containsVowel(string){
//     vowels=['a','e','i','o','u']
//     hasVowel = false
//     for (let i = 0; i < string.length; i++) {
//         if(vowels.includes(string[i])) {
//             hasVowel = true;
//         } 
//         }
//         return hasVowel;

//     }
// console.log(containsVowel("Hello"));


// function isEmail(email) {
//     let splitString = email.split('')
//     let isEmail = false
//     emailChars = ['@','.']
//     if(splitString.includes(splitString)) {
//         isEmail = true
//     }
//     return isEmail
// }
// isEmail("scocuzza3@gmail.com")


const patternMatch  = word => {
    const regexp = /[aeiou]/
    return regexp.test(word);
}

console.log(patternMatch("hello"));