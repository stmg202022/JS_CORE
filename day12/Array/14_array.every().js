const lists = [54, 45, 23, 8, 500];

console.log(lists.every((ele, indx) => ele % 2 === 0));

const nums = [475, -5345, 594, 49, -34, 45, -5];
console.log(nums.filter((n, i) => n > 0).every((el, i) => el < 1000)); //true

console.log([1, , 3].every((x) => x !== undefined)); // true
console.log([2, , 2].every((x) => x === 2)); // true

const objArray = {
  length: 4,
  1: "ram",
  2: "sam",
  3: "hari",
  4: "gita",
};

const check = Array.prototype.every.call(
  objArray,
  (el) => typeof el === "string"
);
console.log("all are string", check);
