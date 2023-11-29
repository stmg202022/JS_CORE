//syntax:
// some(callbackFn)
// some(callbackFn, thisArg)

const nums = [3, 40, 5, 67, 7, 58, 57, 34, 20, 30];

console.log(nums.some((n) => n > 50)); // true
console.log(nums.some((n) => n % 2 === 0)); // true
console.log(nums.some((n) => n % 3 === 0)); // true
console.log(nums.some((n) => n % 4 === 0)); // true
console.log(nums.some((n) => n % 5 === 0)); // true
console.log(nums.some((n) => n % 6 === 0)); // true
console.log(nums.some((n) => n % 11 === 0)); // false
console.log(nums.some((n) => n % 13 === 0)); // false

const animals = ["cow", "cat", "dog", "cow", "cat"];
console.log(animals.some((animal) => animal === "parrot")); // false
console.log(animals.some((animals) => animals === "dog")); // true

const checkFun = (arr, value) => {
  return arr.some((ele) => ele === value);
};
console.log(checkFun(animals, "cat")); // true
console.log(checkFun(animals, "elephant")); // false

//sparse  array
console.log([1, , 3].some((x) => x === undefined)); // false
console.log([1, , 1].some((x) => x !== 1)); // false
console.log([1, undefined, 1].some((x) => x !== 1)); // true
console.log([1, undefined, 1].some((x) => x === undefined)); // true
