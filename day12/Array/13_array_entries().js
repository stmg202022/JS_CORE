//==================== array.entries()============================
//it generate array iteratorz [idx, value]
const arrayLists = [1, 2, 3, 4, 5];
const iterators = arrayLists.entries();
console.log(iterators); //Array Iterator {}  /// Object [Array Iterator] {}
console.log(iterators.next()); // { value: [ 0, 1 ], done: false }
console.log(iterators.next().value); // [ 1, 2 ]
console.log(iterators.next().value); // [ 2, 3 ]
console.log(iterators.next().value); // [ 3, 4 ]

//
// for (const [idx, list] of arrayLists.entries()) {
//   console.log("idx:", idx, "list", list);
// }
// idx: 0 list 1
// idx: 1 list 2
// idx: 2 list 3
// idx: 3 list 4
// idx: 4 list 5

//
// for (const list of arrayLists.entries()) {
//     console.log(list);
// }
// [ 0, 1 ]
// [ 1, 2 ]
// [ 2, 3 ]
// [ 3, 4 ]
// [ 4, 5 ]

//
//sparse array
for (const list of [5, , 8, "9"].entries()) {
  console.log(list);
}

// [ 0, 5 ]
// [ 1, undefined ]
// [ 2, 8 ]
// [ 3, '9' ]

//
//non-array object
const obj = {
  length: 3,
  0: 1,
  1: 6,
  2: 3,
  3: 7,
};

// console.log(Array.prototype.entries.call(obj));   Object [Array Iterator] {}
for (const item of Array.prototype.entries.call(obj)) {
  console.log(item);
}
// [0, 1][(1, 6)][(2, 3)];

const Lists = [1, 2, 3, 4, 5];
for (const [idx, list] of Lists.entries()) {
  if (idx === 3) {
    console.log(list); // 4
  }
}
