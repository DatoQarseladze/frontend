import React, { Component } from 'react';
import './App.css';
// import * as Person from './Play'
import developer from './Play'
import Counter from './Counter'

function SaySomething(props){
  return <p>{props.text}</p>
}

const styles = {color: 'red', padding: '30px', border: '1px dashed black'}

const FooComponent = (props) =>{
  return (
    <div style={{...styles}}>
      <p>{props.text}</p>
    </div>
  )
}

class App extends Component {
  randomText(){
    return `Random Text ${developer.username} ${developer.lastname}`
  }
render(){
  return( 
    <div>
      <h1>Hello World</h1>
      <h2> {this.randomText()}</h2>
      <SaySomething text='Lorem ipsum' />
      <FooComponent text='Say Something Im Giving up on u'/>
      <br/>
      <div style={{...styles}}>
        <Counter/>
      </div>
    </div>
  )
} 
}

export default App;
