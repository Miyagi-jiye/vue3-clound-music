// es8 新增特性

const obj = { a: 1, b: 2, c: 3 };
// 1. Object values : 返回对象的值
// 举例
// Object.values()方法返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环也枚举原型链中的属性）。
console.log(Object.values('foo')); // ['f', 'o', 'o']
console.log(Object.values(obj)); // [1, 2, 3]

// 2. Object entries : 返回对象的键值对
// 举例
// Object.entries()方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环也枚举原型链中的属性）。
console.log(Object.entries('foo')); // [['0', 'f'], ['1', 'o'], ['2', 'o']]
console.log(Object.entries(obj)); // [['a', 1], ['b', 2], ['c', 3]]
// 返回一个对象的键值对数组，然后使用 for...of 循环遍历该数组
for (let [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}// 返回：a: 1 b: 2 c: 3

// 3. String padding : 字符串填充
// 举例
// String.prototype.padStart()用另一个字符串填充当前字符串（如果需要的话则重复填充），以便产生的字符串达到给定的长度。填充从当前字符串的开始（左侧）应用的。
console.log('你好呀'.padStart(10, 'b'));// 返回：bbbbbbb你好呀
// String.prototype.padEnd()用另一个字符串填充当前字符串（如果需要的话则重复填充），以便产生的字符串达到给定的长度。填充从当前字符串的结束（右侧）应用的。
console.log('你好呀'.padEnd(10, 'b')); // 返回：你好呀bbbbbbb

// 4. Trailing commas in function parameter lists and calls : 函数参数列表和调用中的尾随逗号
// 举例
function f(a, b, c, d,) {
  console.log(a);
}
f(1, 2, 3, 4,); // 1

// 5. Async functions : 异步函数
// 举例
async function f1() {
  return 'hello world';
}
f1().then(v => console.log(v)); // hello world

// 6. Async iteration : 异步迭代
// 举例
async function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
(async () => {
  for await (const x of gen()) {
    console.log(x);
  }
})();// 返回：1 2 3

