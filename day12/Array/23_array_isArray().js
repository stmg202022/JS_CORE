Array.isArray(Array.prototype); // Array.prototype itself is an array:

console.log(Array.isArray([3, 4, 5])); // true

console.log(Array.isArray("[]"));
// false

console.log(Array.isArray(new Array(5))); // true

console.log(Array.isArray(new Int16Array([15, 33]))); // false

// all following calls return true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array("a", "b", "c", "d"));
Array.isArray(new Array(3));

// all following calls return false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
console.log(Array.isArray("Array"));
Array.isArray(20);
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
// Array.isArray({ __proto__: Array.prototype });
