async function asyncFunction(): Promise<void> {
  console.log(1);

  new Promise(() => console.log(2));
  await new Promise<void>((res) => {
    setTimeout(() => console.log(3), 0);
    res();  
  });
}

new Promise<void>((res) => {
  console.log(4);

  (async () => {
    console.log(5);
    await asyncFunction();
    console.log(6);
  })();
  res();
}).then(() => console.log(7));

console.log(8);

// 4 5 1 2 6 8 7 3