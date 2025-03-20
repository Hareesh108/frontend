type Moment<T> = T extends infer U ? U : never;

type StringType = Moment<string>;
const strExample: StringType = "Hello TypeScript"; // string example

type NumberType = Moment<number>;
const numExample: NumberType = 42; // number example

type UnionType = Moment<string | number>;
const unionExample1: UnionType = "Hello"; // string example
const unionExample2: UnionType = 123; // number example

interface User {
    name: string;
    age: number;
}

type UserType = Moment<User>;
const userExample: UserType = {
    name: "John Doe",
    age: 30
}; // User example