// Define a generator function named genFunc
function* genFunc() {
    // Yield the value 1
    yield 1;
    // Yield the value 2
    yield 2;
    // Return the value 3 (Note: this value is not yielded, it ends the generator)
    return 3;
}

// Create an instance of the generator
const generator = genFunc();

// Log the result of the first call to next() (value: 1, done: false)
console.log(generator.next()); // { value: 1, done: false }

// Log the result of the second call to next() (value: 2, done: false)
console.log(generator.next()); // { value: 2, done: false }

// Log the result of the third call to next() (value: 3, done: true)
console.log(generator.next()); // { value: 3, done: true }

// Log the result of the fourth call to next() (value: undefined, done: true)
console.log(generator.next()); // { value: undefined, done: true }