let a, b, c, d, e;
let myName = ["david", "eddie", "alex", "micheal", "manny"];

/* [a, b, c, e, d] = myName;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
 */

/* let others;

[a, b, ...others] = myName;

console.log(a);
console.log(b);
console.log(others);
 */

let year, model;
({ year, model } = {
  make: "bmw",
  model: "745li",
  year: 2010,
  value: 5000,
});
console.log(year);
console.log(model);