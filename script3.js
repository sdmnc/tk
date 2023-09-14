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

const person = {fname: "John", name: "Doe", age: 30, job: "developer"}

function personPropreties(obj){
    let i=0
    for(let key in obj){i++}
}
console.log("Person characters " + i)

//Array random number//
function randomArray(n){
    const ranArr = new Array()
    for(let i=1; i<=n; i++){
     //   console.log(i)
        ranArr.push(i)
    }
    console.log(ranArr)
}
randomArray(50)
