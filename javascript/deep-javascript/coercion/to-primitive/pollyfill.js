/**
 * Polyfill-style implementation of ToPrimitive
 * This mimics the ECMAScript abstract operation
 */
function ToPrimitive(input, hint = "default") {
  // If already primitive, return as-is
  if (
    input === null ||
    typeof input !== "object" &&
    typeof input !== "function"
  ) {
    return input;
  }

  // Step 1: If Symbol.toPrimitive exists, use it first
  const exoticToPrim = input[Symbol.toPrimitive];
  if (typeof exoticToPrim === "function") {
    const result = exoticToPrim.call(input, hint);
    if (isPrimitive(result)) return result;
    throw new TypeError("Symbol.toPrimitive must return a primitive");
  }

  // Step 2: Decide method order based on hint
  const methods =
    hint === "string"
      ? ["toString", "valueOf"]
      : ["valueOf", "toString"];

  // Step 3: Try methods in order
  for (const methodName of methods) {
    if (typeof input[methodName] === "function") {
      const result = input[methodName].call(input);
      if (isPrimitive(result)) {
        return result;
      }
    }
  }

  // Step 4: If nothing worked, throw
  throw new TypeError("Cannot convert object to primitive value");
}

/**
 * Helper to check primitive
 */
function isPrimitive(value) {
  return (
    value === null ||
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean" ||
    typeof value === "symbol" ||
    typeof value === "bigint"
  );
}


const obj1 = {
  valueOf() {
    return 10;
  },
  toString() {
    return "20";
  }
};

console.log(ToPrimitive(obj1, "number")); // 10
console.log(ToPrimitive(obj1, "string")); // "20"

const obj2 = {
  valueOf() {
    return {};
  },
  toString() {
    return "fallback";
  }
};

console.log(ToPrimitive(obj2, "number")); // "fallback"

const broken = {
  valueOf() {
    return {};
  },
  toString() {
    return {};
  }
};

try {
  console.log(ToPrimitive(broken, "number"));
} catch (e) {
  console.log(e.message);
}


const custom = {
  [Symbol.toPrimitive](hint) {
    if (hint === "number") return 99;
    return "custom";
  },
  valueOf() {
    return 1;
  },
  toString() {
    return "ignored";
  }
};

console.log(ToPrimitive(custom, "number")); // 99
console.log(ToPrimitive(custom, "string")); // "custom"

// Mental Model (Very Important)
// ToPrimitive(value, hint)
//   ↓
// Symbol.toPrimitive (if exists)
//   ↓
// hint === "number" ? valueOf → toString
// hint === "string" ? toString → valueOf
//   ↓
// If no primitive → TypeError
