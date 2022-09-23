// es13 新增特性

// 1. method .at()：用于获取字符串或数组中指定位置的字符或元素。
// 举例
const str = 'hello world';
console.log(str.at(0)); // h
console.log(str.at(-1)); // d
const arr = [1, 2, 3, 4, 5];
console.log(arr.at(0)); // 1
console.log(arr.at(-1)); // 5

// 2.旧：Object. hasOwnProperty()：用于判断对象是否包含指定的属性。
// 2.新：Object.hasOwn()：用于判断对象是否包含指定的属性。
// 新的方法与旧的方法的区别在于，旧的方法会检查原型链，而新的方法不会。
// 举例
const obj = {
  a: 1,
  b: 2,
  c: 3
};
console.log(obj.hasOwnProperty('a')); // true
console.log(obj.hasOwnProperty('d')); // false
console.log(Object.hasOwn(obj, 'a')); // true
console.log(Object.hasOwn(obj, 'd')); // false

// 3.New members of classes：类的新成员
// 3.1. class static blocks：静态代码块
// 举例
class A {
  static {
    console.log('A');
  }
}
class B extends A {
  static {
    console.log('B');
  }
}
new B(); // A B
// 3.2. class instance fields：实例字段
// 举例
class A {
  a = 1;
  b = 2;
}
const a = new A();
console.log(a.a); // 1
console.log(a.b); // 2
// 3.3. class static fields：静态字段
// 举例
class A1 {
  static a = 1;
  static b = 2;
}
console.log(A1.a); // 1
console.log(A1.b); // 2
// 3.4. class private fields：私有字段
// 举例
class A2 {
  #a = 1;
  #b = 2;
}
const a1 = new A1();
console.log(a1.#a); // SyntaxError: Private field '#a' must be declared in an enclosing class
console.log(a1.#b); // SyntaxError: Private field '#b' must be declared in an enclosing class
// 3.5. class private methods：私有方法
// 举例
class A3 {
  #a() {
    console.log('a');
  }
  #b() {
    console.log('b');
  }
}
const a2 = new A2();
console.log(a2.#a()); // SyntaxError: Private field '#a' must be declared in an enclosing class
console.log(a2.#b()); // SyntaxError: Private field '#b' must be declared in an enclosing class
// 3.6. class accessors：访问器
// 举例
class A4 {
  #a = 1;
  get a() {
    return this.#a;
  }
  set a(value) {
    this.#a = value;
  }
}
const a3 = new A4();
console.log(a3.a); // 1
a3.a = 2;
console.log(a3.a); // 2
// 3.7. class decorators：类装饰器
// 举例
function test(target) {
  target.test = 'test';
}
@test
class A5 { }
console.log(A5.test); // test
// 3.8. class private accessors：私有访问器
// 举例
class A6 {
  #a = 1;
  get #b() {
    return this.#a;
  }
  set #b(value) {
    this.#a = value;
  }
}
const a4 = new A6();
console.log(a4.#b); // SyntaxError: Private field '#b' must be declared in an enclosing class
a4.#b = 2; // SyntaxError: Private field '#b' must be declared in an enclosing class
// 3.9. class private methods：私有方法
// 举例
class A7 {
  #a() {
    console.log('a');
  }
  #b() {
    console.log('b');
  }
}
const a5 = new A7();
console.log(a5.#a()); // SyntaxError: Private field '#a' must be declared in an enclosing class
console.log(a5.#b()); // SyntaxError: Private field '#b' must be declared in an enclosing class
// 3.10. class private static fields：私有静态字段
// 举例
class A8 {
  static #a = 1;
  static #b = 2;
}
console.log(A8.#a); // SyntaxError: Private static field '#a' must be declared in an enclosing class
console.log(A8.#b); // SyntaxError: Private static field '#b' must be declared in an enclosing class
// 3.11. class private static methods：私有静态方法
// 举例
class A9 {
  static #a() {
    console.log('a');
  }
  static #b() {
    console.log('b');
  }
}
console.log(A9.#a()); // SyntaxError: Private static field '#a' must be declared in an enclosing class
console.log(A9.#b()); // SyntaxError: Private static field '#b' must be declared in an enclosing class
// 3.12. class private static accessors：私有静态访问器
// 举例
class A10 {
  static #a = 1;
  static get #b() {
    return this.#a;
  }
  static set #b(value) {
    this.#a = value;
  }
}
console.log(A10.#b); // SyntaxError: Private static field '#b' must be declared in an enclosing class
A10.#b = 2; // SyntaxError: Private static field '#b' must be declared in an enclosing class
