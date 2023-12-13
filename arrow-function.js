/* let additionCalculator = (numInput1, numInput2) => {
  console.log(numInput1 + numInput2);
};

additionCalculator(10, 3); */

/* let hi = () => {
  console.log("howdy");
};

hi(); */

/* let hi = (yourName) => {
  console.log(`How are you ${yourName}`);
};

hi("Wura"); */

/* let add = (a, b) => {
  return a + b;
};

console.log(add(7, 3));
 */
/* 
let names = ["david", "eddie", "alex", "micheal"];
names.map((myName) => {
  console.log(`howdy ${myName}!`);
}); */

/* let names = ["david", "eddie", "alex", "micheal"];
let i = 0;
names.map((myName) => {
  i++;
  console.log(`howdy ${myName} ${i}!`);
});
 */

let names = ["david", "eddie", "alex", "micheal"];
var transformed = names.map((myNames) => {
  return `howdy ${myNames}!`;
});
console.log(transformed);
