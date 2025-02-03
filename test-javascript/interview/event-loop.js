console.log("Start"); // Logs "Start" to the console immediately

setTimeout(() => console.log("Timeout"), 0); // Schedules "Timeout" to be logged after 0 milliseconds (after the current call stack is empty)

Promise.resolve().then(() => console.log("Promise 1")); // Schedules "Promise 1" to be logged after the current call stack, before any setTimeout callbacks

Promise.resolve().then(() => {
    console.log("Promise 2"); // Schedules "Promise 2" to be logged after the current call stack, before any setTimeout callbacks
    setTimeout(() => console.log("Timeout 2"), 0); // Schedules "Timeout 2" to be logged after 0 milliseconds (after the current call stack is empty)
});

console.log("End"); // Logs "End" to the console immediately