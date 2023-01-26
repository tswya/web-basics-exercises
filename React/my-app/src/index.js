import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends React.Component {
  state = {
    number: 0
  }
  handleClick = () => {
    this.setState(() => {
      return {
        number: Math.floor(Math.random() * 3)
      }
    })
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.number === this.state.number) {
      return false
    }
    return true
  }
  render() {
    return (
      <Router>
        <div>
          <h1>随机数：{this.state.number}</h1>
          <button onClick={this.handleClick}>重新生成</button>
        </div>
      </Router>
    )
  }
}
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
