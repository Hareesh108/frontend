// Implementing a Hash Table in JavaScript
// Using Objects
// In JavaScript, you can use objects to implement a simple hash table. Here's an example:

// Creating a hash table using an object
const hashTable = {};

// Adding key-value pairs
hashTable['name'] = 'Alice';
hashTable['age'] = 25;
hashTable['city'] = 'Wonderland';

// Accessing values
console.log(hashTable['name']); // Output: Alice
console.log(hashTable['age']);  // Output: 25

// Checking if a key exists
console.log('city' in hashTable); // Output: true

// Removing a key-value pair
delete hashTable['age'];
console.log(hashTable['age']);  // Output: undefined



// // Using the Map Class
// // The Map class provides a more robust way to implement hash tables, as it allows for keys of any type and maintains the insertion order of keys. Here's an example:

// // Creating a hash table using the Map class
// const hashTable = new Map();

// // Adding key-value pairs
// hashTable.set('name', 'Alice');
// hashTable.set('age', 25);
// hashTable.set('city', 'Wonderland');

// // Accessing values
// console.log(hashTable.get('name')); // Output: Alice
// console.log(hashTable.get('age'));  // Output: 25

// // Checking if a key exists
// console.log(hashTable.has('city')); // Output: true

// // Removing a key-value pair
// hashTable.delete('age');
// console.log(hashTable.get('age'));  // Output: undefined

// // Iterating over key-value pairs
// hashTable.forEach((value, key) => {
//   console.log(`${key}: ${value}`);
// });
// // Output:
// // name: Alice
// // city: Wonderland