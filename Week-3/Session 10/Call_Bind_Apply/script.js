class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
}

class ScientificCalculator extends Calculator {
  square(a) {
    return a * a;
  }
  cube(a) {
    return a * a * a;
  }
  power(a, b) {
    return Math.pow(a, b);
  }
}

const myCalculator = new ScientificCalculator();

// Using the "call" method to invoke the "add" method of the Calculator class
console.log("Using call:", scicalc.add.call(new Calculator(), 10, 5));

// Using the "apply" method to invoke the "subtract" method of the Calculator class
console.log("Using apply:", scicalc.subtract.apply(new Calculator(), [10, 5]));

// Using the "bind" method to create a new method named "multiplyByTwo"
// and binding it to the instance of the ScientificCalculator class
const multiplyByTwo = scicalc.multiply.bind(scicalc, 2);
console.log("Using bind:", multiplyByTwo(5));

// Using the "bind" method to create a new method named "powerOfThree"
// and binding it to the instance of the ScientificCalculator class
const powerOfThree = scicalc.power.bind(scicalc, 3);
console.log("Using bind:", powerOfThree(2));
