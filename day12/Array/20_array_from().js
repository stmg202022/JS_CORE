// const ary = Array.from("samson");
// console.log(ary); //[ 's', 'a', 'm', 's', 'o', 'n' ]

// const num = [3, 5, 6, 7, 8, 9];
// const dubNum = Array.from(num, (x) => x * 2);
// console.log(dubNum); //[ 6, 10, 12, 14, 16, 18 ]

// const myArray = ["foo", "bar", "baz", "foo"];
// const set = new Set(myArray);
// console.log(set); // Set(3) { 'foo', 'bar', 'baz' }
// console.log(Array.from(set)); //[ 'foo', 'bar', 'baz' ]

// const map = new Map([
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ]);

// console.log(map); //Map(3) { 1 => 2, 3 => 4, 5 => 6 }
// console.log(Array.from(map)); //[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]

// //
function f() {
  return Array.from(arguments);
}

console.log(f(1, 2, 3)); // [ 1, 2, 3 ]

console.log(new Set("samson")); // Set(5) { 's', 'a', 'm', 'o', 'n' }
console.log(Array.from(new Set("samson"))); // [ 's', 'a', 'm', 'o', 'n' ]

const map2 = new Map([
  [2, "samson"],
  [3, "Tmg"],
]);
console.log(map2);

console.log(Array.from(map2.values())); //[ 'samson', 'Tmg' ]

// ====================================================================Array.fromAsync() =====================================
