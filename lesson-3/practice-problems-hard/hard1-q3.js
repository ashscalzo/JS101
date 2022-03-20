// Given the following similar sets of code, what will each code snippet print?

// A.

function messWithVars1(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one1 = ["one"];
let two1 = ["two"];
let three1 = ["three"];

messWithVars1(one1, two1, three1);

console.log(`one is: ${one1}`);
console.log(`two is: ${two1}`);
console.log(`three is: ${three1}`);

/* OUTPUT:
one is: one
two is: two
three is: three
*/

// B. 
function messWithVars2(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one2 = ["one"];
let two2 = ["two"];
let three2 = ["three"];

messWithVars2(one2, two2, three2);

console.log(`one is: ${one2}`);
console.log(`two is: ${two2}`);
console.log(`three is: ${three2}`);

/* OUTPUT: **REASSIGNMENT IS NOT A MUTATING OPERATION**
one is: one
two is: two
three is: three
*/

// C. 
function messWithVars3(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one3 = ["one"];
let two3 = ["two"];
let three3 = ["three"];

messWithVars3(one3, two3, three3);

console.log(`one is: ${one3}`);
console.log(`two is: ${two3}`);
console.log(`three is: ${three3}`);

/* OUTPUT: .splice() MUTATES THE CALLER
one is: two
two is: three
three is: one
*/