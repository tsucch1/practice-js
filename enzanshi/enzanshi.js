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

let x12 = 7;
y12 = x12 >= 5 ? "big" : "small";
console.log(y12);

// カンマ演算子

// for (var i7 = 0, j7 = 0; i7 < 10; i7++){
//   :
// }

// ビット演算子

let x13 = 0x87654321 & 0xffff0000;
let x14 = 0x87654321 | 0xffff0000;
let x15 = 0xffff0000 ^ 0xff00ff00;
let x16 = ~0x0000ffff;
console.log(x13, x14, x15, x16);

let x17 = 0x12345678 << 8;
let x18 = 0x12345678 >> 8;
let x19 = 0x87654321 >> 8;
let x20 = 0x87654321 >>> 8;
console.log(x17, x18, x19, x20);

// 複合代入演算子

let x21 =
  (x22 =
  x23 =
  x24 =
  x25 =
  x26 =
  x27 =
  x28 =
  x29 =
  x30 =
  x31 =
  x32 =
    10);
x21 += 5;
x22 -= 5;
x23 *= 5;
x24 /= 5;
x25 %= 5;
x26 **= 5;
x27 &= 0xff;
x28 |= 0xff;
x29 ^= 0xff;
x30 <<= 8;
x31 >>= 8;
x32 >>>= 8;
console.log(x21, x22, x23, x24, x25, x26);
console.log(x27, x28, x29, x30, x31, x32);

// 論理代入演算子

// let x33 = (x34 = x35 = 10);
let x34 = 10;
let x33;
let x35;
x33 ||= 5;
x34 &&= 5;
x35 ??= 5;
console.log(x33, x34, x35);

// ヌル値関連演算子

const obj = {
  foo: undefined,
};
obj.foo = obj.foo ?? 60;
console.log(obj.foo);

// obj.foo = obj.foo ?? 60;
// console.log(obj.foo);

// console.log(response.body?.length);

// その他の演算子

var obj2 = {
  name: "Yamada",
  age: 24,
};
console.log(obj2.name);
delete obj2.name;
console.log(obj2.name);

// typeof undefined;
// typeof null;

function func() {
  console.log("Hello!");
}
func();

if ("appName" in navigator) {
  console.log("Yes");
}

p1 = {
  name2: "Yamada",
  age: 26,
};
if ("name2" in p1) {
  console.log("Yes");
}

function Person() {}
var p2 = new Person();
if (p2 instanceof Person) {
  console.log("Yes");
} else {
  console.log("No");
}
