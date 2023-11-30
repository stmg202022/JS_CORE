// * functions Vs methods
//  Methods are associated with objects ond are property of an objects. but
//  the functions are not associated with the functions and are not the part of the objects. so
//  All methods are functions, not all functions are methods

// * There are so many: Built-in browser functions and build-in methods provided by javascript

// Example of a built-in function
const randomNumber = Math.random();

// Example of a built-in method
const message = "Hello, World!";
const upperCaseMessage = message.toUpperCase();

// ===========================================types=================
// There are different types of functions.Among them most used are

function genFun() {
  console.log("declerative fun.");
}
genFun();

// * arrow
const arrowFun = (arg) => {
  console.log(arg, "Functions.");
};
arrowFun("arrow");

// * named functions expression
const nameFunExp = function () {
  console.log("Named Functions");
};
nameFunExp();

// * asyn functions
// const asynFun = async () => {
//   const fetchData = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const user = await fetchData.json();
//   console.log("asyn function:", user.userId);
// };
// asynFun();

// * immediately invoke functions
(function (parameters) {
  console.log("immediately invoked.");
})(arguments);
