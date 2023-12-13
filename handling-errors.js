/* let a = (7 * undefined) / "panama";
console.log(a);
 */

/* function beforeTrycatch() {
  let obj = undefined;
  console.log(obj.b);
  console.log(
    "if the prev line of code throws and exception, you'll not gonna see this"
  );
}

beforeTrycatch(); */

/* function afterTryCatch() {
  try {
    let obj = undefined;
    console.log(obj.b);
    console.log(
      "if the prev line of code throws and exception, you'll not gonna see this"
    );
  } catch (error) {
    console.log("I caught an exception: " + error.message);
  } finally {
    console.log("This will happen no matter what.");
  }
  console.log("My application is still running");
}

afterTryCatch();
 */

function performCalculation(obj) {
  if (!obj.hasOwnProperty("b")) {
    throw new Error("Object missing property");
  }
  //continue with calculation
  return 6;
}

function perfromHigherLevelOperation() {
  let obj = {};
  let value = 0;
  try {
    value = performCalculation(obj);
  } catch (error) {
    console.log(error.message);
  }
  if (value === 0) {
    //contigency
    //retry logic
  }
}

perfromHigherLevelOperation();
