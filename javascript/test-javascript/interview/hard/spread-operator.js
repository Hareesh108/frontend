const obj1 = { a: 1, b: { c: 2 } }; // Define an object 'obj1' with properties 'a' and 'b', where 'b' is another object
const obj2 = { ...obj1 }; // Create a shallow copy of 'obj1' into 'obj2' using the spread operator

obj2.b.c = 42; // Modify the nested property 'c' of the object 'b' in 'obj2'
console.log(obj1.b.c); // Log the value of the nested property 'c' of the object 'b' in 'obj1'