//Object are the collections of related data or functions(which we said properties and methods of an thats user called )

// This is instance of js build-in object `Object`
const student = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};
console.log(student);
student.bio();
console.log(student.name[0]);
console.log(student.age);

// *
student["eyes"] = "hazel";
student.farewell = function () {
  console.log("Bye everybody!");
};
console.log(student["eyes"]);
student.farewell();

// *
const myDataName = "samson";
student[myDataName] = myDataName;
console.log(myDataName);

// ===============================================================================Object Constructor=====================================
// 1. It is used to make bluePrint of an objects.
// 2. So we can create an instance of an this objects unsing `new` keyword
// 3. Constructor allocate a specific memory spaces.
// 4. When we create it's instances or copy of it's using `new` keyword then each instances allocates each new memory spaces.
// 5. Actually Constructor created for making resuable code/objects.
// 6. Constructor naming conventions should be start from capital letter.

// * Eg:1
const ReturnObj = function (name) {
  const obj = {};
  obj.name = name;
  obj.info = function () {
    console.log(`Hello i am ${this.name}`);
  };

  return obj;
};

// * Instances
const student1 = new ReturnObj("samson");
console.log(student1); // { name: "samson", info: [function (anonymous)]}
student1.info(); //Hello i am samson

// * EG:2

function GenObj(name, age) {
  this.name = name;
  this.age = age;
  this.info = function () {
    console.log(`Hello i am ${this.name}. I am ${this.age} yrs old.`);
  };
}

const student2 = new GenObj("samson", 24);
console.log(student2); // genObj { name: 'samson', age: 24, info: [Function (anonymous)] }
student2.info();
student2.bio = "kathmandu";
console.log(student2.bio); //kathmandu

// ===============================================================================Build in Object=====================================
// Note that built in objects and APIs don't always create object instances automatically.
// Eg: Notification APIs:  https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API
// const myNotification = new Notification("Hello!");

// *
// Every time you create a string in your code, that string is automatically created as an instance of String,
// and therefore has several common methods and properties available on it.
// Eg:
let myName = "samson"; //it is instance of String objects.
console.log(myName.split("")); //[ 's', 'a', 'm', 's', 'o', 'n' ]

// next:
const myName2 = new String("samosntmg");
console.log(myName2);

// *
// For each webpage loaded, an instance of Document is created, called document,
//which represents the entire page's structure, content, and other features such as its URL
// Eg:
// const myDiv = document.createElement("div");
// const myVideo = document.querySelector("video");

// ===============================================================================Build in Object=====================================
// There are also some Build in Object which we will learn latter...
