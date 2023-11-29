// // =================================================================Array.reduce()================================================
// //syntax:
// // reduce(callbackFn)
// // reduce(callbackFn, initialValue)

// //initialValue ? index = 0 : index = 1;
// //acc
// //cur

// const results = [1, 2, 4, 5, 6];
// let initialValue = 10;

// const totalResults = results.reduce((acc, cur) => acc + cur, initialValue);
// console.log(totalResults); //28
// // ===================================without initialValue===================================
// const totalResult = results.reduce((acc, cur) => acc + cur);
// console.log(totalResult); //18

// // ===================================max value===================================
// const marks = [57, 678, 384, 748, 2546, 89];

// const maxNum = marks.reduce((acc, cur) => Math.max(acc, cur), 0);
// console.log(maxNum); // 2546

// // =================================== working of reducer method()==============
// const reducerArray = [4, 5, 6, 7, 8];

// const reducerFun = (acc, cur, index) => {
//   const returnValue = acc + cur;

//   console.log(
//     `acc:${acc} , cur:${cur}, index:${index} and returnValue: ${returnValue}`
//   );

//   return returnValue;
// };

// reducerArray.reduce(reducerFun);
// // acc:4 , cur:5, index:1 and returnValue: 9
// // acc:9 , cur:6, index:2 and returnValue: 15
// // acc:15 , cur:7, index:3 and returnValue: 22
// // acc:22 , cur:8, index:4 and returnValue: 30

// const totalReducer = reducerArray.reduce(reducerFun);
// console.log(totalReducer); //30

// // =================================== reducer method() in objects==============
// const obj = [
//   {
//     name: "samson",
//     age: 24,
//     isAdmin: true,
//     salary: 30000,
//   },

//   {
//     name: "ram",
//     age: 24,
//     isAdmin: true,
//     salary: 30000,
//   },

//   {
//     name: "hari",
//     age: 24,
//     isAdmin: true,
//     salary: 30000,
//   },

//   {
//     name: "sita",
//     age: 24,
//     isAdmin: true,
//     salary: 30000,
//   },
// ];

// //to calculate total Salary we can make reduce methods
// const totalSalary = obj.reduce((acc, curr) => acc + curr.salary, 0);
// console.log(totalSalary);

// // =================================== reducer method() in sparse array==============
// // missing elements (skip)
// // undefined (not skip)

// console.log([1, 2, , 4].reduce((a, b) => a + b)); // 7
// console.log([1, 2, undefined, 4].reduce((a, b) => a + b)); // NaN

// // =================================== reducer method() in object and for...of==============

// const arrayLike = {
//   length: 3,
//   0: 2,
//   1: 3,
//   2: 4,
//   3: 99, // ignored by reduce() since length is 3
// };
// console.log(Array.prototype.reduce.call(arrayLike, (x, y) => x + y));
// // 9
// const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
// const countedNames = Object.create(null);
// for (const name of names) {
//   const currCount = countedNames[name] ?? 0;
//   countedNames[name] = currCount + 1;
// }
// console.log(countedNames); //[Object: null prototype] { Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 }

// // =================================== reducer method() with concat method AND flat method==============
// const nullAry = [];
// nullAry.concat(7, "sam");
// console.log(nullAry);

// const arryLists = [2, 3, 4, [2, 2], [[3]]];
// const flattened = arryLists.reduce((acc, cur) => acc.concat(cur), nullAry);
// console.log(flattened); // [ 2, 3, 4, 2, 2, [ 3 ] ]

// // but
// const flattenedEasy = arryLists.flat();
// console.log(flattenedEasy); //[ 2, 3, 4, 2, 2, [ 3 ] ]
