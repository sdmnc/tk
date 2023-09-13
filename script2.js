console.log("test");
// Fruits Array//
const fruits = [];
fruits.push("apple");
fruits.push("banana", "orange");
console.log("The lenght of fruits array is " + fruits.length);
console.log(fruits);

//Number array//

const numbers = [3, 4, 5];
numbers.pop();
console.log(numbers)
numbers.shift()
console.log(numbers)

// colors array//
const colors = ["red", "green", "blue", "yellow"]
console.log(colors.indexOf("green"))
console.log(colors.includes("orange"))

//names array//

const names = ["John", "Jane", "Mike", "Jenifer"]
names.unshift("David")
console.log(names)
console.log(names.indexOf("Mike"))

//months array//
const months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September",
    "October", "November", "December")
months.sort()
console.log(months)

const filteredArray = months.filter((month) => month.length > 3)

console.log(filteredArray)

const myMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
    "October", "November", "December"]

console.log(myMonths.slice(6, 11))

let fiveLetters = months.filter((month) => month.length > 5)
console.log(fiveLetters.join("-"))