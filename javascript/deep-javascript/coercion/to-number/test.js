console.log("=== STRING → NUMBER (ToNumber) ===");

console.log(Number(""));          // 0  (empty string)
console.log(Number("0"));         // 0
console.log(Number("-0"));        // -0
console.log(Number("009"));       // 9
console.log(Number("3.14159"));   // 3.14159
console.log(Number("0."));        // 0
console.log(Number(".0"));        // 0
console.log(Number("."));         // NaN
console.log(Number("0xaf"));      // 175 (hexadecimal)

console.log("\n=== BOOLEAN → NUMBER ===");

console.log(Number(false));       // 0
console.log(Number(true));        // 1

console.log("\n=== NULL / UNDEFINED → NUMBER ===");

console.log(Number(null));        // 0
console.log(Number(undefined));   // NaN

console.log("\n=== ARRAYS → NUMBER (ToPrimitive → ToString → ToNumber) ===");

console.log(Number([]));                  // 0
console.log(Number([0]));                 // 0
console.log(Number([-0]));                // -0
console.log(Number([1]));                 // 1
console.log(Number([1, 2]));              // NaN
console.log(Number([null]));              // 0
console.log(Number([undefined]));         // 0
console.log(Number([null, undefined]));   // 0
console.log(Number([[[]]]));              // 0

console.log("\n=== OBJECTS → NUMBER ===");

console.log(Number({}));                  // NaN
console.log(Number({ a: 1 }));             // NaN

console.log("\n=== OBJECT WITH valueOf OVERRIDE ===");

const obj1 = {
  valueOf() {
    return 3;
  }
};

console.log(Number(obj1));                // 3

console.log("\n=== OBJECT valueOf RETURNS NON-PRIMITIVE ===");

const obj2 = {
  valueOf() {
    return {};
  },
  toString() {
    return "5";
  }
};

console.log(Number(obj2));                // 5

console.log("\n=== OBJECT STRINGIFICATION LEADS TO NaN ===");

const obj3 = {
  toString() {
    return "[object Object]";
  }
};

console.log(Number(obj3));                // NaN

console.log("\n=== END OF ToNumber EXAMPLES ===");
