type GetArrayElementType<T> = T extends (infer U)[] ? U : never;

type Moment1 = string[];
type Example1Array = Array<string>;

type ElementTypeOfExampleArray = GetArrayElementType<Moment1>; // string
type ElementTypeOfExample1Array = GetArrayElementType<Example1Array>; // string

// Examples using the types
const stringArray1: Moment1 = ['hello', 'world'];
const firstElement1: ElementTypeOfExampleArray = stringArray1[0]; // type is string

const stringArray2: Example1Array = ['foo', 'bar'];
const firstElement2: ElementTypeOfExample1Array = stringArray2[0]; // type is string

// You can also use it with different types
type NumberArray = number[];
type NumberArrayElement = GetArrayElementType<NumberArray>; // number
const numbers: NumberArray = [1, 2, 3];
const firstNumber: NumberArrayElement = numbers[0]; // type is number