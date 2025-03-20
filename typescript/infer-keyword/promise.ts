type GetPromiseValueType<T> = T extends Promise<infer U> ? U : never;

// Example 1: Simple number promise
type ExamplePromise = Promise<number>;
type ValueTypeOfExamplePromise = GetPromiseValueType<ExamplePromise>; // number

async function example1() {
    const numberPromise: ExamplePromise = Promise.resolve(42);
    const result: ValueTypeOfExamplePromise = await numberPromise;
    console.log('Example 1 - Number Promise:', result);
}

// Example 2: String promise
type StringPromise = Promise<string>;
type StringPromiseValue = GetPromiseValueType<StringPromise>;

async function example2() {
    const stringPromise: StringPromise = Promise.resolve('Hello TypeScript');
    const result: StringPromiseValue = await stringPromise;
    console.log('Example 2 - String Promise:', result);
}

// Example 3: Object promise
type UserPromise = Promise<{ id: number; name: string }>;
type UserPromiseValue = GetPromiseValueType<UserPromise>;

async function example3() {
    const userPromise: UserPromise = Promise.resolve({ id: 1, name: 'John' });
    const result: UserPromiseValue = await userPromise;
    console.log('Example 3 - Object Promise:', result);
}

// Run all examples
async function runExamples() {
    await example1();
    await new Promise(resolve => setTimeout(resolve, 3000));
    await example2();
    await example3();
}

runExamples().catch(console.error);