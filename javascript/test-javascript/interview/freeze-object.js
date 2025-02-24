const obj = { name: "Hareesh" }; // Create an object with a property 'name'
Object.freeze(obj); // Freeze the object to prevent modifications

// obj.name = "Bhittam"; // Attempting to modify a frozen object will not work and will not throw an error in non-strict mode
console.log(obj.name); // Output: "Hareesh" because the object is frozen and cannot be modified
