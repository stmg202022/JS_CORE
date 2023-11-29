// //it return boolean true: flase
// const lists = [2, 4, 5, 6, 7];
// console.log(lists.includes(2)); //true
// console.log(lists.includes("2")); //false
// console.log(lists.includes(4)); //true

// const animals = ["cat", "bat", "rat"];
// console.log(animals.includes("cat")); //true
// console.log(animals.includes("at")); // false

// const arr = ["a", "b", "c"];
// console.log(arr.includes("c", 3)); // false
// arr.includes("c", 100); // false

const arr = ["a", "b", "c"];

console.log(arr.includes("a", -100)); // true
console.log(arr.includes("b", -100)); // true
console.log(arr.includes("c", -100)); // true
console.log(arr.includes("b", -1)); // false
