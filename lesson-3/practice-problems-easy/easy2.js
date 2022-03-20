// 1. Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

let advice = "Few things in life are as important as house training your pet dinosaur.";

let otherAdvice = advice.replaceAll('important', 'urgent'); // .replace() to replace 1st occurrence; .replaceAll() to replace all occurrences
console.log(otherAdvice);


// 2. The Array.prototype.reverse method reverses the order of elements in an array, 
// and Array.prototype.sort can rearrange the elements in a variety of ways, including descending. 
// Both of these methods mutate the original array as shown below. 
// Write two distinct ways of reversing the array without mutating the original array. 
// Use reverse for the first solution, and sort for the second.
// Bonus Question: Can you do it using the Array.prototype.forEach() method?

/*
let numbers = [1, 2, 3, 4, 5];

let numbers2 = numbers.slice().reverse();   // solution 1
let numbers3 = [...numbers].sort((num1, num2) => num2 - num1);    // solution 2
let numbersBonus = [];
numbers.forEach(num => {          // bonus solution
  numbersBonus.unshift(num);
});
console.log(numbers);
console.log(numbers2);          // tests
console.log(numbers3);
console.log(numbersBonus);
*/

// 3. Given a number and an array, determine whether the number is included in the array.

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
let number1 = 8;
let number2 = 95;

console.log(numbers.includes(number1));
console.log(numbers.includes(number2));


// 4. Starting with the string below, show two different ways to put the expected "Four score and" in front of it.

let famousWords = 'seven years ago...';
let solution1 = 'Four score and ' + famousWords;
let solution2 = 'Four score and '.concat(famousWords);
let solution3 = famousWords.split(' ');
solution3.unshift('Four score and');
solution3 = solution3.join(' ');

console.log(solution1);
console.log(solution2);
console.log(solution3);


// 5. Given an array of numbers [1, 2, 3, 4, 5], 
// mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5].

let myArr = [1, 2, 3, 4, 5];
myArr.splice(2, 1);   //splice param should be index you want to start removing at, then how many to remove; MUTATES CALLER
console.log(myArr);
//slice() params are index you want to start rmving at, then index you want to stop rmving at, non-inclusive; DOES NOT MUTATE


// 6. Create a new array that contains all of the above values, but in an un-nested format:

let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
flintstones = [].concat(...flintstones);
console.log(flintstones);


// 7. consider the following object:

let flintstones2 = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// Create an array from this object that contains only two elements: Barney's name and Barney's number:

let barney = Object.entries(flintstones2)[2];
console.log(barney);


// 8. How would you check whether the objects assigned to variables numbers and table below are arrays?

let numArr = [1, 2, 3, 4];
let table = { field1: 1, field2: 2, field3: 3, field4: 4};

console.log(Array.isArray(numArr));
console.log(Array.isArray(table));


// 9. Back in the stone age (before CSS), we used spaces to align things on the screen.
// If we have a 40-character wide table of Flintstone family members, 
// how can we center the following title above the table with spaces?

let title = 'Flintstone Family Members';
let padding = Math.floor((40 - title.length) / 2);

console.log(title.padStart(padding + title.length));


// 10. Write two one-line expressions to count the number of lower-case t characters in each of the following strings:

let statement1 = 'The Flintstones Rock!';
let statement2 = "Easy come, easy go.";


console.log((statement1.match(/t/g) || []).length);
console.log(statement2.split('').filter(char => char === 't').length);