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

export const Value = ({value}) => <h3>{value}</h3>

class App extends Component {
  state = {
    value: 0,
  }

  inc = () =>{
    this.setState(inc)
  }

  dec = () =>{
    this.setState(dec);
  }
  render() {
    return (
      <div>
        <Value value={this.state.value} />
        <button onClick={this.inc}>Increment</button>
        <button onClick={this.dec}>Decrement</button>
      </div>
    );
  }
}

export default App;
