"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */


function sayHello(name) {
    // return "Hello, " + name + "!";
    return `Hello, ${name}!`;
}

// Example of template literal
// const value = 20;
// alert(`Your value is $${value}.`);




/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

const helloMessage = sayHello("Steve");
// console.log(helloMessage);
console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */


const myName = "Steve";
console.log(sayHello(myName));


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
const random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

function isTwo(number) {
    return number === 2;
}


console.log(`The random number ${random} is equal to 2? ${isTwo(random)}`);


/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

// function calculateTip() {
//    
// }

// const calculateTip = function() {
//
// }

const calculateTip = (tipPercentage, billTotal) => {
    return tipPercentage * billTotal;
};

console.log(calculateTip(0.20, 20));
// returns 4
console.log(calculateTip(0.25, 25.50));
// returns 6.375
console.log(calculateTip(0.15, 33.42));
// returns 5.013

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

const userTipPercentage = (parseFloat(prompt("How much would you like to tip as a whole percentage number?")))/100;
const userBillTotal = parseFloat(prompt("How much does your total bill cost?"));
let userTip = calculateTip(userTipPercentage, userBillTotal);


alert(`You should tip $${userTip.toFixed(2)}`)


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */


// const applyDiscount = (originalPrice, discountPercentage) => {
//
//     // return originalPrice * (1 - discountPercentage);
// };
//
// console.log(applyDiscount(45.99, 0.12))


let totalPrice = prompt("What is the total amount of the bill?");
let discountPercent = prompt("What is the amount of the discount?");
const applyDiscount = (totalPrice, discountPercent) => {
    const percentConversion = .01;
    return (totalPrice - (totalPrice * (discountPercent * percentConversion)));
}
let customerTotal = applyDiscount(totalPrice, discountPercent);
alert(`Your total bill with discount is $${customerTotal.toFixed(2)}.`);

