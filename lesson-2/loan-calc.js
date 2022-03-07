const readline = require('readline-sync');

function say(message) {
  console.log(`=> ${message}`);
}

function dollarsAndCents(amount) {
  return amount.toFixed(2);
}

function invalidValue(value) {
  return String(value).trimStart() === '' ||
      Number.isNaN(value) ||
      value <= 0;
}

let calcAgain;

say('==============================================');
say('Hello! Welcome to LoanCalc!');

do {

  let loanAmt;
  let duration;
  let apr;
  let confirm;

  do {
    say('Please enter the original total amount of your loan:');
    loanAmt = Number(readline.question());

    while (invalidValue(loanAmt)) {
      say('Invalid value. Please enter the original total amount of your loan:');
      loanAmt = Number(readline.question());
    }

    say('Please enter the original term of your loan in years:');
    duration = Number(readline.question());

    while (invalidValue(duration)) {
      say('Invalid value. Please enter the original term of your loan in years:');
      duration = Number(readline.question());
    }

    say('Is your loan an interest-bearing loan? (Enter y if yes, or any other character if no.)');
    apr = readline.question().toLowerCase();

    if (apr === 'y') {
      say('What is the annual interest rate (APR) on your loan?');
      apr = Number(readline.question());

      while (invalidValue(apr)) {
        say('What is the annual interest rate (APR) on your loan?');
        apr = Number(readline.question());
      }
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

  say('==============================================');

  if (apr) {        // calculates monthly payment for interest-bearing loan
    monthlyPmt = loanAmt *
      (monthlyIntRate / (1 - ((1 + monthlyIntRate) ** (-durationInMonths))));
    let totalInt = (monthlyPmt * durationInMonths) - loanAmt;
    say(`Your installments for this loan will be $${dollarsAndCents(monthlyPmt)} per month.`);
    say(`The total amount of interest paid on this loan will be $${dollarsAndCents(totalInt)}.`);
  } else {        // calculates monthly payment for no-interest loan
    monthlyPmt = loanAmt / durationInMonths;
    say(`Your installments for this loan will be $${dollarsAndCents(monthlyPmt)} per month.`);
  }

  say('==============================================');
  say('Would you like to take a look at another loan?');
  say("Enter Y to calculate another loan's payments. Enter any other character to exit.");
  calcAgain = readline.question().toLowerCase();
} while (calcAgain === 'y');

say('Thank you for using LoanCalc!');