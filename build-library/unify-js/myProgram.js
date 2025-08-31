// myProgram.js
const double = (x) => { return x + x; };
const num = 5;
const str = "Hello";

const doubledNum = double(num);
const mixed = double(num) + double(str); // ❌ Type error