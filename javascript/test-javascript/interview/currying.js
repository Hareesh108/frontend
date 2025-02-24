function sum(a) { // The outermost function takes the first argument 'a'
    return function (b) { // Returns a new function that takes the second argument 'b'
        return function (c) { // Returns another function that takes the third argument 'c'
            return function () { // Returns a final function that takes no arguments
                return a + b + c; // When this final function is called, it returns the sum of 'a', 'b', and 'c'
            };
        };
    };
}

console.log(sum(2)(3)(4)()); // 9, this calls the nested functions with arguments 2, 3, and 4, and then calls the final function to get the sum