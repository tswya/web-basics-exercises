interface A {
  fn: (value: number) => string
}
/* interface B extends A{
  // B会报错
  fn: (value: string) => string
} */

interface A {
  fn: (value: number) => string
}
interface B {
  fn: (value: string) => string
}
type C = A & B
/* let c:C = {
  fn(value:number | string) {
    return ''
  }
} */
let c!:C
c.fn(1)