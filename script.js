// Home -work for lesson #13 //

let country = "Moldova";
let continent = "Europe";
let population = 2.615;

console.log("Country name is "+ country);
console.log(country +"'s continent is "+ continent);
console.log(country +"'s population is "+ population + " billions");

let isIsland = false;

let coutryDescription = country + " is located in " + continent + ", " + population + " mln people live here";
//Should we print it in console?//
console.log(coutryDescription);

// Home -work for lesson #14 //

let weightSarah = 65;
let weightBob = 93;
let heightSarah = 1.75;
let heightBob = 1.75;

let sarahBMI = weightSarah /(Math.pow(heightSarah, 2));
let bobBMI = weightSarah /(Math.pow(heightBob, 2));
let bmiLow = 18.5;
let bmiMiddle=25;
let bmiHigh = 25;
if(sarahBMI<bmiLow){
    console.log("Sarah's BMI is "+ sarahBMI + " underweighted");
}else{
    if(sarahBMI>bmiLow && sarahBMI<bmiMiddle){
        console.log("Sarah's BMI is "+ sarahBMI + " normal weight");
    } else{ 
        console.log("Sarah's BMI is "+ sarahBMI + " overwiehgt");

    }
}
switch(bobBMI){
    case 0:
        bobBMI<bmiLow;
        console.log("Bov's BMI is "+ bobBMI + " underweighted");
        break;
        case 1:
            bobBMI>bmiLow && bobBMI<bmiMiddle;
            console.log("Bov's BMI is "+ bobBMI + " normal weight");
            break;
            default:
                console.log("Bov's BMI is "+ bobBMI + " overweight");

}

// Home -work for lesson #15 //



