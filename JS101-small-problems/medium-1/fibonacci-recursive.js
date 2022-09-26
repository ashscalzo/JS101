// The Fibonacci series is a sequence of numbers in which
// each number is the sum of the previous two numbers. The
// first two Fibonacci numbers are 1 and 1. The third number is
// 1 + 1 = 2, the fourth is 1 + 2 = 3, the fifth is 2 + 3 = 5, and
// so on. This simple sequence can be computed using a recursive function.
// A recursive function is one in which the function calls itself. A good
// recursive function has three primary qualities:

//       It calls itself at least once.
//       It has an ending condition — e.g., if (num === 1), in
//         the sum function above.
//       The results of each recursion are used in each step —
//         e.g., num + sum(num - 1) uses sum(num - 1).

// Write a recursive function that computes the nth Fibonacci number,
// where nth is an argument passed to the function.


function fibonacci(num) {
  if (num === 1 || num === 2) {
    return 1;
  } else if (num > 2) {
    return fibonacci(num - 1) + fibonacci(num - 2);
  } else {
    return null;
  }
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(12));
console.log(fibonacci(20));
