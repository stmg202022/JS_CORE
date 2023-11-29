// ====================================================================Object.keys() and Object.values()======================================
const myObjOne = {
  name: "samson",
  age: 24,
  isAdmin: false,
};

//for...in or Object.keys()
const objKeys = Object.keys(myObjOne);
// console.log(objKeys); //[ 'name', 'age', 'isAdmin' ]

const objValues = Object.values(myObjOne);
// console.log(objValues); //[ 'samson', 24, false ]
