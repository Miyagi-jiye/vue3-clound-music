// es11 新增特性

// 1. 可选链操作符：?.，用于判断对象的属性是否存在，如果存在则返回属性值，否则返回 undefined。
// 举例
const obj = {
  foo: {
    bar: {
      baz: 42
    }
  }
};
console.log(obj?.foo?.bar?.baz); // 42
console.log(obj?.qux?.baz); // undefined

// 2. 空值合并操作符：??，用于判断一个值是否为 null 或 undefined，如果是则返回另一个值。
// 举例
const foo = null ?? 'default string';
console.log(foo); // default string

// 3. BigInt：任意精度的整数，可以用来表示超大或超小的整数。
// 举例
const max = Number.MAX_SAFE_INTEGER;
console.log(max); // 9007199254740991
console.log(max + 1); // 9007199254740992
console.log(max + 2); // 9007199254740992, 超出安全范围,计算结果不正确
console.log(max + 3); // 9007199254740994
console.log(max + 4); // 9007199254740996
console.log(max + 5); // 9007199254740996
const bigInt = 9007199254740991n;
console.log(bigInt); // 9007199254740991n
console.log(bigInt + 1n); // 9007199254740992n
console.log(bigInt + 2n); // 9007199254740993n
console.log(bigInt + 3n); // 9007199254740994n
console.log(bigInt + 4n); // 9007199254740995n
console.log(bigInt + 5n); // 9007199254740996n

// 4. 动态导入
// 举例
import('./module.js').then(res => {
  console.log(res);
});

// 5. globalThis：全局对象，不管是在浏览器环境还是在 Node.js 环境，都可以使用 globalThis
// 举例
console.log(globalThis); // Window {window: Window, self: Window, document: document, name: "", location: Location, …}

// 6. String.prototype.replaceAll()：替换字符串中的所有匹配项，返回替换后的字符串
// 举例
const str = 'Hello World!';
console.log(str.replaceAll('o', 'a')); // Hell

// 7.for ... in 标准化: for ... in 循环会遍历原型链上的属性，for ... of 循环不会遍历原型链上的属性
// 举例
const obj1 = {
  a: 1,
  b: 2,
  c: 3
};
for (const key in obj1) {
  console.log(key); // a, b, c
}
