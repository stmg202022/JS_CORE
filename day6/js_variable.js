// There are three types of variabel in js

// *  var
// * let
// * const

// =====================================================
// * var
// var have no any scope // global scope

// console.log(y); // refError: y is not defined

// console.log(x); //undefined
var x;
// console.log(x); //undefined
x = 2;
// console.log(x); //2

// =====================================================
// *let

// console.log(y); // refError: cannot access 'y' bef init
let y;
// console.log(y); //undefined
y = 3;
// console.log(y); //3

// * let have functional and block scope, can not redeifned but can change the value
// Eg:
let changeVal = 7;
// changeVal = 8;
// console.log(changeVal); // 8
// let changeVal = 10; // can not re-defined

// Eg:
//block scope
// let outside = "ouutside";
{
  //   console.log(outside);  // outside
  //   let inside = "inside";
}
// console.log(inside); // refError: inside is not defined

// Eg:
//function scope
let outsideFun = "outsideFun";
function fun() {
  console.log(outsideFun);
}
fun(); //outsideFun

// =====================================================
// const
// const name can not re-defined
// const value can not change
// i.e it's name and value are constant

//it also have both functional and block scope
// eg:
//block scope
const z = "outside_z";
{
  console.log(z); // outside_z
  const inside_z = "inside_z";
}
// console.log(inside_z); // refError: inside_z is not defined

//functional scope

const zOutside = "zOutSide";

function zFun() {
  console.log(zOutside); // zOutSide
  const zInside = "zInside";
}

// console.log(zInside); //refError: zInside is not defined
