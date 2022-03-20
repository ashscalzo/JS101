// 1. Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];
 /*
for (let i = 0; i < numbers.length; ) {
  numbers.shift();
}

while (numbers.length) {
  numbers.pop();
}

numbers.length = 0;

numbers.splice(0, numbers.length);
*/


// 2. What will the following code output?

console.log([1, 2, 3] + [4, 5]);

//1,2,34,5
//REMEMBER that + operator will coerce arrays to strings and then concatenate them


// 3. What will the following code output?

let str1 = 'hello there';
let str2 = str1;
str2 = 'goodbye!';
console.log(str1);    // will output hello there

//when declaring str2, a copy of the value of str1 is assigned to it
//when reassigning str2, the value of str1 is not changed bc primitive values are immutable
//instead, str2 is just assigned to a new value altogether


// 4. what will the following code output?

let arr1 = [{first: 'Value1'}, {second: 'value2'}, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42
console.log(arr1);

// [{first: 42}, {second: 'value2'}, 3, 4, 5]
//slice() makes a shallow copy of an array or obj, which is only the outermost values of the array
//the first 2 elements are POINTERS. 
//the value of the objects are not stored in the array, but rather appear somewhere else in the computer's memory
// arr1[0] and arr2[0] will point to the same object, so if it's mutated in arr2, it'll also show the mutated value in arr1


// 5. The following function unnecessarily uses two return statements to return boolean values. 
// Can you rewrite this function so it only has one return statement and does not explicitly use either true or false?
// Try to come up with at least two different solutions.

function isColorValid(color) {
  if (color === 'blue' || color === 'green') {
    return true;
  } else {
    return false;
  }
}

function solution1(color) {
  return color === 'blue' || color === 'green';
}

const altSolution1 = color => { return color === 'blue' || color === 'green' }

const solution2 = color => ['blue', 'green'].includes(color);

