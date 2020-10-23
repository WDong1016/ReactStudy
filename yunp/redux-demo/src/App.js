import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">{this.props.numValue}</h1>
        <p className="text-center">
          <button onClick={this.props.onIncrement} className="btn btn-success">Increment</button>
          <button onClick={this.props.onDecrement} className="btn btn-danger">Decrement</button>
        </p>
      </div>
    )
  }
}
