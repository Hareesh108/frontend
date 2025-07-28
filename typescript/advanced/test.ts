/**
 * 1. Template Literal Types
 * Allows you to create types using string literal concatenation.
 */
type EventName = `on${Capitalize<string>}Event`;
const eventName: EventName = "onClickEvent"; // Valid

console.log("eventName:",eventName);


/**
 * 2. Variadic Tuple Types
 * Enables tuples to have a variable number of elements, useful for functions like currying.
 */
function concat<T extends unknown[], U extends unknown[]>(a: [...T], b: [...U]): [...T, ...U] {
    return [...a, ...b];
}
const result = concat([1, 2], ['a', 'b']); // [1, 2, 'a', 'b']

/**
 * 3. Recursive Conditional Types
 * Allows types to recursively reference themselves, enabling deep transformations.
 */
type DeepReadonly<T> = {
    readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};
type Example = DeepReadonly<{ a: { b: number } }>;

/**
 * 4. Satisfies Operator (TypeScript 4.9+)
 * Ensures an expression matches a type without changing its inferred type.
 */
const config = {
    url: "https://api.example.com",
    method: "GET",
} satisfies { url: string; method: "GET" | "POST" };

/**
 * 5. Discriminated Unions with Exhaustiveness Checking
 * Helps ensure all cases are handled in switch statements.
 */
type Shape = { kind: "circle"; radius: number } | { kind: "square"; side: number };
function area(shape: Shape): number {
    switch (shape.kind) {
        case "circle": return Math.PI * shape.radius ** 2;
        case "square": return shape.side ** 2;
        default: {
            // Exhaustiveness check
            const _exhaustive: never = shape;
            return _exhaustive;
        }
    }
}

/**
 * 6. Type Inference in Template String Types (TypeScript 4.1+)
 * Enables extracting parts of string literals using infer in template literal types.
 */
type ExtractEvent<T> = T extends `on${infer Name}Event` ? Name : never;
type ClickName = ExtractEvent<"onClickEvent">; // "Click"

/**
 * 7. Using 'as const' for Narrowed Types (TypeScript 3.4+)
 * The 'as const' assertion makes objects and arrays deeply immutable and infers literal types.
 */
const directions = ["up", "down", "left", "right"] as const;
type Direction = typeof directions[number]; // "up" | "down" | "left" | "right"

/**
 * 8. Using 'unknown' Type for Safer APIs (TypeScript 3.0+)
 * 'unknown' is a safer alternative to 'any', forcing type checks before usage.
 */
function handleValue(val: unknown) {
    if (typeof val === "string") {
        console.log(val.toUpperCase());
    }
}

/**
 * 9. Mapped Types with Key Remapping (TypeScript 4.1+)
 * Allows you to remap keys in mapped types using 'as'.
 */
type PrefixKeys<T> = {
    [K in keyof T as `prefix_${string & K}`]: T[K]
};
type Prefixed = PrefixKeys<{ foo: number; bar: string }>; // { prefix_foo: number; prefix_bar: string }

/**
 * 10. Using 'infer' in Conditional Types for Advanced Type Manipulation
 * 'infer' lets you introduce a type variable to be inferred in conditional types.
 */
type ElementType<T> = T extends (infer U)[] ? U : T;
type NumberType = ElementType<number[]>; // number
type StringType = ElementType<string>;   // string