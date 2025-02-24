function outer(x: any) {
  return function inner(y: any) {
    return x + y;
  };
}

const out = outer(2);
out(3);
