function outer() {
  return function inner() {
    console.log("Inner function");
  };
}

let outerFunction = outer();

console.log(outerFunction, "outerFunction");

outerFunction = null;

console.log(outerFunction, "outerFunction");
