/*
  Assn: Data Manipulation in JavaScript
  Name: Richard Tillies
  Date: February 5, 2024
*/

/*==========
 * PART 2 *
 =========*/

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

// Variables and Constants
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
