//build in Object(Obiect()) vs user defined Objects(Practise it in Browser console too)
//Both are the constroctor of window. So we can used them as a bluePrint of them // can create an instance of them.
//They both conatain [prototype] of same.

// 1
console.log(Object()); // output: {}
// vs
function Return() {
  return {};
}
console.log(Return()); // output: {}

// 2
const instanceOfObject = new Object();
console.log(instanceOfObject); //output: {}

const returnInstance = new Return();
console.log(returnInstance); //output: {}

// 3
const newObjInstance = new Object({ name: "samson", age: 24 });
console.log(newObjInstance); // output: { name: "samson", age: 24 }

const DefinedCon = function (name, age) {
  this.name = name;
  this.age = age;

  return { name, age };
};
const InsOfDefinedCon = new DefinedCon("samson", 24);
console.log(InsOfDefinedCon); //output: { name: "samson", age: 24 }

// We can create a user defined Object Constroctor by using many ways but generally we use:
// 1.function decleration controctor
// 2.function expression constroctor
// 3.ES6 class constroctor

// ================================================================================
