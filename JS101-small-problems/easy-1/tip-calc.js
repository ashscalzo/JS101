// Create a simple tip calculator. 
// The program should prompt for a bill amount and a tip rate. 
// The program must compute the tip, and then log both the tip 
// and the total amount of the bill to the console. 
// You can ignore input validation and assume that the user will enter numbers.

const readline = require('readline-sync');

function prompt(str) {
  console.log(`=> ${str}`);
}

function getBillTotal() {
  prompt('What was the bill?'); 
  return Number(readline.question());
}

function getTipPercentage() {
  prompt('What is the tip percentage?');
  return Number(readline.question());
}

prompt('Welcome to TipCalc!')
let bill = getBillTotal();
let tipPercent = getTipPercentage() / 100;

let tipAmt = bill * tipPercent;
let totalBill = bill + tipAmt;

prompt(`The tip is $${tipAmt.toFixed(2)}.`);
prompt(`The total is $${totalBill.toFixed(2)}.`);

prompt('Thanks for using TipCalc!')


