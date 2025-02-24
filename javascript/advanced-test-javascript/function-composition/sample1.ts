// 'ender' is a higher-order function that takes an 'ending' string and returns a function
// that appends that 'ending' to any given string 'str'.
var ender = (ending: string) => (str: string) => str + ending;

// 'adore' is a function that appends 'rocks' to any given string.
var adore = ender('rocks');
// 'announce' is a function that appends ", y'all" to any given string.
var announce = ender(", y'all");
// 'exclaim' is a function that appends '!' to any given string.
var exclaim = ender('!');

// 'hypeUp' is a function that takes a string, passes it through 'adore', 'announce', and 'exclaim' in sequence.
var hypeUp = (str: string) => exclaim(announce(adore(str)));

// Testing 'hypeUp' with 'Functional programming '.
const test1 = hypeUp('Functional programming ');
console.log(test1); // Output: Functional programming rocks, y'all!

// Testing 'hypeUp' with 'JavaScript '.
const test2 = hypeUp('JavaScript ');
console.log(test2); // Output: JavaScript rocks, y'all!



