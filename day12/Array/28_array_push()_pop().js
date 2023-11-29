//syntax
// push()
// push(element1)
// push(element1, element2)
// push(element1, element2, /* …, */ elementN)

const animals = ["cow", "cat", "dog", "cow", "cat"];

console.log(animals.push("cow")); // 6
console.log(animals.length); //
console.log(animals); // [ 'cow', 'cat', 'dog', 'cow', 'cat', 'cow' ]

console.log(animals.push("chickens", "cats", "dogs")); // 9
console.log(animals); // ["cow", "cat", "dog", "cow", "cat", "cow", "chickens", "cats", "dogs"];

//...spreade operators
const vegetables = ["parsnip", "potato"];
console.log(animals.push(...vegetables)); // 11
console.log(animals);
// [
//   "cow",
//   "cat",
//   "dog",
//   "cow",
//   "cat",
//   "cow",
//   "chickens",
//   "cats",
//   "dogs",
//   "parsnip",
//   "potato",
// ];
