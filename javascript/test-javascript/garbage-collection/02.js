let objA = {};
let objB = {};

objA.a = objB;
objB.a = objA;

console.log(objA?.a, "objA.a");
console.log(objB?.a, "objB.a");

objA = null;
objB = null;

console.log(objA?.a, "objA.a");
console.log(objB?.a, "objB.a");
