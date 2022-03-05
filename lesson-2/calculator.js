// Make a calculator on the command line
// Ask the user for a number
// Ask the user for a second number
// Ask the user for operation to perform
// Print result to terminal

const readline = require('readline-sync');
let newCalc = '';
let msg = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

//language selection
prompt(msg.langSelect);
let language = readline.question();
switch (language) {
  case '1':
    language = 'en';
    break;
  case '2':
    language = 'sp';
    break;
  default:
    prompt("Not a valid language option. Default to English.");
    language = 'en';
    break;
}

prompt(msg[language].welcome);   //Welcome to Calculator!

do {
  prompt(msg[language].firstNum); // first number
  let num1 = readline.question();

  while (invalidNumber(num1)) {
    prompt(msg[language].invalidNum);    //invalid number
    num1 = readline.question();
  }

  prompt(msg[language].secondNum);    // second number
  let num2 = readline.question();

  while (invalidNumber(num2)) {
    prompt(msg[language].invalidNum);   // invalid number
    num2 = readline.question();
  }

  prompt(msg[language].operation);    // operation
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(msg[language].invalidOp);    //invalid operator
    operation = readline.question();
  }

  let output;

  switch (operation) {
    case '1': // '1' is addition
      output = Number(num1) + Number(num2);
      break;
    case '2':  // '2' is subtraction
      output = Number(num1) - Number(num2);
      break;
    case '3':  // '3' is multiplication
      output = Number(num1) * Number(num2);
      break;
    case '4':  // '4' is division
      output = Number(num1) / Number(num2);
      break;
  }

  console.log(msg[language].result + output);

  prompt(msg[language].continue);
  newCalc = readline.question().toLowerCase();
} while (newCalc === msg[language].yes);

prompt(msg[language].thanks);