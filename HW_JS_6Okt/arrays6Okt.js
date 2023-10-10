//  ЗАДАЧА 1 => https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
// Create a function that takes an integer as an argument and 
// returns "Even" for even numbers or "Odd" for odd numbers.
const number = 7
function evenOrOdd(number) {
  if (number % 2 === 0) {
     return oddResult = 'Odd:' + number
  } else if (number % 2 !== 0) {
    return evenResult = 'Even' + number}
console.log(evenResult, oddResult)}



// ЗАДАЧА 2 => https://www.codewars.com/kata/57e76bc428d6fbc2d500036d
//Write a function to split a string and convert it into an array of words.

let string = 'Every day I do exercises';
function stringToArray(string){
     return string.split(" ");
}
const arr = stringToArray(string);
console.log(arr)


// ЗАДАЧА 3 => ttps://www.codewars.com/kata/55b42574ff091733d900002f
//Make a program that filters a list of strings and returns a list with only your friends name in it.
const friends = ["Anna", "Boris", "Irina", "Tim", "Jan", "Janine"] 
const filteredFriends = friends.filter((el) => el.length > 3)
console.log(filteredFriends)


// Задача на filter
// 1. Отфильтровать массив только с уникальными хначения используя filter и indexOf()
const arr1 = [
    { id: 1, title: 'велосипед', price: 45000 },
    { id: 5, title: 'cамокат', price: 15000 },
    { id: 2, title: 'сноуборд', price: 20000 },
    { id: 3, title: 'лыжи', price: 22000 },
  ]


// 2. Отфильтровать продукты дешевле 15
const products = [
    { name: 'Apple', price: 15 },
    { name: 'Banana', price: 8 },
    { name: 'Cherry', price: 3 },
    { name: 'Grape', price: 22 },
    { name: 'Orange', price: 12 },
  ]
const filteredProducts = products.filter((el) => el.price < 15)
console.log(filteredProducts)


// 3. Найти объект с автором В
const books = [
    { title: 'Book 1', author: 'Author A' },
    { title: 'Book 2', author: 'Author B' },
    { title: 'Book 3', author: 'Author A' },
    { title: 'Book 4', author: 'Author C' },
  ]
const authorB = books.find((el) => el.author === 'Author B')  
console.log(authorB)


// 4. отсортировать по id
const arr2 = [
    { id: 9, title: 'велосипед', price: 45000 },
    { id: 14, title: 'самокат', price: 15000 },
    { id: 7, title: 'сноуборд', price: 20000 },
    { id: 1, title: 'лыжи', price: 22000 },
    { id: 3, title: 'ролики', price: 18000 },
    { id: 13, title: 'коньки', price: 17000 },
    { id: 4, title: 'скейтборд', price: 19000 },
    { id: 15, title: 'парашют', price: 50000 },
    { id: 8, title: 'гироборд', price: 25000 },
    { id: 6, title: 'сёрфборд', price: 27000 },
    { id: 10, title: 'подводные лыжи', price: 55000 },
    { id: 12, title: 'мотоцикл', price: 65000 },
    { id: 11, title: 'санки', price: 5000 },
    { id: 5, title: 'батут', price: 30000 },
    { id: 2, title: 'катамаран', price: 32000 },
  ]
const sortedArr = arr2.sort((a, b) => a.id - b.id)  
console.log(sortedArr)


// 5. отсортировать объекты по алфавиту
const people = [
    { name: 'Frank', age: 35 },
    { name: 'Eva', age: 22 },
    { name: 'Hannah', age: 31 },
    { name: 'Alice', age: 25 },
    { name: 'Charlie', age: 30 },
    { name: 'Jack', age: 27 },
    { name: 'Bob', age: 20 },
    { name: 'David', age: 28 },
    { name: 'Grace', age: 29 },
    { name: 'Isaac', age: 23 },
  ]
const sortedPeople = people.sort((a, b) => a.name - b.name)
console.log(sortedPeople)


// 6. Отсортиировать по возрасту
const people1 = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 30 },
    { name: 'David', age: 28 },
    { name: 'Eva', age: 22 },
    { name: 'Frank', age: 35 },
    { name: 'Grace', age: 29 },
    { name: 'Hannah', age: 31 },
    { name: 'Isaac', age: 23 },
    { name: 'Jack', age: 27 },
  ]
  const sortedPeople1 = people1.sort((a, b) => a.age - b.age)
  console.log(sortedPeople1)


// 7. найти сумму четных!! чисел массива.
const numbers22 = [7, 42, 33, 16, 50, 3, 28, 21, 15, 39]
const sumOdd = numbers22.reduce(function(sum, elem) {
    if (elem % 2 === 0) {
        return sum + elem;
    } else {
        return sum;
    }
})
console.log(sumOdd)


// 8.  Используя метод reduce найти наибольшее число массива.
const numbers23 = [7, 42, 33, 16, 50, 3, 28, 21, 15, 39]
const maxValue = numbers23.reduce((sum, currentValue) => sum < currentValue ? currentValue : sum);
console.log(maxValue)


// 9.reduce найти объект товара с самой высокой ценой.
const arr222 = [
    { id: 1, title: 'велосипед', price: 45000, marks: [4, 5, 3, 5] },
    { id: 2, title: 'самокат', price: 15000, marks: [4, 4, 5, 4] },
    { id: 3, title: 'сноуборд', price: 20000, marks: [3, 3, 2, 3] },
    { id: 4, title: 'лыжи', price: 22000, marks: [4, 4, 3, 4] },
  ]
const maxPrice = arr222.reduce((sum, currentValue) =>  sum < currentValue.price ? currentValue.price : sum)
    console.log(maxPrice)
    
  
// 10. Найти среднюю оценку marks у товара
  const arr28 = [
    { id: 1, title: 'велосипед', price: 45000, marks: [4, 5, 3, 5] },
    { id: 2, title: 'самокат', price: 15000, marks: [4, 4, 5, 4] },
    { id: 3, title: 'сноуборд', price: 20000, marks: [3, 3, 2, 3] },
    { id: 4, title: 'лыжи', price: 22000, marks: [4, 4, 3, 4] },
  ]
const averageMarks = arr28.map((product) => ({ ...product, 
  average: product.marks.reduce((all, mark) => all +mark) / product.marks.length,
}));
console.log(averageMarks)

