// we can use two Object's methods to set property inside Object's prototype
// 1. Object.create
// 2. Object.assige

// normal obj
const user = {
  isAdmin: false,
};

const UserPrototype = function (uName, age) {
  this.uName = uName;
  this.age = age;
};

Object.assign(UserPrototype.prototype, user);
const userInfo = new UserPrototype("samson", 16);
console.log(userInfo); //output: UserPrototype { uName: 'samson', age: 16 }
console.log(userInfo.isAdmin); //output: false
