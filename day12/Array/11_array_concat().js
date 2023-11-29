const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);
// ["a", "b", "c", "d", "e", "f"]

const array4 = array1.concat(array2, array3);
console.log(array4);
// [
//     'a', 'b', 'c', 'd',
//     'e', 'f', 'a', 'b',
//     'c', 'd', 'e', 'f'
//  ]

//sparse array
console.log([1, , 3].concat([4, 5])); //  1, <1 empty item>, 3, 4, 5 ]
console.log([1, 2].concat([3, , 5])); // [ 1, 2, 3, <1 empty item>, 5 ]
