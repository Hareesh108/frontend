var a = 10; // Global variable a is declared and initialized to 10

function test() {
    console.log(a); // Prints undefined because 'a' is hoisted within the function scope
    let a = 20; // Local variable a is declared and initialized to 20
}

test(); // Calls the test function
