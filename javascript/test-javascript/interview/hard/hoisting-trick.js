function foo() {
    console.log(bar); // Logs 'undefined' because 'bar' is hoisted but not yet assigned a value
    var bar = 42; // 'bar' is declared and assigned the value 42
}

foo(); // Calls the function 'foo'