// JSの書き方

function ohayou() {
  alert("Hello!");
}

// 構文

var a0 = 3;
let b0 = 3;
{
  var a0 = 5;
  let b0 = 5;
}
console.log(a0, b0);

for (let i = 0; i < 10; i++) {
  console.log(i);
}

const c = 5;
console.log(c);

// 条件分岐

let n1 = 5;
if (n1 < 10) {
  console.log("Small");
} else {
  console.log("Big");
}

if (n1 < 10) {
  console.log("Small");
}

let n2 = 30;
if (n2 < 10) {
  console.log("Small");
} else if (n2 > 20) {
  console.log("Big");
} else {
  console.log("Normal");
}

let n3 = 2;
switch (n3) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  case 3:
  case 4:
    console.log("Three or Four");
    break;
  default:
    console.log("Other");
    break;
}

let n4 = 1;
switch (n4) {
  case 1:
    console.log("One");
  case 2:
    console.log("Two");
  default:
    console.log("Other");
}

// 繰り返し

let n5 = 0;
while (n5 < 10) {
  console.log(n5);
  n5++;
}

let n6 = 0;
do {
  console.log(n6);
  n6++;
} while (n6 < 10);

for (let i0 = 0; i0 < 10; i0++) {
  console.log(i0);
}

let n7 = ["Blue", "Red", "Yellow"];
for (let i1 in n7) {
  console.log(n7[i1]);
}

var data = { namae: "Yamada", age: 26, country: "Japan" };
for (var d in data) {
  console.log(d, data[d]);
}

for (var attr in navigator) {
  console.log(attr);
}

var set = new Set();
set.add("Tanaka");
set.add("Suzuki");
for (var value of set) {
  console.log(value);
}

// ループを抜ける

for (var i2 = 0; i2 < 10; i2++) {
  if (i2 == 5) {
    break;
  }
  console.log(i2);
}

abc: for (var i3 = 0; i3 < 10; i3++) {
  for (var j3 = 0; j3 < 10; j3++) {
    let n8 = i3 * 10 + j3;
    if (n8 > 20) {
      break abc;
    }
    console.log(n8 + "<br>");
  }
}

for (var i4 = 0; i4 < 10; i4++) {
  if (i4 == 5) {
    continue;
  }
  console.log(i4);
}

abc: for (var i5 = 0; i5 < 5; i5++) {
  for (var j5 = 0; j5 < 10; j5++) {
    let n9 = i5 * 10 + j5;
    if (n9 == 35) {
      continue abc;
    }
    console.log(n9);
  }
}

// ラベル

const func = (a, b) => a === 2 && b === 3;
label1: for (let i6 = 0; i6 < 10; i6++) {
  for (let j6 = 0; j6 < 10; j6++) {
    if (func(i6, j6)) {
      break label1;
    }
  }
}

// console.log(label1);

// オブジェクト参照

// with (document) {
//   console.log(bgColor);
//   console.log(fgColor);
// }

// 例外処理

try {
  error = doSomething();
  if (error) {
    throw "myException";
  }
} catch (e) {
  console.log(e);
} finally {
  console.log("finally");
}

// モジュール

import { hello_world } from "./module.js";
hello_world();

import("./module.js").then((mod) => {
  console.log(mod.a1);
});

console.log(import.meta);

// デバック

console.log("A");
console.log("B");
// debugger;
// console.log("C");
// console.log("D");
