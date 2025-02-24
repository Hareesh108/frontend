let obj = { a: { b: 1 } };
let ref = obj.a;

console.log(obj,"obj");
console.log(ref,"ref");

obj = null

console.log(obj,"obj");
console.log(ref,"ref");