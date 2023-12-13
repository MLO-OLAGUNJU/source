let originalCar = {
  make: "Ford",
  model: "Truck",
  year: 2023,
};

let newCar = Object.create(originalCar);

/* console.log(newCar.make);
newCar.make = "Audi";
console.log(newCar.make); */
// newCar.whatever = "MANNY'S LIMMITED EDITION";
console.log(newCar.whatever);

/* console.log(Object.getPrototypeOf(newCar));

let myPrototype = Object.getPrototypeOf(newCar);
console.log(myPrototype.make);

originalCar.doors = 4;
console.log(newCar.doors);

console.log(originalCar.hasOwnProperty("doors"));
console.log(newCar.hasOwnProperty("doors")); */
