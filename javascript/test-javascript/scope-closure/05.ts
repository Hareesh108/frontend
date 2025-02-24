function createCounter() {
  let globalCount = 0;

  function incrementCount() {
    let incrementedValue = ++globalCount;
    return incrementedValue;
  }

  return { incrementCount };
}

const counterMe = createCounter()
console.log(counterMe.incrementCount());
console.log(counterMe.incrementCount());
console.log(createCounter().incrementCount());

// 1 2 1