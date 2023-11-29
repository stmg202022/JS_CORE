const array1 = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const result = array1.reduceRight((accumulator, currentValue) =>
  accumulator.concat(currentValue)
);

console.log(result); // [4, 5, 2, 3, 0, 1]

const sum = [0, 1, 2, 3, 4].reduceRight(
  (accumulator, currentValue, index, array) => accumulator + currentValue
);
console.log(sum); // 10

const sum2 = [0, 1, 2, 3, 4].reduceRight(
  (accumulator, currentValue, index, array) => accumulator + currentValue,
  10
);
console.log(sum2); // 20

//===========================================
const a = ["1", "2", "3", "4", "5"];

console.log(a.reduceRight((prev, cur) => prev + cur)); // 54321

//================================================
console.log([1, 2, , 4].reduceRight((a, b) => a + b)); // 7
console.log([1, 2, undefined, 4].reduceRight((a, b) => a + b)); // NaN
