// const arrayLists = [5, 12, 8, 130, 44];

// const found = arrayLists.find((element) => element > 10);

// console.log(found);
// // Expected output: 12

//sparse array
const sparseLists = [2, 4, , , 6, 7, 8];

const findList = sparseLists.find((ele, indx) => {
  console.log("Visited index", indx, "with value", ele);
});
// console.log(sparseLists);
console.log(findList);

const lists = [3, 4, 5, 6, 7, 8];
lists.find((value, index) => {
  // Delete element 5 on first iteration
  if (index === 0) {
    console.log("Deleting array[5] with value", lists[5]);
    delete lists[5];
  }
  // Element 5 is still visited even though deleted
  console.log("Visited index", index, "with value", value);
});

const arrayLike = {
  length: 3,
  "-1": 0.1, // ignored by find() since -1 < 0
  0: 2,
  1: 7.3,
  2: 4,
};
console.log(Array.prototype.find.call(arrayLike, (x) => !Number.isInteger(x))); // 7.3
