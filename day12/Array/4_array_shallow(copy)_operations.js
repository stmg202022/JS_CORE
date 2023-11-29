// // ==================================================== Array copy operations (shallow copies) ====================================================
// const aryOne = [1, 2, 4, 5];
// // ======================from()======================
// const aryTwo = Array.from(aryOne);
// console.log(aryTwo); //[1, 2, 4, 5];
// //======================...spread operator======================
// const aryThree = [...aryTwo];
// console.log(aryThree);

// const aryFour = [...aryThree, 7, 8, { name: "samson" }, false];
// console.log(aryFour);

// const collect = [...aryOne, ...aryTwo, ...aryThree, ...aryFour];
// console.log(collect);

// //======================...splice()======================
// const arySlice = aryOne.slice();
// console.log(arySlice); //[ 1, 2, 4, 5 ]

// const arySliceTwo = [...aryOne.slice(), ...aryTwo];
// console.log(arySliceTwo);
// // ========================================================================================================

// let arr = new Array();
// console.log(arr[3] === arr["3"]); //true

// arr = [2, { name: "samson", age: 24 }, false, "ram", []];

// // console.log(Object.keys(arr)); //[ '0', '1', '2', '3', '4' ]

// console.log("::::::::::::", arr.keys()); //Object [Array Iterator] {}

// // console.log(Object.values(arr)); //[ 2, { name: 'samson', age: 24 }, false, 'ram', [] ]
// // console.log(arr === Object.values(arr)); //false
