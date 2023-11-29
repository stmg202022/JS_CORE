//IT   IS A MUTABLE METHODS AS IT CHANGES THE ORIGINAL ARRAY
// syntax:
// array.fill(value)
// array.fill(value, start)
// array.fill(value, start, end)

// array.fill(value)
const arrLists = [1, 3, 5, "sam", false];
const oneArray = arrLists.fill(1);
console.log(oneArray); //[ 1, 1, 1, 1, 1 ] original array changes
console.log(arrLists); //[1, 1, 1, 1, 1]

// array.fill(value, start)
const fillFromFour = arrLists.fill(2, 3);
console.log(fillFromFour); //[ 1, 1, 1, 2, 2 ]
console.log(arrLists); //[ 1, 1, 1, 2, 2 ]

// array.fill(value, start, end)
// const fillFromTo = arrLists.fill(3, 4, 5);
// console.log(fillFromTo); //[ 1, 1, 1, 2, 3 ]
// console.log(arrLists); //[ 1, 1, 1, 2, 3 ]

console.log(arrLists.length); // 5

const fillFromTo = arrLists.fill(3, 4, arrLists.length);
console.log(fillFromTo); //[ 1, 1, 1, 2, 3 ]
console.log(arrLists); //[ 1, 1, 1, 2, 3 ]

const checkLessIndx = arrLists.fill(50, -3, 7);
console.log(checkLessIndx); //[ 1, 1, 50, 50, 50 ]
console.log(arrLists); //[ 1, 1, 50, 50, 50 ]

//square Array
const sqrArr = new Array(3);
console.log(sqrArr);

for (let i = 0; i < sqrArr.length; i++) {
  sqrArr[i] = new Array(3).fill(1);
}
console.log(sqrArr);
console.log(sqrArr[0][0]);
console.log(sqrArr[0][1]);
console.log(sqrArr[0][2]);
console.log((sqrArr[1][0] = 2));
console.log((sqrArr[1][1] = 2));
console.log((sqrArr[1][2] = 2));
console.log((sqrArr[2][0] = 3));
console.log((sqrArr[2][1] = 3));
console.log((sqrArr[2][2] = 3));
console.log(sqrArr);

const square = new Array(4);
for (let i = 0; i < square.length; i++) {
  square[i] = new Array(4);
  for (let j = 0; j < square.length; j++) {
    square[i][j] = i;
    // square[i].fill(i);
  }
}
console.log(square);
console.log(square.flat());
