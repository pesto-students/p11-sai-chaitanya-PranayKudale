class Shape {
  calculateArea() {
    // Method to be overridden by subclasses
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  calculateArea() {
    return (this.base * this.height) / 2;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

// Creating instances and testing the functionality

const rectangle = new Rectangle(10, 20);
console.log(rectangle.calculateArea()); // Output = 200

const triangle = new Triangle(10, 15);
console.log(triangle.calculateArea()); // Output = 75

const circle = new Circle(10);
console.log(circle.calculateArea()); //Output = 314.1592653589793
