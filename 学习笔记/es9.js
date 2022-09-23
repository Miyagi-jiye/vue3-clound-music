// es9 新增特性

// 1. rest/spread 展开运算符
// 1.1 rest 展开运算符
// 举例
const obj = {
  a: 1,
  b: 2,
  c: 3
};
const { a, ...rest } = obj;
console.log(a); // 1
console.log(rest); // {b: 2, c: 3}
// 1.2 spread 展开运算符
// 举例
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5, 6]

// 2. 正则表达式
// 举例
const reg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const str = '2020-01-01';
const result = str.match(reg);
console.log(result.groups.year); // 2020
console.log(result.groups.month); // 01
console.log(result.groups.day); // 01
