function createCounter(initialCount: number) {
  let count = initialCount;
  return function () {
    "use strict";
    count += 1;
    return count;
  };
}
const counterThen = createCounter(10);
counterThen();
counterThen();
console.log(counterThen());
