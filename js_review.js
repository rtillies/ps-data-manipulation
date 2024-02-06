/*
  Assn: JavaScript Review
  Name: Richard Tillies
  Date: February 5, 2024
*/

// Instructions: Follow the prompts and make sure to check your answer in the console. Some of the methods I am requiring of you to use, we may not have done in class. That's on purpose, if you need assistance look back in lessons, and of course Google. :) 

// =================================================
//                     VARIABLES
// =================================================

// 1.) Declare a variable
let myVariable = "initial value";
console.log(myVariable);

// 2.) Change the value of this variable
myVariable = "good morning";
console.log(myVariable);

// 3.) Change the data type of this variable
myVariable = 5
console.log(myVariable);

// 4.) Create another variable and the one from above to concatenate
let myName = "Brittany"
console.log(myVariable + myName);

// 5.) Use any of the variables above or create new ones and print using string interpolation
let myLocation = "New York";
console.log(`My name is ${myName} and I live in ${myLocation}`);
// My name is Brittany and I live in New York

// ================ Variable Names =================
/* 
    • Case-sensitive! Try it out! :O
    • Can contain letters, digits, or the symbols $ and _
    • Can't start with 0-9
    • Can't use reserved keywords in JS such as var, function, return, etc. 
*/

// =================================================
//                      STRINGS
// =================================================

// Look up the following string methods!

// Using charAt(), print the letter i in Susmita
let susmita = "Susmita";
console.log(susmita.charAt(4));

// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Ciera
/* 
  According to Wikipedia, Unicode is a text encoding standard designed to support the use of text written in all of the world's major writing systems.
*/
let ciera = "Ciera";
console.log(ciera.charCodeAt(2));

// Using fromCharCode() - make it readable for us :). You'll see!
console.log(String.fromCharCode(104, 101, 108, 108, 111)); // hello
console.log(String.fromCharCode(67, 105, 101, 114, 97)); // Ciera
// 104 = h, 101 = e, 108 = l, 111 = o

// Take your first and last name and concat()
let firstName = "Richard"
let space = " "
let lastName = "Tillies"
let fullName = firstName.concat(space, lastName)
console.log(fullName);

// Create a string and make it return true using startsWith()
let myFavoriteFood = "Pasta is my favorite food."
let myResult = myFavoriteFood.startsWith("Pasta")
console.log(myResult);

// Now use any variable with endsWith() and return false
let myFavoriteTeam = "I like the New York Giants"
myResult = myFavoriteTeam.endsWith("Glue")
console.log(myResult);

// Finish the following sentence. Use includes() and return true.
let maireg = 'Once upon a time Maireg looked up at the Moon, and he smiled!'
myResult = maireg.includes("looked")
console.log(myResult);

// Help! I'm looking for my cow! Using indexOf() help Manny find his cow. What's the index of cow?
let mannyHadALittleLambOopsCow = "Manny lives in a farm. Manny was overwhelmed with coding. Manny is stressed out. Manny fed the chickens this morning and watered his plants. He took his cow Betsy on a walk. Manny went home without Betsy. Manny went to bed that night, and realized he left Betsy."
myResult = mannyHadALittleLambOopsCow.indexOf("cow")
console.log(myResult);


// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien Ty in the String Universe.
let ty = "I am the Alpha Ty. I am the Omega Ty. We do not come in peace."
myResult = ty.lastIndexOf("Ty")
console.log(myResult);


// Can we use length for strings? I don't know, you tell me.
let noWeCantTeo = "but did you try it out though?"
myResult = noWeCantTeo.length
console.log(myResult);

// If only it was this easy to replace() my ex. LOL. JK
let replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!"
myResult = replaceGokuWithVegeta.replace("Goku", "Vegeta")
// console.log(replaceGokuWithVegeta);
console.log(myResult);

// Randi has been forgetful lately. Let's help Randi by using search(), and find their iPhone. 
let randiIsLookingForiPhone = "iphone 1, iPhone 2, IPHONE 3, ifone 4"
myResult = randiIsLookingForiPhone.search("iPhone")
console.log(myResult);

// I guess we can share this pizza sentence. Use slice() to return "other half of pizza".
let pizzaSentence = "pizza, other half of pizza"
// myResult = pizzaSentence.slice(7)
let indexOfOther = pizzaSentence.indexOf("other")
myResult = pizzaSentence.slice(indexOfOther)
console.log(myResult);

// Now using the pizza sentence, return only pizza (before the comma)
let indexOfComma = pizzaSentence.indexOf(",")
myResult = pizzaSentence.slice(0,indexOfComma)
console.log(myResult);

// Okay, but who decided to go to this expensive restaurant? Brittany, Andrew, and Rockelle decided to split() the bill. Return an array separating Brittany, Andrew, and Rockelle.
let splitTheBill = "Brittany Andrew Rockelle"
myResult = splitTheBill.split(" ")
console.log(myResult);


// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Brittany, Andrew, and Rockelle into pieces. Using splitTheBill, return an array separating all three by single characters. "B, r, i, ..."
myResult = splitTheBill.split('')
console.log(myResult);


// Use this toLowerCase()
let angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS."
// Michael was angry today. Create a string with words that Michael would yell out. Now lowercase it, to tell Micahel to chill out. 
myResult = angry.toLowerCase()
console.log(myResult);


// toUpperCase()
let coreySaidToPutSomeRespectToHisName = "corey feder"
myResult = coreySaidToPutSomeRespectToHisName.toUpperCase()
console.log(myResult);


// substring()
// on the chopping block...

// Returns "ell"
let basicGreeting = "Hello World"
myResult = basicGreeting.substring(1,4)
console.log(myResult);


// Returns "JavaScript"
let ohReally = "JavaScript Substring"
let indexOfSpace = ohReally.indexOf(" ")
myResult = ohReally.substring(0,indexOfSpace)
console.log(myResult);

// Returns aol.com
let aslDays = "xXteoWuzHereXx@aol.com"
let indexOfAt = aslDays.indexOf("@")
myResult = aslDays.substring(indexOfAt+1)
console.log(myResult);

// trim()
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.
let loveHandles = "   Hello World        "
myResult = loveHandles.trim()
console.log(myResult);


// =================================================
//                     BOOLEAN
// =================================================

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Suresh"

console.log(a < b)
console.log(c > b)
console.log(d === d)
console.log(d != a)
console.log(a < 15)
console.log(a < b < c)
console.log(c > b && a != d)