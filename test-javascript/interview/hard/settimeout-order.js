console.log("A"); // Logs "A" to the console immediately

setTimeout(() => console.log("B"), 0); // Schedules "B" to be logged after 0 milliseconds, but it will be placed in the macrotask queue

Promise.resolve().then(() => console.log("C")); // Schedules "C" to be logged as a microtask, which will run after the current script but before macrotasks

console.log("D"); // Logs "D" to the console immediately