(async () => {
  const asyncFunc = async () => "asyncFunc";

  const promise = new Promise<void>((res) => {
    console.log("promise");
  }).then(() => console.log("then"));

  console.log("async body");

  queueMicrotask(() => {
    console.log("queueMicrotask");
  });

  const result = await Promise.all([asyncFunc(), promise]);

  return result;
})();

console.log("script");

// promise
// async body
// script
// queueMicrotask
