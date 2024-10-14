// 特殊変数

// this

// obj.addEventListener("click", function () {
//   console.log(this);
// });

class MyClass {
  func() {
    console.log(this);
  }
}
var obj = new MyClass();
obj.func();

// global

// foo = 123;
// console.log(global.foo);

// globalThis

console.log(globalThis);

// 弱参照

// WeakRef()

var obj = { name: "Tanaka", age: 26 };
var a1 = obj;
var a2 = new WeakRef(obj);

console.log(a1);
console.log(a2.deref());
