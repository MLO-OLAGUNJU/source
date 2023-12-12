/* var car = {
  make: "BMW",
  model: "745li",
  year: 2010,
  getPrice: function () {
    return 5000;
  },
  printDescription: function () {
    console.log(this.make + " " + this.model);
  },
};

car.printDescription();
 */

/* function first() {
  return this;
}

console.log(first() === global); */

// this is Node's global object
// because that's where the
// first method was called

/* function second() {
  "use strict";

  return this;
}

console.log(second() === global);
console.log(second() === undefined);
 */

// this depends on HOW a function is called.
// An object can be passed as the first argument to call
// or apply and this will be bound to it.

/* let myObject = { value: "My Object" };

//This property is set on the global object
global.value = "Global Object";

function third(userName) {
  //Returns something different depending on how
  //we call this method;
  return this.value + userName;
}

console.log(third());
// Both call and apply allow you to explicitly set
// what you want to represent 'this'. The difference
// is in how additional arguments to the function
// are sent.

console.log(third.call(myObject, " Manny"));
console.log(third.apply(myObject, [" Manny"]));
 */

function fifth() {
  console.log(this.firstName + " " + this.lastName);
}

let customer1 = {
  firstName: "Bob",
  lastName: "Tabor",
  print: fifth,
};
let customer2 = {
  firstName: "richard",
  lastName: "boughton",
  print: fifth,
};

customer1.print();
customer2.print();
