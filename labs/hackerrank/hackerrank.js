function factorial(n) {
    if (n === 0) {
        return 1
    } else {
        console.log(n);
        return n * factorial(n-1)
    }
}

function vowelsAndConsonants(s) { 
    for(let i = 0; i < s.length; i++) {
        console.log(s[i]);
    }
    s.array.forEach(element => {
        
    });
}

let vowelArray = []
let consonantArray = []

function vowelsAndConsonants(s) {
    for (let i = 0; i < s.length; i++) {
        if(s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u') {
            vowelArray.push(s[i])
        } else {
            consonantArray.push(s[i])
        }
    }
    vowelArray.forEach( vowel => {
        console.log(vowel)
    })
    consonantArray.forEach( consonant => {
        console.log(consonant)
    })
}
