// Creating a class Vehicle

class Vehicle {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  drive() {
    console.log(`Driving ${this.make} ${this.model}.`);
  }
}

// Creating a sub class Car which extends Class Vehicle and added property numSeats.

class Car extends Vehicle {
  constructor(make, model, year, color, numSeats) {
    super(make, model, year, color);
    this.numSeats = numSeats;
  }
}

// Creating a subclass called RideShareCar that extends Car and added a property isAvailable.

class RideShareCar extends Car {
  constructor(make, model, year, color, numSeats, isAvailable) {
    super(make, model, year, color, numSeats);
    this.isAvailable = isAvailable;
  }
}

// Creating instances and testing the functionality

const vehicle = new Vehicle("Maruti", "Swift", 2020, "White");
vehicle.drive(); //output: Driving Maruti Swift

const car = new Car("Honda", "City", 2017, "Red", 5);
console.log(car.numSeats); // Output: 5
car.drive(); //Output: Driving Honda City

const rideShareCar = new RideShareCar("Hyundai", "I20", 2022, "Black", 5, true);
console.log(rideShareCar.isAvailable); //Output: true
rideShareCar.drive(); //Output: Driving Hyundai I20.
