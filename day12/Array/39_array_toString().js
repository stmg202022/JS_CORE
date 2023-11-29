// //toString()

const animals = ["dog", "cat", "cow", "tiger", "cow", "lion"];

console.log(animals.toString()); // dog,cat,cow,tiger,cow,lion
console.log(animals);

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix.toString()); // 1,2,3,4,5,6,7,8,9

const arr = [];
arr.push(1, [3, arr, 4], 2);
console.log(arr); // <ref *1> [ 1, [ 3, [Circular *1], 4 ], 2 ]
console.log(arr.toString()); // 1,3,,4,2

//================sparse array ===============
console.log([1, , 3].toString()); // '1,,3'
