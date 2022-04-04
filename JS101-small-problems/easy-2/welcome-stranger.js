// Create a function that takes 2 arguments, an array and an object. The array will 
// contain 2 or more elements that, when combined with adjoining spaces, will produce 
// a person's name. The object will contain two keys, "title" and "occupation", and 
// the appropriate values. Your function should return a greeting that uses the 
// person's full name, and mentions the person's title.

function greetings (arr, obj) {
  let [first, middle, last] = arr;
  let [title, job] = Object.values(obj);
  return `Hello, ${first} ${middle} ${last}! Nice to have a ${
    title} ${job} around.`;
}

console.log(
  greetings(['John', 'Q', 'Doe'],  {title: 'Master', occupation: 'Plumber'})
);

//Launch simplified this more

function greetingLaunch(name, status) {
  return `Hello ${name.join(' ')}! Nice to have a ${status.title} ${
    status.occupation
  } around.`;
}
