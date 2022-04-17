// Write a function that rotates an array by moving the first
// element to the end of the array. Do not modify the original array.

// If the input is not an array, return undefined.
// If the input is an empty array, return an empty array.

function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  } else if (arr.length === 0) {
    return [];
  } else {
    let arrCopy = JSON.parse(JSON.stringify(arr));
    let element = arrCopy.shift();
    arrCopy.push(element);
    return arrCopy;
  }
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));         // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));            // ["b", "c", "a"]
console.log(rotateArray(['a']));                      // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));           // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));      // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                         // []

console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]