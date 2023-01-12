import React from 'react'
import ReactDOM from 'react-dom'
//条件渲染
// const isLoading = true
// if-else
/* const loadData = () => {
  if(isLoading) {
    return <div>loading</div>
  }
  return <div>加载完成</div>
} */

//三元表达式
/* const loadData = () => {
  return isLoading ? <div>loading</div> : <div>加载完成</div>
} */

//逻辑与运算符
/* const loadData = () => {
  return isLoading && <div>loading</div>
}
const title = <h1>{loadData()}</h1> */
// const title = React.createElement('h1', null, 'Hello React!')
/* const name = 'Jack'
const dv = <div>div元素</div>
const sayHi = () => 'Hi!'
const title = (
  <h1 className="title">
    Hello JSX
    <p>{name}</p>
    <p>{3 > 5}</p>
    <p>{3 + 2}</p>
    <p>{sayHi()}</p>
    {dv}
  </h1>
) */
// ReactDOM.render(title, document.getElementById('root'))
// 列表渲染
const arr = [
  { id: 1, name: 'aa' },
  { id: 2, name: 'bb' },
  { id: 3, name: 'cc' }
]
const list = (
  <ul>
    {arr.map((item) => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
)
ReactDOM.render(list, document.getElementById('root'))
