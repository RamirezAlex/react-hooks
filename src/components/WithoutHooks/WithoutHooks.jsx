import React, { Component } from 'react'

class WithoutHooks extends Component {
  state = {
    counter: 0
  }

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    return (
      <tr>
        <td>{this.props.name}: { this.state.counter }</td>
        <td><button onClick={this.incrementCounter}>Increment</button></td>
      </tr>
    )
  }
}

export default WithoutHooks
