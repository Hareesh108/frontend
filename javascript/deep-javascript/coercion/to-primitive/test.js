console.log("=== ToPrimitive: BASIC OBJECTS ===");

// Default object
const obj = { a: 1 };
console.log(obj + "");           // string hint → "[object Object]"
console.log(+obj);               // number hint → NaN

console.log("\n=== ARRAYS ===");

const arr = [1, 2, 3];
console.log(arr + "");           // "1,2,3"
console.log(+arr);               // NaN

console.log([] + "");            // ""
console.log(+[]);                // 0

console.log([1] + "");           // "1"
console.log(+[1]);               // 1

console.log([1, 2] + "");        // "1,2"
console.log(+[1, 2]);            // NaN

console.log("\n=== DATES (SPECIAL CASE) ===");

const d = new Date();
console.log(d + "");             // string hint → date string
console.log(+d);                 // number hint → timestamp

console.log("\n=== FUNCTIONS ===");

function fn() {}
console.log(fn + "");            // function source as string
console.log(+fn);                // NaN

console.log("\n=== valueOf vs toString (NUMBER HINT) ===");

const numHint = {
  valueOf() {
    return 10;
  },
  toString() {
    return "20";
  }
};

console.log(+numHint);           // 10 (valueOf wins)
console.log(numHint + "");       // "20" (string hint → toString)

console.log("\n=== valueOf vs toString (STRING HINT) ===");

const strHint = {
  valueOf() {
    return 99;
  },
  toString() {
    return "hello";
  }
};

console.log(strHint + "");       // "hello"
console.log(+strHint);           // 99

console.log("\n=== valueOf RETURNS NON-PRIMITIVE ===");

const fallback = {
  valueOf() {
    return {};
  },
  toString() {
    return "fallback";
  }
};

console.log(+fallback);          // NaN (string → number coercion)
console.log(fallback + "");      // "fallback"

console.log("\n=== BOTH valueOf AND toString FAIL ===");

const broken = {
  valueOf() {
    return {};
  },
  toString() {
    return {};
  }
};

try {
  console.log(+broken);
} catch (e) {
  console.log("Error:", e.message);
}

console.log("\n=== NO HINT (== COERCION) ===");

console.log(obj == "[object Object]"); // true
console.log(arr == "1,2,3");           // true
console.log([] == "");                 // true
console.log([] == 0);                  // true

console.log("\n=== TEMPLATE LITERALS (STRING HINT) ===");

console.log(`${obj}`);                 // "[object Object]"
console.log(`${arr}`);                 // "1,2,3"

console.log("\n=== SYMBOL.toPrimitive (OVERRIDES EVERYTHING) ===");

const custom = {
  [Symbol.toPrimitive](hint) {
    if (hint === "number") return 42;
    return "custom";
  }
};

console.log(+custom);                  // 42
console.log(custom + "");              // "custom"

console.log("\n=== RECURSIVE COERCION ===");

const recursive = {
  valueOf() {
    return {
      toString() {
        return "deep";
      }
    };
  }
};

console.log(recursive + "");           // "deep"

console.log("\n=== END OF ToPrimitive EXAMPLES ===");
