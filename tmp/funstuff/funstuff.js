// function isPalindrome(word) {
//     let isPalindrome
//     word = word.toLowerCase()
//     let wordArray = word.split('').reverse().join('')
//     word === wordArray ? isPalindrome = true : isPalindrome = false
//     return isPalindrome
     
// }
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("raceCar"));
// console.log(isPalindrome("racesdfdsdfr"));


// function isPrime(number) {
//     if(number < 2) {
//         return false
//     } 
//     if (number != Math.round(number)) {
//         return false
//     }

//     let isPrime = true; 
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i == 0) {
//             isPrime = false;
//         }
//     }
//     return isPrime
// }

// function printPrimes(number) {
//     let primeNumbers = []
//     for(let i = 0; i <number; i++) {
//         if(isPrime(i) === true) {
//             primeNumbers.push(i)
//         }
//     }
//     console.log(primeNumbers);

// }
// console.log(isPrime(5));
// console.log(printPrimes(97));

function isPyramid(word) {
    let newWord;
    let count = {}
    let countArray = []
    let current = 0;
    newWord = word.split('').sort()
    for (let i = 0; i < newWord.length; i++) {
        if(newWord[i] === current) {
            count[newWord[i]] += 1;
        } else {
            count[newWord[i]] = 1
        }
        current = newWord[i]
    }
    Object.values(count).forEach(element => {
        countArray.push(element)
    });
    countArray.sort()
    console.log(countArray);

    let isPyramid;
    for(let i = 0; i < countArray.length - 1; i++) {
        if(countArray[i] + 1 === countArray[i+1]) {
            isPyramid = true;
        } else {
            return isPyramid = false
        }
    }
    return isPyramid;
}

console.log(isPyramid("banana"));
console.log(isPyramid("bob"));
console.log(isPyramid("WOWWW"));
console.log(isPyramid('bandana'));