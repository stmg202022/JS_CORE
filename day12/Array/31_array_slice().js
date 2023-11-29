//syntax:
// slice()
// slice(start)
// slice(start, end)

const animals = ["cow", "cat", "dog", "cow", "cat"];

console.log(animals.slice()); // [ 'cow', 'cat', 'dog', 'cow', 'cat' ]
console.log(animals.slice(2)); // [ 'dog', 'cow', 'cat' ]
console.log(animals.slice(3, 5)); // [ 'cow', 'cat' ]

const info = {
  age: 3,
  color: "white",
};

const animals2 = [info, animals];
console.log(animals2); //[ { age: 3, color: 'white' }, [ 'cow', 'cat', 'dog', 'cow', 'cat' ] ]
console.log(animals2.slice(1, 2)); // [ [ 'cow', 'cat', 'dog', 'cow', 'cat' ] ]

//
console.log([1, 2, , 4, 5].slice(1, 4)); // [2, empty, 4]
