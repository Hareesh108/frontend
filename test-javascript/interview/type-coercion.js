console.log([] == false); // true, because [] is coerced to an empty string, which is falsy
console.log([] === false); // false, because === checks for strict equality without type coercion
console.log(null == undefined); // true, because null and undefined are considered equal with ==
console.log(null === undefined); // false, because === checks for strict equality without type coercion
console.log(" \t\r\n" == 0); // true, because the string with only whitespace characters is coerced to 0
