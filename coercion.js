let a = 7;
let b = "6";
b = parseInt(b, 10); //10 reps decimal (i.e change [b = "6"] to a decimal number)
let c = a + b;

console.log("Answer= " + c);

let d = parseInt("bob", 10); // trying to convert this string into a Number data type, but 'bob' is not a number....... we will get a result of of Nan
let e = isNaN(d); // checkingif d is Nan True/False(boolean result)
console.log(d);
console.log(e);
