async function foo() { // Declares an asynchronous function named 'foo'
    try { // Starts a try block to handle potential errors
        await Promise.reject("Error!"); // Awaits a rejected promise with the message "Error!"
    } catch (e) { // Catches any errors thrown in the try block
        return "Caught"; // Returns the string "Caught" if an error is caught
    }
}

foo().then(console.log); // Calls the 'foo' function and logs the result to the console