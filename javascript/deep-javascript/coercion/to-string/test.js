// Primitive values
console.log(String(null));        // "null"
console.log(String(undefined));   // "undefined"
console.log(String(true));        // "true"
console.log(String(false));       // "false"
console.log(String(42));          // "42"
console.log(String(0));           // "0"
console.log(String(-0));          // "0" (negative zero is hidden)

// Arrays
console.log(String([]));                    // ""
console.log(String([1, 2, 3]));             // "1,2,3"
console.log(String([null, undefined]));     // ","
console.log(String([[], [], []]));          // ",,"
console.log(String([[1], [2], [3]]));       // "1,2,3"

// Objects
console.log(String({}));            // "[object Object]"
console.log(String({ a: 2 }));      // "[object Object]"

// Custom toString
const customToString = {
  toString() {
    return "X";
  }
};
console.log(String(customToString)); // "X"

// Custom string tag
const customTag = {
  [Symbol.toStringTag]: "CustomName"
};
console.log(String(customTag)); // "[object CustomName]"
