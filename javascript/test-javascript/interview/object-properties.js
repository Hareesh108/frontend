const obj = {
    "1": "one", // key is a string "1"
    "true": "boolean", // key is a string "true"
    "null": "null", // key is a string "null"
    "undefined": "undefined" // key is a string "undefined"
};

console.log(obj["1"]); // "one" - accessing the value with string key "1"
console.log(obj["true"]); // "boolean" - accessing the value with string key "true"
console.log(obj["null"]); // "null" - accessing the value with string key "null"
console.log(obj["undefined"]); // "undefined" - accessing the value with string key "undefined"
