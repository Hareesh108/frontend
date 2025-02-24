// Define the Parent class
class Parent {
    constructor() {
        this.value = 42; // Initialize value to 42
    }

    getValue() {
        return this.value; // Return the value
    }
}

// Define the Child class that extends Parent
class Child extends Parent {
    constructor() {
        super(); // Call the parent class constructor
    }
}

const child = new Child(); // Create an instance of Child
console.log(child.getValue()); // Log the value from the child instance
