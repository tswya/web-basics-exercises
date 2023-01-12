// class Person2 {
//   readonly age: number = 18
//   constructor(age:number) {
//     this.age = age
//   }
//   // 错误演示
//   /* readonly setAge() {
//     this.age = 20
//   } */
// }

class Person2 {
  readonly age = 18;
  constructor(age:number) {
    this.age = age
  }
}

interface IPerson {
  readonly name: string
}
let obj:IPerson = {
  name: 'zz'
}

let obj:{readonly name:string} = {
  name: 'zz'
}
obj.name = 'aa'