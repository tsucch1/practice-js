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

n = 5;
if (n < 10) {
  alert("Small");
} else {
  alert("Big");
}

if (n < 10) {
  alert("Small");
}

n = 30;
if (n < 10) {
  alert("Small");
} else if (n > 20) {
  alert("Big");
} else {
  alert("Normal");
}
