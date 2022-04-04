// // Write a program that will ask for user's name. 
// // The program will then greet the user. 
// // If the user writes "name!" then the computer yells back to the user.


// Problem:
//   write a function
//   takes one argument, name
//   if the last character of name is !, computer yells at user
//   if not, user is greeted normally

// Examples and test cases:
// What is your name? Bob
// Hello Bob.

// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?

// Data types and structures
//   function for greeting
//   function for getting Input
//   function for invalid Input
//   access readline
//   interpolation/template literals
//   console.log();
//   while loops

// algorithm
//   access readline
//   fx definition - getting input
//     ask user for name
//     while loop 
//       if user inputs spaces, ask them to reenter name
    
//   fx definition - invalid input 
//     while loop  --> when str is empty

//   fx def - greet
//     if the last character is !, return greeting in caps and yell at user
//     if not, return normal calm greeting

// code

const readline = require('readline-sync');

function isInvalid(input) {
  return input.trim() === '';
}

function getName() {
  return readline.question('What is your name? ');
}

function greetUser(name) {
  if (name[name.length - 1] === '!') {
    return `HELLO ${name.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?!`;
  } else {
    return `Hello, ${name}.`;
  }
}

let userName = getName();

while (isInvalid(userName)) {
  userName = getName();
}

console.log(greetUser(userName));