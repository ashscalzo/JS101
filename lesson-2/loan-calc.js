const readline = require('readline-sync');

function say(message) {
  console.log(`=> ${message}`);
}

function dollarsAndCents(amount) {
  return amount.toFixed(2);
}

let loanAmt;
let duration;
let apr;
let confirm;

say('Hello! Welcome to LoanCalc!');

do {
  say('Please enter the original total amount of your loan:');
  loanAmt = Number(readline.question());

  say('Please enter the number of years your loan was originally to be paid out over:');
  duration = Number(readline.question());

  say('Is your loan an interest-bearing loan? (Enter y if yes.)');
  apr = readline.question().toLowerCase();
  if (apr === 'y') {
    say('What is the annual interest rate (APR) on your loan?');
    apr = Number(readline.question());
  } else {
    apr = null;
  }

  say('Great! So, just to confirm:');
  if (apr) {
    say(`Your original loan was for $${loanAmt}, to be paid over ${duration} years at a ${apr}% annual rate?`);
    say('Enter Y to confirm. Enter any other character to re-enter your information.');
  } else {
    say(`Your original loan was for $${loanAmt}, to be paid over ${duration} years with no interest?`);
    say('Enter Y to confirm. Enter any other character to re-enter your information.');
  }
  confirm = readline.question().toLowerCase();
} while (confirm !== 'y');

let monthlyIntRate = (apr / 100) / 12;
let durationInMonths = duration * 12;
let monthlyPmt;

if (apr) {
  monthlyPmt = loanAmt *
    (monthlyIntRate / (1 - ((1 + monthlyIntRate) ** (-durationInMonths))));
  let totalInt = (monthlyPmt * durationInMonths) - loanAmt;
  say(`Your installments for this loan will be $${dollarsAndCents(monthlyPmt)} per month.`);
  say(`The total amount of interest paid on this loan will be $${dollarsAndCents(totalInt)}.`);
} else {
  monthlyPmt = loanAmt / durationInMonths;
  say(`Your installments for this loan will be $${dollarsAndCents(monthlyPmt)} per month.`);
}

/*
[years, months]
duration[0] * 12 + duration[1];
*/