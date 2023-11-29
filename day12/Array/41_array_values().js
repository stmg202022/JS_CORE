const animals = ["dog", "cat", "cow", "tiger", "cow", "lion"];

for (const value of animals) {
  console.log(value);
}

// dog
// cat
// cow
// tiger
// cow
// lion

const animalsValues = animals.values();
console.log(animalsValues); //Object [Array Iterator] {}
console.log(Object.values(animals)); // [ 'dog', 'cat', 'cow', 'tiger', 'cow', 'lion' ]
console.log(Object.keys(animals)); // [ '0', '1', '2', '3', '4', '5' ]

//
console.log(animalsValues.next().value); // dog
console.log(animalsValues.next().value); // cat

//==========================================================================
const arr = ["a", "b", "c", "d", "e"];
const values = arr.values();
// for (const letter of values) {
//   console.log(letter);
// }
// "a" "b" "c" "d" "e"

//================once output is done then next time no repitation for execution of item...in arr.values()  //in iterations============
for (const letter of values) {
  console.log("break:================= ", letter);
  if (letter === "b") {
    break;
  }
}

// break:=================  a
// break:=================  b

for (const letter of values) {
  console.log(letter);
}

// c
// d
// e

// ================================================//mutations during iterations//=======================
const arrTwo = ["a", "b", "c", "d", "e"];
const iterator = arrTwo.values();
console.log(iterator); // Array Iterator { }
console.log(iterator.next().value); // "a"
arrTwo[1] = "n";
console.log(iterator.next().value); // "n"

// ================================================sparse array========================
for (const element of [, "a"].values()) {
  console.log(element);
}

// undefined
// a
