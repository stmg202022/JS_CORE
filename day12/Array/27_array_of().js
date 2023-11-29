// syntax:
// Array.of()
// Array.of(element1)
// Array.of(element1, element2)
// Array.of(element1, element2, /* …, */ elementN)

console.log(Array.of("foo", 2, "bar", true)); // ["foo", 2, "bar", true]
console.log(Array.of()); // []
console.log(Array.of(8)); // [8]
console.log(Array.of(1, 2, 3)); // [1, 2, 3]

console.log(Array(8)); //[ <8 empty items> ]
console.log(Array(1, 2, 3)); // [1, 2, 3]

console.log(Array.of(undefined)); // [undefined]

console.log(Array.of.call({}, 1, 3)); // [ 1., 3 ]
