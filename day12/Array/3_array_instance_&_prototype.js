// // ==================================================== instance ====================================================
// const ary = new Array();
// console.log(ary.constructor); //ƒ Array() { [native code] }   // [Function: Array]
// console.log(ary.constructor === Array); //true
// console.log(ary instanceof Array); // true
// console.log(ary.prototype); //undefined
// console.log(ary); // []  > [[prototype]]  <= This is build in property of an array
// i.e Build in property of an array are called prototype of that array::

// // now
// // ====================================================user create property====================================================
// ary.name = "samson";
// console.log(ary); // [ name: 'samson' ]
// ary[0] = "ram"; // Zero index
// console.log(ary); // [ 'ram', name: 'samson' ]
// ary.obj = { name: "samson", age: 23, isAdmin: true };
// console.log(ary);
// //...etc..Mix of Data type
