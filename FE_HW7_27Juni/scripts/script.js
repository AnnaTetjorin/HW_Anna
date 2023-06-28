/*function power(a, b) {
    if(a < b) {
        return a 
    } else {
        return b
    }}
    const result = power(92, 40)
    console.log(result)



function createArr (a, b, c) {
if (a % 2 === 0) {
    console.log(a)
} 
if (b % 2 === 0) {
    console.log(b)
}
if (c % 2 === 0) {
    console.log(c)
}
}

createArr(8, 11, 14)





function power(a, b=2) {
    return a**b
}
const result = power(7)
console.log(result)





function sum(n) {
 let sumN = 0
for(let i = 1; i <= n; i++) 
    sumN = sum + sum(n)  
}
const result = sum(5)
console.log(result)




function number(n, m)
let sumEven = 0
let sumOdd = 0
for(let i = n; i < m; i++) {
    if(i % 2 === 0) {
        sumEven = sumEven + i
    } else { 
        sumOdd = sumOdd + i }
}
const result = number(2, 8)
console.log(sumEven, sumOdd)




const words = ["one", "two", "three", "four", "five", "six", "seven", "eight"]
function getLongestWord(words) {
    let longestWord = words[0]
    for(let i = 0; i < words.length; i++) {
        if(longestWord < words[i]) {
            longestWord = words[i]
            } 
    }
    return longestword
}  
const result = getLongestWord
console.log(result);*/