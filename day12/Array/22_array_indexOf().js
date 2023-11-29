const animals = ["cat", "cow", "rat", "dog"];
console.log(animals.indexOf("dog")); //3
console.log(animals.indexOf("parrot")); // -1 //not found

// indexOf(searchElement)
// indexOf(searchElement, fromIndex)

console.log(animals.indexOf("dog", 4)); // -1

//
const array = [NaN];
array.indexOf(NaN); // -1

console.log([1, , 3].indexOf(undefined)); // -1
