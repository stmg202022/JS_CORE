// // =========================================================There are two types of Array methods==========================
// //mutate
// //non-mutate

// // =========================================================mutate========================================================

// // Eg:
// // 1. copywithin()
// // syntax:
// // copyWithin(target, start)
// // copyWithin(target, start, end)

// const array1 = ["a", "b", "c", "d", "e"];

// // Copy to index 0 the element at index 3
// console.log(array1.copyWithin(0, 3, 4));
// // Expected output: Array ["d", "b", "c", "d", "e"]

// // Copy to index 1 all elements from index 3 to the end
// console.log(array1.copyWithin(1, 3));
// // Expected output: Array ["d", "d", "e", "d", "e"]

// console.log(array1); //[ 'd', 'd', 'e', 'd', 'e' ] //change on original array1

// // =========================================================non-mutate========================================================
// // Eg:
// const arrOne = [3, 4, 5, 6, 7, 8];
// console.log(arrOne.concat([2, 4, 5])); //[ 3, 4, 5, 6, 7,8, 2, 4, 5]

// console.log(arrOne); //[ 3, 4, 5, 6, 7, 8 ]  //not changing an original arrOne
