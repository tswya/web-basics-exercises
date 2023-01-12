type Props3 = { a: number; b: string; c: boolean }
type Type3 = {[key in keyof Props3]:number}

let t: Type3 = {
  a: 1,
  b: 2,
  c: 3
}