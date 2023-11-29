const animals = ["cow", "cat", "dog", "cow", "cat"];
console.log(animals.reverse()); // [ 'cat', 'cow', 'dog', 'cat', 'cow' ]

const array1 = ["one", "two", "three"];
console.log(array1.reverse()); // [ 'three', 'two', 'one' ]

const reverted = [...array1].reverse();
console.log(reverted); // [ 'one', 'two', 'three' ]  //it is unchange in reverse() method but

const numbers = [3, 2, 4, 1, 5];

const reverted2 = [...numbers].reverse(); // // [...numbers] creates a shallow copy, so reverse() does not mutate the original
console.log(reverted2); //[ 5, 1, 4, 2, 3 ]
console.log(numbers); // [ 3, 2, 4, 1, 5 ]

console.log([1, , 3].reverse()); // [3, empty, 1]
console.log([1, , 3, 4].reverse()); // [4, 3, empty, 1]
