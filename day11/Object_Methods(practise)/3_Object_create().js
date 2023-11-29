// ====================================================================Object.create()======================================

const createObj = Object.create(null);
console.log(createObj); //[Object: null prototype] {}

const assignNull = Object.assign(createObj, { name: "samson" });
console.log(assignNull); //[Object: null prototype] { name: 'samson' }
console.log(assignNull.name);
assignNull.prototype = Object.prototype;
console.log(assignNull);
