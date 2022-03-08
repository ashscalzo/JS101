const readline = require('readline-sync');

function say(message) {
  console.log(`=> ${message}`);
}

function getLoanAmt() {
  say('Please enter the original total amount of your loan. (Do not include commas)');
  return Number(readline.question());
}

function getDuration() {
  say('Please enter the original term of your loan in years, as a whole number:');
  return Number(readline.question());
}

function getAPR() {
  say('What is the annual interest rate (APR) on your loan?');
  return Number(readline.question());
}

function confirmLoanDets(amt, dur, apr) {
  say('Great! So, just to confirm:');
  if (apr) {
    say(`Your original loan was for $${amt}, to be paid over ${dur} years at a ${apr}% annual rate?`);
    say('Enter yes to confirm. Enter no to re-enter your information.');
  } else {
    say(`Your original loan was for $${amt}, to be paid over ${dur} years with no interest?`);
    say('Enter yes to confirm. Enter no to re-enter your information.');
  }
  return readline.question().toLowerCase();
}

function calcMonthlyPmt(amt, months, rate) {
  if (rate) {
    return (amt *
      (rate / (1 - ((1 + rate) ** (-months)))));
  } else {
    return amt / months;
  }
}

function invalidNum(value) {
  return String(value).trimStart() === '' ||
      Number.isNaN(value) ||
      value <= 0;
}

function invalidAnswer(answer) {
  return answer.toLowerCase() !== 'yes' &&
      answer.toLowerCase() !== 'y' &&
      answer.toLowerCase() !== 'no' &&
      answer.toLowerCase() !== 'n';
}

function resetCalc() {
  say('Would you like to take a look at another loan?');
  return readline.question().toLowerCase();
}

let calcAgain;

say('==============================================');
say('Hello! Welcome to LoanCalc!');

while (true) {

  let loanAmt;
  let duration;
  let apr;
  let confirm;

  do {
    loanAmt = getLoanAmt();
    while (invalidNum(loanAmt)) {
      loanAmt = getLoanAmt();
    }

    duration = getDuration();
    while (invalidNum(duration) || !Number.isInteger(duration)) {
      duration = getDuration();
    }

    say('Is your loan an interest-bearing loan? (Enter yes or no.)');
    apr = readline.question().toLowerCase();

    while (invalidAnswer(apr)) {
      say('Invalid response. Please enter yes or no.');
      apr = readline.question().toLowerCase();
    }

    if (apr === 'yes') {
      apr = getAPR();
      while (invalidNum(apr)) {
        apr = getAPR();
      }
    } else if (apr === 'no') {
      apr = null;
    }

    confirm = confirmLoanDets(loanAmt, duration, apr);
    while (invalidAnswer(confirm)) {
      say('Invalid response. Please enter yes to continue, or no to re-enter your information.');
      confirm = readline.question().toLowerCase();
    }

  } while (confirm === 'no' || confirm === 'n');

  let monthlyIntRate = (apr / 100) / 12;
  let durationInMonths = duration * 12;
  let monthlyPmt = calcMonthlyPmt(loanAmt, durationInMonths, monthlyIntRate);
  let totalInt = (monthlyPmt * durationInMonths) - loanAmt;

  say('==============================================');

  if (apr) {
    say(`Your installments for this loan will be $${monthlyPmt.toFixed(2)} per month.`);
    say(`The total amount of interest paid on this loan will be $${totalInt.toFixed(2)}.`);
  } else {
    say(`Your installments for this loan will be $${monthlyPmt.toFixed(2)} per month.`);
  }

  say('==============================================');

  calcAgain = resetCalc();
  if (calcAgain === 'yes' || calcAgain === 'y') {
    console.clear();
  }

  if (calcAgain === 'n' || calcAgain === 'no') {
    break;
  }
}


say('Thank you for using LoanCalc!');
