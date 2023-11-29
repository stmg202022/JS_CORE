// Array
// 1. Store mix of Data type
// 2. Zero index
// 3. Array copy operation ( shallow copies)
// 4. Not associative array

// ==================================================== built in Array====================================================
// console.log(Array); // [Function: Array]  // Array () { [native code]}
// console.log(Array.constructor); // [Function: Function] // Function () { [native code ]}
// console.log(Array.prototype); //Object(0) []  // [constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]

// ==================================================== instance ====================================================
const ary = new Array();
console.log(ary.constructor); //ƒ Array() { [native code] }   // [Function: Array]
console.log(ary.constructor === Array); //true
console.log(ary instanceof Array); // true
console.log(ary.prototype); //undefined
console.log(ary); // []  > [[prototype]]  <= This is build in property of an array
// now
// ====================================================user create property====================================================
ary.name = "samson";
console.log(ary); // [ name: 'samson' ]
ary[0] = "ram"; // Zero index
console.log(ary); // [ 'ram', name: 'samson' ]
ary.obj = { name: "samson", age: 23, isAdmin: true };
console.log(ary);
//...etc..Mix of Data type

// ==================================================== Array copy operations (shallow copies) ====================================================
const aryOne = [1, 2, 4, 5];
//from
const aryTwo = Array.from(aryOne);
console.log(aryTwo); //[1, 2, 4, 5];
//...spread operator
const aryThree = [...aryTwo];
console.log(aryThree);

const aryFour = [...aryThree, 7, 8, { name: "samson" }, false];
console.log(aryFour);

const collect = [...aryOne, ...aryTwo, ...aryThree, ...aryFour];
console.log(collect);

//...splice
const arySlice = aryOne.slice();
console.log(arySlice); //[ 1, 2, 4, 5 ]

const arySliceTwo = [...aryOne.slice(), ...aryTwo];
console.log(arySliceTwo);
// ========================================================================================================

let arr = new Array();
console.log(arr[3] === arr["3"]); //true

arr = [2, { name: "samson", age: 24 }, false, "ram", []];
// console.log(Object.keys(arr)); //[ '0', '1', '2', '3', '4' ]
console.log("::::::::::::", arr.keys()); //Object [Array Iterator] {}
// console.log(Object.values(arr)); //[ 2, { name: 'samson', age: 24 }, false, 'ram', [] ]
// console.log(arr === Object.values(arr)); //false

// ===================================================for...of and iterators(arr.keys())===================================================
const myArr = ["sam", 2, false, {}];
const iterators = myArr.keys();
console.log(iterators); //Object [Array Iterator] {}
for (const k of iterators) {
  console.log(`${k} : ${myArr[k]}`);
}
// ===================================================
for (const item of myArr) {
  console.log(item);
}

// ===================================================forEach ===================================================
// 1. return undefine;
// 2. can not use break or continue for throwing error
// 3. synchronous function (can not use promises, async/await)\

const returnValue = myArr.forEach((item, indx) => {
  console.log(`${indx} : ${item} `);
  return item;
});
console.log(returnValue); //undefined

const evenAry = [2, 4, 6, 8, 10, 12];

evenAry.forEach((arr, i) => {
  const sqrt = arr * arr;
  console.log(sqrt);
});

// ===========================
// let evenNum = [];
// const data = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// data.forEach((itm, i) => {
//   if (itm % 2 === 0) {
//     console.log(itm);
//     evenNum = [...evenNum, itm];
//   }
// });
// console.log("Collected even number are: ", evenNum);

// ===========================
// let evenNum = [];
// const data = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// data.forEach((itm, i) => {
//   if (itm % 2 === 0) {
//     console.log(itm);
//     // evenNum = [...evenNum, itm];
//     evenNum.push(itm);
//   }
// });
// console.log("Collected even number are: ", evenNum);

// ===========================
// const sumNum = [2, 3, 4, 5];
// let total = 0;

// const sumFun = (total, num) => total + num;

// sumNum.forEach(async (num) => {
//   total = await sumFun(total, num);
// });
// console.log(total); //expected: 14, but // 0 (cna use promises async/awiat)

// ===================================================map return array===================================================
const mapReturn = myArr.map((itm, idx) => {
  console.log(itm);
  return itm;
  //   return; // [ undefined, undefined, undefined, undefined ]
});
console.log(mapReturn); //[ 'sam', 2, false, {} ]

const num = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNums = num.map((n, i) => {
  if (n % 2 === 0) {
    console.log("even num are:", n);
  } else {
    n = n + 1;
    console.log("even num became now: ", n);
  }

  return n;
});
console.log("even Nnumber are: ", [...new Set(evenNums)]); // even Nnumber are:  [ 2, 4, 6, 8 ]

// =========================================================There are two types of Array methods==========================
//mutate
//non-mutate

// =========================================================mutate========================================================

// Eg:
// 1. copywithin()
// syntax:
// copyWithin(target, start)
// copyWithin(target, start, end)

const array1 = ["a", "b", "c", "d", "e"];

// Copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]

console.log(array1); //[ 'd', 'd', 'e', 'd', 'e' ] //change on original array1

// =========================================================non-mutate========================================================
// Eg:
const arrOne = [3, 4, 5, 6, 7, 8];
console.log(arrOne.concat([2, 4, 5])); //[ 3, 4, 5, 6, 7,8, 2, 4, 5]

console.log(arrOne); //[ 3, 4, 5, 6, 7, 8 ]  //not changing an original arrOne

// =================================================================================================================
// =========================================================LISTS OF ARRAY METHODS==================================
// =================================================================================================================
// Array.prototype.at()
// Array.prototype.concat()
// Array.prototype.copyWithin()
// Array.prototype.find()
// Array.prototype.filter()
// Array.prototype.every()
// Array.prototype.findIndex()
// Array.prototype.flat()
// Array.prototype.flatMap()
// Array.prototype.forEach()
// Array.from()
// Array.prototype.entries()
// Array.prototype.findLast()
// Array.prototype.findLastIndex()
// Array.prototype.fill()
// Array.prototype.map()
// Array.prototype.pop()
// Array.prototype.push()
// Array.prototype.slice()
// Array.prototype.some()
// Array.prototype.keys()
// Array.prototype.values()
// Array.prototype.reduce()

// Array.fromAsync()
// Array.prototype.includes()
// Array.prototype.indexOf()
// Array.isArray()
// Array.prototype.join()
// Array.prototype.lastIndexOf()
// Array.of()
// Array.prototype.reduceRight()
// Array.prototype.reverse()
// Array.prototype.shift()
// Array.prototype.sort()
// Array.prototype.splice()
// Array.prototype.toLocaleString()
// Array.prototype.toReversed()
// Array.prototype.toSorted()
// Array.prototype.toSpliced()
// Array.prototype.toString()
// Array.prototype.unshift()
// Array.prototype.with()

// =================================================================Array.reduce()================================================
//syntax:
// reduce(callbackFn)
// reduce(callbackFn, initialValue)

//initialValue ? index = 0 : index = 1;
//acc
//cur

const results = [1, 2, 4, 5, 6];
let initialValue = 10;

const totalResults = results.reduce((acc, cur) => acc + cur, initialValue);
console.log(totalResults); //28
// ===================================without initialValue===================================
const totalResult = results.reduce((acc, cur) => acc + cur);
console.log(totalResult); //18

// ===================================max value===================================
const marks = [57, 678, 384, 748, 2546, 89];

const maxNum = marks.reduce((acc, cur) => Math.max(acc, cur), 0);
console.log(maxNum); // 2546

// =================================== working of reducer method()==============
const reducerArray = [4, 5, 6, 7, 8];

const reducerFun = (acc, cur, index) => {
  const returnValue = acc + cur;

  console.log(
    `acc:${acc} , cur:${cur}, index:${index} and returnValue: ${returnValue}`
  );

  return returnValue;
};

reducerArray.reduce(reducerFun);
// acc:4 , cur:5, index:1 and returnValue: 9
// acc:9 , cur:6, index:2 and returnValue: 15
// acc:15 , cur:7, index:3 and returnValue: 22
// acc:22 , cur:8, index:4 and returnValue: 30

const totalReducer = reducerArray.reduce(reducerFun);
console.log(totalReducer); //30

// =================================== reducer method() in objects==============
const obj = [
  {
    name: "samson",
    age: 24,
    isAdmin: true,
    salary: 30000,
  },

  {
    name: "ram",
    age: 24,
    isAdmin: true,
    salary: 30000,
  },

  {
    name: "hari",
    age: 24,
    isAdmin: true,
    salary: 30000,
  },

  {
    name: "sita",
    age: 24,
    isAdmin: true,
    salary: 30000,
  },
];

//to calculate total Salary we can make reduce methods
const totalSalary = obj.reduce((acc, curr) => acc + curr.salary, 0);
console.log(totalSalary);

// =================================== reducer method() in sparse array==============
// missing elements (skip)
// undefined (not skip)

console.log([1, 2, , 4].reduce((a, b) => a + b)); // 7
console.log([1, 2, undefined, 4].reduce((a, b) => a + b)); // NaN

// =================================== reducer method() in object and for...of==============

const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 99, // ignored by reduce() since length is 3
};
console.log(Array.prototype.reduce.call(arrayLike, (x, y) => x + y));
// 9
const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
const countedNames = Object.create(null);
for (const name of names) {
  const currCount = countedNames[name] ?? 0;
  countedNames[name] = currCount + 1;
}
console.log(countedNames); //[Object: null prototype] { Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 }

// =================================== reducer method() with concat method AND flat method==============
const nullAry = [];
nullAry.concat(7, "sam");
console.log(nullAry);

const arryLists = [2, 3, 4, [2, 2], [[3]]];
const flattened = arryLists.reduce((acc, cur) => acc.concat(cur), nullAry);
console.log(flattened); // [ 2, 3, 4, 2, 2, [ 3 ] ]

// but
const flattenedEasy = arryLists.flat();
console.log(flattenedEasy);
