// Define a handler object with a 'get' trap
const handler = {
    // The 'get' trap intercepts property access
    get(target, prop) {
        // If the property exists in the target object, return its value
        // Otherwise, return "Not Found"
        return prop in target ? target[prop] : "Not Found";
    }
};

// Define an object with a single property 'name'
const obj = { name: "Hareesh" };

// Create a proxy for the 'obj' object using the 'handler'
const proxy = new Proxy(obj, handler);

// Log the proxy object itself
console.log(proxy, "proxy");

// Access the 'name' property through the proxy, which exists in the target object
console.log(proxy.name); // Output: "Hareesh"

// Access the 'age' property through the proxy, which does not exist in the target object
console.log(proxy.age); // Output: "Not Found"