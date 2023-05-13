// Define the counter function that returns a closure function
function counter() {
  // Initialize a count variable that is only accessible within the closure
  let count = 0;

  // Define the closure function that increments the count variable and returns its value
  function incrementCount() {
    count++;
    return count;
  }

  // Return the closure function
  return incrementCount;
}

// Create two instances of the counter function
const firstCounter = counter();
const secondCounter = counter();

// Call the firstCounter function five times and store the returned values in an array named firstValues
const firstValues = [];
for (let i = 0; i < 5; i++) {
  firstValues.push(firstCounter());
}

// Call the secondCounter function three times and store the returned values in an array named secondValues
const secondValues = [];
for (let i = 0; i < 3; i++) {
  secondValues.push(secondCounter());
}

// Print the arrays
console.log(`firstValues array: [${firstValues}]`);
console.log(`secondValues array: [${secondValues}]`);
