// 1. Car Constructor
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Add getMakeModel method to Car prototype
Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};

// 2. SportsCar Constructor
function SportsCar(make, model, topSpeed) {
  // Call the Car parent constructor with 'this' context
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit Car prototype methods
SportsCar.prototype = Object.create(Car.prototype);

// Reset constructor reference back to SportsCar
SportsCar.prototype.constructor = SportsCar;

// Add getTopSpeed method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};