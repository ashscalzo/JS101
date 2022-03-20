// What is the output of the following code?

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);     // 50
console.log(answer - 8);    // 34

// the function adds and reassigns the parameter and returns a new value. 
// the value of answer will not be changed; primitive values are immutable and 
// a copy of the value stored in answer is passed into the function as a variable