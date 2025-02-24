// Start a for loop with a variable 'i' initialized to 0, running while 'i' is less than 5, incrementing 'i' by 1 each iteration
for (var i = 0; i < 5; i++) {
    // Immediately-invoked function expression (IIFE) to create a new scope and capture the current value of 'i'
    (function (i) {
        // Set a timeout to log the value of 'i' after 1000 milliseconds (1 second)
        setTimeout(() => console.log(i), 1000);
    // Pass the current value of 'i' to the IIFE
    })(i);
}