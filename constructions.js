/* let car = {
  make: "FORD",
  model: "TruckCar",
  year: 2024,
};
 */

/* function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

let myCar = new Car("FORD", "TruckCar", 2024);

console.log(myCar); */

function MyFunction() {
  console.log("I am a simple function");
}

let myFunction = new MyFunction();
console.log(typeof myFunction);

// Cant't really do anything with this particular
// object ... It's certainly NOT a function
// reference anymore!
// myFunction();
