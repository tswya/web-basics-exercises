import React from "react"
import ReactDOM  from "react-dom"

type State = {count: number}
class Counter extends React.Component<{}, State> {
  state:State = {
    count: 0
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (<div>
      计数器: {}
      <button onClick={this.handleClick}>+1</button>
    </div>)
  }
}
const App = () => <div><Counter /></div>
ReactDOM.render(<App />, document.getElementById('root'))