// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(`Is Sum 50? ${isSum50}`);

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(`At least two odd numbers: ${isTwoOdd}`);

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(`No numbers larger than 25: ${!isOver25}`);

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(`All unique numbers: ${isUnique}`);

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(`Single variable "isValid": ${isValid}`);
// console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

// Check if all numbers are divisible by 5. Cache the result in a variable.
const divisibleByFive = (n1 % 5 == 0) && (n2 % 5 == 0) && (n3 % 5 == 0) && (n4 % 5 == 0);
console.log(`Divisible by 5: ${divisibleByFive}`);

// Check if the first number is larger than the last. Cache the result in a variable.
const firstLargerThanLast = (n1 > n4);
console.log(`First number larger than last: ${firstLargerThanLast}`);

/*
  Accomplish the following arithmetic chain:
  Subtract the first number from the second number.
  Multiply the result by the third number.
  Find the remainder of dividing the result by the fourth number.
*/
let mathChain = n2 - n1;
mathChain *= n3;
mathChain %= n4;
console.log(`Result of arithmetic chain: ${mathChain}`);


/*
  Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
*/
// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isUnder25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;
console.log(`No numbers larger than 25 v2: ${isUnder25}`);


/**********
 * PART 2 *
 **********/

/*
  Scenario:
    You are planning a cross-country road trip!
    The distance of the trip, in total, is 1,500 miles.
    Your car’s fuel efficiency is as follows:
    At 55 miles per hour, you get 30 miles per gallon.
    At 60 miles per hour, you get 28 miles per gallon.
    At 75 miles per hour, you get 23 miles per gallon.
    You have a fuel budget of $175.
    The average cost of fuel is $3 per gallon.
    
  Questions:    
    How many gallons of fuel will you need for the entire trip?
    Will your budget be enough to cover the fuel expense?
    How long will the trip take, in hours?
*/

// Constants
const TRIP_DISTANCE = 1500.0
const FUEL_BUDGET = 175.0
const COST_PER_GALLON = 3.0
let mph, efficiency, gallonsNeeded, totalFuelCost, tripDuration

// 55 mph
mph = 55.0
efficiency = 30.0
gallonsNeeded = (TRIP_DISTANCE / efficiency).toFixed(2)
totalFuelCost = (gallonsNeeded * COST_PER_GALLON).toFixed(2)
tripDuration = (TRIP_DISTANCE / mph).toFixed(2);

console.log("\n=== 55 MPH ===");
console.log(`Gas Needed: ${gallonsNeeded} gallons`);
console.log(`Fuel Cost: $${totalFuelCost}`);
console.log(`Trip Duration: ${tripDuration} hours`);
console.log(`Do we have enough money? ${FUEL_BUDGET >= totalFuelCost}`);

// 60 mph
mph = 60.0
efficiency = 28.0
gallonsNeeded = (TRIP_DISTANCE / efficiency).toFixed(2)
totalFuelCost = (gallonsNeeded * COST_PER_GALLON).toFixed(2)
tripDuration = (TRIP_DISTANCE / mph).toFixed(2);

console.log("\n=== 60 MPH ===");
console.log(`Gas Needed: ${gallonsNeeded} gallons`);
console.log(`Fuel Cost: $${totalFuelCost}`);
console.log(`Trip Duration: ${tripDuration} hours`);
console.log(`Do we have enough money? ${FUEL_BUDGET >= totalFuelCost}`);

// 75 mph
mph = 75.0
efficiency = 23.0
gallonsNeeded = (TRIP_DISTANCE / efficiency).toFixed(2)
totalFuelCost = (gallonsNeeded * COST_PER_GALLON).toFixed(2)
tripDuration = (TRIP_DISTANCE / mph).toFixed(2);

console.log("\n=== 75 MPH ===");
console.log(`Gas Needed: ${gallonsNeeded} gallons`);
console.log(`Fuel Cost: $${totalFuelCost}`);
console.log(`Trip Duration: ${tripDuration} hours`);
console.log(`Do we have enough money? ${FUEL_BUDGET >= totalFuelCost}`);
