//filter prime number
const arrLists = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const primeNumbers = arrLists.filter((num, idx) => {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
});

console.log(primeNumbers);

//filter by Id
const arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: "undefined" },
];

const filterFiniteId = arr.filter((itm) => {
  if (
    Number.isFinite(itm.id) &&
    itm.id !== 0 &&
    itm.id > 1 &&
    Number.isInteger(itm.id)
  ) {
    return true;
  }
  return false;
});
console.log(filterFiniteId);

//searching itemsa
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

const searchFun = (arr, query) => {
  return arr.filter((itm) => itm.toLowerCase().includes(query.toLowerCase()));
};

const items = searchFun(fruits, "ap");
console.log(items); //[ 'apple', 'grapes' ]

//Using filter() on sparse arrays will skip the empty slots
console.log([2, , undefined].filter((item) => item === undefined)); // [ undefined ]
console.log([2, , undefined].filter((item) => item !== undefined)); // [ 2 ]
