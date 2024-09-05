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
while (n < 10) {
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
  console.log(attr);
}

var set = new Set();
set.add("Tanaka");
set.add("Suzuki");
for (var value of set) {
  console.log(value);
}

// // ループを抜ける

for (var i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}

abc: for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    xx = i * 10 + j;
    if (xx > 20) {
      break abc;
    }
    console.log(xx + "<br>");
  }
}

for (var i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

abc: for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 10; j++) {
    xx = i * 10 + j;
    if (xx == 35) {
      continue abc;
    }
    console.log(xx);
  }
}

// // ラベル

label1: for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    if (func(i, j)) {
      break label1;
    }
    console.log(label1);
  }
}

// オブジェクト参照

with (document) {
  console.log(bgColor);
  console.log(fgColor);
}

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
