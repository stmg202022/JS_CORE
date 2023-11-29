// //syntax
// // shift(): This method is used to delete array element from front side.

const animals = ["cow", "cat", "dog", "cow", "cat"];
console.log(animals.shift()); // cow
console.log(animals); // [ 'cat', 'dog', 'cow', 'cat' ]
console.log(animals.shift()); // cat
console.log(animals); // ["dog", "cow", "cat"]

const empty = [];
console.log(empty.shift()); // undefined

const animals2 = ["cow", "cat", "dog", "cow", "cat"];
while (typeof (i = animals2.shift()) !== "undefined") {
  console.log(i);
}

// cow
// cat
// dog
// cow
// cat
