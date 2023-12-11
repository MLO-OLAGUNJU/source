let car = {
  make: "FORD",
  model: "truck model",
  year: 2023,
  getPrice: function () {
    // perform some calc
    return 5000;
  },
  printDescription: function () {
    console.log(this.make + " " + this.model);
  },
};

car.printDescription();
console.log(car.year);
console.log(car.getPrice());
// car.getPrice();
