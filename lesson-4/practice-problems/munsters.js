// Add up all of the ages from the Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10, 
  Marilyn: 22,
  Spot: 237
};

let ageTotal = Object.values(ages).reduce((sum, currAge) => sum + currAge, 0);

console.log(ageTotal);

//another method:

let totalAges = 0;
Object.values(ages).forEach(age => totalAges += age);