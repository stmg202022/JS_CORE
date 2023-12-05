// ===========================================What is Object prototype ?  what are Object's build in prototypes?==================================
//  Object inherit it's properties and method (features) to one another is called js object prototypes.

// create simple obj with our own created it's property and methods.
const userObj = {
  userName: "samson",
  userInfo: function () {
    console.log(this.userName);
  },
};

console.log(userObj); // { userName: 'samson', userInfo: [Fuction: userInfo] } // object
userObj.userInfo(); // samosn

// what is prototype?
// * But object have it's build in properties which is called protypes of an it's. //[[prototype]]
// we can see it the browser object console as this
// __defineGetter__;
// __defineSetter__;
// __lookupGetter__;
// __lookupSetter__;
// __proto__;
// city;
// constructor;
// greet;
// hasOwnProperty;
// isPrototypeOf;
// propertyIsEnumerable;
// toLocaleString;
// toString;
// valueOf;

// What does we can do with prototypes ?
// We can use them in objects
// Eg:
console.log(userObj.toString()); //[object Object]
console.log("toLocaleString", userObj.hasOwnProperty()); //false
console.log(userObj.constructor()); //{}

// ===========================================What is Object prototype chain?==================================
// and prototype itsef have its own prototype making what's called a prototype chain. (inherit)
//and the prototype end when we reach a prototype that has null value of it's own prototype.

// ===========================================How Object search it's own propertie in js?==================================

// 1.first, Object look for search property at object itself. //if not found
//2. Secondly, Object look  for search property at prototype of it's own.
//3. thirdly, Object look for search property at property's of it's own property....and so on untill the undefined return.

// Eg:

const searchProp = {
  userName: "samson tmg",
  info() {
    console.log(this.userName);
  },
};

//search and find on it's own propertie.
console.log(searchProp.userName);
// search propertie find on it's own  prototype chain
console.log(searchProp.toString()); //
//
// property serch on it's own // if not // => go for search in prototype chain

// ===========================================What is shadowing properties in js(define a property with same name)?==================================
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes#shadowing_properties
//  Obj searchiny property first at object it's own,
//  if not found then it goes to searching for that propertly at it's own [prototype] ,
//  Agian if that property is not found then it goes at [prototype chain] for searching,
//  At last if that property is not found at any [prototype] then protype become null and than property return with undefined value.
//  Due to this reason object overide it's own prototype property when we define a property in an object,
//  when a property with the same name is defined in the object's prototype.
//  which is called shadowing properties of an object in js.
// Eg:

const user = {
  uName: "samson",
  age: 24,
  toString: function () {
    console.log("Name:" + this.uName + " Age:" + this.age);
  },
};

user.toString(); // toString is same named property of an Ojbect prototype.

// EG:
function Obj(uName) {
  this.uName = uName;
}

//instance
const user1 = new Obj("user1");
user1.toString = function () {
  console.log("user from function: " + this.uName + " " + user1.uAge); //uAge is return undefined as uAge is not defined in any property, prototype or prototype chain
  console.log("protype property " + user1.constructor);
};
user1.toString();

// ===========================================How to create a properties inside prototype of objects?==================================

// * by using  Obeect.create()
// * by using Object.assign()

const userPrototype = {
  uName: "userName",
  uAge: 24,
};

const userinfo = Object.create(userPrototype);
console.log(userinfo); // {} // see on browser console
// now userinfo contain all the properties of userPrototype inside userinfo [prototype] so,
console.log(userinfo.uName); //userName

//
//

const Student = {
  getName() {
    console.log("My name is: " + this.name + " " + this.age);
  },
  scl: "Manamaiju",
};

function Teacher(name, age) {
  this.name = name;
  this.age = age;
}
Object.assign(Teacher.prototype, Student);

const teacher = new Teacher("samson", 23);
teacher.getName(); //My name is: samson 23

// ===========================================Check instance of an Object==================================

// Creating an object using object literal notation
const myObjectLiteral = {};

// Creating an object using the Object constructor
const myObjectConstructor = new Object();

// Checking if the objects are instances of Object
const isLiteralInstance = myObjectLiteral instanceof Object;
const isConstructorInstance = myObjectConstructor instanceof Object;

console.log(isLiteralInstance); // Output: true
console.log(isConstructorInstance); // Output: true
