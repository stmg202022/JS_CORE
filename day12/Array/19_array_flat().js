// const lists = [2, 3, 4, [6, [[7], 8], 9], 10];

// const flatListsOne = lists.flat();
// console.log(flatListsOne); //[ 2, 3, 4, 6, [ [ 7 ], 8 ], 9, 10 ]

// const flatListsTwo = flatListsOne.flat();
// console.log(flatListsTwo); //[2, 3, 4, 6, [7], 8, 9, 10];

// //flat by n or Infinity
// const flatLists = [3, 2, [[[5]]], 8, 9];
// // console.log(flatLists.flat(3)); //[ 3, 2, 5, 8, 9 ]
// console.log(flatLists.flat(Infinity)); //[ 3, 2, 5, 8, 9 ]

// //flat on sparse array
// const sparseLists = [1, 2, , 4, 5];
// console.log(sparseLists.flat()); //[ 1, 2, 4, 5 ]

// const sparseListTwo = [1, [2, , [, , 8, [9], 10], 4], 5];
// console.log(sparseListTwo.flat(3)); // [1, 2, 8, 9, 10, 4, 5];

// // =========================================================array.flatMap() ==========================================

const lists = [2, 3, 4, [6, [[7], 8], 9], 10];

const flatMapArr = lists.flatMap((ele) => (ele === 2 ? [2, 2, 2] : ele));
console.log(flatMapArr); //[ 2, 2, 2, 3, 4, 6, [ [ 7 ], 8 ], 9, 10 ]

const arr1 = ["it's Sunny in", "", "California"];
console.log(arr1.flatMap((x) => x.split(" ")));
