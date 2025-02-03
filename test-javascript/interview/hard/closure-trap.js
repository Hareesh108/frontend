function createCounter() {
    let count = 0; // Initialize a local variable 'count' to 0. This variable is private to the createCounter function.
    return function () {
        return ++count; // Increment the 'count' variable by 1 and return the new value.
    };
}

const counter = createCounter(); // Call createCounter, which returns a function that increments and returns 'count'.
console.log(counter()); // Call the returned function, which increments 'count' to 1 and logs it.
console.log(counter()); // Call the returned function again, which increments 'count' to 2 and logs it.