interface ILength { length: number }
function id1<Type extends ILength>(value:Type): Type {
  console.log(value.length)
  return value
}
/* console.log(id1('abc'));
 
console.log(id1([1,2,3]))
// id1(123)
console.log(id1({length:10, name:'zz'})) */
id1('abc')
id1([1,2,3])
id1({length:10, name:'zz'})
