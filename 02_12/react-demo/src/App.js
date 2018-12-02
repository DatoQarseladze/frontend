import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export const inc = (prev) =>{
  return {
    value: prev.value + 1
  }
}

export const dec = (prev) =>{
  return {
    value: prev.value - 1
  }
}

class App extends Component {
  state = {
    count: 0,
  }

  handleIncrement = () =>{
    const count = this.state.count + 1;
    this.setState({count})
  }
  handleDecrement = () =>{
    const count = this.state.count + 1;
    this.setState({count})
  }
  handleReset = () =>{
    const count = this.state.count = 0;
    this.setState({count})
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default App;
