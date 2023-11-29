//syntax
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)

//Splice create a another array as a sun array of array.

//===================================================
const months = [
  "jan",
  "feb",
  "march",
  "april",
  "may",
  "jun",
  "junly",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];
console.log(months.splice(1, 0, "Feb")); //feb become 2
console.log(months);
//num of deleteItems is 0
// [
//   "jan",
//   "Feb",
//   "feb",
//   "march",
//   "april",
//   "may",
//   "jun",
//   "junly",
//   "aug",
//   "sep",
//   "oct",
//   "nov",
//   "dec",
// ];

console.log(months.splice(3, 2, "samson", "tmg")); //feb become 2
console.log(months);
// march and april deleted
// [
//   "jan",
//   "Feb",
//   "feb",
//   "samson",
//   "tmg",
//   "may",
//   "jun",
//   "junly",
//   "aug",
//   "sep",
//   "oct",
//   "nov",
//   "dec",
// ];

console.log(months.splice(3)); // ["samson", "tmg", "may", "jun", "junly", "aug", "sep", "oct", "nov", "dec"];
// deleted before 3 index

const monthsTwo = ["jan", "feb", "march", "april", "may", "jun"];

console.log(monthsTwo.splice(1, 0, "feb")); //
console.log(monthsTwo.splice(1, 0, "samsonTmg")); //
console.log(monthsTwo); // ["jan", "samsonTmg", "feb", "feb", "march", "april", "may", "jun"];
console.log(monthsTwo.splice(1, 1)); // [ 'samsonTmg' ]

// ============================================sparse array==============================
const arr = [1, , 3, 4, , 6];
console.log(arr.splice(1, 2)); // [ <1 empty item>, 3 ]
console.log(arr); // [ 1, 4, <1 empty item>, 6 ]
