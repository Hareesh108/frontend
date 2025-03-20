type IsArray<T> = T extends (infer U)[] ? U : never;
type IsFunction<T> = T extends (...args: any[]) => infer R ? R : never;

type ExtractType<T> = T extends any[]
    ? IsArray<T>
    : T extends (...args: any[]) => any
    ? IsFunction<T>
    : T;

// Example 1: Array type
const stringArray: string[] = ["hello", "world"];
const extractedString: ExtractType<typeof stringArray> = "test";
console.log("Array type example:", extractedString); // Will be type 'string'

// Example 2: Function type
const numberFunction = () => 42;
const extractedNumber: ExtractType<typeof numberFunction> = 123;
console.log("Function return type example:", extractedNumber); // Will be type 'number'

// Example 3: Default type
const booleanValue = true as boolean;
const extractedBoolean: ExtractType<typeof booleanValue> = false;
console.log("Default type example:", extractedBoolean); // Will be type 'boolean'

// Example 4: Complex function type
const complexFunction = (x: number, y: string): string[] => [x.toString(), y];
const extractedArray: ExtractType<typeof complexFunction> = ["hello", "world"];
console.log("Complex function return type example:", extractedArray); // Will be type 'string[]'

// Example 5: Nested array type
const nestedArray: number[][] = [[1, 2], [3, 4]];
const extractedNestedType: ExtractType<typeof nestedArray> = [1, 2];
console.log("Nested array type example:", extractedNestedType); // Will be type 'number[]'