const animals = ["cow", "cat", "dog", "cow", "cat"];
// console.log(animals.sort()); //[ 'cat', 'cat', 'cow', 'cow', 'dog' ]

const nums = [3, 40, 5, 67, 7, 58, 57, 34, 20, 30];
// console.log(nums.sort()); // [20, 3, 30, 34, 40, 5, 57, 58, 67, 7];

console.log(nums.sort((a, b) => a - b)); // [3, 5, 7, 20, 30, 34, 40, 57, 58, 67];
console.log(nums.sort((a, b) => (a < b ? a : b))); // [3, 5, 7, 20, 30, 34, 40, 57, 58, 67];

//
const numericStringArray = ["80", "9", "700"];
console.log(numericStringArray.sort((a, b) => a - b)); // [ '9', '80', '700' ]
console.log("3" > "2"); // true
console.log("3" > 2); // true
console.log(3 > "2"); // true
console.log("3" >= "3"); // true

const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];
console.log(mixedNumericArray.sort((a, b) => a - b)); // [1, 5, "9", 40, "80", 200, "700"];

////===================================================//compareFunction//===================================================
const compareFunction = (a, b) => {
  if (a > b) {
    return 1;
  }

  if (a < b) {
    return -1;
  }

  return 0;
};

console.log("----", nums.sort(compareFunction)); // [3, 5, 7, 20, 30, 34, 40, 57, 58, 67];

const compareFunction2 = (a, b) => {
  if (a > b) {
    return -1;
  }

  if (a < b) {
    return 1;
  }

  return 0;
};
console.log("----", nums.sort(compareFunction2)); // [67, 58, 57, 40, 34, 30, 20, 7, 5, 3];
console.log(nums.sort((a, b) => b - a)); // [67, 58, 57, 40, 34, 30, 20, 7, 5, 3];

//===================================================
console.log(animals.sort((a, b) => a.localeCompare(b))); // [ 'cat', 'cat', 'cow', 'cow', 'dog' ]
// console.log(nums.sort((a, b) => a.localeCompare(b))); //error

//===================================================
console.log(["12", "1", "3.14"].sort((a, b) => parseFloat(a) - parseFloat(b))); // [ '1', '3.14', '12' ]
console.log(["12", "1", "3.14"].sort((a, b) => a - b)); // [ '1', '3.14', '12' ]

//===================================================
console.log([...nums].sort((a, b) => a - b)); // [3, 5, 7, 20, 30, 34, 40, 57, 58, 67];

//===================================================
const students = [
  { name: "Alex", grade: 15 },
  { name: "Devlin", grade: 15 },
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
];

console.log(
  students.sort((firstItem, secondItem) => firstItem.grade - secondItem.grade)
);

// Output:
// [
//   { name: "Eagle", grade: 13 },
//   { name: "Sam", grade: 14 },
//   { name: "Alex", grade: 15 },
//   { name: "Devlin", grade: 15 },
// ];

//===================================================
// const arr = [3, 1, 4, 1, 5, 9];
// const compareFn = (a, b) => (a > b ? 0 : 1);
// console.log(arr.sort(compareFn));

const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? -1 : 0);
console.log(arr.sort(compareFn)); // [ 9, 5, 4, 3, 1, 1 ]

//====================================sparse array============
console.log(["a", "c", , "b"].sort()); // ['a', 'b', 'c', empty]
console.log([, undefined, "a", "b"].sort()); // ["a", "b", undefined, empty]
