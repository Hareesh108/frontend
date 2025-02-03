const handler = {
    get(target, prop) {
        return prop in target ? target[prop] : "Not Found";
    }
};

const obj = { name: "Hareesh" };
const proxy = new Proxy(obj, handler);

console.log(proxy,"proxy");


console.log(proxy.name);
console.log(proxy.age);
