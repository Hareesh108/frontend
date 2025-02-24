function* gen1() {
  yield 2;
  yield 3;
}

function* gen2() {
  yield 1;
  // delegating yield
  yield* gen1();
  yield 4;
}

console.log([...gen2()]);
