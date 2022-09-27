// Write a program that solicits six numbers from the
// user and logs a message that describes whether the sixth
// number appears among the first five numbers.

/* case example

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.

*/


const readline = require('readline-sync');
let userNumbers = [];
let lastNum;

function getInput () {
  for (let idx = 1; idx <= 6; idx += 1) {
    if (idx === 1) {
      console.log('Enter the 1st number:');
      userNumbers.push(readline.question());
    } else if (idx === 2) {
      console.log('Enter the 2nd number:');
      userNumbers.push(readline.question());
    } else if (idx === 3) {
      console.log('Enter the 3rd number:');
      userNumbers.push(readline.question());
    } else {
      console.log(`Enter the ${idx}th number:`);
      userNumbers.push(readline.question());
    }
  }
}

function search (arr) {
  lastNum = arr.pop();
  if (arr.includes(lastNum)) {
    return true;
  } else {
    return false;
  }
}

function displaySearchResult (arr) {
  if (search(userNumbers)) {
    console.log(`The number ${lastNum} appears in ${arr.join(', ')}.`);
  } else {
    console.log(`The number ${lastNum} does not appear in ${arr.join(', ')}.`);
  }
}

getInput();
displaySearchResult(userNumbers);