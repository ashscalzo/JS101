// Write a function that takes a string argument consisting of a first name,
// a space, and a last name, and returns a new string consisting of the last
// name, a comma, a space, and the first name.

function swapName (name) {
  return name.split(' ').reverse().join(', ');
}

//test cases

console.log(swapName('Joe Roberts'));       // "Roberts, Joe"
console.log(swapName('Ash Scalzo'));        // "Scalzo, Ash"
console.log(swapName('Sam Winchester'));    // "Winchester, Sam"
console.log(swapName('Zachary Scalzo'));    // "Scalzo, Zachary"


// Further exploration
// What if the person has one or more middle names? Refactor the current
// solution so that it can accommodate this; the middle names should be
// listed after the first name:

function lastNameFirst (name) {
  if (name.split(' ').length === 2) {
    return name.split(' ').reverse().join(', ');
  } else {
    let nameArr = name.split(' ');
    let lastName = nameArr.pop();
    return `${lastName}, ${nameArr.join(' ')}`;
  }
}

console.log(lastNameFirst('Karl Oskar Henriksson Ragvals'));
console.log(lastNameFirst('Sarah Jane Smith'));
console.log(lastNameFirst('Esteban Julio Ricardo Montoya de la Rosa Ramírez'));