import React from 'react'
import ReactDOM from 'react-dom'

// 组件通讯
// class Parent extends React.Component {
//   // state = { lastName: 'zz' }
//   state = {
//     parentMsg: ''
//   }
//   getChildMsg = (data) => {
//     console.log('接收子组件传递的数据', data)
//     this.setState({
//       parentMsg: data
//     })
//   }
//   render() {
//     return (
//       <div className="parent">
//         {/* <Child name={this.state.lastName} /> */}
//         <Child getMsg={this.getChildMsg} />
//       </div>
//     )
//   }
// }
// /* const Child = (props) => {

//   return (
//     <div className="child">
//       <p>子组件，接收到父组件的数据：{props.name}</p>

//     </div>
//   )
// } */
// class Child extends React.Component {
//   state = {
//     msg: 'aa'
//   }
//   handleClick = () => {
//     this.props.getMsg(this.state.msg)
//   }
//   render() {
//     return (
//       <div className="child">
//         <button onClick={this.handleClick}>点我</button>
//       </div>
//     )
//   }
// }

// 兄弟组件间通讯
class Counter extends React.Component {
  state = {
    count: 0
  }
  onIncrement = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <Child1 count={this.state.count} />
        <Child2 onIncrement={this.onIncrement} />
      </div>
    )
  }
}
const Child1 = (props) => {
  return <h1>计数器：{props.count}</h1>
}
const Child2 = (props) => {
  return (
    <button
      onClick={() => {
        props.onIncrement()
      }}
    >
      +1
    </button>
  )
}

// ReactDOM.render(<Parent />, document.getElementById('root'))
ReactDOM.render(<Counter />, document.getElementById('root'))
