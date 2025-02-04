const obj = {
    value: 100,
    getValue() {
        return this.value;
    }
};

const fn = obj.getValue.bind(obj); // bind the context of obj to fn
console.log(fn()); // 100
console.log(obj.getValue()); // 100
