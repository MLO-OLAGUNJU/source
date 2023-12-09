// an array is a variable that can hold many values

let a = [4, 8, 15, 16, 23, 42];
let b = ["david", "eddie", "alex", "michael"];
/*
console.log(a[0]); // ...log(variable name[value index number])
console.log(a[1]);
console.log(a);
*/

//assigning a new value to first array
// a[0] = 7;
// console.log(a);

// console.log(typeof a);

// let c = [4, "alex", true];
// console.log(c);

// undefine
// console.log(b[4]);

// console.log(a.length); // actual number, NOT zero based (counting starts from 1 not 0)

/*
a[10] = 77;
console.log(a);
console.log(a.length);
*/

a.push(77);
console.log(a);
console.log(a.length);

a.pop();
a.pop();
a.pop();
console.log(a);
console.log(a.length);
