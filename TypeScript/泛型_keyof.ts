function getProp<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key]
}
let person = {name: 'zz', age:2}
getProp(person, 'name')
getProp(18, 'toFixed')
getProp('abc', 'split')
getProp('abc', 1) // 1表示索引
getProp(['a'], 1000)
getProp(['a'], length)
console.log('object'[0]);
