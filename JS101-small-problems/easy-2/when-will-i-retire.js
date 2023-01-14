// Build a program that logs when the user will retire and how
// many more years the user has to work until retirement.

/*  PEDAC
Problem
  find out how old user is
  find out how old user will be when they would like to retire
  calculate number of years user has until able to retire

example:
  What is your age? 30
  At what age would you like to retire? 70

  It's 2017. You will retire in 2057.
  You have only 40 years of work to go!

Data structures
  use const readline
  function to obtain user input
    store values in variables
      currentAge
      retirementAge
      yearsLeft
  function to calculate number of years until retirement
  function to display number of years left?
    console.log()
  just lots of functions. all the functions.
  consider edge cases! account for invalid input?

Algorithm
  CONST readline
  LET currentAge
  LET retirementAge
  LET yearsLeft
  GET user input currentAge
  GET user input retirementAge
  calculate years left
    retirementAge - currentAge
    assign to yearsLeft
  LOG number of years left
*/

const readline = require('readline-sync');

let currentAge;
let retirementAge;
let yearsLeft;
let currentYear = new Date().getFullYear();

function getCurrentAge () {
  return Number(readline.question('How old are you? '));
}

function getRetirementAge () {
  return Number(readline.question('At what age would you like to retire? '));
}

function calculateYearsLeft (userAge, userRetirement) {
  return userRetirement - userAge;
}

function invalidInput (value) {
  return String(value).trimStart() === '' ||
      Number.isNaN(value) ||
      value <= 0;
}

function displayYearsLeft (years) {
  console.log(`It's ${currentYear}. You will retire in ${currentYear + years}.`);
  console.log(`You only have ${years} year(s) of work to go!`);
}

currentAge = getCurrentAge();
while (invalidInput(currentAge)) {
  console.log('Invalid input. Please enter a valid number.');
  currentAge = Number(readline.question());
}

retirementAge = getRetirementAge();
while (invalidInput(retirementAge) || retirementAge < currentAge) {
  console.log('Invalid input. Please enter a valid number.');
  retirementAge = Number(readline.question());
}

yearsLeft = calculateYearsLeft(currentAge, retirementAge);

displayYearsLeft(yearsLeft);
