type objRecord = Record<'a' | 'b' | 'c', string[]>

type RecordObj = {
  a: string[]
  b: string[]
  c: string[]
}
let obj:objRecord = {
  a: ['1'],
  b: ['2'],
  c: ['3']
}