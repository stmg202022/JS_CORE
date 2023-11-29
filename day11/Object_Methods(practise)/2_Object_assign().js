// ====================================================================Object.assign======================================
const target = { a: 1, b: 2 };
const source = { b: 4, d: 5 };

const targetSource = Object.assign(target, source);
// console.log(targetSource); // { a: 1, b: 4, d: 5 }

const x = {
  a: 1,
  b: 3,
  c: 4,
};
const y = {
  c: 5,
  d: 6,
};
const z = {
  d: 6,
  e: 7,
};

const xyz = Object.assign(x, y, z);
// console.log(xyz); // { a: 1, b: 3, c: 5, d: 6, e: 7 }
// console.log(x === xyz); //true

//constructor
// function UserObj({ name, age, isAdmin }) {
// //   this.name = name;
// //   this.age = age;
// //   this.isAdmin = isAdmin;

//   this.getInfo = () => {
//     console.log(this.name, this.age, this.isAdmin);
//   };
// }

function UserObj(user) {
  this.user = user;
  const { name, age, isAdmin } = user;

  this.getInfo = () => {
    // console.log(name, age, isAdmin);
  };
}

const user = {
  name: "samson",
  age: 20,
  isAdmin: false,
};

//instance
const userInfo = new UserObj(user);
userInfo.getInfo(); //samson 20 false

const newUserProp = {
  location: "ktm",
  phone: 97349457,
};

const userMoreInfo = Object.assign(UserObj.prototype, newUserProp);
// console.log(userMoreInfo); //{ location: 'ktm', phone: 97349457 } but
const userOne = new UserObj(user);
// console.log(userOne, userOne.user.name, userOne.location); // see on browser console: it shows newUserProp in the prototype of UserObj
