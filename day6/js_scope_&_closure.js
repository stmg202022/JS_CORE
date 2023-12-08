// =====================================================================================================================================
// https://github.com/stmg202022/JS_Advance/blob/master/Scope.js

//Scope Types are:
//BLOCK SCOPE
//LOCAL SCOPE
//FUNCTIONAL SCOPE:
//GLOBAL SCOPE: Variable declear outside of the function are global scope (variable present at outermost)

//OTHER SCOPE ARE
// 1.MODULE SCOPE {type: "module"}
// 2.GLOBEL OBJECT (window) / (node.js=> process, require, globel, setInterval, Buffer)

// =====================================================================================================================================
// https://github.com/stmg202022/JS_Advance/blob/master/closures.js
//what is JS CLOSURE ?
//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment)
//EVERY CLOSURE HAVE SCOPE HAVE THREE SCOPE:
//GLOBAL SCOPE
//OUTER SCOPE
//LOCAL SCOPE

//CHANINING OF CLOSURES
let a = 1;
const fn3 = () => {
  let b = 2;
  return (fn4 = () => {
    let c = 3;
    return (fn5 = () => {
      let d = 4;
      // console.log(a + b + c + d);
    });
  });
};

fn3()()();

const chainFun = () => {
  return (chainfun1 = () => {
    console.log("chainFun1");
    return (chainFun2 = () => {
      console.log("chainFun2");
      return function () {
        console.log("last function");
      };
    });
  });
};
chainFun()(); //chainFun1
chainFun()()(); //chainFun2
chainFun()()()(); //last function

// =========================================================tricky question related to scope============================================================================
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i); // ?
  }, 100);
}

for (let i = 1; i < 10; i++) {
  setTimeout(() => {
    console.log(i); //  ?
  }, 100);
}
