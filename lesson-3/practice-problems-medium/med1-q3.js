// 3. Alan wrote the following function, which was intended to return all of the factors of number:


/* 
function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}
*/

// Alyssa noticed that this code would fail when the input is 0 or a negative number, and asked Alan to change the loop. 
// How can he make this work without using a do/while loop?
//  Note that we're not looking to find the factors for 0 or negative numbers, but 
// we want to handle it gracefully instead of raising an exception or going into an infinite loop.


function factors(number) {
  let divisor = number;
  let factors = [];
  if (number <= 0) {      //this is optional; the loop below won't iterate if divisor <= 0
    return "Number is not a positive integer";
  }
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}


console.log(factors(-4));
console.log(factors(0));
console.log(factors(20));


/* CAN ALSO DO THE FOLLOWING TO ALLOW US TO FIND FACTORS OF NEGATIVE NUMBERS INSTEAD OF ENTERING INFINTE LOOP

    if (number > 0) {   //first create condition to factor for positive numbers (numbers > 0)
      if (number % divisor === 0) {
        factors.push(number / divisor);
      }
      divisor -= 1;     // for negative numbers will create infinite loop, as we decrement each iteration
    } else {    // //must then create condition for it to factor for negative numbers
      if (number % divisor === 0) {   
        factors.push(number / divisor);
      }
      divisor += 1;   // will increment by 1 for negative numbers to reach 0
    }

*/

//Bonus: What is the purpose of number % divisor === 0 in that code?
//this allows us to check if number is equally divisible by the divisor, which would mean the divisor is a factor of the number

// How does the result differ if you replace line 3 with factors.push(divisor);
// factors will be listed highest to lowest