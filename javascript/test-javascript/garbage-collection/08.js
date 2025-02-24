const obj = {
  bar() {
    console.log(this);
  },
};

setTimeout(() => obj.bar(), 0);

console.log(obj, "obj");
console.log(obj?.bar, "obj.bar");

queueMicrotask(() => {
  delete obj.bar;
});

console.log(obj, "obj");
console.log(obj?.bar, "obj.bar");

// micro task run before the regular (macro task) task 