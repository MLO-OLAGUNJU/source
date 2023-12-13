// declaration

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  print() {
    console.log(`${this.make} ${this.model} ${this.year}`);
  }
}

let myCar = new Car("Ford", "truck", 2023);
myCar.print();
// expression
// let car = class {

// }

class Sportscar extends Car {
  revEngine() {
    console.log("Vrmmmmmm goes the " + this.model);
  }
}

let mySportsCar = new Sportscar("Dodge", "Viper", 2011);
console.log(Sportscar);
mySportsCar.print();
mySportsCar.revEngine();

// myCar.revEngine();
// revEngine is not accessible by myCar bcos
//it is not in the parent class (Car)
