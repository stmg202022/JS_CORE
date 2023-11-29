//generic object
const obj = new Object();
// console.log(obj); //{}

//user defined
const MyObj = function (myName) {
  this.myName = myName;

  this.getName = function () {
    console.log(this.myName);
  };
};

const myObj = new MyObj("samson");
// myObj.getName(); //samson

//null object
const nullObj = Object.create(null);
// console.log(nullObj.constructor); //undefined
// console.log(nullObj); //[Object: null prototype] {}
nullObj.toString = Object.prototype.toString;
// console.log(nullObj.toString()); //'[object Object]'
// Object.setPrototypeOf(nullObj, Object.prototype) //revert to normal
// or
const obj2 = { __proto__: null };

//build in propertiess
// console.log(myObj instanceof MyObj); //true
// console.log(myObj.hasOwnProperty("name")); //false
myObj.age = 23;
// console.log(myObj.hasOwnProperty("age")); // true
// console.log(myObj.valueOf()); //MyObj { myName: 'samson', getName: [Function (anonymous)], age: 23 }
// console.log(myObj.toString() === myObj.toLocaleString()); //true
