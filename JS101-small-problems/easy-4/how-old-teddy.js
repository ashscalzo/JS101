// Build a program that randomly generates Teddy's age,
// and logs it to the console. Have the age be a random
// number between 20 and 120 (inclusive).

function howOldIsTeddy () {
  let age = Math.floor(Math.random() * ((121 - 20) + 20));
  console.log(`Teddy is ${age} years old!`);
}

howOldIsTeddy();
howOldIsTeddy();
howOldIsTeddy();

/*

Launch solution:

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let age = randomBetween(20, 120);
console.log(`Teddy is ${age} years old!`);

Further Exploration
The randomBetween function used the Math.floor() method. Would it make
a difference if the Math.round() method was used instead?

Math.round() will round the number to the nearest integer (up or down),
where as Math.floor() specifically only roundsdown to the nearest integer.
This would affect the results because with the given range, it would allow
for the program to round to a number higher than our given range (in this
case, it could allow Teddy's age to round to 121 instead of 120). if we wanted
to use Math.round() we'd have to adjust our math accordingly (which would
likely mean just removing the "+1" from the math.random equation, or in the
first example, changing 121 to 120, as Math.round() would include the max
number.

*/
