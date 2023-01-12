interface Props2 {
  id: string
  title: string
  children: number[]
}

type PickProps = Pick<Props2, 'id' | 'title'>
let p4: PickProps = {
  id: '1',
  title: 'hi'
} 