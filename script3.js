// Homework 17//
//Array Fruits//

const fruits = ["apple", "banana", "orange", "peach", "mango"]

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

//Array Number//
let numbers = new Array(1, 2, 4, 5, 6)
let result = 0;
for (let i = 0; i < numbers.length; i++) {
    result += numbers[i]
}
console.log("The sum of numbers is array equals " + result)

//Array names//

const names = ["John", "JaneaJaneaJanea", "Michael", "Jennifer", "Bobby"]
const newArray = new Array()
for (let i = 0; i < names.length; i++) {
    newArray.push(names[i].length)
}
console.log(newArray)

//Department//

// const company = [
// ["Dev", "John", "Bob", "Samanta", "Peter"], 
// [ "QA", "Silivia", "Jane", "Monica", "Henry"],
// ["HR", "Megan", "Kate","Beth", "Eve"],
//  ["Finance", "Barbie", "Ken", "Marusia", "Lea"]
// ]

const company = [["Dev", "QA", "HR", "Finance"],
["John", "Bob", "Samanta", "Peter"],
["Silivia", "Jane", "Monica", "Henry"],
["Megan", "Kate", "Beth", "Eve"],
["Barbie", "Ken", "Marusia", "Lea"]

]
const sortedArray = new Array()
const myArray = new Array()
for (let i = 0; i < company.length; i++) {
    if (i > 0) {
        //  console.log(company[i])
        let name = company[i]
        sortedArray.push(company[i])
    }
}
console.log(sortedArray)
const finalArray = new Array
for (i = 0; i < sortedArray.length; i++) {
    for (j = 0; j < sortedArray[i].length; j++) {
        finalArray.push(sortedArray[i][j]);
    }
}
console.log(finalArray.sort())

// Objects //

const person = { fname: "John", name: "Doe", age: 30, job: "developer" }

function personPropreties(obj) {
    let i = 0
    for (let key in obj) { i++ }
}
console.log("Person characters " + i)

//Array random number//
function randomArray(n) {
    const ranArr = new Array()
    for (let i = 1; i <= n; i++) {
        //   console.log(i)
        ranArr.push(i)
    }
    console.log(ranArr)
}
randomArray(50)

//Biggest number//

const numbers2 = [5, 6, 20, 345, 80, 2, 3444, 40]
let theBiggestNumber = 0

for (let i = 0; i <= numbers2.length; i++) {
    if (numbers2[i] > theBiggestNumber) {
        theBiggestNumber = numbers2[i]
    }
}
console.log("The Biggest Number " + theBiggestNumber)

//Average //

let total = 0;
let count = 0;
function average(grades) {
    console.log(grades)

    for (let proprety in grades) {
        if (typeof grades[proprety] === 'number') {

            total += grades[proprety];

            count++;
        }

    }
    return total / count;
}
let grades = { math: 8, literature: 7, history: 9, biology: 5 }
console.log(average(grades));

// Object Dog (Pes)//

let dog = new Object();

function Dog(nickname, age, color) {
    this.name = nickname
    this.age = age
    this.color = color
    this.puppiesNames = [];
}

function addPuppies(dog, puppiesNumber) {
    for (let i = 1; i <= puppiesNumber; i++) {
        dog.puppiesNames.push("Puppy" + i);
    }
}

let myDog = new Dog("Buddy", 5, "Golden");

addPuppies(myDog, 3);

console.log(myDog.puppiesNames);
console.log(myDog)
