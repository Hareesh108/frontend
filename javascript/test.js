let str = 'Hareesh';

console.log(str.substring(2, 4));

let hey = str.split('').reverse('').join('');

console.log(hey);

let arr = [1, 2, 3, 33333, 3, 21, 312];

console.log(arr.sort((a, b) => a - b));

console.log(arr.reduce((pre, cur) => pre + cur, 0));
