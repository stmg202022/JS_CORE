//syntax:
// toLocaleString()
// toLocaleString(locales)
// toLocaleString(locales, options)

const months = [
  "jan",
  "feb",
  "march",
  "april",
  "may",
  "jun",
  "junly",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];
console.log(months.toLocaleString()); // jan,feb,march,april,may,jun,junly,aug,sep,oct,nov,dec

const array1 = [1, "a", new Date("21 Dec 1997 14:12:00 UTC")];
const localeString = array1.toLocaleString("en", { timeZone: "UTC" });
console.log(localeString); // 1,a,12/21/1997, 2:12:00

const prices = ["￥7", 500, 8123, 12];
console.log(
  prices.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }) // "￥7,￥500,￥8,123,￥12"
);

console.log(
  prices.toLocaleString("nrp", { style: "currency", currency: "NPR" }) // ￥7,NPR 500.00,NPR 8,123.00,NPR 12.00
);

// ===================================================================sparse array======================
console.log([1, , 3].toLocaleString()); // '1,,3'
