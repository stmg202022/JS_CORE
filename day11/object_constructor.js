const object1 = {};
object1.constructor === Object; // true

const object2 = new Object();
object2.constructor === Object; // true

const array1 = [];
array1.constructor === Array; // true

const array2 = new Array();
array2.constructor === Array; // true

const n = 3;
n.constructor === Number; // true

console.log(Object.getPrototypeOf(n));

//===================================assigning constructor=================================
const arr = [];
arr.constructor = String;
arr.constructor === String; // true
arr instanceof String; // false
arr instanceof Array; // true

// const foo = new Foo();
// foo.constructor = "bar";
// foo.constructor === "bar"; // true

// etc.
//===================================object have no its own constructor property=================================
// so
const obj = {
  name: "samson",
  age: 23,
  isAdmin: false,
};
// Object.hasOwn(obj, "name");
// true
// Object.hasOwn(obj, "constructor");
// false
// Object.hasOwn(obj, "constructor");
// false
// obj
// {name: 'samson', age: 24, isAdmin: false}age: 24isAdmin: falsename: "samson"[[Prototype]]: Object
// Object.hasOwn(Object.getPrototypeOf(obj), "constructor")
// true
