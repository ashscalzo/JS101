// Write a program that prompts the user for two positive integers, and then prints 
// the results of the following operations on those two numbers: 
// addition, subtraction, product, quotient, remainder, and power. 
// Do not worry about validating the input.

const readline = require('readline-sync');

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => Math.floor(a / b);

const remainder = (a, b) => a % b;

const power = (a, b) => a ** b;

function prompt(message) {
  console.log(`==> ${message}`);
}

prompt('Enter the first number:');
let num1 = Number(readline.question());

prompt('Enter the second number:');
let num2 = Number(readline.question());

prompt(`${num1} + ${num2} = ${add(num1, num2)}`);
prompt(`${num1} - ${num2} = ${subtract(num1, num2)}`);
prompt(`${num1} * ${num2} = ${multiply(num1, num2)}`);
prompt(`${num1} / ${num2} = ${divide(num1, num2)}`);
prompt(`${num1} % ${num2} = ${remainder(num1, num2)}`);
prompt(`${num1} ** ${num2} = ${power(num1, num2)}`);