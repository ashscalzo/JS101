// 1. Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4]; //what will this return?

//it will not raise an error. numbers[3 thru 5] will be empty.
//numbers[4] has no assigned value, not even undefined, but it still returns undefined.


// 2. How can you determine whether a given string ends with an exclamation mark (!)?

let str1 = 'Come over here!';
let str2 = "What's up, doc?";

str1.endsWith("!"); // true
str2.endsWith("!"); // false


// 3. Determine whether the following object of people and their age contains an entry for 'Spot':

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 402,
  Eddie: 10
};

ages.hasOwnProperty("Spot");


// 4. Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized.

let munstersDescription = "the Munsters are CREEPY and Spooky.";

function capFirstLetter(str) {
  let newStr = str[0].toUpperCase() + str.slice(1).toLowerCase();
  return newStr;
}

console.log(capFirstLetter(munstersDescription));


// 5. What will the following code output?

console.log(false == '0');    // true; non-strict equality operator used. checks for equal value
console.log(false === '0');   //false; strict equality operator used. checks for equal value and data type.


// 6. We have most of the Munster family in our ages object. Add entries for Marilyn and Spot to the object.

let additionalAges = {
  Marilyn: 22,
  Spot: 237
};

Object.assign(ages, additionalAges);
console.log(ages);


// 7. Determine whether the name Dino appears in the strings below -- check each string separately):

let str3 = "Few things in life are as important as house training your pet dinosaur.";
let str4 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str3.includes("Dino"));
console.log(str4.includes("Dino"));


// 8. How can we add the family pet, "Dino", to the following array?

let flintstones = ['Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles'];

// flintstones.push('Dino');


// 9. How can we add multiple items to our array? ('Dino' and 'Hoppy')

flintstones.push('Dino', 'Hoppy');


// 10. Return a new version of this sentence that ends just before the word house. 
// Don't worry about spaces or punctuation: 
// Remove everything starting from the beginning of house to the end of the sentence.

let advice = "Few things in life are as important as house training your pet dinosaur.";

let newStr = advice.slice(0, advice.indexOf('house'));
console.log(newStr);