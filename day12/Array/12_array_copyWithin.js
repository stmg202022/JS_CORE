const arrayLists = [1, 2, 3, 4, 5, 6];

// const copywithin = arrayLists.copyWithin(0, 3, 4);
const copywithin = arrayLists.copyWithin(1, 3, 4); // [ 1, 4, 3, 4, 5, 6 ]
console.log(copywithin);

// syntax
// copyWithin(target, start)
// copyWithin(target, start, end)

// with sparse array
console.log([1, , 3].copyWithin(2, 1, 2)); // [1, empty, empty]
