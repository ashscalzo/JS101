// What do you think the following code will output?

let nanArray = [NaN];

console.log(nanArray[0] === NaN);

//will output false; cannot use equality operators to see if a value is NaN. must use Number object

//How can you reliably test if a value is NaN?
// Number.isNaN(value);