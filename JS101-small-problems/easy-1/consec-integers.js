// Write a program that asks the user to enter an integer greater than 0, then asks whether the user
// wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

const readline = require('readline-sync');

function findSum(num) {
  let sum = 0;
  for (let startingNum = 1; startingNum <= num; startingNum += 1) {
    sum += startingNum;
  } 
  return sum;
}

function findProduct(num) {
  let product = 1;
  for (let startingNum = 1; startingNum <= input; startingNum += 1) {
    product *= startingNum;
  }
  return product;
}

console.log('Please enter an integer greater than 0:');
let input = Number(readline.question());

while (!Number.isInteger(input)) {
  console.log('Please enter a valid number');
  input = Number(readline.question());
}

console.log('Enter "s" to compute the sum, or "p" to compute the product:');
let operation = readline.question().toLowerCase();

while (operation !== 's' && operation !== 'p'){
  console.log('Invalid input. Please enter "s" or "p":')
  operation = readline.question().toLowerCase();
}

if (operation === 's') {
  let finalSum = findSum(input);
  console.log(`The sum of the integers between 1 and ${input} is ${finalSum}.`);
} else if (operation === 'p') {
  let finalProduct = findProduct(input);
  console.log(`The product of the integers between 1 and ${input} is ${finalProduct}.`);
}