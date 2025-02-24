const person = {
  name: "Jane",
  address: { city: "Amsterdam" },
};

Object.freeze(person);

const personProxy = new Proxy(person, {
  set(...args) {
    Reflect.set(...args);
  },
});

personProxy.name = "Sarah";
personProxy.address.city = "Paris";

console.log(person); // { name: 'Jane', address: { city: 'Paris' } }
