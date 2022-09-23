// es6 新增特性

// 1. let const：块级作用域
// 1.1 let
// 举例
let a = 1;
let a = 2; // 报错：Identifier 'a' has already been declared
// 1.2 const
// 举例
const a = 1;
a = 2; // 报错：Assignment to constant variable.

// 2. 解构赋值
// 2.1 数组解构赋值
// 举例
let [a, b, c] = [1, 2, 3];
console.log(a, b, c); // 1 2 3
// 2.2 对象解构赋值
// 举例
let { a, b, c } = { a: 1, b: 2, c: 3 };
console.log(a, b, c); // 1 2 3

// 3. 字符串模板：反引号
// 举例
let a = 1;
let b = 2;
let c = 3;
console.log(`${a} + ${b} = ${c}`); // 1 + 2 = 3

// 4. 箭头函数：=>
// 举例
let fn = () => {
  console.log('hello world');
};
fn(); // hello world

// 5. 函数参数默认值
// 举例
function fn(a = 1, b = 2) {
  console.log(a, b);
}
fn(); // 1 2
fn(3); // 3 2
fn(3, 4); // 3 4

// 6.函数参数 rest 展开运算符
// 6.1 函数参数 rest 展开运算符：字符串
// 举例
function fn1(...rest) {
  console.log(rest);
}
fn1(1, 2, 3); // [1, 2, 3]
// 6.2 函数参数 rest 展开运算符：数组
// 举例
function fn2(a, b, c) {
  console.log(a, b, c);
}
const arr = [1, 2, 3];
fn2(...arr); // 1 2 3
// 6.3 函数参数 rest 展开运算符：对象
// 举例
function fn3(a, b, c) {
  console.log(a, b, c);
}
const obj1 = { a: 1, b: 2, c: 3 };
fn3(...obj1); // 1 2 3

// 7. 对象属性简写
// 举例
let a = 1;
let b = 2;
let obj = { a, b };
console.log(obj); // {a: 1, b: 2}

// 8. 对象方法简写
// 举例
let obj = {
  fn() {
    console.log('hello world');
  }
};
obj.fn(); // hello world

// 9. 对象属性名表达式
// 举例
let obj = {
  ['a' + 'b']: 1
};
console.log(obj); // {ab: 1}

// 10. 对象新增方法
// 10.1 Object.is()：判断两个值是否严格相等
// 举例
console.log(Object.is(1, 1)); // true
console.log(Object.is(1, '1')); // false
// 10.2 Object.assign()：对象合并
// 举例
let obj1 = { a: 1 };
let obj2 = { b: 2 };
let obj3 = Object.assign(obj1, obj2);
console.log(obj3); // {a: 1, b: 2}

// 11. 数组新增方法
// 11.1 Array.from()：类数组转数组
// 举例
let arr = Array.from('hello world');
console.log(arr); // ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
// 11.2 Array.of()：将一组值转换为数组
// 举例
let arr = Array.of(1, 2, 3);
console.log(arr); // [1, 2, 3]
// 11.3 find() findIndex()
// find() 查找数组中符合条件的元素，返回第一个符合条件的元素，没有返回 undefined
// findIndex() 返回符合条件的元素的下标，没有返回 -1
// 举例
let arr = [1, 2, 3, 4, 5];
console.log(arr.find(item => item > 3)); // 4
console.log(arr.findIndex(item => item > 3)); // 3
// 11.4 fill()：填充数组
// 举例
let arr = [1, 2, 3, 4, 5];
arr.fill(0);
console.log(arr); // [0, 0, 0, 0, 0]
// 11.5 copyWithin()：数组复制
// 举例
let arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3);
console.log(arr); // [4, 5, 3, 4, 5]

// 12. Symbol：ES6 新增的一种数据类型，表示独一无二的值
// 举例
let a = Symbol('a');
let b = Symbol('a');
console.log(a === b); // false

// 13. Set：类似于数组，但是成员的值都是唯一的，没有重复的值
// 举例
let set = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
console.log(set); // Set {1, 2, 3, 4, 5}

// 14. Map：类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键
// 举例
let map = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3]
]);
console.log(map); // Map {"a" => 1, "b" => 2, "c" => 3}

// 15. Proxy：用于修改某些操作的默认行为，等同于在语言层面做出修改，属于一种“元编程”（meta programming），即对编程语言进行编程
// 举例
let obj = {
  add: function (val) {
    return val + 10;
  }
};
let pro = new Proxy(obj, {
  get: function (target, key, property) {
    console.log('come in Get');
    return target[key](property);
  }
});
console.log(pro.add(100)); // come in Get 110

// 16. Reflect：将 Object 对象的一些明显属于语言内部的方法（比如 Object.defineProperty），放到 Reflect 对象上
// 举例
let obj = {
  add: function (val) {
    return val + 10;
  }
};
console.log(Reflect.get(obj, 'add')(100)); // 110

// 17. Promise：异步编程的一种解决方案，比传统的解决方案（回调函数和事件）更合理和更强大
// 举例
let state = 1;
function step1(resolve, reject) {
  console.log('1.开始-洗菜做饭');
  if (state == 1) {
    resolve('洗菜做饭--完成');
  } else {
    reject('洗菜做饭--出错');
  }
}
function step2(resolve, reject) {
  console.log('2.开始-坐下来吃饭');
  if (state == 1) {
    resolve('坐下来吃饭--完成');
  } else {
    reject('坐下来吃饭--出错');
  }
}
function step3(resolve, reject) {
  console.log('3.开始-收拾桌子洗碗');
  if (state == 1) {
    resolve('收拾桌子洗碗--完成');
  } else {
    reject('收拾桌子洗碗--出错');
  }
}
new Promise(step1)
  .then(function (val) {
    console.log(val);
    return new Promise(step2);
  })
  .then(function (val) {
    console.log(val);
    return new Promise(step3);
  })
  .then(function (val) {
    console.log(val);
    return val;
  });

// 18. Class：ES6 提供的新的写法，用来实现面向对象编程的新模式
// 举例
class Animal {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return `My name is ${this.name}`;
  }
}
let a = new Animal('Jack');
console.log(a.sayHi()); // My name is Jack

// 19. Decorator：装饰器，用来修改类的行为
// 举例
function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}
class Test {
  @readonly
  time() {
    return '2017-03-11';
  }
}
let test = new Test();
test.time = function () {
  console.log('reset time');
};
console.log(test.time()); // 2017-03-11

// 20. Module：模块，ES6 模块不是对象，而是通过 export 命令显式指定输出的代码，再通过 import 命令输入
// 举例
export var m = 1;

// 21. Generator：函数的一种，可以用来控制函数的执行
// 举例
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}
var hw = helloWorldGenerator();
console.log(hw.next()); // {value: "hello", done: false}
console.log(hw.next()); // {value: "world", done: false}
console.log(hw.next()); // {value: "ending", done: true}
console.log(hw.next()); // {value: undefined, done: true}

// 22. Iterator：遍历器，为各种数据结构，提供一个统一的、简便的访问接口
// 举例
let arr = ['hello', 'world'];
let map = arr[Symbol.iterator]();
console.log(map.next()); // {value: "hello", done: false}
console.log(map.next()); // {value: "world", done: false}
console.log(map.next()); // {value: undefined, done: true}

// 23. async：异步函数，Generator 函数的语法糖
// 举例
async function getStockPriceByName(name) {
  let symbol = await getStockSymbol(name);
  let stockPrice = await getStockPriceByName(symbol);
  return stockPrice;
}
getStockPriceByName('goog').then(function (result) {
  console.log(result);
});
