// Write a function that counts the number of occurrences of each element
// in a given array. Once counted, log each element alongside the number of
// occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences (array) {
  let resultObj = {};
  array.forEach(element => {
    if (!resultObj[element]) {
      resultObj[element] = 1;
    } else {
      resultObj[element] += 1
    }
  });

  displayObjPairs(resultObj);
}

function displayObjPairs(obj) {
  let objArray = Object.entries(obj);
  objArray.forEach(pair => {
    let [key, value] = pair;
    console.log(`${key} => ${value}`);
  })
}


countOccurrences(vehicles);

/* console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2
*/