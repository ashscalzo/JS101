// Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

// for (let n = 1; n <= 99; n += 2) {
//   console.log(n);
// }


// Further Exploration
// Repeat this exercise with a technique different from the one that you used, 
// and different from the one provided. 
// Also consider adding a way for the user to specify the limits of the odd numbers logged to the console.

function displayOdds(num1, num2) {
  if (num1 % 2) {
    let n = num1;
    while (n <= num2) {
      console.log(n);
      n += 2;
    }
  } else {
    let n = num1 + 1;
    while (n <= num2) {
      console.log(n);
      n += 2;
    }
  }
}

displayOdds(8, 18);