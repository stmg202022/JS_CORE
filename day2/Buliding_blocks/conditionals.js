// *simple condition
// if (condition) {
//   /* code to run if condition is true */
// } else {
//   /* run some other code instead */
// }

// //*  we should not have to include else
// if (condition) {
//     /* code to run if condition is true */
//   }
//   /* run some other code */

// * use curly brackets is best practise;
// let y = false;
// if (y) console.log("true");
// else console.log("false"); // flase

// * comparison operators are used in conditional operators
// * Logical operators: AND, OR and NOT are also used.

// * Don't do that :
let x = 0;
if (x === 5 || 7 || 10 || 20) {
  console.log(x); //c0
}

// *Do or use like this?
if (x === 5 || x === 7 || x === 10 || x === 20) {
  console.log(x); // nothing
}

// *switch statements
// * Ternary operator

let teranry = "ternary";
teranry ? console.log(teranry) : console.log(x);
