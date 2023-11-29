//variable are container for storing Data as it assigned a memory space.

// 1. Always declare variables

// 2. Always use const if the value should not be changed

// 3. Always use const if the type should not be changed (Arrays and Objects)

// 4. Only use let if you can't use const

// 5. Only use var if you MUST support old browsers.

//===================================================================================================

//##Var: it is both function-scoped and globally scoped variable.

// *
console.log(x); //undefined
var x;
console.log(x); //undefined
x = 20;
console.log(x); //20

// *
var myName = "samson";
if ((myName = "samson")) {
  var myName = "sam";
  console.log(myName); //sam
}
console.log(myName); //sam

// *
var anotherName = "ram";
var neckName;
var anotherName = neckName;
console.log(neckName); //undefined
neckName = anotherName;
console.log(neckName); //undefined

// *
var nameOne = "nameOne";
var nameTwo,
  nameThree,
  nameFour = nameOne;
console.log(nameTwo, nameThree, nameFour); //undefined undefined nameOne
// Hence:destructuring binding pattern is required for identifier.

// *
var [nameTwo, nameThree] = [nameOne, nameOne];
console.log(nameTwo, nameThree); //nameOne nameOne
// Hence:destructuring binding pattern is required for identifier.

// *re-declear does not matter for var
var car = "Volvo";
var car;
console.log(car);

//===================================================================================================

// ## let( it provides block scope )

// * block scopes
{
  let blockScope = 2;
}
let blockScope = "outside"; //outside
// else
console.log(blockScope); //ReferenceError: blockScope is not defined

//* Start the statement with let and separate the variables by comma:
let person = "John Doe",
  carName = "Volvo",
  price = 200;
console.log(person, carName, price);

// * con to re-declear for let
// let redeclear = "redeclear";
// console.log(redeclear);

// * start with dollor sign and _underscore does not matter for declearing
let $ = "Hello World";
let $$$ = 2;
let $myMoney = 5;
let _lastName = "Johnson";
console.log($, $$$, $myMoney, _lastName); // Hello World 2 5 Johnson

//===================================================================================================

//        Scope	    Redeclare	    Reassign	  Hoisted	    Binds this
// var	  No	        Yes	          Yes	         Yes	        Yes
// let	  Yes	        No	          Yes   	     No	          No
// const	Yes	        No	          No	         No	          No
