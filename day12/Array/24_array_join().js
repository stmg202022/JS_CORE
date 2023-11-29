//syntax
// join()
// join(separator)

const array = ["sam", "son", "tmg"];

console.log(array.join()); //sam,son,tmg
console.log(typeof array.join()); // string
console.log(array.join("")); // samsontmg

console.log(array.join("-")); // sam-son-tmg

const matrix = [
  [2, 2, 2],
  [3, 3, 3],
  [4, 4, 4],
];

console.log(matrix.join()); //2,2,2,3,3,3,4,4,4
console.log(matrix.join(";")); //2,2,2;3,3,3;4,4,4

console.log([3, , 4].join()); // 3,,4
console.log([4, undefined, 5].join()); // 4,,5
