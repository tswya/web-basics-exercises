interface Props1 {
  id: string
  children: number[]
}

type ReadonlyProps = Readonly<Props1>
let p3:ReadonlyProps = {
  id: '1',
  children: [1,2]
} 
// p3.id = '2'