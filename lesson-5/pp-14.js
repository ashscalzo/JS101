// Given the following data structure write some code
// to return an array containing the colors of the
// fruits and the sizes of the vegetables. The sizes should
// be uppercase, and the colors should be capitalized.

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let fruitsAndVeggies = [];

let produceTraits = Object.values(obj);

produceTraits.forEach(trait => {
  if (trait['type'] === 'fruit') {
    let fruitColors = trait['colors']
      .map(color => color[0].toUpperCase() + color.slice(1));
    fruitsAndVeggies.push(fruitColors);
  } else {
    fruitsAndVeggies.push(trait.size.toUpperCase());
  }
});

console.log(fruitsAndVeggies);