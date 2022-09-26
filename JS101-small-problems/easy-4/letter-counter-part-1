// Write a function that takes a string consisting of
// zero or more space separated words and returns an object
// that shows the number of words of different sizes.

// Words consist of any sequence of non-space characters.

/*
Initialize an empty object.
split the string with a space (" ") to divide string into
an array of individual words. initialize a variable called wordlength.
interate over the wordArray. Check if the object has a key equal
to the length of the word. if so increment the value by 1. return
as an object.
*/


function wordSizes(string) {
  let strLengths = {};
  if (string.trim().length === 0) return strLengths;
  let wordArray = string.split(' ');

  wordArray.forEach(word => {
    let wordLength = word.length;
    if (wordLength in strLengths) {
      strLengths[wordLength] += 1;
    } else {
      strLengths[wordLength] = 1;
    }
  });
  return strLengths;
}


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
