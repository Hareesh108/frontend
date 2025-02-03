const obj = {
    name: "Hareesh", // Define a property 'name' with the value "Hareesh"
    
    // Define a method using an arrow function
    getNameArrow: () => console.log(this.name), // 'this' in arrow functions refers to the enclosing lexical context, not the object 'obj'
    
    // Define a method using a regular function
    getNameFunction() { // 'this' in regular functions refers to the object that calls the method
        console.log(this.name); // 'this' refers to 'obj', so this will log "Hareesh"
    }
};

obj.getNameArrow(); // Call the arrow function method. 'this' does not refer to 'obj', so this will log 'undefined'
obj.getNameFunction(); // Call the regular function method. 'this' refers to 'obj', so this will log "Hareesh"