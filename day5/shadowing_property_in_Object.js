const newObj = new Object();
console.log(newObj.toString()); //output: [object object]

newObj.toString = function () {
  console.log("Hello world.");
};

newObj.toString(); //output: Hello world.
console.log(newObj.name); //output: undefined,
