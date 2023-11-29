const arrayLists = [false, true, "samson", 23, {}, [null]];
console.log(arrayLists.at(0)); // false
console.log(arrayLists.at(-1)); //null
console.log(arrayLists.at(arrayLists.length - 1)); // null
console.log(arrayLists[-1]); //undefined

//arrayLike objects

const arrayLikeObj = {
  length: 2,
  0: "a",
  1: "b",
  2: "c",
};

console.log(Array.prototype.at.call(arrayLikeObj, 0)); // "a"
console.log(Array.prototype.at.call(arrayLikeObj, 2)); //undefined
