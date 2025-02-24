function* genFunc() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

const iterator = genFunc(); // state: Suspended

console.log(iterator.next()); // state: Running


console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next()); // state: Closed
