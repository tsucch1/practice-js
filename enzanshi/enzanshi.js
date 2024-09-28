// 代入演算子

let x1 = 5;
let y1 = x1;
let z1 = "ABC";
console.log(x1, y1, z1);

let x2 = x1 + 2;
console.log(x2);
let y2 = (x2 = 5);
console.log(y2);

// 算術演算子

let x3 = 3 + 2;
let x4 = 3 - 2;
let x5 = 3 * 2;
let x6 = 3 / 2;
let x7 = 3 % 2;
console.log(x3, x4, x5, x6, x7);

let x8 = 3 ** 2;
let x9 = "123" + 4;

console.log(x8, x9);

let a1 = 5;
a1++;
let a2 = 5;
let b2 = a2++;
let a3 = 5;
let b3 = ++a3;
console.log(a1, a2, b2, a3, b3);

// 比較演算子

let x10 = 5;
if (x10 == 5) {
  console.log("x10 is 5.");
}
if (x10 != 5) {
  console.log("x10 is not 5.");
}

if ("123" == 123) {
  console.log("等しい");
}

if (x10 < 123) {
  console.log("x10は123より小さいです。");
}

let xx = "A";
if (xx < "H") {
  console.log("xxはHよりも前にあります。");
}

if (123 == "123") {
  console.log("等しい1");
}

if (123 === "123") {
  console.log("等しい2");
}

if (123 === 123) {
  console.log("等しい3");
}

if ("123" === "123") {
  console.log("等しい4");
}

// 論理演算子

let mon = 5;
if (1 <= mon && mon <= 12) {
  console.log("x is between 1 and 12.");
}

let x11 = "abc";
if (x11 == "ABC" || x11 == "abc") {
  console.log("x11 is ABC.");
}

if (!(x11 == 5)) {
  console.log("x11 is not five.");
}

// 条件演算子
