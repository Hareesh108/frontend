/**
 * 1. Template Literal Types
 * Allows you to create types using string literal concatenation.
 */
type EventName = `on${Capitalize<string>}Event`;
const eventName: EventName = "onClickEvent"; // Valid

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
        default: 
            // Exhaustiveness check
            const _exhaustive: never = shape;
            return _exhaustive;
    }
}