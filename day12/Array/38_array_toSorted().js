const months = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths = months.sort();
console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
console.log(months); // ['Dec', 'Feb', 'Jan', 'Mar']

const values = [1, 10, 21, 2];
const sortedValues = values.sort((a, b) => a - b);
console.log(sortedValues); // [1, 2, 10, 21]
console.log(values); // [1, 2, 10, 21]

// but
// const months2 = ["Mar", "Jan", "Feb", "Dec"];
// const sortedMonths2 = months.toSorted();
// console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
// console.log(months); // ['Mar', 'Jan', 'Feb', 'Dec']

// const values2 = [1, 10, 21, 2];
// const sortedValues2 = values.toSorted((a, b) => a - b);
// console.log(sortedValues2); // [1, 2, 10, 21]
// console.log(values2); // [1, 10, 21, 2]
