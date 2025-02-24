const a = isNaN("5.2" + 2);
const b = isNaN(parseInt(a));
const c = isNaN(parseFloat(a));
const d = isNaN("1 * 2" * 2);
console.log(a, b, c, d);
