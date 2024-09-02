// JSの書き方
function ohayou() {
  alert("Hello!");
}

// 構文
var a = 3;
let b = 3;
{
  var a = 5;
  let b = 5;
}
console.log(a);
console.log(b);

for (let i = 0; i < 10; i++) {
  console.log(i);
}

const c = 5;
console.log(c);

// 条件分岐

// n = 5;
// if (n < 10) {
//   alert("Small");
// } else {
//   alert("Big");
// }

// if (n < 10) {
//   alert("Small");
// }

// n = 30;
// if (n < 10) {
//   alert("Small");
// } else if (n > 20) {
//   alert("Big");
// } else {
//   alert("Normal");
// }

// n = 2;
// switch (n) {
//   case 1:
//     alert("One");
//     break;
//   case 2:
//     alert("Two");
//     break;
//   case 3:
//   case 4:
//     alert("Three or Four");
//     break;
//   default:
//     alert("Other");
//     break;
// }

// x = 1;
// switch (x) {
//   case 1:
//     alert("One");
//   case 2:
//     alert("Two");
//   default:
//     alert("Other");
// }

// 繰り返し
n = 0;
while (0 < 10) {
  console.log(n);
  n++;
}

n = 0;
do {
  console.log(n);
  n++;
} while (n < 10);

for (i = 0; i < 10; i++) {
  console.log(i);
}

xx = ["Blue", "Red", "Yellow"];
for (i in xx) {
  console.log(xx[i]);
}

var data = { namae: "Yamada", age: 26, country: "Japan" };
for (var d in data) {
  console.log(d, data[d]);
}

for (var attr in navigator) {
  console, log(attr);
}

var set = new Set();
set.add("Tanaka");
set.add("Suzuki");
for (var value of set) {
  console.log(value);
}

// ループを抜ける
