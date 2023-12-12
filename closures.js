function sayHello(yourName) {
  return function () {
    console.log("howdy" + " " + yourName);
  };
}

let bob = sayHello("bob");
comrad = sayHello("comrad");
grant = sayHello("grant");

grant();
comrad();
bob();
