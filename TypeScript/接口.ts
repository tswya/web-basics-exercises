/* interface IPerson {
  name: string
  age: number
  sayHi(): void
} */
type IPerson = {
  name: string
  age: number
  sayHi(): void
}
let person: IPerson = {
  name: 'zz',
  age: 2,
  sayHi() {}
}