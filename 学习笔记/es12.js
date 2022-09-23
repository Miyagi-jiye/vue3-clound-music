// es12 新增特性

// 1. Promise.allSettled：用于等待多个 Promise 实例都变成 settled 状态，该方法返回一个新的 Promise 实例。
// 举例
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success');
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('error');
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success');
  }, 3000);
});
Promise.allSettled([p1, p2, p3]).then(res => {
  console.log(res); // [{status: "fulfilled", value: "success"}, {status: "rejected", reason: "error"}, {status: "fulfilled", value: "success"}]
});

// 2. Promise.any：用于等待多个 Promise 实例都变成 fulfilled 状态，该方法返回一个新的 Promise 实例。
// 举例
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success');
  }, 1000);
});
const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('error');
  }, 2000);
});
const p6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success');
  }, 3000);
});
Promise.any([p4, p5, p6]).then(res => {
  console.log(res); // success
});

// 3. Promise.prototype.finally： 用于指定不管 Promise 对象最后状态如何，都会执行的操作。
// 举例
const p7 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success');
  }, 1000);
});
p7.then(res => {
  console.log(res); // success
}).finally(() => {
  console.log('finally'); // finally
});

// 4. finalizationRegistry: 用于注册对象的清理回调
// 举例
// const registry = new FinalizationRegistry((value) => {
//   console.log('注册在FinalizationRegistry的对象，被垃圾回收器回收了', value);
// });
// const obj = {
//   name: '对象1',
//   age: 18
// };
// const obj1 = {
//   name: '对象2',
//   age: 18
// };
// // 注册对象
// registry.register(obj, 'obj');
// registry.register(obj1, 'obj1');
// obj = null; // 清除引用，返回：注册在FinalizationRegistry的对象，被垃圾回收器回收了
// obj1 = null; // 清除引用，返回：注册在FinalizationRegistry的对象，被垃圾回收器回收了

// 5. WeakRef：用于创建弱引用
// 举例
// const obj2 = {
//   name: '对象3',
//   age: 18
// };
// const weakRef = new WeakRef(obj2);
// obj2 = null; // 清除引用
// console.log(weakRef.deref()); // .deref()方法用于获取弱引用的值,返回：{name: "对象3", age: 18}

// 6. logical assignment operators：逻辑赋值运算符
// 举例
let a = 1;
let b = 2;
let c = 3;
a &&= b; // 等价于 a && (a = b)
b ||= c; // 等价于 b || (b = c)
c ??= a; // 等价于 c ?? (c = a)
console.log(a, b, c); // 2 2 3
