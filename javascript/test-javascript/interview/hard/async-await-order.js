async function foo() {
    console.log("1"); // Logs "1" to the console immediately
    await Promise.resolve(); // Pauses execution of the function until the next microtask
    console.log("2"); // Logs "2" to the console after the current call stack is cleared
}

console.log("3"); // Logs "3" to the console immediately
foo(); // Calls the async function foo, which logs "1" and schedules "2" to be logged later
console.log("4"); // Logs "4" to the console immediately after calling foo