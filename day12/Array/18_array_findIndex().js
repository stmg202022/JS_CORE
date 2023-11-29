//findIndex
const lists = [2, 3, 4, 6, 7, 8, 9, 10];

const eleIndex = lists.findIndex((ele) => ele > 7);
console.log(eleIndex); // 5  //is indxe of 8

//array.findLast()
const findElementFromLast = lists.findLast((ele) => {
  return ele < 8;
});
console.log(findElementFromLast); // 7

//array.findLastIndex()
const findElementIndexFromLast = lists.findLastIndex((ele) => {
  return ele < 10;
});
console.log(findElementIndexFromLast); // 6
