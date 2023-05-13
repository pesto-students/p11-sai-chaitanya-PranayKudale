// Define the Person class with properties and introduce method
class Person {
  constructor(name, age, gender, nationality) {
    // Assign properties to the current object using "this" keyword
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality;
  }

  // Define introduce method that returns a string with person's details
  introduce() {
    return `My name is ${this.name}, I am ${this.age} years old, I am ${this.gender}, and I am ${this.nationality}.`;
  }
}

// Create three instances of Person class
const person1 = new Person("Aditya", 25, "male", "Indian");
const person2 = new Person("Tanya", 30, "female", "Russian");
const person3 = new Person("Sasuke", 20, "male", "Japanese");

// Call introduce method on each instance and print the returned string to console
console.log(`Person instance 1: ${person1.introduce()}`);
console.log(`Person instance 2: ${person2.introduce()}`);
console.log(`Person instance 3: ${person3.introduce()}`);

// Define Student class that inherits from Person class and has an additional property and method
class Student extends Person {
  constructor(name, age, gender, nationality, subject) {
    // Call the super() method to inherit properties from Person class
    super(name, age, gender, nationality);
    // Assign additional property to the current object
    this.subject = subject;
  }

  // Define study method that returns a string with the subject being studied
  study() {
    return `I am studying ${this.subject}`;
  }
}

// Create an instance of Student class
const student1 = new Student(
  "Sarah",
  18,
  "female",
  "British",
  "Computer Science"
);

// Call introduce and study methods on the student instance and print the returned strings to console
console.log(`Student instance 1: ${student1.introduce()} ${student1.study()}.`);
