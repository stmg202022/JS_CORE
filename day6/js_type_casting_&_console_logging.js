// let check1 = 2 + "2";
// console.log(check1); //22   // concatination in addition
// // console.log("check1:", typeof check1); // string

// let check2 = 2 - "2";
// console.log(check2); // 0
// console.log("check2:", typeof check2); // number

// let check3 = 2 * "2";
// console.log(check3); // 4
// console.log("check3:", typeof check3); // number

// let check4 = 2 / "2";
// console.log(check4); // 1
// console.log("check3:", typeof check4); // number

// let check5 = 2 + 0.4;
// console.log(check5); // 2.4
// console.log("check3:", typeof check5); // number

// let check6 = 2 + "0.4";
// console.log(check6); // 20.4
// console.log("check3:", typeof check6); // string

// let check7 = 2 - "0.4";
// console.log(check7); // 1.6
// console.log("check3:", typeof check7); // number

// let check8 = 2 - "0.4";
// console.log(check8); // 1.6
// console.log("check3:", typeof check8); // number

//========================================================================= // Implicit Type Casting in JavaScript
// Implicit Type Casting in JavaScript
// *Implicit Type Conversion to Number

// let result = "38" + "20";
// console.log(result); // prints 58
// console.log(typeof result); //  number

// let result = "38"- 20;
// console.log(result); // prints 18
// console.log(typeof result); //  number

// let result = "38" * 10;
// console.log(result); // prints 380
// console.log(typeof result); //  number

// let result = "38" / 2;
// console.log(result); // prints 19
// console.log(typeof result); //  number

// let result = "38" / "hello";
// console.log(result); //  NaN

//=========================================================================
// * Implicit Type Conversion to String in JavaScript
// let result = "38" + 20;
// console.log(result); //  3820
// console.log(typeof result); //  string

//=========================================================================// Explicit Type Casting in JavaScript

// * Explicit Type Conversion to Number
// let value = "38";
// let result = Number(value);
// console.log(result); // 38
// console.log(typeof result); // number

// let value = false;
// let result = Number(value);
// console.log(result); // prints 0 as false converts to 0
// console.log(typeof result); // number

// let value = true;
// let result = Number(value);
// console.log(result); // 1 as true converts to 1
// console.log(typeof result); // number

//=========================================================================
// Explicit Type Conversion to String in JavaScript

// let value = 38;
// let result = String(value);
// console.log(result); //  38
// console.log(typeof result); // prints string

// let value = false;
// let result = String(value);
// console.log(result); //  false
// console.log(typeof result); // string

// let value = 20 + 10;
// let result = String(value);
// console.log(result); // 30
// console.log(typeof result); // string

//=========================================================================
// Explicit Type Conversion to Boolean
// let value = "hello";
// let result = Boolean(value);
// console.log(result); // true as value is not empty string
// console.log(typeof result); // boolean

// let value = 0;
// let result = Boolean(value);
// console.log(result); // false as 0 converts to false
// console.log(typeof result); // boolean

// let value = 1;
// let result = Boolean(value);
// console.log(result); // true as 1 converts to true
// console.log(typeof result); // boolean
