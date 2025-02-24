const obj = {
    x: 10,
    y: 20
}; // Defines an object 'obj' with properties 'x' and 'y'

console.log(delete obj.x); // Deletes the property 'x' from 'obj' and logs 'true' indicating the property was successfully deleted
console.log(obj); // Logs the updated object 'obj', which now only has the property 'y'

console.log(delete obj); // Logs 'false' because 'delete' cannot be used to delete variables or objects declared with 'const'