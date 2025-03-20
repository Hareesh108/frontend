type returnType<T> = T extends (...args: any[]) => infer R ? R : never;

function add(a: number, b: string) {
    return a + b;
}

type AddReturnType = returnType<typeof add>;
const result: AddReturnType = add(1, "2"); // string example
console.log(result); // Output: 12




type GetParameters<T> = T extends (...args: infer P) => any ? P : never;

type ExampleFunction = (a: number, b: string) => void;
type Params = GetParameters<ExampleFunction>; // [number, string]

// Example usage
function greet(name: string, age: number): string {
    return `Hello, ${name}! You are ${age} years old.`;
}

type GreetParams = GetParameters<typeof greet>;
const params: GreetParams = ["John", 25];

console.log(greet(...params)); // Output: Hello, John! You are 25 years old.

// Another example
function multiply(x: number, y: number): number {
    return x * y;
}

type MultiplyParams = GetParameters<typeof multiply>;
const mathParams: MultiplyParams = [5, 3];

console.log(multiply(...mathParams)); // Output: 15




type ConstructorParameters1<T> = T extends new (...args: infer P) => any ? P : never;

class ExampleClass {
    constructor(public a: number, public b: string) {}
}

type Params1 = ConstructorParameters<typeof ExampleClass>; // [number, string]

// Example usage
const classParams: Params1 = [42, "Hello"];
const instance = new ExampleClass(...classParams);
console.log(instance); // Output: ExampleClass { a: 42, b: "Hello" }

// Another example
class Person {
    constructor(public name: string, public age: number, public city: string) {}
}

type PersonParams = ConstructorParameters1<typeof Person>;
const personParams: PersonParams = ["Alice", 30, "New York"];
const person = new Person(...personParams);
console.log(person); // Output: Person { name: "Alice", age: 30, city: "New York" }