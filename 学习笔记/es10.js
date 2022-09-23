// es10 新增特性

// 1. Array.flat() 用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。
// 举例
const arr = [1, 2, [3, 4, [5, 6]]];
console.log(arr.flat()); // [1, 2, 3, 4, [5, 6]]
console.log(arr.flat(2)); // [1, 2, 3, 4, 5, 6] 多层降维

// 2. Array.flatMap() 先使用映射函数映射每个元素，然后再将结果压缩成一个新数组。该方法返回一个新数组，对原数据没有影响。
// 举例
const arr1 = [1, 2, 3, 4];
console.log(arr1.flatMap(x => [x * 2])); // [2, 4, 6, 8]
console.log(arr1.flatMap(x => [x, x * 2])); // [1, 2, 2, 4, 3, 6, 4, 8]
const arr2 = ["你 好呀", "我很 好", "你 也很好"];
console.log(arr2.flatMap(item => item.split(" "))); // [["你", "好呀"],["我很", "好"],["你", "也很好"]] ==> ["你", "好呀", "我很", "好", "你", "也很好"]

// 3. String.trimStart() 用于删除字符串头部的空格，返回一个新字符串，对原字符串没有影响。
// 举例
const str = '  abc  ';
console.log(str.trimStart()); // 'abc  '

// 4. String.trimEnd() 用于删除字符串尾部的空格，返回一个新字符串，对原字符串没有影响。
// 举例
const str1 = '  abc  ';
console.log(str1.trimEnd()); // '  abc'

// 5. Object.fromEntries() 用于将键值对列表转换为一个对象。
// 举例
const entries = [['name', '张三'], ['title', 'Author']];
console.log(Object.fromEntries(entries)); // {name: "张三", title: "Author"}
const entries1 = 'name=张三&title=Author&age=18';
console.log(Object.fromEntries(entries1.split('&').map(item => item.split('=')))); // {name: "张三", title: "Author", age: "18"}

// 6. Symbol.prototype.description 用于返回一个字符串，表示该 Symbol 实例的描述。
// 举例
const s = Symbol('foo');
console.log(s.description); // foo

// 7. Function.prototype.toString() 用于返回该函数的源码。
// 举例
function foo() { }
console.log(foo.toString()); // function foo() {}

// 9. try...catch 语句的变化
// 9.1 try...catch 语句中，如果不使用 catch 语句，那么只有使用 finally 语句，才能保证代码能够执行。
// 举例
try {
  console.log('try');
} finally {
  console.log('finally');
} // try finally

// 10. JSON.stringify() 的变化
// 10.1 JSON.stringify() 的第二个参数，可以接受一个数组，用来指定哪些属性可以被序列化。
// 举例
const obj = { foo: 'bar', baz: 42 };
console.log(JSON.stringify(obj, ['foo'])); // {"foo":"bar"}
// 10.2 JSON.stringify() 的第二个参数，还可以接受一个函数，用来对序列化的属性进行转换。
// 举例
const obj1 = { foo: 'bar', baz: 42 };
console.log(JSON.stringify(obj1, (key, value) => {
  if (key === 'foo') {
    return 'abc';
  }
  return value;
})); // {"foo":"abc","baz":42}

// 11. Array.prototype.sort() 的变化
// 11.1 Array.prototype.sort() 方法默认按照字典顺序进行排序，现在可以通过传入一个比较函数，来指定排序的规则。
// 举例
const arr3 = [1, 3, 2, 5, 4];
console.log(arr3.sort((a, b) => a - b)); // [1, 2, 3, 4, 5]
