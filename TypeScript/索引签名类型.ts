interface AnyObject {
  [key: string]:number
}

let obj1:AnyObject ={
  id: 1,
  ab: 123
}

interface Obj2<Type> {
  [key: number] : Type
}
let obj2:Obj2<number> = [1, 2, 3]
obj2[0]
