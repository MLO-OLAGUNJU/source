let a = "first";

function scopeTest() {
  console.log(a);
  a = "changed";

  let b = "second";
  if (a !== "") {
    console.log(a);
    console.log("inside if: " + b);
    let c = "third";
  }
}
/*
  if (a !== "first") {
    console.log(a);

    a = "changed";
  } else if ((a = "first")) {
    console.log("variable " + a + "is EQUAL to first");
    let c = "third";
  }
  */
//   console.log(c);

scopeTest();
// console.log(b);
console.log(a);
