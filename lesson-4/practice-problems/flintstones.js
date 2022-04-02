// Take a look at the following array.

let flintstones = ['Fred', 'Barney', 'Wilma', 'Betty', 'Pebbles', 'Bambam'];

// Write a program that uses this array to create an object where the names are the keys and the values are the positions in the array:
// {Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5}

let flintEntries = Object.entries(flintstones);
let flintObj = {};

flintEntries.forEach(keyValue => {
  let [key, value] = keyValue;
  flintObj[value] = Number(key);
});

console.log(flintObj);

// can also do it this way:
/* 

flintstones.forEach((name, index) => {
  flintObj[name] = index;
});

*/