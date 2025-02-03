// Create a new unique symbol with the description "myKey"
const sym = Symbol("myKey");

// Create an object with a symbol key and a normal string key
const obj = {
    [sym]: "value", // Symbol key with value "value"
    normalKey: "normal" // Normal string key with value "normal"
};

// Log the keys of the object that are strings
console.log(Object.keys(obj)); // Output: ["normalKey"]

// Log the symbol keys of the object
console.log(Object.getOwnPropertySymbols(obj)); // Output: [Symbol(myKey)]