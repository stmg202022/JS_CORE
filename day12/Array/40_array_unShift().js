const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5)); // 5

console.log(array1); // [4, 5, 1, 2, 3]

console.log(array1.unshift([-4, -3])); // 6
console.log(array1); // [ [ -4, -3 ], 4, 5, 1, 2, 3 ]
