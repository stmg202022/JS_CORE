// syntax
// lastIndexOf(searchElement)
// lastIndexOf(searchElement, fromIndex)

const animals = ["cow", "cat", "dog", "cow", "cat"];

console.log(animals.lastIndexOf("cow")); // 3
console.log(animals.lastIndexOf("cat")); // 4
console.log(animals.lastIndexOf(7)); // -1

const num = [2, 5, 9, 2];
console.log(num.lastIndexOf(2)); // 3
console.log(num.lastIndexOf(8)); // -1
console.log(num.lastIndexOf(2, 3)); // 3
console.log(num.lastIndexOf(2, 2)); //0
console.log(num.lastIndexOf(2, -2)); // 0
console.log(num.lastIndexOf(2, -1)); //3

//
const array = [NaN];
console.log(array.lastIndexOf(NaN)); // -1
console.log([1, , 3].lastIndexOf(undefined)); // -1
