// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Part 1: Math Problems


const isLarger = n1 > n4;
console.log(isLarger); 

const isResult = n1 - n2;
console.log(isResult); 

const isResult2 = isResult * n3 
console.log(isResult2)

const isResult3 = isResult2 / n4
console.log(isResult3)


// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;


const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);



// Part 2: Practical Math

// Distance trip, in total miles
const distanceMiles = 1500;

// Car's Fuel Efficiency 
const speeds = [55, 60, 75];
const mileages = [30, 28, 23];


// My fuel budget
const fuelBudget = 175;
// Aver Coat Per Gallon
const averageCostFuel_PerGallon = 3; // How many gallon of fuel will you need for the entire trip
//distance divided MPG

// 55 Miles per hours
const gallon = (distanceMiles / mileages[0]);
console.log(gallon);

// 60 miles per hours
const gallonTwo = distanceMiles / mileages[1];
console.log(gallonTwo)

// 75 Miles Per Hours
const gallonThree = distanceMiles / mileages[2];
console.log(gallonThree);





//Will your budget be enough to cover fuel expenses
//fuel cost = (distance / efficiency(per gallon) * cost per gallon)
const fuelCost = (distanceMiles / mileages[0] * averageCostFuel_PerGallon); // 30 miles per gallon at 55 miles per hour
console.log(fuelCost)
if (fuelBudget > fuelCost){
console.log("My budget is cover fuel expenses")
} else {
console.log("My budget is not enough to cover fuel expenses.")
}


const fuelCostTwo = ((distanceMiles / mileages[1]) * averageCostFuel_PerGallon) // 28 miles oer gallon at 60 miles per hour
console.log(fuelCostTwo);
if(fuelBudget > fuelCostTwo) {
console.log("My budget covers fuel expenses.");
} else {
console.log("My budget does not cover fuel expenses.");
}


const fuelCostThree = ((distanceMiles / mileages[2]) * averageCostFuel_PerGallon) // 23 miles per gallon at 75 miles per hour
console.log(fuelCostThree);
if (fuelBudget > fuelCostThree){
console.log("My budget covers fuel expenses.")
} else {
console.log("My budget does not cover fuel expenses.")
}




// How long will the trip take, in hour?

// 55 Miles Per Hour
const hours = distanceMiles / speeds[0];
console.log(hours);
console.log("The trip takes" + " " + Math.round(hours) + " " + "hours to get there.");

// 60 Miles Per Hour
const hourTwo = distanceMiles / speeds[1];
console.log(hourTwo);
console.log("The trip takes" + " " + hourTwo + " " + "hours to get there.");

// 75 Miles Per Hour
const hourThree =  distanceMiles / speeds[2];
console.log(hourThree);
console.log("The trip makes" + " " + hourThree + " " + "hours to get there.");




