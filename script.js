// Home -work for lesson #13 //

let country = "Moldova";
let continent = "Europe";
let population = 2.615;

console.log("Country name is " + country);
console.log(country + "'s continent is " + continent);
console.log(country + "'s population is " + population + " billions");

let isIsland = false;

let coutryDescription = country + " is located in " + continent + ", " + population + " mln people live here";
//Should we print it in console?//
console.log(coutryDescription);

// Home -work for lesson #14 //

let weightSarah = 65;
let weightBob = 93;
let heightSarah = 1.75;
let heightBob = 1.75;

let sarahBMI = weightSarah / (Math.pow(heightSarah, 2));
let bobBMI = weightSarah / (Math.pow(heightBob, 2));
let bmiLow = 18.5;
let bmiMiddle = 25;
let bmiHigh = 25;
if (sarahBMI < bmiLow) {
    console.log("Sarah's BMI is " + sarahBMI + " underweighted");
} else {
    if (sarahBMI > bmiLow && sarahBMI < bmiMiddle) {
        console.log("Sarah's BMI is " + sarahBMI + " normal weight");
    } else {
        console.log("Sarah's BMI is " + sarahBMI + " overwiehgt");

    }
}
switch (bobBMI) {
    case 0:
        bobBMI < bmiLow;
        console.log("Bob's BMI is " + bobBMI + " underweighted");
        break;
    case 1:
        bobBMI > bmiLow && bobBMI < bmiMiddle;
        console.log("Bob's BMI is " + bobBMI + " normal weight");
        break;
    default:
        console.log("Bob's BMI is " + bobBMI + " overweight");

}

// Home -work for lesson #15 //

const NUMBER = 42;
function isOddEven() {
    let result = NUMBER / 2
    // console.log(result);
    if (result == 0) {
        console.log(NUMBER + " is Even")
    } else
        console.log(NUMBER + " is Odd")
}
isOddEven();

// Ternary operator//


let isLoggedIn = true;

let result = (isLoggedIn) ? 'logged in' : 'logged out';
console.log("You're " + result);

if (isLoggedIn) {
    console.log("Hello Username!");
} else {
    console.log("Please log in");
}

// Warehouse items//

let itemPrice = 100;
let quantaty = 3000000;
let isInStock = true;
//let isInStock = false;

let itemsValue = isInStock * quantaty

if (isInStock) {
    console.log("The value of good on deposit is " + itemsValue + "$")
} else {
    console.log("There are not items in stock")
}

//  Leap Year//

let year = 2023;

let resultYear = year % 4;
if (resultYear == 0) {
    console.log("The year " + year + " is leap year");
} else {
    console.log("The year " + year + " is not a leap year");
}

// Switch //

let countryCode = "US";
switch (countryCode) {
    case "MD":
        console.log("Moldova");
        break;
    case "US":
        console.log("United States");
        break;

    case "UK":
        console.log("Great Britain");
        break;

    case "ZM":
        console.log("Zimbabve");
        break;

    case "SO":
        console.log("Somali");
        break;

    case "RO":
        console.log("Romania");
        break;
    default:
        console.log("We don't know that country yet.");

}
const grade = 87;

//
switch (true) {
    // If score is 90 or greater
    case grade >= 90:
        console.log("A");
        break;
    // If score is 80 or greater
    case grade >= 80:
        console.log("B");
        break;
    // If score is 70 or greater
    case grade >= 70:
        console.log("C");
        break;
    // If score is 60 or greater
    case grade >= 60:
        console.log("D");
        break;
    // Anything 59 or below is failing
    default:
        console.log("F");
}
// Functions //

function TellFortune(n, z, y, x) {
    console.log("You will be " + x + " in " + y + " , and get married to " + z + " with " + n + " kids")
}
TellFortune(2, "Eve", "Heaven", "CTO")
TellFortune(0, "John", "Thailand", "CEO")
TellFortune((Math.floor((Math.random() * 4) + 1)), "Sarah", "USA", "BA")

//DOG//

function CalculateDogAge(dogAge, humanAge) {
    let dogAgeResult = dogAge * 7;
    console.log("Your dog is " + dogAgeResult + " in dog's years");
    let humanAgeResult = humanAge / 7;
    console.log("HumanAge " + humanAgeResult)

}


CalculateDogAge(3, 70)
CalculateDogAge(4)
CalculateDogAge(5, 40)
CalculateDogAge(7);


// Arrow Functions //

const func = (curAge, food, maxYears) => (maxYears - curAge) * (food * 365);
func(33, 3, 100)

console.log(func(33, 3, 100))
console.log(func(15, 2, 100))
console.log(func(40, 1, 100))