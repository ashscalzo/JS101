// One of the most frequently used real-world string
// operations is that of "string substitution,"
// where we take a hard-coded string and modify it
// with various parameters from our program.

// Given this previously seen family object, print the name,
// age, and gender of each family member:

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

let familyMembers = Object.keys(munsters);

familyMembers.forEach(person => {
  let name = person[0].toUpperCase() + person.slice(1);
  let age = munsters[person]['age'];
  let gender = munsters[person]['gender'];
  console.log(`${name} is a ${age}-year-old ${gender}.`);
});