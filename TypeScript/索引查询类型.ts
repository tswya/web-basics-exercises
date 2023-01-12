type Props4 = {a:number; b:string; c:boolean}
type TypeA = Props4['a']
type MyPartial<T> = {
  [P in keyof T]? : T[P]
}