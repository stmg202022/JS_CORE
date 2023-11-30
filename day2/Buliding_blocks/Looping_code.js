// If you're iterating through an array or some other object that supports it, and don't need access to the index position of each item, then for...of is the best choice.

// *  simple loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// * for..of loop
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
for (const cat of cats) {
  console.log(cat);
}

// * map() and filter()  are also work as loop : concise and functional way to iterate over arrays. (HOF) and return array
const upperCats = cats.map((cat) => cat.toUpperCase());
console.log(upperCats); //[ 'LEOPARD', 'SERVAL', 'JAGUAR', 'TIGER', 'CARACAL', 'LION' ]

const filterCats = cats.filter((cat) => cat.length > 6);
console.log(filterCats); // [ 'Leopard', 'Caracal' ]

// * loops with break and  continue

// * while and do...while
// while loop is used for live output( real time output )
let count = 0;
while (count < 10) {
  console.log(`Live Output: ${count}`);
  count++;
}

// initializer;
// do {
//   // code to run

//   final - expression;
// } while (condition);
