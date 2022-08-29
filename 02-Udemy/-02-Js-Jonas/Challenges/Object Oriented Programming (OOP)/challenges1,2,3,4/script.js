'use strict';
// challenge1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(`${this.make}, the speed is ${this.speed}Km/h`);
};
Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(`${this.make}, the speed is ${this.speed} Km/h`);
};
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);
car1.accelerate();
car1.brake();
car2.accelerate();
car2.brake();

////////////////////////////////////////////////////
// challenge2
////////////////////////////////////////////////////

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed = this.speed + 10;
    console.log(`${this.make}, the speed is ${this.speed}Km/h`);
  }
  brake() {
    this.speed = this.speed - 5;
    console.log(`${this.make}, the speed is ${this.speed} Km/h`);
    return this;
  }
  get speedUS() {
    return `The speed is ${this.speed / 1.6} mi/h`;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('ford', 120);
ford.accelerate();
ford.brake();

////////////////////////////////////////////////////
// challenge3
////////////////////////////////////////////////////

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// prototype
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

////////////////////////////////////////////////////
// challenge4
////////////////////////////////////////////////////

class EVCl extends CarCl {
  constructor(make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  }

  chargeBattery(chargeTo) {
    this.charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed = this.speed + 20;
    this.charge -= 0.01;
    console.log(
      `${this.make} going at  ${this.speed}Km/h with a charge ${this.charge}`
    );
    return this;
  }
}
const rivian = new EVCl('Rivian', 120, 23);
///////////
///most important to make chaining you should  {return this;} of all the method which you need to chain it
rivian.accelerate().accelerate().brake().chargeBattery(50).accelerate();
////////
console.log(rivian.speedUS);
