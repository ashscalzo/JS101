// Alyssa was asked to write an implementation of a rolling buffer. 
// You can add and remove elements from a rolling buffer. 
// However, once the buffer becomes full, any new elements will displace the oldest elements in the buffer.

// She wrote two implementations of the code for adding elements to the buffer. 
// In presenting the code to her team leader, she said "Take your pick. 
// Do you prefer push() or concat() for modifying the buffer?".

// Is there a difference between these implementations, 
// other than the method she used to add an element to the buffer?

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

//the difference between these two is that .push() mutates the original array, while .concat() merges two or more arrays to return a new array
// with concat, the original array is not mutated, so the original argument passed through as buffer will not be changed
// with push, the argument WILL be mutated
