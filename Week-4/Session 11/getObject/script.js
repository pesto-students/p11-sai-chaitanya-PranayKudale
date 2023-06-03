// Create a JavaScript object called person with properties name, age, and email. Implement the
// following:
// • Make the name and email properties read-only.
// • Make the age property write-only.
// • Add a method called getAge() that returns the age property.
// • Add a method called setAge() that accepts an age parameter and updates the age
// property.
// Use Object.defineProperty() or any other Object methods to create read-only
// and write-only properties.

const person = {};

Object.defineProperty(person, "name", {
  value: "John",
  writable: false,
});

Object.defineProperty(person, "email", {
  value: "john@example.com",
  writable: false,
});

let ageValue;

Object.defineProperty(person, "age", {
  set: function (value) {
    ageValue = value;
  },
  enumerable: true,
});

person.getAge = function () {
  return ageValue;
};

person.setAge = function (newAge) {
  ageValue = newAge;
};
