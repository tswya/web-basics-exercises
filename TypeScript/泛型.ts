function id2<Type>(value: Type): Type {
  return value
}

const num = id2<number>(1)
const str = id2<string>('zz')

let num1 = id2(10)