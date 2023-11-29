const array = ["a", "b", "c"];

console.log(array.keys()); //Object [Array Iterator] {}  // object
console.log(Object.keys(array)); // [ '0', '1', '2' ]  //object

const iterator = array.keys();

for (const key of iterator) {
  console.log(key);
}

//  0
//  1
//  2

console.log([...array.keys()]); //[ 0, 1, 2 ]
console.log(typeof [...array.keys()]); //[ 0, 1, 2 ]  //typeof

const arr = ["a", , "c"];
console.log(arr.keys); // [Function: keys]
console.log(Object.keys(arr)); // [ '0', '2' ]
