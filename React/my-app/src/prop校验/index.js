import React from 'react'
import { createRoot } from 'react-dom/client'
import propTypes from 'prop-types'

const App = (props) => {
  const arr = props.colors
  const lis = arr.map((item, index) => <li key={index}>{item}</li>)

  return <ul>{lis}</ul>
}
App.propTypes = {
  colors: propTypes.array
}
/* ReactDOM.render(
  <App colors={['red', 'yellow', 'blue']} />,
  document.getElementById('root')
) */
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App colors={['red', 'yellow', 'blue']} />)
