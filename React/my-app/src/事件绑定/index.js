import React from 'react'
import ReactDOM from 'react-dom'
class App extends React.Component {
  constructor() {
    super()
    //初始化 state
    this.state = {
      count: 0
    }
  }
  handleClick(e) {
    e.preventDefault()
    console.log('触发单机事件')
  }
  render() {
    return (
      <div>
        <a href="http://www.bing.com" onClick={this.handleClick}>
          click
        </a>
        <span>--{this.state.count}</span>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1
            })
          }}
        >
          click +1
        </button>
      </div>
    )
    // <button onClick={this.handleClick}>click</button>
  }
}
//通过函数组件绑定事件
/* function App() {
  function handleClick() {
    console.log('函数组件绑定事件')
  }
  return <button onClick={handleClick}>Click</button>
} */
ReactDOM.render(<App />, document.getElementById('root'))
