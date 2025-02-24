function* genFunc() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

console.log([...genFunc()]);

for (const value of genFunc()) {
  console.log(value);
}
