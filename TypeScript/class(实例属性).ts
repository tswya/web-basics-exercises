class Person {
  age: number
  gender = '男'
  constructor(age:number, gender:string) {
    this.age = age
    this.gender = gender
  }
}
const p = new Person(18, 'male')
console.log(p.age,p.gender);

