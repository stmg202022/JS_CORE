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
// console.log(total); //expected: 14, but // 0 (can not use promises async/awiat)
