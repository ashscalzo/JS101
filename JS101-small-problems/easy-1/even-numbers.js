// Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

for (let n = 1; n <= 99; n += 1) {
  if (n % 2 === 1) {
    continue;
  }
  console.log(n);
}