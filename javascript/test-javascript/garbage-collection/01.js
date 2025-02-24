let obj = {
    age: 25,
    address: {
        street: 'Main St'
    }
}



const address = obj.address;
console.log(address,"address");
console.log(obj,"obj");
obj = null
console.log(address,"address");
console.log(obj,"obj");
