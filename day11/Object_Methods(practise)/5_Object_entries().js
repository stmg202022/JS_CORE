// ====================================================================Object.entries() ======================================

const worker = {
  name: "samson",
  age: 23,
  isAdmin: false,
};

console.log(Object.entries(worker)); //iterators

for (const [key, indx] of Object.entries(worker)) {
  console.log(key);
}
